
import globalConfig from './config';

export function fixCreateInnerAudioContext() {
  const originApi = wx.createInnerAudioContext
  Reflect.defineProperty(wx, 'createInnerAudioContext', {
    value() {
      const innerAudio = originApi()
      const ownProp = Object.getOwnPropertyNames(innerAudio)
      const audioProto = Object.getPrototypeOf(innerAudio)

      let srcDesc
      if (ownProp.includes('src')) {
        srcDesc = Reflect.getOwnPropertyDescriptor(innerAudio, 'src')
      } else {
        srcDesc = Reflect.getOwnPropertyDescriptor(audioProto, 'src')
      }

      const audioProxy = new Proxy({}, {
        set(t, p, v, r) {
          if (p === 'src') {
            v = globalConfig.userPathPrefix + v;

          }
          return Reflect.set(innerAudio, p, v, innerAudio)
        },
        get(t, p, r) {
          return Reflect.get(innerAudio, p, innerAudio)
        }
      })
      return audioProxy
    },
    configurable: true,
  })
}
