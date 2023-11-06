System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, Vec3, Constants, utils, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, _tempPos, _diamondPos, BoardManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBoard(extras) {
    _reporterNs.report("Board", "./board", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/constants", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      utils = _unresolved_3.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a0a0QivvtEZodpOZ79qMFb", "board-manager", undefined);
      /**
       * Copyright (c) 2019 Xiamen Yaji Software Co.Ltd. All rights reserved.
       * Created by daisy on 2019/06/25.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      _tempPos = new Vec3();
      _diamondPos = new Vec3();

      _export("BoardManager", BoardManager = (_dec = ccclass("BoardManager"), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec(_class = (_class2 = class BoardManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "boardPrefab", _descriptor, this);

          _initializerDefineProperty(this, "diamondPrefab", _descriptor2, this);

          this.diamondSprintList = [];
          // 钻石列表
          this.diamondCenterX = 0;
          // 钻石摆放中心位置
          this._boardList = [];
          // 跳板列表
          this._boardInsIdx = 0;
        }

        // 当前实例编号
        start() {
          this.initBoard();
          this.initDiamond();
        } // 每次开始游戏板重置


        reset() {
          this._boardInsIdx = 0;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.initFirstBoard = false;
          let pos = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_INIT_POS.clone();
          let board;
          const type = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.NORMAL;

          for (let i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_NUM; i++) {
            board = this._boardList[i];
            board.reset(type, pos, 1);
            pos = this.getNextPos(board, 1);
          }

          board = this._boardList[0];
          board.isActive = true;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.ball.currBoard = board;

          if (this.diamondSprintList[0]) {
            for (var i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DIAMOND_NUM; i++) {
              this.diamondSprintList[i].active = false;
            }
          }
        } // 板初始化


        initBoard() {
          for (let i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_NUM; i++) {
            const node = instantiate(this.boardPrefab);
            node.name = this._boardInsIdx.toString();
            this._boardInsIdx++;
            this.node.addChild(node);
            const board = node.getComponent('Board');

            this._boardList.push(board);
          }

          this.reset();
        } // 游戏过程中新增板


        newBoard(newType, diffLevel) {
          const oldBoard = this._boardList[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_NUM - 1];
          const pos = this.getNextPos(oldBoard, diffLevel, _tempPos);

          const board = this._boardList.shift();

          if (newType === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRINT) {
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


        getNextPos(board, count, out) {
          const pos = out ? out.set(board.node.position) : board.node.position.clone();
          const o = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getDiffCoeff(count, 1, 2);
          pos.x = (Math.random() - .5) * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SCENE_MAX_OFFSET_X * o;

          if (board.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRINT) {
            pos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_GAP_SPRINT;
            pos.x = board.node.position.x;
          }

          if (board.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRING) {
            pos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_GAP_SPRING;
          } else {
            pos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_GAP;
          }

          return pos;
        }

        initDiamond() {
          for (let i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DIAMOND_NUM; i++) {
            this.diamondSprintList[i] = instantiate(this.diamondPrefab);
            this.node.addChild(this.diamondSprintList[i]);
            this.diamondSprintList[i].active = false;
          }
        }

        setDiamond(pos) {
          const position = pos.clone();
          position.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BALL_JUMP_STEP_SPRINT * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DIAMOND_START_FRAME;

          for (let i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DIAMOND_NUM; i++) {
            this.setNextDiamondPos(position);
            this.diamondSprintList[i].setPosition(position);
            this.diamondSprintList[i].active = true;
          }
        }

        newDiamond() {
          _diamondPos.set(this.diamondSprintList[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DIAMOND_NUM - 1].position);

          this.setNextDiamondPos(_diamondPos);
          const node = this.diamondSprintList.shift();
          node.setPosition(_diamondPos);
          node.active = true;
          this.diamondSprintList.push(node);
        }

        clearDiamond() {
          for (let i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DIAMOND_NUM; i++) {
            this.diamondSprintList[i].active = false;
          }
        }

        setNextDiamondPos(pos) {
          pos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DIAMOND_SPRINT_STEP_Y;
          pos.x += 1.5 * (Math.random() - 0.5);

          if (pos.x > this.diamondCenterX + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SCENE_MAX_OFFSET_X) {
            pos.x = this.diamondCenterX + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SCENE_MAX_OFFSET_X;
          } else if (pos.x < this.diamondCenterX - (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SCENE_MAX_OFFSET_X) {
            pos.x = this.diamondCenterX - (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SCENE_MAX_OFFSET_X;
          }
        }

        getBoardList() {
          return this._boardList;
        }

        getDiamondSprintList() {
          return this.diamondSprintList;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boardPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "diamondPrefab", [_dec3], {
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
//# sourceMappingURL=b72383fe28f3436c095dd04f8000fdc822c3bb06.js.map