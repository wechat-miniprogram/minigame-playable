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
        getDiffCoeff: function (e, t, a) {
          return (a * e + 1) / (1 * e + ((a + 1) / t - 1));
        },
        getRandomInt: function (min, max) {
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
//# sourceMappingURL=775e5ef435288427426d3c36dff8fb97be4a2e74.js.map