webpackHotUpdate("static\\development\\pages\\creates\\newCand.js",{

/***/ "./src/components/candidate/CreateNewCandidate.jsx":
/*!*********************************************************!*\
  !*** ./src/components/candidate/CreateNewCandidate.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../formikForms/FormInputs */ "./src/components/formikForms/FormInputs.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");

var _jsxFileName = "E:\\Sygex-Formik\\Sygex-front-Formik\\src\\components\\candidate\\CreateNewCandidate.jsx";

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













var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "CreateNewCandidate__InputGroup",
  componentId: "w1rd2d-0"
})(["display:flex;flex-direction:column;margin:0 1rem;min-width:12rem;"]);
var PicFrame = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "CreateNewCandidate__PicFrame",
  componentId: "w1rd2d-1"
})(["display:flex;flex-direction:column;margin-bottom:1rem;img{margin-top:1rem;margin-left:5rem;height:15rem;width:15rem;border-radius:15px;background-size:contain;background-position:center;}"]);
var TwoGroups = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "CreateNewCandidate__TwoGroups",
  componentId: "w1rd2d-2"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));"]);
var AllControls = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "CreateNewCandidate__AllControls",
  componentId: "w1rd2d-3"
})(["display:flex;flex-direction:column;min-width:15rem;img{margin-top:0.15rem;margin-left:0.5rem;height:13rem;width:13rem;border-radius:0.9rem;background-size:contain;background-position:center;}"]);
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__["object"]().shape({
  cand1stName: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Nom obligatoire"),
  cand2ndName: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Prenom obligatoire"),
  cand3rdName: yup__WEBPACK_IMPORTED_MODULE_9__["string"](),
  momName: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Noms de la mere obligatoire"),
  dadName: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Noms du pere obligatoire"),
  placeOfBirth: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Lieu de naissance obligatoire"),
  birthCertNumber: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Numero de l'acte de naissance obligatoire"),
  phoneNumb: yup__WEBPACK_IMPORTED_MODULE_9__["number"]().required("Numero de portable obligatoire"),
  image: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Photo obligtoire"),
  genderID: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Choix de votre sexe obligatoire"),
  dateOfBirth: yup__WEBPACK_IMPORTED_MODULE_9__["date"]().min(new Date('01-01-1900')).max(new Date()).required("date de naissance obligatoire"),
  email: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().email('Email invalide').required('Email obligatoire')
});

var CreateNewCandidate =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateNewCandidate, _Component);

  function CreateNewCandidate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateNewCandidate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateNewCandidate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialValues", {
      cand1stName: '',
      cand2ndName: '',
      cand3rdName: '',
      momName: '',
      dadName: '',
      email: '',
      image: "",
      phoneNumb: '',
      placeOfBirth: '',
      dateOfBirth: '',
      birthCertNumber: '',
      genderID: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      image: ""
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
                data.append('file', files[0]);
                data.append('upload_preset', 'ineximages');
                _context.next = 6;
                return fetch('https://api.cloudinary.com/v1_1/inex/image/upload', {
                  method: 'POST',
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
                  image: file.secure_url
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

  _createClass(CreateNewCandidate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var image = this.state.image;
      this.initialValues.image = image;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getAllGendersQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
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
              lineNumber: 142
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          });
        }
        var genders = data.genders;
        var refinedGenders = genders && genders.map(function (_ref3) {
          var __typename = _ref3.__typename,
              genderName = _ref3.genderName,
              others = _objectWithoutProperties(_ref3, ["__typename", "genderName"]);

          return others;
        });
        var genderOptions = genders && genders.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: item.id,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          }, item.genderName);
        });
        console.log(refinedGenders);
        console.log(image);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__["createCandidateMutation"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, function (createCandidate, _ref4) {
          var loading = _ref4.loading,
              error = _ref4.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
            method: "POST",
            initialValues: _this2.initialValues,
            validationSchema: validationSchema,
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values, actions, setSubmitting, resetForm) {
                var res;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return createCandidate({
                          variables: _objectSpread({}, values, {
                            image: image,
                            gender: refinedGenders && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_12__["getSelectedObject"])(refinedGenders, values.genderID),
                            candCode: Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_12__["uniqueCodeGen"])(12)
                          })
                        });

                      case 2:
                        res = _context2.sent;
                        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
                          pathname: '/show/singleCand',
                          query: {
                            id: res.data.createCandidate.id
                          }
                        });
                        setTimeout(function () {
                          console.log(JSON.stringify(values, null, 2));
                          console.log(res);
                          actions.resetForm(true);
                          actions.setSubmitting(false);
                        }, 400);

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              return function (_x2, _x3, _x4, _x5) {
                return _ref5.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, function (_ref6) {
            var values = _ref6.values;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_3__["BiggestStyledPage"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 187
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188
              },
              __self: this
            }, "Cr\xE9er un Candidat"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 189
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["StyledForm"], {
              disabled: loading,
              "aria-busy": loading,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AllControls, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TwoGroups, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "cand1stName",
              type: "text",
              placeholder: "Nom",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 196
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "cand2ndName",
              type: "text",
              placeholder: "Pr\xE9nom",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 197
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "cand3rdName",
              type: "text",
              placeholder: "Autres Noms",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 198
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "placeOfBirth",
              type: "text",
              placeholder: "Lieu de Naissance",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 199
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "dadName",
              type: "text",
              placeholder: "Noms du pere",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 200
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "momName",
              type: "text",
              placeholder: "Noms de la mere",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 201
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "dateOfBirth",
              format: "d MMM yyyy",
              type: "date",
              placeholder: "Date de Naissance",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 202
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 204
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexSelect"], {
              name: "genderID",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206
              },
              __self: this
            }, "Le Sexe"), genderOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "file",
              type: "file",
              onChange: _this2.uploadFile,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 209
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 210
              },
              __self: this
            }, image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
              src: image,
              alt: "Upload image",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 210
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "email",
              type: "email",
              placeholder: "Email",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 211
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "birthCertNumber",
              type: "text",
              placeholder: "No l'Acte de Naissance",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 212
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
              name: "phoneNumb",
              type: "number",
              placeholder: "No de portable",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 213
              },
              __self: this
            }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["ButtonStyled"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 216
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_formikForms_FormInputs__WEBPACK_IMPORTED_MODULE_7__["StyledButton"], {
              type: "submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 217
              },
              __self: this
            }, "Valid", loading ? 'ation en cours' : 'er'))))));
          });
        });
      });
    }
  }]);

  return CreateNewCandidate;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateNewCandidate);

/***/ })

})
//# sourceMappingURL=newCand.js.6f23d79660eeb486bc0a.hot-update.js.map