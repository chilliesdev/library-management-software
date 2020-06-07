(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./resources/js/react/src/_nav.js":
/*!****************************************!*\
  !*** ./resources/js/react/src/_nav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
    }
  }, {
    title: true,
    name: 'Data',
    wrapper: {
      // optional wrapper object
      element: '',
      // required valid HTML5 element tag
      attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}

    },
    "class": '' // optional class names space delimited list for title item ex: "text-center"

  }, {
    name: 'Books',
    url: '/books',
    icon: 'fa fa-book'
  }, {
    name: 'Users',
    url: '/users',
    icon: 'fa fa-users'
  }, {
    name: 'Customers',
    url: '/customers',
    icon: 'fa fa-user'
  }, {
    name: 'Library',
    url: '/library',
    icon: 'fa fa-building'
  }, {
    divider: true
  }, {
    title: true,
    name: 'Extras'
  }, {
    name: 'Statistics',
    url: '/statistics',
    icon: 'icon-pie-chart'
  }, {
    name: 'About',
    url: '/about',
    icon: 'fa fa-info'
  }]
});

/***/ }),

/***/ "./resources/js/react/src/containers/DefaultLayout/DefaultLayout.js":
/*!**************************************************************************!*\
  !*** ./resources/js/react/src/containers/DefaultLayout/DefaultLayout.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _views_components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/components/Loading */ "./resources/js/react/src/views/components/Loading.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_nav */ "./resources/js/react/src/_nav.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ "./resources/js/react/src/routes.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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






 // sidebar nav config

 // routes config


var DefaultAside = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./DefaultAside */ "./resources/js/react/src/containers/DefaultLayout/DefaultAside.js"));
});
var DefaultFooter = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./DefaultFooter */ "./resources/js/react/src/containers/DefaultLayout/DefaultFooter.js"));
});
var DefaultHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./DefaultHeader */ "./resources/js/react/src/containers/DefaultLayout/DefaultHeader.js"));
});

var DefaultLayout = /*#__PURE__*/function (_Component) {
  _inherits(DefaultLayout, _Component);

  var _super = _createSuper(DefaultLayout);

  function DefaultLayout() {
    var _this;

    _classCallCheck(this, DefaultLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "loading", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn pt-1 text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "sm"
      }));
    });

    return _this;
  }

  _createClass(DefaultLayout, [{
    key: "signOut",
    value: function signOut(e) {
      e.preventDefault();
      this.props.history.push('/logout');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppHeader"], {
        fixed: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultHeader, {
        onLogout: function onLogout(e) {
          return _this2.signOut(e);
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebar"], {
        collapse: "lg",
        display: "lg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarHeader"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarForm"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarNav2"], _extends({
        navConfig: _nav__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, this.props, {
        router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarFooter"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarMinimizer"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumb2"], {
        appRoutes: _routes__WEBPACK_IMPORTED_MODULE_6__["default"],
        router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (route, idx) {
        return route.component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          key: idx,
          path: route.path,
          exact: route.exact,
          name: route.name,
          render: function render(props) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, props);
          }
        }) : null;
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        from: "/",
        to: "/dashboard"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppAside"], {
        fixed: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultAside, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultFooter, null))));
    }
  }]);

  return DefaultLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./resources/js/react/src/routes.js":
/*!******************************************!*\
  !*** ./resources/js/react/src/routes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Breadcrumbs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./views/Base/Breadcrumbs */ "./resources/js/react/src/views/Base/Breadcrumbs/Breadcrumbs.js"));
});
var Cards = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./views/Base/Cards */ "./resources/js/react/src/views/Base/Cards/Cards.js"));
});
var Carousels = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./views/Base/Carousels */ "./resources/js/react/src/views/Base/Carousels/Carousels.js"));
});
var Collapses = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./views/Base/Collapses */ "./resources/js/react/src/views/Base/Collapses/Collapses.js"));
});
var Dropdowns = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./views/Base/Dropdowns */ "./resources/js/react/src/views/Base/Dropdowns/Dropdowns.js"));
});
var Forms = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./views/Base/Forms */ "./resources/js/react/src/views/Base/Forms/Forms.js"));
});
var Jumbotrons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./views/Base/Jumbotrons */ "./resources/js/react/src/views/Base/Jumbotrons/Jumbotrons.js"));
});
var ListGroups = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./views/Base/ListGroups */ "./resources/js/react/src/views/Base/ListGroups/ListGroups.js"));
});
var Navbars = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./views/Base/Navbars */ "./resources/js/react/src/views/Base/Navbars/Navbars.js"));
});
var Navs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./views/Base/Navs */ "./resources/js/react/src/views/Base/Navs/Navs.js"));
});
var Paginations = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./views/Base/Paginations */ "./resources/js/react/src/views/Base/Paginations/Pagnations.js"));
});
var Popovers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./views/Base/Popovers */ "./resources/js/react/src/views/Base/Popovers/Popovers.js"));
});
var ProgressBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./views/Base/ProgressBar */ "./resources/js/react/src/views/Base/ProgressBar/ProgressBar.js"));
});
var Switches = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./views/Base/Switches */ "./resources/js/react/src/views/Base/Switches/Switches.js"));
});
var Tables = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./views/Base/Tables */ "./resources/js/react/src/views/Base/Tables/Tables.js"));
});
var Tabs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./views/Base/Tabs */ "./resources/js/react/src/views/Base/Tabs/Tabs.js"));
});
var Tooltips = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./views/Base/Tooltips */ "./resources/js/react/src/views/Base/Tooltips/Tooltips.js"));
});
var BrandButtons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./views/Buttons/BrandButtons */ "./resources/js/react/src/views/Buttons/BrandButtons/BrandButtons.js"));
});
var ButtonDropdowns = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./views/Buttons/ButtonDropdowns */ "./resources/js/react/src/views/Buttons/ButtonDropdowns/ButtonDropdowns.js"));
});
var ButtonGroups = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./views/Buttons/ButtonGroups */ "./resources/js/react/src/views/Buttons/ButtonGroups/ButtonGroups.js"));
});
var Buttons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ./views/Buttons/Buttons */ "./resources/js/react/src/views/Buttons/Buttons/Buttons.js"));
});
var Charts = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ./views/Charts */ "./resources/js/react/src/views/Charts/Charts.js"));
});
var Dashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(64)]).then(__webpack_require__.bind(null, /*! ./views/Dashboard */ "./resources/js/react/src/views/Dashboard/Dashboard.js"));
});
var CoreUIIcons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 43).then(__webpack_require__.bind(null, /*! ./views/Icons/CoreUIIcons */ "./resources/js/react/src/views/Icons/CoreUIIcons/CoreUIIcons.js"));
});
var Flags = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! ./views/Icons/Flags */ "./resources/js/react/src/views/Icons/Flags/Flags.js"));
});
var FontAwesome = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 45).then(__webpack_require__.bind(null, /*! ./views/Icons/FontAwesome */ "./resources/js/react/src/views/Icons/FontAwesome/FontAwesome.js"));
});
var SimpleLineIcons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 46).then(__webpack_require__.bind(null, /*! ./views/Icons/SimpleLineIcons */ "./resources/js/react/src/views/Icons/SimpleLineIcons/SimpleLineIcons.js"));
});
var Alerts = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! ./views/Notifications/Alerts */ "./resources/js/react/src/views/Notifications/Alerts/Alerts.js"));
});
var Badges = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 48).then(__webpack_require__.bind(null, /*! ./views/Notifications/Badges */ "./resources/js/react/src/views/Notifications/Badges/Badges.js"));
});
var Modals = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! ./views/Notifications/Modals */ "./resources/js/react/src/views/Notifications/Modals/Modals.js"));
});
var Colors = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(15), __webpack_require__.e(53)]).then(__webpack_require__.bind(null, /*! ./views/Theme/Colors */ "./resources/js/react/src/views/Theme/Colors/Colors.js"));
});
var Typography = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! ./views/Theme/Typography */ "./resources/js/react/src/views/Theme/Typography/Typography.js"));
});
var Widgets = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./views/Widgets/Widgets */ "./resources/js/react/src/views/Widgets/Widgets.js"));
});
var Users = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 63).then(__webpack_require__.bind(null, /*! ./views/Users/Users */ "./resources/js/react/src/views/Users/Users.js"));
});
var User = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 65).then(__webpack_require__.bind(null, /*! ./views/Users/User */ "./resources/js/react/src/views/Users/User.js"));
});
var Library = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 61).then(__webpack_require__.bind(null, /*! ./views/Library/Library */ "./resources/js/react/src/views/Library/Library.js"));
});
var Customers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 62).then(__webpack_require__.bind(null, /*! ./views/Customer/Customers */ "./resources/js/react/src/views/Customer/Customers.js"));
});
var Customer = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./views/Customer/Customer */ "./resources/js/react/src/views/Customer/Customer.js"));
});
var Books = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 60).then(__webpack_require__.bind(null, /*! ./views/Books/Books */ "./resources/js/react/src/views/Books/Books.js"));
});
var Book = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(6), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./views/Books/Book */ "./resources/js/react/src/views/Books/Book.js"));
});
var About = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(58), __webpack_require__.e(57)]).then(__webpack_require__.bind(null, /*! ./views/About/About */ "./resources/js/react/src/views/About/About.js"));
}); // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

var routes = [{
  path: '/',
  exact: true,
  name: 'Home'
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/theme',
  exact: true,
  name: 'Theme',
  component: Colors
}, {
  path: '/theme/colors',
  name: 'Colors',
  component: Colors
}, {
  path: '/theme/typography',
  name: 'Typography',
  component: Typography
}, {
  path: '/base',
  exact: true,
  name: 'Base',
  component: Cards
}, {
  path: '/base/cards',
  name: 'Cards',
  component: Cards
}, {
  path: '/base/forms',
  name: 'Forms',
  component: Forms
}, {
  path: '/base/switches',
  name: 'Switches',
  component: Switches
}, {
  path: '/base/tables',
  name: 'Tables',
  component: Tables
}, {
  path: '/base/tabs',
  name: 'Tabs',
  component: Tabs
}, {
  path: '/base/breadcrumbs',
  name: 'Breadcrumbs',
  component: Breadcrumbs
}, {
  path: '/base/carousels',
  name: 'Carousel',
  component: Carousels
}, {
  path: '/base/collapses',
  name: 'Collapse',
  component: Collapses
}, {
  path: '/base/dropdowns',
  name: 'Dropdowns',
  component: Dropdowns
}, {
  path: '/base/jumbotrons',
  name: 'Jumbotrons',
  component: Jumbotrons
}, {
  path: '/base/list-groups',
  name: 'List Groups',
  component: ListGroups
}, {
  path: '/base/navbars',
  name: 'Navbars',
  component: Navbars
}, {
  path: '/base/navs',
  name: 'Navs',
  component: Navs
}, {
  path: '/base/paginations',
  name: 'Paginations',
  component: Paginations
}, {
  path: '/base/popovers',
  name: 'Popovers',
  component: Popovers
}, {
  path: '/base/progress-bar',
  name: 'Progress Bar',
  component: ProgressBar
}, {
  path: '/base/tooltips',
  name: 'Tooltips',
  component: Tooltips
}, {
  path: '/buttons',
  exact: true,
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/buttons',
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/button-dropdowns',
  name: 'Button Dropdowns',
  component: ButtonDropdowns
}, {
  path: '/buttons/button-groups',
  name: 'Button Groups',
  component: ButtonGroups
}, {
  path: '/buttons/brand-buttons',
  name: 'Brand Buttons',
  component: BrandButtons
}, {
  path: '/icons',
  exact: true,
  name: 'Icons',
  component: CoreUIIcons
}, {
  path: '/icons/coreui-icons',
  name: 'CoreUI Icons',
  component: CoreUIIcons
}, {
  path: '/icons/flags',
  name: 'Flags',
  component: Flags
}, {
  path: '/icons/font-awesome',
  name: 'Font Awesome',
  component: FontAwesome
}, {
  path: '/icons/simple-line-icons',
  name: 'Simple Line Icons',
  component: SimpleLineIcons
}, {
  path: '/notifications',
  exact: true,
  name: 'Notifications',
  component: Alerts
}, {
  path: '/notifications/alerts',
  name: 'Alerts',
  component: Alerts
}, {
  path: '/notifications/badges',
  name: 'Badges',
  component: Badges
}, {
  path: '/notifications/modals',
  name: 'Modals',
  component: Modals
}, {
  path: '/widgets',
  name: 'Widgets',
  component: Widgets
}, {
  path: '/charts',
  name: 'Charts',
  component: Charts
}, {
  path: '/users',
  exact: true,
  name: 'Users',
  component: Users
}, {
  path: '/users/:id',
  exact: true,
  name: 'User Details',
  component: User
}, {
  path: '/library',
  exact: true,
  name: 'Libraries',
  component: Library
}, {
  path: '/customers',
  exact: true,
  name: 'Customers',
  component: Customers
}, {
  path: '/customers/:id',
  exact: true,
  name: 'Customer',
  component: Customer
}, {
  path: '/books',
  exact: true,
  name: 'Books',
  component: Books
}, {
  path: '/books/:id',
  exact: true,
  name: 'Book',
  component: Book
}, {
  path: '/about',
  exact: true,
  name: 'About',
  component: About
}, {
  path: '/statistics',
  exact: true,
  name: 'Statistcs',
  component: Charts
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./resources/js/react/src/views/components/Loading.js":
/*!************************************************************!*\
  !*** ./resources/js/react/src/views/components/Loading.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


function Loading(_ref) {
  var type = _ref.type,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color;

  if (type == 'sm') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
      animation: "border",
      id: "spinner",
      className: "text-".concat(color),
      role: "status"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, "Loading...")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    id: "loading-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    className: "d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    animation: "border",
    className: "text-".concat(color),
    id: "spinner",
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Loading...")))));
}

/***/ })

}]);