System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Prefab, instantiate, MeshRenderer, Color, Constants, utils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, _tempPos, Board;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../utils/utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      MeshRenderer = _cc.MeshRenderer;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      utils = _unresolved_3.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb50aLcTl1FbpB7Hy0H/DT9", "board", undefined);
      /**
       * Copyright (c) 2019 Xiamen Yaji Software Co.Ltd. All rights reserved.
       * Created by daisy on 2019/06/25.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Prefab', 'instantiate', 'MeshRenderer', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);
      _tempPos = new Vec3();

      _export("Board", Board = (_dec = ccclass("Board"), _dec2 = property(Prefab), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class Board extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "diamondPrefab", _descriptor, this);

          _initializerDefineProperty(this, "centerPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "wavePrefab", _descriptor3, this);

          // 弹簧片
          _initializerDefineProperty(this, "springTopPrefab", _descriptor4, this);

          // 弹簧
          _initializerDefineProperty(this, "springHelixPrefab", _descriptor5, this);

          this.isActive = false;
          this.diamondList = [];
          this.type = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.NORMAL;
          this.wave = null;
          this.waveInner = null;
          this.waveOriginScale = new Vec3();
          this.currWaveFrame = 0;
          this.currSpringFrame = 0;
          this.currBumpFrame = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_BUMP_FRAMES;
          this.springTop = null;
          this.springHelix = null;
          this.springHelixOriginScale = new Vec3();
          this.center = null;
          this.isMovingRight = true;
          this.hasDiamond = false;
          this.isMoving = false;
          this.posBeforeDrop = new Vec3();
          this.originScale = new Vec3();
          this.currDropFrame = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_DROP_FRAMES;
          this._game = null;
        }

        onLoad() {
          this.originScale.set(this.node.scale);
          this.initCenter();
          this.initWave();
          this.initSpring();
          this.initDiamond();
        }

        update() {
          this.effectBump();
          this.effectWave();

          if (this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRING || this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRINT) {
            this.effectSpring();
          }

          this.effectDrop();
          this.effectMove();

          if (this.hasDiamond) {
            this.effectDiamondRotate();
          }
        }

        reset(type, pos, level) {
          this.isActive = false;
          this.type = type;
          this.node.setPosition(pos);
          this.isMoving = false;
          this.currDropFrame = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_DROP_FRAMES; // 按概率来决定是否是移动板

          if (this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.NORMAL || this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.DROP || this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRING) {
            this.isMoving = this.setMove(level);
          }

          if (this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.GIANT) {
            this.node.setScale(this.originScale.x * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SCALE_GIANT, this.originScale.y, this.originScale.z);
          } else if (this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.DROP) {
            this.node.setScale(this.originScale.x, this.originScale.y * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_HEIGTH_SCALE_DROP, this.originScale.z);
            this.posBeforeDrop.set(this.node.position);
          } else {
            this.node.setScale(this.originScale);
          }

          this.springTop.active = false;

          if (this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRING || this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRINT) {
            this.springHelix.active = true;
            this.springTop.active = true;
            this.setSpringPos();
          }

          this.hasDiamond = false;

          if (this.diamondList[0]) {
            for (var i = 0; i < 5; i++) {
              this.diamondList[i].active = false;
            }

            if (this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_TYPE.GIANT) {
              for (var _i = 0; _i < 5; _i++) {
                this.diamondList[_i].active = true;
                this.hasDiamond = true;
              }
            } else if (this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_TYPE.NORMAL || this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_TYPE.DROP) {
              if (Math.random() > .7) {
                this.diamondList[2].active = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).game.initFirstBoard;
                (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).game.initFirstBoard = true;
                this.hasDiamond = true;
              }
            }

            if (this.hasDiamond) {
              this.setDiamondPos();
            }
          }
        }

        setDrop() {
          this.currDropFrame = 0;
          this.posBeforeDrop.set(this.node.position);
        }

        effectDrop() {
          if (this.currDropFrame < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_DROP_FRAMES) {
            for (var i = 0; i < 5; i++) {
              this.diamondList[i].active = false;
            }

            if (this.springTop.active) {
              this.springHelix.active = false;
              var pos = this.springTop.position;
              this.springTop.setPosition(pos.x, pos.y - (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_DROP_STEP, pos.z);
            }

            _tempPos.set(this.node.position);

            _tempPos.y -= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_DROP_STEP;
            this.node.setPosition(_tempPos);
            this.setCenterPos();
            this.currDropFrame++;
          }
        }

        initDiamond() {
          for (var i = 0; i < 5; i++) {
            this.diamondList[i] = instantiate(this.diamondPrefab);
            this.node.parent.addChild(this.diamondList[i]);
            this.diamondList[i].active = false;
          }
        }

        setDiamondPos() {
          var pos = new Vec3();

          for (var i = 0; i < 5; i++) {
            if (this.diamondList[i].active) {
              pos.set(this.node.position);
              pos.x += 1.4 * (i - 2);
              pos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_HEIGTH;
              this.diamondList[i].setPosition(pos);
            }
          }
        }

        hideDiamond(index) {
          this.diamondList[index].active = false;
        }

        checkDiamond(x) {
          if (this.hasDiamond) {
            var flag = true;

            for (var i = 0; i < 5; i++) {
              if (this.diamondList[i].active) {
                flag = false;

                if (Math.abs(x - this.diamondList[i].position.x) <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).DIAMOND_SCORE_AREA) {
                  (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).game.ball.playDiamondParticle(this.diamondList[i].position);
                  this.hideDiamond(i);
                  (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).game.addScore((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).DIAMOND_SCORE);
                }
              }
            }

            if (flag) {
              this.hasDiamond = false;
            }
          }
        } // 钻石旋转


        effectDiamondRotate() {
          for (var i = 0; i < 5; i++) {
            var eulerAngles = this.diamondList[i].eulerAngles;
            this.diamondList[i].eulerAngles = new Vec3(eulerAngles.x, eulerAngles.y + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DIAMOND_ROTATE_STEP_Y, eulerAngles.z);
          }
        }

        initSpring() {
          this.springHelix = instantiate(this.springHelixPrefab);
          this.springHelixOriginScale = this.springHelix.getScale();
          this.springHelix.setScale(1.5, 1, 1.5);
          this.node.parent.addChild(this.springHelix);
          this.springHelix.active = false;
          this.currSpringFrame = 2 * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SPRING_FRAMES;
          this.springTop = instantiate(this.springTopPrefab);
          this.node.parent.addChild(this.springTop);
          this.springTop.active = false;
          var pos = this.node.position.clone();
          pos.y += ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_HEIGTH + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPRING_HEIGHT) / 2;
          this.springTop.setPosition(pos);
          this.setSpringPos();
        }

        setSpring() {
          this.currSpringFrame = 0;
          this.setSpringPos();
          this.springHelix.setScale(1.5, 1, 1.5);
          this.springHelix.active = true;
          this.springTop.active = true;
        }

        setSpringPos() {
          var pos = this.node.position.clone();
          pos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_HEIGTH / 2;
          this.springHelix.setPosition(pos);
          pos = this.node.position.clone();
          pos.y += ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_HEIGTH + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPRING_HEIGHT) / 2;
          this.springTop.setPosition(pos);
        }

        effectSpring() {
          var z = this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRINT ? (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPRING_HELIX_STEP_SPIRNT : (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPRING_HELIX_STEP;
          var y = this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRINT ? (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPRING_TOP_STEP_SPRINT : (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPRING_TOP_STEP;
          var scale = this.springHelix.scale;
          var pos = this.springTop.position;

          if (this.currSpringFrame < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SPRING_FRAMES) {
            this.springHelix.setScale(scale.x, scale.y + z, scale.z);
            this.springTop.setPosition(pos.x, pos.y + y, pos.z);
            this.currSpringFrame++;
          } else if (this.currSpringFrame >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SPRING_FRAMES && this.currSpringFrame < 2 * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SPRING_FRAMES) {
            this.springHelix.setScale(scale.x, scale.y - z, scale.z);
            this.springTop.setPosition(pos.x, pos.y - y, pos.z);
            this.currSpringFrame++;
          } else {
            this.springHelix.active = false;
          }
        }

        setBump() {
          this.currBumpFrame = 0;
        }

        effectBump() {
          if (this.currBumpFrame < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_BUMP_FRAMES) {
            var pos = this.node.position;
            this.node.setPosition(pos.x, pos.y + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_BUMP_STEP[this.currBumpFrame], pos.z);
            this.setCenterPos();
            this.currBumpFrame++;
          }
        }

        initCenter() {
          this.center = instantiate(this.centerPrefab);
          this.node.parent.addChild(this.center);
          this.center.active = false;
        }

        setCenterPos() {
          var pos = this.node.position.clone();
          pos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_HEIGTH / 2;
          this.center.setPosition(pos);
        }

        initWave() {
          this.wave = instantiate(this.wavePrefab);
          this.node.parent.addChild(this.wave);
          this.wave.active = false;
          this.waveInner = instantiate(this.wavePrefab);
          this.node.parent.addChild(this.waveInner);
          this.waveInner.active = false;
          this.currWaveFrame = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_WAVE_FRAMES;
          this.waveOriginScale.set(this.wave.scale);
        }

        setWave() {
          if (this.type != (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.GIANT) {
            this.currWaveFrame = 0;
            var pos = this.node.position.clone();
            pos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).WAVE_OFFSET_Y;
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
        }

        effectWave() {
          if (this.currWaveFrame < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_WAVE_FRAMES) {
            if (this.currWaveFrame >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_WAVE_INNER_START_FRAMES) {
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

              this.waveInner.setScale(_scale.x + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_WAVE_INNER_STEP, _scale.y, _scale.z + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_WAVE_INNER_STEP);
            }

            var mat2 = this.wave.getComponent(MeshRenderer).material; // 初始化时保存以下变量

            var pass = mat2.passes[0];
            var hColor = pass.getHandle('color');
            var color = new Color('#dadada');
            color.a = 127 - Math.sin(this.currWaveFrame * 0.1) * 127;
            pass.setUniform(hColor, color);
            var scale = this.waveInner.getScale();
            this.wave.setScale(scale.x + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_WAVE_STEP, scale.y, scale.z + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_WAVE_STEP);
            this.currWaveFrame++;
          } else {
            this.wave.active = false;
            this.waveInner.active = false;
          }
        }

        getHeight() {
          return this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.DROP ? (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_HEIGTH * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_HEIGTH_SCALE_DROP : (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_HEIGTH;
        }

        getRadius() {
          return this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.GIANT ? (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_RADIUS * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_RADIUS_SCALE_GIANT : (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_RADIUS;
        }

        setMove(coeff) {
          var t = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getDiffCoeff(coeff, 1, 10);
          return Math.random() * t > 5;
        }

        effectMove() {
          if (this.isMoving) {
            var pos = this.node.getPosition().clone();
            var x = pos.x;

            if (this.isMovingRight && x <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SCENE_MAX_OFFSET_X) {
              x += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_MOVING_STEP;
              this.node.setPosition(x, pos.y, pos.z);
            } else if (this.isMovingRight && x > (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SCENE_MAX_OFFSET_X) {
              this.isMovingRight = false;
            } else if (!this.isMovingRight && x >= -(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SCENE_MAX_OFFSET_X) {
              x -= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_MOVING_STEP;
              this.node.setPosition(x, pos.y, pos.z);
            } else if (!this.isMovingRight && x < -(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SCENE_MAX_OFFSET_X) {
              this.isMovingRight = true;
            }

            if (this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_TYPE.SPRING) {
              this.springHelix.setPosition(this.node.position.x, this.springHelix.position.y, this.springHelix.position.z);
              this.springTop.setPosition(this.node.position.x, this.springTop.position.y, this.springTop.position.z);
            }

            this.setCenterPos();

            if (this.hasDiamond) {
              this.setDiamondPos();
            }
          }
        }

        revive() {
          this.isActive = false;
          this.isMoving = false;

          if (this.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.DROP) {
            this.currDropFrame = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_DROP_FRAMES;
            this.node.setPosition(this.posBeforeDrop);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "diamondPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "centerPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wavePrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "springTopPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "springHelixPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff52cd44fb34d8fc0237efe4fbc13b757876eb0a.js.map