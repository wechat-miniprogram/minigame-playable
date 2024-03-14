import globalConfig from './config'

export function fixWXWebAssembly() {
  const originApi = WXWebAssembly.instantiate
  Object.defineProperty(WXWebAssembly, 'instantiate', {
    value(...args: WasmParams) {
      if (args && args[0]) {
        args[0] = globalConfig.userPathPrefix + args[0]
      }
      return originApi(...args)
    }
  })
}
