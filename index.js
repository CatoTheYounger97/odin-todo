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

    parent = document.querySelector('#container');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkNBQU87QUFDMUM7O0FBRUEsWUFBWSwyQ0FBWTtBQUN4Qix3QkFBd0IsMkNBQVk7QUFDcEMsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7QUFDQSx3Q0FBd0MsY0FBYzs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVDQUFJO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4V3FCOztBQUVZO0FBQ0c7QUFDTjtBQUN1Qjs7QUFFckQ7QUFDTzs7QUFFUCxJQUFJLHFEQUFXO0FBQ2Y7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0EsOEJBQThCLDZDQUFPO0FBQ3JDLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0Esb0NBQW9DLHVDQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJpQztBQUNHOztBQUU3QjtBQUNQO0FBQ0EsZ0RBQWdELDJDQUFZO0FBQzVEOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJDQUFZO0FBQ3hCOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG59XG5cbiNjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgODUwcHgpIDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG5cbn1cblxuI25ldy1wcm9qZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNjb250YWluZXIgPiBmb3JtIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2NvbnRhaW5lciA+IGZvcm0gPiBpbnB1dCxcbi5Qcm9qZWN0Q2FyZCA+IC5Qcm9qZWN0Rm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI2NvbnRhaW5lciA+IGZvcm0gYnV0dG9uLFxuLlByb2plY3RDYXJkID4gLlByb2plY3RGb3JtIGJ1dHRvbixcbi5Qcm9qZWN0Q2FyZCAuUHJvamVjdE9wdGlvbnMgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2xhdGVncmF5O1xufVxuXG4uUHJvamVjdENhcmQgPiBkaXY6Zmlyc3QtY2hpbGQsXG4uUHJvamVjdENhcmQgPiAuUHJvamVjdEZvcm0sXG4jY29udGFpbmVyID4gZm9ybSAgXG4ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxlZ3JlZW47XG59XG5cbi5Qcm9qZWN0Q2FyZCA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIwMHB4KTtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLlByb2plY3RDYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTsgICBcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTVweCAxNXB4O1xufVxuXG4uVGFza0NhcmQge1xuICAgIC8qIGhlaWdodDogMTIwcHg7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uVGFza0NhcmQgLlRhc2tIZWFkZXIgIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gICAgXG59XG5cbi5UYXNrQ2FyZCAuU3RhbmRhcmRJbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbnAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLlRhc2tDYXJkID4gZGl2IHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLlRhc2tDYXJkIC5PcHRpb25zIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG59XG5cbi5UYXNrQ2FyZCAuT3B0aW9ucyBidXR0b24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5UYXNrQ2FyZCAuT3B0aW9ucyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uVGFza0NhcmQgLk1vcmVCdXR0b24sXG4uVGFza0NhcmQgLkxlc3NCdXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMCAwIDA7XG59XG5cbi5UYXNrQ2FyZCAuRGVsZXRlVGFza0J1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDAgMDtcbn1cblxuLlRhc2tDYXJkIC5FeHRyYUluZm8ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTIwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLlRhc2tGb3JtIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLlRhc2tGb3JtID4gZGl2ID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbn1cblxuLlRhc2tGb3JtID4gZGl2ID4gZGl2ICsgZGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5UYXNrRm9ybU9wdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xufVxuXG4uVGFza0Zvcm0gYnV0dG9uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG4uVGFza0Zvcm0gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLlRhc2tGb3JtU2F2ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMDtcbn1cblxuLlRhc2tGb3JtQ2FuY2VsIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDE1cHggMCAwO1xufVxuXG4uVGFza0Zvcm0gaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLHVCQUF1QjtJQUN2QixTQUFTOztBQUViOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDOztBQUVBOzs7O0lBSUksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7QUFFbEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDg1MHB4KSA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jY29udGFpbmVyID4gZm9ybSB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNjb250YWluZXIgPiBmb3JtID4gaW5wdXQsXFxuLlByb2plY3RDYXJkID4gLlByb2plY3RGb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI2NvbnRhaW5lciA+IGZvcm0gYnV0dG9uLFxcbi5Qcm9qZWN0Q2FyZCA+IC5Qcm9qZWN0Rm9ybSBidXR0b24sXFxuLlByb2plY3RDYXJkIC5Qcm9qZWN0T3B0aW9ucyBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XFxufVxcblxcbi5Qcm9qZWN0Q2FyZCA+IGRpdjpmaXJzdC1jaGlsZCxcXG4uUHJvamVjdENhcmQgPiAuUHJvamVjdEZvcm0sXFxuI2NvbnRhaW5lciA+IGZvcm0gIFxcbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGVncmVlbjtcXG59XFxuXFxuLlByb2plY3RDYXJkID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLlByb2plY3RDYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7ICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAxNXB4IDE1cHg7XFxufVxcblxcbi5UYXNrQ2FyZCB7XFxuICAgIC8qIGhlaWdodDogMTIwcHg7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5UYXNrQ2FyZCAuVGFza0hlYWRlciAge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBcXG59XFxuXFxuLlRhc2tDYXJkIC5TdGFuZGFyZEluZm8ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5UYXNrQ2FyZCA+IGRpdiB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uVGFza0NhcmQgLk9wdGlvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4uVGFza0NhcmQgLk9wdGlvbnMgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4uVGFza0NhcmQgLk9wdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uVGFza0NhcmQgLk1vcmVCdXR0b24sXFxuLlRhc2tDYXJkIC5MZXNzQnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMDtcXG59XFxuXFxuLlRhc2tDYXJkIC5EZWxldGVUYXNrQnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDAgMDtcXG59XFxuXFxuLlRhc2tDYXJkIC5FeHRyYUluZm8ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjBweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5UYXNrRm9ybSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5UYXNrRm9ybSA+IGRpdiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuLlRhc2tGb3JtID4gZGl2ID4gZGl2ICsgZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uVGFza0Zvcm1PcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxuLlRhc2tGb3JtIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuLlRhc2tGb3JtIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLlRhc2tGb3JtU2F2ZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMCAwIDA7XFxufVxcblxcbi5UYXNrRm9ybUNhbmNlbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTVweCAwIDA7XFxufVxcblxcbi5UYXNrRm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ1Byb2plY3RMaXN0IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBzYXZlU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5cbi8vIElOSVRJQUwgRE9NIFNFVFVQXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBEb20oKVxue1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBkaXNwbGF5UHJvamVjdCgpO1xufVxuXG4vLyBESVNQTEFZIFBST0pFQ1RcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpXG57XG4gICAgc2F2ZVN0b3JhZ2UoKTtcblxuICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCcrUHJvamVjdCcsICgpID0+IHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZSggYnVpbGRQcm9qZWN0Rm9ybSgnbmV3JyksIHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZCApO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy1wcm9qZWN0Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICAgIFxuICAgIGdQcm9qZWN0TGlzdC5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCggYnVpbGRQcm9qZWN0KHApICk7XG4gICAgfSk7XG5cbn1cblxuXG5mdW5jdGlvbiBidWlsZFByb2plY3QocHJvamVjdCkgXG57XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdlZGl0JywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0VGl0bGUucmVtb3ZlKCk7XG4gICAgICAgIGFkZFRhc2sucmVtb3ZlKCk7XG4gICAgICAgIHByb2plY3RDYXJkLmluc2VydEJlZm9yZSggYnVpbGRQcm9qZWN0Rm9ybShwcm9qZWN0KSwgcHJvamVjdENhcmQuZmlyc3RFbGVtZW50Q2hpbGQgKTtcblxuICAgIH0pO1xuXG4gICAgY29uc3Qgcm12QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdkZWxldGUnLCAoKSA9PiB7XG4gICAgICAgIGdQcm9qZWN0TGlzdC5zcGxpY2UoZ1Byb2plY3RMaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5yZW1vdmUoKTtcblxuICAgICAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGNyZWF0ZUJ1dHRvbignK1Rhc2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tDYXJkLmluc2VydEJlZm9yZSggYnVpbGRUYXNrRm9ybSgnbmV3JywgcHJvamVjdCksIHRhc2tDYXJkLmZpcnN0RWxlbWVudENoaWxkICk7IFxuICAgICAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQocm12QnV0dG9uKTtcbiAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ1Byb2plY3RPcHRpb25zJyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG5cbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGRpc3BsYXlUYXNrKHByb2plY3QsIHRhc2tDYXJkKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnaWQnK3Byb2plY3QudGltZXN0YW1wKTtcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdQcm9qZWN0Q2FyZCcpO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgcmV0dXJuIHByb2plY3RDYXJkO1xufVxuXG5mdW5jdGlvbiBidWlsZFByb2plY3RGb3JtKHByb2plY3QpIFxue1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlmIChwcm9qZWN0ID09PSAnbmV3Jykge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICdOZXcgUHJvamVjdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzYXZlJywgKGUpPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChwcm9qZWN0ID09PSAnbmV3Jykge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdOZXcgUHJvamVjdCcpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5uYW1lID0gaW5wdXQudmFsdWU7XG5cbiAgICAgICAgICAgIGdQcm9qZWN0TGlzdC51bnNoaWZ0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ1Byb2plY3RMaXN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3QubmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3QoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUJ1dHRvbignY2FuY2VsJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ1Byb2plY3RGb3JtJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvcHRpb25zKTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG4vLyBESVNQTEFZIFRBU0tcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHByb2plY3QsIHRhc2tDYXJkKVxue1xuICAgIHByb2plY3QubGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKCBidWlsZFRhc2sodGFzaywgcHJvamVjdCkgKTtcbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBidWlsZFRhc2sodGFzaywgcHJvamVjdCkgXG57XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYE5vdGVzOiAke3Rhc2suZGVzY3JpcHRpb259YDtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlOiAke3Rhc2suZHVlRGF0ZX1gO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YDtcblxuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBpZiAodGFzay5zdGF0dXMpXG4gICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpO1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrLnN0YXR1cyA9IHRhc2suc3RhdHVzID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignZWRpdCcsICgpID0+IHtcbiAgICAgICAgaW5mby5yZW1vdmUoKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoIGJ1aWxkVGFza0Zvcm0odGFzaykgKTtcblxuICAgIH0pO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnRWRpdFRhc2tCdXR0b24nKTtcblxuICAgIGNvbnN0IHJtdkJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignZGVsZXRlJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgIHRhc2tDYXJkLnJlbW92ZSgpO1xuXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgcm12QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ0RlbGV0ZVRhc2tCdXR0b24nKTtcblxuICAgIC8vIHRvIGV4cGFuZCB0YXNrIGNhcmQgdG8gc2hvdyBtb3JlIGluZm9cbiAgICBjb25zdCBtb3JlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdtb3JlJywgKCkgPT4ge1xuICAgICAgICBleHRyYUluZm8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG1vcmVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbGVzc0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgfSk7XG4gICAgbW9yZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdNb3JlQnV0dG9uJyk7XG4gICAgXG4gICAgLy8gdG8gaGlkZSBleHRyYSB0YXNrIGluZm9cbiAgICBjb25zdCBsZXNzQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdsZXNzJywgKCkgPT4ge1xuICAgICAgICBleHRyYUluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbGVzc0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtb3JlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICB9KTtcbiAgICBsZXNzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGVzc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdMZXNzQnV0dG9uJyk7XG5cbiAgICAvLyBvcHRpb24gYnV0dG9uc1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKG1vcmVCdXR0b24pO1xuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQobGVzc0J1dHRvbik7XG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKHJtdkJ1dHRvbik7XG4gICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdPcHRpb25zJyk7XG4gICAgLy8gdGFzayBoZWFkZXJcbiAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ1Rhc2tIZWFkZXInKTtcblxuICAgIC8vIHN0YW5kYXJkIGluZm8gXG4gICAgY29uc3Qgc3RhbmRhcmRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhbmRhcmRJbmZvLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHN0YW5kYXJkSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgc3RhbmRhcmRJbmZvLmNsYXNzTGlzdC5hZGQoJ1N0YW5kYXJkSW5mbycpO1xuXG4gICAgLy8gZXh0cmEgaW5mbyBcbiAgICBjb25zdCBleHRyYUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBleHRyYUluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGV4dHJhSW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGV4dHJhSW5mby5jbGFzc0xpc3QuYWRkKCdFeHRyYUluZm8nKTtcbiAgICBcbiAgICAvLyBUYXNrIGluZm8gY29udGFpbmVyIFxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKCB0YXNrSGVhZGVyICk7XG4gICAgaW5mby5hcHBlbmRDaGlsZCggc3RhbmRhcmRJbmZvICk7XG4gICAgaW5mby5hcHBlbmRDaGlsZCggb3B0aW9ucyApO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoIGV4dHJhSW5mbyApO1xuICAgIFxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdpZCcrcHJvamVjdC50aW1lc3RhbXApO1xuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ1Rhc2tDYXJkJyk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoIGluZm8gKTtcblxuICAgIHJldHVybiB0YXNrQ2FyZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRUYXNrRm9ybSh0YXNrLCBwcm9qZWN0KSBcbntcbiAgICBjb25zdCBub2RlcyA9IGNyZWF0ZVRhc2tGb3JtTm9kZXMoKTtcblxuICAgIGlmICh0YXNrID09PSAnbmV3Jykge1xuICAgICAgICBub2Rlcy5uYW1lLmlucHV0LnZhbHVlID0gJ05ldyBUYXNrJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlcy5uYW1lLmlucHV0LnZhbHVlID0gdGFzay5uYW1lO1xuICAgICAgICBub2Rlcy5kZXNjLmlucHV0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgbm9kZXMuZGF0ZS5pbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgbm9kZXMucHJpby5pbnB1dC52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzYXZlQnRuID0gY3JlYXRlQnV0dG9uKCdzYXZlJywgKGUpPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0YXNrID09PSAnbmV3Jykge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKG5vZGVzLm5hbWUuaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgbmV3VGFzay5kZXNjcmlwdGlvbiA9IG5vZGVzLmRlc2MuaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBuZXdUYXNrLmR1ZURhdGUgPSBub2Rlcy5kYXRlLmlucHV0LnZhbHVlIDtcbiAgICAgICAgICAgIG5ld1Rhc2sucHJpb3JpdHkgPSBub2Rlcy5wcmlvLmlucHV0LnZhbHVlIDtcblxuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFzay5uYW1lID0gbm9kZXMubmFtZS5pbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBub2Rlcy5kZXNjLmlucHV0LnZhbHVlO1xuICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gbm9kZXMuZGF0ZS5pbnB1dC52YWx1ZSA7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gbm9kZXMucHJpby5pbnB1dC52YWx1ZSA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIH0pO1xuICAgIHNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnVGFza0Zvcm1TYXZlJyk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBjcmVhdGVCdXR0b24oJ2NhbmNlbCcsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVByb2plY3QoKTtcbiAgICB9KTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnVGFza0Zvcm1DYW5jZWwnKTtcbiAgICBcbiAgICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChsZXQgbiBpbiBub2RlcyApXG4gICAge1xuICAgICAgICBjb25zdCBub2RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vZGVEaXYuYXBwZW5kQ2hpbGQobm9kZXNbbl0ubGFiZWwpO1xuICAgICAgICBub2RlRGl2LmFwcGVuZENoaWxkKG5vZGVzW25dLmlucHV0KTtcblxuICAgICAgICBmb3JtSW5wdXRzLmFwcGVuZENoaWxkKG5vZGVEaXYpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbi5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgICBvcHRpb24uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnVGFza0Zvcm1PcHRpb24nKTtcblxuICAgIFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdUYXNrRm9ybScpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUlucHV0cyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtTm9kZXMoKVxue1xuICAgIC8vIHRhc2sgbmFtZVxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ05hbWU6JztcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGNvbnN0IG5hbWUgPSB7IFxuICAgICAgICBpbnB1dDogbmFtZUlucHV0LCBcbiAgICAgICAgbGFiZWw6IG5hbWVMYWJlbCwgXG4gICAgfTtcblxuICAgIC8vIHRhc2sgZGVzY3JpcHRpb24gXG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXM6JztcbiAgICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbm90ZXMnKTsgICAgXG4gICAgY29uc3QgZGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdub3RlcycpO1xuICAgIGNvbnN0IGRlc2MgPSB7IFxuICAgICAgICBpbnB1dDogZGVzY1RleHRBcmVhLCBcbiAgICAgICAgbGFiZWw6IGRlc2NMYWJlbCwgXG4gICAgfTtcbiAgICAvLyB0YXNrIGR1ZSBkYXRlXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZTonO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlJyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgY29uc3QgZGF0ZSA9IHsgXG4gICAgICAgIGlucHV0OiBkYXRlSW5wdXQsIFxuICAgICAgICBsYWJlbDogZGF0ZUxhYmVsLCBcbiAgICB9O1xuXG4gICAgLy8gdGFzayBwaW9yaXR5IFxuICAgIGNvbnN0IHByaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb0xhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgcHJpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddO1xuICAgIG9wdGlvbnMuZm9yRWFjaCgobykgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG5vZGUudmFsdWUgPSBvO1xuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gbztcbiAgICAgICAgcHJpb0lucHV0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJpbyA9IHsgXG4gICAgICAgIGlucHV0OiBwcmlvSW5wdXQsIFxuICAgICAgICBsYWJlbDogcHJpb0xhYmVsLCBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgbmFtZSwgZGF0ZSwgcHJpbywgZGVzYyB9O1xufVxuXG4vLyBIRUxQRVIgRlVOQ1NcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0LCBmdW5jKSBcbntcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgc2V0dXBEb20gfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgbG9hZFN0b3JhZ2UsIHNhdmVTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuLy8gU0VUVVAgXG5leHBvcnQgY29uc3QgZ1Byb2plY3RMaXN0ID0gW107XG5cbmlmIChsb2FkU3RvcmFnZSgpID09PSBmYWxzZSkge1xuICAgIC8vIGV4YW1wbGUgbG9hZCBkYXRhXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyArK2kpIFxuICAgIHtcbiAgICAgICAgZ1Byb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QoJ0V4YW1wbGUgUHJvamVjdCcpKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gaTsgKytqKSBcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZXhhbXBsZVRhc2sgPSBuZXcgVGFzaygnRXhhbXBsZSBUYXNrJyk7XG4gICAgICAgICAgICBleGFtcGxlVGFzay5kZXNjcmlwdGlvbiA9ICdUaGlzIGlzIGFuIGV4YW1wbGUgdGFzay4nO1xuICAgICAgICAgICAgZXhhbXBsZVRhc2suZHVlRGF0ZSA9ICcyMDk5LTAxLTAxJztcbiAgICAgICAgICAgIGV4YW1wbGVUYXNrLnByaW9yaXR5ID0gJ2xvdyc7XG4gICAgICAgICAgICBnUHJvamVjdExpc3RbaV0uYWRkVGFzayggZXhhbXBsZVRhc2sgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuc2V0dXBEb20oKTtcbiIsIlxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB9XG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHRhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xuXG4gICAgfVxuICAgIHJlbW92ZVRhc2sodGFzaykge1xuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKCh0KSA9PiB0ICE9PSB0YXNrKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgZ1Byb2plY3RMaXN0IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RvcmFnZSgpIFxue1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlJywgSlNPTi5zdHJpbmdpZnkoZ1Byb2plY3RMaXN0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3RvcmFnZSgpXG57XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlJykpIHtcbiAgICAgICAgY29uc3Qgc2F2ZUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2F2ZScpKTtcbiAgICAgICAgZ1Byb2plY3RMaXN0Lmxlbmd0aCA9IDA7XG4gICAgXG4gICAgICAgIGZvciAoY29uc3Qgc2F2ZSBvZiBzYXZlQXJyYXkpIFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbiAgICAgICAgICAgIHByb2plY3QubmFtZSA9IHNhdmUubmFtZTtcbiAgICAgICAgICAgIHByb2plY3QudGltZXN0YW1wID0gc2F2ZS50aW1lc3RhbXA7XG4gICAgICAgICAgICBwcm9qZWN0Lmxpc3QgPSBzYXZlLmxpc3Q7XG4gICAgXG4gICAgICAgICAgICBnUHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gJyc7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7IC8vIHRhc2sgY29tcGxldGlvbiBzdGF0dXMgXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=