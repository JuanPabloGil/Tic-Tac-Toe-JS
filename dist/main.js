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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/ai_entity.js":
/*!**********************************!*\
  !*** ./src/scripts/ai_entity.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst aiEntity = (function aiEntity() { // eslint-disable-line no-unused-vars\n  const ai = '✘';\n  const human = '●';\n  \n  let gameBoard;\n\n  const scores = () => ({\n    '✘': 10,\n    '●': -10,\n    tie: 0,\n  });\n\n  function checkWinnerOrTie() {\n    let result = '';\n    if (gameBoard.thereIsWinner()) {\n      result = gameBoard.giveMeWinner();\n    } else if (!gameBoard.thereIsPlace()) {\n      result = 'tie';\n    }\n    return result;\n  }\n\n  function minimax(depth, isMaximizing) {\n    const result = checkWinnerOrTie();\n    if (result !== '') {\n      return scores()[result];\n    }\n\n    if (isMaximizing) {\n      let bestScore = -Infinity;\n      gameBoard.arr.forEach((item, i) => {\n        if (item === '') {\n          gameBoard.arr[i] = ai;\n          const score = minimax(depth + 1, false);\n          gameBoard.arr[i] = '';\n          bestScore = Math.max(score, bestScore);\n        }\n      });\n      return bestScore;\n    }\n    let bestScore = Infinity;\n    gameBoard.arr.forEach((item, i) => {\n      if (item === '') {\n        gameBoard.arr[i] = human;\n        const score = minimax(depth + 1, true);\n        gameBoard.arr[i] = '';\n        bestScore = Math.min(score, bestScore);\n      }\n    });\n    return bestScore;\n  }\n\n\n  const bestMove = function bestMove(currentGameBoard) {\n    gameBoard = currentGameBoard;\n    let bestScore = -Infinity;\n    let move;\n    gameBoard.arr.forEach((item, i) => {\n      if (item === '') {\n        gameBoard.arr[i] = ai;\n        const score = minimax(0, false);\n        gameBoard.arr[i] = '';\n        if (score > bestScore) {\n          bestScore = score;\n          move = i;\n        }\n      }\n    });\n    return move;\n  };\n\n  return {\n    bestMove,\n  };\n}());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (aiEntity);\n\n\n//# sourceURL=webpack:///./src/scripts/ai_entity.js?");

/***/ }),

/***/ "./src/scripts/domManipulation.js":
/*!****************************************!*\
  !*** ./src/scripts/domManipulation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst dom = (() => {\n  function append(element, content) {\n    element.insertAdjacentHTML('beforeend', content);\n  }\n\n  function render(element, content) {\n    element.innerHTML = content;\n  }\n\n  function getElement(element, target) {\n    return element.querySelector(target);\n  }\n\n  function getElements(element, target) {\n    return [...element.querySelectorAll(target)];\n  }\n\n  function addClass(element, theClass) {\n    element.classList.add(theClass);\n  }\n  function removeClass(element, theClass) {\n    element.classList.remove(theClass);\n  }\n\n  function setEventHandler(selector, event, handler) {\n    const items = [...document.querySelectorAll(selector)];\n    items.forEach((item) => {\n      item.addEventListener(event, handler);\n    });\n  }\n\n  return {\n    append,\n    render,\n    getElement,\n    getElements,\n    addClass,\n    removeClass,\n    setEventHandler,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dom);\n\n//# sourceURL=webpack:///./src/scripts/domManipulation.js?");

/***/ }),

/***/ "./src/scripts/game_board.js":
/*!***********************************!*\
  !*** ./src/scripts/game_board.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gameBoard = (function gameBoard() { // eslint-disable-line no-unused-vars\n  const LINES_TO_WIN = [[0, 1, 2],\n    [3, 4, 5],\n    [6, 7, 8],\n    [0, 3, 6],\n    [1, 4, 7],\n    [2, 5, 8],\n    [0, 4, 8],\n    [2, 4, 6]];\n\n  const linesToWin = () => LINES_TO_WIN;\n\n  const arr = ['', '', '', '', '', '', '', '', ''];\n\n  const thereIsPlace = function thereIsPlace() {\n    let response = false;\n    this.arr.forEach((item) => {\n      if (item !== '✘' && item !== '●') {\n        response = true;\n      }\n    });\n    return response;\n  };\n\n  const addMove = function addMove(place, symbol) {\n    if (!/^[1-9]$/.test(place)\n      || this.arr[parseInt(place, 10) - 1] === '●'\n      || this.arr[parseInt(place, 10) - 1] === '✘') {\n      return false;\n    }\n\n    this.arr[parseInt(place, 10) - 1] = symbol;\n    return true;\n  };\n\n  const thereIsWinner = function thereIsWinner() {\n    let response = false;\n    linesToWin().forEach((line) => {\n      if (this.arr[line[0]] === this.arr[line[1]]\n          && this.arr[line[1]] === this.arr[line[2]]\n          && this.arr[line[0]] !== ''\n      ) response = true;\n    }, this);\n    return response;\n  };\n\n  const giveMeWinner = function giveMeWinner() {\n    let response = '';\n    linesToWin().forEach((line) => {\n      if (this.arr[line[0]] === this.arr[line[1]]\n        && this.arr[line[1]] === this.arr[line[2]]\n        && this.arr[line[0]] !== ''\n      ) response = this.arr[line[0]];\n    }, this);\n    return response;\n  };\n\n  const cleanBoard = function cleanBoard() {\n    this.arr = ['', '', '', '', '', '', '', '', ''];\n  };\n\n\n  return {\n    arr,\n    thereIsPlace,\n    thereIsWinner,\n    addMove,\n    giveMeWinner,\n    cleanBoard,\n  };\n}());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\n\n\n//# sourceURL=webpack:///./src/scripts/game_board.js?");

/***/ }),

/***/ "./src/scripts/game_controller.js":
/*!****************************************!*\
  !*** ./src/scripts/game_controller.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ \"./src/scripts/domManipulation.js\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ \"./src/scripts/players.js\");\n\n\n\nconst gameController = (function gameController(doc) { // eslint-disable-line no-unused-vars\n  const players = [];\n  const currentPlayer = 0;\n  const againstComputer = true;\n\n  const render = (arr) => {\n    const squares = _domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElements(doc, '.square');\n    squares.forEach((square, index) => {\n      _domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(square, arr[index]);\n    });\n  };\n\n  const getPlayers = (playerOne, playerTwo) => [Object(_players__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    playerOne,\n    '●',\n  ),\n  Object(_players__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    playerTwo,\n    '✘',\n  )];\n\n  const displayOnTitleMessage = function displayOnTitleMessage(message) {\n    _domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElement(doc, '#cPlayer'), message);\n  };\n\n\n  return {\n    againstComputer,\n    players,\n    currentPlayer,\n    displayOnTitleMessage,\n    render,\n    getPlayers,\n  };\n}(document));\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameController);\n\n\n//# sourceURL=webpack:///./src/scripts/game_controller.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_board */ \"./src/scripts/game_board.js\");\n/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_controller */ \"./src/scripts/game_controller.js\");\n/* harmony import */ var _ai_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ai_entity */ \"./src/scripts/ai_entity.js\");\n\n\n\n\n\nfunction validatePlayers(player1, player2) {\n  if (player1.length > 3 && player2.length > 3) {\n    return true;\n  }\n  return false;\n}\n\nconst button = document.getElementById('button');\nbutton.addEventListener('click', () => {\n  _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players = [];\n  _game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cleanBoard();\n  _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(_game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].arr);\n  _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentPlayer = 0;\n\n  if (_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].againstComputer) {\n    _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players = _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayers('Human', 'AI');\n    _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayOnTitleMessage(`Turn's of:  ${_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players[_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentPlayer].name}`);\n  } else {\n    const form = document.getElementById('form');\n    const p1 = form.playerOne;\n    const p2 = form.playerTwo;\n\n    if (validatePlayers(p1.value, p2.value)) {\n      _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players = _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayers(p1.value, p2.value);\n      _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayOnTitleMessage(`Turn's of:  ${_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players[_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentPlayer].name}`);\n      document.getElementById('error_message').textContent = '';\n    } else {\n      document.getElementById('error_message').textContent = \"The playe's name must have more than 3 chars \";\n    }\n  }\n});\n\n\nconst toggleButton = document.querySelector('.againstComputer input');\ntoggleButton.addEventListener('click', (event) => {\n  _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].againstComputer = event.target.checked;\n  _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players = [];\n  _game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cleanBoard();\n  _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(_game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].arr);\n\n  const form = document.getElementById('form');\n  if (_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].againstComputer) {\n    form.style.display = 'none';\n  } else {\n    form.style.display = 'block';\n  }\n});\n\nfunction checkCurrentPlayer(place, cPlayer) {\n  if (_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players.length > 0\n    && _game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addMove(place, _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players[cPlayer].symbol)\n  ) {\n    _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentPlayer = cPlayer === 0 ? 1 : 0;\n    _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayOnTitleMessage(`Turn's of:  ${_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players[_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentPlayer].name}`);\n    _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(_game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].arr);\n\n    if (_game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].thereIsWinner()) {\n      _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayOnTitleMessage(`Congratulations ${_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players[cPlayer].name} you win `);\n    } else if (!_game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].thereIsPlace()) {\n      _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayOnTitleMessage('Its a tie');\n    }\n  } else if (_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players.length === 0) {\n    _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayOnTitleMessage('Please press start game');\n  }\n}\n\nconst squares = [...document.querySelectorAll('.square')];\nsquares.forEach((square) => {\n  square.addEventListener('click', (event) => {\n    if (!_game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].thereIsWinner()) {\n      let cPlayer = _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentPlayer;\n      let place = event.target.value;\n      checkCurrentPlayer(place, cPlayer);\n\n      if (_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players.length > 0\n        && _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].againstComputer\n        && _game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].thereIsPlace()\n      ) {\n        cPlayer = _game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentPlayer;\n        place = (_ai_entity__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bestMove(_game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) + 1).toString();\n        checkCurrentPlayer(place, cPlayer);\n      }\n    }\n  });\n});\n\n_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(_game_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].arr);\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/players.js":
/*!********************************!*\
  !*** ./src/scripts/players.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst player = (namePlayer, symbolPlayer) => { // eslint-disable-line no-unused-vars\n  const name = namePlayer;\n  const symbol = symbolPlayer;\n\n  return { name, symbol };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (player);\n\n\n//# sourceURL=webpack:///./src/scripts/players.js?");

/***/ })

/******/ });