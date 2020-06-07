(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/react/src/views/Books/BookCard.js":
/*!********************************************************!*\
  !*** ./resources/js/react/src/views/Books/BookCard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




function BookCard(_ref) {
  var book = _ref.book,
      _ref$customClassName = _ref.customClassName,
      customClassName = _ref$customClassName === void 0 ? null : _ref$customClassName,
      getBook = _ref.getBook;
  var id = book.id,
      name = book.name,
      author = book.author,
      cover = book.cover;
  var bookLink = "/books/".concat(id);
  var coverStyle = {
    'background': "url(/storage/book_cover/".concat(cover, ") rgba(0,0,0,0.3)"),
    'backgroundSize': 'cover',
    'backgroundBlendMode': 'multiply',
    'color': 'white',
    'height': '30vh'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: customClassName ? customClassName : 'co-lg-3 col-md-4 col-sm-12'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    style: coverStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: "d-flex flex-column justify-content-start"
  }, getBook ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "book-link h4 text-light text-capitalize mr-auto",
    onClick: function onClick(e) {
      e.preventDefault();
      getBook(id);
    },
    to: bookLink
  }, name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "book-link h4 text-light text-capitalize mr-auto",
    to: bookLink
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead text-capitalize mr-auto"
  }, author))));
}

/***/ }),

/***/ "./resources/js/react/src/views/Books/BookRecommendation.js":
/*!******************************************************************!*\
  !*** ./resources/js/react/src/views/Books/BookRecommendation.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookRecommendation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookCard */ "./resources/js/react/src/views/Books/BookCard.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function BookRecommendation(_ref) {
  var dataUrl = _ref.dataUrl,
      getBook = _ref.getBook,
      title = _ref.title;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      recommendations = _useState2[0],
      setRecommendations = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("/api/".concat(dataUrl)),
      _useState6 = _slicedToArray(_useState5, 2),
      url = _useState6[0],
      setUrl = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      pagination = _useState8[0],
      setPagination = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      buttonDisabled = _useState10[0],
      setButtonDisabled = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      spinner = _useState12[0],
      setSpinner = _useState12[1];

  function makePagination(data) {
    setPagination({
      current_page: data.current_page,
      last_page: data.last_page,
      next_page_url: data.next_page_url,
      prev_page_url: data.prev_page_url
    });
  }

  function loadMore() {
    setUrl(pagination.next_page_url);
    pagination.current_page != pagination.last_page && getRecommendation(true);
  }

  function getRecommendation() {
    var getMore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    getMore && setSpinner(true);

    function onGet(response) {
      getMore ? setSpinner(false) : setLoading(false);
      setRecommendations(recommendations.length > 0 ? recommendations.concat(response.data.data) : response.data.data);
      setUrl(response.data.next_page_url);
      setButtonDisabled(response.data.current_page === response.data.last_page ? true : false);
      makePagination(response.data);
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (response) {
      return onGet(response);
    })["catch"](function (error) {
      return setTimeout(function () {
        return getRecommendation();
      }, 5000);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return getRecommendation();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: loading ? 'd-flex justify-content-center' : 'flex-row flex-nowrap text-center',
    id: !loading ? "side-scroll" : undefined
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "sm"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, recommendations.map(function (book) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: book.id,
      book: book,
      getBook: getBook,
      customClassName: "col-lg-4 col-md-12 col-sm-12"
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "dark",
    style: {
      height: '3rem',
      width: '2rem'
    },
    onClick: loadMore,
    disabled: buttonDisabled,
    className: "py-1 btn-sm"
  }, spinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    style: {
      height: '1rem',
      width: '1rem'
    },
    color: "light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "cui-chevron-right"
  }))))));
}

/***/ }),

/***/ "./resources/js/react/src/views/Books/LendList.js":
/*!********************************************************!*\
  !*** ./resources/js/react/src/views/Books/LendList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lendlist; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context */ "./resources/js/react/src/Context.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Lendlist(_ref) {
  var dataUrl = _ref.dataUrl,
      dataPost = _ref.dataPost,
      toggleToast = _ref.toggleToast,
      toggleLoading = _ref.toggleLoading;
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["AppContext"]);
  var library = context.library,
      user = context.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      customers = _useState4[0],
      setCustomers = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("/api/".concat(dataUrl)),
      _useState6 = _slicedToArray(_useState5, 2),
      url = _useState6[0],
      setUrl = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      pagination = _useState8[0],
      setPagination = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      buttonDisabled = _useState10[0],
      setButtonDisabled = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      spinner = _useState12[0],
      setSpinner = _useState12[1];

  function makePagination(data) {
    setPagination({
      current_page: data.current_page,
      last_page: data.last_page,
      next_page_url: data.next_page_url,
      prev_page_url: data.prev_page_url
    });
  }

  function loadMore() {
    setUrl(pagination.next_page_url);
    pagination.current_page != pagination.last_page && getCustomers(true);
  }

  function reloadCustomer() {
    setLoading(true);

    function onGet(response) {
      setLoading(false);
      setCustomers(response.data.data);
      setUrl(response.data.next_page_url);
      setButtonDisabled(response.data.current_page === response.data.last_page ? true : false);
      makePagination(response.data);
    }

    if (dataPost) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/".concat(dataUrl), dataPost).then(function (response) {
        return onGet(response);
      })["catch"](function (error) {
        return setTimeout(function () {
          return reloadCustomer();
        }, 5000);
      });
    } else {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/".concat(dataUrl)).then(function (response) {
        return onGet(response);
      })["catch"](function (error) {
        return setTimeout(function () {
          return reloadCustomer();
        }, 5000);
      });
    }
  }

  function getCustomers() {
    var getMore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    getMore && setSpinner(true);

    function onGet(response) {
      getMore ? setSpinner(false) : setLoading(false);
      setCustomers(customers.length > 0 ? customers.concat(response.data.data) : response.data.data);
      setUrl(response.data.next_page_url);
      setButtonDisabled(response.data.current_page === response.data.last_page ? true : false);
      makePagination(response.data);
    }

    if (dataPost) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, dataPost).then(function (response) {
        return onGet(response);
      })["catch"](function (error) {
        return setTimeout(function () {
          return getCustomers();
        }, 5000);
      });
    } else {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (response) {
        return onGet(response);
      })["catch"](function (error) {
        return setTimeout(function () {
          return getCustomers();
        }, 5000);
      });
    }
  }

  function handleReturn(customerId, bookId) {
    var data = {
      book: bookId,
      library: library,
      customer: customerId,
      user: user.id
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/returnbook', data).then(function (response) {
      console.log(response.data);
      toggleLoading(false);
      reloadCustomer();
      toggleToast('Book has been returned successfully', 'Success');
    })["catch"](function (error) {
      toggleToast('Book not returned!', 'Error');
      console.error(error.response);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCustomers();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
    className: "h4 mb-2 mt-n2 text-left"
  }, "Lend List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "sm"
  }) : customers.length < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "No data") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    responsive: true,
    hover: true,
    borderless: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, customers.map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "text-left",
      key: data.id
    }, dataPost ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-capitalize font-weight-bold w-75"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/customers/".concat(data.customers.id)
    }, data.customers.name)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-capitalize w-75 d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "h6 text-dark overflow-hidden",
      to: "/customers/".concat(data.customers.id)
    }, data.customers.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "text-dark overflow-hidden",
      to: "/books/".concat(data.books.id)
    }, data.books.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "font-weight-light w-25"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: "danger",
      className: "btn-sm",
      onClick: function onClick() {
        return handleReturn(data.customer_id, data.book_id);
      }
    }, "Return")));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "dark",
    className: "btn-sm",
    disabled: buttonDisabled,
    onClick: loadMore
  }, spinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    className: "mx-3",
    color: "light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "cui-chevron-bottom mx-3"
  }))))));
}

/***/ }),

/***/ "./resources/js/react/src/views/components/Toasts.js":
/*!***********************************************************!*\
  !*** ./resources/js/react/src/views/components/Toasts.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toasts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


function Toasts(_ref) {
  var toasts = _ref.toasts,
      toggle = _ref.toggle,
      title = _ref.title,
      text = _ref.text,
      message = _ref.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    show: toasts,
    onClose: function onClose() {
      return toggle();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "mr-auto"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Body, null, message));
}

/***/ })

}]);