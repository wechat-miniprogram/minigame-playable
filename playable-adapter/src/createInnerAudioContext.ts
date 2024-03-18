
import globalConfig from './config';

export function fixCreateInnerAudioContext() {
  const originApi = wx.createInnerAudioContext
  Reflect.defineProperty(wx, 'createInnerAudioContext', {
    value() {
      const innerAudio = originApi()

      // 获取原有属性的描述符
      const originalDescriptor = Object.getOwnPropertyDescriptor(innerAudio, 'src') as PropertyDescriptor
      /**
       * 低版本的试玩基础库音频实例的属性是不能通过 Object.defineProperty 重定义的
       * 高版本基础库修复了这个问题，因此针对低版本基础库做一个提示
       */
      if (!originalDescriptor.configurable) {
        console.error(`[playable-adapter]: 当前基础库音频不可适配，请手动给音频的src加上独立分包的前缀${globalConfig.userPathPrefix}!`);
      } else {
        Object.defineProperty(innerAudio, 'src', {
          get() {
            return originalDescriptor.get!.call(this);
          },
          set(value) {
            // 如果已经手动加过前缀了，不需要重复添加
            if (value.indexOf(globalConfig.userPathPrefix) === -1) {
              originalDescriptor.set!.call(this, globalConfig.userPathPrefix + value);
            } else {
              originalDescriptor.set!.call(this, value);
            }
          }
        });
      }

      return innerAudio;
    },
    configurable: true,
  })
}
