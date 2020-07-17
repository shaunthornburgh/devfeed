(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/post~js/profile"],{

/***/ "./assets/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./assets/js/fos_js_routes.json ***!
  \**************************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"following_follow\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/following/follow\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"following_unfollow\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/following/unfollow\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"likes_like\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/likes/like\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"likes_unlike\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/likes/unlike\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"security_login\":{\"tokens\":[[\"text\",\"/login\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

/***/ }),

/***/ "./assets/js/router.js":
/*!*****************************!*\
  !*** ./assets/js/router.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! ../js/fos_js_routes.json */ "./assets/js/fos_js_routes.json");

var router = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

router.setRoutingData(routes);
module.exports = router;

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js":
/*!********************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (root, factory) {
  var routing = factory();

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (routing.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';
  /**
   * @fileoverview This file defines the Router class.
   *
   * You can compile this file by running the following command from the Resources folder:
   *
   *    npm install && npm run build
   */

  /**
   * Class Router
   */

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Router = function () {
    /**
     * @constructor
     * @param {Router.Context=} context
     * @param {Object.<string, Router.Route>=} routes
     */
    function Router(context, routes) {
      _classCallCheck(this, Router);

      this.context_ = context || {
        base_url: '',
        prefix: '',
        host: '',
        port: '',
        scheme: '',
        locale: ''
      };
      this.setRoutes(routes || {});
    }
    /**
     * Returns the current instance.
     * @returns {Router}
     */


    _createClass(Router, [{
      key: 'setRoutingData',

      /**
       * Sets data for the current instance
       * @param {Object} data
       */
      value: function setRoutingData(data) {
        this.setBaseUrl(data['base_url']);
        this.setRoutes(data['routes']);

        if ('prefix' in data) {
          this.setPrefix(data['prefix']);
        }

        if ('port' in data) {
          this.setPort(data['port']);
        }

        if ('locale' in data) {
          this.setLocale(data['locale']);
        }

        this.setHost(data['host']);
        this.setScheme(data['scheme']);
      }
      /**
       * @param {Object.<string, Router.Route>} routes
       */

    }, {
      key: 'setRoutes',
      value: function setRoutes(routes) {
        this.routes_ = Object.freeze(routes);
      }
      /**
       * @return {Object.<string, Router.Route>} routes
       */

    }, {
      key: 'getRoutes',
      value: function getRoutes() {
        return this.routes_;
      }
      /**
       * @param {string} baseUrl
       */

    }, {
      key: 'setBaseUrl',
      value: function setBaseUrl(baseUrl) {
        this.context_.base_url = baseUrl;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getBaseUrl',
      value: function getBaseUrl() {
        return this.context_.base_url;
      }
      /**
       * @param {string} prefix
       */

    }, {
      key: 'setPrefix',
      value: function setPrefix(prefix) {
        this.context_.prefix = prefix;
      }
      /**
       * @param {string} scheme
       */

    }, {
      key: 'setScheme',
      value: function setScheme(scheme) {
        this.context_.scheme = scheme;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getScheme',
      value: function getScheme() {
        return this.context_.scheme;
      }
      /**
       * @param {string} host
       */

    }, {
      key: 'setHost',
      value: function setHost(host) {
        this.context_.host = host;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getHost',
      value: function getHost() {
        return this.context_.host;
      }
      /**
       * @param {string} port
      */

    }, {
      key: 'setPort',
      value: function setPort(port) {
        this.context_.port = port;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getPort',
      value: function getPort() {
        return this.context_.port;
      }
    }, {
      key: 'setLocale',

      /**
       * @param {string} locale
       */
      value: function setLocale(locale) {
        this.context_.locale = locale;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getLocale',
      value: function getLocale() {
        return this.context_.locale;
      }
    }, {
      key: 'buildQueryParams',

      /**
       * Builds query string params added to a URL.
       * Port of jQuery's $.param() function, so credit is due there.
       *
       * @param {string} prefix
       * @param {Array|Object|string} params
       * @param {Function} add
       */
      value: function buildQueryParams(prefix, params, add) {
        var _this = this;

        var name = void 0;
        var rbracket = new RegExp(/\[\]$/);

        if (params instanceof Array) {
          params.forEach(function (val, i) {
            if (rbracket.test(prefix)) {
              add(prefix, val);
            } else {
              _this.buildQueryParams(prefix + '[' + ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? i : '') + ']', val, add);
            }
          });
        } else if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
          for (name in params) {
            this.buildQueryParams(prefix + '[' + name + ']', params[name], add);
          }
        } else {
          add(prefix, params);
        }
      }
      /**
       * Returns a raw route object.
       *
       * @param {string} name
       * @return {Router.Route}
       */

    }, {
      key: 'getRoute',
      value: function getRoute(name) {
        var prefixedName = this.context_.prefix + name;
        var sf41i18nName = name + '.' + this.context_.locale;
        var prefixedSf41i18nName = this.context_.prefix + name + '.' + this.context_.locale;
        var variants = [prefixedName, sf41i18nName, prefixedSf41i18nName, name];

        for (var i in variants) {
          if (variants[i] in this.routes_) {
            return this.routes_[variants[i]];
          }
        }

        throw new Error('The route "' + name + '" does not exist.');
      }
      /**
       * Generates the URL for a route.
       *
       * @param {string} name
       * @param {Object.<string, string>} opt_params
       * @param {boolean} absolute
       * @return {string}
       */

    }, {
      key: 'generate',
      value: function generate(name, opt_params) {
        var absolute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var route = this.getRoute(name),
            params = opt_params || {},
            unusedParams = _extends({}, params),
            url = '',
            optional = true,
            host = '',
            port = typeof this.getPort() == "undefined" || this.getPort() === null ? '' : this.getPort();

        route.tokens.forEach(function (token) {
          if ('text' === token[0]) {
            url = Router.encodePathComponent(token[1]) + url;
            optional = false;
            return;
          }

          if ('variable' === token[0]) {
            var hasDefault = route.defaults && token[3] in route.defaults;

            if (false === optional || !hasDefault || token[3] in params && params[token[3]] != route.defaults[token[3]]) {
              var value = void 0;

              if (token[3] in params) {
                value = params[token[3]];
                delete unusedParams[token[3]];
              } else if (hasDefault) {
                value = route.defaults[token[3]];
              } else if (optional) {
                return;
              } else {
                throw new Error('The route "' + name + '" requires the parameter "' + token[3] + '".');
              }

              var empty = true === value || false === value || '' === value;

              if (!empty || !optional) {
                var encodedValue = Router.encodePathComponent(value);

                if ('null' === encodedValue && null === value) {
                  encodedValue = '';
                }

                url = token[1] + encodedValue + url;
              }

              optional = false;
            } else if (hasDefault && token[3] in unusedParams) {
              delete unusedParams[token[3]];
            }

            return;
          }

          throw new Error('The token type "' + token[0] + '" is not supported.');
        });

        if (url === '') {
          url = '/';
        }

        route.hosttokens.forEach(function (token) {
          var value = void 0;

          if ('text' === token[0]) {
            host = token[1] + host;
            return;
          }

          if ('variable' === token[0]) {
            if (token[3] in params) {
              value = params[token[3]];
              delete unusedParams[token[3]];
            } else if (route.defaults && token[3] in route.defaults) {
              value = route.defaults[token[3]];
            }

            host = token[1] + value + host;
          }
        }); // Foo-bar!

        url = this.context_.base_url + url;

        if (route.requirements && "_scheme" in route.requirements && this.getScheme() != route.requirements["_scheme"]) {
          var currentHost = host || this.getHost();
          url = route.requirements["_scheme"] + "://" + currentHost + (currentHost.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        } else if ("undefined" !== typeof route.schemes && "undefined" !== typeof route.schemes[0] && this.getScheme() !== route.schemes[0]) {
          var _currentHost = host || this.getHost();

          url = route.schemes[0] + "://" + _currentHost + (_currentHost.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        } else if (host && this.getHost() !== host + (host.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port)) {
          url = this.getScheme() + "://" + host + (host.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        } else if (absolute === true) {
          url = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        }

        if (Object.keys(unusedParams).length > 0) {
          var prefix = void 0;
          var queryParams = [];

          var add = function add(key, value) {
            // if value is a function then call it and assign it's return value as value
            value = typeof value === 'function' ? value() : value; // change null to empty string

            value = value === null ? '' : value;
            queryParams.push(Router.encodeQueryComponent(key) + '=' + Router.encodeQueryComponent(value));
          };

          for (prefix in unusedParams) {
            this.buildQueryParams(prefix, unusedParams[prefix], add);
          }

          url = url + '?' + queryParams.join('&');
        }

        return url;
      }
      /**
       * Returns the given string encoded to mimic Symfony URL generator.
       *
       * @param {string} value
       * @return {string}
       */

    }], [{
      key: 'getInstance',
      value: function getInstance() {
        return Routing;
      }
      /**
       * Configures the current Router instance with the provided data.
       * @param {Object} data
       */

    }, {
      key: 'setData',
      value: function setData(data) {
        var router = Router.getInstance();
        router.setRoutingData(data);
      }
    }, {
      key: 'customEncodeURIComponent',
      value: function customEncodeURIComponent(value) {
        return encodeURIComponent(value).replace(/%2F/g, '/').replace(/%40/g, '@').replace(/%3A/g, ':').replace(/%21/g, '!').replace(/%3B/g, ';').replace(/%2C/g, ',').replace(/%2A/g, '*').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/'/g, '%27');
      }
      /**
       * Returns the given path properly encoded to mimic Symfony URL generator.
       *
       * @param {string} value
       * @return {string}
       */

    }, {
      key: 'encodePathComponent',
      value: function encodePathComponent(value) {
        return Router.customEncodeURIComponent(value).replace(/%3D/g, '=').replace(/%2B/g, '+').replace(/%21/g, '!').replace(/%7C/g, '|');
      }
      /**
       * Returns the given query parameter or value properly encoded to mimic Symfony URL generator.
       *
       * @param {string} value
       * @return {string}
       */

    }, {
      key: 'encodeQueryComponent',
      value: function encodeQueryComponent(value) {
        return Router.customEncodeURIComponent(value).replace(/%3F/g, '?');
      }
    }]);

    return Router;
  }();
  /**
   * @typedef {{
   *     tokens: (Array.<Array.<string>>),
   *     defaults: (Object.<string, string>),
   *     requirements: Object,
   *     hosttokens: (Array.<string>)
   * }}
   */


  Router.Route;
  /**
   * @typedef {{
   *     base_url: (string)
   * }}
   */

  Router.Context;
  /**
   * Router singleton.
   * @const
   * @type {Router}
   */

  var Routing = new Router();
  return {
    Router: Router,
    Routing: Routing
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsInJvdXRlciIsInNldFJvdXRpbmdEYXRhIiwibW9kdWxlIiwiZXhwb3J0cyIsInJvb3QiLCJmYWN0b3J5Iiwicm91dGluZyIsImRlZmluZSIsIlJvdXRpbmciLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJSb3V0ZXIiLCJjb250ZXh0IiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwidmFsdWUiLCJkYXRhIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsImdldFJvdXRlcyIsImJhc2VVcmwiLCJnZXRCYXNlVXJsIiwiZ2V0U2NoZW1lIiwiZ2V0SG9zdCIsImdldFBvcnQiLCJnZXRMb2NhbGUiLCJidWlsZFF1ZXJ5UGFyYW1zIiwicGFyYW1zIiwiYWRkIiwiX3RoaXMiLCJuYW1lIiwicmJyYWNrZXQiLCJSZWdFeHAiLCJBcnJheSIsImZvckVhY2giLCJ2YWwiLCJ0ZXN0IiwiZ2V0Um91dGUiLCJwcmVmaXhlZE5hbWUiLCJzZjQxaTE4bk5hbWUiLCJwcmVmaXhlZFNmNDFpMThuTmFtZSIsInZhcmlhbnRzIiwiRXJyb3IiLCJnZW5lcmF0ZSIsIm9wdF9wYXJhbXMiLCJhYnNvbHV0ZSIsInVuZGVmaW5lZCIsInJvdXRlIiwidW51c2VkUGFyYW1zIiwidXJsIiwib3B0aW9uYWwiLCJ0b2tlbnMiLCJ0b2tlbiIsImVuY29kZVBhdGhDb21wb25lbnQiLCJoYXNEZWZhdWx0IiwiZGVmYXVsdHMiLCJlbXB0eSIsImVuY29kZWRWYWx1ZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJjdXJyZW50SG9zdCIsImluZGV4T2YiLCJzY2hlbWVzIiwiX2N1cnJlbnRIb3N0Iiwia2V5cyIsInF1ZXJ5UGFyYW1zIiwicHVzaCIsImVuY29kZVF1ZXJ5Q29tcG9uZW50Iiwiam9pbiIsImdldEluc3RhbmNlIiwic2V0RGF0YSIsImN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJSb3V0ZSIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdFQUFELENBQXRCOztBQUNBLElBQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyw4SkFBRCxDQUF0Qjs7QUFFQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCSCxNQUF0QjtBQUNBSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE1BQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUNKQyxXQUFVSSxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUN0QixNQUFJQyxPQUFPLEdBQUdELE9BQU8sRUFBckI7O0FBQ0EsTUFBSSxJQUFKLEVBQWdEO0FBQzVDO0FBQ0FF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ZSgnLi4vanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XG5jb25zdCByb3V0ZXIgPSByZXF1aXJlKCcuLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLmpzJyk7XG5cbnJvdXRlci5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgdmFyIHJvdXRpbmcgPSBmYWN0b3J5KCk7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbXSwgcm91dGluZy5Sb3V0aW5nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgICAgLy8gbGlrZSBOb2RlLlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJvdXRpbmcuUm91dGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgICByb290LlJvdXRpbmcgPSByb3V0aW5nLlJvdXRpbmc7XG4gICAgICAgIHJvb3QuZm9zID0ge1xuICAgICAgICAgICAgUm91dGVyOiByb3V0aW5nLlJvdXRlclxuICAgICAgICB9O1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoaXMgZmlsZSBkZWZpbmVzIHRoZSBSb3V0ZXIgY2xhc3MuXG4gKlxuICogWW91IGNhbiBjb21waWxlIHRoaXMgZmlsZSBieSBydW5uaW5nIHRoZSBmb2xsb3dpbmcgY29tbWFuZCBmcm9tIHRoZSBSZXNvdXJjZXMgZm9sZGVyOlxuICpcbiAqICAgIG5wbSBpbnN0YWxsICYmIG5wbSBydW4gYnVpbGRcbiAqL1xuXG4vKipcbiAqIENsYXNzIFJvdXRlclxuICovXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJvdXRlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7Um91dGVyLkNvbnRleHQ9fSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgUm91dGVyLlJvdXRlPj19IHJvdXRlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJvdXRlcihjb250ZXh0LCByb3V0ZXMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlcik7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0XyA9IGNvbnRleHQgfHwgeyBiYXNlX3VybDogJycsIHByZWZpeDogJycsIGhvc3Q6ICcnLCBwb3J0OiAnJywgc2NoZW1lOiAnJywgbG9jYWxlOiAnJyB9O1xuICAgICAgICB0aGlzLnNldFJvdXRlcyhyb3V0ZXMgfHwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgaW5zdGFuY2UuXG4gICAgICogQHJldHVybnMge1JvdXRlcn1cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKFJvdXRlciwgW3tcbiAgICAgICAga2V5OiAnc2V0Um91dGluZ0RhdGEnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgZGF0YSBmb3IgdGhlIGN1cnJlbnQgaW5zdGFuY2VcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSb3V0aW5nRGF0YShkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJhc2VVcmwoZGF0YVsnYmFzZV91cmwnXSk7XG4gICAgICAgICAgICB0aGlzLnNldFJvdXRlcyhkYXRhWydyb3V0ZXMnXSk7XG5cbiAgICAgICAgICAgIGlmICgncHJlZml4JyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmVmaXgoZGF0YVsncHJlZml4J10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdwb3J0JyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3J0KGRhdGFbJ3BvcnQnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2xvY2FsZScgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxlKGRhdGFbJ2xvY2FsZSddKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRIb3N0KGRhdGFbJ2hvc3QnXSk7XG4gICAgICAgICAgICB0aGlzLnNldFNjaGVtZShkYXRhWydzY2hlbWUnXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgUm91dGVyLlJvdXRlPn0gcm91dGVzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRSb3V0ZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Um91dGVzKHJvdXRlcykge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXNfID0gT2JqZWN0LmZyZWV6ZShyb3V0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+fSByb3V0ZXNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFJvdXRlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3V0ZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNfO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRCYXNlVXJsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEJhc2VVcmwoYmFzZVVybCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5iYXNlX3VybCA9IGJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0QmFzZVVybCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCYXNlVXJsKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0UHJlZml4JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFByZWZpeChwcmVmaXgpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ucHJlZml4ID0gcHJlZml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWVcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFNjaGVtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY2hlbWUoc2NoZW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLnNjaGVtZSA9IHNjaGVtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRTY2hlbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2NoZW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBob3N0XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRIb3N0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEhvc3QoaG9zdCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5ob3N0ID0gaG9zdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRIb3N0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhvc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0XG4gICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFBvcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9ydChwb3J0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLnBvcnQgPSBwb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFBvcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLnBvcnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldExvY2FsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldExvY2FsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2J1aWxkUXVlcnlQYXJhbXMnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1aWxkcyBxdWVyeSBzdHJpbmcgcGFyYW1zIGFkZGVkIHRvIGEgVVJMLlxuICAgICAgICAgKiBQb3J0IG9mIGpRdWVyeSdzICQucGFyYW0oKSBmdW5jdGlvbiwgc28gY3JlZGl0IGlzIGR1ZSB0aGVyZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IHBhcmFtc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhZGRcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCwgcGFyYW1zLCBhZGQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBuYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHJicmFja2V0ID0gbmV3IFJlZ0V4cCgvXFxbXFxdJC8pO1xuXG4gICAgICAgICAgICBpZiAocGFyYW1zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYnJhY2tldC50ZXN0KHByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZChwcmVmaXgsIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCArICdbJyArICgodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKSkgPT09ICdvYmplY3QnID8gaSA6ICcnKSArICddJywgdmFsLCBhZGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXJhbXMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKG5hbWUgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXggKyAnWycgKyBuYW1lICsgJ10nLCBwYXJhbXNbbmFtZV0sIGFkZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGQocHJlZml4LCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSByYXcgcm91dGUgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcmV0dXJuIHtSb3V0ZXIuUm91dGV9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRSb3V0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3V0ZShuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ZWROYW1lID0gdGhpcy5jb250ZXh0Xy5wcmVmaXggKyBuYW1lO1xuICAgICAgICAgICAgdmFyIHNmNDFpMThuTmFtZSA9IG5hbWUgKyAnLicgKyB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgICAgIHZhciBwcmVmaXhlZFNmNDFpMThuTmFtZSA9IHRoaXMuY29udGV4dF8ucHJlZml4ICsgbmFtZSArICcuJyArIHRoaXMuY29udGV4dF8ubG9jYWxlO1xuICAgICAgICAgICAgdmFyIHZhcmlhbnRzID0gW3ByZWZpeGVkTmFtZSwgc2Y0MWkxOG5OYW1lLCBwcmVmaXhlZFNmNDFpMThuTmFtZSwgbmFtZV07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdmFyaWFudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudHNbaV0gaW4gdGhpcy5yb3V0ZXNfKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlc19bdmFyaWFudHNbaV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInICsgbmFtZSArICdcIiBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZXMgdGhlIFVSTCBmb3IgYSByb3V0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gb3B0X3BhcmFtc1xuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFic29sdXRlXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dlbmVyYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlKG5hbWUsIG9wdF9wYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBhYnNvbHV0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgICAgICAgICAgIHZhciByb3V0ZSA9IHRoaXMuZ2V0Um91dGUobmFtZSksXG4gICAgICAgICAgICAgICAgcGFyYW1zID0gb3B0X3BhcmFtcyB8fCB7fSxcbiAgICAgICAgICAgICAgICB1bnVzZWRQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgcGFyYW1zKSxcbiAgICAgICAgICAgICAgICB1cmwgPSAnJyxcbiAgICAgICAgICAgICAgICBvcHRpb25hbCA9IHRydWUsXG4gICAgICAgICAgICAgICAgaG9zdCA9ICcnLFxuICAgICAgICAgICAgICAgIHBvcnQgPSB0eXBlb2YgdGhpcy5nZXRQb3J0KCkgPT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLmdldFBvcnQoKSA9PT0gbnVsbCA/ICcnIDogdGhpcy5nZXRQb3J0KCk7XG5cbiAgICAgICAgICAgIHJvdXRlLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgICAgIGlmICgndGV4dCcgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFJvdXRlci5lbmNvZGVQYXRoQ29tcG9uZW50KHRva2VuWzFdKSArIHVybDtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNEZWZhdWx0ID0gcm91dGUuZGVmYXVsdHMgJiYgdG9rZW5bM10gaW4gcm91dGUuZGVmYXVsdHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gb3B0aW9uYWwgfHwgIWhhc0RlZmF1bHQgfHwgdG9rZW5bM10gaW4gcGFyYW1zICYmIHBhcmFtc1t0b2tlblszXV0gIT0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlblszXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVudXNlZFBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJyArIG5hbWUgKyAnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicgKyB0b2tlblszXSArICdcIi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtcHR5ID0gdHJ1ZSA9PT0gdmFsdWUgfHwgZmFsc2UgPT09IHZhbHVlIHx8ICcnID09PSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbXB0eSB8fCAhb3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5jb2RlZFZhbHVlID0gUm91dGVyLmVuY29kZVBhdGhDb21wb25lbnQodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdudWxsJyA9PT0gZW5jb2RlZFZhbHVlICYmIG51bGwgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZWRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRva2VuWzFdICsgZW5jb2RlZFZhbHVlICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0RlZmF1bHQgJiYgdG9rZW5bM10gaW4gdW51c2VkUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyArIHRva2VuWzBdICsgJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHVybCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSAnLyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvdXRlLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3RleHQnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICBob3N0ID0gdG9rZW5bMV0gKyBob3N0O1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3ZhcmlhYmxlJyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuWzNdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVudXNlZFBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGUuZGVmYXVsdHMgJiYgdG9rZW5bM10gaW4gcm91dGUuZGVmYXVsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaG9zdCA9IHRva2VuWzFdICsgdmFsdWUgKyBob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gRm9vLWJhciFcbiAgICAgICAgICAgIHVybCA9IHRoaXMuY29udGV4dF8uYmFzZV91cmwgKyB1cmw7XG5cbiAgICAgICAgICAgIGlmIChyb3V0ZS5yZXF1aXJlbWVudHMgJiYgXCJfc2NoZW1lXCIgaW4gcm91dGUucmVxdWlyZW1lbnRzICYmIHRoaXMuZ2V0U2NoZW1lKCkgIT0gcm91dGUucmVxdWlyZW1lbnRzW1wiX3NjaGVtZVwiXSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SG9zdCA9IGhvc3QgfHwgdGhpcy5nZXRIb3N0KCk7XG5cbiAgICAgICAgICAgICAgICB1cmwgPSByb3V0ZS5yZXF1aXJlbWVudHNbXCJfc2NoZW1lXCJdICsgXCI6Ly9cIiArIGN1cnJlbnRIb3N0ICsgKGN1cnJlbnRIb3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiByb3V0ZS5zY2hlbWVzICYmIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiByb3V0ZS5zY2hlbWVzWzBdICYmIHRoaXMuZ2V0U2NoZW1lKCkgIT09IHJvdXRlLnNjaGVtZXNbMF0pIHtcbiAgICAgICAgICAgICAgICB2YXIgX2N1cnJlbnRIb3N0ID0gaG9zdCB8fCB0aGlzLmdldEhvc3QoKTtcblxuICAgICAgICAgICAgICAgIHVybCA9IHJvdXRlLnNjaGVtZXNbMF0gKyBcIjovL1wiICsgX2N1cnJlbnRIb3N0ICsgKF9jdXJyZW50SG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChob3N0ICYmIHRoaXMuZ2V0SG9zdCgpICE9PSBob3N0ICsgKGhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0U2NoZW1lKCkgKyBcIjovL1wiICsgaG9zdCArIChob3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFic29sdXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRTY2hlbWUoKSArIFwiOi8vXCIgKyB0aGlzLmdldEhvc3QoKSArICh0aGlzLmdldEhvc3QoKS5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModW51c2VkUGFyYW1zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZWZpeCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlQYXJhbXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgYWRkID0gZnVuY3Rpb24gYWRkKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgaXMgYSBmdW5jdGlvbiB0aGVuIGNhbGwgaXQgYW5kIGFzc2lnbiBpdCdzIHJldHVybiB2YWx1ZSBhcyB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKCkgOiB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgbnVsbCB0byBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCA/ICcnIDogdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMucHVzaChSb3V0ZXIuZW5jb2RlUXVlcnlDb21wb25lbnQoa2V5KSArICc9JyArIFJvdXRlci5lbmNvZGVRdWVyeUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHByZWZpeCBpbiB1bnVzZWRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCwgdW51c2VkUGFyYW1zW3ByZWZpeF0sIGFkZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXJsID0gdXJsICsgJz8nICsgcXVlcnlQYXJhbXMuam9pbignJicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHN0cmluZyBlbmNvZGVkIHRvIG1pbWljIFN5bWZvbnkgVVJMIGdlbmVyYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnZ2V0SW5zdGFuY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gUm91dGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWd1cmVzIHRoZSBjdXJyZW50IFJvdXRlciBpbnN0YW5jZSB3aXRoIHRoZSBwcm92aWRlZCBkYXRhLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0RGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciByb3V0ZXIgPSBSb3V0ZXIuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICAgICAgcm91dGVyLnNldFJvdXRpbmdEYXRhKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjdXN0b21FbmNvZGVVUklDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lMkYvZywgJy8nKS5yZXBsYWNlKC8lNDAvZywgJ0AnKS5yZXBsYWNlKC8lM0EvZywgJzonKS5yZXBsYWNlKC8lMjEvZywgJyEnKS5yZXBsYWNlKC8lM0IvZywgJzsnKS5yZXBsYWNlKC8lMkMvZywgJywnKS5yZXBsYWNlKC8lMkEvZywgJyonKS5yZXBsYWNlKC9cXCgvZywgJyUyOCcpLnJlcGxhY2UoL1xcKS9nLCAnJTI5JykucmVwbGFjZSgvJy9nLCAnJTI3Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gcGF0aCBwcm9wZXJseSBlbmNvZGVkIHRvIG1pbWljIFN5bWZvbnkgVVJMIGdlbmVyYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuY29kZVBhdGhDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5jb2RlUGF0aENvbXBvbmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5jdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUzRC9nLCAnPScpLnJlcGxhY2UoLyUyQi9nLCAnKycpLnJlcGxhY2UoLyUyMS9nLCAnIScpLnJlcGxhY2UoLyU3Qy9nLCAnfCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtZXRlciBvciB2YWx1ZSBwcm9wZXJseSBlbmNvZGVkIHRvIG1pbWljIFN5bWZvbnkgVVJMIGdlbmVyYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuY29kZVF1ZXJ5Q29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuY29kZVF1ZXJ5Q29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTNGL2csICc/Jyk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUm91dGVyO1xufSgpO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgICAgdG9rZW5zOiAoQXJyYXkuPEFycmF5LjxzdHJpbmc+PiksXG4gKiAgICAgZGVmYXVsdHM6IChPYmplY3QuPHN0cmluZywgc3RyaW5nPiksXG4gKiAgICAgcmVxdWlyZW1lbnRzOiBPYmplY3QsXG4gKiAgICAgaG9zdHRva2VuczogKEFycmF5LjxzdHJpbmc+KVxuICogfX1cbiAqL1xuXG5cblJvdXRlci5Sb3V0ZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICAgIGJhc2VfdXJsOiAoc3RyaW5nKVxuICogfX1cbiAqL1xuUm91dGVyLkNvbnRleHQ7XG5cbi8qKlxuICogUm91dGVyIHNpbmdsZXRvbi5cbiAqIEBjb25zdFxuICogQHR5cGUge1JvdXRlcn1cbiAqL1xudmFyIFJvdXRpbmcgPSBuZXcgUm91dGVyKCk7XG5cbiAgICByZXR1cm4geyBSb3V0ZXI6IFJvdXRlciwgUm91dGluZzogUm91dGluZyB9O1xufSkpOyJdLCJzb3VyY2VSb290IjoiIn0=