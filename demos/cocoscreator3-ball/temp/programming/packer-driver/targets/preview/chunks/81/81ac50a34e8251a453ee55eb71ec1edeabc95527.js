System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, director, Director, game, Canvas, Camera, EDITOR, _crd, customLayerMask, builtinLayerMask, setParentEngine;

  function setChildrenLayer(node, layer) {
    for (var i = 0, l = node.children.length; i < l; i++) {
      node.children[i].layer = layer;
      setChildrenLayer(node.children[i], layer);
    }
  }

  function getCanvasCameraLayer(node) {
    var layer = 0;
    var canvas = node.getComponent(Canvas);

    if (canvas && canvas.cameraComponent) {
      if (canvas.cameraComponent.visibility & canvas.node.layer) {
        layer = canvas.node.layer;
      } else {
        layer = canvas.cameraComponent.visibility & ~(canvas.cameraComponent.visibility - 1);
      }

      return layer;
    }

    if (node.parent) {
      layer = getCanvasCameraLayer(node.parent);
    }

    return layer;
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      director = _cc.director;
      Director = _cc.Director;
      game = _cc.game;
      Canvas = _cc.Canvas;
      Camera = _cc.Camera;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a28c7NYk2dNQLH88xeZsOad", "migrate-canvas", undefined);
      /**
       * UI 的渲染在 v3.0 变为使用 node.layer 来判断可见性，为了保证老版本项目升级后表现一致，
       * Creator 会在运行时动态分配一个未使用的 layer 给常驻节点的 UI，避免常驻节点的 UI 与场景中
       * 的其他 UI 的 layer 发生冲突，当你确定不会发生冲突时，你可以移除此脚本.
       * 
       * UI rendering has changed in v3.0 to use node.layer to determine visibility. 
       * To ensure consistent performance after upgrading old projects. 
       * Creator will dynamically assign an unused layer to the UI node in the persist node at 
       * runtime to avoid conflicts between the layer of UI in the persist node and the 
       * layer of other UI in the scene. You can remove this script when you 
       * are sure there is no conflict
       */


      __checkObsolete__(['_decorator', 'Node', 'director', 'Director', 'game', 'BaseNode', 'Canvas', 'Camera']);

      customLayerMask = 0x000fffff;
      builtinLayerMask = 0xfff00000;
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
        var _director$getScene, _director$getScene2, _director$getScene3;

        var roots = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.children;
        var allCanvases = (_director$getScene2 = director.getScene()) == null ? void 0 : _director$getScene2.getComponentsInChildren(Canvas);

        if (allCanvases.length <= 1) {
          return;
        }

        allCanvases = allCanvases.filter(x => !!x.cameraComponent);
        var allCameras = (_director$getScene3 = director.getScene()) == null ? void 0 : _director$getScene3.getComponentsInChildren(Camera);
        var usedLayer = 0;
        allCameras.forEach(x => usedLayer |= x.visibility & customLayerMask);
        var persistCanvas = [];

        for (var i = 0, l = roots.length; i < l; i++) {
          var root = roots[i];

          if (!game.isPersistRootNode(root)) {
            continue;
          }

          var canvases = root.getComponentsInChildren(Canvas);

          if (canvases.length === 0) {
            continue;
          }

          persistCanvas.push(...canvases.filter(x => !!x.cameraComponent));
        }

        persistCanvas.forEach(val => {
          var isLayerCollided = allCanvases.find(x => x !== val && x.cameraComponent.visibility & val.cameraComponent.visibility & customLayerMask);

          if (isLayerCollided) {
            var availableLayers = ~usedLayer;
            var lastAvailableLayer = availableLayers & ~(availableLayers - 1);
            val.cameraComponent.visibility = lastAvailableLayer | val.cameraComponent.visibility & builtinLayerMask;
            setChildrenLayer(val.node, lastAvailableLayer);
            usedLayer |= availableLayers;
          }
        });
      });
      setParentEngine = Node.prototype.setParent;

      if (!EDITOR) {
        Node.prototype.setParent = function (value, keepWorldTransform) {
          setParentEngine.call(this, value, keepWorldTransform);

          if (!value) {
            return;
          } // find canvas


          var layer = getCanvasCameraLayer(this);

          if (layer) {
            this.layer = layer;
            setChildrenLayer(this, layer);
          }
        };
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=81ac50a34e8251a453ee55eb71ec1edeabc95527.js.map