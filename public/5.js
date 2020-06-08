(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/react/src/views/Books/Book.js":
/*!****************************************************!*\
  !*** ./resources/js/react/src/views/Books/Book.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Book; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context */ "./resources/js/react/src/Context.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var _BookInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookInfo */ "./resources/js/react/src/views/Books/BookInfo.js");
/* harmony import */ var _BookRecommendation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BookRecommendation */ "./resources/js/react/src/views/Books/BookRecommendation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Rating */ "./resources/js/react/src/views/components/Rating.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _EditBook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditBook */ "./resources/js/react/src/views/Books/EditBook.js");
/* harmony import */ var _LendBook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LendBook */ "./resources/js/react/src/views/Books/LendBook.js");
/* harmony import */ var _LendList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LendList */ "./resources/js/react/src/views/Books/LendList.js");
/* harmony import */ var _components_Toasts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Toasts */ "./resources/js/react/src/views/components/Toasts.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import CreateBooks from './CreateBooks'








var Book = /*#__PURE__*/function (_Component) {
  _inherits(Book, _Component);

  var _super = _createSuper(Book);

  function Book(props) {
    var _this;

    _classCallCheck(this, Book);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleToast", function () {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _this.setState({
        toast: !_this.state.toast,
        toastMessage: message,
        toastTitle: title
      });

      setTimeout(function () {
        return _this.setState({
          toast: false
        });
      }, 5000);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDelete", function () {
      _this.setState({
        deleteVal: !_this.state.deleteVal
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleLend", function () {
      if (!_this.state.lend && !_this.state.book.availability) {
        _this.toggleToast();
      } else {
        _this.setState({
          lend: !_this.state.lend
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleEdit", function () {
      _this.setState({
        edit: !_this.state.edit
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function () {
      _this.setState({
        loading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/deletebook/".concat(_this.state.slug)).then(function (response) {
        _this.setState({
          // loading: false,
          redirect: true
        });
      })["catch"](function (error) {
        console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getBook", function () {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.setState({
        loading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/book/".concat(id || _this.state.slug), {
        library: _this.context.library
      }).then(function (response) {
        _this.setState({
          book: response.data,
          loading: false
        });
      })["catch"](function (error) {
        _this.getBook();

        console.error(error.response);
      });
    });

    _this.state = {
      slug: _this.props.match.params.id,
      book: [],
      loading: true,
      deleteVal: false,
      redirect: false,
      edit: false,
      lend: false,
      toast: false,
      toastMessage: null,
      toastTitle: null,
      partialLoading: false
    };
    return _this;
  }

  _createClass(Book, [{
    key: "toggleRedirect",
    value: function toggleRedirect() {
      this.setState({
        redirect: !this.state.redirect
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getBook();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          loading = _this$state.loading,
          book = _this$state.book,
          deleteVal = _this$state.deleteVal,
          redirect = _this$state.redirect,
          edit = _this$state.edit,
          lend = _this$state.lend,
          toast = _this$state.toast,
          toastMessage = _this$state.toastMessage,
          toastTitle = _this$state.toastTitle,
          partialLoading = _this$state.partialLoading;
      var id = book.id,
          name = book.name,
          author = book.author,
          genre = book.genre,
          description = book.description,
          rating = book.rating,
          cover = book.cover;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, toast && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toasts__WEBPACK_IMPORTED_MODULE_12__["default"], {
        toasts: toast,
        toggle: this.toggleToast,
        title: toastTitle ? toastTitle : 'Sorry',
        small: "just now",
        message: toastMessage ? toastMessage : "This book is not available in your library, You can direct the customer to another library"
      }), partialLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null), redirect && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
        to: "/books"
      }), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: 12,
        className: "d-flex justify-content-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "display-4 text-capitalize"
      }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        color: "dark",
        onClick: this.toggleRedirect.bind(this)
      }, "Go back"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "col-lg-4 col-md-6 mb-4",
        src: "/storage/book_cover/".concat(cover),
        alt: name
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "btn-sm mr-1",
        color: "primary",
        onClick: this.toggleLend.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "cui-cart"
      }), "Lend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "btn-sm mx-1",
        color: "danger",
        onClick: this.toggleDelete
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-trash"
      }), "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "btn-sm mx-1",
        color: "success",
        onClick: this.toggleEdit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pencil"
      }), "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-capitalize"
      }, author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "h4 pb-0 mb-0 text-capitalize"
      }, genre), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rating__WEBPACK_IMPORTED_MODULE_7__["default"], {
        rating: rating
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "font-weight-bold"
      }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: 4,
        md: 6
      }, !loading && !partialLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: id
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LendList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        dataUrl: "booklendlist",
        dataPost: {
          book: id,
          library: this.context.library
        },
        toggleToast: this.toggleToast,
        toggleLoading: function toggleLoading(value) {
          return _this2.setState({
            partialLoading: value
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: 8,
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookRecommendation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        dataUrl: "bookrecommendation/".concat(id),
        getBook: this.getBook,
        title: "Also might like"
      }))), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LendBook__WEBPACK_IMPORTED_MODULE_10__["default"], {
        book: book,
        lend: lend,
        toggleLend: this.toggleLend,
        toggleToast: this.toggleToast,
        getBook: this.getBook
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditBook__WEBPACK_IMPORTED_MODULE_9__["default"], {
        book: book,
        edit: edit,
        toggleEdit: this.toggleEdit,
        getBook: this.getBook
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
        isOpen: deleteVal,
        className: "modal-danger modal-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lead"
      }, "Do you want to delete this book?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "btn-sm",
        color: "danger",
        onClick: this.handleDelete.bind(this)
      }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "btn-sm",
        color: "success",
        onClick: this.toggleDelete.bind(this)
      }, "No"))));
    }
  }]);

  return Book;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Book, "contextType", _Context__WEBPACK_IMPORTED_MODULE_1__["AppContext"]);



/***/ }),

/***/ "./resources/js/react/src/views/Books/BookInfo.js":
/*!********************************************************!*\
  !*** ./resources/js/react/src/views/Books/BookInfo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function BookInfo(_ref) {
  var id = _ref.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      bookInfo = _useState4[0],
      setBookInfo = _useState4[1];

  function getBookInfo() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/bookinfo/".concat(id)).then(function (response) {
      setLoading(false);
      setBookInfo(response.data);
    })["catch"](function (error) {
      return setTimeout(getBookInfo(), 5000);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getBookInfo();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
    className: "h3 text-left ml-3 mt-2"
  }, "Availabilty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "mx-2 my-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "sm"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    responsive: true,
    hover: true,
    borderless: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, bookInfo.map(function (library) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: library.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-capitalize font-weight-bold w-75"
    }, library.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "font-weight-light w-25"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
      pill: true,
      color: "warning"
    }, library.pivot.quantity)));
  })))));
}

/***/ }),

/***/ "./resources/js/react/src/views/Books/EditBook.js":
/*!********************************************************!*\
  !*** ./resources/js/react/src/views/Books/EditBook.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateBooks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Alerts */ "./resources/js/react/src/views/components/Alerts.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function CreateBooks(props) {
  var toggleEdit = props.toggleEdit,
      edit = props.edit,
      getBook = props.getBook,
      book = props.book;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    author: '',
    description: '',
    genre: '',
    rating: 0,
    library: [],
    cover: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      info = _useState2[0],
      setInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      libraryInfo = _useState4[0],
      setLibraryInfo = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      libraryList = _useState6[0],
      setLibraryList = _useState6[1];

  var getBookLibrary = function getBookLibrary() {
    axios.get("/api/bookinfo/".concat(book.id)).then(function (response) {
      var temp = {};
      response.data.map(function (data) {
        return temp = _objectSpread(_objectSpread({}, temp), {}, _defineProperty({}, data.id, {
          id: data.id,
          name: data.name,
          quantity: data.pivot.quantity
        }));
      });
      setLibraryInfo(temp);
    })["catch"](function (error) {
      console.error(error); // getBookLibrary()
    });
  };

  var handleInfo = function handleInfo() {
    axios.get('/api/library').then(function (response) {
      setLibraryList(response.data);
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        name: book.name,
        author: book.author,
        description: book.description,
        genre: book.genre,
        library: response.data[0].id,
        rating: book.rating
      }));
      getBookLibrary();
    })["catch"](function (error) {
      console.error(error);
      handleInfo();
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    handleInfo();
  }, [book]);

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var name = info.name,
      author = info.author,
      description = info.description,
      rating = info.rating,
      genre = info.genre,
      library = info.library,
      cover = info.cover;

  function addLibraryInfo(e) {
    e.preventDefault();
    var includedLibrary = libraryList.filter(function (data) {
      return data.id == [e.target.name];
    });
    setLibraryInfo(_objectSpread(_objectSpread({}, libraryInfo), {}, _defineProperty({}, e.target.name, {
      id: includedLibrary[0].id,
      name: includedLibrary[0].name,
      quantity: 0
    })));
  }

  function removeLibraryInfo(e, id) {
    e.preventDefault();

    Object.filter = function (obj, predicate) {
      return Object.fromEntries(Object.entries(obj).filter(predicate));
    };

    var filteredLibraryInfo = Object.filter(libraryInfo, function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          libraryInfo = _ref2[1];

      return libraryInfo.id != id;
    });
    setLibraryInfo(filteredLibraryInfo);
  }

  var validate = function validate() {
    if (name.length < 4) {
      setErrors(['Book name must be atlest one character long']);
      return false;
    }

    if (author.length < 4) {
      setErrors(['Book address must be atlest four characters long']);
      return false;
    }

    if (description.length < 4) {
      setErrors(['Book phone must be atlest four characters long']);
      return false;
    }

    for (var _i2 = 0, _Object$entries = Object.entries(libraryInfo); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (value.quantity < 1) {
        setErrors(["".concat(name, " quantity of books must be atleast one")]);
        return false;
      }
    }

    if (cover) {
      if (!cover.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        setErrors(['Photo only allows file types of GIF, PNG, JPG, JPEG and BMP.']);
        return false;
      }
    }

    setErrors([]);
    return true;
  };

  var handleEdit = function handleEdit() {
    if (name === '' || author === '' || description === '' || Object.keys(libraryInfo).length < 1) {
      setErrors(['Please complete all fields.']);
      return;
    }

    if (!validate()) {
      return;
    }

    setLoading(true);
    var formData = new FormData();
    var data = {
      name: name,
      author: author,
      description: description,
      genre: genre,
      rating: rating,
      cover: cover
    };

    for (var key in data) {
      formData.append(key, data[key]);
    }

    for (var _key in libraryInfo) {
      formData.append("library_id_".concat(libraryInfo[_key].id), libraryInfo[_key].quantity);
    } // for (let val of formData.values()){
    // 	console.log(val)
    // }


    var config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post("/api/editbook/".concat(book.id), formData, config).then(function (response) {
      setLoading(false);
      toggleEdit(true);
      getBook();
    })["catch"](function (error) {
      setLoading(false);
      console.error(error.response);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: edit,
    toggle: toggleEdit,
    className: "modal-success modal-lg"
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: toggleEdit
  }, "Edit Book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], null, errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alerts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: errors,
    variant: "danger"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-book"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "name",
    placeholder: "Name",
    autoComplete: "Name",
    name: "name",
    value: name || '',
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        name: e.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-user-circle"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    placeholder: "Author",
    autoComplete: "author",
    name: "author",
    value: author || '',
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        author: e.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-pencil"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    placeholder: "Description",
    autoComplete: "description",
    name: "description",
    value: description || '',
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        description: e.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-podcast"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "select",
    name: "genre",
    defaultValue: genre,
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        genre: e.target.value
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "GENRE1"
  }, "GENRE1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "GENRE2"
  }, "GENRE2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "GENRE3"
  }, "GENRE3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "GENRE4"
  }, "GENRE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "GENRE5"
  }, "GENRE5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "GENRE6"
  }, "GENRE6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormText"], {
    color: "muted"
  }, "Add libraries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-building"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "select",
    name: "library",
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        library: e.target.value
      }));
    }
  }, libraryList.map(function (libraryData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      className: "text-capitalize",
      key: libraryData.id,
      value: libraryData.id
    }, libraryData.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    addonType: "append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "success",
    name: info.library,
    onClick: function onClick(e) {
      return addLibraryInfo(e);
    }
  }, "Include"))), Object.keys(libraryInfo).map(function (keyName, i) {
    var _libraryInfo$keyName = libraryInfo[keyName],
        id = _libraryInfo$keyName.id,
        name = _libraryInfo$keyName.name,
        quantity = _libraryInfo$keyName.quantity;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormText"], {
      color: "muted"
    }, "Add number of books to selected library"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
      addonType: "prepend"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], {
      className: "text-capitalize"
    }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "number",
      placeholder: "Quantity",
      name: id,
      value: quantity || 0,
      onChange: function onChange(e) {
        setLibraryInfo(_objectSpread(_objectSpread({}, libraryInfo), {}, _defineProperty({}, id, {
          id: id,
          name: name,
          quantity: e.target.value
        })));
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
      addonType: "append"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "danger",
      name: info.library,
      onClick: function onClick(e) {
        return removeLibraryInfo(e, id);
      }
    }, "Remove"))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "select",
    name: "libraryInfo",
    defaultValue: rating,
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        rating: e.target.value
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 1
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 2
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 3
  }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 4
  }, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 5
  }, "5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-picture-o"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "file",
    name: "cover",
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        cover: e.target.files[0]
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormText"], {
    color: "muted"
  }, "Book Cover")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "success",
    onClick: function onClick() {
      return handleEdit();
    }
  }, "Add"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return toggleEdit();
    }
  }, "Cancle")));
}

/***/ }),

/***/ "./resources/js/react/src/views/Books/LendBook.js":
/*!********************************************************!*\
  !*** ./resources/js/react/src/views/Books/LendBook.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LendBook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context */ "./resources/js/react/src/Context.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Customer_CreateCustomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Customer/CreateCustomer */ "./resources/js/react/src/views/Customer/CreateCustomer.js");
/* harmony import */ var _components_Alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Alerts */ "./resources/js/react/src/views/components/Alerts.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function LendBook(props) {
  var Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["AppContext"]);
  var user = Context.user,
      library = Context.library;
  var book = props.book,
      lend = props.lend,
      toggleLend = props.toggleLend,
      toggleToast = props.toggleToast,
      getBook = props.getBook;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      fullLoading = _useState6[0],
      setFullLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      create = _useState8[0],
      setCreate = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      spinner = _useState10[0],
      setSpinner = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      errors = _useState12[0],
      setErrors = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState14 = _slicedToArray(_useState13, 2),
      results = _useState14[0],
      setResults = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('/api/searchcustomer'),
      _useState16 = _slicedToArray(_useState15, 2),
      url = _useState16[0],
      setUrl = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState18 = _slicedToArray(_useState17, 2),
      pagination = _useState18[0],
      setPagingation = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState20 = _slicedToArray(_useState19, 2),
      buttonDisabled = _useState20[0],
      setButtonDisabled = _useState20[1];

  function makePagination(data) {
    setPagingation({
      current_page: data.current_page,
      last_page: data.last_page,
      next_page_url: data.next_page_url,
      prev_page_url: data.prev_page_url
    });
  }

  function setIntialData() {
    setResults([]);
    setLoading(true);
    getData('/api/searchcustomer', 'RELOAD');
  }

  function loadMore() {
    setUrl(pagination.next_page_url);

    if (pagination.current_page != pagination.last_page) {
      setSpinner(true);
      handleSearch(url);
    }
  }

  function toggleCreateCustomer() {
    setCreate(!create);
  }

  function getData(dataUrl) {
    var reload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(dataUrl, {
      name: search
    }).then(function (response) {
      setSpinner(false);
      setLoading(false);

      if (reload === 'RELOAD') {
        setResults(response.data.data);
      } else {
        setResults(results.length > 0 ? results.concat(response.data.data) : response.data.data);
      }

      setUrl(response.data.next_page_url);
      setButtonDisabled(response.data.current_page === response.data.last_page ? true : false);
      makePagination(response.data);
    })["catch"](function (error) {
      return console.error(error.response);
    });
  }

  function handleSearch() {
    if (!search) {
      setErrors(['Please insert a search input']);
      return false;
    }

    getData(url);
    setErrors([]);
  }

  function handleLend(customerId) {
    var data = {
      customer: customerId,
      book: book.id,
      library: library,
      user: user.id
    };
    setFullLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/lendbook', data).then(function (response) {
      if (response.data.success == false) {
        setFullLoading(false);
        toggleToast('This customer has already borrowed this book and is yet to return it');
        toggleLend();
      } else {
        setFullLoading(false);
        toggleLend();
        getBook();
      }
    })["catch"](function (error) {
      return console.error(error.response);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    isOpen: lend // className="modal-primary"

  }, fullLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Customer_CreateCustomer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    create: create,
    toggleCreate: toggleCreateCustomer,
    handleLend: handleLend
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalHeader"], {
    toggle: toggleLend
  }, "Lend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    color: "primary",
    className: "mb-2",
    block: true,
    onClick: toggleCreateCustomer
  }, "New Customer"), errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alerts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: errors,
    variant: "danger"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "mb-4 mr-0 pr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    lg: 11,
    md: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "search",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Search for customer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    lg: 1,
    md: 2,
    className: "d-flex justify-content-end pr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    color: "dark",
    onClick: function onClick() {
      return setIntialData();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-search"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    lg: 12,
    id: "results",
    className: "m-auto d-flex justify-content-center w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 my-2"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "sm"
  }) : results.length < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "No results") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    lg: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
    className: "m-0",
    responsive: true,
    borderless: true,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    id: "lend-search-result"
  }, results.map(function (customer) {
    var id = customer.id,
        name = customer.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-capitalize h6 w-75"
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "w-25 text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      color: "success" // block 
      ,
      value: id,
      className: "btn-sm",
      onClick: function onClick(e) {
        return handleLend(e.target.value);
      }
    }, "Lend")));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    color: "dark",
    className: "btn-sm mx-auto mt-2",
    onClick: loadMore,
    disabled: buttonDisabled
  }, " ", spinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {
    className: "mx-3",
    style: {
      height: '1rem',
      width: '1rem'
    },
    color: "light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "cui-chevron-bottom mx-3"
  }), " ")))))));
}

/***/ }),

/***/ "./resources/js/react/src/views/Customer/CreateCustomer.js":
/*!*****************************************************************!*\
  !*** ./resources/js/react/src/views/Customer/CreateCustomer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateCustomer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var _components_Alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Alerts */ "./resources/js/react/src/views/components/Alerts.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function CreateCustomer(_ref) {
  var create = _ref.create,
      toggleCreate = _ref.toggleCreate,
      editInfo = _ref.editInfo,
      _ref$getData = _ref.getData,
      getData = _ref$getData === void 0 ? null : _ref$getData,
      _ref$handleLend = _ref.handleLend,
      handleLend = _ref$handleLend === void 0 ? null : _ref$handleLend;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    phone: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      info = _useState2[0],
      setInfo = _useState2[1];

  var name = info.name,
      phone = info.phone;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  var setEditInfo = function setEditInfo() {
    setInfo({
      name: editInfo.name,
      phone: editInfo.phone
    });
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: 'Create',
    url: 'addlibrary',
    color: 'primary'
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      action = _useState8[0],
      setAction = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (editInfo) {
      setEditInfo();
      setAction({
        name: 'Edit',
        url: "editcustomer/".concat(editInfo.id),
        color: 'success'
      });
    } else {
      setInfo({
        name: '',
        phone: ''
      });
      setAction({
        name: 'Create',
        url: 'addcustomer',
        color: 'primary'
      });
    }

    return function () {
      setInfo({
        name: '',
        phone: ''
      });
    };
  }, [editInfo]);

  var validate = function validate() {
    if (name.length < 4) {
      setErrors(['Name must be atlest four characters long']);
      return false;
    }

    if (phone.length < 11 || !Number.isInteger(Number(phone))) {
      setErrors(['Add a valid phone']);
      return false;
    }

    setErrors([]);
    return true;
  };

  var handleCreate = function handleCreate() {
    if (name === '' || phone === '') {
      setErrors(['Please fill all fields.']);
      return;
    }

    if (!validate()) {
      return;
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/".concat(action.url), {
      name: name,
      phone: phone
    }).then(function (response) {
      setLoading(false);
      setInfo({
        name: '',
        phone: ''
      });
      toggleCreate();
      handleLend ? handleLend(response.data.id) : getData('/api/customers', 'RELOAD');
    })["catch"](function (error) {
      console.error(error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: create,
    toggle: toggleCreate,
    className: "modal-".concat(action.color)
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalHeader"], {
    toggle: toggleCreate
  }, action.name, " Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], null, errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alerts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: errors,
    variant: "danger"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-user"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "name",
    placeholder: "Name",
    autoComplete: "Name",
    name: "name",
    value: name || '',
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        name: e.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-phone"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "number",
    placeholder: "Phone",
    autoComplete: "phone",
    name: "phone",
    value: phone || '',
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        phone: e.target.value
      }));
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "".concat(action.color),
    onClick: function onClick() {
      return handleCreate();
    }
  }, action.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return toggleCreate();
    }
  }, "Cancle")));
}

/***/ }),

/***/ "./resources/js/react/src/views/components/Alerts.js":
/*!***********************************************************!*\
  !*** ./resources/js/react/src/views/components/Alerts.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alerts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


function Alerts(_ref) {
  var message = _ref.message,
      variant = _ref.variant;
  var messages = message;
  return messages.map(function (messages, Index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      key: Index,
      variant: variant
    }, messages);
  });
}

/***/ }),

/***/ "./resources/js/react/src/views/components/Rating.js":
/*!***********************************************************!*\
  !*** ./resources/js/react/src/views/components/Rating.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rating; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");


function Rating(_ref) {
  var rating = _ref.rating;

  var color = function color() {
    var value = '';

    switch (rating) {
      case 1:
        value = 'text-dark';
        break;

      case 2:
        value = 'text-danger';
        break;

      case 3:
        value = 'text-warning';
        break;

      case 4:
        value = 'text-primary';
        break;

      default:
        value = 'text-success';
    }

    return value;
  };

  var ratingImg = [];

  for (var i = 0; i < rating; i++) {
    ratingImg.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaStar"], {
      key: i
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: color()
  }, ratingImg);
}

/***/ })

}]);