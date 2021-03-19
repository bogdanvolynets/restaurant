/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page-blocks.js":
/*!****************************!*\
  !*** ./src/page-blocks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "homeTab": () => (/* binding */ homeTab),
/* harmony export */   "menuTab": () => (/* binding */ menuTab),
/* harmony export */   "contactTab": () => (/* binding */ contactTab)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// func that creates new DOM element
// it takes 3 parameters - DOM element, its classes(leave '' for no class), its content(optional)
var createNewElement = function createNewElement(newChild, cssClass, content) {
  var newElement = document.createElement(newChild);

  if (Array.isArray(cssClass)) {
    var _newElement$classList;

    (_newElement$classList = newElement.classList).add.apply(_newElement$classList, _toConsumableArray(cssClass));
  } else if (cssClass !== '') {
    newElement.classList.add(cssClass);
  }

  if (content) {
    newElement.textContent = content;
  }

  return newElement;
}; // func that creates img
// it takes 3 parameters - src, alt, classes(optional)


var createNewImg = function createNewImg(src, alt, cssClass) {
  var newImg = document.createElement('img');
  newImg.src = src;

  if (alt) {
    newImg.alt = alt;
  } else {
    newImg.alt = "";
  }

  if (cssClass && Array.isArray(cssClass)) {
    var _newImg$classList;

    (_newImg$classList = newImg.classList).add.apply(_newImg$classList, _toConsumableArray(cssClass));
  } else if (cssClass) {
    newImg.classList.add(cssClass);
  }

  return newImg;
};

var createHeader = function createHeader() {
  var header = createNewElement('header', 'header');
  var logo = createNewImg('./images/logo.jpg', 'logo', 'header__logo');
  var menu = createNewElement('ul', 'menu');
  var menuItems = ["Home", "Menu", "Contact"]; //create menu list

  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = document.createElement('li');
    menuItem.classList.add('menu__item');
    menuItem.textContent = menuItems[i];
    menu.append(menuItem);
  }

  header.append(logo, menu);
  return header;
}; //create Tabs
//create home tab


var homeTab = function homeTab() {
  var tab = createNewElement('div', ['tab', 'hometab', 'tab__home']);
  var heading = createNewElement('h1', 'hometab__heading', 'Hello');
  var homeImg = createNewImg('./images/home-img.jpg', 'my restaurant');
  var paragraph = createNewElement('p', 'hometab__intro', 'introduction will be here');
  tab.append(heading, homeImg, paragraph);
  return tab;
}; //create menu tab


var menuTab = function menuTab() {
  //store info about dish in the object
  var menuBlocks = {
    picture: [],
    name: [],
    price: [],
    description: []
  };
  var tab = createNewElement('div', ['tab', 'menutab', 'tab__menu']);
  var heading = createNewElement('h2', 'menutab__heading', 'Our Menu'); //create container for dishes

  var grid = createNewElement('div', 'menutab__container'); //iterate through object and get values for certain dish

  for (var i = 0; i < menuBlocks.picture.length; i++) {
    var menuBlock = createElement('div', ['menutab__block']);
    var menuBlockPicture = createNewImg(menuBlocks.picture[i]);
    var menuBlockName = createNewElement('h2', '', menuBlocks.name[i]);
    var menuBlockPrice = createNewElement('p', '', menuBlocks.price[i]);
    var menuBlockDesription = createNewElement('p', '', menuBlocks.description[i]);
    menuBlock.append(menuBlockPicture, menuBlockName, menuBlockPrice, menuBlockDesription);
    grid.append(menuBlock);
  }

  tab.append(heading, grid);
  return tab;
};

var contactTab = function contactTab() {
  var tab = createNewElement('div', ['tab', 'contact']);
  var heading = createNewElement('h2', 'contact__heading', 'Contact Us');
  var description = createNewElement('p', 'contact__description', 'description goes here');
};



/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _page_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-blocks */ "./src/page-blocks.js");


var body = document.querySelector('body');
var content = document.querySelector('#content');
body.prepend((0,_page_blocks__WEBPACK_IMPORTED_MODULE_1__.createHeader)());
content.append((0,_page_blocks__WEBPACK_IMPORTED_MODULE_1__.homeTab)());
})();

/******/ })()
;
//# sourceMappingURL=main.js.map