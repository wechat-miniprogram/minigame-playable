System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, Component, AudioSource, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52ff6Qg0MlJaaUpLNS1HPTJ", "audio-manager", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'loader', 'Component', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass("AudioManager"), _dec2 = property(AudioClip), _dec3 = property(AudioClip), _dec(_class = (_class2 = class AudioManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "click", _descriptor2, this);

          this.audioComp = null;
        }

        start() {
          this.audioComp = this.getComponent(AudioSource);
        }

        playSound(play = true) {
          if (!play) {
            this.audioComp.stop();
            return;
          }

          this.audioComp.clip = this.bg;
          this.audioComp.play();
        }

        playClip() {
          this.audioComp.playOneShot(this.click);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "click", [_dec3], {
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
//# sourceMappingURL=6d3492f1771c9fa9acd3f1c1c570a0a5509ef872.js.map