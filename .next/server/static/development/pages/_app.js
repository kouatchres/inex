module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:5000`; // export const perPage = 6;
// export  {perPage};

/***/ }),

/***/ "./lib/withData.jsx":
/*!**************************!*\
  !*** ./lib/withData.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");




function createClient({
  headers
}) {
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri: true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      });
    },
    // local data from apollo client
    clientState: {
      resolvers: {}
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/checkPropTypes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "object-assign");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/next/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.jsx");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    } // this exposes the query to the user


    pageProps.query = ctx.query;
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      apollo,
      pageProps
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
      client: apollo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
      client: apollo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx(_src_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp));

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\Footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FooterItems = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Footer__FooterItems",
  componentId: "sc-1xu6ued-0"
})(["margin:0 auto;display:flex;align-content:center;padding-bottom:0.5rem;"]);
const FooterItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Footer__FooterItem",
  componentId: "sc-1xu6ued-1"
})(["list-style:none;display:flex;padding:0 0.5rem;font-size:1.5rem;"]);
const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterContainer",
  componentId: "sc-1xu6ued-2"
})(["margin:0 auto;margin-top:3rem;display:flex;bottom:0;left:0;height:4rem;position:absolute;width:100%;align-items:center;color:", ";background:", ";"], props => props.theme.pureWhite, props => props.theme.blues[2]);

const Footer = () => {
  return __jsx(FooterContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(FooterItems, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(FooterItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Sygex"), __jsx(FooterItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, " \u24B8 Copyright"), __jsx(FooterItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mega_menu_MegaMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mega-menu/MegaMenu */ "./src/components/mega-menu/MegaMenu.jsx");
/* harmony import */ var _mega_menu_Burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mega-menu/Burger */ "./src/components/mega-menu/Burger.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/User */ "./src/components/User.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\Header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeStart = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeComplete = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeError = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1ozje8u-0"
})(["position:fixed;left:0;top:0;align-content:center;z-index:100;.megaMenu{display:none;}.subBar{display:grid;grid-template-columns:repeat(2,1fr);}.logo{font-size:2.5rem;position:relative;height:3.5rem;font-weight:bold;font-family:\"Roboto Slab\";letter-spacing:0.3rem;padding:0 2rem;background:", ";a{color:", ";text-transform:uppercase;text-decoration:none;}}.meMenu{font-size:1.8rem;position:relative;height:3.5rem;font-weight:normal;font-family:\"Roboto Slab\";align-items:center;text-align:center;letter-spacing:0.15rem;color:", ";background:", ";padding:0  2rem;}@media(min-width:550px){position:fixed;left:0;top:0;.subBar{display:grid;grid-template-columns:repeat(2,1fr);.meMenu{display:grid;}.burger{display:none;}}.navigation{display:grid;grid-template-columns:1fr 1fr;}.megaMenu{display:grid;}x .burger{display:none;}}"], props => props.theme.pureWhite, props => props.theme.blues[2], props => props.theme.pureWhite, props => props.theme.blues[2]);

const Header = () => __jsx(StyledHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "navigation",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "subBar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 17
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/login/login",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 21
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 25
  }
}, "SYGEFEX"))), __jsx("div", {
  className: "burger",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 17
  }
}, __jsx(_mega_menu_Burger__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 21
  }
})), __jsx("div", {
  className: "meMenu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 17
  }
}, __jsx(_components_User__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 21
  }
}, ({
  data
}) => {
  const currentUser = data && data.me;

  if (currentUser) {
    return currentUser.name;
  }

  return null;
}))), __jsx("div", {
  className: "megaMenu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 13
  }
}, __jsx(_mega_menu_MegaMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 17
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Meta.jsx":
/*!*********************************!*\
  !*** ./src/components/Meta.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\Meta.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Meta = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}), __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx("meta", {
  httpEquiv: "X-UA-Compatible",
  content: "ie=edge",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/favicon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/nprogress.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, "SYGEFEX"));

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./src/components/Page.jsx":
/*!*********************************!*\
  !*** ./src/components/Page.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Meta */ "./src/components/Meta.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\Page.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const theme = {
  maxWidth: "1000p",
  quarterBB: " #003c96",
  lightestBB: "#b3b4d1",
  britishRed: "#d4351c",
  complementaryBB: "#784800",
  complementaryBB1: "#007860",
  complementaryBB2: "#006078",
  complementaryBB3: "#007078",
  americanBlue: "#1d70b8",
  britishBlue: "#003078",
  britishLightBlue: "#1d70b8",
  red: "#FF0000",
  googleBlue: "#359",
  goldenBrown: "#d17f05",
  black: "#393939",
  grey: "#aaabaa",
  slightGrey: "rgb(243, 241, 241)",
  lightGrey: "#E1E1E1",
  darkGrey: "#EEEEEE",
  pureWhite: "#FFFFFF",
  offWhite: "#EDEDED",
  primary: '#00ab80',
  black2: '#4a4a4a',
  white3: '#ffffff',
  error: '#e05666',
  brownishRed: '#fo7031',
  coolBlue: '#195e83',
  coollerBlue: '#136ea5',
  sand: '#eea549',
  reddishBrown: '#f57836',
  buff: '#edb879',
  blues: ['#729fbf', '#b6c7d6', '#0780b7', '#68a1c5', '#014e98', '#2782b0', '#5EC9F9', '#c8e5eb', '#b1dee3', '#bde4e9', '#cce7e8'],
  lightBlues: ['#c8e4f3', '#d1e8ed', '#b3d3ea', '#c5e2f2', '#f1f5ff', '#e6ecfe'],
  greys: ['#F9FAFC', '#F2F2F6', '#aaabaa', '#999', '#fcfcfc', '#c8c8c8'],
  formBS3: " inset 0.7rem 0.7rem 0.5rem  rgba(0,0,0,0.9)",
  formBS4: " inset 0.08rem 1rem 1rem 0.03rem rgba(0,0.3,0,0.2)",
  formBS: " inset  0.1rem .05rem 0.5rem rgba(0,0,0.8,0.5)",
  formBS2: " inset  0 0 2px 2px rgba(0,0,0.4,0.1)",
  formBS1: " 2px 2px 2px 2px rgba(0,0,0.4,0.1)"
};
11;
const GenPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__GenPage",
  componentId: "sc-7w315w-0"
})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw;font-family:\"Roboto Slab\";min-height:100vh;background:", ";"], props => props.theme.lightBlues[4]);
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-7w315w-1"
})(["position:relative;margin:0 auto;padding:2rem;background:", ";border-radius:0.5rem;border:0.09rem solid ", ";"], props => props.theme.pureWhite, props => props.theme.blues[2]);
styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"]`
/* 
 radnika_next font  
  @font-face {
    font-family: 'radnika_next';
    src: url('../../static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    
  }  */


/* roboto-slab-regular - latin */

@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  src: url('../../static/roboto-slab-v11-latin-regular.woff2') format('woff2') /* Super Modern Browsers */
  src:  url('../../static/roboto-slab-v11-latin-regular.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */
  src: url('../../static/roboto-slab-v11-latin-regular.woff') format('woff') /* Modern Browsers */
  src: url('../../static/roboto-slab-v11-latin-regular.ttf') format('truetype') /* Safari, Android, iOS */
  src: url('../../static/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */
  src: url('../../static/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */
} 



  html {
    box-sizing: border-box;
    font-size: 11px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body
{
    padding:0;
    margin: 0;
    font-size: 2rem;
    font-family: "Roboto Slab";
    font-weight: 500;
    font-style: normal;
   
  button {  font-family: 'Roboto Slab'; }

}

h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Slab";
    font-size:2rem;
    font-weight: 500;
    font-style: bold;
}

a
{
    font-family: "Roboto Slab";
    font-weight: 400;
    font-size:1.5rem;
    font-style: italic;
    text-decoration: none;
    color: ${props => props.theme.black};
    :hover {
  text-decoration: underline;
}
}
`;

class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: theme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 7
      }
    }, __jsx(GenPage, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    }), __jsx(Inner, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    }, this.props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/User.jsx":
/*!*********************************!*\
  !*** ./src/components/User.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\User.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const User = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
  query: _components_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__["meQuery"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}), payload => props.children(payload));

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/components/mega-menu/Burger.jsx":
/*!*********************************************!*\
  !*** ./src/components/mega-menu/Burger.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\mega-menu\\Burger.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BurgerStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Burger__BurgerStyled",
  componentId: "kae2he-0"
})(["padding-top:1rem;padding-bottom:1rem;padding-left:1.5rem;width:5rem;max-height:3.5rem;background:", ";div{width:2rem;height:0.2rem;padding:0.1rem;margin-top:0.2rem;background-color:", ";cursor:pointer;}"], props => props.theme.blues[2], props => props.theme.pureWhite);

const Burger = () => {
  return __jsx(BurgerStyled, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "line1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "line2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "line3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./src/components/mega-menu/MegaMenu.jsx":
/*!***********************************************!*\
  !*** ./src/components/mega-menu/MegaMenu.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\mega-menu\\MegaMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ToolBarNavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MegaMenu__ToolBarNavItem",
  componentId: "sc-1gy0ucv-0"
})(["*{box-sizing:border-box;}.container{padding-top:0.5rem;max-width:100vw;margin:0 auto;}body{font-family:'Roboto Slab','Open Sans','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;margin:0;padding:0;}nav{background:", ";margin:0;padding:0 2rem;height:3.5rem;width:100vw;color:", "}nav ul{list-style:none;position:relative;margin:0;padding:0;}nav li{display:inline-block;}nav a{text-decoration:none;display:block;color:", ";padding:0.5rem 1.3rem;:hover{color:", ";}}nav li:hover{border-top-right-radius:0.8rem;border-top-left-radius:0.8rem;background:", ";color:", ";}.menu-sub{width:100 %;position:absolute;background:", ";color:", ";display:none;padding:1rem;border-bottom-right-radius:0.8rem;border-bottom-left-radius:0.8rem;box-shadow:", ";}nav li:hover .menu-sub{display:block;}.menu-sub li{display:block;}.menu-sub a{margin:0;padding:0;font-size:1.2rem;color:", ";}.menu-sub a:hover{text-decoration:underline;}.menu-sub-user{width:70 %;position:absolute;background:", ";color:", ";display:none;padding:1rem;border-bottom-right-radius:0.8rem;border-bottom-left-radius:0.8rem;}nav li:hover .menu-sub-user{display:block;}.menu-sub-user li{display:block;}.menu-sub-user a{margin:0;padding:0;font-size:1.1rem;color:", ";}.menu-sub-user a:hover{text-decoration:underline;}.menu-category{font-size:1.3rem;margin-top:0;color:", " margin-bottom:0.5rem;text-align:left;text-transform:uppercase;}.menu-category:first-of-type{margin-top:0;margin-bottom:0;}.menu-col-1,.menu-col-2,.menu-col-3,.menu-col-4{float:left;}.menu-col-1,.menu-col-2,.menu-col-3,.menu-col-4{width:25 %;padding:1rem;border-right:1px solid #fff;}.menu-category:last-of-type{border-right:none;}hr{margin:0;padding:0;}@media(max-width:650){body{}nav{position:absolute;right:0;height:90vh;top:3.5rem;background:", ";display:flex;flex-direction:column;align-items:center;width:50% transform:translateX(100%);transistion:transform 0.5s ease-in;}nav li{display:block;}}"], props => props.theme.blues[2], props => props.theme.pureWhite, props => props.theme.pureWhite, props => props.theme.britishLightBlue, props => props.theme.pureWhite, props => props.theme.britishBlue, props => props.theme.pureWhite, props => props.theme.britishBlue, props => props.theme.formBS, props => props.theme.britishBlue, props => props.theme.blues[2], props => props.theme.pureWhite, props => props.theme.pureWhite, props => props.theme.britishBlue, props => props.theme.blues[2]);

const MegaMenu = () => __jsx(ToolBarNavItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 3
  }
}, __jsx("nav", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 7
  }
}, __jsx("ul", {
  className: "menu-main",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 9
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 13
  }
}, "Administration"), __jsx("div", {
  className: "menu-sub",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "menu-col-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 19
  }
}, "Region"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newRegion",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190,
    columnNumber: 21
  }
}, "Nouvelle Region")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyRegion",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193,
    columnNumber: 21
  }
}, "Modifier Region"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 19
  }
}, "Departement"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newDivision",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200,
    columnNumber: 21
  }
}, "Nouveau Departement")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyDivision",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 203,
    columnNumber: 21
  }
}, "Modifier Department"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 207,
    columnNumber: 19
  }
}, "Arrondissement"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newSubDivision",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210,
    columnNumber: 21
  }
}, "Nouvel Arrondissement")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifySubDivision",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 213,
    columnNumber: 21
  }
}, "Modifier Arrondissement"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217,
    columnNumber: 19
  }
}, "Ville"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newTown",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 219,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220,
    columnNumber: 21
  }
}, "Nouvelle Ville")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyTown",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 21
  }
}, "Modifier Ville"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 227,
    columnNumber: 19
  }
}, "New Series"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 21
  }
}, "register Series")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifySeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 232,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 233,
    columnNumber: 21
  }
}, "Modifier Serie"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237,
    columnNumber: 19
  }
}, "Notes"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 238,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newMarks",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240,
    columnNumber: 21
  }
}, "Inscrire Notes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyMarks",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 242,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 243,
    columnNumber: 21
  }
}, "Modifier Notes"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 246,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 19
  }
}, "Formik Forms"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 248,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/formikForms/showFormikForms",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 21
  }
}, "New Registration")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifySubjectType",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 252,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 253,
    columnNumber: 21
  }
}, "Modifier Type Mati\xE8re")))), __jsx("div", {
  className: "menu-col-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 260,
    columnNumber: 19
  }
}, "Type De Mati\xE8re"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 261,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newSubjectType",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 262,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 263,
    columnNumber: 21
  }
}, " Nouveau Type Mati\xE8re")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifySubjectType",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 265,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266,
    columnNumber: 21
  }
}, "Modifier Type Mati\xE8re"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 19
  }
}, "Subject Series"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 271,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newSubjectSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 272,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 273,
    columnNumber: 21
  }
}, "Subjects Series")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifySubjectSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276,
    columnNumber: 21
  }
}, "Modifier Type Mati\xE8re"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 279,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 19
  }
}, "Inscription"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 281,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newRegister",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 282,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 283,
    columnNumber: 21
  }
}, " Nouvelle Inscription")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyRegistration",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 285,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 286,
    columnNumber: 21
  }
}, "Modifier Inscription"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 289,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 290,
    columnNumber: 19
  }
}, "Poste"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 291,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newRank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 292,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 293,
    columnNumber: 21
  }
}, "Nouveau Poste")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyRank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 295,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 296,
    columnNumber: 21
  }
}, "Modifier Poste"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 300,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 19
  }
}, "Examen"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 302,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newExam",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 304,
    columnNumber: 21
  }
}, "Nouvel Examen")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyExam",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 306,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 307,
    columnNumber: 21
  }
}, "Modifier Examen"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 310,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 311,
    columnNumber: 19
  }
}, "Resultats"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 312,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/genCenterResults",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 313,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 314,
    columnNumber: 21
  }
}, "Resultats Centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/candCodeResults",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 316,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 317,
    columnNumber: 21
  }
}, "Resultat Candidat")), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 319,
    columnNumber: 19
  }
})), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 321,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 322,
    columnNumber: 19
  }
}, "Listes"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 323,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/centersPerTown",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 324,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 325,
    columnNumber: 21
  }
}, "Centres par Ville")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/subjPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 327,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 328,
    columnNumber: 21
  }
}, "Matieres par Serie")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/subjPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 330,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 331,
    columnNumber: 21
  }
}, "Matieres par Serie")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/subjPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 333,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 334,
    columnNumber: 21
  }
}, "Matieres par Serie")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/subjPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 336,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 337,
    columnNumber: 21
  }
}, "Matieres par Serie")), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 339,
    columnNumber: 19
  }
}))), __jsx("div", {
  className: "menu-col-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 342,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 343,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 344,
    columnNumber: 19
  }
}, "Utilisateur"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 345,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newUser",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 346,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 347,
    columnNumber: 21
  }
}, "Nouveau Utilisateur")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyUser",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 349,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 350,
    columnNumber: 21
  }
}, "Modifier Utilisateur"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 353,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 354,
    columnNumber: 19
  }
}, "Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 355,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCenter",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 356,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 357,
    columnNumber: 21
  }
}, "Nouveau Centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyCenter",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 359,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 360,
    columnNumber: 21
  }
}, "Modifier Centre"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 363,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 364,
    columnNumber: 19
  }
}, "Session"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 365,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newSession",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 366,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 367,
    columnNumber: 21
  }
}, "Nouvelle Session")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifySession",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370,
    columnNumber: 21
  }
}, "Modifier Session"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 373,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 374,
    columnNumber: 19
  }
}, "Series"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 375,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 377,
    columnNumber: 21
  }
}, "Nouvelle Series")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifySeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 379,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 380,
    columnNumber: 21
  }
}, "Modifier Series"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 383,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 384,
    columnNumber: 19
  }
}, "Rapports"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 385,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newReport",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 386,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 387,
    columnNumber: 21
  }
}, "charger rapport ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyReport",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 389,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 390,
    columnNumber: 21
  }
}, "Modifier rapport"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 393,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 394,
    columnNumber: 19
  }
}, "Resultats Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 395,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/centerResults/getCompleteCenterResults",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 396,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 397,
    columnNumber: 21
  }
}, "Resultats Complet du Centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/centerResults/centerResultsPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 399,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 400,
    columnNumber: 21
  }
}, "Resultats du Centre par Serie")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/candidateResults/getCandidateResultsFromRegNo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 403,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 404,
    columnNumber: 21
  }
}, "Resultats Du Candidat"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 407,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 408,
    columnNumber: 19
  }
}, "Pays"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 409,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCountry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 410,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 411,
    columnNumber: 21
  }
}, "Nouveau pays")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 413,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 414,
    columnNumber: 21
  }
}, "Modify counr")))), __jsx("div", {
  className: "menu-col-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 418,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 419,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 420,
    columnNumber: 19
  }
}, "Sexe"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 421,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newGender",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 422,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 423,
    columnNumber: 21
  }
}, "nouveau Sexe")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyGender",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 425,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 426,
    columnNumber: 21
  }
}, "Modifier Sexe"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 429,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 430,
    columnNumber: 19
  }
}, "Candidat"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 431,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCand",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 432,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 433,
    columnNumber: 21
  }
}, "nouveau Candidat")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/candidatePage",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 435,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 436,
    columnNumber: 21
  }
}, "Liste Candidats")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyCandidate",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 438,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 439,
    columnNumber: 21
  }
}, "Modifier Candidat"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 442,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 443,
    columnNumber: 19
  }
}, "Enseignement"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 444,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newEducType",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 445,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 446,
    columnNumber: 21
  }
}, "Nouveau Type D'enseignement")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyEducType",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 448,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 449,
    columnNumber: 21
  }
}, "Modifier Type D'enseignement"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 452,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 453,
    columnNumber: 19
  }
}, "Mati\xE8re"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 454,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newSubject",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 455,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 456,
    columnNumber: 21
  }
}, "Nouvelle Mati\xE8re ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifySubject",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 458,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 459,
    columnNumber: 21
  }
}, "Modifier Mati\xE8re"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 462,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 463,
    columnNumber: 19
  }
}, "Charge de centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 464,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 465,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 466,
    columnNumber: 21
  }
}, "Inscription des Charge de centre ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 468,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 469,
    columnNumber: 21
  }
}, "Modifier Charge de centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/signInOut/signUp",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 471,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 472,
    columnNumber: 21
  }
}, "SignUp"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 475,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 476,
    columnNumber: 19
  }
}, "Phase de l'Examen"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 479,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newPhase",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 480,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 481,
    columnNumber: 21
  }
}, "Nouvelle Phase de l'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 484,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 485,
    columnNumber: 19
  }
}, "Inscrire Postes aux Phases de l'Examen"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 488,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newPhaseRank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 489,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 490,
    columnNumber: 21
  }
}, "Postes aux Phases de l'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 493,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 494,
    columnNumber: 19
  }
}, "Inscrire Prof au centre d'Examen"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 497,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCESExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 498,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 499,
    columnNumber: 21
  }
}, "Prof s'inscrire au centre d'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 502,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 503,
    columnNumber: 19
  }
}, "Examen Pour Session par Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 506,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCenterExamSession",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 507,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 508,
    columnNumber: 21
  }
}, "Inscrire Centre a l'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 511,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 512,
    columnNumber: 19
  }
}, "Series par Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 513,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCenterExamSessionSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 514,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 515,
    columnNumber: 21
  }
}, "Inscrire Series aux centres ")))))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 522,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "/creates/newRegister",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 523,
    columnNumber: 13
  }
}, "Candidate"), __jsx("div", {
  className: "menu-sub",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 524,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "menu-col-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 526,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 527,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 528,
    columnNumber: 19
  }
}, "Inscription"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 529,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newRegister",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 530,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 531,
    columnNumber: 21
  }
}, " Nouvelle Inscription")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyRegistration",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 533,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 534,
    columnNumber: 21
  }
}, "Modifier Inscription"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 537,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 538,
    columnNumber: 19
  }
}, "Resultats"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 539,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/genCenterResults",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 540,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 541,
    columnNumber: 21
  }
}, "Resultats Centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/candCodeResults",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 543,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 544,
    columnNumber: 21
  }
}, "Resultat Candidat")), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 546,
    columnNumber: 19
  }
}))), __jsx("div", {
  className: "menu-col-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 549,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 550,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 551,
    columnNumber: 19
  }
}, "Utilisateur"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 552,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newUser",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 553,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 554,
    columnNumber: 21
  }
}, "Nouveau Utilisateur")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyUser",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 556,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 557,
    columnNumber: 21
  }
}, "Modifier Utilisateur"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 560,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 561,
    columnNumber: 19
  }
}, "Resultats Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 562,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/centerResults/getCompleteCenterResults",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 563,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 564,
    columnNumber: 21
  }
}, "Resultats Complet du Centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/centerResults/centerResultsPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 566,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 567,
    columnNumber: 21
  }
}, "Resultats du Centre par Serie")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/candidateResults/getCandidateResultsFromRegNo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 570,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 571,
    columnNumber: 21
  }
}, "Resultats Du Candidat"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 574,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 575,
    columnNumber: 19
  }
}, "Candidat"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 576,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCand",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 577,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 578,
    columnNumber: 21
  }
}, "nouveau Candidat")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/candidatePage",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 580,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 581,
    columnNumber: 21
  }
}, "Liste Candidats")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyCandidate",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 583,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 584,
    columnNumber: 21
  }
}, "Modifier Candidat"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 587,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 588,
    columnNumber: 19
  }
}, "Charge de centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 589,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 590,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 591,
    columnNumber: 21
  }
}, "Inscription des Charge de centre ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 593,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 594,
    columnNumber: 21
  }
}, "Modifier Charge de centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/signInOut/signUp",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 596,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 597,
    columnNumber: 21
  }
}, "SignUp"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 600,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 601,
    columnNumber: 19
  }
}, "Phase de l'Examen"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 604,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newPhase",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 605,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 606,
    columnNumber: 21
  }
}, "Nouvelle Phase de l'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 609,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 610,
    columnNumber: 19
  }
}, "Inscrire Postes aux Phases de l'Examen"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 613,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newPhaseRank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 614,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 615,
    columnNumber: 21
  }
}, "Postes aux Phases de l'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 618,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 619,
    columnNumber: 19
  }
}, "Inscrire Prof au centre d'Examen"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 622,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCESExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 623,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 624,
    columnNumber: 21
  }
}, "Prof s'inscrire au centre d'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 627,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 628,
    columnNumber: 19
  }
}, "Examen Pour Session par Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 631,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCenterExamSession",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 632,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 633,
    columnNumber: 21
  }
}, "Inscrire Centre a l'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 636,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 637,
    columnNumber: 19
  }
}, "Series par Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 638,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCenterExamSessionSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 639,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 640,
    columnNumber: 21
  }
}, "Inscrire Series aux centres ")))))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 646,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "/creates/newRegister",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 647,
    columnNumber: 13
  }
}, "Centre"), __jsx("div", {
  className: "menu-sub",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 648,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "menu-col-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 649,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 650,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 651,
    columnNumber: 19
  }
}, "Notes"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 652,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newMarks",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 653,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 654,
    columnNumber: 21
  }
}, "Inscrire Notes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyMarks",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 656,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 657,
    columnNumber: 21
  }
}, "Modifier Notes"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 661,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 662,
    columnNumber: 19
  }
}, "Inscription"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 663,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newRegister",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 664,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 665,
    columnNumber: 21
  }
}, " Nouvelle Inscription")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyRegistration",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 667,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 668,
    columnNumber: 21
  }
}, "Modifier Inscription"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 672,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 673,
    columnNumber: 19
  }
}, "Resultats"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 674,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/genCenterResults",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 675,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 676,
    columnNumber: 21
  }
}, "Resultats Centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/candCodeResults",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 678,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 679,
    columnNumber: 21
  }
}, "Resultat Candidat")), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 681,
    columnNumber: 19
  }
})), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 683,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 684,
    columnNumber: 19
  }
}, "Listes"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 685,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/centersPerTown",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 686,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 687,
    columnNumber: 21
  }
}, "Centres par Ville")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/subjPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 689,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 690,
    columnNumber: 21
  }
}, "Matieres par Serie")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/subjPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 692,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 693,
    columnNumber: 21
  }
}, "Matieres par Serie")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/subjPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 695,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 696,
    columnNumber: 21
  }
}, "Matieres par Serie")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/lists/subjPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 698,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 699,
    columnNumber: 21
  }
}, "Matieres par Serie")), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 701,
    columnNumber: 19
  }
}))), __jsx("div", {
  className: "menu-col-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 704,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 705,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 706,
    columnNumber: 19
  }
}, "Utilisateur"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 707,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newUser",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 708,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 709,
    columnNumber: 21
  }
}, "Nouveau Utilisateur")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyUser",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 711,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 712,
    columnNumber: 21
  }
}, "Modifier Utilisateur"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 715,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 716,
    columnNumber: 19
  }
}, "Resultats Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 717,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/centerResults/getCompleteCenterResults",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 718,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 719,
    columnNumber: 21
  }
}, "Resultats Complet du Centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/centerResults/centerResultsPerSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 721,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 722,
    columnNumber: 21
  }
}, "Resultats du Centre par Serie")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/results/candidateResults/getCandidateResultsFromRegNo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 725,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 726,
    columnNumber: 21
  }
}, "Resultats Du Candidat"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 730,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 731,
    columnNumber: 19
  }
}, "Candidat"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 732,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCand",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 733,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 734,
    columnNumber: 21
  }
}, "nouveau Candidat")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/show/candidatePage",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 736,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 737,
    columnNumber: 21
  }
}, "Liste Candidats")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyCandidate",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 739,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 740,
    columnNumber: 21
  }
}, "Modifier Candidat"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 743,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 744,
    columnNumber: 19
  }
}, "Charge de centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 745,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 746,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 747,
    columnNumber: 21
  }
}, "Inscription des Charge de centre ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 749,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 750,
    columnNumber: 21
  }
}, "Modifier Charge de centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/signInOut/signUp",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 752,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 753,
    columnNumber: 21
  }
}, "SignUp"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 756,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 757,
    columnNumber: 19
  }
}, "Inscrire Prof au centre d'Examen"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 760,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCESExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 761,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 762,
    columnNumber: 21
  }
}, "Prof s'inscrire au centre d'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 765,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 766,
    columnNumber: 19
  }
}, "Examen Pour Session par Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 769,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCenterExamSession",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 770,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 771,
    columnNumber: 21
  }
}, "Inscrire Centre a l'Examen "))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 774,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 775,
    columnNumber: 19
  }
}, "Series par Centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 776,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCenterExamSessionSeries",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 777,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 778,
    columnNumber: 21
  }
}, "Inscrire Series aux centres ")))))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 784,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "/creates/newRegister",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 785,
    columnNumber: 13
  }
}, "Examinateur"), __jsx("div", {
  className: "menu-sub",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 786,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "menu-col-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 787,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 788,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 789,
    columnNumber: 19
  }
}, "Notes"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 790,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newMarks",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 791,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 792,
    columnNumber: 21
  }
}, "Inscrire Notes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyMarks",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 794,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 795,
    columnNumber: 21
  }
}, "Modifier Notes"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 798,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 799,
    columnNumber: 19
  }
}, "Utilisateur"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 800,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newUser",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 801,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 802,
    columnNumber: 21
  }
}, "Nouveau Utilisateur")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyUser",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 804,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 805,
    columnNumber: 21
  }
}, "Modifier Utilisateur"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 808,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 809,
    columnNumber: 19
  }
}, "Rapports"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 810,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newReport",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 811,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 812,
    columnNumber: 21
  }
}, "charger rapport ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyReport",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 814,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 815,
    columnNumber: 21
  }
}, "Modifier rapport"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 818,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 819,
    columnNumber: 19
  }
}, "Charge de centre"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 820,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 821,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 822,
    columnNumber: 21
  }
}, "Inscription des Charge de centre ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/modify/modifyExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 824,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 825,
    columnNumber: 21
  }
}, "Modifier Charge de centre")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/signInOut/signUp",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 827,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 828,
    columnNumber: 21
  }
}, "SignUp"))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 831,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 832,
    columnNumber: 19
  }
}, "Inscrire Prof au centre d'Examen"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 835,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newCESExaminer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 836,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 837,
    columnNumber: 21
  }
}, "Prof s'inscrire au centre d'Examen ")))))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 844,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "/creates/newRegister",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 845,
    columnNumber: 13
  }
}, "Utilisateur"), __jsx("div", {
  className: "menu-sub-user",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 846,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "menu-col-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 847,
    columnNumber: 15
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 848,
    columnNumber: 17
  }
}, __jsx("h3", {
  className: "menu-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 849,
    columnNumber: 19
  }
}, "Login/Signup"), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 850,
    columnNumber: 19
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/creates/newSignup",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 851,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 852,
    columnNumber: 21
  }
}, "Signup")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/login",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 854,
    columnNumber: 19
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 855,
    columnNumber: 21
  }
}, "Login")))))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 861,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "/creates/newRegister",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 862,
    columnNumber: 13
  }
}, "Contact")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 864,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "/creates/newRegister",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 865,
    columnNumber: 13
  }
}, "Nous"))))));

/* harmony default export */ __webpack_exports__["default"] = (MegaMenu);

/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Queries.jsx":
/*!****************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Queries.jsx ***!
  \****************************************************************/
/*! exports provided: getAllSubjectsOfASeriesQuery, getAllSubjectTypesQuery, getAllGendersQuery, getAllRegionsOfACountryQuery, getAllSeriesOfAnEducationTypeQuery, getAllExamsQuery, getAllSessionsQuery, getDivisionsOfARegionQuery, getAllDivisionsQuery, getSubDivisionsOfADivisionQuery, getTownsOfASubDivisionQuery, getCentersOfATownQuery, getAllEducationTypesQuery, getAllSubjectsQuery, getAllRanksQuery, getAllCandidatesQuery, getAllCentersQuery, getSingleRegionQuery, getACenterAdminQuery, getAllCenterAdminsQuery, getAllSeriesQuery, getAllSubDivisionsQuery, getAllSubjectsOfAnEducTypeQuery, getScoreID, singleSeriesQuery, getRegistrations, singleSubjectQuery, singleCandidateQuery1, singleCandidateQuery, viewSingleCandidateQuery, singleCenterQuery, singleCenterAdminQuery, singleExamQuery, singleTownQuery, getAllCenterResultsQuery, singleSessionQuery, singleDivisionQuery, singleSubDivisionQuery, singleSubjectTypeQuery, singleEducationTypeQuery, singleRankQuery, centerExamSessionSeriesForResultsQuery, getAllCandidateRegistrationIDsQuery, getCenterExamSessionSeriesQuery, singleGenderQuery, getExamSessionQuery, getAllSeriesOfACenterExamSessionQuery, getCenterResultsQuery, getCandidateRegistrationIDQuery, getCandidateRegistrationIDsQuery, centerExamSessionForResultsQuery, getCandidateIDQuery, getASingleCenterQuery, getRegisteredCandidateCountQuery, centersPerTownQuery, getSingleCenterQuery, getCandidateResultsQuery, getCenterRegistrationIDsQuery, getCandidateByCandCodeQuery, getSingleCenterExamSessionQuery, getEachCandidateResultsQuery, getCenterIDFromCenterCodeQuery, getRegistrationIDFromRegNumberQuery, centerExamSessionSeriesResultsQuery, dataForAverage, getAllCountrysRegionCreateQuery, getAllPhasesQuery, getAllRegionsQuery, getAllCountrysQuery, singleExaminerQuery, getCESExaminerQuery, getExaminerRegistrationQuery, getSingleProfQuery, getAllRanksOfAnExamPhaseQuery, meQuery, getSingleCenterByCodeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfASeriesQuery", function() { return getAllSubjectsOfASeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectTypesQuery", function() { return getAllSubjectTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGendersQuery", function() { return getAllGendersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsOfACountryQuery", function() { return getAllRegionsOfACountryQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesOfAnEducationTypeQuery", function() { return getAllSeriesOfAnEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllExamsQuery", function() { return getAllExamsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSessionsQuery", function() { return getAllSessionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDivisionsOfARegionQuery", function() { return getDivisionsOfARegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDivisionsQuery", function() { return getAllDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubDivisionsOfADivisionQuery", function() { return getSubDivisionsOfADivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTownsOfASubDivisionQuery", function() { return getTownsOfASubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentersOfATownQuery", function() { return getCentersOfATownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducationTypesQuery", function() { return getAllEducationTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsQuery", function() { return getAllSubjectsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksQuery", function() { return getAllRanksQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidatesQuery", function() { return getAllCandidatesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCentersQuery", function() { return getAllCentersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleRegionQuery", function() { return getSingleRegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getACenterAdminQuery", function() { return getACenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCenterAdminsQuery", function() { return getAllCenterAdminsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesQuery", function() { return getAllSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubDivisionsQuery", function() { return getAllSubDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfAnEducTypeQuery", function() { return getAllSubjectsOfAnEducTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreID", function() { return getScoreID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSeriesQuery", function() { return singleSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrations", function() { return getRegistrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectQuery", function() { return singleSubjectQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery1", function() { return singleCandidateQuery1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery", function() { return singleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSingleCandidateQuery", function() { return viewSingleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterQuery", function() { return singleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterAdminQuery", function() { return singleCenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExamQuery", function() { return singleExamQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleTownQuery", function() { return singleTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCenterResultsQuery", function() { return getAllCenterResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSessionQuery", function() { return singleSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleDivisionQuery", function() { return singleDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubDivisionQuery", function() { return singleSubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectTypeQuery", function() { return singleSubjectTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleEducationTypeQuery", function() { return singleEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleRankQuery", function() { return singleRankQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSeriesForResultsQuery", function() { return centerExamSessionSeriesForResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidateRegistrationIDsQuery", function() { return getAllCandidateRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterExamSessionSeriesQuery", function() { return getCenterExamSessionSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleGenderQuery", function() { return singleGenderQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExamSessionQuery", function() { return getExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesOfACenterExamSessionQuery", function() { return getAllSeriesOfACenterExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterResultsQuery", function() { return getCenterResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationIDQuery", function() { return getCandidateRegistrationIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationIDsQuery", function() { return getCandidateRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionForResultsQuery", function() { return centerExamSessionForResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateIDQuery", function() { return getCandidateIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getASingleCenterQuery", function() { return getASingleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredCandidateCountQuery", function() { return getRegisteredCandidateCountQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centersPerTownQuery", function() { return centersPerTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterQuery", function() { return getSingleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateResultsQuery", function() { return getCandidateResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterRegistrationIDsQuery", function() { return getCenterRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateByCandCodeQuery", function() { return getCandidateByCandCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterExamSessionQuery", function() { return getSingleCenterExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEachCandidateResultsQuery", function() { return getEachCandidateResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterIDFromCenterCodeQuery", function() { return getCenterIDFromCenterCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrationIDFromRegNumberQuery", function() { return getRegistrationIDFromRegNumberQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSeriesResultsQuery", function() { return centerExamSessionSeriesResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataForAverage", function() { return dataForAverage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCountrysRegionCreateQuery", function() { return getAllCountrysRegionCreateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPhasesQuery", function() { return getAllPhasesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsQuery", function() { return getAllRegionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCountrysQuery", function() { return getAllCountrysQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExaminerQuery", function() { return singleExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCESExaminerQuery", function() { return getCESExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExaminerRegistrationQuery", function() { return getExaminerRegistrationQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProfQuery", function() { return getSingleProfQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksOfAnExamPhaseQuery", function() { return getAllRanksOfAnExamPhaseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meQuery", function() { return meQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterByCodeQuery", function() { return getSingleCenterByCodeQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const getACenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getACenterAdminQuery($authCode: String!) {
    centerAdminSignIn(authCode: $authCode) {
      id
      authCode
    }
  }
`;
const meQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query meQuery {
    me {
      id
     email
     name 
     password
    }
  }
`;
const singleEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      educationTypeName
      educationTypeCode
      id
    }
  }
`;
const getCESExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCESExaminerQuery(
    $examiner: ExaminerWhereUniqueInput!,
     $centerExamSession:CenterExamSessionWhereUniqueInput!) {
    getCenterExamSessionExaminers(
      examiner: $examiner, 
      centerExamSession:$centerExamSession  ) {
     
      id
    }
  }
`;
const singleSubjectTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSubjectTypeQuery($id: ID!) {
    subjectType(id: $id) {
      subjectTypeName
      subjectTypeCode
      id
    }
  }
`;
const getAllCenterAdminsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCenterAdminsQuery {
    centerAdmins {
      id
      authName
      authCode
    }
  }
`;
const getAllEducationTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllEducationTypesQuery {
    educationTypes(orderBy: educationTypeName_ASC) {
      id
      educationTypeName
      educationTypeCode
    }
  }
`;
const getAllRegionsOfACountryQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRegionsOfACountryQuery($id: ID!) {
    country(id: $id) {
      id
      region(orderBy: regName_ASC){
       regName
      regCode
      id
      }
    }
  }
`;
const getAllRegionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRegionsQuery {
      regions{
       regName
      regCode
      id
  }}
`;
const getAllCountrysQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCountrysQuery {
    countries(orderBy:countryName_ASC) {
      countryName
      countryCode
      id
    }
  }
`;
const getAllCountrysRegionCreateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCountrysRegionCreateQuery {
    countries(orderBy:countryName_ASC) {
           id
    }
  }
`;
const getCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterResultsQuery(
    $exam: ExamWhereUniqueInput!
    $center: CenterWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    getResultsPerCenter(exam: $exam, center: $center, session: $session) {
      id
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        placeOfBirth
        email
        dateOfBirth
        gender {
          genderName
        }
      }
      exam {
        examName
      }
      session {
        sessionName
      }
      center {
        centerName
      }
      scores {
        subjectAve
        coeff
        subjectSeries {
          subjectName
          series {
            id
            seriesName
          }
        }
      }
    }
  }
`;
const getCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateResultsQuery($id: ID!) {
    registration(id: $id) {
      id
      createdAt
      candRegistrationNumber
      
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        momName
        dadName
        placeOfBirth
        image
        email
        dateOfBirth
        gender {
          genderName
        }
      }
      centerExamSessionSeries {
      centerExamSession{
        id 
      examSession {
       id
        exam{
          id 
          examName
        }
        session{
          id
          sessionName
        }
      }
      center {
        id
        centerName
      }}
      series {
        id
        seriesName
        subjectSeries {
          id
          subjectName
        }
      }
      }
      scores {
        id
        subjectAve
        coeff
        subjectSeries  {
          id
          subjectName
        }
      }
    }
  }
`;
const getExaminerRegistrationQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getExaminerRegistrationQuery($id: ID!) {
    centerExamSessionExaminer(id: $id) {
      id
      examiner{
        examiner1stName
        examiner2ndName
        examinerOtherNames
        examinerMatricule
        examinerPhone
        examinerCNI
        examinerImage
        examinerEmail
        gender {
          genderName
        }
      }
      centerExamSession{
        id 
      examSession {
       id
        exam{
          id 
          examName
        }
        session{
          id
          sessionName
      }}
      center {
        id
        centerName
      }
      
      }
      phaseRank {
        id
        rankName
      }
    }
  }
`;
const getAllCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCenterResultsQuery($centerExamSession: String!) {
    centerExamSessionSeriesForResults(centerExamSession: $centerExamSession) {
      id
      series{
        id
        seriesName
        subjectSeries {
          id
          subjectName
        }
      }
     registration{
       id
       candidate{
         cand1stName
         id
       }
      scores {
        id
        subjectAve
        coeff
        subjectSeries {
          id
          subjectName
        }
      }
     }
   }
  }
`;
const getEachCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getEachCandidateResultsQuery($id: ID!) {
    registration(id: $id) {
      id
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        momName
        dadName
        email
        dateOfBirth
        gender {
          genderName
        }
      }
      exam {
        examName
      }
      session {
        sessionName
      }
      series {
        id
        seriesName
      }
      center {
        centerName
      }
    }
  }
`;
const getCandidateRegistrationIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateRegistrationIDQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $candidate: CandidateWhereUniqueInput!
  ) {
    candidateRegistrationID(centerExamSession: $centerExamSession, candidate: $candidate) {
      id
      
    }
  }
`;
const getCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateRegistrationIDsQuery($candidate: RegistrationWhereInput!  ) {
    candidateRegistrationIDs(candidate: $candidate) {
      id
      
    }
  }
`;
const getAllCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCandidateRegistrationIDsQuery($id: ID!  ) {
    candidate( id: $id) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      placeOfBirth
      dateOfBirth
      image
      momName
      dadName
      email
      gender{
id
genderName
      }
      registration{
        id
     
        centerExamSessionSeries{
          id
         series{
           id
           seriesName
         }
         centerExamSession{
          center{
            id
            centerName
          }
          examSession{
            id
            exam{
              id
              examName
            }
            session{
              id
              sessionName
            }
          }
        }
       
        }
        scores {
        id
        subjectAve
        coeff
        subjectSeries {
          id
          subjectName
        }
      }
        }
      id
      
    }
  }
`;
const getCandidateIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateIDQuery(
    $candCode: String!
  ) {
    candidateCode(candCode: $candCode) {
      id
    }
  }
`;
const getRegistrationIDFromRegNumberQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegistrationIDFromRegNumberQuery(
    $candRegistrationNumber: String!
  ) {
    candidateRegistrationNumber(candRegistrationNumber: $candRegistrationNumber) {
     id
     candidate{
      id
      cand1stName
      cand2ndName
      cand3rdName
      placeOfBirth
      dateOfBirth
      image
      momName
      dadName
      email
      gender{
id
genderName
      }
      registration{
        id
     
        centerExamSessionSeries{
          id
         series{
           id
           seriesName
         }
         centerExamSession{
          center{
            id
            centerName
          }
          examSession{
            id
            exam{
              id
              examName
            }
            session{
              id
              sessionName
            }
          }
        }
       
        }
        scores {
        id
        subjectAve
        coeff
        subjectSeries {
          id
          subjectName
        }
      }
        }
        }
        }
    }
`;
const getCenterIDFromCenterCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterIDFromCenterCodeQuery($centerCode: String!) {
    centerByCode(centerCode: $centerCode) {
      id
    }
  }
`;
const getCenterRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterRegistrationIDsQuery(
    $exam: ExamWhereUniqueInput!
    $center: CenterWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    centerRegistrationIDs(exam: $exam, center: $center, session: $session) {
      id
    }
  }
`;
const centerExamSessionSeriesForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centerExamSessionSeriesForResultsQuery($centerExamSession: String !) {
    centerExamSessionSeriesForResults(centerExamSession: $centerExamSession) {
      id
      series{
        id
        seriesName
      }
      
    }
  }
`;
const centerExamSessionForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centerExamSessionForResultsQuery($id: ID !) {
    centerExamSession(id: $id) {
      id
      center{
                 id
                 centerName
                 centerCode
               }
               examSession{
               exam{
                 id
                 examName
               }
               session{
                 id
                 sessionName
               }}
           centerExamSessionSeries{
             id
            series{
              id
              seriesName
              seriesCode
            }
             registration{
               id
               candRegistrationNumber
               candExamSecretCode
               candidate{
            id
            cand1stName
            cand2ndName
            cand3rdName
            dateOfBirth
            placeOfBirth
            email
            phoneNumb
            gender{
              id
              genderName
            }

               }
               scores{
                 id
                 subjectAve

               }
             }
           }
       
    }
  }
`;
const centerExamSessionSeriesResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centerExamSessionSeriesResultsQuery($id: ID !) {
    centerExamSessionSeries(id: $id) {
      id
      centerExamSession{
                 id
                center{
                  id
                  centerName
                  centerCode
                }
               examSession{
               exam{
                 id
                 examName
               }
               session{
                 id
                 sessionName
               }
               }}
         
          
            series{
              id
              seriesName
              seriesCode
            }
             registration{
               id
               candRegistrationNumber
               candExamSecretCode
               candidate{
            id
            cand1stName
            cand2ndName
            cand3rdName
            dateOfBirth
            placeOfBirth
            email
            phoneNumb
            gender{
              id
              genderName
            }

               }
               scores{
                 id
                 subjectAve

               }
             }
    }
  }
`;
const getCandidateByCandCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateByCandCodeQuery($candCode: String!) {
    getCandidateByCode(candCode: $candCode) {
      id
      cand1stName
      candCode
      dateOfBirth
      placeOfBirth
    }
  }
`;
const getAllRanksQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRanksQuery {
    ranks(orderBy: rankName_ASC) {
      rankName
      rankCode
      id
    }
  }
`;
const getAllPhasesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllPhasesQuery {
  phases(orderBy:phaseName_ASC) {
    phaseName
    phaseCode
      id
    }
  }
`;
const getAllSubjectsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectsQuery {
    subjects(orderBy: subjectName_ASC) {
      subjectName
      subjectCode
      id
    }
  }
`;
const getAllGendersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllGendersQuery {
    genders(orderBy: genderName_ASC) {
      id
      genderName
      genderCode
    }
  }
`;
const getAllSeriesOfAnEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSeriesOfAnEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      series(orderBy: seriesName_ASC) {
        id
        seriesName
        seriesCode
      }
    }
  }
`;
const getAllSeriesOfACenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSeriesOfACenterExamSessionQuery($id: ID!) {
    centerExamSession(id: $id) {
      id
      centerExamSessionSeries{
      series {
        id
        seriesName
        seriesCode
      }
    }}
  }
`;
const getAllSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSeriesQuery {
    serieses(orderBy: seriesName_ASC) {
      id
      seriesName
      seriesCode
    }
  }
`;
const getAllSubjectsOfAnEducTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectsOfAnEducTypeQuery($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      subject(orderBy: subjectName_ASC) {
        id
        subjectName
        subjectCode
      }
    }
  }
`;
const getAllSubjectsOfASeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectsOfASeriesQuery($id: ID!) {
    series(id: $id) {
      id
      seriesName
      subjectSeries {
        id
        subjectName
        subjectCode
      }
    }
  }
`;
const getAllExamsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllExamsQuery {
    exams(orderBy: examName_ASC) {
      examName
      examCode
      id
    }
  }
`;
const getAllSessionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSessionsQuery {
    sessions(orderBy: createdAt_DESC) {
      sessionName
      sessionCode
      id
    }
  }
`;
const getAllDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllDivisionsQuery {
    divisions(orderBy: divName_ASC) {
      divName
      divCode
      id
    }
  }
`;
const getDivisionsOfARegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getDivisionsOfARegionQuery($id: ID!) {
    region(id: $id) {
      regName
      id
      division(orderBy: divName_ASC) {
        divName
        divCode
        id
      }
    }
  }
`;
const getSubDivisionsOfADivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSubDivisionsOfADivisionQuery($id: ID!) {
    division(id: $id) {
      divName
      id
      subDivision(orderBy: subDivName_ASC) {
        subDivName
        subDivCode
        id
      }
    }
  }
`;
const getAllSubDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubDivisionsQuery {
    subDivision(orderBy: subDivName_ASC) {
      subDivName
      subDivCode
      id
    }
  }
`;
const getTownsOfASubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getTownsOfASubDivision($id: ID!) {
    subDivision(id: $id) {
      subDivName
      id
      town(orderBy: townName_ASC) {
        townName
        townCode
        id
      }
    }
  }
`;
const getCentersOfATownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCentersOfATownQuery($id: ID!) {
    town(id: $id) {
      townName
      id
      center(orderBy: centerName_ASC) {
        centerName
        centerCode
        id
      }
    }
  }
`;
const centersPerTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centersPerTownQuery($id: ID!) {
    town(id: $id) {
      townName
      id
      center(orderBy: centerName_ASC) {
        centerName
        centerNumber
        centerSecretCode
        centerCode
        id
      }
    }
  }
`;
const getAllSubjectTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectTypesQuery {
    subjectTypes(orderBy: subjectTypeName_DESC) {
      id
      subjectTypeName
      subjectTypeCode
    }
  }
`;
const getAllCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCentersQuery {
    centers(orderBy: centerName_ASC) {
      id
      centerName
      centerCode
    }
  }
`;
const getAllCandidatesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCandidatesQuery {
    candidates(orderBy: cand1stName_ASC) {
      cand1stName
      cand2ndName
      cand3rdName
      email
      image
      phoneNumb
      placeOfBirth
      candCode
      id
    }
  }
`; ///*****************Single object queries */

const singleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCenterQuery($id: ID!) {
    center(id: $id) {
      centerName
      centerNumber
      centerCode
      id
    }
  }
`;
const getSingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterQuery($centerNumber: Int!) {
    centerByNumber(centerNumber:  $centerNumber) {
      id
      centerNumber
      centerCode
    }
  }
`;
const getSingleProfQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleProfQuery($authCode: String!) {
   profByAuthCode(authCode:  $authCode) {
     authCode
      id
      auth1stName
    }
  }
`;
const getSingleCenterByCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterByCodeQuery($centerSecretCode: String!) {
    getCenterByCode(centerSecretCode:  $centerSecretCode) {
      id
      centerCode
     
    }
  }
`;
const getASingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getASingleCenterQuery($centerNumber: Int!) {
    centerByNumber(centerNumber:  $centerNumber) {
      centerNumber
      centerName
      centerCode
      id
    }
  }
`;
const singleTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleTownQuery($id: ID!) {
    town(id: $id) {
      townName
      townCode
      id
    }
  }
`;
const getSingleCenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterExamSessionQuery(
    $center: CenterWhereUniqueInput!
    $examSession: ExamSessionWhereUniqueInput!
  ) {
    centerExamSessionsByCode(examSession: $examSession, center: $center) {
      id
    }
  }
`;
const getAllRanksOfAnExamPhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRanksOfAnExamPhaseQuery($id: ID!) {
    phase(id: $id) {
      id
      phaseRank{
             id
          rankName
          rankCode
      }
    }
  }
`;
const getRegisteredCandidateCountQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegisteredCandidateCountQuery($id: ID!)
 {
    registrationsConnection(id: $id) {
     aggregate{
       count
     }
    }
  }
`;
const getCenterExamSessionSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterExamSessionSeriesQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $series: SeriesWhereUniqueInput!
  ) {
    centerExamSessionSerieses(series: $series, centerExamSession: $centerExamSession) {
      id

    }
  }
`;
const getExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getExamSessionQuery(
    $exam: ExamWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    examSessions(session: $session, exam: $exam) {
      id

    }
  }
`;
const singleExamQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleExamQuery($id: ID!) {
    exam(id: $id) {
      examName
      examCode
      id
    }
  }
`;
const singleCandidateQuery1 = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCandidateQuery1($id: ID!) {
    candidate(id: $id) {
      cand1stName
      cand2ndName
      cand3rdName
      dadName
      momName
      candCode
      email
      image
      phoneNumb
      placeOfBirth
      id
    }
  }
`;
const singleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCandidateQuery($id: ID!) {
    candidate(id: $id) {
      id
      dateOfBirth
      cand1stName
      cand2ndName
      cand3rdName
      candCode  
      dadName
      momName
      email
      image
      phoneNumb
      birthCertNumber
      placeOfBirth
      gender {
        id
        genderName
      }
    }
  }
`;
const singleExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleExaminerQuery($id: ID!) {
    examiner(id: $id) {
      id
      examiner1stName
      examiner2ndName
      examinerOtherNames
      examinerCode
      examinerEmail
      examinerImage
      examinerPhone
      examinerMatricule
      examinerCNI
      
    }
  }
`;
const viewSingleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query viewSingleCandidateQuery($candCode: String!) {
    singleCandidate(candCode: $candCode) {
      id
      dateOfBirth
      cand1stName
      cand2ndName
      cand3rdName
      candCode
      momName
      dadName
      email
      image
      phoneNumb
      birthCertNumber
      placeOfBirth
      gender {
        id
        genderName
      }
    }
  }
`;
const getScoreID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getScoreID($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
    }
  }
`;
const getRegistrations = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegistrations($candExamSecretCode: String!) {
    registration(candExamSecretCode: $candExamSecretCode) {
      id
      scores {
        id
        subject(orderBy: subjectName_ASC) {
          id
          subjectName
        }
      }
    }
  }
`;
const singleSubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSubDivisionQuery($id: ID!) {
    subDivision(id: $id) {
      subDivName
      subDivCode
      id
    }
  }
`;
const getSingleRegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleRegionQuery($id: ID!) {
    region(id: $id) {
      regName
      regCode
      id
    }
  }
`;
const singleGenderQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleGenderQuery($id: ID!) {
    gender(id: $id) {
      genderName
      genderCode
      id
    }
  }
`;
const singleSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSeriesQuery($id: ID!) {
    series(id: $id) {
      seriesName
      seriesCode
      id
    }
  }
`;
const singleCenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCenterAdminQuery($id: ID!) {
    centerAdmin(id: $id) {
      centerAdminName
      centerAdminCode
      id
    }
  }
`;
const dataForAverage = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query dataForAverage($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
      subjectAve
      coeff
    }
  }
`;
const singleDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleDivisionQuery($id: ID!) {
    division(id: $id) {
      divName
      divCode
      id
    }
  }
`;
const singleRankQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleRankQuery($id: ID!) {
    rank(id: $id) {
      rankName
      rankCode
      id
    }
  }
`;
const singleSubjectQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSubjectQuery($id: ID!) {
    subject(id: $id) {
      subjectName
      subjectCode
      id
    }
  }
`;
const singleSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSessionQuery($id: ID!) {
    session(id: $id) {
      sessionName
      sessionCode
      id
    }
  }
`; ///*****************End Single object queries */



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGhEYXRhLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWV0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVnYS1tZW51L0J1cmdlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVnYS1tZW51L01lZ2FNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVyaWVzJk11dGF0aW9ucyZGdW5jdGlvbnMvUXVlcmllcy5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC13aXRoLWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbImVuZHBvaW50IiwiY3JlYXRlQ2xpZW50IiwiaGVhZGVycyIsIkFwb2xsb0NsaWVudCIsInVyaSIsInByb2RFbmRwb2ludCIsInJlcXVlc3QiLCJvcGVyYXRpb24iLCJzZXRDb250ZXh0IiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJjbGllbnRTdGF0ZSIsInJlc29sdmVycyIsIndpdGhBcG9sbG8iLCJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJjb21wb25lbnREaWRDYXRjaCIsImNyZWF0ZVVybCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiTXlBcHAiLCJhcG9sbG8iLCJ3aXRoRGF0YSIsIkZvb3Rlckl0ZW1zIiwic3R5bGVkIiwidWwiLCJGb290ZXJJdGVtIiwibGkiLCJGb290ZXJDb250YWluZXIiLCJkaXYiLCJ0aGVtZSIsInB1cmVXaGl0ZSIsImJsdWVzIiwiRm9vdGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiU3R5bGVkSGVhZGVyIiwiSGVhZGVyIiwiY3VycmVudFVzZXIiLCJtZSIsIk1ldGEiLCJtYXhXaWR0aCIsInF1YXJ0ZXJCQiIsImxpZ2h0ZXN0QkIiLCJicml0aXNoUmVkIiwiY29tcGxlbWVudGFyeUJCIiwiY29tcGxlbWVudGFyeUJCMSIsImNvbXBsZW1lbnRhcnlCQjIiLCJjb21wbGVtZW50YXJ5QkIzIiwiYW1lcmljYW5CbHVlIiwiYnJpdGlzaEJsdWUiLCJicml0aXNoTGlnaHRCbHVlIiwicmVkIiwiZ29vZ2xlQmx1ZSIsImdvbGRlbkJyb3duIiwiYmxhY2siLCJncmV5Iiwic2xpZ2h0R3JleSIsImxpZ2h0R3JleSIsImRhcmtHcmV5Iiwib2ZmV2hpdGUiLCJwcmltYXJ5IiwiYmxhY2syIiwid2hpdGUzIiwiYnJvd25pc2hSZWQiLCJjb29sQmx1ZSIsImNvb2xsZXJCbHVlIiwic2FuZCIsInJlZGRpc2hCcm93biIsImJ1ZmYiLCJsaWdodEJsdWVzIiwiZ3JleXMiLCJmb3JtQlMzIiwiZm9ybUJTNCIsImZvcm1CUyIsImZvcm1CUzIiLCJmb3JtQlMxIiwiR2VuUGFnZSIsIklubmVyIiwiaW5qZWN0R2xvYmFsIiwiUGFnZSIsIlVzZXIiLCJtZVF1ZXJ5IiwicGF5bG9hZCIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiQnVyZ2VyU3R5bGVkIiwiQnVyZ2VyIiwiVG9vbEJhck5hdkl0ZW0iLCJNZWdhTWVudSIsImdldEFDZW50ZXJBZG1pblF1ZXJ5IiwiZ3FsIiwic2luZ2xlRWR1Y2F0aW9uVHlwZVF1ZXJ5IiwiZ2V0Q0VTRXhhbWluZXJRdWVyeSIsInNpbmdsZVN1YmplY3RUeXBlUXVlcnkiLCJnZXRBbGxDZW50ZXJBZG1pbnNRdWVyeSIsImdldEFsbEVkdWNhdGlvblR5cGVzUXVlcnkiLCJnZXRBbGxSZWdpb25zT2ZBQ291bnRyeVF1ZXJ5IiwiZ2V0QWxsUmVnaW9uc1F1ZXJ5IiwiZ2V0QWxsQ291bnRyeXNRdWVyeSIsImdldEFsbENvdW50cnlzUmVnaW9uQ3JlYXRlUXVlcnkiLCJnZXRDZW50ZXJSZXN1bHRzUXVlcnkiLCJnZXRDYW5kaWRhdGVSZXN1bHRzUXVlcnkiLCJnZXRFeGFtaW5lclJlZ2lzdHJhdGlvblF1ZXJ5IiwiZ2V0QWxsQ2VudGVyUmVzdWx0c1F1ZXJ5IiwiZ2V0RWFjaENhbmRpZGF0ZVJlc3VsdHNRdWVyeSIsImdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEUXVlcnkiLCJnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSIsImdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5IiwiZ2V0Q2FuZGlkYXRlSURRdWVyeSIsImdldFJlZ2lzdHJhdGlvbklERnJvbVJlZ051bWJlclF1ZXJ5IiwiZ2V0Q2VudGVySURGcm9tQ2VudGVyQ29kZVF1ZXJ5IiwiZ2V0Q2VudGVyUmVnaXN0cmF0aW9uSURzUXVlcnkiLCJjZW50ZXJFeGFtU2Vzc2lvblNlcmllc0ZvclJlc3VsdHNRdWVyeSIsImNlbnRlckV4YW1TZXNzaW9uRm9yUmVzdWx0c1F1ZXJ5IiwiY2VudGVyRXhhbVNlc3Npb25TZXJpZXNSZXN1bHRzUXVlcnkiLCJnZXRDYW5kaWRhdGVCeUNhbmRDb2RlUXVlcnkiLCJnZXRBbGxSYW5rc1F1ZXJ5IiwiZ2V0QWxsUGhhc2VzUXVlcnkiLCJnZXRBbGxTdWJqZWN0c1F1ZXJ5IiwiZ2V0QWxsR2VuZGVyc1F1ZXJ5IiwiZ2V0QWxsU2VyaWVzT2ZBbkVkdWNhdGlvblR5cGVRdWVyeSIsImdldEFsbFNlcmllc09mQUNlbnRlckV4YW1TZXNzaW9uUXVlcnkiLCJnZXRBbGxTZXJpZXNRdWVyeSIsImdldEFsbFN1YmplY3RzT2ZBbkVkdWNUeXBlUXVlcnkiLCJnZXRBbGxTdWJqZWN0c09mQVNlcmllc1F1ZXJ5IiwiZ2V0QWxsRXhhbXNRdWVyeSIsImdldEFsbFNlc3Npb25zUXVlcnkiLCJnZXRBbGxEaXZpc2lvbnNRdWVyeSIsImdldERpdmlzaW9uc09mQVJlZ2lvblF1ZXJ5IiwiZ2V0U3ViRGl2aXNpb25zT2ZBRGl2aXNpb25RdWVyeSIsImdldEFsbFN1YkRpdmlzaW9uc1F1ZXJ5IiwiZ2V0VG93bnNPZkFTdWJEaXZpc2lvblF1ZXJ5IiwiZ2V0Q2VudGVyc09mQVRvd25RdWVyeSIsImNlbnRlcnNQZXJUb3duUXVlcnkiLCJnZXRBbGxTdWJqZWN0VHlwZXNRdWVyeSIsImdldEFsbENlbnRlcnNRdWVyeSIsImdldEFsbENhbmRpZGF0ZXNRdWVyeSIsInNpbmdsZUNlbnRlclF1ZXJ5IiwiZ2V0U2luZ2xlQ2VudGVyUXVlcnkiLCJnZXRTaW5nbGVQcm9mUXVlcnkiLCJnZXRTaW5nbGVDZW50ZXJCeUNvZGVRdWVyeSIsImdldEFTaW5nbGVDZW50ZXJRdWVyeSIsInNpbmdsZVRvd25RdWVyeSIsImdldFNpbmdsZUNlbnRlckV4YW1TZXNzaW9uUXVlcnkiLCJnZXRBbGxSYW5rc09mQW5FeGFtUGhhc2VRdWVyeSIsImdldFJlZ2lzdGVyZWRDYW5kaWRhdGVDb3VudFF1ZXJ5IiwiZ2V0Q2VudGVyRXhhbVNlc3Npb25TZXJpZXNRdWVyeSIsImdldEV4YW1TZXNzaW9uUXVlcnkiLCJzaW5nbGVFeGFtUXVlcnkiLCJzaW5nbGVDYW5kaWRhdGVRdWVyeTEiLCJzaW5nbGVDYW5kaWRhdGVRdWVyeSIsInNpbmdsZUV4YW1pbmVyUXVlcnkiLCJ2aWV3U2luZ2xlQ2FuZGlkYXRlUXVlcnkiLCJnZXRTY29yZUlEIiwiZ2V0UmVnaXN0cmF0aW9ucyIsInNpbmdsZVN1YkRpdmlzaW9uUXVlcnkiLCJnZXRTaW5nbGVSZWdpb25RdWVyeSIsInNpbmdsZUdlbmRlclF1ZXJ5Iiwic2luZ2xlU2VyaWVzUXVlcnkiLCJzaW5nbGVDZW50ZXJBZG1pblF1ZXJ5IiwiZGF0YUZvckF2ZXJhZ2UiLCJzaW5nbGVEaXZpc2lvblF1ZXJ5Iiwic2luZ2xlUmFua1F1ZXJ5Iiwic2luZ2xlU3ViamVjdFF1ZXJ5Iiwic2luZ2xlU2Vzc2lvblF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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O0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUdFO0FBQUksV0FBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFHLE1BQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFLLFdBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLG9CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBSEYsRUFNRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBTkYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FB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QUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsQ0FORixDQURGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsMkJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FIRixFQU1FLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsNkJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsQ0FORixDQVhGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBSEYsRUFNRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLDRCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLENBTkYsQ0FyQkYsRUErQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0UsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQyxrQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQUhGLEVBTUUsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQyxvQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQU5GLENBL0JGLEVBMENFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FIRixFQU1FLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsb0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FORixDQTFDRixFQW9ERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBSEYsRUFNRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLCtCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBTkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVEYsQ0FwREYsRUErREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0UsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQyw0QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQUhGLEVBTUUsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQywyQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQU5GLEVBU0UsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQywyQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQVRGLEVBWUUsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQywyQkFBWDtBQUFBO0FBQUE7QUFB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RSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBTkYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FIRixFQU1FLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FORixFQVNFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMseUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FURixDQVhGLEVBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDLHdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLENBTkYsRUFTRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FURixDQXRDRixFQW1ERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUpGLEVBS0UsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQyxtQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixDQUxGLENBbkRGLEVBNERFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSkYsRUFLRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHVCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLENBTEYsQ0E1REYsRUFxRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFKRixFQUtFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMseUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBREYsQ0FMRixDQXJFRixFQThFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUpGLEVBS0UsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQywrQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixDQUxGLENBOUVGLEVBdUZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHFDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBSEYsQ0F2RkYsQ0F6QkYsQ0FGRixDQXJWRixFQWlkRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBRyxNQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBSyxXQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0UsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQyxtQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUhGLEVBTUUsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQyxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQU5GLENBREYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0UsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQyxzQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQUhGLEVBTUUsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQyw0QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQU5GLENBWkYsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFB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O0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsc0RBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsQ0FIRixFQU1FLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsb0RBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsQ0FORixFQVVFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsNkRBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0FWRixDQVhGLEVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FIRixFQU1FLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FORixFQVNFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMseUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBSEYsRUFNRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBTkYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLGtCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLENBSEYsRUFNRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLG9CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLENBTkYsQ0FYRixFQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLG9CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBSEYsRUFNRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBTkYsQ0FyQkYsRUErQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsc0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREYsQ0FIRixFQU1FLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsd0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsQ0FORixFQVNFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQVRGLENBL0JGLEVBNENFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSkYsRUFLRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHlCQUFYO0FB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Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCIvLyBUaGlzIGlzIGNsaWVudCBzaWRlIGNvbmZpZyBvbmx5IC0gZG9uJ3QgcHV0IGFueXRoaW5nIGluIGhlcmUgdGhhdCBzaG91bGRuJ3QgYmUgcHVibGljIVxyXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwYDtcclxuLy8gZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSA2O1xyXG4vLyBleHBvcnQgIHtwZXJQYWdlfTsiLCJpbXBvcnQgd2l0aEFwb2xsbyBmcm9tICduZXh0LXdpdGgtYXBvbGxvJztcclxuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tICdhcG9sbG8tYm9vc3QnO1xyXG5pbXBvcnQgeyBlbmRwb2ludCB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoeyBoZWFkZXJzIH0pIHtcclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXHJcbiAgICByZXF1ZXN0OiBvcGVyYXRpb24gPT4ge1xyXG4gICAgICBvcGVyYXRpb24uc2V0Q29udGV4dCh7XHJcbiAgICAgICAgZmV0Y2hPcHRpb25zOiB7XHJcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgICAvLyBsb2NhbCBkYXRhIGZyb20gYXBvbGxvIGNsaWVudFxyXG4gICAgICBjbGllbnRTdGF0ZTp7XHJcbiAgICAgICByZXNvbHZlcnM6e30sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhjcmVhdGVDbGllbnQpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUGFnZVwiO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgYXMgQXBvbGxvSG9va3NQcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XHJcbmltcG9ydCB3aXRoRGF0YSBmcm9tIFwiLi4vbGliL3dpdGhEYXRhXCI7XHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcyBleHBvc2VzIHRoZSBxdWVyeSB0byB0aGUgdXNlclxyXG4gICAgcGFnZVByb3BzLnF1ZXJ5ID0gY3R4LnF1ZXJ5O1xyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBhcG9sbG8sIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XHJcbiAgICAgICAgICA8QXBvbGxvSG9va3NQcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XHJcbiAgICAgICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgPC9BcG9sbG9Ib29rc1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuXHJcbmNvbnN0IEZvb3Rlckl0ZW1zID0gc3R5bGVkLnVsYFxyXG5tYXJnaW46MCBhdXRvO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWNvbnRlbnQ6Y2VudGVyO1xyXG5wYWRkaW5nLWJvdHRvbTowLjVyZW07XHJcbmA7XHJcblxyXG5jb25zdCBGb290ZXJJdGVtID0gc3R5bGVkLmxpYFxyXG5saXN0LXN0eWxlOm5vbmU7XHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZzowIDAuNXJlbTtcclxuZm9udC1zaXplOjEuNXJlbTtcclxuYDtcclxuY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxubWFyZ2luOjAgYXV0bztcclxubWFyZ2luLXRvcDogM3JlbSA7XHJcbmRpc3BsYXk6ZmxleDtcclxuYm90dG9tOjA7XHJcbmxlZnQ6MDtcclxuaGVpZ2h0OjRyZW07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmNvbG9yOiR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHVyZVdoaXRlfTtcclxuYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbmA7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb290ZXJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxGb290ZXJJdGVtcz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJJdGVtPlN5Z2V4PC9Gb290ZXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvb3Rlckl0ZW0+ICYjOTQwMDsgQ29weXJpZ2h0PC9Gb290ZXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvb3Rlckl0ZW0+Q29udGFjdDwvRm9vdGVySXRlbT5cclxuICAgICAgICAgICAgPC9Gb290ZXJJdGVtcz5cclxuICAgICAgICA8L0Zvb3RlckNvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1lZ2FNZW51IGZyb20gXCIuL21lZ2EtbWVudS9NZWdhTWVudVwiO1xyXG5pbXBvcnQgQnVyZ2VyIGZyb20gXCIuL21lZ2EtbWVudS9CdXJnZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9jb21wb25lbnRzL1VzZXInXHJcblxyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IHtcclxuICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG59O1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgTlByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IHtcclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbn07XHJcbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6MTAwO1xyXG4gICBcclxuICAgIC5tZWdhTWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgIH1cclxuICAgIC5zdWJCYXJ7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6My41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcclxuICAgIHBhZGRpbmc6MCAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUucHVyZVdoaXRlfTtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkeyBwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUucHVyZVdoaXRlfTsgKi9cclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4gIC5tZU1lbnUge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6My41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XHJcbiAgICBjb2xvcjogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUucHVyZVdoaXRlfTtcclxuICAgIGJhY2tncm91bmQ6ICR7IHByb3BzID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTtcclxuICAgICAgICBwYWRkaW5nOjAgIDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgLnN1YkJhcntcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIDFmcik7XHJcbiAgICBcclxuICAgIC5tZU1lbnV7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgfVxyXG4gICAgLmJ1cmdlcntcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgLm1lZ2FNZW51e1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIH1cclxuICB4XHJcbiAgIFxyXG4gICAgLmJ1cmdlcntcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIH1cclxuICB9XHJcbiAgIGA7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPFN0eWxlZEhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJCYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW4vbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+U1lHRUZFWDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVyZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1cmdlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lTWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBkYXRhICYmIGRhdGEubWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VXNlci5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXNlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYU1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxNZWdhTWVudSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZEhlYWRlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuY29uc3QgTWV0YSA9ICgpID0+IChcclxuXHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuICAgICAgICA8dGl0bGU+U1lHRUZFWDwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IE1ldGE7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyLCBpbmplY3RHbG9iYWwgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIi4vTWV0YVwiO1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgbWF4V2lkdGg6IFwiMTAwMHBcIixcclxuICBxdWFydGVyQkI6IFwiICMwMDNjOTZcIixcclxuICBsaWdodGVzdEJCOiBcIiNiM2I0ZDFcIixcclxuICBicml0aXNoUmVkOiBcIiNkNDM1MWNcIixcclxuICBjb21wbGVtZW50YXJ5QkI6IFwiIzc4NDgwMFwiLFxyXG4gIGNvbXBsZW1lbnRhcnlCQjE6IFwiIzAwNzg2MFwiLFxyXG4gIGNvbXBsZW1lbnRhcnlCQjI6IFwiIzAwNjA3OFwiLFxyXG4gIGNvbXBsZW1lbnRhcnlCQjM6IFwiIzAwNzA3OFwiLFxyXG4gIGFtZXJpY2FuQmx1ZTogXCIjMWQ3MGI4XCIsXHJcbiAgYnJpdGlzaEJsdWU6IFwiIzAwMzA3OFwiLFxyXG4gIGJyaXRpc2hMaWdodEJsdWU6IFwiIzFkNzBiOFwiLFxyXG4gIHJlZDogXCIjRkYwMDAwXCIsXHJcbiAgZ29vZ2xlQmx1ZTogXCIjMzU5XCIsXHJcbiAgZ29sZGVuQnJvd246IFwiI2QxN2YwNVwiLFxyXG4gIGJsYWNrOiBcIiMzOTM5MzlcIixcclxuICBncmV5OiBcIiNhYWFiYWFcIixcclxuICBzbGlnaHRHcmV5OiBcInJnYigyNDMsIDI0MSwgMjQxKVwiLFxyXG4gIGxpZ2h0R3JleTogXCIjRTFFMUUxXCIsXHJcbiAgZGFya0dyZXk6IFwiI0VFRUVFRVwiLFxyXG4gIHB1cmVXaGl0ZTogXCIjRkZGRkZGXCIsXHJcbiAgb2ZmV2hpdGU6IFwiI0VERURFRFwiLFxyXG4gIHByaW1hcnk6ICcjMDBhYjgwJyxcclxuICBibGFjazI6ICcjNGE0YTRhJyxcclxuICB3aGl0ZTM6ICcjZmZmZmZmJyxcclxuICBlcnJvcjogJyNlMDU2NjYnLFxyXG4gIGJyb3duaXNoUmVkOiAnI2ZvNzAzMScsXHJcbiAgY29vbEJsdWU6ICcjMTk1ZTgzJyxcclxuICBjb29sbGVyQmx1ZTogJyMxMzZlYTUnLFxyXG4gIHNhbmQ6ICcjZWVhNTQ5JyxcclxuICByZWRkaXNoQnJvd246ICcjZjU3ODM2JyxcclxuICBidWZmOiAnI2VkYjg3OScsXHJcbiAgYmx1ZXM6IFtcclxuICAgICcjNzI5ZmJmJyxcclxuICAgICcjYjZjN2Q2JyxcclxuICAgICcjMDc4MGI3JyxcclxuICAgICcjNjhhMWM1JyxcclxuICAgICcjMDE0ZTk4JyxcclxuICAgICcjMjc4MmIwJyxcclxuICAgICcjNUVDOUY5JyxcclxuICAgICcjYzhlNWViJyxcclxuICAgICcjYjFkZWUzJyxcclxuICAgICcjYmRlNGU5JyxcclxuICAgICcjY2NlN2U4JyxcclxuICBdLFxyXG5cclxuICBsaWdodEJsdWVzOiBbXHJcbiAgICAnI2M4ZTRmMycsXHJcbiAgICAnI2QxZThlZCcsXHJcbiAgICAnI2IzZDNlYScsXHJcbiAgICAnI2M1ZTJmMicsXHJcbiAgICAnI2YxZjVmZicsXHJcbiAgICAnI2U2ZWNmZSdcclxuICBdLFxyXG4gIGdyZXlzOiBbXHJcbiAgICAnI0Y5RkFGQycsXHJcbiAgICAnI0YyRjJGNicsXHJcbiAgICAnI2FhYWJhYScsXHJcbiAgICAnIzk5OScsXHJcbiAgICAnI2ZjZmNmYycsXHJcbiAgICAnI2M4YzhjOCcsXHJcbiAgXSxcclxuICBmb3JtQlMzOiBcIiBpbnNldCAwLjdyZW0gMC43cmVtIDAuNXJlbSAgcmdiYSgwLDAsMCwwLjkpXCIsXHJcbiAgZm9ybUJTNDogXCIgaW5zZXQgMC4wOHJlbSAxcmVtIDFyZW0gMC4wM3JlbSByZ2JhKDAsMC4zLDAsMC4yKVwiLFxyXG5cclxuICBmb3JtQlM6IFwiIGluc2V0ICAwLjFyZW0gLjA1cmVtIDAuNXJlbSByZ2JhKDAsMCwwLjgsMC41KVwiLFxyXG4gIGZvcm1CUzI6IFwiIGluc2V0ICAwIDAgMnB4IDJweCByZ2JhKDAsMCwwLjQsMC4xKVwiLFxyXG4gIGZvcm1CUzE6IFwiIDJweCAycHggMnB4IDJweCByZ2JhKDAsMCwwLjQsMC4xKVwiLFxyXG59O1xyXG4xMVxyXG5jb25zdCBHZW5QYWdlID0gc3R5bGVkLmRpdmBcclxuLyogcGFkZGluZy10b3A6NHJlbTsgKi9cclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5kaXNwbGF5OmZsZXg7IFxyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47IFxyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxud2lkdGg6MTAwdnc7XHJcbmZvbnQtZmFtaWx5OlwiUm9ib3RvIFNsYWJcIjtcclxubWluLWhlaWdodDoxMDB2aDtcclxuYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saWdodEJsdWVzWzRdfTtcclxuXHJcbmA7XHJcblxyXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6MnJlbTtcclxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnB1cmVXaGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czowLjVyZW07XHJcbiAgYm9yZGVyOiAwLjA5cmVtIHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19O1xyXG5gO1xyXG5cclxuaW5qZWN0R2xvYmFsYFxyXG4vKiBcclxuIHJhZG5pa2FfbmV4dCBmb250ICBcclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JztcclxuICAgIHNyYzogdXJsKCcuLi8uLi9zdGF0aWMvcmFkbmlrYW5leHQtbWVkaXVtLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgXHJcbiAgfSAgKi9cclxuXHJcblxyXG4vKiByb2JvdG8tc2xhYi1yZWd1bGFyIC0gbGF0aW4gKi9cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHNyYzogdXJsKCcuLi8uLi9zdGF0aWMvcm9ib3RvLXNsYWItdjExLWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJykgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXHJcbiAgc3JjOiAgdXJsKCcuLi8uLi9zdGF0aWMvcm9ib3RvLXNsYWItdjExLWxhdGluLXJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSAvKiBJRTYtSUU4ICovXHJcbiAgc3JjOiB1cmwoJy4uLy4uL3N0YXRpYy9yb2JvdG8tc2xhYi12MTEtbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJykgLyogTW9kZXJuIEJyb3dzZXJzICovXHJcbiAgc3JjOiB1cmwoJy4uLy4uL3N0YXRpYy9yb2JvdG8tc2xhYi12MTEtbGF0aW4tcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJykgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cclxuICBzcmM6IHVybCgnLi4vLi4vc3RhdGljL3JvYm90by1zbGFiLXYxMS1sYXRpbi1yZWd1bGFyLnN2ZyNSb2JvdG9TbGFiJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xyXG4gIHNyYzogdXJsKCcuLi8uLi9zdGF0aWMvcm9ib3RvLXNsYWItdjExLWxhdGluLXJlZ3VsYXIuc3ZnI1JvYm90b1NsYWInKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXHJcbn0gXHJcblxyXG5cclxuXHJcbiAgaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICBib2R5XHJcbntcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICBcclxuICBidXR0b24geyAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYic7IH1cclxuXHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIjtcclxuICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuXHJcbmFcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6MS41cmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmxhY2t9O1xyXG4gICAgOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG59XHJcbmA7XHJcblxyXG5cclxuY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8R2VuUGFnZT5cclxuICAgICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8SW5uZXI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9Jbm5lcj5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L0dlblBhZ2U+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgbWVRdWVyeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcXVlcmllcyZNdXRhdGlvbnMmRnVuY3Rpb25zL1F1ZXJpZXMnXHJcblxyXG5jb25zdCBVc2VyID0gcHJvcHMgPT4gKFxyXG5cclxuICAgIDxRdWVyeSAgey4uLnByb3BzfSBxdWVyeT17bWVRdWVyeX0gPlxyXG4gICAgICAgIHtwYXlsb2FkID0+IHByb3BzLmNoaWxkcmVuKHBheWxvYWQpfVxyXG4gICAgPC9RdWVyeT5cclxuKVxyXG5cclxuVXNlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBCdXJnZXJTdHlsZWQgPSBzdHlsZWQuZGl2YFxyXG4vKiBkaXNwbGF5Om5vbmU7ICovXHJcbnBhZGRpbmctdG9wOjFyZW07XHJcbnBhZGRpbmctYm90dG9tOjFyZW07XHJcbnBhZGRpbmctbGVmdDoxLjVyZW07XHJcbiAgICB3aWR0aDo1cmVtO1xyXG4gICAgbWF4LWhlaWdodDozLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyBwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbiAgIGRpdntcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB9XHJcbiBgO1xyXG5jb25zdCBCdXJnZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXJnZXJTdHlsZWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZTFcIiA+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZTJcIiA+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZTNcIiA+PC9kaXY+XHJcbiAgICAgICAgPC9CdXJnZXJTdHlsZWQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1cmdlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFRvb2xCYXJOYXZJdGVtID0gc3R5bGVkLmRpdmBcclxuICAvKiBwYWRkaW5nOiAxLjVyZW07ICovXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qIGZvbnQtZmFtaWx5OlwiUm9ib3RvIFNsYWJcIjsgKi9cclxuICB9XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgJ09wZW4gU2FucycsICdTZWdvZSBVSScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSxcclxuICAgIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZDogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGNvbG9yOiAkeyBwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9XHJcbn1cclxuXHJcbm5hdiB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuIFxyXG5uYXYgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSBcclxubmF2IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUucHVyZVdoaXRlfTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4zcmVtO1xyXG4gICAgOmhvdmVye1xyXG4gICAgY29sb3I6ICR7IHByb3BzID0+IHByb3BzLnRoZW1lLmJyaXRpc2hMaWdodEJsdWV9O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbm5hdiBsaTpob3ZlciB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuOHJlbTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjhyZW07XHJcbiAgYmFja2dyb3VuZDogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUucHVyZVdoaXRlfTtcclxuICBjb2xvcjogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUuYnJpdGlzaEJsdWV9O1xyXG5cclxufVxyXG4gIFxyXG4gIC5tZW51LXN1YiB7XHJcbiAgd2lkdGg6IDEwMCAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAkeyBwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG4gIGNvbG9yOiAkeyBwcm9wcyA9PiBwcm9wcy50aGVtZS5icml0aXNoQmx1ZX07XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjhyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC44cmVtO1xyXG4gIGJveC1zaGFkb3c6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb3JtQlN9O1xyXG59XHJcbm5hdiBsaTpob3ZlciAubWVudS1zdWIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiAgLm1lbnUtc3ViIGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4gIC5tZW51LXN1YiBhIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUuYnJpdGlzaEJsdWV9O1xyXG4gIC8qIG1hcmdpbjogMC4xcmVtOyAqL1xyXG59XHJcblxyXG4gIC5tZW51LXN1YiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4gIC5tZW51LXN1Yi11c2VyIHtcclxuICB3aWR0aDogNzAgJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19O1xyXG4gIGNvbG9yOiAkeyBwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC44cmVtO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuOHJlbTtcclxufVxyXG5uYXYgbGk6aG92ZXIgLm1lbnUtc3ViLXVzZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiAgLm1lbnUtc3ViLXVzZXIgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiAgLm1lbnUtc3ViLXVzZXIgYSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgY29sb3I6ICR7IHByb3BzID0+IHByb3BzLnRoZW1lLnB1cmVXaGl0ZX07XHJcbiAgLyogbWFyZ2luOiAwLjFyZW07ICovXHJcbn1cclxuXHJcbiAgLm1lbnUtc3ViLXVzZXIgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuICAubWVudS1jYXRlZ29yeSB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBjb2xvcjogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUuYnJpdGlzaEJsdWV9XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4gIC5tZW51LWNhdGVnb3J5OmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4gIC5tZW51LWNvbC0xLFxyXG4gIC5tZW51LWNvbC0yLFxyXG4gIC5tZW51LWNvbC0zLFxyXG4gIC5tZW51LWNvbC00IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4gIC5tZW51LWNvbC0xLFxyXG4gIC5tZW51LWNvbC0yLFxyXG4gIC5tZW51LWNvbC0zLFxyXG4gIC5tZW51LWNvbC00IHtcclxuICB3aWR0aDogMjUgJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuICAubWVudS1jYXRlZ29yeTpsYXN0LW9mLXR5cGUge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5ociB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo2NTApe1xyXG4gIGJvZHl7XHJcbiAgICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcbiAgfVxyXG4gIG5hdiB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBoZWlnaHQ6OTB2aDtcclxuICAgIHRvcDozLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIHdpZHRoOjUwJVxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgdHJhbnNpc3Rpb246dHJhbnNmb3JtIDAuNXMgZWFzZS1pbjtcclxuICAgIFxyXG4gIH1cclxuICBuYXYgbGl7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgLyogb3BhY2l0eTowOyAqL1xyXG4gIH1cclxuICBcclxufVxyXG5gO1xyXG5cclxuY29uc3QgTWVnYU1lbnUgPSAoKSA9PiAoXHJcbiAgPFRvb2xCYXJOYXZJdGVtPlxyXG4gICAgPG5hdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcblxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LW1haW5cIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5BZG1pbmlzdHJhdGlvbjwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXN1YlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlJlZ2lvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3UmVnaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Tm91dmVsbGUgUmVnaW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeVJlZ2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1vZGlmaWVyIFJlZ2lvbjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5EZXBhcnRlbWVudDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3RGl2aXNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Ob3V2ZWF1IERlcGFydGVtZW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeURpdmlzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgRGVwYXJ0bWVudDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5BcnJvbmRpc3NlbWVudDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3U3ViRGl2aXNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Ob3V2ZWwgQXJyb25kaXNzZW1lbnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5U3ViRGl2aXNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBBcnJvbmRpc3NlbWVudDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5WaWxsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3VG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk5vdXZlbGxlIFZpbGxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeVRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBWaWxsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5OZXcgU2VyaWVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdTZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5yZWdpc3RlciBTZXJpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5U2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgU2VyaWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+Tm90ZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld01hcmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+SW5zY3JpcmUgTm90ZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5TWFya3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBOb3RlczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5Gb3JtaWsgRm9ybXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L2Zvcm1pa0Zvcm1zL3Nob3dGb3JtaWtGb3Jtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk5ldyBSZWdpc3RyYXRpb248L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5U3ViamVjdFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBUeXBlIE1hdGnDqHJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sLTJcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5UeXBlIERlIE1hdGnDqHJlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdTdWJqZWN0VHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPiBOb3V2ZWF1IFR5cGUgTWF0acOocmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5U3ViamVjdFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBUeXBlIE1hdGnDqHJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlN1YmplY3QgU2VyaWVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdTdWJqZWN0U2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+U3ViamVjdHMgU2VyaWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeVN1YmplY3RTZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBUeXBlIE1hdGnDqHJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPkluc2NyaXB0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdSZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPiBOb3V2ZWxsZSBJbnNjcmlwdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlSZWdpc3RyYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBJbnNjcmlwdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5Qb3N0ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3UmFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk5vdXZlYXUgUG9zdGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5UmFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1vZGlmaWVyIFBvc3RlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5FeGFtZW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld0V4YW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Ob3V2ZWwgRXhhbWVuPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeUV4YW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBFeGFtZW48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+UmVzdWx0YXRzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdy9nZW5DZW50ZXJSZXN1bHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UmVzdWx0YXRzIENlbnRyZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3cvcmVzdWx0cy9jYW5kQ29kZVJlc3VsdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5SZXN1bHRhdCBDYW5kaWRhdDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+TGlzdGVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdy9saXN0cy9jZW50ZXJzUGVyVG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkNlbnRyZXMgcGFyIFZpbGxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdy9saXN0cy9zdWJqUGVyU2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TWF0aWVyZXMgcGFyIFNlcmllPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdy9saXN0cy9zdWJqUGVyU2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TWF0aWVyZXMgcGFyIFNlcmllPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdy9saXN0cy9zdWJqUGVyU2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TWF0aWVyZXMgcGFyIFNlcmllPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdy9saXN0cy9zdWJqUGVyU2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TWF0aWVyZXMgcGFyIFNlcmllPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sLTNcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5VdGlsaXNhdGV1cjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3VXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk5vdXZlYXUgVXRpbGlzYXRldXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5VXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1vZGlmaWVyIFV0aWxpc2F0ZXVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPkNlbnRyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3Q2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Tm91dmVhdSBDZW50cmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5Q2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgQ2VudHJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlNlc3Npb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld1Nlc3Npb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Ob3V2ZWxsZSBTZXNzaW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeVNlc3Npb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBTZXNzaW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlNlcmllczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3U2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Tm91dmVsbGUgU2VyaWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeVNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1vZGlmaWVyIFNlcmllczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5SYXBwb3J0czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3UmVwb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Y2hhcmdlciByYXBwb3J0IDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlSZXBvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciByYXBwb3J0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlJlc3VsdGF0cyBDZW50cmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L3Jlc3VsdHMvY2VudGVyUmVzdWx0cy9nZXRDb21wbGV0ZUNlbnRlclJlc3VsdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5SZXN1bHRhdHMgQ29tcGxldCBkdSBDZW50cmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L3Jlc3VsdHMvY2VudGVyUmVzdWx0cy9jZW50ZXJSZXN1bHRzUGVyU2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UmVzdWx0YXRzIGR1IENlbnRyZSBwYXIgU2VyaWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdy9yZXN1bHRzL2NhbmRpZGF0ZVJlc3VsdHMvZ2V0Q2FuZGlkYXRlUmVzdWx0c0Zyb21SZWdOb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlJlc3VsdGF0cyBEdSBDYW5kaWRhdDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5QYXlzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdDb3VudHJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Tm91dmVhdSBwYXlzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdy9yZXN1bHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZ5IGNvdW5yPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlNleGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld0dlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPm5vdXZlYXUgU2V4ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlHZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBTZXhlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPkNhbmRpZGF0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdDYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+bm91dmVhdSBDYW5kaWRhdDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3cvY2FuZGlkYXRlUGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkxpc3RlIENhbmRpZGF0czwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlDYW5kaWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBDYW5kaWRhdDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5FbnNlaWduZW1lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld0VkdWNUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Tm91dmVhdSBUeXBlIEQnZW5zZWlnbmVtZW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeUVkdWNUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgVHlwZSBEJ2Vuc2VpZ25lbWVudDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5NYXRpw6hyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3U3ViamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk5vdXZlbGxlIE1hdGnDqHJlIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlTdWJqZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgTWF0acOocmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+Q2hhcmdlIGRlIGNlbnRyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3RXhhbWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5JbnNjcmlwdGlvbiBkZXMgQ2hhcmdlIGRlIGNlbnRyZSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5RXhhbWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBDaGFyZ2UgZGUgY2VudHJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbkluT3V0L3NpZ25VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlNpZ25VcDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBQaGFzZSBkZSBsJ0V4YW1lblxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld1BoYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Tm91dmVsbGUgUGhhc2UgZGUgbCdFeGFtZW4gPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEluc2NyaXJlIFBvc3RlcyBhdXggUGhhc2VzIGRlIGwnRXhhbWVuXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3UGhhc2VSYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UG9zdGVzIGF1eCBQaGFzZXMgZGUgbCdFeGFtZW4gPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEluc2NyaXJlIFByb2YgYXUgY2VudHJlIGQnRXhhbWVuXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3Q0VTRXhhbWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Qcm9mIHMnaW5zY3JpcmUgYXUgY2VudHJlIGQnRXhhbWVuIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBFeGFtZW4gUG91ciBTZXNzaW9uIHBhciBDZW50cmVcclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdDZW50ZXJFeGFtU2Vzc2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkluc2NyaXJlIENlbnRyZSBhIGwnRXhhbWVuIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5TZXJpZXMgcGFyIENlbnRyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3Q2VudGVyRXhhbVNlc3Npb25TZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5JbnNjcmlyZSBTZXJpZXMgYXV4IGNlbnRyZXMgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2NyZWF0ZXMvbmV3UmVnaXN0ZXJcIj5DYW5kaWRhdGU8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zdWJcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+SW5zY3JpcHRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld1JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+IE5vdXZlbGxlIEluc2NyaXB0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeVJlZ2lzdHJhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1vZGlmaWVyIEluc2NyaXB0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlJlc3VsdGF0czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3cvZ2VuQ2VudGVyUmVzdWx0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlJlc3VsdGF0cyBDZW50cmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L3Jlc3VsdHMvY2FuZENvZGVSZXN1bHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UmVzdWx0YXQgQ2FuZGlkYXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlV0aWxpc2F0ZXVyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdVc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Tm91dmVhdSBVdGlsaXNhdGV1cjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlVc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgVXRpbGlzYXRldXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+UmVzdWx0YXRzIENlbnRyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3cvcmVzdWx0cy9jZW50ZXJSZXN1bHRzL2dldENvbXBsZXRlQ2VudGVyUmVzdWx0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlJlc3VsdGF0cyBDb21wbGV0IGR1IENlbnRyZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3cvcmVzdWx0cy9jZW50ZXJSZXN1bHRzL2NlbnRlclJlc3VsdHNQZXJTZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5SZXN1bHRhdHMgZHUgQ2VudHJlIHBhciBTZXJpZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L3Jlc3VsdHMvY2FuZGlkYXRlUmVzdWx0cy9nZXRDYW5kaWRhdGVSZXN1bHRzRnJvbVJlZ05vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UmVzdWx0YXRzIER1IENhbmRpZGF0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPkNhbmRpZGF0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdDYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+bm91dmVhdSBDYW5kaWRhdDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3cvY2FuZGlkYXRlUGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkxpc3RlIENhbmRpZGF0czwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlDYW5kaWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBDYW5kaWRhdDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5DaGFyZ2UgZGUgY2VudHJlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdFeGFtaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkluc2NyaXB0aW9uIGRlcyBDaGFyZ2UgZGUgY2VudHJlIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlFeGFtaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1vZGlmaWVyIENoYXJnZSBkZSBjZW50cmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduSW5PdXQvc2lnblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+U2lnblVwPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBoYXNlIGRlIGwnRXhhbWVuXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3UGhhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Ob3V2ZWxsZSBQaGFzZSBkZSBsJ0V4YW1lbiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5zY3JpcmUgUG9zdGVzIGF1eCBQaGFzZXMgZGUgbCdFeGFtZW5cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdQaGFzZVJhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Qb3N0ZXMgYXV4IFBoYXNlcyBkZSBsJ0V4YW1lbiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5zY3JpcmUgUHJvZiBhdSBjZW50cmUgZCdFeGFtZW5cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdDRVNFeGFtaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlByb2YgcydpbnNjcmlyZSBhdSBjZW50cmUgZCdFeGFtZW4gPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEV4YW1lbiBQb3VyIFNlc3Npb24gcGFyIENlbnRyZVxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld0NlbnRlckV4YW1TZXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+SW5zY3JpcmUgQ2VudHJlIGEgbCdFeGFtZW4gPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlNlcmllcyBwYXIgQ2VudHJlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdDZW50ZXJFeGFtU2Vzc2lvblNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkluc2NyaXJlIFNlcmllcyBhdXggY2VudHJlcyA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9jcmVhdGVzL25ld1JlZ2lzdGVyXCI+Q2VudHJlPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtc3ViXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+Tm90ZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld01hcmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+SW5zY3JpcmUgTm90ZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5TWFya3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBOb3RlczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+SW5zY3JpcHRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld1JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+IE5vdXZlbGxlIEluc2NyaXB0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeVJlZ2lzdHJhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1vZGlmaWVyIEluc2NyaXB0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5SZXN1bHRhdHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L2dlbkNlbnRlclJlc3VsdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5SZXN1bHRhdHMgQ2VudHJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdy9yZXN1bHRzL2NhbmRDb2RlUmVzdWx0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlJlc3VsdGF0IENhbmRpZGF0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5MaXN0ZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L2xpc3RzL2NlbnRlcnNQZXJUb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Q2VudHJlcyBwYXIgVmlsbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L2xpc3RzL3N1YmpQZXJTZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5NYXRpZXJlcyBwYXIgU2VyaWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L2xpc3RzL3N1YmpQZXJTZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5NYXRpZXJlcyBwYXIgU2VyaWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L2xpc3RzL3N1YmpQZXJTZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5NYXRpZXJlcyBwYXIgU2VyaWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L2xpc3RzL3N1YmpQZXJTZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5NYXRpZXJlcyBwYXIgU2VyaWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPlV0aWxpc2F0ZXVyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdVc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Tm91dmVhdSBVdGlsaXNhdGV1cjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlVc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgVXRpbGlzYXRldXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+UmVzdWx0YXRzIENlbnRyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3cvcmVzdWx0cy9jZW50ZXJSZXN1bHRzL2dldENvbXBsZXRlQ2VudGVyUmVzdWx0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlJlc3VsdGF0cyBDb21wbGV0IGR1IENlbnRyZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3cvcmVzdWx0cy9jZW50ZXJSZXN1bHRzL2NlbnRlclJlc3VsdHNQZXJTZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5SZXN1bHRhdHMgZHUgQ2VudHJlIHBhciBTZXJpZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L3Jlc3VsdHMvY2FuZGlkYXRlUmVzdWx0cy9nZXRDYW5kaWRhdGVSZXN1bHRzRnJvbVJlZ05vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UmVzdWx0YXRzIER1IENhbmRpZGF0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5DYW5kaWRhdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3Q2FuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPm5vdXZlYXUgQ2FuZGlkYXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93L2NhbmRpZGF0ZVBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5MaXN0ZSBDYW5kaWRhdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5Q2FuZGlkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgQ2FuZGlkYXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+Q2hhcmdlIGRlIGNlbnRyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3RXhhbWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5JbnNjcmlwdGlvbiBkZXMgQ2hhcmdlIGRlIGNlbnRyZSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RpZnkvbW9kaWZ5RXhhbWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBDaGFyZ2UgZGUgY2VudHJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbkluT3V0L3NpZ25VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlNpZ25VcDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBJbnNjcmlyZSBQcm9mIGF1IGNlbnRyZSBkJ0V4YW1lblxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld0NFU0V4YW1pbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UHJvZiBzJ2luc2NyaXJlIGF1IGNlbnRyZSBkJ0V4YW1lbiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhhbWVuIFBvdXIgU2Vzc2lvbiBwYXIgQ2VudHJlXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3Q2VudGVyRXhhbVNlc3Npb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5JbnNjcmlyZSBDZW50cmUgYSBsJ0V4YW1lbiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+U2VyaWVzIHBhciBDZW50cmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld0NlbnRlckV4YW1TZXNzaW9uU2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+SW5zY3JpcmUgU2VyaWVzIGF1eCBjZW50cmVzIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2NyZWF0ZXMvbmV3UmVnaXN0ZXJcIj5FeGFtaW5hdGV1cjwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXN1YlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPk5vdGVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdNYXJrc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkluc2NyaXJlIE5vdGVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeU1hcmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgTm90ZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+VXRpbGlzYXRldXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld1VzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Ob3V2ZWF1IFV0aWxpc2F0ZXVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeVVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciBVdGlsaXNhdGV1cjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbnUtY2F0ZWdvcnlcIj5SYXBwb3J0czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZXMvbmV3UmVwb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Y2hhcmdlciByYXBwb3J0IDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vZGlmeS9tb2RpZnlSZXBvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Nb2RpZmllciByYXBwb3J0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVudS1jYXRlZ29yeVwiPkNoYXJnZSBkZSBjZW50cmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVzL25ld0V4YW1pbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+SW5zY3JpcHRpb24gZGVzIENoYXJnZSBkZSBjZW50cmUgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kaWZ5L21vZGlmeUV4YW1pbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kaWZpZXIgQ2hhcmdlIGRlIGNlbnRyZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25Jbk91dC9zaWduVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5TaWduVXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5zY3JpcmUgUHJvZiBhdSBjZW50cmUgZCdFeGFtZW5cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdDRVNFeGFtaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlByb2YgcydpbnNjcmlyZSBhdSBjZW50cmUgZCdFeGFtZW4gPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2NyZWF0ZXMvbmV3UmVnaXN0ZXJcIj5VdGlsaXNhdGV1cjwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXN1Yi11c2VyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW51LWNhdGVnb3J5XCI+TG9naW4vU2lnbnVwPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlcy9uZXdTaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5TaWdudXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvY3JlYXRlcy9uZXdSZWdpc3RlclwiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2NyZWF0ZXMvbmV3UmVnaXN0ZXJcIj5Ob3VzPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuXHJcbiAgPC9Ub29sQmFyTmF2SXRlbT5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBNZWdhTWVudVxyXG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmNvbnN0IGdldEFDZW50ZXJBZG1pblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFDZW50ZXJBZG1pblF1ZXJ5KCRhdXRoQ29kZTogU3RyaW5nISkge1xyXG4gICAgY2VudGVyQWRtaW5TaWduSW4oYXV0aENvZGU6ICRhdXRoQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBhdXRoQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IG1lUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgbWVRdWVyeSB7XHJcbiAgICBtZSB7XHJcbiAgICAgIGlkXHJcbiAgICAgZW1haWxcclxuICAgICBuYW1lIFxyXG4gICAgIHBhc3N3b3JkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlRWR1Y2F0aW9uVHlwZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZUVkdWNhdGlvblR5cGVRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgZWR1Y2F0aW9uVHlwZShpZDogJGlkKSB7XHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICAgIGVkdWNhdGlvblR5cGVDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q0VTRXhhbWluZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDRVNFeGFtaW5lclF1ZXJ5KFxyXG4gICAgJGV4YW1pbmVyOiBFeGFtaW5lcldoZXJlVW5pcXVlSW5wdXQhLFxyXG4gICAgICRjZW50ZXJFeGFtU2Vzc2lvbjpDZW50ZXJFeGFtU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhKSB7XHJcbiAgICBnZXRDZW50ZXJFeGFtU2Vzc2lvbkV4YW1pbmVycyhcclxuICAgICAgZXhhbWluZXI6ICRleGFtaW5lciwgXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uOiRjZW50ZXJFeGFtU2Vzc2lvbiAgKSB7XHJcbiAgICAgXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlU3ViamVjdFR5cGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVTdWJqZWN0VHlwZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzdWJqZWN0VHlwZShpZDogJGlkKSB7XHJcbiAgICAgIHN1YmplY3RUeXBlTmFtZVxyXG4gICAgICBzdWJqZWN0VHlwZUNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxDZW50ZXJBZG1pbnNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDZW50ZXJBZG1pbnNRdWVyeSB7XHJcbiAgICBjZW50ZXJBZG1pbnMge1xyXG4gICAgICBpZFxyXG4gICAgICBhdXRoTmFtZVxyXG4gICAgICBhdXRoQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbEVkdWNhdGlvblR5cGVzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsRWR1Y2F0aW9uVHlwZXNRdWVyeSB7XHJcbiAgICBlZHVjYXRpb25UeXBlcyhvcmRlckJ5OiBlZHVjYXRpb25UeXBlTmFtZV9BU0MpIHtcclxuICAgICAgaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgZWR1Y2F0aW9uVHlwZUNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldEFsbFJlZ2lvbnNPZkFDb3VudHJ5UXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsUmVnaW9uc09mQUNvdW50cnlRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY291bnRyeShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHJlZ2lvbihvcmRlckJ5OiByZWdOYW1lX0FTQyl7XHJcbiAgICAgICByZWdOYW1lXHJcbiAgICAgIHJlZ0NvZGVcclxuICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsUmVnaW9uc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFJlZ2lvbnNRdWVyeSB7XHJcbiAgICAgIHJlZ2lvbnN7XHJcbiAgICAgICByZWdOYW1lXHJcbiAgICAgIHJlZ0NvZGVcclxuICAgICAgaWRcclxuICB9fVxyXG5gO1xyXG5jb25zdCBnZXRBbGxDb3VudHJ5c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENvdW50cnlzUXVlcnkge1xyXG4gICAgY291bnRyaWVzKG9yZGVyQnk6Y291bnRyeU5hbWVfQVNDKSB7XHJcbiAgICAgIGNvdW50cnlOYW1lXHJcbiAgICAgIGNvdW50cnlDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBnZXRBbGxDb3VudHJ5c1JlZ2lvbkNyZWF0ZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENvdW50cnlzUmVnaW9uQ3JlYXRlUXVlcnkge1xyXG4gICAgY291bnRyaWVzKG9yZGVyQnk6Y291bnRyeU5hbWVfQVNDKSB7XHJcbiAgICAgICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldENlbnRlclJlc3VsdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDZW50ZXJSZXN1bHRzUXVlcnkoXHJcbiAgICAkZXhhbTogRXhhbVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkY2VudGVyOiBDZW50ZXJXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHNlc3Npb246IFNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgZ2V0UmVzdWx0c1BlckNlbnRlcihleGFtOiAkZXhhbSwgY2VudGVyOiAkY2VudGVyLCBzZXNzaW9uOiAkc2Vzc2lvbikge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICBnZW5kZXIge1xyXG4gICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBleGFtIHtcclxuICAgICAgICBleGFtTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNlc3Npb24ge1xyXG4gICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyIHtcclxuICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIH1cclxuICAgICAgc2NvcmVzIHtcclxuICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgY29lZmZcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgICBzZXJpZXMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2FuZGlkYXRlUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENhbmRpZGF0ZVJlc3VsdHNRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcmVnaXN0cmF0aW9uKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgY3JlYXRlZEF0XHJcbiAgICAgIGNhbmRSZWdpc3RyYXRpb25OdW1iZXJcclxuICAgICAgXHJcbiAgICAgIGNhbmRpZGF0ZSB7XHJcbiAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgbW9tTmFtZVxyXG4gICAgICAgIGRhZE5hbWVcclxuICAgICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgICBpbWFnZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICBnZW5kZXIge1xyXG4gICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllcyB7XHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9ue1xyXG4gICAgICAgIGlkIFxyXG4gICAgICBleGFtU2Vzc2lvbiB7XHJcbiAgICAgICBpZFxyXG4gICAgICAgIGV4YW17XHJcbiAgICAgICAgICBpZCBcclxuICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlc3Npb257XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgfX1cclxuICAgICAgc2VyaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgY29lZmZcclxuICAgICAgICBzdWJqZWN0U2VyaWVzICB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRFeGFtaW5lclJlZ2lzdHJhdGlvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEV4YW1pbmVyUmVnaXN0cmF0aW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXIoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBleGFtaW5lcntcclxuICAgICAgICBleGFtaW5lcjFzdE5hbWVcclxuICAgICAgICBleGFtaW5lcjJuZE5hbWVcclxuICAgICAgICBleGFtaW5lck90aGVyTmFtZXNcclxuICAgICAgICBleGFtaW5lck1hdHJpY3VsZVxyXG4gICAgICAgIGV4YW1pbmVyUGhvbmVcclxuICAgICAgICBleGFtaW5lckNOSVxyXG4gICAgICAgIGV4YW1pbmVySW1hZ2VcclxuICAgICAgICBleGFtaW5lckVtYWlsXHJcbiAgICAgICAgZ2VuZGVyIHtcclxuICAgICAgICAgIGdlbmRlck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyRXhhbVNlc3Npb257XHJcbiAgICAgICAgaWQgXHJcbiAgICAgIGV4YW1TZXNzaW9uIHtcclxuICAgICAgIGlkXHJcbiAgICAgICAgZXhhbXtcclxuICAgICAgICAgIGlkIFxyXG4gICAgICAgICAgZXhhbU5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Vzc2lvbntcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICB9fVxyXG4gICAgICBjZW50ZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2VudGVyTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHBoYXNlUmFuayB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICByYW5rTmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsQ2VudGVyUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENlbnRlclJlc3VsdHNRdWVyeSgkY2VudGVyRXhhbVNlc3Npb246IFN0cmluZyEpIHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzRm9yUmVzdWx0cyhjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNlcmllc3tcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIHJlZ2lzdHJhdGlvbntcclxuICAgICAgIGlkXHJcbiAgICAgICBjYW5kaWRhdGV7XHJcbiAgICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgIGlkXHJcbiAgICAgICB9XHJcbiAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgY29lZmZcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEVhY2hDYW5kaWRhdGVSZXN1bHRzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0RWFjaENhbmRpZGF0ZVJlc3VsdHNRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcmVnaXN0cmF0aW9uKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgY2FuZGlkYXRlIHtcclxuICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgICBtb21OYW1lXHJcbiAgICAgICAgZGFkTmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICBnZW5kZXIge1xyXG4gICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBleGFtIHtcclxuICAgICAgICBleGFtTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNlc3Npb24ge1xyXG4gICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgIH1cclxuICAgICAgc2VyaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNlcmllc05hbWVcclxuICAgICAgfVxyXG4gICAgICBjZW50ZXIge1xyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURRdWVyeShcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvbjogQ2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNhbmRpZGF0ZTogQ2FuZGlkYXRlV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEKGNlbnRlckV4YW1TZXNzaW9uOiAkY2VudGVyRXhhbVNlc3Npb24sIGNhbmRpZGF0ZTogJGNhbmRpZGF0ZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSgkY2FuZGlkYXRlOiBSZWdpc3RyYXRpb25XaGVyZUlucHV0ISAgKSB7XHJcbiAgICBjYW5kaWRhdGVSZWdpc3RyYXRpb25JRHMoY2FuZGlkYXRlOiAkY2FuZGlkYXRlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5KCRpZDogSUQhICApIHtcclxuICAgIGNhbmRpZGF0ZSggaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgaW1hZ2VcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGdlbmRlcntcclxuaWRcclxuZ2VuZGVyTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdHJhdGlvbntcclxuICAgICAgICBpZFxyXG4gICAgIFxyXG4gICAgICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgc2VyaWVze1xyXG4gICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNlbnRlckV4YW1TZXNzaW9ue1xyXG4gICAgICAgICAgY2VudGVye1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleGFtU2Vzc2lvbntcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZXhhbXtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2Vzc2lvbntcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcmVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3RBdmVcclxuICAgICAgICBjb2VmZlxyXG4gICAgICAgIHN1YmplY3RTZXJpZXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBpZFxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDYW5kaWRhdGVJRFF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENhbmRpZGF0ZUlEUXVlcnkoXHJcbiAgICAkY2FuZENvZGU6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNhbmRpZGF0ZUNvZGUoY2FuZENvZGU6ICRjYW5kQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFJlZ2lzdHJhdGlvbklERnJvbVJlZ051bWJlclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFJlZ2lzdHJhdGlvbklERnJvbVJlZ051bWJlclF1ZXJ5KFxyXG4gICAgJGNhbmRSZWdpc3RyYXRpb25OdW1iZXI6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNhbmRpZGF0ZVJlZ2lzdHJhdGlvbk51bWJlcihjYW5kUmVnaXN0cmF0aW9uTnVtYmVyOiAkY2FuZFJlZ2lzdHJhdGlvbk51bWJlcikge1xyXG4gICAgIGlkXHJcbiAgICAgY2FuZGlkYXRle1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgaW1hZ2VcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGdlbmRlcntcclxuaWRcclxuZ2VuZGVyTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdHJhdGlvbntcclxuICAgICAgICBpZFxyXG4gICAgIFxyXG4gICAgICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgc2VyaWVze1xyXG4gICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNlbnRlckV4YW1TZXNzaW9ue1xyXG4gICAgICAgICAgY2VudGVye1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleGFtU2Vzc2lvbntcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZXhhbXtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2Vzc2lvbntcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcmVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3RBdmVcclxuICAgICAgICBjb2VmZlxyXG4gICAgICAgIHN1YmplY3RTZXJpZXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDZW50ZXJJREZyb21DZW50ZXJDb2RlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2VudGVySURGcm9tQ2VudGVyQ29kZVF1ZXJ5KCRjZW50ZXJDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBjZW50ZXJCeUNvZGUoY2VudGVyQ29kZTogJGNlbnRlckNvZGUpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDZW50ZXJSZWdpc3RyYXRpb25JRHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDZW50ZXJSZWdpc3RyYXRpb25JRHNRdWVyeShcclxuICAgICRleGFtOiBFeGFtV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjZW50ZXI6IENlbnRlcldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc2Vzc2lvbjogU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjZW50ZXJSZWdpc3RyYXRpb25JRHMoZXhhbTogJGV4YW0sIGNlbnRlcjogJGNlbnRlciwgc2Vzc2lvbjogJHNlc3Npb24pIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc0ZvclJlc3VsdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc0ZvclJlc3VsdHNRdWVyeSgkY2VudGVyRXhhbVNlc3Npb246IFN0cmluZyAhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc0ZvclJlc3VsdHMoY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvbikge1xyXG4gICAgICBpZFxyXG4gICAgICBzZXJpZXN7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY2VudGVyRXhhbVNlc3Npb25Gb3JSZXN1bHRzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgY2VudGVyRXhhbVNlc3Npb25Gb3JSZXN1bHRzUXVlcnkoJGlkOiBJRCAhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlcntcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICAgICAgICAgICBjZW50ZXJDb2RlXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZXhhbVNlc3Npb257XHJcbiAgICAgICAgICAgICAgIGV4YW17XHJcbiAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHNlc3Npb257XHJcbiAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVze1xyXG4gICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgc2VyaWVze1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgICAgICAgIHNlcmllc0NvZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgcmVnaXN0cmF0aW9ue1xyXG4gICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyXHJcbiAgICAgICAgICAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZVxyXG4gICAgICAgICAgICAgICBjYW5kaWRhdGV7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBwaG9uZU51bWJcclxuICAgICAgICAgICAgZ2VuZGVye1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHNjb3Jlc3tcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIHN1YmplY3RBdmVcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgY2VudGVyRXhhbVNlc3Npb25TZXJpZXNSZXN1bHRzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgY2VudGVyRXhhbVNlc3Npb25TZXJpZXNSZXN1bHRzUXVlcnkoJGlkOiBJRCAhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllcyhpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9ue1xyXG4gICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJ7XHJcbiAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICAgICAgICAgICAgY2VudGVyQ29kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBleGFtU2Vzc2lvbntcclxuICAgICAgICAgICAgICAgZXhhbXtcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgc2Vzc2lvbntcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgc2VyaWVze1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgICAgICAgIHNlcmllc0NvZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgcmVnaXN0cmF0aW9ue1xyXG4gICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyXHJcbiAgICAgICAgICAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZVxyXG4gICAgICAgICAgICAgICBjYW5kaWRhdGV7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBwaG9uZU51bWJcclxuICAgICAgICAgICAgZ2VuZGVye1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHNjb3Jlc3tcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIHN1YmplY3RBdmVcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDYW5kaWRhdGVCeUNhbmRDb2RlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2FuZGlkYXRlQnlDYW5kQ29kZVF1ZXJ5KCRjYW5kQ29kZTogU3RyaW5nISkge1xyXG4gICAgZ2V0Q2FuZGlkYXRlQnlDb2RlKGNhbmRDb2RlOiAkY2FuZENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZENvZGVcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsUmFua3NRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxSYW5rc1F1ZXJ5IHtcclxuICAgIHJhbmtzKG9yZGVyQnk6IHJhbmtOYW1lX0FTQykge1xyXG4gICAgICByYW5rTmFtZVxyXG4gICAgICByYW5rQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFBoYXNlc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFBoYXNlc1F1ZXJ5IHtcclxuICBwaGFzZXMob3JkZXJCeTpwaGFzZU5hbWVfQVNDKSB7XHJcbiAgICBwaGFzZU5hbWVcclxuICAgIHBoYXNlQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFN1YmplY3RzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU3ViamVjdHNRdWVyeSB7XHJcbiAgICBzdWJqZWN0cyhvcmRlckJ5OiBzdWJqZWN0TmFtZV9BU0MpIHtcclxuICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgc3ViamVjdENvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxHZW5kZXJzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsR2VuZGVyc1F1ZXJ5IHtcclxuICAgIGdlbmRlcnMob3JkZXJCeTogZ2VuZGVyTmFtZV9BU0MpIHtcclxuICAgICAgaWRcclxuICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICBnZW5kZXJDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsU2VyaWVzT2ZBbkVkdWNhdGlvblR5cGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTZXJpZXNPZkFuRWR1Y2F0aW9uVHlwZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBlZHVjYXRpb25UeXBlKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgc2VyaWVzKG9yZGVyQnk6IHNlcmllc05hbWVfQVNDKSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgICAgc2VyaWVzQ29kZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsU2VyaWVzT2ZBQ2VudGVyRXhhbVNlc3Npb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTZXJpZXNPZkFDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVze1xyXG4gICAgICBzZXJpZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgIHNlcmllc0NvZGVcclxuICAgICAgfVxyXG4gICAgfX1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuXHJcbmNvbnN0IGdldEFsbFNlcmllc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFNlcmllc1F1ZXJ5IHtcclxuICAgIHNlcmllc2VzKG9yZGVyQnk6IHNlcmllc05hbWVfQVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNlcmllc05hbWVcclxuICAgICAgc2VyaWVzQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsU3ViamVjdHNPZkFuRWR1Y1R5cGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJqZWN0c09mQW5FZHVjVHlwZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBlZHVjYXRpb25UeXBlKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgc3ViamVjdChvcmRlckJ5OiBzdWJqZWN0TmFtZV9BU0MpIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgc3ViamVjdENvZGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsU3ViamVjdHNPZkFTZXJpZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJqZWN0c09mQVNlcmllc1F1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzZXJpZXMoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBzZXJpZXNOYW1lXHJcbiAgICAgIHN1YmplY3RTZXJpZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICBzdWJqZWN0Q29kZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsRXhhbXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxFeGFtc1F1ZXJ5IHtcclxuICAgIGV4YW1zKG9yZGVyQnk6IGV4YW1OYW1lX0FTQykge1xyXG4gICAgICBleGFtTmFtZVxyXG4gICAgICBleGFtQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFNlc3Npb25zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU2Vzc2lvbnNRdWVyeSB7XHJcbiAgICBzZXNzaW9ucyhvcmRlckJ5OiBjcmVhdGVkQXRfREVTQykge1xyXG4gICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICBzZXNzaW9uQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsRGl2aXNpb25zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsRGl2aXNpb25zUXVlcnkge1xyXG4gICAgZGl2aXNpb25zKG9yZGVyQnk6IGRpdk5hbWVfQVNDKSB7XHJcbiAgICAgIGRpdk5hbWVcclxuICAgICAgZGl2Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0RGl2aXNpb25zT2ZBUmVnaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0RGl2aXNpb25zT2ZBUmVnaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlZ2lvbihpZDogJGlkKSB7XHJcbiAgICAgIHJlZ05hbWVcclxuICAgICAgaWRcclxuICAgICAgZGl2aXNpb24ob3JkZXJCeTogZGl2TmFtZV9BU0MpIHtcclxuICAgICAgICBkaXZOYW1lXHJcbiAgICAgICAgZGl2Q29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTdWJEaXZpc2lvbnNPZkFEaXZpc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFN1YkRpdmlzaW9uc09mQURpdmlzaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGRpdmlzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgZGl2TmFtZVxyXG4gICAgICBpZFxyXG4gICAgICBzdWJEaXZpc2lvbihvcmRlckJ5OiBzdWJEaXZOYW1lX0FTQykge1xyXG4gICAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgICBzdWJEaXZDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFN1YkRpdmlzaW9uc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFN1YkRpdmlzaW9uc1F1ZXJ5IHtcclxuICAgIHN1YkRpdmlzaW9uKG9yZGVyQnk6IHN1YkRpdk5hbWVfQVNDKSB7XHJcbiAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgc3ViRGl2Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFRvd25zT2ZBU3ViRGl2aXNpb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRUb3duc09mQVN1YkRpdmlzaW9uKCRpZDogSUQhKSB7XHJcbiAgICBzdWJEaXZpc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgaWRcclxuICAgICAgdG93bihvcmRlckJ5OiB0b3duTmFtZV9BU0MpIHtcclxuICAgICAgICB0b3duTmFtZVxyXG4gICAgICAgIHRvd25Db2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENlbnRlcnNPZkFUb3duUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2VudGVyc09mQVRvd25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgdG93bihpZDogJGlkKSB7XHJcbiAgICAgIHRvd25OYW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlcihvcmRlckJ5OiBjZW50ZXJOYW1lX0FTQykge1xyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICBjZW50ZXJDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNlbnRlcnNQZXJUb3duUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgY2VudGVyc1BlclRvd25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgdG93bihpZDogJGlkKSB7XHJcbiAgICAgIHRvd25OYW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlcihvcmRlckJ5OiBjZW50ZXJOYW1lX0FTQykge1xyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICBjZW50ZXJOdW1iZXJcclxuICAgICAgICBjZW50ZXJTZWNyZXRDb2RlXHJcbiAgICAgICAgY2VudGVyQ29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxTdWJqZWN0VHlwZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJqZWN0VHlwZXNRdWVyeSB7XHJcbiAgICBzdWJqZWN0VHlwZXMob3JkZXJCeTogc3ViamVjdFR5cGVOYW1lX0RFU0MpIHtcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdFR5cGVOYW1lXHJcbiAgICAgIHN1YmplY3RUeXBlQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsQ2VudGVyc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENlbnRlcnNRdWVyeSB7XHJcbiAgICBjZW50ZXJzKG9yZGVyQnk6IGNlbnRlck5hbWVfQVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlck5hbWVcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbENhbmRpZGF0ZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDYW5kaWRhdGVzUXVlcnkge1xyXG4gICAgY2FuZGlkYXRlcyhvcmRlckJ5OiBjYW5kMXN0TmFtZV9BU0MpIHtcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICBjYW5kQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vLyoqKioqKioqKioqKioqKioqU2luZ2xlIG9iamVjdCBxdWVyaWVzICovXHJcblxyXG5jb25zdCBzaW5nbGVDZW50ZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVDZW50ZXJRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY2VudGVyKGlkOiAkaWQpIHtcclxuICAgICAgY2VudGVyTmFtZVxyXG4gICAgICBjZW50ZXJOdW1iZXJcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNpbmdsZUNlbnRlclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNpbmdsZUNlbnRlclF1ZXJ5KCRjZW50ZXJOdW1iZXI6IEludCEpIHtcclxuICAgIGNlbnRlckJ5TnVtYmVyKGNlbnRlck51bWJlcjogICRjZW50ZXJOdW1iZXIpIHtcclxuICAgICAgaWRcclxuICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTaW5nbGVQcm9mUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2luZ2xlUHJvZlF1ZXJ5KCRhdXRoQ29kZTogU3RyaW5nISkge1xyXG4gICBwcm9mQnlBdXRoQ29kZShhdXRoQ29kZTogICRhdXRoQ29kZSkge1xyXG4gICAgIGF1dGhDb2RlXHJcbiAgICAgIGlkXHJcbiAgICAgIGF1dGgxc3ROYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IGdldFNpbmdsZUNlbnRlckJ5Q29kZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNpbmdsZUNlbnRlckJ5Q29kZVF1ZXJ5KCRjZW50ZXJTZWNyZXRDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBnZXRDZW50ZXJCeUNvZGUoY2VudGVyU2VjcmV0Q29kZTogICRjZW50ZXJTZWNyZXRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBU2luZ2xlQ2VudGVyUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QVNpbmdsZUNlbnRlclF1ZXJ5KCRjZW50ZXJOdW1iZXI6IEludCEpIHtcclxuICAgIGNlbnRlckJ5TnVtYmVyKGNlbnRlck51bWJlcjogICRjZW50ZXJOdW1iZXIpIHtcclxuICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgIGNlbnRlck5hbWVcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZVRvd25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVUb3duUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHRvd24oaWQ6ICRpZCkge1xyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICB0b3duQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNpbmdsZUNlbnRlckV4YW1TZXNzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2luZ2xlQ2VudGVyRXhhbVNlc3Npb25RdWVyeShcclxuICAgICRjZW50ZXI6IENlbnRlcldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkZXhhbVNlc3Npb246IEV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uc0J5Q29kZShleGFtU2Vzc2lvbjogJGV4YW1TZXNzaW9uLCBjZW50ZXI6ICRjZW50ZXIpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxSYW5rc09mQW5FeGFtUGhhc2VRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxSYW5rc09mQW5FeGFtUGhhc2VRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcGhhc2UoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBwaGFzZVJhbmt7XHJcbiAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgcmFua05hbWVcclxuICAgICAgICAgIHJhbmtDb2RlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRSZWdpc3RlcmVkQ2FuZGlkYXRlQ291bnRRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRSZWdpc3RlcmVkQ2FuZGlkYXRlQ291bnRRdWVyeSgkaWQ6IElEISlcclxuIHtcclxuICAgIHJlZ2lzdHJhdGlvbnNDb25uZWN0aW9uKGlkOiAkaWQpIHtcclxuICAgICBhZ2dyZWdhdGV7XHJcbiAgICAgICBjb3VudFxyXG4gICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDZW50ZXJFeGFtU2Vzc2lvblNlcmllc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENlbnRlckV4YW1TZXNzaW9uU2VyaWVzUXVlcnkoXHJcbiAgICAkY2VudGVyRXhhbVNlc3Npb246IENlbnRlckV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRzZXJpZXM6IFNlcmllc1doZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc2VzKHNlcmllczogJHNlcmllcywgY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvbikge1xyXG4gICAgICBpZFxyXG5cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRFeGFtU2Vzc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEV4YW1TZXNzaW9uUXVlcnkoXHJcbiAgICAkZXhhbTogRXhhbVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc2Vzc2lvbjogU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBleGFtU2Vzc2lvbnMoc2Vzc2lvbjogJHNlc3Npb24sIGV4YW06ICRleGFtKSB7XHJcbiAgICAgIGlkXHJcblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUV4YW1RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVFeGFtUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGV4YW0oaWQ6ICRpZCkge1xyXG4gICAgICBleGFtTmFtZVxyXG4gICAgICBleGFtQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUNhbmRpZGF0ZVF1ZXJ5MSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVDYW5kaWRhdGVRdWVyeTEoJGlkOiBJRCEpIHtcclxuICAgIGNhbmRpZGF0ZShpZDogJGlkKSB7XHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgIGRhZE5hbWVcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBjYW5kQ29kZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICBpbWFnZVxyXG4gICAgICBwaG9uZU51bWJcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlQ2FuZGlkYXRlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlQ2FuZGlkYXRlUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGNhbmRpZGF0ZShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgIGNhbmRDb2RlICBcclxuICAgICAgZGFkTmFtZVxyXG4gICAgICBtb21OYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHBob25lTnVtYlxyXG4gICAgICBiaXJ0aENlcnROdW1iZXJcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIGdlbmRlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBnZW5kZXJOYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVFeGFtaW5lclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZUV4YW1pbmVyUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGV4YW1pbmVyKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZXhhbWluZXIxc3ROYW1lXHJcbiAgICAgIGV4YW1pbmVyMm5kTmFtZVxyXG4gICAgICBleGFtaW5lck90aGVyTmFtZXNcclxuICAgICAgZXhhbWluZXJDb2RlXHJcbiAgICAgIGV4YW1pbmVyRW1haWxcclxuICAgICAgZXhhbWluZXJJbWFnZVxyXG4gICAgICBleGFtaW5lclBob25lXHJcbiAgICAgIGV4YW1pbmVyTWF0cmljdWxlXHJcbiAgICAgIGV4YW1pbmVyQ05JXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHZpZXdTaW5nbGVDYW5kaWRhdGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSB2aWV3U2luZ2xlQ2FuZGlkYXRlUXVlcnkoJGNhbmRDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBzaW5nbGVDYW5kaWRhdGUoY2FuZENvZGU6ICRjYW5kQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBkYXRlT2ZCaXJ0aFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBjYW5kQ29kZVxyXG4gICAgICBtb21OYW1lXHJcbiAgICAgIGRhZE5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iXHJcbiAgICAgIGJpcnRoQ2VydE51bWJlclxyXG4gICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgZ2VuZGVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGdlbmRlck5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNjb3JlSUQgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2NvcmVJRCgkY2FuZEV4YW1TZWNyZXRDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBzY29yZXMoY2FuZEV4YW1TZWNyZXRDb2RlOiAkY2FuZEV4YW1TZWNyZXRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0UmVnaXN0cmF0aW9ucyA9IGdxbGBcclxuICBxdWVyeSBnZXRSZWdpc3RyYXRpb25zKCRjYW5kRXhhbVNlY3JldENvZGU6IFN0cmluZyEpIHtcclxuICAgIHJlZ2lzdHJhdGlvbihjYW5kRXhhbVNlY3JldENvZGU6ICRjYW5kRXhhbVNlY3JldENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgc2NvcmVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3Qob3JkZXJCeTogc3ViamVjdE5hbWVfQVNDKSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTdWJEaXZpc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZVN1YkRpdmlzaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHN1YkRpdmlzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgc3ViRGl2TmFtZVxyXG4gICAgICBzdWJEaXZDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0U2luZ2xlUmVnaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2luZ2xlUmVnaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlZ2lvbihpZDogJGlkKSB7XHJcbiAgICAgIHJlZ05hbWVcclxuICAgICAgcmVnQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUdlbmRlclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZUdlbmRlclF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBnZW5kZXIoaWQ6ICRpZCkge1xyXG4gICAgICBnZW5kZXJOYW1lXHJcbiAgICAgIGdlbmRlckNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTZXJpZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVTZXJpZXNRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgc2VyaWVzKGlkOiAkaWQpIHtcclxuICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICBzZXJpZXNDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlQ2VudGVyQWRtaW5RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVDZW50ZXJBZG1pblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBjZW50ZXJBZG1pbihpZDogJGlkKSB7XHJcbiAgICAgIGNlbnRlckFkbWluTmFtZVxyXG4gICAgICBjZW50ZXJBZG1pbkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGRhdGFGb3JBdmVyYWdlID0gZ3FsYFxyXG4gIHF1ZXJ5IGRhdGFGb3JBdmVyYWdlKCRjYW5kRXhhbVNlY3JldENvZGU6IFN0cmluZyEpIHtcclxuICAgIHNjb3JlcyhjYW5kRXhhbVNlY3JldENvZGU6ICRjYW5kRXhhbVNlY3JldENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdEF2ZVxyXG4gICAgICBjb2VmZlxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZURpdmlzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlRGl2aXNpb25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgZGl2aXNpb24oaWQ6ICRpZCkge1xyXG4gICAgICBkaXZOYW1lXHJcbiAgICAgIGRpdkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVSYW5rUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlUmFua1F1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICByYW5rKGlkOiAkaWQpIHtcclxuICAgICAgcmFua05hbWVcclxuICAgICAgcmFua0NvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTdWJqZWN0UXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlU3ViamVjdFF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzdWJqZWN0KGlkOiAkaWQpIHtcclxuICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgc3ViamVjdENvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTZXNzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlU2Vzc2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzZXNzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgc2Vzc2lvbkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbi8vLyoqKioqKioqKioqKioqKioqRW5kIFNpbmdsZSBvYmplY3QgcXVlcmllcyAqL1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRBbGxTdWJqZWN0c09mQVNlcmllc1F1ZXJ5LFxyXG4gIGdldEFsbFN1YmplY3RUeXBlc1F1ZXJ5LFxyXG4gIGdldEFsbEdlbmRlcnNRdWVyeSxcclxuICBnZXRBbGxSZWdpb25zT2ZBQ291bnRyeVF1ZXJ5LFxyXG4gIGdldEFsbFNlcmllc09mQW5FZHVjYXRpb25UeXBlUXVlcnksXHJcbiAgZ2V0QWxsRXhhbXNRdWVyeSxcclxuICBnZXRBbGxTZXNzaW9uc1F1ZXJ5LFxyXG4gIGdldERpdmlzaW9uc09mQVJlZ2lvblF1ZXJ5LFxyXG4gIGdldEFsbERpdmlzaW9uc1F1ZXJ5LFxyXG4gIGdldFN1YkRpdmlzaW9uc09mQURpdmlzaW9uUXVlcnksXHJcbiAgZ2V0VG93bnNPZkFTdWJEaXZpc2lvblF1ZXJ5LFxyXG4gIGdldENlbnRlcnNPZkFUb3duUXVlcnksXHJcbiAgZ2V0QWxsRWR1Y2F0aW9uVHlwZXNRdWVyeSxcclxuICBnZXRBbGxTdWJqZWN0c1F1ZXJ5LFxyXG4gIGdldEFsbFJhbmtzUXVlcnksXHJcbiAgZ2V0QWxsQ2FuZGlkYXRlc1F1ZXJ5LFxyXG4gIGdldEFsbENlbnRlcnNRdWVyeSxcclxuICBnZXRTaW5nbGVSZWdpb25RdWVyeSxcclxuICBnZXRBQ2VudGVyQWRtaW5RdWVyeSxcclxuICBnZXRBbGxDZW50ZXJBZG1pbnNRdWVyeSxcclxuICBnZXRBbGxTZXJpZXNRdWVyeSxcclxuICBnZXRBbGxTdWJEaXZpc2lvbnNRdWVyeSxcclxuICBnZXRBbGxTdWJqZWN0c09mQW5FZHVjVHlwZVF1ZXJ5LFxyXG4gIGdldFNjb3JlSUQsXHJcbiAgc2luZ2xlU2VyaWVzUXVlcnksXHJcbiAgZ2V0UmVnaXN0cmF0aW9ucyxcclxuICBzaW5nbGVTdWJqZWN0UXVlcnksXHJcbiAgc2luZ2xlQ2FuZGlkYXRlUXVlcnkxLFxyXG4gIHNpbmdsZUNhbmRpZGF0ZVF1ZXJ5LFxyXG4gIHZpZXdTaW5nbGVDYW5kaWRhdGVRdWVyeSxcclxuICBzaW5nbGVDZW50ZXJRdWVyeSxcclxuICBzaW5nbGVDZW50ZXJBZG1pblF1ZXJ5LFxyXG4gIHNpbmdsZUV4YW1RdWVyeSxcclxuICBzaW5nbGVUb3duUXVlcnksXHJcbiAgZ2V0QWxsQ2VudGVyUmVzdWx0c1F1ZXJ5LFxyXG4gIHNpbmdsZVNlc3Npb25RdWVyeSxcclxuICBzaW5nbGVEaXZpc2lvblF1ZXJ5LFxyXG4gIHNpbmdsZVN1YkRpdmlzaW9uUXVlcnksXHJcbiAgc2luZ2xlU3ViamVjdFR5cGVRdWVyeSxcclxuICBzaW5nbGVFZHVjYXRpb25UeXBlUXVlcnksXHJcbiAgc2luZ2xlUmFua1F1ZXJ5LFxyXG4gIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzRm9yUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5LFxyXG4gIGdldENlbnRlckV4YW1TZXNzaW9uU2VyaWVzUXVlcnksXHJcbiAgc2luZ2xlR2VuZGVyUXVlcnksXHJcbiAgZ2V0RXhhbVNlc3Npb25RdWVyeSxcclxuICBnZXRBbGxTZXJpZXNPZkFDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5LFxyXG4gIGdldENlbnRlclJlc3VsdHNRdWVyeSxcclxuICBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRFF1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5LFxyXG4gIGNlbnRlckV4YW1TZXNzaW9uRm9yUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZUlEUXVlcnksXHJcbiAgZ2V0QVNpbmdsZUNlbnRlclF1ZXJ5LFxyXG4gIGdldFJlZ2lzdGVyZWRDYW5kaWRhdGVDb3VudFF1ZXJ5LFxyXG4gIGNlbnRlcnNQZXJUb3duUXVlcnksXHJcbiAgZ2V0U2luZ2xlQ2VudGVyUXVlcnksXHJcbiAgZ2V0Q2FuZGlkYXRlUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldENlbnRlclJlZ2lzdHJhdGlvbklEc1F1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZUJ5Q2FuZENvZGVRdWVyeSxcclxuICBnZXRTaW5nbGVDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5LFxyXG4gIGdldEVhY2hDYW5kaWRhdGVSZXN1bHRzUXVlcnksXHJcbiAgZ2V0Q2VudGVySURGcm9tQ2VudGVyQ29kZVF1ZXJ5LFxyXG4gIGdldFJlZ2lzdHJhdGlvbklERnJvbVJlZ051bWJlclF1ZXJ5LFxyXG4gIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzUmVzdWx0c1F1ZXJ5LFxyXG4gIGRhdGFGb3JBdmVyYWdlLFxyXG4gIGdldEFsbENvdW50cnlzUmVnaW9uQ3JlYXRlUXVlcnksXHJcbiAgZ2V0QWxsUGhhc2VzUXVlcnksXHJcbiAgZ2V0QWxsUmVnaW9uc1F1ZXJ5LFxyXG4gIGdldEFsbENvdW50cnlzUXVlcnksXHJcbiAgc2luZ2xlRXhhbWluZXJRdWVyeSxcclxuICBnZXRDRVNFeGFtaW5lclF1ZXJ5LFxyXG4gIGdldEV4YW1pbmVyUmVnaXN0cmF0aW9uUXVlcnksXHJcbiAgZ2V0U2luZ2xlUHJvZlF1ZXJ5LFxyXG4gIGdldEFsbFJhbmtzT2ZBbkV4YW1QaGFzZVF1ZXJ5LFxyXG4gIG1lUXVlcnksXHJcbiAgZ2V0U2luZ2xlQ2VudGVyQnlDb2RlUXVlcnlcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC13aXRoLWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==