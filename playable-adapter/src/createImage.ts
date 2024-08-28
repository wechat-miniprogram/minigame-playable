
import globalConfig from './config'
export const imageMap = new WeakMap()

export class ImageWrapper {
  public __image__ = true;
  public tagName = 'IMG';
  public nodeName = 'IMG';
  public _src = ''

  constructor(img: WechatMinigame.Image) {
    imageMap.set(this, img)
  }

  get width() {
    return imageMap.get(this).width;
  }

  set width(value: number) {
    imageMap.get(this).width = value;
  }

  get height() {
    return imageMap.get(this).height;
  }

  set height(value: number) {
    imageMap.get(this).height = value;
  }

  get complete() {
    return imageMap.get(this).complete;
  }

  set complete(value: number) {
    imageMap.get(this).complete = value;
  }

  get src() {
    return this._src
  }

  set src(src: string) {
    const image = imageMap.get(this);

    // base64图片不修改src
    if (src && !src.includes('data:')) {
      image.src = globalConfig.userPathPrefix + src;
    } else {
      image.src = src
    }
    // laya引擎在加载图集的时候，会重复加载同一张图，这时候需要返回未 prefix 的 URL
    this._src = src
  }

  get onload() {
    return imageMap.get(this).onload;
  }

  set onload(value: Callback) {
    imageMap.get(this).onload = value;
  }

  get onerror() {
    return imageMap.get(this).onerror;
  }

  set onerror(value: Callback) {
    imageMap.get(this).onerror = value;
  }

  addEventListener(...args: any[]) {
    // 需要将 listener 套上一层替换 event.target
    const img = imageMap.get(this)
    img.addEventListener(...args)
  }

  removeEventListener(...args: any[]) {
    const img = imageMap.get(this)
    img.removeEventListener(...args)
  }
}

export function fixCreateImage() {
  // 缓存旧的方法
  const originAPI = wx.createImage;

  Object.defineProperty(wx, 'createImage', {
    value() {
      const image = originAPI();

      return new ImageWrapper(image);
    }
  });
}
