System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, Label, Prefab, ParticleSystem, Animation, Camera, ParticleUtils, find, Constants, utils, PoolManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, _tempPos, Ball;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoard(extras) {
    _reporterNs.report("Board", "./board", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../utils/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../utils/pool-manager", _context.meta, extras);
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
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      ParticleSystem = _cc.ParticleSystem;
      Animation = _cc.Animation;
      Camera = _cc.Camera;
      ParticleUtils = _cc.ParticleUtils;
      find = _cc.find;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      utils = _unresolved_3.utils;
    }, function (_unresolved_4) {
      PoolManager = _unresolved_4.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "900c8pQ81tCcrbRdvi9SxTB", "ball", undefined);
      /**
       * Copyright (c) 2019 Xiamen Yaji Software Co.Ltd. All rights reserved.
       * Created by daisy on 2019/06/25.
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Touch', 'EventTouch', 'Vec3', 'Label', 'Prefab', 'ParticleSystem', 'Animation', 'Camera', 'ParticleUtils', 'find']);

      ({
        ccclass,
        property
      } = _decorator); // 局部 vec3 变量复用

      _tempPos = new Vec3();

      _export("Ball", Ball = (_dec = ccclass("Ball"), _dec2 = property(Prefab), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class Ball extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "diamondParticlePrefab", _descriptor, this);

          _initializerDefineProperty(this, "scoreAniPrefab", _descriptor2, this);

          // @property({ type: Prefab })
          // trail01Prefab: Prefab = null;
          _initializerDefineProperty(this, "trail02Prefab", _descriptor3, this);

          this.currBoard = null;
          // 当前接触的板
          this.boardCount = 0;
          this.jumpState = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BALL_JUMP_STATE.JUMPUP;
          this.currBoardIdx = 0;
          this.diffLevel = 1;
          this.currJumpFrame = 0;
          // 当前跳跃频率（移动距离是以每帧移动*频率来判断）
          this.hasSprint = false;
          this.isTouch = false;
          this.touchPosX = 0;
          // 点击屏幕位置 x
          this.movePosX = 0;
          // 移动位置 x
          this.isJumpSpring = false;
          // 处于弹簧版弹跳状态
          this.boardGroupCount = 0;
          this.trailNode = null;
          this.timeScale = 0;
          this._wPos = new Vec3();
        }

        start() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.RESTART, this.gameStart, this); // @ts-ignore
          // this.trailNode = PoolManager.instance.getNode(this.trail01Prefab, this.node.parent);

          this.updateBall();
          this.reset();
        }

        onDestroy() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.RESTART, this.gameStart, this);
        }

        update(deltaTime) {
          this.timeScale = Math.floor(deltaTime / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).normalDt * 100) / 100;

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.state === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_STATE.PLAYING) {
            const boardBox = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).game.boardManager;
            const boardList = boardBox.getBoardList();

            if (this.jumpState === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_STATE.SPRINT) {
              // 冲刺状态结束后状态切换
              if (this.currJumpFrame > (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_FRAMES_SPRINT) {
                this.jumpState = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BALL_JUMP_STATE.JUMPUP;
                this.isJumpSpring = false;
                this.currJumpFrame = 0;
                this.hasSprint = false; // const eulerAngles = this.node.eulerAngles;
                // this.node.eulerAngles = new Vec3(eulerAngles.x, -Constants.BALL_SPRINT_STEP_Y, eulerAngles.z);

                boardBox.clearDiamond();
              }

              this.currJumpFrame += this.timeScale;
              const diamondSprintList = boardBox.getDiamondSprintList();

              for (let i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).DIAMOND_NUM; i++) {
                if (Math.abs(this.node.position.y - diamondSprintList[i].position.y) <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).DIAMOND_SPRINT_SCORE_AREA && Math.abs(this.node.position.x - diamondSprintList[i].position.x) <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).DIAMOND_SPRINT_SCORE_AREA) {
                  (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).game.addScore((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).DIAMOND_SCORE);
                  this.showScore((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).DIAMOND_SCORE);
                  (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).game.ball.playDiamondParticle(this.node.position);
                  diamondSprintList[i].active = false;
                }
              }

              this.setPosY();
              this.setPosX(); // this.setRotY();

              this.touchPosX = this.movePosX;
              const y = this.node.position.y + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CAMERA_OFFSET_Y_SPRINT;
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).game.cameraCtrl.setOriginPosY(y);
            } else {
              for (let i = this.currBoardIdx + 1; i >= 0; i--) {
                const board = boardList[i];
                const pos = this.node.position;
                const boardPos = boardList[i].node.position;

                if (Math.abs(pos.x - boardPos.x) <= boardList[i].getRadius() && Math.abs(pos.y - (boardPos.y + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_HEIGTH)) <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).DIAMOND_SCORE_AREA) {
                  boardList[i].checkDiamond(pos.x);
                } // 超过当前跳板应该弹跳高度，开始下降


                if (this.jumpState === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BALL_JUMP_STATE.FALLDOWN) {
                  if (this.currJumpFrame > (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).PLAYER_MAX_DOWN_FRAMES || this.currBoard.node.position.y - pos.y - ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).BOARD_GAP + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).BOARD_HEIGTH) > 0.001) {
                    ParticleUtils.stop(this.trailNode);
                    (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).game.gameDie();
                    return;
                  } // 是否在当前检测的板上


                  if (this.isOnBoard(board)) {
                    this.currBoard = board;
                    this.currBoardIdx = i;
                    this.activeCurrBoard();
                    break;
                  }
                }
              }

              this.currJumpFrame += this.timeScale;

              if (this.jumpState === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_STATE.JUMPUP) {
                if (this.isJumpSpring && this.currJumpFrame >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BALL_JUMP_FRAMES_SPRING) {
                  // 处于跳跃状态并且当前跳跃高度超过弹簧板跳跃高度
                  this.jumpState = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).BALL_JUMP_STATE.FALLDOWN;
                  this.currJumpFrame = 0;
                } else {
                  if (!this.isJumpSpring && this.currJumpFrame >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).BALL_JUMP_FRAMES) {
                    // 跳跃距离达到限制，开始下落
                    this.jumpState = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).BALL_JUMP_STATE.FALLDOWN;
                    this.currJumpFrame = 0;
                  }
                }
              }

              this.setPosY();
              this.setPosX(); // this.setRotZ();

              if (this.currBoard.type !== (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_TYPE.SPRINT) {
                (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).game.cameraCtrl.setOriginPosX(this.node.position.x);
              }

              this.touchPosX = this.movePosX;
            }

            this.setTrailPos();
          }
        }

        onTouchStart(touch, event) {
          this.isTouch = true;
          this.touchPosX = touch.getLocation().x;
          this.movePosX = this.touchPosX;
        }

        onTouchMove(touch, event) {
          this.movePosX = touch.getLocation().x;
        }

        onTouchEnd(touch, event) {
          this.isTouch = false;
        }

        gameStart() {
          this.playTrail();
        }

        reset() {
          this.boardCount = 0;
          this.diffLevel = 1;

          _tempPos.set((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_INIT_POS);

          _tempPos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BALL_RADIUS + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_HEIGTH / 2 - .001;
          this.node.setPosition(_tempPos);
          this.node.eulerAngles = new Vec3();
          this.currJumpFrame = 0;
          this.jumpState = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BALL_JUMP_STATE.FALLDOWN;
          this.hasSprint = false;
          this.currBoardIdx = 0;
          this.show();
          this.setTrailPos();
        }

        updateBall() {
          // PoolManager.instance.putNode(this.trailNode);
          // @ts-ignore
          this.trailNode = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.getNode(this.trail02Prefab, this.node.parent);
        }

        show() {
          this.node.active = true;
        }

        hide() {
          this.node.active = false;
        }

        activeCurrBoard() {
          const pos = this.node.position;
          const boardPos = this.currBoard.node.position;
          const boardType = this.currBoard.type;
          const y = boardPos.y + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BALL_RADIUS + this.currBoard.getHeight() / 2 - .01;
          this.node.setPosition(pos.x, y, pos.z);
          this.currJumpFrame = 0;

          if (boardType === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRINT) {
            this.jumpState = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_STATE.SPRINT; // this.node.eulerAngles = new Vec3(this.node.eulerAngles.x, this.node.eulerAngles.y, 0);

            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).game.cameraCtrl.setOriginPosX(boardPos.x);
          } else {
            this.jumpState = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_STATE.JUMPUP;
          }

          if (!this.currBoard.isActive) {
            this.currBoard.isActive = true;
            let score = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SCORE_BOARD_NOT_CENTER;

            if (boardType !== (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_TYPE.NORMAL && boardType !== (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_TYPE.DROP || Math.abs(pos.x - boardPos.x) <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_RADIUS_CENTER) {
              score = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SCORE_BOARD_CENTER;
            }

            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).game.addScore(score);
            this.showScore(score);
            this.boardCount++;

            if (this.boardCount === 5) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).game.node.emit((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).GAME_EVENT.HIDETIPS);
            }

            this.diffLevel += score / 2;

            for (let l = this.currBoardIdx - (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_NEW_INDEX; l > 0; l--) {
              this.newBoard();
            }
          }

          this.isJumpSpring = boardType === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRING;
          this.currBoard.setBump();
          this.currBoard.setWave();

          if (boardType == (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRING || boardType == (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRINT) {
            this.currBoard.setSpring();
          } // 掉落板开始掉落


          const boardList = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.boardManager.getBoardList();

          if (boardType === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.DROP) {
            for (let l = 0; l < this.currBoardIdx; l++) {
              boardList[l].setDrop();
            }
          }

          const c = boardPos.y + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CAMERA_OFFSET_Y;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.cameraCtrl.setOriginPosY(c);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.cameraCtrl.preType = boardType;
        } // 创建新跳板信息


        newBoard() {
          let type = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.NORMAL;

          if (this.boardGroupCount <= 0) {
            const coeff = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).getDiffCoeff(this.diffLevel, 1, 10);
            const t = Math.random() * coeff;

            if (t < 4.2) {
              type = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_TYPE.NORMAL;
              this.boardGroupCount = 2;
            } else if (t <= 5.5) {
              type = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_TYPE.GIANT;
              this.boardGroupCount = 3;
            } else if (t <= 6.2) {
              type = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_TYPE.SPRING;

              if (Math.random() > 0.5) {
                this.boardGroupCount = 2;
              }
            } else if (t <= 7) {
              type = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_TYPE.DROP;
              this.boardGroupCount = 3;
            } else if (t <= 7.5 && false === this.hasSprint) {
              type = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_TYPE.SPRINT;
              this.hasSprint = true;
            } else {
              type = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_TYPE.NORMAL;
            }
          }

          this.boardGroupCount--;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.boardManager.newBoard(type, this.diffLevel);
        } // 界面上的弹跳分数


        showScore(score) {
          const node = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.getNode(this.scoreAniPrefab, find('Canvas/resultUI'));
          const pos = new Vec3();
          const cameraComp = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.cameraCtrl.node.getComponent(Camera);

          this._wPos.set(this.node.worldPosition);

          cameraComp.convertToUINode(this._wPos, find('Canvas/resultUI'), pos);
          pos.x += 50;
          node.setPosition(pos);
          node.getComponentInChildren(Label).string = `+${score}`;
          const animationComponent = node.getComponent(Animation);
          animationComponent.once(Animation.EventType.FINISHED, () => {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(node);
          });
          animationComponent.play();
        }

        setPosX() {
          if (this.isTouch && this.touchPosX !== this.movePosX) {
            _tempPos.set(this.node.position);

            if (this.jumpState === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_STATE.SPRINT) {
              let x = (this.movePosX - this.touchPosX) * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).COEFF_POS_BALL;
              this.node.setPosition(_tempPos.x + x, _tempPos.y, _tempPos.z);

              _tempPos.set(this.node.position);

              x = _tempPos.x;
              let t = 1.3 * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SCENE_MAX_OFFSET_X;
              const currBoardPos = this.currBoard.node.position;

              if (x > currBoardPos.x + t) {
                this.node.setPosition(currBoardPos.x + t, _tempPos.y, _tempPos.z);
              } else if (x < this.currBoard.node.position.x - t) {
                this.node.setPosition(currBoardPos.x - t, _tempPos.y, _tempPos.z);
              }
            } else {
              const x = (this.movePosX - this.touchPosX) * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).COEFF_POS_BALL;
              this.node.setPosition(_tempPos.x + x, _tempPos.y, _tempPos.z);
            }
          }
        } // 垂直位置变化，每帧变动


        setPosY() {
          _tempPos.set(this.node.position); // 跳跃状态处理


          if (this.jumpState === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BALL_JUMP_STATE.JUMPUP) {
            if (this.isJumpSpring) {
              _tempPos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_STEP_SPRING[Math.floor(this.currJumpFrame / 3)] * this.timeScale;
            } else {
              _tempPos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_STEP[Math.floor(this.currJumpFrame / 2)] * this.timeScale;
            }

            this.node.setPosition(_tempPos); // 下落状态处理
          } else if (this.jumpState === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BALL_JUMP_STATE.FALLDOWN) {
            if (this.currBoard.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_TYPE.SPRING) {
              if (this.currJumpFrame < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_FRAMES_SPRING) {
                const step = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BALL_JUMP_FRAMES_SPRING - this.currJumpFrame - 1;
                _tempPos.y -= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BALL_JUMP_STEP_SPRING[Math.floor((step >= 0 ? step : 0) / 3)] * this.timeScale;
              } else {
                _tempPos.y -= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BALL_JUMP_STEP_SPRING[0] * this.timeScale;
              }
            } else if (this.currJumpFrame < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_FRAMES) {
              const step = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_FRAMES - this.currJumpFrame - 1;
              _tempPos.y -= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_STEP[Math.floor((step >= 0 ? step : 0) / 2)] * this.timeScale;
            } else {
              _tempPos.y -= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_STEP[0] * this.timeScale;
            }

            this.node.setPosition(_tempPos); // 冲刺跳跃状态处理
          } else if (this.jumpState === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BALL_JUMP_STATE.SPRINT) {
            _tempPos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_STEP_SPRINT * this.timeScale;
            this.node.setPosition(_tempPos);

            if (this.currJumpFrame >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DIAMOND_START_FRAME + 20 && this.currJumpFrame <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_FRAMES_SPRINT - 50 && Math.floor(this.currJumpFrame) % Math.floor((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DIAMOND_SPRINT_STEP_Y / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_STEP_SPRINT) == 0) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).game.boardManager.newDiamond();
            }
          }
        } // 当前处于哪块板子上


        isOnBoard(board) {
          const pos = this.node.position;
          const boardPos = board.node.position;
          const x = Math.abs(pos.x - boardPos.x);
          const y = pos.y - boardPos.y; // 在板子的半径内

          if (x <= board.getRadius()) {
            if (y >= 0 && y <= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_RADIUS + board.getHeight() / 2) {
              return true;
            } // 处于下落状态


            if (this.isJumpSpring && this.currJumpFrame >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_FRAMES_SPRING) {
              // 是否处于反弹后的第一次匀减速范围内
              if (Math.abs(y) < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_STEP_SPRING[0]) {
                return true;
              }
            } else if (!this.isJumpSpring && this.currJumpFrame >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BALL_JUMP_FRAMES) {
              if (Math.abs(y) < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BALL_JUMP_STEP[0]) {
                return true;
              }
            }
          }

          return false;
        }

        revive() {
          this.currBoardIdx--;

          if (this.currBoard.type === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_TYPE.SPRINT) {
            this.currBoardIdx++;
            this.currBoard = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).game.boardManager.getBoardList()[this.currBoardIdx];
          }

          this.currBoard.revive();
          const pos = this.currBoard.node.position.clone();
          pos.y += (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BALL_RADIUS + this.currBoard.getHeight() / 2 - .001;
          this.node.setPosition(pos);
          this.node.eulerAngles = new Vec3(0, 0, 0);
          this.currJumpFrame = 0;
          this.show();
          const y = this.currBoard.node.position.y + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CAMERA_OFFSET_Y;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.cameraCtrl.setOriginPosX(pos.x);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.cameraCtrl.setOriginPosY(y);
          this.playTrail();
          this.setTrailPos();
        }

        playDiamondParticle(pos) {
          // @ts-ignore
          const diamondParticle = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.getNode(this.diamondParticlePrefab, this.node.parent);
          diamondParticle.setPosition(pos);
          const particleSystemComp = diamondParticle.getComponent(ParticleSystem);
          particleSystemComp.play();

          const fun = () => {
            if (!particleSystemComp.isPlaying) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(diamondParticle);
              this.unschedule(fun);
            }
          };

          this.schedule(fun, 0.1);
        }

        playTrail() {
          ParticleUtils.play(this.trailNode);
        }

        setTrailPos() {
          const pos = this.node.position;
          this.trailNode.setPosition(pos.x, pos.y - 0.1, pos.z);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "diamondParticlePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scoreAniPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "trail02Prefab", [_dec4], {
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
//# sourceMappingURL=1174eda6089b5a0a6483038a72cc3b868fb0e752.js.map