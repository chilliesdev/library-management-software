(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./resources/js/react/src/views/Customer/Customer.js":
/*!***********************************************************!*\
  !*** ./resources/js/react/src/views/Customer/Customer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Customer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var _components_Toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Toasts */ "./resources/js/react/src/views/components/Toasts.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _CreateCustomer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateCustomer */ "./resources/js/react/src/views/Customer/CreateCustomer.js");
/* harmony import */ var _CustomerBooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomerBooks */ "./resources/js/react/src/views/Customer/CustomerBooks.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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










var Customer = /*#__PURE__*/function (_Component) {
  _inherits(Customer, _Component);

  var _super = _createSuper(Customer);

  function Customer(props) {
    var _this;

    _classCallCheck(this, Customer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleDelete", function () {
      _this.setState({
        deleteVal: !_this.state.deleteVal
      });
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

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/deletecustomer/".concat(_this.state.slug)).then(function (response) {
        console.log(response);

        _this.setState({
          // loading: false,
          redirect: true
        });

        _this.toggleDelete();
      })["catch"](function (error) {
        console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCustomer", function () {
      _this.setState({
        loading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/customer/".concat(_this.state.slug)).then(function (response) {
        _this.setState({
          customer: response.data,
          loading: false
        });
      })["catch"](function (error) {
        _this.getCustomer();

        console.error(error.response);
      });
    });

    _this.state = {
      slug: _this.props.match.params.id,
      customer: [],
      loading: true,
      deleteVal: false,
      redirect: false,
      edit: false,
      toast: false
    };
    return _this;
  }

  _createClass(Customer, [{
    key: "toggleToast",
    value: function toggleToast() {
      var _this2 = this;

      this.setState({
        toast: !this.state.toast
      });
      setTimeout(function () {
        return _this2.setState({
          toast: false
        });
      }, 5000);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCustomer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          loading = _this$state.loading,
          customer = _this$state.customer,
          deleteVal = _this$state.deleteVal,
          redirect = _this$state.redirect,
          edit = _this$state.edit,
          toast = _this$state.toast;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, redirect && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: "/customers"
      }), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, toast && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toasts__WEBPACK_IMPORTED_MODULE_3__["default"], {
        message: "Book has been returned successfully",
        title: "Success"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xl: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        className: "btn btn-dark float-right",
        to: "/customers"
      }, "Go Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xl: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "display-4 text-capitalize"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user pr-1"
      }), customer.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xl: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lead"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-phone pr-1"
      }), customer.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: 6,
        className: "mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-sm mx-1",
        color: "danger",
        onClick: this.toggleDelete
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-trash"
      }), "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-sm mx-1",
        color: "success",
        onClick: this.toggleEdit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pencil"
      }), "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-sm mx-1",
        color: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-envelope"
      }), "Message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomerBooks__WEBPACK_IMPORTED_MODULE_6__["default"], {
        customer: customer.id,
        toggleToast: this.toggleToast,
        toggleLoading: function toggleLoading(value) {
          return _this3.setState({
            loading: value
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
        isOpen: deleteVal,
        toggle: this.toggleDelete,
        className: "modal-danger modal-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["ModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lead"
      }, "Do you want to delete this customer?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-sm",
        color: "danger",
        onClick: this.handleDelete
      }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-sm",
        color: "success",
        onClick: this.toggleDelete
      }, "No"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateCustomer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        editInfo: customer,
        create: edit,
        getCustomers: this.getCustomer,
        toggleCreate: this.toggleEdit
      }))));
    }
  }]);

  return Customer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/react/src/views/Customer/CustomerBooks.js":
/*!****************************************************************!*\
  !*** ./resources/js/react/src/views/Customer/CustomerBooks.js ***!
  \****************************************************************/
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
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Lendlist(_ref) {
  var customer = _ref.customer,
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
      books = _useState4[0],
      setBooks = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('/api/customerbooks'),
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
    pagination.current_page != pagination.last_page && getBooks(true);
  }

  function reloadBooks() {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/customerbooks', {
      customer: customer,
      library: library
    }).then(function (response) {
      setLoading(false);
      setBooks(response.data.data);
      setUrl(response.data.next_page_url);
      setButtonDisabled(response.data.current_page === response.data.last_page ? true : false);
      makePagination(response.data);
    })["catch"](function (error) {
      console.error(error.response);
      reloadBooks();
    });
  }

  function getBooks() {
    var getMore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    getMore && setSpinner(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, {
      customer: customer,
      library: library
    }).then(function (response) {
      getMore ? setSpinner(false) : setLoading(false);
      setBooks(books.length > 0 ? books.concat(response.data.data) : response.data.data);
      setUrl(response.data.next_page_url);
      setButtonDisabled(response.data.current_page === response.data.last_page ? true : false);
      makePagination(response.data);
    })["catch"](function (error) {
      console.error(error.response);
      getBooks();
    });
  }

  function handleReturn(bookId) {
    toggleLoading(true);
    var data = {
      book: bookId,
      library: library,
      customer: customer,
      user: user.id
    }; // return console.log(data)

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/returnbook', data).then(function (response) {
      toggleLoading(false);
      toggleToast();
      reloadBooks();
    })["catch"](function (error) {
      console.error(error.response);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getBooks();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
    className: "h3 text-left ml-3 mt-2"
  }, "Book List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "mx-2 my-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
    className: "text-center"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "sm"
  }) : books.length < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "No data") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    responsive: true,
    hover: true,
    borderless: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, books.map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "text-left",
      key: data.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-capitalize font-weight-bold w-75"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/books/".concat(data.books.id)
    }, data.books.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "font-weight-light w-25"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "danger",
      className: "btn-sm",
      onClick: function onClick() {
        return handleReturn(data.book_id);
      }
    }, "Return")));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "dark",
    className: "btn-sm",
    disabled: buttonDisabled,
    onClick: loadMore
  }, spinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    className: "mx-3",
    color: "light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "cui-chevron-bottom mx-3"
  }))))));
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