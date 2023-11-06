System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Constants, _dec, _class, _crd, ccclass, property, PageStart;

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
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75579oVThhNcJN3jNLu42YC", "page-start", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PageStart", PageStart = (_dec = ccclass("PageStart"), _dec(_class = class PageStart extends Component {
        gameStart() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.node.emit((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_EVENT.RESTART);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).game.audioManager.playClip();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0784e960473648402f6932dc8e2cd19ea3329165.js.map