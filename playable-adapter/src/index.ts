import globalConfig from './config';

import { fixCreateImage } from './createImage';
import { fixGetFileSystemManager } from './getFileSystemManager';
import { fixGetOpenDataContext } from './getOpenDataContext';
import { fixGetSystemInfoSync } from './getSystemInfoSync';
import { fixWXWebAssembly } from './WXWebAssembly';
import { fixLoadFont } from './loadFont';
import { fixCreateInnerAudioContext } from './createInnerAudioContext';
import { fixDeviceAPI } from './device';
import { fixCreateCanvas } from './createCanvas';
interface IAdapterConfig {
  userPathPrefix: string;
}

export class PlayableAdapter {
  constructor(config: IAdapterConfig) {
    const { userPathPrefix } = config;

    console.log('config', config)

    globalConfig.userPathPrefix = userPathPrefix;

    fixCreateImage();
    fixGetSystemInfoSync();
    fixGetOpenDataContext();
    fixGetFileSystemManager();
    fixWXWebAssembly();
    fixLoadFont();
    fixCreateInnerAudioContext();
    fixDeviceAPI();
    fixCreateCanvas();

    console.log(`[playable-adapter]: inited!`);
  }
}
