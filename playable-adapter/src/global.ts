
export function fixGlobalAPI() {
  // 真机没有以下接口，需要适配
  if (!wx.onHide) {
    wx.onHide = function() {}
  }
  if (!wx.onShow) {
    wx.onShow = function(cb: Callback) {
      // 注册onShow就立即回调
      if (cb) {
        cb()
      }
    }
  }
  const timeLabel = new Map()
  let latestTime = 0;
  // DOM和小游戏类型定义冲突
  if (!(console as any).time) {
    (console as any).time = function(label: string) {
      if (label) {
        timeLabel.set(label, Date.now())
      }
      latestTime = Date.now()
    }
  }
  if (!(console as any).timeEnd) {
    (console as any).timeEnd = function(label: string) {
      const t = Date.now()
      let delta = t - latestTime;
      if (label) {
        delta = t - timeLabel.get(label)
        timeLabel.delete(label)
      }
      console.log(`${label}: ${delta} ms`)
      return `${label}: ${delta} ms`
    }
  }
  if (!wx.onDeviceOrientationChange) {
    Reflect.defineProperty(wx, 'onDeviceOrientationChange', {
      value() {},
      configurable: true,
    })
  }
}
