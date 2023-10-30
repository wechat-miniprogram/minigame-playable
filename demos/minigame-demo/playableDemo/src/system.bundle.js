(function () {
  'use strict';

  function errMsg(errCode, msg) {
    return (msg || "") + " (SystemJS Error#" + errCode + " " + "https://git.io/JvFET#" + errCode + ")";
  }

  var hasSymbol = typeof Symbol !== 'undefined';
  var hasSelf = typeof self !== 'undefined';
  var hasDocument = typeof document !== 'undefined';

  var envGlobal = hasSelf ? self : global;

  var baseUrl$1;

  if (hasDocument) {
    var baseEl = document.querySelector('base[href]');
    if (baseEl)
      baseUrl$1 = baseEl.href;
  }

  if (!baseUrl$1 && typeof location !== 'undefined') {
    baseUrl$1 = location.href.split('#')[0].split('?')[0];
    var lastSepIndex = baseUrl$1.lastIndexOf('/');
    if (lastSepIndex !== -1)
      baseUrl$1 = baseUrl$1.slice(0, lastSepIndex + 1);
  }

  if (!baseUrl$1 && typeof process !== 'undefined') {
    var cwd = process.cwd();
    // TODO: encoding edge cases
    baseUrl$1 = 'file://' + (cwd[0] === '/' ? '' : '/') + cwd.replace(/\\/g, '/') + '/';
  }

  var backslashRegEx = /\\/g;
  function resolveIfNotPlainOrUrl (relUrl, parentUrl) {
    if (relUrl.indexOf('\\') !== -1)
      relUrl = relUrl.replace(backslashRegEx, '/');
    // protocol-relative
    if (relUrl[0] === '/' && relUrl[1] === '/') {
      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
    }
    // relative-url
    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) ||
        relUrl.length === 1  && (relUrl += '/')) ||
        relUrl[0] === '/') {
      var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
      // Disabled, but these cases will give inconsistent results for deep backtracking
      //if (parentUrl[parentProtocol.length] !== '/')
      //  throw Error('Cannot resolve');
      // read pathname from parent URL
      // pathname taken to be part after leading "/"
      var pathname;
      if (parentUrl[parentProtocol.length + 1] === '/') {
        // resolving to a :// so we need to read out the auth and host
        if (parentProtocol !== 'file:') {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf('/') + 1);
        }
        else {
          pathname = parentUrl.slice(8);
        }
      }
      else {
        // resolving to :/ so pathname is the /... part
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
      }

      if (relUrl[0] === '/')
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;

      // join together and split for removal of .. and . segments
      // looping the string instead of anything fancy for perf reasons
      // '../../../../../z' resolved to 'x/y' is just 'z'
      var segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;

      var output = [];
      var segmentIndex = -1;
      for (var i = 0; i < segmented.length; i++) {
        // busy reading a segment - only terminate on '/'
        if (segmentIndex !== -1) {
          if (segmented[i] === '/') {
            output.push(segmented.slice(segmentIndex, i + 1));
            segmentIndex = -1;
          }
        }

        // new segment - check if it is relative
        else if (segmented[i] === '.') {
          // ../ segment
          if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
            output.pop();
            i += 2;
          }
          // ./ segment
          else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
            i += 1;
          }
          else {
            // the start of a new segment as below
            segmentIndex = i;
          }
        }
        // it is the start of a new segment
        else {
          segmentIndex = i;
        }
      }
      // finish reading out the last segment
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
    }
  }

  /*
   * Import maps implementation
   *
   * To make lookups fast we pre-resolve the entire import map
   * and then match based on backtracked hash lookups
   *
   */

  function resolveUrl (relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (relUrl.indexOf(':') !== -1 ? relUrl : resolveIfNotPlainOrUrl('./' + relUrl, parentUrl));
  }

  function resolveAndComposePackages (packages, outPackages, baseUrl, parentMap, parentUrl) {
    for (var p in packages) {
      var resolvedLhs = resolveIfNotPlainOrUrl(p, baseUrl) || p;
      var rhs = packages[p];
      // package fallbacks not currently supported
      if (typeof rhs !== 'string')
        continue;
      var mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(rhs, baseUrl) || rhs, parentUrl);
      if (!mapped) {
        targetWarning('W1', p, rhs, 'bare specifier did not resolve');
      }
      else
        outPackages[resolvedLhs] = mapped;
    }
  }

  function resolveAndComposeImportMap (json, baseUrl, outMap) {
    if (json.imports)
      resolveAndComposePackages(json.imports, outMap.imports, baseUrl, outMap, null);

    var u;
    for (u in json.scopes || {}) {
      var resolvedScope = resolveUrl(u, baseUrl);
      resolveAndComposePackages(json.scopes[u], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl, outMap, resolvedScope);
    }

    for (u in json.depcache || {})
      outMap.depcache[resolveUrl(u, baseUrl)] = json.depcache[u];
    
    for (u in json.integrity || {})
      outMap.integrity[resolveUrl(u, baseUrl)] = json.integrity[u];
  }

  function getMatch (path, matchObj) {
    if (matchObj[path])
      return path;
    var sepIndex = path.length;
    do {
      var segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1)
  }

  function applyPackages (id, packages) {
    var pkgName = getMatch(id, packages);
    if (pkgName) {
      var pkg = packages[pkgName];
      if (pkg === null) return;
      if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/') {
        targetWarning('W2', pkgName, pkg, "should have a trailing '/'");
      }
      else
        return pkg + id.slice(pkgName.length);
    }
  }

  function targetWarning (code, match, target, msg) {
    console.warn(errMsg(code, "Package target " + msg + ", resolving target '" + target + "' for " + match));
  }

  function resolveImportMap (importMap, resolvedOrPlain, parentUrl) {
    var scopes = importMap.scopes;
    var scopeUrl = parentUrl && getMatch(parentUrl, scopes);
    while (scopeUrl) {
      var packageResolution = applyPackages(resolvedOrPlain, scopes[scopeUrl]);
      if (packageResolution)
        return packageResolution;
      scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf('/')), scopes);
    }
    return applyPackages(resolvedOrPlain, importMap.imports) || resolvedOrPlain.indexOf(':') !== -1 && resolvedOrPlain;
  }

  /*
   * SystemJS Core
   * 
   * Provides
   * - System.import
   * - System.register support for
   *     live bindings, function hoisting through circular references,
   *     reexports, dynamic import, import.meta.url, top-level await
   * - System.getRegister to get the registration
   * - Symbol.toStringTag support in Module objects
   * - Hookable System.createContext to customize import.meta
   * - System.onload(err, id, deps) handler for tracing / hot-reloading
   * 
   * Core comes with no System.prototype.resolve or
   * System.prototype.instantiate implementations
   */

  var toStringTag$1 = hasSymbol && Symbol.toStringTag;
  var REGISTRY = hasSymbol ? Symbol() : '@';

  function SystemJS () {
    this[REGISTRY] = {};
  }

  var systemJSPrototype$1 = SystemJS.prototype;

  systemJSPrototype$1.import = function (id, parentUrl) {
    var loader = this;
    return Promise.resolve(loader.prepareImport())
    .then(function() {
      return loader.resolve(id, parentUrl);
    })
    .then(function (id) {
      var load = getOrCreateLoad(loader, id);
      return load.C || topLevelLoad(loader, load);
    });
  };

  // Hookable createContext function -> allowing eg custom import meta
  systemJSPrototype$1.createContext = function (parentId) {
    var loader = this;
    return {
      url: parentId,
      resolve: function (id, parentUrl) {
        return Promise.resolve(loader.resolve(id, parentUrl || parentId));
      }
    };
  };

  // onLoad(err, id, deps) provided for tracing / hot-reloading
  systemJSPrototype$1.onload = function () {};
  function loadToId (load) {
    return load.id;
  }
  function triggerOnload (loader, load, err, isErrSource) {
    loader.onload(err, load.id, load.d && load.d.map(loadToId), !!isErrSource);
    if (err)
      throw err;
  }

  var lastRegister;
  systemJSPrototype$1.register = function (deps, declare) {
    lastRegister = [deps, declare];
  };

  /*
   * getRegister provides the last anonymous System.register call
   */
  systemJSPrototype$1.getRegister = function () {
    var _lastRegister = lastRegister;
    lastRegister = undefined;
    return _lastRegister;
  };

  function getOrCreateLoad (loader, id, firstParentUrl) {
    var load = loader[REGISTRY][id];
    if (load)
      return load;

    var importerSetters = [];
    var ns = Object.create(null);
    if (toStringTag$1)
      Object.defineProperty(ns, toStringTag$1, { value: 'Module' });
    
    var instantiatePromise = Promise.resolve()
    .then(function () {
      return loader.instantiate(id, firstParentUrl);
    })
    .then(function (registration) {
      if (!registration)
        throw Error(errMsg(2, 'Module ' + id + ' did not instantiate'));
      function _export (name, value) {
        // note if we have hoisted exports (including reexports)
        load.h = true;
        var changed = false;
        if (typeof name === 'string') {
          if (!(name in ns) || ns[name] !== value) {
            ns[name] = value;
            changed = true;
          }
        }
        else {
          for (var p in name) {
            var value = name[p];
            if (!(p in ns) || ns[p] !== value) {
              ns[p] = value;
              changed = true;
            }
          }

          if (name.__esModule) {
            ns.__esModule = name.__esModule;
          }
        }
        if (changed)
          for (var i = 0; i < importerSetters.length; i++) {
            var setter = importerSetters[i];
            if (setter) setter(ns);
          }
        return value;
      }
      var declared = registration[1](_export, registration[1].length === 2 ? {
        import: function (importId) {
          return loader.import(importId, id);
        },
        meta: loader.createContext(id)
      } : undefined);
      load.e = declared.execute || function () {};
      return [registration[0], declared.setters || []];
    }, function (err) {
      load.e = null;
      load.er = err;
      triggerOnload(loader, load, err, true);
      throw err;
    });

    var linkPromise = instantiatePromise
    .then(function (instantiation) {
      return Promise.all(instantiation[0].map(function (dep, i) {
        var setter = instantiation[1][i];
        return Promise.resolve(loader.resolve(dep, id))
        .then(function (depId) {
          var depLoad = getOrCreateLoad(loader, depId, id);
          // depLoad.I may be undefined for already-evaluated
          return Promise.resolve(depLoad.I)
          .then(function () {
            if (setter) {
              depLoad.i.push(setter);
              // only run early setters when there are hoisted exports of that module
              // the timing works here as pending hoisted export calls will trigger through importerSetters
              if (depLoad.h || !depLoad.I)
                setter(depLoad.n);
            }
            return depLoad;
          });
        });
      }))
      .then(function (depLoads) {
        load.d = depLoads;
      });
    });
    linkPromise.catch(function () {});

    // Capital letter = a promise function
    return load = loader[REGISTRY][id] = {
      id: id,
      // importerSetters, the setters functions registered to this dependency
      // we retain this to add more later
      i: importerSetters,
      // module namespace object
      n: ns,

      // instantiate
      I: instantiatePromise,
      // link
      L: linkPromise,
      // whether it has hoisted exports
      h: false,

      // On instantiate completion we have populated:
      // dependency load records
      d: undefined,
      // execution function
      e: undefined,

      // On execution we have populated:
      // the execution error if any
      er: undefined,
      // in the case of TLA, the execution promise
      E: undefined,

      // On execution, L, I, E cleared

      // Promise for top-level completion
      C: undefined,

      // parent instantiator / executor
      p: undefined
    };
  }

  function instantiateAll (loader, load, parent, loaded) {
    if (!loaded[load.id]) {
      loaded[load.id] = true;
      // load.L may be undefined for already-instantiated
      return Promise.resolve(load.L)
      .then(function () {
        if (!load.p || load.p.e === null)
          load.p = parent;
        return Promise.all(load.d.map(function (dep) {
          return instantiateAll(loader, dep, parent, loaded);
        }));
      })
      .catch(function (err) {
        if (load.er)
          throw err;
        load.e = null;
        triggerOnload(loader, load, err, false);
        throw err;
      });
    }
  }

  function topLevelLoad (loader, load) {
    return load.C = instantiateAll(loader, load, load, {})
    .then(function () {
      return postOrderExec(loader, load, {});
    })
    .then(function () {
      return load.n;
    });
  }

  // the closest we can get to call(undefined)
  var nullContext = Object.freeze(Object.create(null));

  // Equivalent to `Promise.prototype.finally`
  // https://gist.github.com/developit/d970bac18430943e4b3392b029a2a96c
  var promisePrototypeFinally = Promise.prototype.finally || function (callback) {
      if (typeof callback !== 'function') {
          return this.then(callback, callback);
      }
      const P = this.constructor || Promise;
      return this.then(
          value => P.resolve(callback()).then(() => value),
          err => P.resolve(callback()).then(() => { throw err; }),
      );
  };

  // returns a promise if and only if a top-level await subgraph
  // throws on sync errors
  function postOrderExec (loader, load, seen) {
    if (seen[load.id]) {
      return load.E;
    }
    seen[load.id] = true;

    if (!load.e) {
      if (load.er)
        throw load.er;
      if (load.E)
        return load.E;
      return;
    }

    // From here we're about to execute the load.
    // Because the execution may be async, we pop the `load.e` first.
    // So `load.e === null` always means the load has been executed or is executing.
    // To inspect the state:
    // - If `load.er` is truthy, the execution has threw or has been rejected;
    // - otherwise, either the `load.E` is a promise, means it's under async execution, or
    // - the `load.E` is null, means the load has completed the execution or has been async resolved.
    const exec = load.e;
    load.e = null;

    // deps execute first, unless circular
    var depLoadPromises;
    load.d.forEach(function (depLoad) {
      try {
        var depLoadPromise = postOrderExec(loader, depLoad, seen);
        if (depLoadPromise) 
          (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
      }
      catch (err) {
        load.er = err;
        triggerOnload(loader, load, err, false);
        throw err;
      }
    });
    if (depLoadPromises)
      return load.E = promisePrototypeFinally.call(Promise.all(depLoadPromises).then(doExec), function() {
          load.E = null;
      });

    var execPromise = doExec();
    if (execPromise) {
      return load.E = promisePrototypeFinally.call(execPromise, function() {
          load.E = null;
      });
    }

    function doExec () {
      try {
        var execPromise = exec.call(nullContext);
        if (execPromise) {
          execPromise = execPromise.then(function () {
            load.C = load.n;
            if (!false) triggerOnload(loader, load, null, true);
          }, function (err) {
            load.er = err;
            if (!false) triggerOnload(loader, load, err, true);
            throw err;
          });
          return execPromise;
        }
        // (should be a promise, but a minify optimization to leave out Promise.resolve)
        load.C = load.n;
        load.L = load.I = undefined;
      }
      catch (err) {
        load.er = err;
        throw err;
      }
      finally {
        triggerOnload(loader, load, load.er, true);
      }
    }
  }

  envGlobal.System = new SystemJS();

  const globalObj = (function getGlobalObj() {
      if (typeof $global !== 'undefined') {
          return $global;
      }
      else if (typeof getApp === 'function') {
          return getApp().GameGlobal;
      }
  })();
  const systemGlobal = (typeof globalObj !== 'undefined' ? globalObj.System : System);
  const systemJSPrototype = systemGlobal.constructor.prototype;

  systemJSPrototype.instantiate = function (url, firstParentUrl) {
      throw new Error(`Unable to instantiate ${url} from ${firstParentUrl}`);
  };

  var toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag;

  systemJSPrototype$1.get = function (id) {
    var load = this[REGISTRY][id];
    if (load && load.e === null && !load.E) {
      if (load.er)
        return null;
      return load.n;
    }
  };

  systemJSPrototype$1.set = function (id, module) {
    {
      try {
        // No page-relative URLs allowed
        new URL(id);
      } catch (err) {
        console.warn(Error(errMsg('W3', '"' + id + '" is not a valid URL to set in the module registry')));
      }
    }
    var ns;
    if (toStringTag && module[toStringTag] === 'Module') {
      ns = module;
    }
    else {
      ns = Object.assign(Object.create(null), module);
      if (toStringTag)
        Object.defineProperty(ns, toStringTag, { value: 'Module' });
    }

    var done = Promise.resolve(ns);

    var load = this[REGISTRY][id] || (this[REGISTRY][id] = {
      id: id,
      i: [],
      h: false,
      d: [],
      e: null,
      er: undefined,
      E: undefined
    });

    if (load.e || load.E)
      return false;
    
    Object.assign(load, {
      n: ns,
      I: undefined,
      L: undefined,
      C: done
    });
    return ns;
  };

  systemJSPrototype$1.has = function (id) {
    var load = this[REGISTRY][id];
    return !!load;
  };

  // Delete function provided for hot-reloading use cases
  systemJSPrototype$1.delete = function (id) {
    var registry = this[REGISTRY];
    var load = registry[id];
    // in future we can support load.E case by failing load first
    // but that will require TLA callbacks to be implemented
    if (!load || (load.p && load.p.e !== null) || load.E)
      return false;

    var importerSetters = load.i;
    // remove from importerSetters
    // (release for gc)
    if (load.d)
      load.d.forEach(function (depLoad) {
        var importerIndex = depLoad.i.indexOf(load);
        if (importerIndex !== -1)
          depLoad.i.splice(importerIndex, 1);
      });
    delete registry[id];
    return function () {
      var load = registry[id];
      if (!load || !importerSetters || load.e !== null || load.E)
        return false;
      // add back the old setters
      importerSetters.forEach(function (setter) {
        load.i.push(setter);
        setter(load.n);
      });
      importerSetters = null;
    };
  };

  var iterator = typeof Symbol !== 'undefined' && Symbol.iterator;

  systemJSPrototype$1.entries = function () {
    var loader = this, keys = Object.keys(loader[REGISTRY]);
    var index = 0, ns, key;
    var result = {
      next: function () {
        while (
          (key = keys[index++]) !== undefined && 
          (ns = loader.get(key)) === undefined
        );
        return {
          done: key === undefined,
          value: key !== undefined && [key, ns]
        };
      }
    };

    result[iterator] = function() { return this };

    return result;
  };

  // @ts-ignore
  let baseUrl = baseUrl$1;
  function setBaseUrl(url) {
      baseUrl = url;
  }

  // @ts-ignore
  const importMap = { imports: {}, scopes: {} };
  function setImportMap(json, location) {
      resolveAndComposeImportMap(json, location || baseUrl, importMap);
  }
  function throwUnresolved(id, parentUrl) {
      throw new Error(`Unresolved id: ${id} from parentUrl: ${parentUrl}`);
  }
  systemJSPrototype.resolve = function (id, parentUrl) {
      parentUrl = parentUrl || baseUrl;
      return resolveImportMap(importMap, resolveIfNotPlainOrUrl(id, parentUrl) || id, parentUrl) || throwUnresolved(id, parentUrl);
  };

  function warmup ({ pathname = '/', importMap, importMapUrl, defaultHandler, handlers, }) {
      const baseUrlSchema = 'no-schema:';
      setBaseUrl(`${baseUrlSchema}${pathname}`);
      setImportMap(importMap, `${baseUrlSchema}/${importMapUrl}`);
      if (defaultHandler) {
          hookInstantiationOverSchema(baseUrlSchema, wrapHandler(defaultHandler));
      }
      if (handlers) {
          for (const protocol of Object.keys(handlers)) {
              hookInstantiationOverSchema(protocol, wrapHandler(handlers[protocol]));
          }
      }
  }
  function isThenable(value) {
      // https://stackoverflow.com/a/53955664/10602525
      return Boolean(value && typeof value.then === 'function');
  }
  /**
   * Returns a SystemJS instantiation hook which calls `handler` and get the register.
   */
  function wrapHandler(handler) {
      return function (urlNoSchema) {
          // @ts-ignore
          const context = this;
          let retVal;
          try {
              retVal = handler(urlNoSchema);
          }
          catch (err) {
              return Promise.reject(err);
          }
          if (!isThenable(retVal)) {
              return context.getRegister();
          }
          else {
              // We can not directly `return Promise.resolve(retVal)`
              // since once we get the returns, the `System.register()` should have been called.
              // If it's synchronized, `Promise.resolve()` defers the `this.getRegister()`
              // which means other `System.register()` may happen before we resolved the promise.
              return new Promise((resolve) => {
                  return retVal.then(() => {
                      resolve(context.getRegister());
                  });
              });
          }
      };
  }
  function hookInstantiationOverSchema(schema, hook) {
      const venderInstantiate = systemJSPrototype.instantiate;
      systemJSPrototype.instantiate = function (url, firstParentUrl) {
          const schemaErased = url.substr(0, schema.length) === schema ?
              url.substr(schema.length) : null;
          return schemaErased === null ?
              venderInstantiate.call(this, url, firstParentUrl) :
              hook.call(this, schemaErased, firstParentUrl);
      };
  }

  systemJSPrototype.prepareImport = function () { return Promise.resolve(); };
  // @ts-ignore this should be a private interface
  systemJSPrototype.warmup = warmup;

  /*
   * SystemJS named register extension
   * Supports System.register('name', [..deps..], function (_export, _context) { ... })
   * 
   * Names are written to the registry as-is
   * System.register('x', ...) can be imported as System.import('x')
   */
  (function (global) {
    var System = global.System;
    setRegisterRegistry(System);
    var systemJSPrototype = System.constructor.prototype;
    var constructor = System.constructor;
    var SystemJS = function () {
      constructor.call(this);
      setRegisterRegistry(this);
    };
    SystemJS.prototype = systemJSPrototype;
    System.constructor = SystemJS;

    var firstNamedDefine;

    function setRegisterRegistry(systemInstance) {
      systemInstance.registerRegistry = Object.create(null);
    }

    var register = systemJSPrototype.register;
    systemJSPrototype.register = function (name, deps, declare) {
      if (typeof name !== 'string')
        return register.apply(this, arguments);
      var define = [deps, declare];
      this.registerRegistry[name] = define;
      if (!firstNamedDefine) {
        firstNamedDefine = define;
        Promise.resolve().then(function () {
          firstNamedDefine = null;
        });
      }
      return register.apply(this, arguments);
    };

    var resolve = systemJSPrototype.resolve;
    systemJSPrototype.resolve = function (id, parentURL) {
      try {
        // Prefer import map (or other existing) resolution over the registerRegistry
        return resolve.call(this, id, parentURL);
      } catch (err) {
        if (id in this.registerRegistry) {
          return id;
        }
        throw err;
      }
    };

    var instantiate = systemJSPrototype.instantiate;
    systemJSPrototype.instantiate = function (url, firstParentUrl) {
      var result = this.registerRegistry[url];
      if (result) {
        this.registerRegistry[url] = null;
        return result;
      } else {
        return instantiate.call(this, url, firstParentUrl);
      }
    };

    var getRegister = systemJSPrototype.getRegister;
    systemJSPrototype.getRegister = function () {
      // Calling getRegister() because other extras need to know it was called so they can perform side effects
      var register = getRegister.call(this);

      var result = firstNamedDefine || register;
      firstNamedDefine = null;
      return result;
    };
  })(typeof self !== 'undefined' ? self : global);

})();
