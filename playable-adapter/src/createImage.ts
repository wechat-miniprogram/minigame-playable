
import globalConfig from './config'
export const imageMap = new WeakMap()

export class ImageWrapper {
  public __image__ = true;
  public tagName = 'IMG';
  public nodeName = 'IMG';

  constructor(img: HTMLImageElement) {
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
    const image = imageMap.get(this)
    return image.src
  }

  set src(src: string) {
    const image = imageMap.get(this);

    // base64图片不修改src
    if (src && !src.includes('data:')) {
      image.src = globalConfig.userPathPrefix + src;
    } else {
      image.src = src
    }
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

  addEventListener() {
    // 需要将 listener 套上一层替换 event.target
    const img = imageMap.get(this)
    img.addEventListener(...arguments)
  }

  removeEventListener() {
    const img = imageMap.get(this)
    img.removeEventListener(...arguments)
  }
}

export function fixCreateImage() {
  // 缓存旧的方法
  let originAPI = wx.createImage;

  Object.defineProperty(wx, 'createImage', {
    value() {
      const image = originAPI();

      return new ImageWrapper(image);
    }
  });
}
