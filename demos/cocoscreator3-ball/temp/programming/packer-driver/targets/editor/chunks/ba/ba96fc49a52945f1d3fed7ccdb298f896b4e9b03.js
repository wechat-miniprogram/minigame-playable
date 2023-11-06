System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, _dec, _class, _crd, ccclass, property, UpdateValueLabel;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02566VN0PhN8o7NqZg0WyFs", "update-value-label", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpdateValueLabel", UpdateValueLabel = (_dec = ccclass("UpdateValueLabel"), _dec(_class = class UpdateValueLabel extends Label {
        constructor(...args) {
          super(...args);
          this.isPlaying = false;
          this.startVal = 0;
          this.endVal = 0;
          this.diffVal = 0;
          this.currTime = 0;
          this.changingTime = 0;
        }

        start() {// Your initialization goes here.
        }

        playUpdateValue(startVal, endVal, changingTime) {
          this.startVal = startVal;
          this.endVal = endVal;
          this.diffVal = this.endVal - this.startVal;
          this.currTime = 0;
          this.changingTime = changingTime;
          this.string = startVal.toString();
          this.isPlaying = true;
        }

        update(dt) {
          if (!this.isPlaying) {
            return;
          }

          if (this.currTime < this.changingTime) {
            this.currTime += dt;
            var currVal = this.startVal + parseInt((this.currTime / this.changingTime * this.diffVal).toString());

            if (currVal < this.startVal) {
              currVal = this.startVal;
            } else if (currVal > this.endVal) {
              currVal = this.endVal;
            }

            this.string = `${currVal}`;
            return;
          }

          this.string = `${this.endVal}`;
          this.isPlaying = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba96fc49a52945f1d3fed7ccdb298f896b4e9b03.js.map