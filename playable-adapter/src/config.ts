/**
 * 一些全局通用配置维护
 */
class GlobalConfig {
  public debug: boolean
  public userPathPrefix = 'playableDemo/'

  constructor() {
    this.debug = true    
  }
}

export default new GlobalConfig()
