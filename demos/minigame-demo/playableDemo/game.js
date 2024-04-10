// 开启enable之后的日志才输出到vConsole
wx.setEnableDebug({
    enableDebug: true,
})

// 引用适配器
const PlayableAdapter = require('./playable-adapter.js').PlayableAdapter;

// 小游戏试玩支持多个独立分包，因此初始化需要传入独立分包的路径
new PlayableAdapter({
  userPathPrefix: 'playableDemo/',
});

function __initApp () {  // init app
globalThis.__wxRequire = require;  // FIX: require cannot work in separate engine 
require('./web-adapter');
const firstScreen = require('./first-screen');


// Polyfills bundle.
require("src/polyfills.bundle.js");

// SystemJS support.
require("src/system.bundle.js");


// Adapt for IOS, swap if opposite
const info = wx.getSystemInfoSync();
if (canvas){
    var _w = canvas.width;
    var _h = canvas.height;
    if (info.screenWidth < info.screenHeight) {
        if (canvas.width > canvas.height) {
            _w = canvas.height;
            _h = canvas.width;
        }
    } else {
        if (canvas.width < canvas.height) {
            _w = canvas.height;
            _h = canvas.width;
        }
    }
    canvas.width = _w;
    canvas.height = _h;
}
// Adjust initial canvas size
if (canvas && window.devicePixelRatio >= 2) {canvas.width *= info.devicePixelRatio; canvas.height *= info.devicePixelRatio;}

const importMap = require("src/import-map.js").default;
System.warmup({
    importMap,
    importMapUrl: 'src/import-map.js',
    defaultHandler: (urlNoSchema) => {
        require('.' + urlNoSchema);
    },
    handlers: {
        'plugin:': (urlNoSchema) => {
            requirePlugin(urlNoSchema);
        },
        'project:': (urlNoSchema) => {
            require(urlNoSchema);
        },
    },
});

firstScreen.start('default', 'default', 'false').then(() => {
    return System.import('./application.js');
}).then((module) => {
    return firstScreen.setProgress(0.2).then(() => Promise.resolve(module));
}).then(({ Application }) => {
    return new Application();
}).then((application) => {
    return firstScreen.setProgress(0.4).then(() => Promise.resolve(application));
}).then((application) => {
    return onApplicationCreated(application);
}).catch((err) => {
    console.error(err);
});

function onApplicationCreated(application) {
    return System.import('cc').then((module) => {
        return firstScreen.setProgress(0.6).then(() => Promise.resolve(module));
    }).then((cc) => {
        require('./engine-adapter');
        return application.init(cc);
    }).then(() => {
        return firstScreen.end().then(() => application.start());
    });
}

}  // init app

// NOTE: on WeChat Android end, we can only get the correct screen size at the second tick of game.
var sysInfo = wx.getSystemInfoSync();
if (sysInfo.platform.toLocaleLowerCase() === 'android') {
    GameGlobal.requestAnimationFrame (__initApp);
} else {
    __initApp();
}
