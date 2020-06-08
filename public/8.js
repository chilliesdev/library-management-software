(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/react/src/views/Library/CreateLibrary.js":
/*!***************************************************************!*\
  !*** ./resources/js/react/src/views/Library/CreateLibrary.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateLibrary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Alerts */ "./resources/js/react/src/views/components/Alerts.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
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






function CreateLibrary(props) {
  var create = props.create,
      toggleCreate = props.toggleCreate,
      getLibraries = props.getLibraries,
      editInfo = props.editInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    address: '',
    phone: '',
    picture: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      info = _useState2[0],
      setInfo = _useState2[1];

  var setEditInfo = function setEditInfo() {
    setInfo({
      name: editInfo.name,
      address: editInfo.address,
      phone: editInfo.phone,
      picture: null
    });
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

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
        url: "editlibrary/".concat(editInfo.id),
        color: 'success'
      });
    } else {
      setInfo({
        name: '',
        address: '',
        phone: '',
        picture: null
      });
      setAction({
        name: 'Create',
        url: 'addlibrary',
        color: 'primary'
      });
    }
  }, [editInfo]);
  var name = info.name,
      address = info.address,
      phone = info.phone,
      picture = info.picture;

  var validate = function validate() {
    if (name.length < 4) {
      setErrors(['Library name must be atlest four characters long']);
      return false;
    }

    if (address.length < 4) {
      setErrors(['Library address must be atlest four characters long']);
      return false;
    }

    if (phone.length < 4) {
      setErrors(['Library phone must be atlest four characters long']);
      return false;
    }

    if (action.name === 'Create') {
      if (picture === '') {
        setErrors(['Please insert and image']);
      } else {
        if (!picture.name.match(/\.(jpg|jpeg|png|gif)$/)) {
          setErrors(['Photo only allows file types of GIF, PNG, JPG, JPEG and BMP.']);
          return false;
        }
      }
    }

    setErrors([]);
    return true;
  };

  var handleCreate = function handleCreate() {
    if (name === '' || address === '' || phone === '' || action.name === 'Create' && picture === null) {
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
      address: address,
      phone: phone,
      picture: picture
    };

    for (var key in data) {
      formData.append(key, data[key]);
    } // for (let val of formData.values()){
    // 	console.log(val)
    // }


    var config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/".concat(action.url), formData, config).then(function (response) {
      setLoading(false);
      toggleCreate();
      getLibraries();
    })["catch"](function (error) {
      setLoading(false);
      console.log(error.response);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: create,
    toggle: toggleCreate,
    className: "modal-".concat(action.color, " modal-lg")
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalHeader"], {
    toggle: toggleCreate
  }, action.name, " Library"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], null, errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alerts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: errors,
    variant: "danger"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-building"
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
    className: "fa fa-institution"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    placeholder: "Address",
    autoComplete: "address",
    name: "address",
    value: address || '',
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        address: e.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-phone"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    placeholder: "Phone",
    autoComplete: "phone",
    name: "phone",
    value: phone || '',
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        phone: e.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-picture-o"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "file",
    name: "picture",
    onChange: function onChange(e) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        picture: e.target.files[0]
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormText"], {
    color: "muted"
  }, "Library picture")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: action.color,
    onClick: handleCreate
  }, action.name), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "secondary",
    onClick: toggleCreate
  }, "Cancel")));
}

/***/ }),

/***/ "./resources/js/react/src/views/Library/Library.js":
/*!*********************************************************!*\
  !*** ./resources/js/react/src/views/Library/Library.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Library; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var _CreateLibrary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateLibrary */ "./resources/js/react/src/views/Library/CreateLibrary.js");
/* harmony import */ var _LibraryDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LibraryDetails */ "./resources/js/react/src/views/Library/LibraryDetails.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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








function LibraryCard(props) {
  var libraryDetails = props.libraryDetails,
      toggleDetails = props.toggleDetails;
  var id = libraryDetails.id,
      name = libraryDetails.name,
      address = libraryDetails.address,
      phone = libraryDetails.phone,
      picture = libraryDetails.picture;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: 3,
    md: 4,
    sm: 6,
    xs: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    style: {
      height: '25rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
    top: true,
    width: "100%",
    src: "/storage/library_cover/".concat(picture),
    alt: name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
    className: "font-weight-bolder  h5 text-capitalize"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
    className: "text-capitalize overflow-hidden lead"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mark", null, address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardSubtitle"], {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "primary",
    className: "mt-auto",
    onClick: function onClick() {
      return toggleDetails(id);
    }
  }, "More"))));
}

var Library = /*#__PURE__*/function (_Component) {
  _inherits(Library, _Component);

  var _super = _createSuper(Library);

  function Library() {
    var _this;

    _classCallCheck(this, Library);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "getLibraries", function () {
      _this.setState({
        loading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/library').then(function (response) {
        _this.setState({
          libraries: response.data,
          loading: false
        });
      })["catch"](function (error) {
        return setInterval(function () {
          return _this.getLibraries();
        }, 5000);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "searchLibrary", function (e) {
      _this.setState({
        search: e.target.value
      });

      var _this$state = _this.state,
          search = _this$state.search,
          libraries = _this$state.libraries;

      if (search != '') {
        var tempLibraries = libraries.filter(function (libraries) {
          return libraries.name.toLowerCase().includes(search);
        });
        return _this.setState({
          searchResult: tempLibraries
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCreate", function (id) {
      _this.setState({
        create: !_this.state.create
      });

      id != null ? _this.setState({
        editInfo: _this.state.detailsInfo
      }) : _this.setState({
        editInfo: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDetails", function (id) {
      var tempLibrary = _this.state.libraries.filter(function (library) {
        return library.id === id;
      });

      _this.setState({
        details: !_this.state.details,
        detailsInfo: tempLibrary[0]
      });
    });

    _this.state = {
      libraries: [],
      loading: false,
      search: '',
      searchResult: [],
      create: false,
      details: false,
      detailsInfo: null,
      editInfo: null
    };
    return _this;
  }

  _createClass(Library, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getLibraries();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          libraries = _this$state2.libraries,
          loading = _this$state2.loading,
          search = _this$state2.search,
          searchResult = _this$state2.searchResult,
          create = _this$state2.create,
          details = _this$state2.details,
          detailsInfo = _this$state2.detailsInfo,
          editInfo = _this$state2.editInfo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, detailsInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LibraryDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
        libraryDetails: detailsInfo,
        details: details,
        toggleEdit: this.toggleCreate,
        toggleDetails: this.toggleDetails,
        getLibraries: this.getLibraries
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xl: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: "d-flex justify-content-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "col-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "btn-sm",
        color: "primary",
        onClick: this.toggleCreate
      }, "Add Library")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        className: "col-5 mr-3",
        type: "search",
        placeholder: "Search...",
        value: search,
        onChange: this.searchLibrary
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateLibrary__WEBPACK_IMPORTED_MODULE_3__["default"], {
        create: create,
        toggleCreate: this.toggleCreate,
        editInfo: editInfo,
        getLibraries: this.getLibraries
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xl: "12",
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "sm"
      })) : search != '' && searchResult.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xl: "12",
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "No libray match your search")) : search != '' && searchResult.length > 0 ? searchResult.map(function (library) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LibraryCard, {
          key: library.id,
          libraryDetails: library,
          details: details,
          toggleDetails: _this2.toggleDetails,
          getLibraries: _this2.getLibraries
        });
      }) : libraries.map(function (library) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LibraryCard, {
          key: library.id,
          libraryDetails: library,
          details: details,
          toggleDetails: _this2.toggleDetails,
          getLibraries: _this2.getLibraries
        });
      })))))));
    }
  }]);

  return Library;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/react/src/views/Library/LibraryDetails.js":
/*!****************************************************************!*\
  !*** ./resources/js/react/src/views/Library/LibraryDetails.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LibraryDetails; });
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





function LibraryDetails(props) {
  var libraryDetails = props.libraryDetails,
      details = props.details,
      toggleEdit = props.toggleEdit,
      toggleDetails = props.toggleDetails,
      getLibraries = props.getLibraries;
  var id = libraryDetails.id,
      name = libraryDetails.name,
      address = libraryDetails.address,
      phone = libraryDetails.phone,
      picture = libraryDetails.picture;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      deleteValue = _useState2[0],
      setDeleteValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var toggleDelete = function toggleDelete() {
    setDeleteValue(!deleteValue);
  };

  var handleDelete = function handleDelete() {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/deletelibrary/".concat(id)).then(function (response) {
      setLoading(false);
      toggleDelete();
      toggleDetails();
      getLibraries();
    })["catch"](function (error) {
      console.error(error.response);
    });
  };

  var manageEdit = function manageEdit() {
    toggleDetails();
    toggleEdit(id);
  };

  var heading = {
    'minHeight': '100%',
    'background': "url(/storage/library_cover/".concat(picture, ") rgba(0,0,0,0.3)"),
    'backgroundSize': 'cover',
    'backgroundBlendMode': 'multiply',
    'height': '40vh',
    'color': 'white'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: details,
    toggle: toggleDetails,
    className: "modal-dark modal-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    className: "text-capitalize",
    style: heading,
    toggle: toggleDetails
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "float-right mr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "m-1 ml-4 btn-sm",
    color: "success",
    onClick: function onClick() {
      return manageEdit();
    }
  }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "m-1 btn-sm",
    color: "danger",
    onClick: function onClick() {
      return toggleDelete();
    }
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: deleteValue,
    toggle: toggleDelete,
    className: "modal-danger modal-sm"
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Do you want to delete this library?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-sm",
    color: "danger",
    onClick: handleDelete
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-sm",
    color: "success",
    onClick: toggleDelete
  }, "No")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 12,
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-institution fa-lg mr-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-capitalize lead"
  }, address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 12,
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-phone fa-lg mr-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h6"
  }, phone)))));
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

/***/ })

}]);