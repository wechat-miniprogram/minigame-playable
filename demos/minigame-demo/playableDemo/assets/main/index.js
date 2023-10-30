System.register("chunks:///main.js", ['cc'], function () {
  var cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component, Director, Camera, game, Vec3, AudioClip, AudioSource, NodePool, Prefab, ParticleUtils, find, Animation, ParticleSystem, MeshRenderer, WidgetComponent, SpriteComponent;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
      Director = module.Director;
      Camera = module.Camera;
      game = module.game;
      Vec3 = module.Vec3;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      NodePool = module.NodePool;
      Prefab = module.Prefab;
      ParticleUtils = module.ParticleUtils;
      find = module.find;
      Animation = module.Animation;
      ParticleSystem = module.ParticleSystem;
      MeshRenderer = module.MeshRenderer;
      WidgetComponent = module.WidgetComponent;
      SpriteComponent = module.SpriteComponent;
    }],
    execute: function () {
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;

        _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];

        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }

        return (hint === "string" ? String : Number)(input);
      }

      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");

        return typeof key === "symbol" ? key : String(key);
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "a28c7NYk2dNQLH88xeZsOad", "migrate-canvas", undefined);

      var customLayerMask = 0x000fffff;
      var builtinLayerMask = 0xfff00000;
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        var _director$getScene, _director$getScene2, _director$getScene3;

        var roots = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.children;
        var allCanvases = (_director$getScene2 = director.getScene()) == null ? void 0 : _director$getScene2.getComponentsInChildren(Canvas);

        if (allCanvases.length <= 1) {
          return;
        }

        allCanvases = allCanvases.filter(function (x) {
          return !!x.cameraComponent;
        });
        var allCameras = (_director$getScene3 = director.getScene()) == null ? void 0 : _director$getScene3.getComponentsInChildren(Camera);
        var usedLayer = 0;
        allCameras.forEach(function (x) {
          return usedLayer |= x.visibility & customLayerMask;
        });
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

          persistCanvas.push.apply(persistCanvas, canvases.filter(function (x) {
            return !!x.cameraComponent;
          }));
        }

        persistCanvas.forEach(function (val) {
          var isLayerCollided = allCanvases.find(function (x) {
            return x !== val && x.cameraComponent.visibility & val.cameraComponent.visibility & customLayerMask;
          });

          if (isLayerCollided) {
            var availableLayers = ~usedLayer;
            var lastAvailableLayer = availableLayers & ~(availableLayers - 1);
            val.cameraComponent.visibility = lastAvailableLayer | val.cameraComponent.visibility & builtinLayerMask;
            setChildrenLayer(val.node, lastAvailableLayer);
            usedLayer |= availableLayers;
          }
        });
      });

      function setChildrenLayer(node, layer) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          node.children[i].layer = layer;
          setChildrenLayer(node.children[i], layer);
        }
      }

      var setParentEngine = Node.prototype.setParent;
      {
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

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "d9bbf8RNxZP/qHAzCKjmpIn", "constants", undefined); //跳板类型


      var BOARD_TYPE = /*#__PURE__*/function (BOARD_TYPE) {
        BOARD_TYPE[BOARD_TYPE["NORMAL"] = 0] = "NORMAL";
        BOARD_TYPE[BOARD_TYPE["SPRING"] = 1] = "SPRING";
        BOARD_TYPE[BOARD_TYPE["DROP"] = 2] = "DROP";
        BOARD_TYPE[BOARD_TYPE["GIANT"] = 3] = "GIANT";
        BOARD_TYPE[BOARD_TYPE["SPRINT"] = 4] = "SPRINT";
        return BOARD_TYPE;
      }(BOARD_TYPE || {});

      var GAME_STATE = /*#__PURE__*/function (GAME_STATE) {
        GAME_STATE[GAME_STATE["READY"] = 1] = "READY";
        GAME_STATE[GAME_STATE["PLAYING"] = 2] = "PLAYING";
        GAME_STATE[GAME_STATE["PAUSE"] = 3] = "PAUSE";
        GAME_STATE[GAME_STATE["OVER"] = 4] = "OVER";
        return GAME_STATE;
      }(GAME_STATE || {});

      var GAME_EVENT = /*#__PURE__*/function (GAME_EVENT) {
        GAME_EVENT["RESTART"] = "restart";
        GAME_EVENT["REVIVE"] = "revive";
        GAME_EVENT["ADDSCORE"] = "add-score";
        GAME_EVENT["DYING"] = "dying";
        GAME_EVENT["HIDETIPS"] = "hide-tips";
        return GAME_EVENT;
      }(GAME_EVENT || {});

      var JUMP_STATE = /*#__PURE__*/function (JUMP_STATE) {
        JUMP_STATE[JUMP_STATE["JUMPUP"] = 1] = "JUMPUP";
        JUMP_STATE[JUMP_STATE["FALLDOWN"] = 2] = "FALLDOWN";
        JUMP_STATE[JUMP_STATE["SPRINT"] = 3] = "SPRINT";
        return JUMP_STATE;
      }(JUMP_STATE || {});

      var Constants = function Constants() {};

      Constants.COEFF_POS_BALL = 8 / 360;
      Constants.PLAYER_MAX_DOWN_FRAMES = 40; // 最大下落帧数

      Constants.MAX_SCORE = 0; // 历史最高
      // score

      Constants.SCORE_BOARD_CENTER = 2; // 小球靠近跳板圆心的分数

      Constants.SCORE_BOARD_NOT_CENTER = 1; // 小球跳入非跳板圆心的分数
      // board

      Constants.BOARD_INIT_POS = new Vec3(0, 10, 0); // 跳板初始位置

      Constants.BOARD_NUM = 6; // 跳板初始个数

      Constants.BOARD_NEW_INDEX = 2; // 每次新增两个跳板

      Constants.BOARD_HEIGTH = 0.25; // 跳板厚度

      Constants.BOARD_RADIUS = 1.5; // 跳板半径

      Constants.BOARD_HEIGTH_SCALE_DROP = 0.5; // 掉落板厚度缩放比例

      Constants.BOARD_RADIUS_SCALE_GIANT = 2.8; // 大跳板缩放比例

      Constants.BOARD_GAP = 4.3; // 正常板间隔高度

      Constants.BOARD_GAP_SPRING = 9; // 弹簧板间隔高度

      Constants.BOARD_GAP_SPRINT = 192; // 冲刺板间隔高度

      Constants.BOARD_SCALE_GIANT = 2.8; // 大跳板缩放比例

      Constants.SCENE_MAX_OFFSET_X = 3.5; // 小球最大横向移动距离

      Constants.BOARD_TYPE = BOARD_TYPE; // 跳板类型枚举

      Constants.BOARD_DROP_FRAMES = 40; // 掉落板下落帧数

      Constants.BOARD_DROP_STEP = 0.5; // 掉落板每帧下落距离

      Constants.BOARD_RADIUS_CENTER = 0.35; // 跳板圆心半径，小球根据距离圆心远近增加不同分数

      Constants.BOARD_SPRING_FRAMES = 10;
      Constants.BOARD_WAVE_FRAMES = 16; // 板子波动帧率

      Constants.BOARD_WAVE_INNER_START_FRAMES = 8;
      Constants.BOARD_WAVE_INNER_STEP = 0.12 * 2;
      Constants.BOARD_WAVE_STEP = 0.15 * 15;
      Constants.BOARD_MOVING_STEP = 0.03; // 移动板移动速度

      Constants.SPRING_HEIGHT = 0.2;
      Constants.SPRING_HELIX_STEP = 0.5;
      Constants.SPRING_HELIX_STEP_SPIRNT = 1.2;
      Constants.SPRING_TOP_STEP = 0.25;
      Constants.SPRING_TOP_STEP_SPRINT = 0.5;
      Constants.WAVE_OFFSET_Y = 0.13 / 2; // camera

      Constants.CAMERA_INIT_POS = new Vec3(0, 15, 22); // 相机初始位置

      Constants.CAMERA_INIT_ROT = new Vec3(-11, 0, 0); // 相机初始旋转

      Constants.CAMERA_MOVE_X_FRAMES = 20; // 相机横向偏移比例

      Constants.CAMERA_MOVE_Y_FRAMES = 15; // 相机纵向偏移比例

      Constants.CAMERA_MOVE_Y_FRAMES_SPRING = 23; // 弹簧跳板纵向偏移比例

      Constants.CAMERA_MOVE_MINI_ERR = 0.02; // 相机位置最小误差

      Constants.CAMERA_OFFSET_Y = 10;
      Constants.CAMERA_OFFSET_Y_SPRINT = 15;
      Constants.BOARD_BUMP_FRAMES = 10;
      Constants.BOARD_BUMP_STEP = [-0.15, -0.1, -0.07, -0.02, -0.003, 0.003, 0.02, 0.07, 0.1, 0.15]; // game

      Constants.GAME_STATE = GAME_STATE; // 游戏状态枚举

      Constants.GAME_EVENT = GAME_EVENT; // 游戏事件枚举
      // ball

      Constants.BALL_RADIUS = 0.5; // 球体半径

      Constants.BALL_JUMP_STATE = JUMP_STATE; // 小球跳跃状态枚举

      Constants.BALL_JUMP_FRAMES = 20; // 正常跳跃帧数

      Constants.BALL_JUMP_FRAMES_SPRING = 27; // 弹簧板跳跃帧数

      Constants.BALL_JUMP_FRAMES_SPRINT = 240; // 冲刺板跳跃帧数

      Constants.BALL_JUMP_STEP = [0.8, 0.6, 0.5, 0.4, 0.3, 0.2, 0.15, 0.1, 0.05, 0.03]; // 正常跳跃步长

      Constants.BALL_JUMP_STEP_SPRING = [1.2, 0.8, 0.6, 0.4, 0.3, 0.2, 0.15, 0.1, 0.05]; // 弹簧跳跃步长

      Constants.BALL_JUMP_STEP_SPRINT = 0.8; // 冲刺跳跃步长

      Constants.BALL_SPRINT_STEP_Y = 10; //
      // diamond

      Constants.DIAMOND_NUM = 10; // 钻石复用数量

      Constants.DIAMOND_PIECE_NUM = 10;
      Constants.DIAMOND_RADIUS = 0.3;
      Constants.DIAMOND_ROTATE_STEP_Y = 1.5;
      Constants.DIAMOND_SCORE = 1;
      Constants.DIAMOND_SCORE_AREA = 0.6;
      Constants.DIAMOND_SPRINT_SCORE_AREA = 1;
      Constants.DIAMOND_SPRINT_STEP_Y = 4;
      Constants.DIAMOND_START_FRAME = 6;
      Constants.normalDt = 1 / 60;

      cclegacy._RF.pop();

      var _dec$1, _dec2$1, _dec3$1, _class$1, _class2$1, _descriptor$1, _descriptor2$1;

      cclegacy._RF.push({}, "52ff6Qg0MlJaaUpLNS1HPTJ", "audio-manager", undefined);

      var ccclass$1 = _decorator.ccclass,
          property$1 = _decorator.property;
      var AudioManager = (_dec$1 = ccclass$1("AudioManager"), _dec2$1 = property$1(AudioClip), _dec3$1 = property$1(AudioClip), _dec$1(_class$1 = (_class2$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManager, _Component);

        function AudioManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "bg", _descriptor$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "click", _descriptor2$1, _assertThisInitialized(_this));

          _this.audioComp = null;
          return _this;
        }

        var _proto = AudioManager.prototype;

        _proto.start = function start() {
          this.audioComp = this.getComponent(AudioSource);
        };

        _proto.playSound = function playSound(play) {
          if (play === void 0) {
            play = true;
          }

          if (!play) {
            this.audioComp.stop();
            return;
          }

          this.audioComp.clip = this.bg;
          this.audioComp.play();
        };

        _proto.playClip = function playClip() {
          this.audioComp.playOneShot(this.click);
        };

        return AudioManager;
      }(Component), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "bg", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "click", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$1)) || _class$1);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "dddce/2a/tOSLUiRKNMAQVd", "utils", undefined);

      var ccclass$2 = _decorator.ccclass,
          property$2 = _decorator.property;
      var utils = {
        getDiffCoeff: function getDiffCoeff(e, t, a) {
          return (a * e + 1) / (1 * e + ((a + 1) / t - 1));
        },
        getRandomInt: function getRandomInt(min, max) {
          var r = Math.random();
          var rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        }
      };

      cclegacy._RF.pop();

      var _dec$2, _class$2;

      cclegacy._RF.push({}, "f92c3xOcsdMEKh7W/84QPrD", "pool-manager", undefined);

      var ccclass$3 = _decorator.ccclass,
          property$3 = _decorator.property;
      var PoolManager = (_dec$2 = ccclass$3("PoolManager"), _dec$2(_class$2 = /*#__PURE__*/function () {
        function PoolManager() {
          this.dictPool = {};
          this.dictPrefab = {};
        }

        var _proto = PoolManager.prototype;
        /**
         * 根据预设从对象池中获取对应节点
         */

        _proto.getNode = function getNode(prefab, parent) {
          var name = prefab.data.name;
          this.dictPrefab[name] = prefab;
          var node = null;

          if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this.dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            //没有对应对象池，创建他！
            var _pool = new NodePool();

            this.dictPool[name] = _pool;
            node = instantiate(prefab);
          }

          node.parent = parent;
          return node;
        }
        /**
         * 将对应节点放回对象池中
         */
        ;

        _proto.putNode = function putNode(node) {
          var name = node.name;
          var pool = null;

          if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this.dictPool[name];
          } else {
            //没有对应对象池，创建他！
            pool = new NodePool();
            this.dictPool[name] = pool;
          }

          pool.put(node);
        }
        /**
         * 根据名称，清除对应对象池
         */
        ;

        _proto.clearPool = function clearPool(name) {
          if (this.dictPool.hasOwnProperty(name)) {
            var pool = this.dictPool[name];
            pool.clear();
          }
        };

        _createClass(PoolManager, null, [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new PoolManager();
            return this._instance;
          }
        }]);

        return PoolManager;
      }()) || _class$2);

      cclegacy._RF.pop();

      var _dec$3, _dec2$2, _dec3$2, _dec4$1, _class$3, _class2$2, _descriptor$2, _descriptor2$2, _descriptor3$1;

      cclegacy._RF.push({}, "900c8pQ81tCcrbRdvi9SxTB", "ball", undefined);

      var ccclass$4 = _decorator.ccclass,
          property$4 = _decorator.property; // 局部 vec3 变量复用

      var _tempPos = new Vec3();

      var Ball = (_dec$3 = ccclass$4("Ball"), _dec2$2 = property$4(Prefab), _dec3$2 = property$4({
        type: Prefab
      }), _dec4$1 = property$4({
        type: Prefab
      }), _dec$3(_class$3 = (_class2$2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ball, _Component);

        function Ball() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "diamondParticlePrefab", _descriptor$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scoreAniPrefab", _descriptor2$2, _assertThisInitialized(_this)); // @property({ type: Prefab })
          // trail01Prefab: Prefab = null;


          _initializerDefineProperty(_this, "trail02Prefab", _descriptor3$1, _assertThisInitialized(_this));

          _this.currBoard = null; // 当前接触的板

          _this.boardCount = 0;
          _this.jumpState = Constants.BALL_JUMP_STATE.JUMPUP;
          _this.currBoardIdx = 0;
          _this.diffLevel = 1;
          _this.currJumpFrame = 0; // 当前跳跃频率（移动距离是以每帧移动*频率来判断）

          _this.hasSprint = false;
          _this.isTouch = false;
          _this.touchPosX = 0; // 点击屏幕位置 x

          _this.movePosX = 0; // 移动位置 x

          _this.isJumpSpring = false; // 处于弹簧版弹跳状态

          _this.boardGroupCount = 0;
          _this.trailNode = null;
          _this.timeScale = 0;
          _this._wPos = new Vec3();
          return _this;
        }

        var _proto = Ball.prototype;

        _proto.start = function start() {
          Constants.game.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          Constants.game.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          Constants.game.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          Constants.game.node.on(Constants.GAME_EVENT.RESTART, this.gameStart, this); // @ts-ignore
          // this.trailNode = PoolManager.instance.getNode(this.trail01Prefab, this.node.parent);

          this.updateBall();
          this.reset();
        };

        _proto.onDestroy = function onDestroy() {
          Constants.game.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          Constants.game.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          Constants.game.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          Constants.game.node.off(Constants.GAME_EVENT.RESTART, this.gameStart, this);
        };

        _proto.update = function update(deltaTime) {
          this.timeScale = Math.floor(deltaTime / Constants.normalDt * 100) / 100;

          if (Constants.game.state === Constants.GAME_STATE.PLAYING) {
            var boardBox = Constants.game.boardManager;
            var boardList = boardBox.getBoardList();

            if (this.jumpState === Constants.BALL_JUMP_STATE.SPRINT) {
              // 冲刺状态结束后状态切换
              if (this.currJumpFrame > Constants.BALL_JUMP_FRAMES_SPRINT) {
                this.jumpState = Constants.BALL_JUMP_STATE.JUMPUP;
                this.isJumpSpring = false;
                this.currJumpFrame = 0;
                this.hasSprint = false; // const eulerAngles = this.node.eulerAngles;
                // this.node.eulerAngles = new Vec3(eulerAngles.x, -Constants.BALL_SPRINT_STEP_Y, eulerAngles.z);

                boardBox.clearDiamond();
              }

              this.currJumpFrame += this.timeScale;
              var diamondSprintList = boardBox.getDiamondSprintList();

              for (var i = 0; i < Constants.DIAMOND_NUM; i++) {
                if (Math.abs(this.node.position.y - diamondSprintList[i].position.y) <= Constants.DIAMOND_SPRINT_SCORE_AREA && Math.abs(this.node.position.x - diamondSprintList[i].position.x) <= Constants.DIAMOND_SPRINT_SCORE_AREA) {
                  Constants.game.addScore(Constants.DIAMOND_SCORE);
                  this.showScore(Constants.DIAMOND_SCORE);
                  Constants.game.ball.playDiamondParticle(this.node.position);
                  diamondSprintList[i].active = false;
                }
              }

              this.setPosY();
              this.setPosX(); // this.setRotY();

              this.touchPosX = this.movePosX;
              var y = this.node.position.y + Constants.CAMERA_OFFSET_Y_SPRINT;
              Constants.game.cameraCtrl.setOriginPosY(y);
            } else {
              for (var _i = this.currBoardIdx + 1; _i >= 0; _i--) {
                var board = boardList[_i];
                var pos = this.node.position;
                var boardPos = boardList[_i].node.position;

                if (Math.abs(pos.x - boardPos.x) <= boardList[_i].getRadius() && Math.abs(pos.y - (boardPos.y + Constants.BOARD_HEIGTH)) <= Constants.DIAMOND_SCORE_AREA) {
                  boardList[_i].checkDiamond(pos.x);
                } // 超过当前跳板应该弹跳高度，开始下降


                if (this.jumpState === Constants.BALL_JUMP_STATE.FALLDOWN) {
                  if (this.currJumpFrame > Constants.PLAYER_MAX_DOWN_FRAMES || this.currBoard.node.position.y - pos.y - (Constants.BOARD_GAP + Constants.BOARD_HEIGTH) > 0.001) {
                    ParticleUtils.stop(this.trailNode);
                    Constants.game.gameDie();
                    return;
                  } // 是否在当前检测的板上


                  if (this.isOnBoard(board)) {
                    this.currBoard = board;
                    this.currBoardIdx = _i;
                    this.activeCurrBoard();
                    break;
                  }
                }
              }

              this.currJumpFrame += this.timeScale;

              if (this.jumpState === Constants.BALL_JUMP_STATE.JUMPUP) {
                if (this.isJumpSpring && this.currJumpFrame >= Constants.BALL_JUMP_FRAMES_SPRING) {
                  // 处于跳跃状态并且当前跳跃高度超过弹簧板跳跃高度
                  this.jumpState = Constants.BALL_JUMP_STATE.FALLDOWN;
                  this.currJumpFrame = 0;
                } else {
                  if (!this.isJumpSpring && this.currJumpFrame >= Constants.BALL_JUMP_FRAMES) {
                    // 跳跃距离达到限制，开始下落
                    this.jumpState = Constants.BALL_JUMP_STATE.FALLDOWN;
                    this.currJumpFrame = 0;
                  }
                }
              }

              this.setPosY();
              this.setPosX(); // this.setRotZ();

              if (this.currBoard.type !== Constants.BOARD_TYPE.SPRINT) {
                Constants.game.cameraCtrl.setOriginPosX(this.node.position.x);
              }

              this.touchPosX = this.movePosX;
            }

            this.setTrailPos();
          }
        };

        _proto.onTouchStart = function onTouchStart(touch, event) {
          this.isTouch = true;
          this.touchPosX = touch.getLocation().x;
          this.movePosX = this.touchPosX;
        };

        _proto.onTouchMove = function onTouchMove(touch, event) {
          this.movePosX = touch.getLocation().x;
        };

        _proto.onTouchEnd = function onTouchEnd(touch, event) {
          this.isTouch = false;
        };

        _proto.gameStart = function gameStart() {
          this.playTrail();
        };

        _proto.reset = function reset() {
          this.boardCount = 0;
          this.diffLevel = 1;

          _tempPos.set(Constants.BOARD_INIT_POS);

          _tempPos.y += Constants.BALL_RADIUS + Constants.BOARD_HEIGTH / 2 - .001;
          this.node.setPosition(_tempPos);
          this.node.eulerAngles = new Vec3();
          this.currJumpFrame = 0;
          this.jumpState = Constants.BALL_JUMP_STATE.FALLDOWN;
          this.hasSprint = false;
          this.currBoardIdx = 0;
          this.show();
          this.setTrailPos();
        };

        _proto.updateBall = function updateBall() {
          // PoolManager.instance.putNode(this.trailNode);
          // @ts-ignore
          this.trailNode = PoolManager.instance.getNode(this.trail02Prefab, this.node.parent);
        };

        _proto.show = function show() {
          this.node.active = true;
        };

        _proto.hide = function hide() {
          this.node.active = false;
        };

        _proto.activeCurrBoard = function activeCurrBoard() {
          var pos = this.node.position;
          var boardPos = this.currBoard.node.position;
          var boardType = this.currBoard.type;
          var y = boardPos.y + Constants.BALL_RADIUS + this.currBoard.getHeight() / 2 - .01;
          this.node.setPosition(pos.x, y, pos.z);
          this.currJumpFrame = 0;

          if (boardType === Constants.BOARD_TYPE.SPRINT) {
            this.jumpState = Constants.BALL_JUMP_STATE.SPRINT; // this.node.eulerAngles = new Vec3(this.node.eulerAngles.x, this.node.eulerAngles.y, 0);

            Constants.game.cameraCtrl.setOriginPosX(boardPos.x);
          } else {
            this.jumpState = Constants.BALL_JUMP_STATE.JUMPUP;
          }

          if (!this.currBoard.isActive) {
            this.currBoard.isActive = true;
            var score = Constants.SCORE_BOARD_NOT_CENTER;

            if (boardType !== Constants.BOARD_TYPE.NORMAL && boardType !== Constants.BOARD_TYPE.DROP || Math.abs(pos.x - boardPos.x) <= Constants.BOARD_RADIUS_CENTER) {
              score = Constants.SCORE_BOARD_CENTER;
            }

            Constants.game.addScore(score);
            this.showScore(score);
            this.boardCount++;

            if (this.boardCount === 5) {
              Constants.game.node.emit(Constants.GAME_EVENT.HIDETIPS);
            }

            this.diffLevel += score / 2;

            for (var l = this.currBoardIdx - Constants.BOARD_NEW_INDEX; l > 0; l--) {
              this.newBoard();
            }
          }

          this.isJumpSpring = boardType === Constants.BOARD_TYPE.SPRING;
          this.currBoard.setBump();
          this.currBoard.setWave();

          if (boardType == Constants.BOARD_TYPE.SPRING || boardType == Constants.BOARD_TYPE.SPRINT) {
            this.currBoard.setSpring();
          } // 掉落板开始掉落


          var boardList = Constants.game.boardManager.getBoardList();

          if (boardType === Constants.BOARD_TYPE.DROP) {
            for (var _l = 0; _l < this.currBoardIdx; _l++) {
              boardList[_l].setDrop();
            }
          }

          var c = boardPos.y + Constants.CAMERA_OFFSET_Y;
          Constants.game.cameraCtrl.setOriginPosY(c);
          Constants.game.cameraCtrl.preType = boardType;
        } // 创建新跳板信息
        ;

        _proto.newBoard = function newBoard() {
          var type = Constants.BOARD_TYPE.NORMAL;

          if (this.boardGroupCount <= 0) {
            var coeff = utils.getDiffCoeff(this.diffLevel, 1, 10);
            var t = Math.random() * coeff;

            if (t < 4.2) {
              type = Constants.BOARD_TYPE.NORMAL;
              this.boardGroupCount = 2;
            } else if (t <= 5.5) {
              type = Constants.BOARD_TYPE.GIANT;
              this.boardGroupCount = 3;
            } else if (t <= 6.2) {
              type = Constants.BOARD_TYPE.SPRING;

              if (Math.random() > 0.5) {
                this.boardGroupCount = 2;
              }
            } else if (t <= 7) {
              type = Constants.BOARD_TYPE.DROP;
              this.boardGroupCount = 3;
            } else if (t <= 7.5 && false === this.hasSprint) {
              type = Constants.BOARD_TYPE.SPRINT;
              this.hasSprint = true;
            } else {
              type = Constants.BOARD_TYPE.NORMAL;
            }
          }

          this.boardGroupCount--;
          Constants.game.boardManager.newBoard(type, this.diffLevel);
        } // 界面上的弹跳分数
        ;

        _proto.showScore = function showScore(score) {
          var node = PoolManager.instance.getNode(this.scoreAniPrefab, find('Canvas/resultUI'));
          var pos = new Vec3();
          var cameraComp = Constants.game.cameraCtrl.node.getComponent(Camera);

          this._wPos.set(this.node.worldPosition);

          cameraComp.convertToUINode(this._wPos, find('Canvas/resultUI'), pos);
          pos.x += 50;
          node.setPosition(pos);
          node.getComponentInChildren(Label).string = "+" + score;
          var animationComponent = node.getComponent(Animation);
          animationComponent.once(Animation.EventType.FINISHED, function () {
            PoolManager.instance.putNode(node);
          });
          animationComponent.play();
        };

        _proto.setPosX = function setPosX() {
          if (this.isTouch && this.touchPosX !== this.movePosX) {
            _tempPos.set(this.node.position);

            if (this.jumpState === Constants.BALL_JUMP_STATE.SPRINT) {
              var x = (this.movePosX - this.touchPosX) * Constants.COEFF_POS_BALL;
              this.node.setPosition(_tempPos.x + x, _tempPos.y, _tempPos.z);

              _tempPos.set(this.node.position);

              x = _tempPos.x;
              var t = 1.3 * Constants.SCENE_MAX_OFFSET_X;
              var currBoardPos = this.currBoard.node.position;

              if (x > currBoardPos.x + t) {
                this.node.setPosition(currBoardPos.x + t, _tempPos.y, _tempPos.z);
              } else if (x < this.currBoard.node.position.x - t) {
                this.node.setPosition(currBoardPos.x - t, _tempPos.y, _tempPos.z);
              }
            } else {
              var _x = (this.movePosX - this.touchPosX) * Constants.COEFF_POS_BALL;

              this.node.setPosition(_tempPos.x + _x, _tempPos.y, _tempPos.z);
            }
          }
        } // 垂直位置变化，每帧变动
        ;

        _proto.setPosY = function setPosY() {
          _tempPos.set(this.node.position); // 跳跃状态处理


          if (this.jumpState === Constants.BALL_JUMP_STATE.JUMPUP) {
            if (this.isJumpSpring) {
              _tempPos.y += Constants.BALL_JUMP_STEP_SPRING[Math.floor(this.currJumpFrame / 3)] * this.timeScale;
            } else {
              _tempPos.y += Constants.BALL_JUMP_STEP[Math.floor(this.currJumpFrame / 2)] * this.timeScale;
            }

            this.node.setPosition(_tempPos); // 下落状态处理
          } else if (this.jumpState === Constants.BALL_JUMP_STATE.FALLDOWN) {
            if (this.currBoard.type === Constants.BOARD_TYPE.SPRING) {
              if (this.currJumpFrame < Constants.BALL_JUMP_FRAMES_SPRING) {
                var step = Constants.BALL_JUMP_FRAMES_SPRING - this.currJumpFrame - 1;
                _tempPos.y -= Constants.BALL_JUMP_STEP_SPRING[Math.floor((step >= 0 ? step : 0) / 3)] * this.timeScale;
              } else {
                _tempPos.y -= Constants.BALL_JUMP_STEP_SPRING[0] * this.timeScale;
              }
            } else if (this.currJumpFrame < Constants.BALL_JUMP_FRAMES) {
              var _step = Constants.BALL_JUMP_FRAMES - this.currJumpFrame - 1;

              _tempPos.y -= Constants.BALL_JUMP_STEP[Math.floor((_step >= 0 ? _step : 0) / 2)] * this.timeScale;
            } else {
              _tempPos.y -= Constants.BALL_JUMP_STEP[0] * this.timeScale;
            }

            this.node.setPosition(_tempPos); // 冲刺跳跃状态处理
          } else if (this.jumpState === Constants.BALL_JUMP_STATE.SPRINT) {
            _tempPos.y += Constants.BALL_JUMP_STEP_SPRINT * this.timeScale;
            this.node.setPosition(_tempPos);

            if (this.currJumpFrame >= Constants.DIAMOND_START_FRAME + 20 && this.currJumpFrame <= Constants.BALL_JUMP_FRAMES_SPRINT - 50 && Math.floor(this.currJumpFrame) % Math.floor(Constants.DIAMOND_SPRINT_STEP_Y / Constants.BALL_JUMP_STEP_SPRINT) == 0) {
              Constants.game.boardManager.newDiamond();
            }
          }
        } // 当前处于哪块板子上
        ;

        _proto.isOnBoard = function isOnBoard(board) {
          var pos = this.node.position;
          var boardPos = board.node.position;
          var x = Math.abs(pos.x - boardPos.x);
          var y = pos.y - boardPos.y; // 在板子的半径内

          if (x <= board.getRadius()) {
            if (y >= 0 && y <= Constants.BALL_RADIUS + board.getHeight() / 2) {
              return true;
            } // 处于下落状态


            if (this.isJumpSpring && this.currJumpFrame >= Constants.BALL_JUMP_FRAMES_SPRING) {
              // 是否处于反弹后的第一次匀减速范围内
              if (Math.abs(y) < Constants.BALL_JUMP_STEP_SPRING[0]) {
                return true;
              }
            } else if (!this.isJumpSpring && this.currJumpFrame >= Constants.BALL_JUMP_FRAMES) {
              if (Math.abs(y) < Constants.BALL_JUMP_STEP[0]) {
                return true;
              }
            }
          }

          return false;
        };

        _proto.revive = function revive() {
          this.currBoardIdx--;

          if (this.currBoard.type === Constants.BOARD_TYPE.SPRINT) {
            this.currBoardIdx++;
            this.currBoard = Constants.game.boardManager.getBoardList()[this.currBoardIdx];
          }

          this.currBoard.revive();
          var pos = this.currBoard.node.position.clone();
          pos.y += Constants.BALL_RADIUS + this.currBoard.getHeight() / 2 - .001;
          this.node.setPosition(pos);
          this.node.eulerAngles = new Vec3(0, 0, 0);
          this.currJumpFrame = 0;
          this.show();
          var y = this.currBoard.node.position.y + Constants.CAMERA_OFFSET_Y;
          Constants.game.cameraCtrl.setOriginPosX(pos.x);
          Constants.game.cameraCtrl.setOriginPosY(y);
          this.playTrail();
          this.setTrailPos();
        };

        _proto.playDiamondParticle = function playDiamondParticle(pos) {
          var _this2 = this; // @ts-ignore


          var diamondParticle = PoolManager.instance.getNode(this.diamondParticlePrefab, this.node.parent);
          diamondParticle.setPosition(pos);
          var particleSystemComp = diamondParticle.getComponent(ParticleSystem);
          particleSystemComp.play();

          var fun = function fun() {
            if (!particleSystemComp.isPlaying) {
              PoolManager.instance.putNode(diamondParticle);

              _this2.unschedule(fun);
            }
          };

          this.schedule(fun, 0.1);
        };

        _proto.playTrail = function playTrail() {
          ParticleUtils.play(this.trailNode);
        };

        _proto.setTrailPos = function setTrailPos() {
          var pos = this.node.position;
          this.trailNode.setPosition(pos.x, pos.y - 0.1, pos.z);
        };

        return Ball;
      }(Component), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "diamondParticlePrefab", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "scoreAniPrefab", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$2.prototype, "trail02Prefab", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$2)) || _class$3);

      cclegacy._RF.pop();

      var _dec$4, _dec2$3, _dec3$3, _class$4, _class2$3, _descriptor$3, _descriptor2$3;

      cclegacy._RF.push({}, "2a0a0QivvtEZodpOZ79qMFb", "board-manager", undefined);

      var ccclass$5 = _decorator.ccclass,
          property$5 = _decorator.property;

      var _tempPos$1 = new Vec3();

      var _diamondPos = new Vec3();

      var BoardManager = (_dec$4 = ccclass$5("BoardManager"), _dec2$3 = property$5(Prefab), _dec3$3 = property$5(Prefab), _dec$4(_class$4 = (_class2$3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoardManager, _Component);

        function BoardManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "boardPrefab", _descriptor$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "diamondPrefab", _descriptor2$3, _assertThisInitialized(_this));

          _this.diamondSprintList = []; // 钻石列表

          _this.diamondCenterX = 0; // 钻石摆放中心位置

          _this._boardList = []; // 跳板列表

          _this._boardInsIdx = 0;
          return _this;
        }

        var _proto = BoardManager.prototype; // 当前实例编号

        _proto.start = function start() {
          this.initBoard();
          this.initDiamond();
        } // 每次开始游戏板重置
        ;

        _proto.reset = function reset() {
          this._boardInsIdx = 0;
          Constants.game.initFirstBoard = false;
          var pos = Constants.BOARD_INIT_POS.clone();
          var board;
          var type = Constants.BOARD_TYPE.NORMAL;

          for (var _i = 0; _i < Constants.BOARD_NUM; _i++) {
            board = this._boardList[_i];
            board.reset(type, pos, 1);
            pos = this.getNextPos(board, 1);
          }

          board = this._boardList[0];
          board.isActive = true;
          Constants.game.ball.currBoard = board;

          if (this.diamondSprintList[0]) {
            for (var i = 0; i < Constants.DIAMOND_NUM; i++) {
              this.diamondSprintList[i].active = false;
            }
          }
        } // 板初始化
        ;

        _proto.initBoard = function initBoard() {
          for (var i = 0; i < Constants.BOARD_NUM; i++) {
            var node = instantiate(this.boardPrefab);
            node.name = this._boardInsIdx.toString();
            this._boardInsIdx++;
            this.node.addChild(node);
            var board = node.getComponent('Board');

            this._boardList.push(board);
          }

          this.reset();
        } // 游戏过程中新增板
        ;

        _proto.newBoard = function newBoard(newType, diffLevel) {
          var oldBoard = this._boardList[Constants.BOARD_NUM - 1];
          var pos = this.getNextPos(oldBoard, diffLevel, _tempPos$1);

          var board = this._boardList.shift();

          if (newType === Constants.BOARD_TYPE.SPRINT) {
            this.diamondCenterX = pos.x;
            this.setDiamond(pos);
            board.reset(newType, pos, 0);
          } else {
            board.reset(newType, pos, diffLevel);
          }

          board.name = this._boardInsIdx.toString();
          this._boardInsIdx++;

          this._boardList.push(board);
        } // 获得新板位置
        ;

        _proto.getNextPos = function getNextPos(board, count, out) {
          var pos = out ? out.set(board.node.position) : board.node.position.clone();
          var o = utils.getDiffCoeff(count, 1, 2);
          pos.x = (Math.random() - .5) * Constants.SCENE_MAX_OFFSET_X * o;

          if (board.type === Constants.BOARD_TYPE.SPRINT) {
            pos.y += Constants.BOARD_GAP_SPRINT;
            pos.x = board.node.position.x;
          }

          if (board.type === Constants.BOARD_TYPE.SPRING) {
            pos.y += Constants.BOARD_GAP_SPRING;
          } else {
            pos.y += Constants.BOARD_GAP;
          }

          return pos;
        };

        _proto.initDiamond = function initDiamond() {
          for (var i = 0; i < Constants.DIAMOND_NUM; i++) {
            this.diamondSprintList[i] = instantiate(this.diamondPrefab);
            this.node.addChild(this.diamondSprintList[i]);
            this.diamondSprintList[i].active = false;
          }
        };

        _proto.setDiamond = function setDiamond(pos) {
          var position = pos.clone();
          position.y += Constants.BALL_JUMP_STEP_SPRINT * Constants.DIAMOND_START_FRAME;

          for (var i = 0; i < Constants.DIAMOND_NUM; i++) {
            this.setNextDiamondPos(position);
            this.diamondSprintList[i].setPosition(position);
            this.diamondSprintList[i].active = true;
          }
        };

        _proto.newDiamond = function newDiamond() {
          _diamondPos.set(this.diamondSprintList[Constants.DIAMOND_NUM - 1].position);

          this.setNextDiamondPos(_diamondPos);
          var node = this.diamondSprintList.shift();
          node.setPosition(_diamondPos);
          node.active = true;
          this.diamondSprintList.push(node);
        };

        _proto.clearDiamond = function clearDiamond() {
          for (var i = 0; i < Constants.DIAMOND_NUM; i++) {
            this.diamondSprintList[i].active = false;
          }
        };

        _proto.setNextDiamondPos = function setNextDiamondPos(pos) {
          pos.y += Constants.DIAMOND_SPRINT_STEP_Y;
          pos.x += 1.5 * (Math.random() - 0.5);

          if (pos.x > this.diamondCenterX + Constants.SCENE_MAX_OFFSET_X) {
            pos.x = this.diamondCenterX + Constants.SCENE_MAX_OFFSET_X;
          } else if (pos.x < this.diamondCenterX - Constants.SCENE_MAX_OFFSET_X) {
            pos.x = this.diamondCenterX - Constants.SCENE_MAX_OFFSET_X;
          }
        };

        _proto.getBoardList = function getBoardList() {
          return this._boardList;
        };

        _proto.getDiamondSprintList = function getDiamondSprintList() {
          return this.diamondSprintList;
        };

        return BoardManager;
      }(Component), (_descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "boardPrefab", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$3.prototype, "diamondPrefab", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$3)) || _class$4);

      cclegacy._RF.pop();

      var _dec$5, _dec2$4, _dec3$4, _dec4$2, _dec5, _dec6, _class$5, _class2$4, _descriptor$4, _descriptor2$4, _descriptor3$2, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "bb50aLcTl1FbpB7Hy0H/DT9", "board", undefined);

      var ccclass$6 = _decorator.ccclass,
          property$6 = _decorator.property;

      var _tempPos$2 = new Vec3();

      var Board = (_dec$5 = ccclass$6("Board"), _dec2$4 = property$6(Prefab), _dec3$4 = property$6({
        type: Prefab
      }), _dec4$2 = property$6({
        type: Prefab
      }), _dec5 = property$6({
        type: Prefab
      }), _dec6 = property$6({
        type: Prefab
      }), _dec$5(_class$5 = (_class2$4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Board, _Component);

        function Board() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "diamondPrefab", _descriptor$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "centerPrefab", _descriptor2$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "wavePrefab", _descriptor3$2, _assertThisInitialized(_this)); // 弹簧片


          _initializerDefineProperty(_this, "springTopPrefab", _descriptor4, _assertThisInitialized(_this)); // 弹簧


          _initializerDefineProperty(_this, "springHelixPrefab", _descriptor5, _assertThisInitialized(_this));

          _this.isActive = false;
          _this.diamondList = [];
          _this.type = Constants.BOARD_TYPE.NORMAL;
          _this.wave = null;
          _this.waveInner = null;
          _this.waveOriginScale = new Vec3();
          _this.currWaveFrame = 0;
          _this.currSpringFrame = 0;
          _this.currBumpFrame = Constants.BOARD_BUMP_FRAMES;
          _this.springTop = null;
          _this.springHelix = null;
          _this.springHelixOriginScale = new Vec3();
          _this.center = null;
          _this.isMovingRight = true;
          _this.hasDiamond = false;
          _this.isMoving = false;
          _this.posBeforeDrop = new Vec3();
          _this.originScale = new Vec3();
          _this.currDropFrame = Constants.BOARD_DROP_FRAMES;
          _this._game = null;
          return _this;
        }

        var _proto = Board.prototype;

        _proto.onLoad = function onLoad() {
          this.originScale.set(this.node.scale);
          this.initCenter();
          this.initWave();
          this.initSpring();
          this.initDiamond();
        };

        _proto.update = function update() {
          this.effectBump();
          this.effectWave();

          if (this.type === Constants.BOARD_TYPE.SPRING || this.type === Constants.BOARD_TYPE.SPRINT) {
            this.effectSpring();
          }

          this.effectDrop();
          this.effectMove();

          if (this.hasDiamond) {
            this.effectDiamondRotate();
          }
        };

        _proto.reset = function reset(type, pos, level) {
          this.isActive = false;
          this.type = type;
          this.node.setPosition(pos);
          this.isMoving = false;
          this.currDropFrame = Constants.BOARD_DROP_FRAMES; // 按概率来决定是否是移动板

          if (this.type === Constants.BOARD_TYPE.NORMAL || this.type === Constants.BOARD_TYPE.DROP || this.type === Constants.BOARD_TYPE.SPRING) {
            this.isMoving = this.setMove(level);
          }

          if (this.type === Constants.BOARD_TYPE.GIANT) {
            this.node.setScale(this.originScale.x * Constants.BOARD_SCALE_GIANT, this.originScale.y, this.originScale.z);
          } else if (this.type === Constants.BOARD_TYPE.DROP) {
            this.node.setScale(this.originScale.x, this.originScale.y * Constants.BOARD_HEIGTH_SCALE_DROP, this.originScale.z);
            this.posBeforeDrop.set(this.node.position);
          } else {
            this.node.setScale(this.originScale);
          }

          this.springTop.active = false;

          if (this.type === Constants.BOARD_TYPE.SPRING || this.type === Constants.BOARD_TYPE.SPRINT) {
            this.springHelix.active = true;
            this.springTop.active = true;
            this.setSpringPos();
          }

          this.hasDiamond = false;

          if (this.diamondList[0]) {
            for (var i = 0; i < 5; i++) {
              this.diamondList[i].active = false;
            }

            if (this.type === Constants.BOARD_TYPE.GIANT) {
              for (var _i = 0; _i < 5; _i++) {
                this.diamondList[_i].active = true;
                this.hasDiamond = true;
              }
            } else if (this.type === Constants.BOARD_TYPE.NORMAL || this.type === Constants.BOARD_TYPE.DROP) {
              if (Math.random() > .7) {
                this.diamondList[2].active = Constants.game.initFirstBoard;
                Constants.game.initFirstBoard = true;
                this.hasDiamond = true;
              }
            }

            if (this.hasDiamond) {
              this.setDiamondPos();
            }
          }
        };

        _proto.setDrop = function setDrop() {
          this.currDropFrame = 0;
          this.posBeforeDrop.set(this.node.position);
        };

        _proto.effectDrop = function effectDrop() {
          if (this.currDropFrame < Constants.BOARD_DROP_FRAMES) {
            for (var i = 0; i < 5; i++) {
              this.diamondList[i].active = false;
            }

            if (this.springTop.active) {
              this.springHelix.active = false;
              var pos = this.springTop.position;
              this.springTop.setPosition(pos.x, pos.y - Constants.BOARD_DROP_STEP, pos.z);
            }

            _tempPos$2.set(this.node.position);

            _tempPos$2.y -= Constants.BOARD_DROP_STEP;
            this.node.setPosition(_tempPos$2);
            this.setCenterPos();
            this.currDropFrame++;
          }
        };

        _proto.initDiamond = function initDiamond() {
          for (var i = 0; i < 5; i++) {
            this.diamondList[i] = instantiate(this.diamondPrefab);
            this.node.parent.addChild(this.diamondList[i]);
            this.diamondList[i].active = false;
          }
        };

        _proto.setDiamondPos = function setDiamondPos() {
          var pos = new Vec3();

          for (var i = 0; i < 5; i++) {
            if (this.diamondList[i].active) {
              pos.set(this.node.position);
              pos.x += 1.4 * (i - 2);
              pos.y += Constants.BOARD_HEIGTH;
              this.diamondList[i].setPosition(pos);
            }
          }
        };

        _proto.hideDiamond = function hideDiamond(index) {
          this.diamondList[index].active = false;
        };

        _proto.checkDiamond = function checkDiamond(x) {
          if (this.hasDiamond) {
            var flag = true;

            for (var i = 0; i < 5; i++) {
              if (this.diamondList[i].active) {
                flag = false;

                if (Math.abs(x - this.diamondList[i].position.x) <= Constants.DIAMOND_SCORE_AREA) {
                  Constants.game.ball.playDiamondParticle(this.diamondList[i].position);
                  this.hideDiamond(i);
                  Constants.game.addScore(Constants.DIAMOND_SCORE);
                }
              }
            }

            if (flag) {
              this.hasDiamond = false;
            }
          }
        } // 钻石旋转
        ;

        _proto.effectDiamondRotate = function effectDiamondRotate() {
          for (var i = 0; i < 5; i++) {
            var eulerAngles = this.diamondList[i].eulerAngles;
            this.diamondList[i].eulerAngles = new Vec3(eulerAngles.x, eulerAngles.y + Constants.DIAMOND_ROTATE_STEP_Y, eulerAngles.z);
          }
        };

        _proto.initSpring = function initSpring() {
          this.springHelix = instantiate(this.springHelixPrefab);
          this.springHelixOriginScale = this.springHelix.getScale();
          this.springHelix.setScale(1.5, 1, 1.5);
          this.node.parent.addChild(this.springHelix);
          this.springHelix.active = false;
          this.currSpringFrame = 2 * Constants.BOARD_SPRING_FRAMES;
          this.springTop = instantiate(this.springTopPrefab);
          this.node.parent.addChild(this.springTop);
          this.springTop.active = false;
          var pos = this.node.position.clone();
          pos.y += (Constants.BOARD_HEIGTH + Constants.SPRING_HEIGHT) / 2;
          this.springTop.setPosition(pos);
          this.setSpringPos();
        };

        _proto.setSpring = function setSpring() {
          this.currSpringFrame = 0;
          this.setSpringPos();
          this.springHelix.setScale(1.5, 1, 1.5);
          this.springHelix.active = true;
          this.springTop.active = true;
        };

        _proto.setSpringPos = function setSpringPos() {
          var pos = this.node.position.clone();
          pos.y += Constants.BOARD_HEIGTH / 2;
          this.springHelix.setPosition(pos);
          pos = this.node.position.clone();
          pos.y += (Constants.BOARD_HEIGTH + Constants.SPRING_HEIGHT) / 2;
          this.springTop.setPosition(pos);
        };

        _proto.effectSpring = function effectSpring() {
          var z = this.type === Constants.BOARD_TYPE.SPRINT ? Constants.SPRING_HELIX_STEP_SPIRNT : Constants.SPRING_HELIX_STEP;
          var y = this.type === Constants.BOARD_TYPE.SPRINT ? Constants.SPRING_TOP_STEP_SPRINT : Constants.SPRING_TOP_STEP;
          var scale = this.springHelix.scale;
          var pos = this.springTop.position;

          if (this.currSpringFrame < Constants.BOARD_SPRING_FRAMES) {
            this.springHelix.setScale(scale.x, scale.y + z, scale.z);
            this.springTop.setPosition(pos.x, pos.y + y, pos.z);
            this.currSpringFrame++;
          } else if (this.currSpringFrame >= Constants.BOARD_SPRING_FRAMES && this.currSpringFrame < 2 * Constants.BOARD_SPRING_FRAMES) {
            this.springHelix.setScale(scale.x, scale.y - z, scale.z);
            this.springTop.setPosition(pos.x, pos.y - y, pos.z);
            this.currSpringFrame++;
          } else {
            this.springHelix.active = false;
          }
        };

        _proto.setBump = function setBump() {
          this.currBumpFrame = 0;
        };

        _proto.effectBump = function effectBump() {
          if (this.currBumpFrame < Constants.BOARD_BUMP_FRAMES) {
            var pos = this.node.position;
            this.node.setPosition(pos.x, pos.y + Constants.BOARD_BUMP_STEP[this.currBumpFrame], pos.z);
            this.setCenterPos();
            this.currBumpFrame++;
          }
        };

        _proto.initCenter = function initCenter() {
          this.center = instantiate(this.centerPrefab);
          this.node.parent.addChild(this.center);
          this.center.active = false;
        };

        _proto.setCenterPos = function setCenterPos() {
          var pos = this.node.position.clone();
          pos.y += Constants.BOARD_HEIGTH / 2;
          this.center.setPosition(pos);
        };

        _proto.initWave = function initWave() {
          this.wave = instantiate(this.wavePrefab);
          this.node.parent.addChild(this.wave);
          this.wave.active = false;
          this.waveInner = instantiate(this.wavePrefab);
          this.node.parent.addChild(this.waveInner);
          this.waveInner.active = false;
          this.currWaveFrame = Constants.BOARD_WAVE_FRAMES;
          this.waveOriginScale.set(this.wave.scale);
        };

        _proto.setWave = function setWave() {
          if (this.type != Constants.BOARD_TYPE.GIANT) {
            this.currWaveFrame = 0;
            var pos = this.node.position.clone();
            pos.y += Constants.WAVE_OFFSET_Y;
            this.wave.setPosition(pos);
            this.wave.setScale(this.waveOriginScale.clone());
            this.wave.active = true;
            var mat2 = this.wave.getComponent(MeshRenderer).material; // 初始化时保存以下变量

            var pass = mat2.passes[0];
            var hColor = pass.getHandle('color');
            var color = new Color('#dadada');
            color.a = 127;
            pass.setUniform(hColor, color);
            this.waveInner.setPosition(pos);
            this.waveInner.setScale(this.waveOriginScale.clone());
          }
        };

        _proto.effectWave = function effectWave() {
          if (this.currWaveFrame < Constants.BOARD_WAVE_FRAMES) {
            if (this.currWaveFrame >= Constants.BOARD_WAVE_INNER_START_FRAMES) {
              if (!this.waveInner.active) {
                this.waveInner.active = true;
              }

              var _mat = this.waveInner.getComponent(MeshRenderer).material; // 初始化时保存以下变量

              var _pass = _mat.passes[0];

              var _hColor = _pass.getHandle('color');

              var _color = new Color('#dadada');

              _color.a = 127 - Math.sin(this.currWaveFrame * 0.05) * 127;

              _pass.setUniform(_hColor, _color);

              var _scale = this.waveInner.getScale();

              this.waveInner.setScale(_scale.x + Constants.BOARD_WAVE_INNER_STEP, _scale.y, _scale.z + Constants.BOARD_WAVE_INNER_STEP);
            }

            var mat2 = this.wave.getComponent(MeshRenderer).material; // 初始化时保存以下变量

            var pass = mat2.passes[0];
            var hColor = pass.getHandle('color');
            var color = new Color('#dadada');
            color.a = 127 - Math.sin(this.currWaveFrame * 0.1) * 127;
            pass.setUniform(hColor, color);
            var scale = this.waveInner.getScale();
            this.wave.setScale(scale.x + Constants.BOARD_WAVE_STEP, scale.y, scale.z + Constants.BOARD_WAVE_STEP);
            this.currWaveFrame++;
          } else {
            this.wave.active = false;
            this.waveInner.active = false;
          }
        };

        _proto.getHeight = function getHeight() {
          return this.type === Constants.BOARD_TYPE.DROP ? Constants.BOARD_HEIGTH * Constants.BOARD_HEIGTH_SCALE_DROP : Constants.BOARD_HEIGTH;
        };

        _proto.getRadius = function getRadius() {
          return this.type === Constants.BOARD_TYPE.GIANT ? Constants.BOARD_RADIUS * Constants.BOARD_RADIUS_SCALE_GIANT : Constants.BOARD_RADIUS;
        };

        _proto.setMove = function setMove(coeff) {
          var t = utils.getDiffCoeff(coeff, 1, 10);
          return Math.random() * t > 5;
        };

        _proto.effectMove = function effectMove() {
          if (this.isMoving) {
            var pos = this.node.getPosition().clone();
            var x = pos.x;

            if (this.isMovingRight && x <= Constants.SCENE_MAX_OFFSET_X) {
              x += Constants.BOARD_MOVING_STEP;
              this.node.setPosition(x, pos.y, pos.z);
            } else if (this.isMovingRight && x > Constants.SCENE_MAX_OFFSET_X) {
              this.isMovingRight = false;
            } else if (!this.isMovingRight && x >= -Constants.SCENE_MAX_OFFSET_X) {
              x -= Constants.BOARD_MOVING_STEP;
              this.node.setPosition(x, pos.y, pos.z);
            } else if (!this.isMovingRight && x < -Constants.SCENE_MAX_OFFSET_X) {
              this.isMovingRight = true;
            }

            if (this.type === Constants.BOARD_TYPE.SPRING) {
              this.springHelix.setPosition(this.node.position.x, this.springHelix.position.y, this.springHelix.position.z);
              this.springTop.setPosition(this.node.position.x, this.springTop.position.y, this.springTop.position.z);
            }

            this.setCenterPos();

            if (this.hasDiamond) {
              this.setDiamondPos();
            }
          }
        };

        _proto.revive = function revive() {
          this.isActive = false;
          this.isMoving = false;

          if (this.type === Constants.BOARD_TYPE.DROP) {
            this.currDropFrame = Constants.BOARD_DROP_FRAMES;
            this.node.setPosition(this.posBeforeDrop);
          }
        };

        return Board;
      }(Component), (_descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "diamondPrefab", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$4.prototype, "centerPrefab", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$4.prototype, "wavePrefab", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2$4.prototype, "springTopPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$4.prototype, "springHelixPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$4)) || _class$5);

      cclegacy._RF.pop();

      var _dec$6, _dec2$5, _class$6, _class2$5, _descriptor$5;

      cclegacy._RF.push({}, "b5204GgQaBDNqMtOdI4KDJl", "camera-ctrl", undefined);

      var ccclass$7 = _decorator.ccclass,
          property$7 = _decorator.property;

      var _tempPos$3 = new Vec3();

      var CameraCtrl = (_dec$6 = ccclass$7("CameraCtrl"), _dec2$5 = property$7(Node), _dec$6(_class$6 = (_class2$5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraCtrl, _Component);

        function CameraCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "planeNode", _descriptor$5, _assertThisInitialized(_this));

          _this.preType = Constants.BOARD_TYPE.NORMAL;
          _this._originPos = new Vec3();
          return _this;
        }

        var _proto = CameraCtrl.prototype;

        _proto.start = function start() {
          this._originPos.set(Constants.CAMERA_INIT_POS);

          this.setPosition(this._originPos);
          this.node.eulerAngles = Constants.CAMERA_INIT_ROT;
        };

        _proto.setOriginPosX = function setOriginPosX(val) {
          this._originPos.x = val;
        };

        _proto.setOriginPosY = function setOriginPosY(val) {
          this._originPos.y = val;
        };

        _proto.update = function update() {
          _tempPos$3.set(this.node.position);

          if (_tempPos$3.x === this._originPos.x && _tempPos$3.y === this._originPos.y) {
            return;
          } // 横向位置误差纠正


          if (Math.abs(_tempPos$3.x - this._originPos.x) <= Constants.CAMERA_MOVE_MINI_ERR) {
            _tempPos$3.x = this._originPos.x;
            this.setPosition(_tempPos$3);
          } else {
            var x = this._originPos.x - _tempPos$3.x;
            _tempPos$3.x += x / Constants.CAMERA_MOVE_X_FRAMES;
            this.setPosition(_tempPos$3);
          }

          _tempPos$3.set(this.node.position); // 纵向位置误差纠正


          if (Math.abs(_tempPos$3.y - this._originPos.y) <= Constants.CAMERA_MOVE_MINI_ERR) {
            _tempPos$3.y = this._originPos.y;
            this.setPosition(_tempPos$3);
          } else {
            var y = this._originPos.y - _tempPos$3.y;

            if (this.preType === Constants.BOARD_TYPE.SPRING) {
              _tempPos$3.y += y / Constants.CAMERA_MOVE_Y_FRAMES_SPRING;
              this.setPosition(_tempPos$3);
            } else {
              _tempPos$3.y += y / Constants.CAMERA_MOVE_Y_FRAMES;
              this.setPosition(_tempPos$3);
            }
          }
        } // 相机的默认位置
        ;

        _proto.reset = function reset() {
          this._originPos.set(Constants.CAMERA_INIT_POS);

          this.setPosition(this._originPos);
        } // 相机更新的同时更新背景板
        ;

        _proto.setPosition = function setPosition(position) {
          this.node.setPosition(position);
          var y = position.y - 27;
          this.planeNode.setPosition(position.x, y, -100);
        };

        return CameraCtrl;
      }(Component), _descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "planeNode", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$5)) || _class$6);

      cclegacy._RF.pop();

      var _dec$7, _dec2$6, _dec3$5, _class$7, _class2$6, _descriptor$6, _descriptor2$5;

      cclegacy._RF.push({}, "4becfUEfe1C2prK7h8zxNvz", "ui-manager", undefined);

      var ccclass$8 = _decorator.ccclass,
          property$8 = _decorator.property;
      var UIManager = (_dec$7 = ccclass$8("UIManager"), _dec2$6 = property$8(Node), _dec3$5 = property$8(Node), _dec$7(_class$7 = (_class2$6 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIManager, _Component);

        function UIManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "pageStart", _descriptor$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pageResult", _descriptor2$5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UIManager.prototype;

        _proto.onLoad = function onLoad() {
          Constants.game.uiManager = this;
        };

        _proto.start = function start() {
          this.pageResult.active = false;
        };

        _proto.showDialog = function showDialog(isMain) {
          this.pageResult.active = !isMain;
          this.pageStart.active = isMain;
        };

        return UIManager;
      }(Component), (_descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "pageStart", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$6.prototype, "pageResult", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$6)) || _class$7);

      cclegacy._RF.pop();

      var _dec$8, _dec2$7, _dec3$6, _dec4$3, _dec5$1, _dec6$1, _class$8, _class2$7, _descriptor$7, _descriptor2$6, _descriptor3$3, _descriptor4$1, _descriptor5$1;

      cclegacy._RF.push({}, "6b6999+5cFK4K47RCoawnB4", "game", undefined);

      var ccclass$9 = _decorator.ccclass,
          property$9 = _decorator.property;
      /**
       * @zh 游戏管理类，同时也是事件监听核心对象。
       */

      var Game = (_dec$8 = ccclass$9("Game"), _dec2$7 = property$9(Prefab), _dec3$6 = property$9(BoardManager), _dec4$3 = property$9(CameraCtrl), _dec5$1 = property$9(UIManager), _dec6$1 = property$9(AudioManager), _dec$8(_class$8 = (_class2$7 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Game, _Component);

        function Game() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "ballPref", _descriptor$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "boardManager", _descriptor2$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraCtrl", _descriptor3$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "uiManager", _descriptor4$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audioManager", _descriptor5$1, _assertThisInitialized(_this)); // There is no diamond in first board


          _this.initFirstBoard = false;
          _this.state = Constants.GAME_STATE.READY;
          _this.score = 0;
          _this.hasRevive = false;
          _this._ball = null;
          return _this;
        }

        var _proto = Game.prototype;

        _proto.__preload = function __preload() {
          Constants.game = this;
        };

        _proto.onLoad = function onLoad() {
          if (!this.ballPref) {
            console.log('There is no ball!!');
            this.enabled = false;
            return;
          }

          var ball = instantiate(this.ballPref); // @ts-ignore

          ball.parent = this.node.parent;
          this._ball = ball.getComponent(Ball);
        };

        _proto.start = function start() {
          this.node.on(Constants.GAME_EVENT.RESTART, this.gameStart, this);
          this.node.on(Constants.GAME_EVENT.REVIVE, this.gameRevive, this);
        };

        _proto.onDestroy = function onDestroy() {
          this.node.off(Constants.GAME_EVENT.RESTART, this.gameStart, this);
          this.node.off(Constants.GAME_EVENT.REVIVE, this.gameRevive, this);
        };

        _proto.resetGame = function resetGame() {
          this.state = Constants.GAME_STATE.READY;

          this._ball.reset();

          this.cameraCtrl.reset();
          this.boardManager.reset();
          this.uiManager.showDialog(true);
        };

        _proto.gameStart = function gameStart() {
          this.audioManager.playSound();
          this.uiManager.showDialog(false);
          this.state = Constants.GAME_STATE.PLAYING;
          this.hasRevive = false;
          this.score = 0;
        };

        _proto.gameDie = function gameDie() {
          var _this2 = this;

          this.audioManager.playSound(false);
          this.state = Constants.GAME_STATE.PAUSE;

          if (!this.hasRevive) {
            this.node.emit(Constants.GAME_EVENT.DYING, function () {
              _this2.gameOver();
            });
          } else {
            this.gameOver();
          }
        };

        _proto.gameOver = function gameOver() {
          this.state = Constants.GAME_STATE.OVER;
          this.audioManager.playSound(false);
          this.resetGame();
        };

        _proto.gameRevive = function gameRevive() {
          var _this3 = this;

          this.hasRevive = true;
          this.state = Constants.GAME_STATE.READY;
          this.ball.revive();
          this.scheduleOnce(function () {
            _this3.audioManager.playSound();

            _this3.state = Constants.GAME_STATE.PLAYING;
          }, 1);
        };

        _proto.addScore = function addScore(score) {
          this.score += score;
          this.node.emit(Constants.GAME_EVENT.ADDSCORE, this.score);
        };

        _createClass(Game, [{
          key: "ball",
          get: function get() {
            return this._ball;
          }
        }]);

        return Game;
      }(Component), (_descriptor$7 = _applyDecoratedDescriptor(_class2$7.prototype, "ballPref", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$7.prototype, "boardManager", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$7.prototype, "cameraCtrl", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$7.prototype, "uiManager", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$7.prototype, "audioManager", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$7)) || _class$8);

      cclegacy._RF.pop();

      var _dec$9, _class$9;

      cclegacy._RF.push({}, "02566VN0PhN8o7NqZg0WyFs", "update-value-label", undefined);

      var ccclass$a = _decorator.ccclass,
          property$a = _decorator.property;
      var UpdateValueLabel = (_dec$9 = ccclass$a("UpdateValueLabel"), _dec$9(_class$9 = /*#__PURE__*/function (_Label) {
        _inheritsLoose(UpdateValueLabel, _Label);

        function UpdateValueLabel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Label.call.apply(_Label, [this].concat(args)) || this;
          _this.isPlaying = false;
          _this.startVal = 0;
          _this.endVal = 0;
          _this.diffVal = 0;
          _this.currTime = 0;
          _this.changingTime = 0;
          return _this;
        }

        var _proto = UpdateValueLabel.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.playUpdateValue = function playUpdateValue(startVal, endVal, changingTime) {
          this.startVal = startVal;
          this.endVal = endVal;
          this.diffVal = this.endVal - this.startVal;
          this.currTime = 0;
          this.changingTime = changingTime;
          this.string = startVal.toString();
          this.isPlaying = true;
        };

        _proto.update = function update(dt) {
          if (!this.isPlaying) {
            return;
          }

          if (this.currTime < this.changingTime) {
            this.currTime += dt;
            var currVal = this.startVal + parseInt((this.currTime / this.changingTime * this.diffVal).toString());

            if (currVal < this.startVal) {
              currVal = this.startVal;
            } else if (currVal > this.endVal) {
              currVal = this.endVal;
            }

            this.string = "" + currVal;
            return;
          }

          this.string = "" + this.endVal;
          this.isPlaying = false;
        };

        return UpdateValueLabel;
      }(Label)) || _class$9);

      cclegacy._RF.pop();

      var _dec$a, _dec2$8, _dec3$7, _dec4$4, _dec5$2, _dec6$2, _class$a, _class2$8, _descriptor$8, _descriptor2$7, _descriptor3$4, _descriptor4$2, _descriptor5$2;

      cclegacy._RF.push({}, "37e87RwLXtA5LwGn6Zuq48u", "revive", undefined);

      var ccclass$b = _decorator.ccclass,
          property$b = _decorator.property;
      var Revive = (_dec$a = ccclass$b("Revive"), _dec2$8 = property$b(WidgetComponent), _dec3$7 = property$b(Label), _dec4$4 = property$b({
        type: Label
      }), _dec5$2 = property$b({
        type: Label
      }), _dec6$2 = property$b(SpriteComponent), _dec$a(_class$a = (_class2$8 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Revive, _Component);

        function Revive() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */

          _this.closeCb = null;

          _initializerDefineProperty(_this, "wgMenu", _descriptor$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "historyLabel", _descriptor2$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scoreLabel", _descriptor3$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "progressLabel", _descriptor4$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spCountDown", _descriptor5$2, _assertThisInitialized(_this)); //倒计时


          _this.pageResult = null;
          return _this;
        }

        var _proto = Revive.prototype;

        _proto.onEnable = function onEnable() {
          this.show();
        };

        _proto.show = function show() {
          var score = Constants.game.score;
          this.scoreLabel.string = score.toString();

          if (Constants.MAX_SCORE < score) {
            Constants.MAX_SCORE = score;
          }

          this.historyLabel.string = Constants.MAX_SCORE.toString(); // this.closeCb = closeCallback;

          this.countDownTime = 5;
          this.progressLabel.string = this.countDownTime + '';
          this.currentTime = 0;
          this.spCountDown.fillRange = 1;
          this.isCountDowning = true;
        };

        _proto.onBtnReviveClick = function onBtnReviveClick() {
          this.isCountDowning = false;
          Constants.game.audioManager.playClip();
          Constants.game.node.emit(Constants.GAME_EVENT.REVIVE);
          this.pageResult.showResult(false); // uiManager.instance.hideDialog('fight/revive');
        };

        _proto.onBtnSkipClick = function onBtnSkipClick() {
          Constants.game.audioManager.playClip();
          this.isCountDowning = false; // uiManager.instance.hideDialog('fight/revive');
          // this.closeCb && this.closeCb();

          Constants.game.gameOver();
        };

        _proto.update = function update(dt) {
          if (!this.isCountDowning) {
            return;
          }

          this.currentTime += dt;
          var spare = this.countDownTime - this.currentTime;
          this.progressLabel.string = Math.ceil(spare) + '';

          if (spare <= 0) {
            spare = 0; //触发倒计时结束

            this.isCountDowning = false;
            this.onBtnSkipClick();
          }

          var percent = spare / this.countDownTime; // 展示百分比

          this.spCountDown.fillRange = percent;
        };

        return Revive;
      }(Component), (_descriptor$8 = _applyDecoratedDescriptor(_class2$8.prototype, "wgMenu", [_dec2$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$8.prototype, "historyLabel", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$8.prototype, "scoreLabel", [_dec4$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$8.prototype, "progressLabel", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$2 = _applyDecoratedDescriptor(_class2$8.prototype, "spCountDown", [_dec6$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$8)) || _class$a);

      cclegacy._RF.pop();

      var _dec$b, _dec2$9, _dec3$8, _dec4$5, _dec5$3, _class$b, _class2$9, _descriptor$9, _descriptor2$8, _descriptor3$5, _descriptor4$3;

      cclegacy._RF.push({}, "31b007MqixM3YyJROFsTMEh", "page-result", undefined);

      var ccclass$c = _decorator.ccclass,
          property$c = _decorator.property;
      var PageResult = (_dec$b = ccclass$c("PageResult"), _dec2$9 = property$c({
        type: UpdateValueLabel
      }), _dec3$8 = property$c(Node), _dec4$5 = property$c(Node), _dec5$3 = property$c(Node), _dec$b(_class$b = (_class2$9 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PageResult, _Component);

        function PageResult() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "scoreLabel", _descriptor$9, _assertThisInitialized(_this));

          _this.targetProgress = 0;

          _initializerDefineProperty(_this, "nodeTips1", _descriptor2$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeTips2", _descriptor3$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "result", _descriptor4$3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PageResult.prototype;

        _proto.init = function init() {
          this.targetProgress = 0;
          this.scoreLabel.playUpdateValue(this.targetProgress, this.targetProgress, 0);
          this.scoreLabel.isPlaying = false;
        };

        _proto.onEnable = function onEnable() {
          Constants.game.node.on(Constants.GAME_EVENT.HIDETIPS, this.hideTips, this);
          Constants.game.node.on(Constants.GAME_EVENT.ADDSCORE, this.addScore, this);
          Constants.game.node.on(Constants.GAME_EVENT.DYING, this.gameDie, this);
          this.showTips(true);
          this.showResult(false);
          this.init();
        };

        _proto.start = function start() {
          var reviveComp = this.result.getComponent(Revive);
          reviveComp.pageResult = this;
        };

        _proto.onDisable = function onDisable() {
          Constants.game.node.off(Constants.GAME_EVENT.HIDETIPS, this.hideTips, this);
          Constants.game.node.off(Constants.GAME_EVENT.ADDSCORE, this.addScore, this);
        };

        _proto.addScore = function addScore(score) {
          this.targetProgress = score;
          var curProgress = Number(this.scoreLabel.string);
          this.scoreLabel.playUpdateValue(curProgress, this.targetProgress, (this.targetProgress - curProgress) / 20);
        };

        _proto.gameDie = function gameDie() {
          this.showTips(false);
          this.showResult(true);
        };

        _proto.showTips = function showTips(show) {
          this.nodeTips1.active = show;
          this.nodeTips2.active = show;
        };

        _proto.hideTips = function hideTips() {
          this.showTips(false);
        };

        _proto.showResult = function showResult(isShow) {
          this.result.active = isShow;
        };

        return PageResult;
      }(Component), (_descriptor$9 = _applyDecoratedDescriptor(_class2$9.prototype, "scoreLabel", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$8 = _applyDecoratedDescriptor(_class2$9.prototype, "nodeTips1", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$9.prototype, "nodeTips2", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$9.prototype, "result", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$9)) || _class$b);

      cclegacy._RF.pop();

      var _dec$c, _class$c;

      cclegacy._RF.push({}, "75579oVThhNcJN3jNLu42YC", "page-start", undefined);

      var ccclass$d = _decorator.ccclass,
          property$d = _decorator.property;
      var PageStart = (_dec$c = ccclass$d("PageStart"), _dec$c(_class$c = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PageStart, _Component);

        function PageStart() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = PageStart.prototype;

        _proto.gameStart = function gameStart() {
          Constants.game.node.emit(Constants.GAME_EVENT.RESTART);
          Constants.game.audioManager.playClip();
        };

        return PageStart;
      }(Component)) || _class$c);

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});