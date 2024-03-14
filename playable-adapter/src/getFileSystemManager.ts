import globalConfig from './config';

// 真机USER_DATA_PATH是'/'
let userPathPrefix = wx.env.USER_DATA_PATH;
console.log('user path prefix, ', userPathPrefix)

const originApi = wx.getFileSystemManager

export function fixGetFileSystemManager() {
  Object.defineProperty(wx, 'getFileSystemManager', {
    value() {
      const fs = originApi();
      (Object.keys(fs) as Array<keyof WechatMinigame.FileSystemManager>).forEach(key => {
        const originFsApi = fs[key]
        Object.defineProperty(fs, key, {
          value(...args: FsParams) {
            // 同步接口大部分文件路径作为第一个参数传入
            if (key.includes('Sync')) {
              if (args && typeof args[0] === 'string' && !args[0].startsWith(userPathPrefix)) {
                args[0] = globalConfig.userPathPrefix + args[0]
              }
            } else {
              // 异步接口
              if (args[0]) {
                // 路径有filePath和path两种
                if (args[0].filePath) {
                  args[0].filePath = globalConfig.userPathPrefix + args[0].filePath
                }
                if (args[0].path) {
                  args[0].path = globalConfig.userPathPrefix + args[0].path
                }
              }
            }
            return originFsApi(...args)
          },
          configurable: true,
        })
      })
      // 引擎需要access接口，但真机不支持，手动适配，并始终返回success
      Reflect.defineProperty(fs, 'access', {
        value(args: WechatMinigame.AccessOption) {
          if (args.success && typeof args.success === 'function') {
            args.success({errMsg: 'access:ok', errCode: 0})
          }
        },
        configurable: true,
      })
      // 引擎会向用户目录写缓存，加个空实现避免报错
      Reflect.defineProperty(fs, 'writeFileSync', {
        value(args: any[]) {

        },
        configurable: true,
      })
      return fs
    },
    configurable: true,
  })
}