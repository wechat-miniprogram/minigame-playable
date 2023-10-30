
export function fixGetOpenDataContext() {
  // cocos 依赖这个 api 来判断小游戏环境，mock 一下
  wx.getOpenDataContext = () => { };
}
