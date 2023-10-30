
export function fixGetSystemInfoSync() {
  const originApi = wx.getSystemInfoSync
  Reflect.defineProperty(wx, 'getSystemInfoSync', {
    value() {
      const ret = originApi()
      // 开发者工具上有platform，真机没有
      if (!ret.platform) {
        ret.platform = ret.model && ret.model.includes('iPhone') ? 'ios' : 'android'
      }
      return ret
    },
    configurable: true,
  })
}
