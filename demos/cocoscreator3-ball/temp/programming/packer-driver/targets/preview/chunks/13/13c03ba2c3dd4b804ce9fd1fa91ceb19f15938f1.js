System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, NodePool, _dec, _class, _crd, ccclass, property, PoolManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f92c3xOcsdMEKh7W/84QPrD", "pool-manager", undefined); // Learn cc.Class:
      //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
      // Learn Attribute:
      //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
      // Learn life-cycle callbacks:
      //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html


      __checkObsolete__(['_decorator', 'Prefab', 'Node', 'instantiate', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolManager", PoolManager = (_dec = ccclass("PoolManager"), _dec(_class = class PoolManager {
        constructor() {
          this.dictPool = {};
          this.dictPrefab = {};
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new PoolManager();
          return this._instance;
        }
        /**
         * 根据预设从对象池中获取对应节点
         */


        getNode(prefab, parent) {
          var name = prefab.data.name;
          this.dictPrefab[name] = prefab;
          var node = null;

          if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this.dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            //没有对应对象池，创建他！
            var _pool = new NodePool();

            this.dictPool[name] = _pool;
            node = instantiate(prefab);
          }

          node.parent = parent;
          return node;
        }
        /**
         * 将对应节点放回对象池中
         */


        putNode(node) {
          var name = node.name;
          var pool = null;

          if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this.dictPool[name];
          } else {
            //没有对应对象池，创建他！
            pool = new NodePool();
            this.dictPool[name] = pool;
          }

          pool.put(node);
        }
        /**
         * 根据名称，清除对应对象池
         */


        clearPool(name) {
          if (this.dictPool.hasOwnProperty(name)) {
            var pool = this.dictPool[name];
            pool.clear();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13c03ba2c3dd4b804ce9fd1fa91ceb19f15938f1.js.map