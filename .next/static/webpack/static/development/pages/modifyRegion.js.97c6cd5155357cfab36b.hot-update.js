webpackHotUpdate("static\\development\\pages\\modifyRegion.js",{

/***/ "./src/components/DeleteRegion.jsx":
/*!*****************************************!*\
  !*** ./src/components/DeleteRegion.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Regions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Regions */ "./src/components/Regions.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\DeleteRegion.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_REGION_MUTATION($id: ID!) {\n    deleteRegion(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var DELETE_REGION_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var DelBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "DeleteRegion__DelBtn",
  componentId: "sc-11jcedq-0"
})(["font-weight:bold;border-radius:8px;font-size:1.5rem;height:30px;border:none;padding-top:5px;padding-bottom:5px;align-items:center;background-color:white;color:black;width:10vw;border:2px solid #4CAF50;:hover{cursor:pointer;background-color:#4CAF50;color:white;}}"]);

var DeleteRegion =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteRegion, _Component);

  function DeleteRegion() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteRegion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteRegion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCache", function (cache, payload) {
      // manually update the cache so that the data are all the same
      // 1. read the cache for the data we want
      var data = cache.readQuery({
        query: _Regions__WEBPACK_IMPORTED_MODULE_4__["ALL_REGIONS_QUERY"]
      }); // the deletedselect all the other regions except the deleted one from the cache

      data.regions = data.regions.filter(function (region) {
        return region.id !== payload.data.deleteRegion.id;
      }); //  3. write the new data back to the cache

      console.log("getting payload");
      console.log(payload);
      cache.writeQuery({
        query: _Regions__WEBPACK_IMPORTED_MODULE_4__["ALL_REGIONS_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteRegion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: DELETE_REGION_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.updateCache,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, function (deleteRegion, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DelBtn, {
          onClick: function onClick() {
            if (confirm("Do you want to delete this candidate ?")) {
              deleteRegion();
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, _this2.props.children);
      }));
    }
  }]);

  return DeleteRegion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeleteRegion);

/***/ })

})
//# sourceMappingURL=modifyRegion.js.97c6cd5155357cfab36b.hot-update.js.map