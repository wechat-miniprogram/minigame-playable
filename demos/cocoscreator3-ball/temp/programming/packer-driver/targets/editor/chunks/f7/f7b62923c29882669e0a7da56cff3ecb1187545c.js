System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, Constants, Ball, BoardManager, CameraCtrl, UIManager, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, Game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBall(extras) {
    _reporterNs.report("Ball", "./ball", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardManager(extras) {
    _reporterNs.report("BoardManager", "./board-manager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCameraCtrl(extras) {
    _reporterNs.report("CameraCtrl", "./camera-ctrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./ui-manager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./audio-manager", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      Ball = _unresolved_3.Ball;
    }, function (_unresolved_4) {
      BoardManager = _unresolved_4.BoardManager;
    }, function (_unresolved_5) {
      CameraCtrl = _unresolved_5.CameraCtrl;
    }, function (_unresolved_6) {
      UIManager = _unresolved_6.UIManager;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b6999+5cFK4K47RCoawnB4", "game", undefined);
      /**
       * Copyright (c) 2019 Xiamen Yaji Software Co.Ltd. All rights reserved.
       * Created by daisy on 2019/06/25.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * @zh 游戏管理类，同时也是事件监听核心对象。
       */

      _export("Game", Game = (_dec = ccclass("Game"), _dec2 = property(Prefab), _dec3 = property(_crd && BoardManager === void 0 ? (_reportPossibleCrUseOfBoardManager({
        error: Error()
      }), BoardManager) : BoardManager), _dec4 = property(_crd && CameraCtrl === void 0 ? (_reportPossibleCrUseOfCameraCtrl({
        error: Error()
      }), CameraCtrl) : CameraCtrl), _dec5 = property(_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
        error: Error()
      }), UIManager) : UIManager), _dec6 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec(_class = (_class2 = class Game extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ballPref", _descriptor, this);

          _initializerDefineProperty(this, "boardManager", _descriptor2, this);

          _initializerDefineProperty(this, "cameraCtrl", _descriptor3, this);

          _initializerDefineProperty(this, "uiManager", _descriptor4, this);

          _initializerDefineProperty(this, "audioManager", _descriptor5, this);

          // There is no diamond in first board
          this.initFirstBoard = false;
          this.state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_STATE.READY;
          this.score = 0;
          this.hasRevive = false;
          this._ball = null;
        }

        get ball() {
          return this._ball;
        }

        __preload() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game = this;
        }

        onLoad() {
          if (!this.ballPref) {
            console.log('There is no ball!!');
            this.enabled = false;
            return;
          }

          const ball = instantiate(this.ballPref); // @ts-ignore

          ball.parent = this.node.parent;
          this._ball = ball.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
            error: Error()
          }), Ball) : Ball);
        }

        start() {
          this.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.RESTART, this.gameStart, this);
          this.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.REVIVE, this.gameRevive, this);
        }

        onDestroy() {
          this.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.RESTART, this.gameStart, this);
          this.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.REVIVE, this.gameRevive, this);
        }

        resetGame() {
          this.state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_STATE.READY;

          this._ball.reset();

          this.cameraCtrl.reset();
          this.boardManager.reset();
          this.uiManager.showDialog(true);
        }

        gameStart() {
          this.audioManager.playSound();
          this.uiManager.showDialog(false);
          this.state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_STATE.PLAYING;
          this.hasRevive = false;
          this.score = 0;
        }

        gameDie() {
          this.audioManager.playSound(false);
          this.state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_STATE.PAUSE;

          if (!this.hasRevive) {
            this.node.emit((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).GAME_EVENT.DYING, () => {
              this.gameOver();
            });
          } else {
            this.gameOver();
          }
        }

        gameOver() {
          this.state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_STATE.OVER;
          this.audioManager.playSound(false);
          this.resetGame();
        }

        gameRevive() {
          this.hasRevive = true;
          this.state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_STATE.READY;
          this.ball.revive();
          this.scheduleOnce(() => {
            this.audioManager.playSound();
            this.state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).GAME_STATE.PLAYING;
          }, 1);
        }

        addScore(score) {
          this.score += score;
          this.node.emit((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.ADDSCORE, this.score);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ballPref", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boardManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cameraCtrl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "uiManager", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "audioManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7b62923c29882669e0a7da56cff3ecb1187545c.js.map