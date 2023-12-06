/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
* {
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    margin: auto;
    background-color: navy;
}

#container {
    display: grid;
    grid-template-columns: minmax(auto, 850px) ;
    justify-content: center;
    gap: 10px;

}

#new-project {
    border-radius: 15px;
    width: 100px;
    height: 30px;
    border: 0;
    justify-self: center;
    margin-top: 10px;
}

#container > form {
    width: 500px;
    justify-self: center;
    margin-top: 10px;
}

#container > form > input,
.ProjectCard > .ProjectForm input {
    border-radius: 15px;
}

#container > form button,
.ProjectCard > .ProjectForm button,
.ProjectCard .ProjectOptions button {
    border-radius: 15px;
    width: 50px;
    border: 1px solid lightslategray;
}

.ProjectCard > div:first-child,
.ProjectCard > .ProjectForm,
#container > form  
 {
    height: 30px;
    border-radius: 15px;
    padding-left: 10px;

    display: flex;
    align-items: center;
    gap: 10px;

    background-color: palegreen;
}

.ProjectCard > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 10px;
    padding: 10px;
}

.ProjectCard {
    background-color: lightslategray;   
    border-radius: 20px 20px 15px 15px;
}

.TaskCard {
    /* height: 120px; */
    /* background-color: white; */
    position: relative;
}

.TaskCard .TaskHeader  {
    height: 30px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    
    border-radius: 15px;
    background-color: lightskyblue;
    
}

.TaskCard .StandardInfo {
    padding-left: 10px;
}

p {
    margin: 0;
}

.TaskCard > div {
    height: 120px;
    border-radius: 15px;
    display: grid;
    background-color: white;
}

.TaskCard .Options {
    justify-self: center;
    align-self: end;
}

.TaskCard .Options button {
    width: 50px;
    background-color: lightskyblue;
    border: 1px solid lightgray;
}

.TaskCard .Options button:hover {
    background-color: blue;
    color: white;
}

.TaskCard .MoreButton,
.TaskCard .LessButton {
    border-radius: 15px 0 0 0;
}

.TaskCard .DeleteTaskButton {
    border-radius: 0 15px 0 0;
}

.TaskCard .ExtraInfo {
    width: 200px;
    padding: 10px;
    border-radius: 15px;
    position: absolute;
    top: 120px;
    z-index: 1;
    background-color: white;
}

.TaskForm {
    width: 200px;
    border-radius: 15px;
    background-color: white;
}

.TaskForm > div > div:first-of-type {
    height: 30px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    
    border-radius: 15px;
    background-color: lightskyblue;
}

.TaskForm > div > div + div {
    padding-left: 10px;
}

.TaskFormOption {
    display: flex;
    justify-content: center;
    align-items: end;
}

.TaskForm button {
    width: 50px;
    background-color: lightskyblue;
    border: 1px solid lightgray;
}

.TaskForm button:hover {
    background-color: blue;
    color: white;
}

.TaskFormSave {
    border-radius: 15px 0 0 0;
}

.TaskFormCancel {
    border-radius: 0 15px 0 0;
}

.TaskForm input[type='text'] {
    width: 120px;
}

textarea {
    width: 180px;
    resize: vertical;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,sBAAsB;IACtB,mJAAmJ;AACvJ;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,2CAA2C;IAC3C,uBAAuB;IACvB,SAAS;;AAEb;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,SAAS;IACT,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;;IAGI,mBAAmB;IACnB,WAAW;IACX,gCAAgC;AACpC;;AAEA;;;;IAII,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,SAAS;;IAET,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,kCAAkC;AACtC;;AAEA;IACI,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,SAAS;;IAET,mBAAmB;IACnB,8BAA8B;;AAElC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;;IAEI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,SAAS;;IAET,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB","sourcesContent":["\n* {\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    margin: auto;\n    background-color: navy;\n}\n\n#container {\n    display: grid;\n    grid-template-columns: minmax(auto, 850px) ;\n    justify-content: center;\n    gap: 10px;\n\n}\n\n#new-project {\n    border-radius: 15px;\n    width: 100px;\n    height: 30px;\n    border: 0;\n    justify-self: center;\n    margin-top: 10px;\n}\n\n#container > form {\n    width: 500px;\n    justify-self: center;\n    margin-top: 10px;\n}\n\n#container > form > input,\n.ProjectCard > .ProjectForm input {\n    border-radius: 15px;\n}\n\n#container > form button,\n.ProjectCard > .ProjectForm button,\n.ProjectCard .ProjectOptions button {\n    border-radius: 15px;\n    width: 50px;\n    border: 1px solid lightslategray;\n}\n\n.ProjectCard > div:first-child,\n.ProjectCard > .ProjectForm,\n#container > form  \n {\n    height: 30px;\n    border-radius: 15px;\n    padding-left: 10px;\n\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n    background-color: palegreen;\n}\n\n.ProjectCard > div:nth-child(2) {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    gap: 10px;\n    padding: 10px;\n}\n\n.ProjectCard {\n    background-color: lightslategray;   \n    border-radius: 20px 20px 15px 15px;\n}\n\n.TaskCard {\n    /* height: 120px; */\n    /* background-color: white; */\n    position: relative;\n}\n\n.TaskCard .TaskHeader  {\n    height: 30px;\n    padding-left: 10px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    \n    border-radius: 15px;\n    background-color: lightskyblue;\n    \n}\n\n.TaskCard .StandardInfo {\n    padding-left: 10px;\n}\n\np {\n    margin: 0;\n}\n\n.TaskCard > div {\n    height: 120px;\n    border-radius: 15px;\n    display: grid;\n    background-color: white;\n}\n\n.TaskCard .Options {\n    justify-self: center;\n    align-self: end;\n}\n\n.TaskCard .Options button {\n    width: 50px;\n    background-color: lightskyblue;\n    border: 1px solid lightgray;\n}\n\n.TaskCard .Options button:hover {\n    background-color: blue;\n    color: white;\n}\n\n.TaskCard .MoreButton,\n.TaskCard .LessButton {\n    border-radius: 15px 0 0 0;\n}\n\n.TaskCard .DeleteTaskButton {\n    border-radius: 0 15px 0 0;\n}\n\n.TaskCard .ExtraInfo {\n    width: 200px;\n    padding: 10px;\n    border-radius: 15px;\n    position: absolute;\n    top: 120px;\n    z-index: 1;\n    background-color: white;\n}\n\n.TaskForm {\n    width: 200px;\n    border-radius: 15px;\n    background-color: white;\n}\n\n.TaskForm > div > div:first-of-type {\n    height: 30px;\n    padding-left: 10px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    \n    border-radius: 15px;\n    background-color: lightskyblue;\n}\n\n.TaskForm > div > div + div {\n    padding-left: 10px;\n}\n\n.TaskFormOption {\n    display: flex;\n    justify-content: center;\n    align-items: end;\n}\n\n.TaskForm button {\n    width: 50px;\n    background-color: lightskyblue;\n    border: 1px solid lightgray;\n}\n\n.TaskForm button:hover {\n    background-color: blue;\n    color: white;\n}\n\n.TaskFormSave {\n    border-radius: 15px 0 0 0;\n}\n\n.TaskFormCancel {\n    border-radius: 0 15px 0 0;\n}\n\n.TaskForm input[type='text'] {\n    width: 120px;\n}\n\ntextarea {\n    width: 180px;\n    resize: vertical;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProject: () => (/* binding */ displayProject),
/* harmony export */   setupDom: () => (/* binding */ setupDom)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");





// INITIAL DOM SETUP
function setupDom()
{
    
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    
    document.body.appendChild(container);
    displayProject();
}

// DISPLAY PROJECT
function displayProject()
{
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveStorage)();

    const parent = document.querySelector('#container');
    parent.innerHTML = '';

    const newProjectButton = createButton('+Project', () => {
        parent.insertBefore( buildProjectForm('new'), parent.firstElementChild );
        newProjectButton.style.display = 'none';
    });
    newProjectButton.setAttribute('id', 'new-project');
    parent.appendChild(newProjectButton);
    
    ___WEBPACK_IMPORTED_MODULE_0__.gProjectList.forEach((p) => {
        parent.appendChild( buildProject(p) );
    });

}


function buildProject(project) 
{
    const projectName = document.createElement('p');
    projectName.textContent = project.name;

    const editButton = createButton('edit', () => {
        projectTitle.remove();
        addTask.remove();
        projectCard.insertBefore( buildProjectForm(project), projectCard.firstElementChild );

    });

    const rmvButton = createButton('delete', () => {
        ___WEBPACK_IMPORTED_MODULE_0__.gProjectList.splice(___WEBPACK_IMPORTED_MODULE_0__.gProjectList.indexOf(project), 1);
        projectCard.remove();

        displayProject();
    });

    const addTask = createButton('+Task', () => {
        taskCard.insertBefore( buildTaskForm('new', project), taskCard.firstElementChild ); 
        addTask.style.display = 'none';
    });

    
    const options = document.createElement('div');
    options.appendChild(editButton);
    options.appendChild(addTask);
    options.appendChild(rmvButton);
    options.classList.add('ProjectOptions');
    
    const projectTitle = document.createElement('div');
    projectTitle.appendChild(projectName);
    projectTitle.appendChild(options);

    const taskCard = document.createElement('div');
    
    displayTask(project, taskCard);
    
    const projectCard = document.createElement('div');
    // projectCard.setAttribute('id', 'id'+project.timestamp);
    projectCard.classList.add('ProjectCard');
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(taskCard);

    return projectCard;
}

function buildProjectForm(project) 
{
    const input = document.createElement('input');
    input.type = 'text';
    if (project === 'new') {
        input.value = 'New Project';
    } else {
        input.value = project.name;
    }

    const button = createButton('save', (e)=> {
        e.preventDefault();
        if (project === 'new') {
            const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project('New Project');
            newProject.name = input.value;

            ___WEBPACK_IMPORTED_MODULE_0__.gProjectList.unshift(newProject);
            console.log(___WEBPACK_IMPORTED_MODULE_0__.gProjectList);
        } else {
            project.name = input.value;
        }

        form.remove();
        displayProject();
    });

    const cancelBtn = createButton('cancel', () => {
        displayProject();
    });

    const options = document.createElement('div');
    options.appendChild(button);
    options.appendChild(cancelBtn);
    
    const form = document.createElement('form');
    form.classList.add('ProjectForm');
    form.appendChild(input);
    form.appendChild(options);

    return form;
}

// DISPLAY TASK
function displayTask(project, taskCard)
{
    project.list.forEach((task) => {
        taskCard.appendChild( buildTask(task, project) );
    });
}


function buildTask(task, project) 
{
    const name = document.createElement('p');
    name.textContent = task.name;
    const description = document.createElement('p');
    description.textContent = `Notes: ${task.description}`;
    const dueDate = document.createElement('p');
    dueDate.textContent = `Due: ${task.dueDate}`;
    const priority = document.createElement('p');
    priority.textContent = `Priority: ${task.priority}`;

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    if (task.status)
        checkBox.setAttribute('checked', true);
    checkBox.addEventListener('click', () => {
        task.status = task.status ? false : true;
        displayProject();
    });

    const editButton = createButton('edit', () => {
        info.remove();
        taskCard.appendChild( buildTaskForm(task) );

    });
    editButton.classList.add('EditTaskButton');

    const rmvButton = createButton('delete', () => {
        project.removeTask(task);
        taskCard.remove();

        displayProject();
    });
    rmvButton.classList.add('DeleteTaskButton');

    // to expand task card to show more info
    const moreButton = createButton('more', () => {
        extraInfo.style.display = 'block';
        moreButton.style.display = 'none';
        lessButton.style.display = 'inline';
    });
    moreButton.classList.add('MoreButton');
    
    // to hide extra task info
    const lessButton = createButton('less', () => {
        extraInfo.style.display = 'none';
        lessButton.style.display = 'none';
        moreButton.style.display = 'inline';
    });
    lessButton.style.display = 'none';
    lessButton.classList.add('LessButton');

    // option buttons
    const options = document.createElement('div');
    options.appendChild(moreButton);
    options.appendChild(lessButton);
    options.appendChild(editButton);
    options.appendChild(rmvButton);
    options.classList.add('Options');
    // task header
    const taskHeader = document.createElement('div');
    taskHeader.appendChild(checkBox);
    taskHeader.appendChild(name);
    taskHeader.classList.add('TaskHeader');

    // standard info 
    const standardInfo = document.createElement('div');
    standardInfo.appendChild(dueDate);
    standardInfo.appendChild(priority);
    standardInfo.classList.add('StandardInfo');

    // extra info 
    const extraInfo = document.createElement('div');
    extraInfo.appendChild(description);
    extraInfo.style.display = 'none';
    extraInfo.classList.add('ExtraInfo');
    
    // Task info container 
    const info = document.createElement('div');
    info.appendChild( taskHeader );
    info.appendChild( standardInfo );
    info.appendChild( options );
    info.appendChild( extraInfo );
    
    const taskCard = document.createElement('div');
    // taskCard.setAttribute('id', 'id'+project.timestamp);
    taskCard.classList.add('TaskCard');
    taskCard.appendChild( info );

    return taskCard;
}

function buildTaskForm(task, project) 
{
    const nodes = createTaskFormNodes();

    if (task === 'new') {
        nodes.name.input.value = 'New Task';
    } else {
        nodes.name.input.value = task.name;
        nodes.desc.input.value = task.description;
        nodes.date.input.value = task.dueDate;
        nodes.prio.input.value = task.priority;

    }

    const saveBtn = createButton('save', (e)=> {
        e.preventDefault();
        if (task === 'new') {
            const newTask = new _task__WEBPACK_IMPORTED_MODULE_3__.Task(nodes.name.input.value);
            newTask.description = nodes.desc.input.value;
            newTask.dueDate = nodes.date.input.value ;
            newTask.priority = nodes.prio.input.value ;

            project.addTask(newTask);
        } else {
            task.name = nodes.name.input.value;
            task.description = nodes.desc.input.value;
            task.dueDate = nodes.date.input.value ;
            task.priority = nodes.prio.input.value ;
        }

        form.remove();
        displayProject();
    });
    saveBtn.classList.add('TaskFormSave');

    const cancelBtn = createButton('cancel', () => {
        displayProject();
    });
    cancelBtn.classList.add('TaskFormCancel');
    
    const formInputs = document.createElement('div');
    for (let n in nodes )
    {
        const nodeDiv = document.createElement('div');
        nodeDiv.appendChild(nodes[n].label);
        nodeDiv.appendChild(nodes[n].input);

        formInputs.appendChild(nodeDiv);
    }

    const option = document.createElement('div');
    option.appendChild(saveBtn);
    option.appendChild(cancelBtn);
    option.classList.add('TaskFormOption');

    
    const form = document.createElement('form');
    form.classList.add('TaskForm');
    form.appendChild(formInputs);
    form.appendChild(option);

    return form;
}

function createTaskFormNodes()
{
    // task name
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.setAttribute('for', 'name');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'name');
    nameInput.type = 'text';
    const name = { 
        input: nameInput, 
        label: nameLabel, 
    };

    // task description 
    const descLabel = document.createElement('label');
    descLabel.textContent = 'Notes:';
    descLabel.setAttribute('for', 'notes');    
    const descTextArea = document.createElement('textarea');
    descTextArea.setAttribute('id', 'notes');
    const desc = { 
        input: descTextArea, 
        label: descLabel, 
    };
    // task due date
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date:';
    dateLabel.setAttribute('for', 'date');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'date');
    dateInput.type = 'date';
    const date = { 
        input: dateInput, 
        label: dateLabel, 
    };

    // task piority 
    const prioLabel = document.createElement('label');
    prioLabel.textContent = 'Priority:';
    prioLabel.setAttribute('for', 'priority');
    const prioInput = document.createElement('select');
    prioInput.setAttribute('id', 'priority');

    const options = ['low', 'medium', 'high'];
    options.forEach((o) => {
        const node = document.createElement('option');
        node.value = o;
        node.textContent = o;
        prioInput.appendChild(node);
    });

    const prio = { 
        input: prioInput, 
        label: prioLabel, 
    };

    return { name, date, prio, desc };
}

// HELPER FUNCS
function createButton(text, func) 
{
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', func);

    return button;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gProjectList: () => (/* binding */ gProjectList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/storage.js");







// SETUP 
const gProjectList = [];

if ((0,_storage__WEBPACK_IMPORTED_MODULE_4__.loadStorage)() === false) {
    // example load data
    
    for (let i = 0; i < 3; ++i) 
    {
        gProjectList.push(new _project__WEBPACK_IMPORTED_MODULE_2__.Project('Example Project'));
        for (let j = 0; j <= i; ++j) 
        {
            const exampleTask = new _task__WEBPACK_IMPORTED_MODULE_3__.Task('Example Task');
            exampleTask.description = 'This is an example task.';
            exampleTask.dueDate = '2099-01-01';
            exampleTask.priority = 'low';
            gProjectList[i].addTask( exampleTask );
        }
    }
}

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.setupDom)();


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });

class Project {
    constructor(name) {
        this.name = name;
        this.timestamp = Date.now();
        this.list = [];
    }
    addTask(task) {
        this.list.push(task);
        console.log(this.list);

    }
    removeTask(task) {
        this.list = this.list.filter((t) => t !== task);
        console.log(this.list);
    }
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStorage: () => (/* binding */ loadStorage),
/* harmony export */   saveStorage: () => (/* binding */ saveStorage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



function saveStorage() 
{
    localStorage.setItem('save', JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.gProjectList));
}

function loadStorage()
{
    if (localStorage.getItem('save')) {
        const saveArray = JSON.parse(localStorage.getItem('save'));
        ___WEBPACK_IMPORTED_MODULE_0__.gProjectList.length = 0;
    
        for (const save of saveArray) 
        {
            const project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project();
            project.name = save.name;
            project.timestamp = save.timestamp;
            project.list = save.list;
    
            ___WEBPACK_IMPORTED_MODULE_0__.gProjectList.push(project);
        }

        return true;
    } else {
        return false;
    }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });

class Task {
    constructor(name) {
        this.name = name;
        this.description = '';
        this.dueDate = '';
        this.priority = '';
        this.status = false; // task completion status 
        this.timestamp = Date.now();
    }
}

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEVBQTRFLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksK0JBQStCLDZCQUE2QiwwSkFBMEosR0FBRyxVQUFVLG1CQUFtQiw2QkFBNkIsR0FBRyxnQkFBZ0Isb0JBQW9CLGtEQUFrRCw4QkFBOEIsZ0JBQWdCLEtBQUssa0JBQWtCLDBCQUEwQixtQkFBbUIsbUJBQW1CLGdCQUFnQiwyQkFBMkIsdUJBQXVCLEdBQUcsdUJBQXVCLG1CQUFtQiwyQkFBMkIsdUJBQXVCLEdBQUcsbUVBQW1FLDBCQUEwQixHQUFHLHlHQUF5RywwQkFBMEIsa0JBQWtCLHVDQUF1QyxHQUFHLDBGQUEwRixtQkFBbUIsMEJBQTBCLHlCQUF5QixzQkFBc0IsMEJBQTBCLGdCQUFnQixvQ0FBb0MsR0FBRyxxQ0FBcUMsb0JBQW9CLHFEQUFxRCxnQkFBZ0Isb0JBQW9CLEdBQUcsa0JBQWtCLDBDQUEwQyx5Q0FBeUMsR0FBRyxlQUFlLHdCQUF3QixvQ0FBb0MsMkJBQTJCLEdBQUcsNEJBQTRCLG1CQUFtQix5QkFBeUIsb0JBQW9CLDBCQUEwQixnQkFBZ0IsZ0NBQWdDLHFDQUFxQyxTQUFTLDZCQUE2Qix5QkFBeUIsR0FBRyxPQUFPLGdCQUFnQixHQUFHLHFCQUFxQixvQkFBb0IsMEJBQTBCLG9CQUFvQiw4QkFBOEIsR0FBRyx3QkFBd0IsMkJBQTJCLHNCQUFzQixHQUFHLCtCQUErQixrQkFBa0IscUNBQXFDLGtDQUFrQyxHQUFHLHFDQUFxQyw2QkFBNkIsbUJBQW1CLEdBQUcsbURBQW1ELGdDQUFnQyxHQUFHLGlDQUFpQyxnQ0FBZ0MsR0FBRywwQkFBMEIsbUJBQW1CLG9CQUFvQiwwQkFBMEIseUJBQXlCLGlCQUFpQixpQkFBaUIsOEJBQThCLEdBQUcsZUFBZSxtQkFBbUIsMEJBQTBCLDhCQUE4QixHQUFHLHlDQUF5QyxtQkFBbUIseUJBQXlCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLGdDQUFnQyxxQ0FBcUMsR0FBRyxpQ0FBaUMseUJBQXlCLEdBQUcscUJBQXFCLG9CQUFvQiw4QkFBOEIsdUJBQXVCLEdBQUcsc0JBQXNCLGtCQUFrQixxQ0FBcUMsa0NBQWtDLEdBQUcsNEJBQTRCLDZCQUE2QixtQkFBbUIsR0FBRyxtQkFBbUIsZ0NBQWdDLEdBQUcscUJBQXFCLGdDQUFnQyxHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyxjQUFjLG1CQUFtQix1QkFBdUIsR0FBRyxtQkFBbUI7QUFDcjVKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDMU0xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JpQztBQUNHO0FBQ0k7QUFDVjs7QUFFOUI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0EsSUFBSSxxREFBVzs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJDQUFZO0FBQ2hCO0FBQ0EsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBLFFBQVEsMkNBQVksUUFBUSwyQ0FBWTtBQUN4Qzs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkNBQU87QUFDMUM7O0FBRUEsWUFBWSwyQ0FBWTtBQUN4Qix3QkFBd0IsMkNBQVk7QUFDcEMsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7QUFDQSx3Q0FBd0MsY0FBYzs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVDQUFJO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4V3FCOztBQUVZO0FBQ0c7QUFDTjtBQUNVOztBQUV4QztBQUNPOztBQUVQLElBQUkscURBQVc7QUFDZjtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSw4QkFBOEIsNkNBQU87QUFDckMsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxvQ0FBb0MsdUNBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmlDO0FBQ0c7O0FBRTdCO0FBQ1A7QUFDQSxnREFBZ0QsMkNBQVk7QUFDNUQ7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw2Q0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQVk7QUFDeEI7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChhdXRvLCA4NTBweCkgO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcblxufVxuXG4jbmV3LXByb2plY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDA7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2NvbnRhaW5lciA+IGZvcm0ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jY29udGFpbmVyID4gZm9ybSA+IGlucHV0LFxuLlByb2plY3RDYXJkID4gLlByb2plY3RGb3JtIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jY29udGFpbmVyID4gZm9ybSBidXR0b24sXG4uUHJvamVjdENhcmQgPiAuUHJvamVjdEZvcm0gYnV0dG9uLFxuLlByb2plY3RDYXJkIC5Qcm9qZWN0T3B0aW9ucyBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XG59XG5cbi5Qcm9qZWN0Q2FyZCA+IGRpdjpmaXJzdC1jaGlsZCxcbi5Qcm9qZWN0Q2FyZCA+IC5Qcm9qZWN0Rm9ybSxcbiNjb250YWluZXIgPiBmb3JtICBcbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGVncmVlbjtcbn1cblxuLlByb2plY3RDYXJkID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uUHJvamVjdENhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5OyAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAxNXB4IDE1cHg7XG59XG5cbi5UYXNrQ2FyZCB7XG4gICAgLyogaGVpZ2h0OiAxMjBweDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5UYXNrQ2FyZCAuVGFza0hlYWRlciAge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICBcbn1cblxuLlRhc2tDYXJkIC5TdGFuZGFyZEluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uVGFza0NhcmQgPiBkaXYge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uVGFza0NhcmQgLk9wdGlvbnMge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuLlRhc2tDYXJkIC5PcHRpb25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLlRhc2tDYXJkIC5PcHRpb25zIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5UYXNrQ2FyZCAuTW9yZUJ1dHRvbixcbi5UYXNrQ2FyZCAuTGVzc0J1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMDtcbn1cblxuLlRhc2tDYXJkIC5EZWxldGVUYXNrQnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDE1cHggMCAwO1xufVxuXG4uVGFza0NhcmQgLkV4dHJhSW5mbyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMjBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uVGFza0Zvcm0ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uVGFza0Zvcm0gPiBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xufVxuXG4uVGFza0Zvcm0gPiBkaXYgPiBkaXYgKyBkaXYge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLlRhc2tGb3JtT3B0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbi5UYXNrRm9ybSBidXR0b24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5UYXNrRm9ybSBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uVGFza0Zvcm1TYXZlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAwO1xufVxuXG4uVGFza0Zvcm1DYW5jZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMTVweCAwIDA7XG59XG5cbi5UYXNrRm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgIHdpZHRoOiAxMjBweDtcbn1cblxudGV4dGFyZWEge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7O0FBRUE7Ozs7SUFJSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCxtQkFBbUI7SUFDbkIsOEJBQThCOztBQUVsQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgODUwcHgpIDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNjb250YWluZXIgPiBmb3JtIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI2NvbnRhaW5lciA+IGZvcm0gPiBpbnB1dCxcXG4uUHJvamVjdENhcmQgPiAuUHJvamVjdEZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jY29udGFpbmVyID4gZm9ybSBidXR0b24sXFxuLlByb2plY3RDYXJkID4gLlByb2plY3RGb3JtIGJ1dHRvbixcXG4uUHJvamVjdENhcmQgLlByb2plY3RPcHRpb25zIGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcXG59XFxuXFxuLlByb2plY3RDYXJkID4gZGl2OmZpcnN0LWNoaWxkLFxcbi5Qcm9qZWN0Q2FyZCA+IC5Qcm9qZWN0Rm9ybSxcXG4jY29udGFpbmVyID4gZm9ybSAgXFxuIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZWdyZWVuO1xcbn1cXG5cXG4uUHJvamVjdENhcmQgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIwMHB4KTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uUHJvamVjdENhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTsgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDE1cHggMTVweDtcXG59XFxuXFxuLlRhc2tDYXJkIHtcXG4gICAgLyogaGVpZ2h0OiAxMjBweDsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLlRhc2tDYXJkIC5UYXNrSGVhZGVyICB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIFxcbn1cXG5cXG4uVGFza0NhcmQgLlN0YW5kYXJkSW5mbyB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLlRhc2tDYXJkID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5UYXNrQ2FyZCAuT3B0aW9ucyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5UYXNrQ2FyZCAuT3B0aW9ucyBidXR0b24ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5UYXNrQ2FyZCAuT3B0aW9ucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5UYXNrQ2FyZCAuTW9yZUJ1dHRvbixcXG4uVGFza0NhcmQgLkxlc3NCdXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAwO1xcbn1cXG5cXG4uVGFza0NhcmQgLkRlbGV0ZVRhc2tCdXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDE1cHggMCAwO1xcbn1cXG5cXG4uVGFza0NhcmQgLkV4dHJhSW5mbyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEyMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLlRhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLlRhc2tGb3JtID4gZGl2ID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbn1cXG5cXG4uVGFza0Zvcm0gPiBkaXYgPiBkaXYgKyBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5UYXNrRm9ybU9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uVGFza0Zvcm0gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4uVGFza0Zvcm0gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uVGFza0Zvcm1TYXZlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMDtcXG59XFxuXFxuLlRhc2tGb3JtQ2FuY2VsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDAgMDtcXG59XFxuXFxuLlRhc2tGb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnUHJvamVjdExpc3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHNhdmVTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuLy8gSU5JVElBTCBET00gU0VUVVBcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cERvbSgpXG57XG4gICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG4gICAgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7XG59XG5cbi8vIERJU1BMQVkgUFJPSkVDVFxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KClcbntcbiAgICBzYXZlU3RvcmFnZSgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBjcmVhdGVCdXR0b24oJytQcm9qZWN0JywgKCkgPT4ge1xuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKCBidWlsZFByb2plY3RGb3JtKCduZXcnKSwgcGFyZW50LmZpcnN0RWxlbWVudENoaWxkICk7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LXByb2plY3QnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG4gICAgXG4gICAgZ1Byb2plY3RMaXN0LmZvckVhY2goKHApID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKCBidWlsZFByb2plY3QocCkgKTtcbiAgICB9KTtcblxufVxuXG5cbmZ1bmN0aW9uIGJ1aWxkUHJvamVjdChwcm9qZWN0KSBcbntcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2VkaXQnLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RUaXRsZS5yZW1vdmUoKTtcbiAgICAgICAgYWRkVGFzay5yZW1vdmUoKTtcbiAgICAgICAgcHJvamVjdENhcmQuaW5zZXJ0QmVmb3JlKCBidWlsZFByb2plY3RGb3JtKHByb2plY3QpLCBwcm9qZWN0Q2FyZC5maXJzdEVsZW1lbnRDaGlsZCApO1xuXG4gICAgfSk7XG5cbiAgICBjb25zdCBybXZCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2RlbGV0ZScsICgpID0+IHtcbiAgICAgICAgZ1Byb2plY3RMaXN0LnNwbGljZShnUHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgIHByb2plY3RDYXJkLnJlbW92ZSgpO1xuXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gY3JlYXRlQnV0dG9uKCcrVGFzaycsICgpID0+IHtcbiAgICAgICAgdGFza0NhcmQuaW5zZXJ0QmVmb3JlKCBidWlsZFRhc2tGb3JtKCduZXcnLCBwcm9qZWN0KSwgdGFza0NhcmQuZmlyc3RFbGVtZW50Q2hpbGQgKTsgXG4gICAgICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIFxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZChybXZCdXR0b24pO1xuICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnUHJvamVjdE9wdGlvbnMnKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChvcHRpb25zKTtcblxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgZGlzcGxheVRhc2socHJvamVjdCwgdGFza0NhcmQpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gcHJvamVjdENhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdpZCcrcHJvamVjdC50aW1lc3RhbXApO1xuICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ1Byb2plY3RDYXJkJyk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cbiAgICByZXR1cm4gcHJvamVjdENhcmQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJvamVjdEZvcm0ocHJvamVjdCkgXG57XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaWYgKHByb2plY3QgPT09ICduZXcnKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJ05ldyBQcm9qZWN0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3NhdmUnLCAoZSk9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHByb2plY3QgPT09ICduZXcnKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ05ldyBQcm9qZWN0Jyk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0Lm5hbWUgPSBpbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgZ1Byb2plY3RMaXN0LnVuc2hpZnQobmV3UHJvamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnUHJvamVjdExpc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdC5uYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gY3JlYXRlQnV0dG9uKCdjYW5jZWwnLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICBcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnUHJvamVjdEZvcm0nKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG5cbi8vIERJU1BMQVkgVEFTS1xuZnVuY3Rpb24gZGlzcGxheVRhc2socHJvamVjdCwgdGFza0NhcmQpXG57XG4gICAgcHJvamVjdC5saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoIGJ1aWxkVGFzayh0YXNrLCBwcm9qZWN0KSApO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGJ1aWxkVGFzayh0YXNrLCBwcm9qZWN0KSBcbntcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgTm90ZXM6ICR7dGFzay5kZXNjcmlwdGlvbn1gO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7dGFzay5kdWVEYXRlfWA7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuXG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGlmICh0YXNrLnN0YXR1cylcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2suc3RhdHVzID0gdGFzay5zdGF0dXMgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdlZGl0JywgKCkgPT4ge1xuICAgICAgICBpbmZvLnJlbW92ZSgpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCggYnVpbGRUYXNrRm9ybSh0YXNrKSApO1xuXG4gICAgfSk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdFZGl0VGFza0J1dHRvbicpO1xuXG4gICAgY29uc3Qgcm12QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdkZWxldGUnLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAgICAgdGFza0NhcmQucmVtb3ZlKCk7XG5cbiAgICAgICAgZGlzcGxheVByb2plY3QoKTtcbiAgICB9KTtcbiAgICBybXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnRGVsZXRlVGFza0J1dHRvbicpO1xuXG4gICAgLy8gdG8gZXhwYW5kIHRhc2sgY2FyZCB0byBzaG93IG1vcmUgaW5mb1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ21vcmUnLCAoKSA9PiB7XG4gICAgICAgIGV4dHJhSW5mby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbW9yZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBsZXNzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICB9KTtcbiAgICBtb3JlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ01vcmVCdXR0b24nKTtcbiAgICBcbiAgICAvLyB0byBoaWRlIGV4dHJhIHRhc2sgaW5mb1xuICAgIGNvbnN0IGxlc3NCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2xlc3MnLCAoKSA9PiB7XG4gICAgICAgIGV4dHJhSW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBsZXNzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1vcmVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgIH0pO1xuICAgIGxlc3NCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsZXNzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ0xlc3NCdXR0b24nKTtcblxuICAgIC8vIG9wdGlvbiBidXR0b25zXG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQobW9yZUJ1dHRvbik7XG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZChsZXNzQnV0dG9uKTtcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQocm12QnV0dG9uKTtcbiAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ09wdGlvbnMnKTtcbiAgICAvLyB0YXNrIGhlYWRlclxuICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHRhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZCgnVGFza0hlYWRlcicpO1xuXG4gICAgLy8gc3RhbmRhcmQgaW5mbyBcbiAgICBjb25zdCBzdGFuZGFyZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGFuZGFyZEluZm8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgc3RhbmRhcmRJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBzdGFuZGFyZEluZm8uY2xhc3NMaXN0LmFkZCgnU3RhbmRhcmRJbmZvJyk7XG5cbiAgICAvLyBleHRyYSBpbmZvIFxuICAgIGNvbnN0IGV4dHJhSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGV4dHJhSW5mby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZXh0cmFJbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZXh0cmFJbmZvLmNsYXNzTGlzdC5hZGQoJ0V4dHJhSW5mbycpO1xuICAgIFxuICAgIC8vIFRhc2sgaW5mbyBjb250YWluZXIgXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoIHRhc2tIZWFkZXIgKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKCBzdGFuZGFyZEluZm8gKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKCBvcHRpb25zICk7XG4gICAgaW5mby5hcHBlbmRDaGlsZCggZXh0cmFJbmZvICk7XG4gICAgXG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lkJytwcm9qZWN0LnRpbWVzdGFtcCk7XG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZCgnVGFza0NhcmQnKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCggaW5mbyApO1xuXG4gICAgcmV0dXJuIHRhc2tDYXJkO1xufVxuXG5mdW5jdGlvbiBidWlsZFRhc2tGb3JtKHRhc2ssIHByb2plY3QpIFxue1xuICAgIGNvbnN0IG5vZGVzID0gY3JlYXRlVGFza0Zvcm1Ob2RlcygpO1xuXG4gICAgaWYgKHRhc2sgPT09ICduZXcnKSB7XG4gICAgICAgIG5vZGVzLm5hbWUuaW5wdXQudmFsdWUgPSAnTmV3IFRhc2snO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVzLm5hbWUuaW5wdXQudmFsdWUgPSB0YXNrLm5hbWU7XG4gICAgICAgIG5vZGVzLmRlc2MuaW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBub2Rlcy5kYXRlLmlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBub2Rlcy5wcmlvLmlucHV0LnZhbHVlID0gdGFzay5wcmlvcml0eTtcblxuICAgIH1cblxuICAgIGNvbnN0IHNhdmVCdG4gPSBjcmVhdGVCdXR0b24oJ3NhdmUnLCAoZSk9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRhc2sgPT09ICduZXcnKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sobm9kZXMubmFtZS5pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBuZXdUYXNrLmRlc2NyaXB0aW9uID0gbm9kZXMuZGVzYy5pbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIG5ld1Rhc2suZHVlRGF0ZSA9IG5vZGVzLmRhdGUuaW5wdXQudmFsdWUgO1xuICAgICAgICAgICAgbmV3VGFzay5wcmlvcml0eSA9IG5vZGVzLnByaW8uaW5wdXQudmFsdWUgO1xuXG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLm5hbWUgPSBub2Rlcy5uYW1lLmlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IG5vZGVzLmRlc2MuaW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBub2Rlcy5kYXRlLmlucHV0LnZhbHVlIDtcbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSBub2Rlcy5wcmlvLmlucHV0LnZhbHVlIDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdUYXNrRm9ybVNhdmUnKTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUJ1dHRvbignY2FuY2VsJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIH0pO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdUYXNrRm9ybUNhbmNlbCcpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBuIGluIG5vZGVzIClcbiAgICB7XG4gICAgICAgIGNvbnN0IG5vZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm9kZURpdi5hcHBlbmRDaGlsZChub2Rlc1tuXS5sYWJlbCk7XG4gICAgICAgIG5vZGVEaXYuYXBwZW5kQ2hpbGQobm9kZXNbbl0uaW5wdXQpO1xuXG4gICAgICAgIGZvcm1JbnB1dHMuYXBwZW5kQ2hpbGQobm9kZURpdik7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9uLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgIG9wdGlvbi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdUYXNrRm9ybU9wdGlvbicpO1xuXG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ1Rhc2tGb3JtJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtSW5wdXRzKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm1Ob2RlcygpXG57XG4gICAgLy8gdGFzayBuYW1lXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgY29uc3QgbmFtZSA9IHsgXG4gICAgICAgIGlucHV0OiBuYW1lSW5wdXQsIFxuICAgICAgICBsYWJlbDogbmFtZUxhYmVsLCBcbiAgICB9O1xuXG4gICAgLy8gdGFzayBkZXNjcmlwdGlvbiBcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdOb3RlczonO1xuICAgIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdub3RlcycpOyAgICBcbiAgICBjb25zdCBkZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGVzJyk7XG4gICAgY29uc3QgZGVzYyA9IHsgXG4gICAgICAgIGlucHV0OiBkZXNjVGV4dEFyZWEsIFxuICAgICAgICBsYWJlbDogZGVzY0xhYmVsLCBcbiAgICB9O1xuICAgIC8vIHRhc2sgZHVlIGRhdGVcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlOic7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBjb25zdCBkYXRlID0geyBcbiAgICAgICAgaW5wdXQ6IGRhdGVJbnB1dCwgXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWwsIFxuICAgIH07XG5cbiAgICAvLyB0YXNrIHBpb3JpdHkgXG4gICAgY29uc3QgcHJpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvTGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICBwcmlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBjb25zdCBwcmlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XG4gICAgb3B0aW9ucy5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbm9kZS52YWx1ZSA9IG87XG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBvO1xuICAgICAgICBwcmlvSW5wdXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcmlvID0geyBcbiAgICAgICAgaW5wdXQ6IHByaW9JbnB1dCwgXG4gICAgICAgIGxhYmVsOiBwcmlvTGFiZWwsIFxuICAgIH07XG5cbiAgICByZXR1cm4geyBuYW1lLCBkYXRlLCBwcmlvLCBkZXNjIH07XG59XG5cbi8vIEhFTFBFUiBGVU5DU1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIGZ1bmMpIFxue1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBzZXR1cERvbSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBsb2FkU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbi8vIFNFVFVQIFxuZXhwb3J0IGNvbnN0IGdQcm9qZWN0TGlzdCA9IFtdO1xuXG5pZiAobG9hZFN0b3JhZ2UoKSA9PT0gZmFsc2UpIHtcbiAgICAvLyBleGFtcGxlIGxvYWQgZGF0YVxuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgKytpKSBcbiAgICB7XG4gICAgICAgIGdQcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KCdFeGFtcGxlIFByb2plY3QnKSk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IGk7ICsraikgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGV4YW1wbGVUYXNrID0gbmV3IFRhc2soJ0V4YW1wbGUgVGFzaycpO1xuICAgICAgICAgICAgZXhhbXBsZVRhc2suZGVzY3JpcHRpb24gPSAnVGhpcyBpcyBhbiBleGFtcGxlIHRhc2suJztcbiAgICAgICAgICAgIGV4YW1wbGVUYXNrLmR1ZURhdGUgPSAnMjA5OS0wMS0wMSc7XG4gICAgICAgICAgICBleGFtcGxlVGFzay5wcmlvcml0eSA9ICdsb3cnO1xuICAgICAgICAgICAgZ1Byb2plY3RMaXN0W2ldLmFkZFRhc2soIGV4YW1wbGVUYXNrICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnNldHVwRG9tKCk7XG4iLCJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgfVxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLmxpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcblxuICAgIH1cbiAgICByZW1vdmVUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcigodCkgPT4gdCAhPT0gdGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gICAgfVxufSIsImltcG9ydCB7IGdQcm9qZWN0TGlzdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0b3JhZ2UoKSBcbntcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2F2ZScsIEpTT04uc3RyaW5naWZ5KGdQcm9qZWN0TGlzdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN0b3JhZ2UoKVxue1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2F2ZScpKSB7XG4gICAgICAgIGNvbnN0IHNhdmVBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NhdmUnKSk7XG4gICAgICAgIGdQcm9qZWN0TGlzdC5sZW5ndGggPSAwO1xuICAgIFxuICAgICAgICBmb3IgKGNvbnN0IHNhdmUgb2Ygc2F2ZUFycmF5KSBcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG4gICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPSBzYXZlLm5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0LnRpbWVzdGFtcCA9IHNhdmUudGltZXN0YW1wO1xuICAgICAgICAgICAgcHJvamVjdC5saXN0ID0gc2F2ZS5saXN0O1xuICAgIFxuICAgICAgICAgICAgZ1Byb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsIlxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSAnJztcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlOyAvLyB0YXNrIGNvbXBsZXRpb24gc3RhdHVzIFxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9