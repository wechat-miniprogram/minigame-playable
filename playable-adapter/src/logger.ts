enum LogLevel {
  None = 0,
  Event = 1,
  Error = 2,
  Warn = 3,
  Info = 4,
  Debug = 5,
}

export class Logger {
  private static logLevel = LogLevel.Info;

  public static error(...message: any[]): void {
    if (Logger.logLevel >= LogLevel.Error) {
      console.error('[playable-adapter][error]', ...message);
    }
  }

  public static warn(...message: any[]): void {
    if (Logger.logLevel >= LogLevel.Warn) {
      console.warn('[playable-adapter][warn]', ...message);
    }
  }

  public static info(...message: any[]): void {
    if (Logger.logLevel >= LogLevel.Info) {
      console.info('[playable-adapter][info]', ...message);
    }
  }

  public static debug(...message: any[]): void {
    if (Logger.logLevel >= LogLevel.Debug) {
      console.log('[playable-adapter][debug]', ...message);
    }
  }

  public static setLogLevel(logLevel: LogLevel): void {
    Logger.logLevel = logLevel;
  }

  public static getLogLevel(): LogLevel {
    return Logger.logLevel;
  }
}
