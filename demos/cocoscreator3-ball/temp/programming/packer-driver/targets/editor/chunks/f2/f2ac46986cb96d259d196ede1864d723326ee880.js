System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Constants, UpdateValueLabel, Revive, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, PageResult;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpdateValueLabel(extras) {
    _reporterNs.report("UpdateValueLabel", "./update-value-label", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRevive(extras) {
    _reporterNs.report("Revive", "./revive", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      UpdateValueLabel = _unresolved_3.UpdateValueLabel;
    }, function (_unresolved_4) {
      Revive = _unresolved_4.Revive;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "31b007MqixM3YyJROFsTMEh", "page-result", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PageResult", PageResult = (_dec = ccclass("PageResult"), _dec2 = property({
        type: _crd && UpdateValueLabel === void 0 ? (_reportPossibleCrUseOfUpdateValueLabel({
          error: Error()
        }), UpdateValueLabel) : UpdateValueLabel
      }), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class PageResult extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scoreLabel", _descriptor, this);

          this.targetProgress = 0;

          _initializerDefineProperty(this, "nodeTips1", _descriptor2, this);

          _initializerDefineProperty(this, "nodeTips2", _descriptor3, this);

          _initializerDefineProperty(this, "result", _descriptor4, this);
        }

        init() {
          this.targetProgress = 0;
          this.scoreLabel.playUpdateValue(this.targetProgress, this.targetProgress, 0);
          this.scoreLabel.isPlaying = false;
        }

        onEnable() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.HIDETIPS, this.hideTips, this);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.ADDSCORE, this.addScore, this);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.DYING, this.gameDie, this);
          this.showTips(true);
          this.showResult(false);
          this.init();
        }

        start() {
          const reviveComp = this.result.getComponent(_crd && Revive === void 0 ? (_reportPossibleCrUseOfRevive({
            error: Error()
          }), Revive) : Revive);
          reviveComp.pageResult = this;
        }

        onDisable() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.HIDETIPS, this.hideTips, this);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.ADDSCORE, this.addScore, this);
        }

        addScore(score) {
          this.targetProgress = score;
          let curProgress = Number(this.scoreLabel.string);
          this.scoreLabel.playUpdateValue(curProgress, this.targetProgress, (this.targetProgress - curProgress) / 20);
        }

        gameDie() {
          this.showTips(false);
          this.showResult(true);
        }

        showTips(show) {
          this.nodeTips1.active = show;
          this.nodeTips2.active = show;
        }

        hideTips() {
          this.showTips(false);
        }

        showResult(isShow) {
          this.result.active = isShow;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeTips1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeTips2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "result", [_dec5], {
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
//# sourceMappingURL=f2ac46986cb96d259d196ede1864d723326ee880.js.map