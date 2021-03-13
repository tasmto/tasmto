// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/modernizr-custom.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-arrow-backgroundsize-bgpositionxy-borderradius-boxshadow-csschunit-cssgrid_cssgridlegacy-cssremunit-cssvhunit-cssvwunit-es6array-eventlistener-fetch-flexbox-ie8compat-json-mediaqueries-objectfit-promises-queryselector-scriptasync-svg-svgasimg-templatestrings-unicode-xhrresponsetype-xhrresponsetypeblob-xhrresponsetypedocument-xhrresponsetypetext-setclasses !*/
!function (window, document, undefined) {
  function is(e, t) {
    return _typeof(e) === t;
  }

  function testRunner() {
    var e, t, r, n, o, i, s;

    for (var d in tests) {
      if (tests.hasOwnProperty(d)) {
        if (e = [], t = tests[d], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (r = 0; r < t.options.aliases.length; r++) {
          e.push(t.options.aliases[r].toLowerCase());
        }

        for (n = is(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) {
          i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = n : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = n), classes.push((n ? "" : "no-") + s.join("-"));
        }
      }
    }
  }

  function setClasses(e) {
    var t = docElement.className,
        r = Modernizr._config.classPrefix || "";

    if (isSVG && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var n = new RegExp("(^|\\s)" + r + "no-js(\\s|$)");
      t = t.replace(n, "$1" + r + "js$2");
    }

    Modernizr._config.enableClasses && (t += " " + r + e.join(" " + r), isSVG ? docElement.className.baseVal = t : docElement.className = t);
  }

  function computedStyle(e, t, r) {
    var n;

    if ("getComputedStyle" in window) {
      n = getComputedStyle.call(window, e, t);
      var o = window.console;
      if (null !== n) r && (n = n.getPropertyValue(r));else if (o) {
        var i = o.error ? "error" : "log";
        o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else n = !t && e.currentStyle && e.currentStyle[r];

    return n;
  }

  function roundedEquals(e, t) {
    return e - 1 === t || e === t || e + 1 === t;
  }

  function createElement() {
    return "function" != typeof document.createElement ? document.createElement(arguments[0]) : isSVG ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments);
  }

  function cssToDOM(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, r) {
      return t + r.toUpperCase();
    }).replace(/^-/, "");
  }

  function getBody() {
    var e = document.body;
    return e || (e = createElement(isSVG ? "svg" : "body"), e.fake = !0), e;
  }

  function injectElementWithStyles(e, t, r, n) {
    var o,
        i,
        s,
        d,
        a = "modernizr",
        l = createElement("div"),
        u = getBody();
    if (parseInt(r, 10)) for (; r--;) {
      s = createElement("div"), s.id = n ? n[r] : a + (r + 1), l.appendChild(s);
    }
    return o = createElement("style"), o.type = "text/css", o.id = "s" + a, (u.fake ? u : l).appendChild(o), u.appendChild(l), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e)), l.id = a, u.fake && (u.style.background = "", u.style.overflow = "hidden", d = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(u)), i = t(l, e), u.fake ? (u.parentNode.removeChild(u), docElement.style.overflow = d, docElement.offsetHeight) : l.parentNode.removeChild(l), !!i;
  }

  function contains(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function fnBind(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }

  function testDOMProps(e, t, r) {
    var n;

    for (var o in e) {
      if (e[o] in t) return r === !1 ? e[o] : (n = t[e[o]], is(n, "function") ? fnBind(n, r || t) : n);
    }

    return !1;
  }

  function domToCSS(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function nativeTestProps(e, t) {
    var r = e.length;

    if ("CSS" in window && "supports" in window.CSS) {
      for (; r--;) {
        if (window.CSS.supports(domToCSS(e[r]), t)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in window) {
      for (var n = []; r--;) {
        n.push("(" + domToCSS(e[r]) + ":" + t + ")");
      }

      return n = n.join(" or "), injectElementWithStyles("@supports (" + n + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == computedStyle(e, null, "position");
      });
    }

    return undefined;
  }

  function testProps(e, t, r, n) {
    function o() {
      s && (delete mStyle.style, delete mStyle.modElem);
    }

    if (n = is(n, "undefined") ? !1 : n, !is(r, "undefined")) {
      var i = nativeTestProps(e, r);
      if (!is(i, "undefined")) return i;
    }

    for (var s, d, a, l, u, c = ["modernizr", "tspan", "samp"]; !mStyle.style && c.length;) {
      s = !0, mStyle.modElem = createElement(c.shift()), mStyle.style = mStyle.modElem.style;
    }

    for (a = e.length, d = 0; a > d; d++) {
      if (l = e[d], u = mStyle.style[l], contains(l, "-") && (l = cssToDOM(l)), mStyle.style[l] !== undefined) {
        if (n || is(r, "undefined")) return o(), "pfx" == t ? l : !0;

        try {
          mStyle.style[l] = r;
        } catch (f) {}

        if (mStyle.style[l] != u) return o(), "pfx" == t ? l : !0;
      }
    }

    return o(), !1;
  }

  function testPropsAll(e, t, r, n, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        s = (e + " " + cssomPrefixes.join(i + " ") + i).split(" ");
    return is(t, "string") || is(t, "undefined") ? testProps(s, t, n, o) : (s = (e + " " + domPrefixes.join(i + " ") + i).split(" "), testDOMProps(s, t, r));
  }

  function testAllProps(e, t, r) {
    return testPropsAll(e, undefined, undefined, t, r);
  }

  function addTest(e, t) {
    if ("object" == _typeof(e)) for (var r in e) {
      hasOwnProp(e, r) && addTest(r, e[r]);
    } else {
      e = e.toLowerCase();
      var n = e.split("."),
          o = Modernizr[n[0]];
      if (2 == n.length && (o = o[n[1]]), "undefined" != typeof o) return Modernizr;
      t = "function" == typeof t ? t() : t, 1 == n.length ? Modernizr[n[0]] = t : (!Modernizr[n[0]] || Modernizr[n[0]] instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])), Modernizr[n[0]][n[1]] = t), setClasses([(t && 0 != t ? "" : "no-") + n.join("-")]), Modernizr._trigger(e, t);
    }
    return Modernizr;
  }

  var classes = [],
      tests = [],
      ModernizrProto = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, t) {
      var r = this;
      setTimeout(function () {
        t(r[e]);
      }, 0);
    },
    addTest: function addTest(e, t, r) {
      tests.push({
        name: e,
        fn: t,
        options: r
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      tests.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = ModernizrProto, Modernizr = new Modernizr(), Modernizr.addTest("eventlistener", "addEventListener" in window), Modernizr.addTest("ie8compat", !window.addEventListener && !!document.documentMode && 7 === document.documentMode), Modernizr.addTest("json", "JSON" in window && "parse" in JSON && "stringify" in JSON), Modernizr.addTest("es6array", !!(Array.prototype && Array.prototype.copyWithin && Array.prototype.fill && Array.prototype.find && Array.prototype.findIndex && Array.prototype.keys && Array.prototype.entries && Array.prototype.values && Array.from && Array.of)), Modernizr.addTest("arrow", function () {
    try {
      eval("()=>{}");
    } catch (e) {
      return !1;
    }

    return !0;
  }), Modernizr.addTest("promises", function () {
    return "Promise" in window && "resolve" in window.Promise && "reject" in window.Promise && "all" in window.Promise && "race" in window.Promise && function () {
      var e;
      return new window.Promise(function (t) {
        e = t;
      }), "function" == typeof e;
    }();
  }), Modernizr.addTest("fetch", "fetch" in window), Modernizr.addTest("queryselector", "querySelector" in document && "querySelectorAll" in document), Modernizr.addTest("xhrresponsetype", function () {
    if ("undefined" == typeof XMLHttpRequest) return !1;
    var e = new XMLHttpRequest();
    return e.open("get", "/", !0), "response" in e;
  }()), Modernizr.addTest("svg", !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("templatestrings", function () {
    var supports;

    try {
      eval("``"), supports = !0;
    } catch (e) {}

    return !!supports;
  });

  var docElement = document.documentElement,
      isSVG = "svg" === docElement.nodeName.toLowerCase(),
      testXhrType = function testXhrType(e) {
    if ("undefined" == typeof XMLHttpRequest) return !1;
    var t = new XMLHttpRequest();
    t.open("get", "/", !0);

    try {
      t.responseType = e;
    } catch (r) {
      return !1;
    }

    return "response" in t && t.responseType == e;
  };

  Modernizr.addTest("xhrresponsetypedocument", testXhrType("document")), Modernizr.addTest("xhrresponsetypetext", testXhrType("text")), Modernizr.addTest("xhrresponsetypeblob", testXhrType("blob")), Modernizr.addTest("scriptasync", "async" in createElement("script")), Modernizr.addTest("cssremunit", function () {
    var e = createElement("a").style;

    try {
      e.fontSize = "3rem";
    } catch (t) {}

    return /rem/.test(e.fontSize);
  });
  var modElem = {
    elem: createElement("modernizr")
  };
  Modernizr._q.push(function () {
    delete modElem.elem;
  }), Modernizr.addTest("csschunit", function () {
    var e,
        t = modElem.elem.style;

    try {
      t.fontSize = "3ch", e = -1 !== t.fontSize.indexOf("ch");
    } catch (r) {
      e = !1;
    }

    return e;
  });
  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  testStyles("#modernizr { width: 50vw; }", function (e) {
    var t = parseInt(window.innerWidth / 2, 10),
        r = parseInt(computedStyle(e, null, "width"), 10);
    Modernizr.addTest("cssvwunit", roundedEquals(r, t));
  }), Modernizr.addTest("unicode", function () {
    var e,
        t = createElement("span"),
        r = createElement("span");
    return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}", function (n) {
      t.innerHTML = isSVG ? "妇" : "&#5987;", r.innerHTML = isSVG ? "☆" : "&#9734;", n.appendChild(t), n.appendChild(r), e = "offsetWidth" in t && t.offsetWidth !== r.offsetWidth;
    }), e;
  }), testStyles("#modernizr { height: 50vh; }", function (e) {
    var t = parseInt(window.innerHeight / 2, 10),
        r = parseInt(computedStyle(e, null, "height"), 10);
    Modernizr.addTest("cssvhunit", roundedEquals(r, t));
  });

  var mq = function () {
    var e = window.matchMedia || window.msMatchMedia;
    return e ? function (t) {
      var r = e(t);
      return r && r.matches || !1;
    } : function (e) {
      var t = !1;
      return injectElementWithStyles("@media " + e + " { #modernizr { position: absolute; } }", function (e) {
        t = "absolute" == (window.getComputedStyle ? window.getComputedStyle(e, null) : e.currentStyle).position;
      }), t;
    };
  }();

  ModernizrProto.mq = mq, Modernizr.addTest("mediaqueries", mq("only all"));
  var omPrefixes = "Moz O ms Webkit",
      cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(" ") : [];
  ModernizrProto._cssomPrefixes = cssomPrefixes;

  var atRule = function atRule(e) {
    var t,
        r = prefixes.length,
        n = window.CSSRule;
    if ("undefined" == typeof n) return undefined;
    if (!e) return !1;
    if (e = e.replace(/^@/, ""), t = e.replace(/-/g, "_").toUpperCase() + "_RULE", t in n) return "@" + e;

    for (var o = 0; r > o; o++) {
      var i = prefixes[o],
          s = i.toUpperCase() + "_" + t;
      if (s in n) return "@-" + i.toLowerCase() + "-" + e;
    }

    return !1;
  };

  ModernizrProto.atRule = atRule;
  var domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(" ") : [];
  ModernizrProto._domPrefixes = domPrefixes;
  var mStyle = {
    style: modElem.elem.style
  };
  Modernizr._q.unshift(function () {
    delete mStyle.style;
  }), ModernizrProto.testAllProps = testPropsAll, ModernizrProto.testAllProps = testAllProps, Modernizr.addTest("bgpositionxy", function () {
    return testAllProps("backgroundPositionX", "3px", !0) && testAllProps("backgroundPositionY", "5px", !0);
  }), Modernizr.addTest("backgroundsize", testAllProps("backgroundSize", "100%", !0)), Modernizr.addTest("borderradius", testAllProps("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", testAllProps("boxShadow", "1px 1px", !0)), Modernizr.addTest("cssgridlegacy", testAllProps("grid-columns", "10px", !0)), Modernizr.addTest("cssgrid", testAllProps("grid-template-rows", "none", !0)), Modernizr.addTest("flexbox", testAllProps("flexBasis", "1px", !0));

  var prefixed = ModernizrProto.prefixed = function (e, t, r) {
    return 0 === e.indexOf("@") ? atRule(e) : (-1 != e.indexOf("-") && (e = cssToDOM(e)), t ? testPropsAll(e, t, r) : testPropsAll(e, "pfx"));
  };

  Modernizr.addTest("objectfit", !!prefixed("objectFit"), {
    aliases: ["object-fit"]
  });
  var hasOwnProp;
  !function () {
    var e = {}.hasOwnProperty;
    hasOwnProp = is(e, "undefined") || is(e.call, "undefined") ? function (e, t) {
      return t in e && is(e.constructor.prototype[t], "undefined");
    } : function (t, r) {
      return e.call(t, r);
    };
  }(), ModernizrProto._l = {}, ModernizrProto.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, ModernizrProto._trigger = function (e, t) {
    if (this._l[e]) {
      var r = this._l[e];
      setTimeout(function () {
        var e, n;

        for (e = 0; e < r.length; e++) {
          (n = r[e])(t);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    ModernizrProto.addTest = addTest;
  }), Modernizr.addTest("svgasimg", document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")), testRunner(), setClasses(classes), delete ModernizrProto.addTest, delete ModernizrProto.addAsyncTest;

  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  window.Modernizr = Modernizr;
}(window, document);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61170" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/modernizr-custom.js"], null)
//# sourceMappingURL=/modernizr-custom.c3903de5.js.map