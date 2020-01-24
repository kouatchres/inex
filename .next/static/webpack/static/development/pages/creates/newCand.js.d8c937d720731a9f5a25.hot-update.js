webpackHotUpdate("static\\development\\pages\\creates\\newCand.js",{

/***/ "./src/components/candidate/CreateCandidate.jsx":
/*!******************************************************!*\
  !*** ./src/components/candidate/CreateCandidate.jsx ***!
  \******************************************************/
/*! exports provided: default, createCandidateMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Form */ "./src/components/styles/Form.js");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCandidateMutation", function() { return _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_8__["createCandidateMutation"]; });

/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\candidate\\CreateCandidate.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var CreateCandForm = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CreateCandidate__CreateCandForm",
  componentId: "sc-11ky1at-0"
})(["display:grid;grid-template-columns:5fr 7fr;grid-gap:10px;min-width:60vw;"]);
var PicFrame = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CreateCandidate__PicFrame",
  componentId: "sc-11ky1at-1"
})(["display:flex;flex-direction:column;img{height:20rem;width:20rem;border-radius:15px;background-size:contain;background-position:center;}"]);
var DataFrame = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CreateCandidate__DataFrame",
  componentId: "sc-11ky1at-2"
})(["display:flex;flex-direction:column;"]);

var CreateCandidate =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateCandidate, _Component);

  function CreateCandidate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateCandidate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateCandidate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      cand1stName: "",
      cand2ndName: "",
      cand3rdName: "",
      email: "",
      image: "",
      phoneNumb: "",
      placeOfBirth: "",
      genderID: "1254",
      gender: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === "number" ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var files, data, res, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                files = e.target.files;
                data = new FormData();
                data.append("file", files[0]);
                data.append("upload_preset", "ineximages");
                _context.next = 6;
                return fetch("https://api.cloudinary.com/v1_1/inex/image/upload", {
                  method: "POST",
                  body: data
                });

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.json();

              case 9:
                file = _context.sent;
                console.log(file);

                _this.setState({
                  image: file.secure_url // biggerPhoto: <file className="e"></file>ager[0].secure_url,

                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CreateCandidate, [{
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        cand1stName: "",
        cand2ndName: "",
        cand3rdName: "",
        email: "",
        image: "",
        phoneNumb: "",
        placeOfBirth: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          genderID = _this$state.genderID,
          cand1stName = _this$state.cand1stName,
          cand2ndName = _this$state.cand2ndName,
          cand3rdName = _this$state.cand3rdName,
          email = _this$state.email,
          image = _this$state.image,
          phoneNumb = _this$state.phoneNumb,
          placeOfBirth = _this$state.placeOfBirth;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_7__["getAllGendersQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data,
            loading = _ref2.loading,
            error = _ref2.error;
        {
          loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          });
        }
        var genders = data.genders;
        var allGenders = genders && genders.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: item.id,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, item.genderName);
        }); //*******important function'stripping off __typename')

        var refinedGender = genders && genders.map(function (_ref3) {
          var __typename = _ref3.__typename,
              others = _objectWithoutProperties(_ref3, ["__typename"]);

          return others;
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_8__["createCandidateMutation"],
          variables: _objectSpread({}, _this2.state, {
            gender: genders && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_9__["getSelectedObject"])(refinedGender, genderID),
            candCode: Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_9__["uniqueCodeGen"])(12)
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, function (createCandidate, _ref4) {
          var loading = _ref4.loading,
              error = _ref4.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
                var res;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e.preventDefault();
                        _context2.next = 3;
                        return createCandidate();

                      case 3:
                        res = _context2.sent;
                        console.log(res);
                        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
                          pathname: "/show/singleCand",
                          query: {
                            id: res.data.createCandidate.id
                          }
                        });

                        _this2.resetForm();

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              return function (_x2) {
                return _ref5.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, "New Candidate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CreateCandForm, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PicFrame, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            id: "file",
            name: "file",
            placeholder: " telechargez photo",
            onChange: _this2.uploadFile,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, _this2.state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: image,
            alt: "Upload image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DataFrame, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            type: "select",
            id: "genderID",
            name: "genderID",
            value: genderID,
            onChange: _this2.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, "Choisissez le Sexe"), allGenders), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "cand1stName",
            name: "cand1stName",
            placeholder: "Nom",
            value: cand1stName,
            onChange: _this2.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "cand2ndName",
            name: "cand2ndName",
            placeholder: "Prenoms",
            value: cand2ndName,
            onChange: _this2.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "cand3rdName",
            name: "cand3rdName",
            placeholder: "Autres noms",
            value: cand3rdName,
            onChange: _this2.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "email",
            id: "email",
            name: "email",
            placeholder: "Email",
            value: email,
            onChange: _this2.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "number",
            id: "phoneNumb",
            name: "phoneNumb",
            placeholder: "No Tel",
            value: phoneNumb,
            onChange: _this2.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "placeOfBirth",
            name: "placeOfBirth",
            placeholder: "Lieu Naissance",
            value: placeOfBirth,
            onChange: _this2.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "submitButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }, "Valid", loading ? "ation en cours" : "er"))))));
        });
      });
    }
  }]);

  return CreateCandidate;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateCandidate);


/***/ })

})
//# sourceMappingURL=newCand.js.d8c937d720731a9f5a25.hot-update.js.map