System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, Constants, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, _tempPos, CameraCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/constants", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5204GgQaBDNqMtOdI4KDJl", "camera-ctrl", undefined);
      /**
       * Copyright (c) 2019 Xiamen Yaji Software Co.Ltd. All rights reserved.
       * Created by daisy on 2019/06/25.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      _tempPos = new Vec3();

      _export("CameraCtrl", CameraCtrl = (_dec = ccclass("CameraCtrl"), _dec2 = property(Node), _dec(_class = (_class2 = class CameraCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "planeNode", _descriptor, this);

          this.preType = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.NORMAL;
          this._originPos = new Vec3();
        }

        start() {
          this._originPos.set((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CAMERA_INIT_POS);

          this.setPosition(this._originPos);
          this.node.eulerAngles = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CAMERA_INIT_ROT;
        }

        setOriginPosX(val) {
          this._originPos.x = val;
        }

        setOriginPosY(val) {
          this._originPos.y = val;
        }

        update() {
          _tempPos.set(this.node.position);

          if (_tempPos.x === this._originPos.x && _tempPos.y === this._originPos.y) {
            return;
          } // 横向位置误差纠正


          if (Math.abs(_tempPos.x - this._originPos.x) <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CAMERA_MOVE_MINI_ERR) {
            _tempPos.x = this._originPos.x;
            this.setPosition(_tempPos);
          } else {
            const x = this._originPos.x - _tempPos.x;
            _tempPos.x += x / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CAMERA_MOVE_X_FRAMES;
            this.setPosition(_tempPos);
          }

          _tempPos.set(this.node.position); // 纵向位置误差纠正


          if (Math.abs(_tempPos.y - this._originPos.y) <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CAMERA_MOVE_MINI_ERR) {
            _tempPos.y = this._originPos.y;
            this.setPosition(_tempPos);
          } else {
            const y = this._originPos.y - _tempPos.y;

            if (this.preType === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_TYPE.SPRING) {
              _tempPos.y += y / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CAMERA_MOVE_Y_FRAMES_SPRING;
              this.setPosition(_tempPos);
            } else {
              _tempPos.y += y / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CAMERA_MOVE_Y_FRAMES;
              this.setPosition(_tempPos);
            }
          }
        } // 相机的默认位置


        reset() {
          this._originPos.set((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CAMERA_INIT_POS);

          this.setPosition(this._originPos);
        } // 相机更新的同时更新背景板


        setPosition(position) {
          this.node.setPosition(position);
          const y = position.y - 27;
          this.planeNode.setPosition(position.x, y, -100);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "planeNode", [_dec2], {
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
//# sourceMappingURL=8a899664ddf702f6503c4da92830d08e7596a7a8.js.map