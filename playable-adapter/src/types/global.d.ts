export {}

declare global {
  // 通用回调
  type Callback = (...args: any[]) => any;
  // 通用文件参数声明
  type FsParams = [any, never, any, any];
  // contexttype
  type ContextType = Parameters<WechatMinigame.Canvas['getContext']>[0];
  // WXWebAssembly的通用参数声明
  type WasmParams = [any, any];
}
