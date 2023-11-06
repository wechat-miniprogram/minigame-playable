System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, Constants, _crd, BOARD_TYPE, GAME_STATE, GAME_EVENT, JUMP_STATE;

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../game/game", _context.meta, extras);
  }

  _export("Constants", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9bbf8RNxZP/qHAzCKjmpIn", "constants", undefined);
      /**
       * Copyright (c) 2019 Xiamen Yaji Software Co.Ltd. All rights reserved.
       * Created by daisy on 2019/06/25.
       */


      __checkObsolete__(['_decorator', 'Vec3']);

      //跳板类型
      BOARD_TYPE = /*#__PURE__*/function (BOARD_TYPE) {
        BOARD_TYPE[BOARD_TYPE["NORMAL"] = 0] = "NORMAL";
        BOARD_TYPE[BOARD_TYPE["SPRING"] = 1] = "SPRING";
        BOARD_TYPE[BOARD_TYPE["DROP"] = 2] = "DROP";
        BOARD_TYPE[BOARD_TYPE["GIANT"] = 3] = "GIANT";
        BOARD_TYPE[BOARD_TYPE["SPRINT"] = 4] = "SPRINT";
        return BOARD_TYPE;
      }(BOARD_TYPE || {});

      GAME_STATE = /*#__PURE__*/function (GAME_STATE) {
        GAME_STATE[GAME_STATE["READY"] = 1] = "READY";
        GAME_STATE[GAME_STATE["PLAYING"] = 2] = "PLAYING";
        GAME_STATE[GAME_STATE["PAUSE"] = 3] = "PAUSE";
        GAME_STATE[GAME_STATE["OVER"] = 4] = "OVER";
        return GAME_STATE;
      }(GAME_STATE || {});

      GAME_EVENT = /*#__PURE__*/function (GAME_EVENT) {
        GAME_EVENT["RESTART"] = "restart";
        GAME_EVENT["REVIVE"] = "revive";
        GAME_EVENT["ADDSCORE"] = "add-score";
        GAME_EVENT["DYING"] = "dying";
        GAME_EVENT["HIDETIPS"] = "hide-tips";
        return GAME_EVENT;
      }(GAME_EVENT || {});

      JUMP_STATE = /*#__PURE__*/function (JUMP_STATE) {
        JUMP_STATE[JUMP_STATE["JUMPUP"] = 1] = "JUMPUP";
        JUMP_STATE[JUMP_STATE["FALLDOWN"] = 2] = "FALLDOWN";
        JUMP_STATE[JUMP_STATE["SPRINT"] = 3] = "SPRINT";
        return JUMP_STATE;
      }(JUMP_STATE || {});

      _export("Constants", Constants = class Constants {});

      Constants.COEFF_POS_BALL = 8 / 360;
      Constants.PLAYER_MAX_DOWN_FRAMES = 40;
      // 最大下落帧数
      Constants.MAX_SCORE = 0;
      // 历史最高
      // score
      Constants.SCORE_BOARD_CENTER = 2;
      // 小球靠近跳板圆心的分数
      Constants.SCORE_BOARD_NOT_CENTER = 1;
      // 小球跳入非跳板圆心的分数
      // board
      Constants.BOARD_INIT_POS = new Vec3(0, 10, 0);
      // 跳板初始位置
      Constants.BOARD_NUM = 6;
      // 跳板初始个数
      Constants.BOARD_NEW_INDEX = 2;
      // 每次新增两个跳板
      Constants.BOARD_HEIGTH = 0.25;
      // 跳板厚度
      Constants.BOARD_RADIUS = 1.5;
      // 跳板半径
      Constants.BOARD_HEIGTH_SCALE_DROP = 0.5;
      // 掉落板厚度缩放比例
      Constants.BOARD_RADIUS_SCALE_GIANT = 2.8;
      // 大跳板缩放比例
      Constants.BOARD_GAP = 4.3;
      // 正常板间隔高度
      Constants.BOARD_GAP_SPRING = 9;
      // 弹簧板间隔高度
      Constants.BOARD_GAP_SPRINT = 192;
      // 冲刺板间隔高度
      Constants.BOARD_SCALE_GIANT = 2.8;
      // 大跳板缩放比例
      Constants.SCENE_MAX_OFFSET_X = 3.5;
      // 小球最大横向移动距离
      Constants.BOARD_TYPE = BOARD_TYPE;
      // 跳板类型枚举
      Constants.BOARD_DROP_FRAMES = 40;
      // 掉落板下落帧数
      Constants.BOARD_DROP_STEP = 0.5;
      // 掉落板每帧下落距离
      Constants.BOARD_RADIUS_CENTER = 0.35;
      // 跳板圆心半径，小球根据距离圆心远近增加不同分数
      Constants.BOARD_SPRING_FRAMES = 10;
      Constants.BOARD_WAVE_FRAMES = 16;
      // 板子波动帧率
      Constants.BOARD_WAVE_INNER_START_FRAMES = 8;
      Constants.BOARD_WAVE_INNER_STEP = 0.12 * 2;
      Constants.BOARD_WAVE_STEP = 0.15 * 15;
      Constants.BOARD_MOVING_STEP = 0.03;
      // 移动板移动速度
      Constants.SPRING_HEIGHT = 0.2;
      Constants.SPRING_HELIX_STEP = 0.5;
      Constants.SPRING_HELIX_STEP_SPIRNT = 1.2;
      Constants.SPRING_TOP_STEP = 0.25;
      Constants.SPRING_TOP_STEP_SPRINT = 0.5;
      Constants.WAVE_OFFSET_Y = 0.13 / 2;
      // camera
      Constants.CAMERA_INIT_POS = new Vec3(0, 15, 22);
      // 相机初始位置
      Constants.CAMERA_INIT_ROT = new Vec3(-11, 0, 0);
      // 相机初始旋转
      Constants.CAMERA_MOVE_X_FRAMES = 20;
      // 相机横向偏移比例
      Constants.CAMERA_MOVE_Y_FRAMES = 15;
      // 相机纵向偏移比例
      Constants.CAMERA_MOVE_Y_FRAMES_SPRING = 23;
      // 弹簧跳板纵向偏移比例
      Constants.CAMERA_MOVE_MINI_ERR = 0.02;
      // 相机位置最小误差
      Constants.CAMERA_OFFSET_Y = 10;
      Constants.CAMERA_OFFSET_Y_SPRINT = 15;
      Constants.BOARD_BUMP_FRAMES = 10;
      Constants.BOARD_BUMP_STEP = [-0.15, -0.1, -0.07, -0.02, -0.003, 0.003, 0.02, 0.07, 0.1, 0.15];
      // game
      Constants.GAME_STATE = GAME_STATE;
      // 游戏状态枚举
      Constants.GAME_EVENT = GAME_EVENT;
      // 游戏事件枚举
      // ball
      Constants.BALL_RADIUS = 0.5;
      // 球体半径
      Constants.BALL_JUMP_STATE = JUMP_STATE;
      // 小球跳跃状态枚举
      Constants.BALL_JUMP_FRAMES = 20;
      // 正常跳跃帧数
      Constants.BALL_JUMP_FRAMES_SPRING = 27;
      // 弹簧板跳跃帧数
      Constants.BALL_JUMP_FRAMES_SPRINT = 240;
      // 冲刺板跳跃帧数
      Constants.BALL_JUMP_STEP = [0.8, 0.6, 0.5, 0.4, 0.3, 0.2, 0.15, 0.1, 0.05, 0.03];
      // 正常跳跃步长
      Constants.BALL_JUMP_STEP_SPRING = [1.2, 0.8, 0.6, 0.4, 0.3, 0.2, 0.15, 0.1, 0.05];
      // 弹簧跳跃步长
      Constants.BALL_JUMP_STEP_SPRINT = 0.8;
      // 冲刺跳跃步长
      Constants.BALL_SPRINT_STEP_Y = 10;
      //
      // diamond
      Constants.DIAMOND_NUM = 10;
      // 钻石复用数量
      Constants.DIAMOND_PIECE_NUM = 10;
      Constants.DIAMOND_RADIUS = 0.3;
      Constants.DIAMOND_ROTATE_STEP_Y = 1.5;
      Constants.DIAMOND_SCORE = 1;
      Constants.DIAMOND_SCORE_AREA = 0.6;
      Constants.DIAMOND_SPRINT_SCORE_AREA = 1;
      Constants.DIAMOND_SPRINT_STEP_Y = 4;
      Constants.DIAMOND_START_FRAME = 6;
      Constants.normalDt = 1 / 60;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a16df5c77eb21ddf135988d0aa25e5dea6d93b33.js.map