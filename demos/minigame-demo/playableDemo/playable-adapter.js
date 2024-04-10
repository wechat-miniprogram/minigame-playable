/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * 一些全局通用配置维护
 */
var GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
        this.userPathPrefix = 'playableDemo/';
        this.debug = true;
    }
    return GlobalConfig;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GlobalConfig());


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageWrapper: () => (/* binding */ ImageWrapper),
/* harmony export */   fixCreateImage: () => (/* binding */ fixCreateImage),
/* harmony export */   imageMap: () => (/* binding */ imageMap)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var imageMap = new WeakMap();
var ImageWrapper = /** @class */ (function () {
    function ImageWrapper(img) {
        this.__image__ = true;
        this.tagName = 'IMG';
        this.nodeName = 'IMG';
        imageMap.set(this, img);
    }
    Object.defineProperty(ImageWrapper.prototype, "width", {
        get: function () {
            return imageMap.get(this).width;
        },
        set: function (value) {
            imageMap.get(this).width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageWrapper.prototype, "height", {
        get: function () {
            return imageMap.get(this).height;
        },
        set: function (value) {
            imageMap.get(this).height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageWrapper.prototype, "complete", {
        get: function () {
            return imageMap.get(this).complete;
        },
        set: function (value) {
            imageMap.get(this).complete = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageWrapper.prototype, "src", {
        get: function () {
            var image = imageMap.get(this);
            return image.src;
        },
        set: function (src) {
            var image = imageMap.get(this);
            // base64图片不修改src
            if (src && !src.includes('data:')) {
                image.src = _config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix + src;
            }
            else {
                image.src = src;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageWrapper.prototype, "onload", {
        get: function () {
            return imageMap.get(this).onload;
        },
        set: function (value) {
            imageMap.get(this).onload = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageWrapper.prototype, "onerror", {
        get: function () {
            return imageMap.get(this).onerror;
        },
        set: function (value) {
            imageMap.get(this).onerror = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageWrapper.prototype.addEventListener = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 需要将 listener 套上一层替换 event.target
        var img = imageMap.get(this);
        img.addEventListener.apply(img, __spreadArray([], __read(args), false));
    };
    ImageWrapper.prototype.removeEventListener = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var img = imageMap.get(this);
        img.removeEventListener.apply(img, __spreadArray([], __read(args), false));
    };
    return ImageWrapper;
}());

function fixCreateImage() {
    // 缓存旧的方法
    var originAPI = wx.createImage;
    Object.defineProperty(wx, 'createImage', {
        value: function () {
            var image = originAPI();
            return new ImageWrapper(image);
        }
    });
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixGetFileSystemManager: () => (/* binding */ fixGetFileSystemManager)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

// 真机USER_DATA_PATH是'/'
var userPathPrefix = wx.env.USER_DATA_PATH;
var originApi = wx.getFileSystemManager;
function fixGetFileSystemManager() {
    Object.defineProperty(wx, 'getFileSystemManager', {
        value: function () {
            var fs = originApi();
            Object.keys(fs).forEach(function (key) {
                var originFsApi = fs[key];
                Object.defineProperty(fs, key, {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        // 同步接口大部分文件路径作为第一个参数传入
                        if (key.includes('Sync')) {
                            if (args && typeof args[0] === 'string' && !args[0].startsWith(userPathPrefix)) {
                                args[0] = _config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix + args[0];
                            }
                        }
                        else {
                            // 异步接口
                            if (args[0]) {
                                // 路径有filePath和path两种
                                if (args[0].filePath) {
                                    args[0].filePath = _config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix + args[0].filePath;
                                }
                                if (args[0].path) {
                                    args[0].path = _config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix + args[0].path;
                                }
                            }
                        }
                        return originFsApi.apply(void 0, __spreadArray([], __read(args), false));
                    },
                    configurable: true,
                });
            });
            // 引擎需要access接口，但真机不支持，手动适配，并始终返回success
            Reflect.defineProperty(fs, 'access', {
                value: function (args) {
                    if (args.success && typeof args.success === 'function') {
                        args.success({ errMsg: 'access:ok', errCode: 0 });
                    }
                },
                configurable: true,
            });
            // 引擎会向用户目录写缓存，加个空实现避免报错
            Reflect.defineProperty(fs, 'writeFileSync', {
                value: function () {
                },
                configurable: true,
            });
            return fs;
        },
        configurable: true,
    });
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixGetOpenDataContext: () => (/* binding */ fixGetOpenDataContext)
/* harmony export */ });
function fixGetOpenDataContext() {
    // cocos 依赖这个 api 来判断小游戏环境，mock 一下
    wx.getOpenDataContext = function () {
        return undefined;
    };
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixGetSystemInfoSync: () => (/* binding */ fixGetSystemInfoSync)
/* harmony export */ });
function fixGetSystemInfoSync() {
    var originApi = wx.getSystemInfoSync;
    Reflect.defineProperty(wx, 'getSystemInfoSync', {
        value: function () {
            var ret = originApi();
            // 开发者工具上有platform，真机没有
            if (!ret.platform) {
                ret.platform = ret.model && ret.model.includes('iPhone') ? 'ios' : 'android';
            }
            // 全局未注入devicePixelRatio
            if (!GameGlobal.devicePixelRatio) {
                GameGlobal.devicePixelRatio = ret.pixelRatio;
            }
            return ret;
        },
        configurable: true,
    });
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixWXWebAssembly: () => (/* binding */ fixWXWebAssembly)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

function fixWXWebAssembly() {
    var originApi = WXWebAssembly.instantiate;
    Object.defineProperty(WXWebAssembly, 'instantiate', {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args && args[0]) {
                args[0] = _config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix + args[0];
            }
            return originApi.apply(void 0, __spreadArray([], __read(args), false));
        }
    });
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixLoadFont: () => (/* binding */ fixLoadFont)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function fixLoadFont() {
    var originApi = wx.loadFont;
    Reflect.defineProperty(wx, 'loadFont', {
        value: function (path) {
            if (originApi) {
                return originApi(_config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix + path);
            }
            else {
                // 真机没有loadFont接口，假设接口调用成功
                return '';
            }
        },
        configurable: true,
    });
}


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixCreateInnerAudioContext: () => (/* binding */ fixCreateInnerAudioContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


function fixCreateInnerAudioContext() {
    var originApi = wx.createInnerAudioContext;
    Reflect.defineProperty(wx, 'createInnerAudioContext', {
        value: function () {
            var innerAudio = originApi();
            // 获取原有属性的描述符
            var originalDescriptor = Object.getOwnPropertyDescriptor(innerAudio, 'src');
            /**
             * 低版本的试玩基础库音频实例的属性是不能通过 Object.defineProperty 重定义的
             * 高版本基础库修复了这个问题，因此针对低版本基础库做一个提示
             */
            if (!originalDescriptor.configurable) {
                _logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error("\u5F53\u524D\u57FA\u7840\u5E93\u97F3\u9891\u4E0D\u53EF\u9002\u914D\uFF0C\u8BF7\u624B\u52A8\u7ED9\u97F3\u9891\u7684src\u52A0\u4E0A\u72EC\u7ACB\u5206\u5305\u7684\u524D\u7F00".concat(_config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix, "!"));
            }
            else {
                Object.defineProperty(innerAudio, 'src', {
                    get: function () {
                        return originalDescriptor.get.call(this);
                    },
                    set: function (value) {
                        // 如果已经手动加过前缀了，不需要重复添加
                        if (value.indexOf(_config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix) === -1) {
                            originalDescriptor.set.call(this, _config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix + value);
                        }
                        else {
                            originalDescriptor.set.call(this, value);
                        }
                    }
                });
            }
            return innerAudio;
        },
        configurable: true,
    });
}


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixGlobalAPI: () => (/* binding */ fixGlobalAPI)
/* harmony export */ });
function fixGlobalAPI() {
    // 真机没有以下接口，需要适配
    if (!wx.onHide) {
        wx.onHide = function () { };
    }
    if (!wx.onShow) {
        wx.onShow = function (cb) {
            // 注册onShow就立即回调
            if (cb) {
                cb();
            }
        };
    }
    var timeLabel = new Map();
    var latestTime = 0;
    // DOM和小游戏类型定义冲突
    if (!console.time) {
        console.time = function (label) {
            if (label) {
                timeLabel.set(label, Date.now());
            }
            latestTime = Date.now();
        };
    }
    if (!console.timeEnd) {
        console.timeEnd = function (label) {
            var t = Date.now();
            var delta = t - latestTime;
            if (label) {
                delta = t - timeLabel.get(label);
                timeLabel.delete(label);
            }
            console.log("".concat(label, ": ").concat(delta, " ms"));
            return "".concat(label, ": ").concat(delta, " ms");
        };
    }
    if (!wx.onDeviceOrientationChange) {
        Reflect.defineProperty(wx, 'onDeviceOrientationChange', {
            value: function () { },
            configurable: true,
        });
    }
}


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixCreateCanvas: () => (/* binding */ fixCreateCanvas)
/* harmony export */ });
/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

function hookCanvas2d(originalContext) {
    var drawApis = ['drawImage'];
    drawApis.forEach(function (key) {
        var originApi = originalContext[key];
        Reflect.defineProperty(originalContext, key, {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args && args[0].__image__) {
                    args[0] = _createImage__WEBPACK_IMPORTED_MODULE_0__.imageMap.get(args[0]);
                }
                originApi.call.apply(originApi, __spreadArray([originalContext], __read(args), false));
            },
            configurable: true,
        });
    });
}
function hookWebgl(originalContext) {
    var drawApis = ['texImage2D', 'texSubImage2D', 'compressedTexImage2D', 'compressedTexImage3D', 'compressedTexSubImage2D'];
    drawApis.forEach(function (key) {
        var originApi = originalContext[key];
        Reflect.defineProperty(originalContext, key, {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // texImage2D，图片数据可能作为第九个参数，也可能作为第六个参数
                // texSubImage2D, 图片参数为第九个或第七个参数
                // compressedTexImage2D, 图片参数作为第7,8个参数
                // compressedTexSubImage2D, 图片作为第8个参数
                if (args) {
                    if (args[5] && args[5].__image__) {
                        args[5] = _createImage__WEBPACK_IMPORTED_MODULE_0__.imageMap.get(args[5]);
                    }
                    if (args[6] && args[6].__image__) {
                        args[6] = _createImage__WEBPACK_IMPORTED_MODULE_0__.imageMap.get(args[6]);
                    }
                    if (args[7] && args[7].__image__) {
                        args[7] = _createImage__WEBPACK_IMPORTED_MODULE_0__.imageMap.get(args[7]);
                    }
                    if (args[8] && args[8].__image__) {
                        args[8] = _createImage__WEBPACK_IMPORTED_MODULE_0__.imageMap.get(args[8]);
                    }
                }
                originApi.call.apply(originApi, __spreadArray([originalContext], __read(args), false));
            },
            configurable: true,
        });
    });
}
function fixCreateCanvas() {
    var originApi = wx.createCanvas;
    Reflect.defineProperty(wx, 'createCanvas', {
        value: function () {
            var ret = originApi();
            var originGetContext = ret.getContext;
            ret.getContext = function (contextType, contextAttributes) {
                var originalContext = originGetContext.apply(ret, [contextType, contextAttributes]);
                if (contextType === '2d') {
                    hookCanvas2d(originalContext);
                }
                if (contextType === 'webgl' || contextType === 'webgl2') {
                    hookWebgl(originalContext);
                }
                return originalContext;
            };
            return ret;
        },
        configurable: true,
    });
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
var VERSION = '1.0.0';


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["None"] = 0] = "None";
    LogLevel[LogLevel["Event"] = 1] = "Event";
    LogLevel[LogLevel["Error"] = 2] = "Error";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Info"] = 4] = "Info";
    LogLevel[LogLevel["Debug"] = 5] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.error = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (Logger.logLevel >= LogLevel.Error) {
            console.error.apply(console, __spreadArray(['[playable-adapter][error]'], __read(message), false));
        }
    };
    Logger.warn = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (Logger.logLevel >= LogLevel.Warn) {
            console.warn.apply(console, __spreadArray(['[playable-adapter][warn]'], __read(message), false));
        }
    };
    Logger.info = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (Logger.logLevel >= LogLevel.Info) {
            console.info.apply(console, __spreadArray(['[playable-adapter][info]'], __read(message), false));
        }
    };
    Logger.debug = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (Logger.logLevel >= LogLevel.Debug) {
            console.log.apply(console, __spreadArray(['[playable-adapter][debug]'], __read(message), false));
        }
    };
    Logger.setLogLevel = function (logLevel) {
        Logger.logLevel = logLevel;
    };
    Logger.getLogLevel = function () {
        return Logger.logLevel;
    };
    Logger.logLevel = LogLevel.Info;
    return Logger;
}());



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayableAdapter: () => (/* binding */ PlayableAdapter)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _getFileSystemManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _getOpenDataContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _getSystemInfoSync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _WXWebAssembly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _loadFont__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _createInnerAudioContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);












var PlayableAdapter = /** @class */ (function () {
    function PlayableAdapter(config) {
        var userPathPrefix = config.userPathPrefix;
        _logger__WEBPACK_IMPORTED_MODULE_11__.Logger.info('config', config);
        _config__WEBPACK_IMPORTED_MODULE_0__["default"].userPathPrefix = userPathPrefix;
        (0,_global__WEBPACK_IMPORTED_MODULE_9__.fixGlobalAPI)();
        (0,_createImage__WEBPACK_IMPORTED_MODULE_2__.fixCreateImage)();
        (0,_getSystemInfoSync__WEBPACK_IMPORTED_MODULE_5__.fixGetSystemInfoSync)();
        (0,_getOpenDataContext__WEBPACK_IMPORTED_MODULE_4__.fixGetOpenDataContext)();
        (0,_getFileSystemManager__WEBPACK_IMPORTED_MODULE_3__.fixGetFileSystemManager)();
        (0,_WXWebAssembly__WEBPACK_IMPORTED_MODULE_6__.fixWXWebAssembly)();
        (0,_loadFont__WEBPACK_IMPORTED_MODULE_7__.fixLoadFont)();
        (0,_createInnerAudioContext__WEBPACK_IMPORTED_MODULE_8__.fixCreateInnerAudioContext)();
        (0,_createCanvas__WEBPACK_IMPORTED_MODULE_10__.fixCreateCanvas)();
        // 调用getSystemInfoSync时会设置devicePixelRatio，先触发一次
        wx.getSystemInfoSync();
        _logger__WEBPACK_IMPORTED_MODULE_11__.Logger.info("v".concat(_const__WEBPACK_IMPORTED_MODULE_1__.VERSION, " inited!"));
    }
    return PlayableAdapter;
}());


})();

module.exports = __webpack_exports__;
/******/ })()
;