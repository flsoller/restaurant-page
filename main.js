/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contactcontent.js":
/*!*******************************!*\
  !*** ./src/contactcontent.js ***!
  \*******************************/
/*! exports provided: contactContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactContent\", function() { return contactContent; });\nconst contactContent = () => {\n\n    const content = document.getElementById('content');\n\n    //Create card container\n    const card = document.createElement('div');\n    card.className = 'items card';\n    content.appendChild(card);\n\n    //Create card content\n    const h1 = document.createElement('h1');\n    h1.innerHTML = 'Get in touch with us';\n\n    const h4 = document.createElement('h4');\n    h4.innerHTML = 'If you\\'d\\ like to leave a message you can actually not contact us since this is not a real place. Sorry.'\n\n    card.appendChild(h1);\n    card.appendChild(h4);\n}\n\n\n\n//# sourceURL=webpack:///./src/contactcontent.js?");

/***/ }),

/***/ "./src/defaultpage.js":
/*!****************************!*\
  !*** ./src/defaultpage.js ***!
  \****************************/
/*! exports provided: createSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSidebar\", function() { return createSidebar; });\nconst createSidebar = () => {\n\n    const container = document.getElementById('container');\n\n    //Create div that holds sidebar\n    const sidebar = document.createElement('div');  \n    sidebar.className = 'sidebar';\n    container.appendChild(sidebar);\n\n    //Create div that holds buttons\n    const itemContainer = document.createElement('div');\n    itemContainer.className = 'items';\n    itemContainer.id = 'itemContainer';\n    sidebar.appendChild(itemContainer);\n\n    //Create buttons\n    for (let i = 0; i < 3; i++) {\n        const button = document.createElement('button')\n        itemContainer.appendChild(button);\n    }\n\n    //Add innter HTML and IDs to buttons\n    const buttons = itemContainer.childNodes;\n    buttons[0].innerHTML = 'Home';\n    buttons[0].id = 'btnHome'\n    buttons[1].innerHTML = 'Menu';\n    buttons[1].id = 'btnMenu';\n    buttons[2].innerHTML = 'Contact';\n    buttons[2].id = 'btnContact';\n\n    //Create div that holds content\n    const content = document.createElement('div');\n    content.className = 'content';\n    content.id = 'content';\n    container.appendChild(content);\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/defaultpage.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: removeContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeContent\", function() { return removeContent; });\nconst removeContent = (containerName) => {\n    \n    const container = document.getElementById(containerName);\n\n    while (container.hasChildNodes()) {\n        container.removeChild(container.firstChild);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/homecontent.js":
/*!****************************!*\
  !*** ./src/homecontent.js ***!
  \****************************/
/*! exports provided: homeContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeContent\", function() { return homeContent; });\nconst homeContent = () => {\n\n    const content = document.getElementById('content');\n\n    //Create card container\n    const card = document.createElement('div');\n    card.className = 'items card';\n    content.appendChild(card);\n\n    //Create card content\n    const h1 = document.createElement('h1');\n    h1.innerHTML = 'Welcome to RandomBurgerPlace.';\n\n    const h4 = document.createElement('h4');\n    h4.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'\n\n    card.appendChild(h1);\n    card.appendChild(h4);\n}\n\n\n\n//# sourceURL=webpack:///./src/homecontent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _defaultpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultpage */ \"./src/defaultpage.js\");\n/* harmony import */ var _homecontent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homecontent */ \"./src/homecontent.js\");\n/* harmony import */ var _menucontent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menucontent */ \"./src/menucontent.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _contactcontent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactcontent */ \"./src/contactcontent.js\");\n\n\n\n\n\n\n// Load sidebar\nObject(_defaultpage__WEBPACK_IMPORTED_MODULE_0__[\"createSidebar\"])();\n\n// Load home content by default\nObject(_homecontent__WEBPACK_IMPORTED_MODULE_1__[\"homeContent\"])();\n\n// Add event listeners to buttons\nconst btnHome = document.getElementById('btnHome');\nconst btnMenu = document.getElementById('btnMenu');\nconst btnContact = document.getElementById('btnContact');\n\nbtnHome.addEventListener('click', () => {Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"removeContent\"])('content'), Object(_homecontent__WEBPACK_IMPORTED_MODULE_1__[\"homeContent\"])() });\nbtnMenu.addEventListener('click', () => {Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"removeContent\"])('content'), Object(_menucontent__WEBPACK_IMPORTED_MODULE_2__[\"menuContent\"])() });\nbtnContact.addEventListener('click', () => {Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"removeContent\"])('content'), Object(_contactcontent__WEBPACK_IMPORTED_MODULE_4__[\"contactContent\"])() });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menucontent.js":
/*!****************************!*\
  !*** ./src/menucontent.js ***!
  \****************************/
/*! exports provided: menuContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuContent\", function() { return menuContent; });\nconst menuContent = () => {\n\n    const content = document.getElementById('content');\n\n    //Create menuOne container\n    const menuOne = document.createElement('div');\n    menuOne.className = 'items card';\n    content.appendChild(menuOne);\n\n    //Create menuTwo container\n    const menueTwo = document.createElement('div');\n    menueTwo.className = 'items card';\n    content.appendChild(menueTwo);\n\n    //Create menuThree container\n    const menueThree = document.createElement('div');\n    menueThree.className = 'items card';\n    content.appendChild(menueThree);\n\n\n    //Set menuOne content\n    const burgerMenu = document.createElement('h3');\n    const burgerDescription = document.createElement('p');\n    burgerMenu.innerHTML = 'BACON BURGER';\n    burgerDescription.innerHTML = 'Classic burger with melted cheddar, BBQ-sauce and crispy bacon.';\n    menuOne.appendChild(burgerMenu);\n    menuOne.appendChild(burgerDescription);\n\n    //Set  menuTwo content\n    const steakMenu = document.createElement('h3');\n    const steakDescription = document.createElement('p');\n    steakMenu.innerHTML = 'STRIPES BURGER';\n    steakDescription.innerHTML = 'Burger with marinated beef stripes, Lettuce, Fried Onions, Chili-Mayo.';\n    menueTwo.appendChild(steakMenu);\n    menueTwo.appendChild(steakDescription);\n\n    //Set menuThree content\n    const veggiMenu = document.createElement('h3');\n    const veggiDescription = document.createElement('p');\n    veggiMenu.innerHTML = 'VEGGI BURGER';\n    veggiDescription.innerHTML = 'Burger with Portobello Mushroom, Blue Cheese, Lettuce, Tomato, Red Onion.';\n    menueThree.appendChild(veggiMenu);\n    menueThree.appendChild(veggiDescription);\n}\n\n\n\n//# sourceURL=webpack:///./src/menucontent.js?");

/***/ })

/******/ });