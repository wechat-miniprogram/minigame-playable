import globalConfig from './config';

import { fixCreateImage } from './createImage';
import { fixGetFileSystemManager } from './getFileSystemManager';
import { fixGetOpenDataContext } from './getOpenDataContext';
import { fixGetSystemInfoSync } from './getSystemInfoSync';
import { fixWXWebAssembly } from './WXWebAssembly';
import { fixLoadFont } from './loadFont';
import { fixCreateInnerAudioContext } from './createInnerAudioContext';
import { fixGlobalAPI } from './global';
import { fixCreateCanvas } from './createCanvas';
interface IAdapterConfig {
  userPathPrefix: string;
}

export class PlayableAdapter {
  constructor(config: IAdapterConfig) {
    const { userPathPrefix } = config;

    console.log('config', config)

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

    console.log(`[playable-adapter]: inited!`);
  }
}
