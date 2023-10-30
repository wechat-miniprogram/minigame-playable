import globalConfig from './config'

export function fixLoadFont() {
  const originApi = wx.loadFont;
  Reflect.defineProperty(wx, 'loadFont', {
    value(path: string) {
      if (originApi) {
        return originApi(globalConfig.userPathPrefix + path)
      } else {
        // 真机没有loadFont接口，假设接口调用成功
        return ''
      }
    },
    configurable: true,
  })
}