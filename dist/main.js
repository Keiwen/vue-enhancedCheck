(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EnhancedCheck"] = factory();
	else
		root["EnhancedCheck"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(19)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(17)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  model: {
    prop: 'checked'
  },
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: 'enhancedCheck'
    },
    checked: {
      default: false
    },
    name: {
      default: ''
    },
    value: {
      default: ''
    },
    subClass: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      inputModel: this.checked
    };
  },

  computed: {
    computedClass: function computedClass() {
      var computedClass = 'enhancedCheck-' + this.subClass;
      if (this.animate) computedClass += ' enhancedCheck-animate';
      return computedClass;
    }
  },
  methods: {
    inputChange: function inputChange() {
      this.$emit('input', this.inputModel);
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  model: {
    prop: 'groupModel'
  },
  props: {
    label: {
      type: Array,
      required: true
    },
    id: {
      default: 'enhancedCheckGroup'
    },
    name: {
      default: ''
    },
    value: {
      default: true
    },
    groupModel: {
      default: function _default() {
        return [];
      }
    },
    subClass: {
      type: String,
      default: 'default'
    },
    disabled: {
      default: false
    },
    combine: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      inputModel: this.groupModel
    };
  },

  computed: {
    inputList: function inputList() {
      var list = [];
      for (var i = 0; i < this.label.length; i++) {
        var idElmt = 0;
        if (Array.isArray(this.id)) {
          idElmt = this.id[i];
        } else {
          idElmt = this.id + '_' + i;
        }
        var elmt = {
          id: idElmt,
          label: this.label[i],
          name: this.nameList[i],
          value: this.valueList[i],
          disabled: this.disabledList[i]
        };
        list.push(elmt);
      }
      return list;
    },
    nameList: function nameList() {
      return this.generateListFromProp(this.name);
    },
    valueList: function valueList() {
      return this.generateListFromProp(this.value);
    },
    disabledList: function disabledList() {
      return this.generateListFromProp(this.disabled);
    },
    computedClass: function computedClass() {
      var computedClass = 'enhancedCheck-' + this.subClass;
      if (this.combine) computedClass += ' enhancedCheck-combine';
      if (this.inline) computedClass += ' enhancedCheck-inline';
      if (this.animate) computedClass += ' enhancedCheck-animate';
      return computedClass;
    }
  },
  methods: {
    generateListFromProp: function generateListFromProp(propValue) {
      if (!Array.isArray(propValue)) {
        var elmtCount = this.id.length;
        if (elmtCount === 1) return [propValue];
        return new Array(elmtCount).fill(propValue);
      }
      return propValue;
    },
    inputChange: function inputChange(value) {
      this.$emit('input', this.inputModel);
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  model: {
    prop: 'radioModel'
  },
  props: {
    label: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      default: 'enhancedCheckRadio'
    },
    value: {
      default: ''
    },
    radioModel: {
      default: ''
    },
    subClass: {
      type: String,
      default: 'default'
    },
    disabled: {
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      inputModel: this.radioModel
    };
  },

  computed: {
    inputList: function inputList() {
      var list = [];
      for (var i = 0; i < this.label.length; i++) {
        var idElmt = 0;
        if (Array.isArray(this.id)) {
          idElmt = this.id[i];
        } else {
          idElmt = this.id + '_' + i;
        }
        var elmt = {
          id: idElmt,
          label: this.label[i],
          value: this.valueList[i],
          disabled: this.disabledList[i]
        };
        list.push(elmt);
      }
      return list;
    },
    valueList: function valueList() {
      return this.generateListFromProp(this.value);
    },
    disabledList: function disabledList() {
      return this.generateListFromProp(this.disabled);
    },
    computedClass: function computedClass() {
      var computedClass = 'enhancedCheck-' + this.subClass;
      if (this.inline) computedClass += ' enhancedCheck-inline';
      if (this.animate) computedClass += ' enhancedCheck-animate';
      return computedClass;
    }
  },
  methods: {
    generateListFromProp: function generateListFromProp(propValue) {
      if (!Array.isArray(propValue)) {
        var elmtCount = this.id.length;
        if (elmtCount === 1) return [propValue];
        return new Array(elmtCount).fill(propValue);
      }
      return propValue;
    },
    inputChange: function inputChange() {
      this.$emit('input', this.inputModel);
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EnhancedCheck = __webpack_require__(3);

var _EnhancedCheck2 = _interopRequireDefault(_EnhancedCheck);

var _EnhancedCheckGroup = __webpack_require__(4);

var _EnhancedCheckGroup2 = _interopRequireDefault(_EnhancedCheckGroup);

var _EnhancedCheckRadio = __webpack_require__(5);

var _EnhancedCheckRadio2 = _interopRequireDefault(_EnhancedCheckRadio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugin = {
  install: function install(Vue, options) {
    Vue.component('EnhancedCheck', _EnhancedCheck2.default);
    Vue.component('EnhancedCheckGroup', _EnhancedCheckGroup2.default);
    Vue.component('EnhancedCheckRadio', _EnhancedCheckRadio2.default);
  }
};

exports.default = plugin;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "enhancedCheck",
    class: _vm.computedClass
  }, _vm._l((_vm.inputList), function(inputElmt) {
    return _c('div', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.inputModel),
        expression: "inputModel"
      }],
      attrs: {
        "type": "checkbox",
        "id": inputElmt.id,
        "name": inputElmt.name,
        "disabled": inputElmt.disabled
      },
      domProps: {
        "value": inputElmt.value,
        "checked": Array.isArray(_vm.inputModel) ? _vm._i(_vm.inputModel, inputElmt.value) > -1 : (_vm.inputModel)
      },
      on: {
        "change": function($event) {
          _vm.inputChange()
        },
        "__c": function($event) {
          var $$a = _vm.inputModel,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = inputElmt.value,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.inputModel = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.inputModel = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.inputModel = $$c
          }
        }
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": inputElmt.id
      }
    }, [_vm._v(_vm._s(inputElmt.label))])])
  }))
},staticRenderFns: []}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "enhancedCheck",
    class: _vm.computedClass
  }, _vm._l((_vm.inputList), function(inputElmt) {
    return _c('div', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.inputModel),
        expression: "inputModel"
      }],
      attrs: {
        "type": "radio",
        "id": inputElmt.id,
        "name": _vm.name,
        "disabled": inputElmt.disabled
      },
      domProps: {
        "value": inputElmt.value,
        "checked": _vm._q(_vm.inputModel, inputElmt.value)
      },
      on: {
        "change": function($event) {
          _vm.inputChange()
        },
        "__c": function($event) {
          _vm.inputModel = inputElmt.value
        }
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": inputElmt.id
      }
    }, [_vm._v(_vm._s(inputElmt.label))])])
  }))
},staticRenderFns: []}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "enhancedCheck",
    class: _vm.computedClass
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputModel),
      expression: "inputModel"
    }],
    attrs: {
      "type": "checkbox",
      "id": _vm.id,
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value,
      "checked": Array.isArray(_vm.inputModel) ? _vm._i(_vm.inputModel, _vm.value) > -1 : (_vm.inputModel)
    },
    on: {
      "change": function($event) {
        _vm.inputChange()
      },
      "__c": function($event) {
        var $$a = _vm.inputModel,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.value,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.inputModel = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.inputModel = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.inputModel = $$c
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v(_vm._s(_vm.label))])])
},staticRenderFns: []}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2026f8c4", content, true);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("978b9f8a", content, true);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5695eb7a", content, true);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map