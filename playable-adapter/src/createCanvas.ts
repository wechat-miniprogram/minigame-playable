import { imageMap, ImageWrapper } from './createImage';

function hookCanvas2d(originalContext: CanvasRenderingContext2D) {
  const drawApis = ['drawImage'];
  drawApis.forEach((key) => {
    const originApi = (originalContext as any)[key]
    Reflect.defineProperty(originalContext, key, {
      value(...args: any[]) {
        if (args && args[0].__image__) {
          args[0] = imageMap.get(args[0])
        }
        originApi.call(originalContext, ...args)
      },
      configurable: true,
    })
  })
}

function hookWebgl(originalContext: WebGLRenderingContext | WebGL2RenderingContext) {
  const drawApis = ['texImage2D', 'texSubImage2D', 'compressedTexImage2D', 'compressedTexImage3D', 'compressedTexSubImage2D'];
  drawApis.forEach((key: string) => {
    const originApi = (originalContext as any)[key]
    Reflect.defineProperty(originalContext, key, {
      value(...args: any[]) {
        // texImage2D，图片数据可能作为第九个参数，也可能作为第六个参数
        // texSubImage2D, 图片参数为第九个或第七个参数
        // compressedTexImage2D, 图片参数作为第7,8个参数
        // compressedTexSubImage2D, 图片作为第8个参数
        if (args) {
          if (args[5] && args[5].__image__) {
            args[5] = imageMap.get(args[5])
          }
          if (args[6] && args[6].__image__) {
            args[6] = imageMap.get(args[6])
          }
          if (args[7] && args[7].__image__) {
            args[7] = imageMap.get(args[7])
          }
          if (args[8] && args[8].__image__) {
            args[8] = imageMap.get(args[8])
          }
        }
        originApi.call(originalContext, ...args)
      },
      configurable: true,
    })
  })
}

export function fixCreateCanvas() {
  const originApi = wx.createCanvas
  Reflect.defineProperty(wx, 'createCanvas', {
    value() {
      const ret = originApi()
      const originGetContext = ret.getContext
      ret.getContext = function (contextType: ContextType, contextAttributes?: WechatMinigame.ContextAttributes) {
        const originalContext = originGetContext.apply(ret, [contextType, contextAttributes]);
        if (contextType === '2d') {
          hookCanvas2d(originalContext);
        }
        if (contextType === 'webgl' || contextType === 'webgl2') {
          hookWebgl(originalContext);
        }
        return originalContext;
      };
      return ret;
    },
    configurable: true,
  })
}