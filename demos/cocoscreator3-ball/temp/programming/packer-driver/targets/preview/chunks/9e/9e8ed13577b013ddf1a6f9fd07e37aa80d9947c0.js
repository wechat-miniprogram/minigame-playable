System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteComponent, WidgetComponent, Label, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, Revive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageResult(extras) {
    _reporterNs.report("PageResult", "./page-result", _context.meta, extras);
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
      SpriteComponent = _cc.SpriteComponent;
      WidgetComponent = _cc.WidgetComponent;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37e87RwLXtA5LwGn6Zuq48u", "revive", undefined);

      __checkObsolete__(['_decorator', 'Component', 'SpriteComponent', 'Node', 'WidgetComponent', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Revive", Revive = (_dec = ccclass("Revive"), _dec2 = property(WidgetComponent), _dec3 = property(Label), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property(SpriteComponent), _dec(_class = (_class2 = class Revive extends Component {
        constructor() {
          super(...arguments);

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          this.closeCb = null;

          _initializerDefineProperty(this, "wgMenu", _descriptor, this);

          _initializerDefineProperty(this, "historyLabel", _descriptor2, this);

          _initializerDefineProperty(this, "scoreLabel", _descriptor3, this);

          _initializerDefineProperty(this, "progressLabel", _descriptor4, this);

          _initializerDefineProperty(this, "spCountDown", _descriptor5, this);

          //倒计时
          this.pageResult = null;
        }

        onEnable() {
          this.show();
        }

        show() {
          var score = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.score;
          this.scoreLabel.string = score.toString();

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).MAX_SCORE < score) {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).MAX_SCORE = score;
          }

          this.historyLabel.string = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).MAX_SCORE.toString(); // this.closeCb = closeCallback;

          this.countDownTime = 5;
          this.progressLabel.string = this.countDownTime + '';
          this.currentTime = 0;
          this.spCountDown.fillRange = 1;
          this.isCountDowning = true;
        }

        onBtnReviveClick() {
          this.isCountDowning = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.audioManager.playClip();
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.emit((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.REVIVE);
          this.pageResult.showResult(false); // uiManager.instance.hideDialog('fight/revive');
        }

        onBtnSkipClick() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.audioManager.playClip();
          this.isCountDowning = false; // uiManager.instance.hideDialog('fight/revive');
          // this.closeCb && this.closeCb();

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.gameOver();
        }

        update(dt) {
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
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wgMenu", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "historyLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spCountDown", [_dec6], {
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
//# sourceMappingURL=9e8ed13577b013ddf1a6f9fd07e37aa80d9947c0.js.map