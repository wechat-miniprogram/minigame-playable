import globalConfig from './config';
import { UPDATE_TIME, VERSION } from './const';

import { fixCreateImage } from './createImage';
import { fixGetFileSystemManager } from './getFileSystemManager';
import { fixGetOpenDataContext } from './getOpenDataContext';
import { fixGetSystemInfoSync } from './getSystemInfoSync';
import { fixWXWebAssembly } from './WXWebAssembly';
import { fixLoadFont } from './loadFont';
import { fixCreateInnerAudioContext } from './createInnerAudioContext';
import { fixGlobalAPI } from './global';
import { fixCreateCanvas } from './createCanvas';
import { Logger } from './logger';
interface IAdapterConfig {
  userPathPrefix: string;
}

export class PlayableAdapter {
  constructor(config: IAdapterConfig) {
    const { userPathPrefix } = config;

    Logger.info('config', config)

    globalConfig.userPathPrefix = userPathPrefix;

    fixGlobalAPI();
    fixCreateImage();
    fixGetSystemInfoSync();
    fixGetOpenDataContext();
    fixGetFileSystemManager();
    fixWXWebAssembly();
    fixLoadFont();
    fixCreateInnerAudioContext();
    fixCreateCanvas();
    // 调用getSystemInfoSync时会设置devicePixelRatio，先触发一次
    wx.getSystemInfoSync();

    Logger.info(`v${VERSION}, ${UPDATE_TIME} inited!`);
  }
}
