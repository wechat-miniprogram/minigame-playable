System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _crd, ccclass, property, utils;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dddce/2a/tOSLUiRKNMAQVd", "utils", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("utils", utils = {
        getDiffCoeff: function getDiffCoeff(e, t, a) {
          return (a * e + 1) / (1 * e + ((a + 1) / t - 1));
        },
        getRandomInt: function getRandomInt(min, max) {
          var r = Math.random();
          var rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0312830c14882325649f08183b3b735a8287bea7.js.map