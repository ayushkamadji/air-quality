webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _home_ayushka_projects_sandbox_bbc_test_air_quality_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_data_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/data/parser */ "./utils/data/parser.js");
/* harmony import */ var _utils_data_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_data_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_data_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/data/en.json */ "./public/data/en.json");
var _public_data_en_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/data/en.json */ "./public/data/en.json", 1);
/* harmony import */ var _public_data_in_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/data/in.json */ "./public/data/in.json");
var _public_data_in_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/data/in.json */ "./public/data/in.json", 1);



var _jsxFileName = "/home/ayushka/projects/sandbox/bbc-test/air-quality/pages/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_ayushka_projects_sandbox_bbc_test_air_quality_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function EmptyOrAQIDisplay(_ref) {
  var city = _ref.city;
  var style = {
    height: "72px",
    margin: "0 auto"
  };
  var render;

  if (typeof city.name === "undefined") {
    render = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(EmptyDisplay, {
      style: style
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 14
    }, this);
  } else {
    render = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(AQIDisplay, {
      city: city,
      style: style
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 14
    }, this);
  }

  return render;
}

_c = EmptyOrAQIDisplay;

function EmptyDisplay(_ref2) {
  var style = _ref2.style;

  var styleBg = _objectSpread(_objectSpread({}, style), {}, {
    background: "#ddd"
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "container px-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "col-5 rounded-3",
        style: styleBg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "col-5 rounded-3",
        style: styleBg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_c2 = EmptyDisplay;

function AQIDisplay(_ref3) {
  var city = _ref3.city,
      style = _ref3.style;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "col-6 border-end",
        style: style,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "h3 mt-2 mb-0",
            children: city.aqi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "p-1 text-danger",
            children: city.aqi_unit
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "col-5",
        style: style,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "h3 mt-3",
            children: city.cigg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "col-1 px-0",
        style: style,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          className: "img-fluid mh-100",
          src: "img/ciggrette_icon.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_c3 = AQIDisplay;
function Home() {
  _s();

  var _this = this;

  var articleEn = _utils_data_parser__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_public_data_en_json__WEBPACK_IMPORTED_MODULE_6__);
  var articleIn = _utils_data_parser__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_public_data_in_json__WEBPACK_IMPORTED_MODULE_7__);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      selectedCity = _useState[0],
      setSelectedCity = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(articleEn),
      article = _useState2[0],
      setArticle = _useState2[1];

  var onChangeSelectCity = function onChangeSelectCity(e) {
    e.preventDefault();
    setSelectedCity(article.data[e.target.value]);
  };

  var onChangeLanguage = function onChangeLanguage(e) {
    e.preventDefault();
    console.log(e);
    var nextAr = e.target.value === "hindi" ? articleIn : articleEn;
    setArticle(nextAr);
  };

  var jumbotronStyle = {
    background: "url(\"".concat(article.image, "\")"),
    backgroundSize: "cover",
    minHeight: "50vw"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: article.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "container-fluid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
          id: "mainNav",
          className: "navbar navbar-light",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            className: "navbar-brand",
            href: "#",
            children: "BBC Test"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "d-flex flex-column align-items-end",
            id: "navbarScroll",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              className: "nav-link",
              href: "http://github.com/ayushkamadji",
              "aria-disabled": "true",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: "rounded-circle img-thumbnail mh-25 p-0",
                src: "https://avatars.githubusercontent.com/u/8255357?s=30&v=4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: " Ayushka"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
        className: "px-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "container-fluid px-0 mb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "d-flex flex-row align-items-end bg-light h-25",
            style: jumbotronStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "container-fluid py-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "pb-3 px-md-3 px-lg-5 display-5 fst-italic",
                children: article.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "container py-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col-md-12 col-lg-7 me-lg-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "h6 fst-italic mb-0",
                  children: article.author
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "text-muted fw-light",
                  children: article.date
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[1]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[3]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[2]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[6]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[8]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col-md-12 col-lg-4 ms-lg-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "card rounded-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "card-header",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
                    className: "card-title",
                    children: article.paragraphs[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      className: "mb-3",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
                        htmlFor: "select-city",
                        className: "form-label",
                        style: {
                          fontSize: "13px"
                        },
                        children: article.paragraphs[4]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 23
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
                        onChange: onChangeSelectCity,
                        className: "form-select",
                        "aria-label": "Select City",
                        defaultValue: "",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                          value: "",
                          disabled: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 143,
                          columnNumber: 25
                        }, this), article.data.map(function (city, index) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                            value: index,
                            children: city.name
                          }, city.name, false, {
                            fileName: _jsxFileName,
                            lineNumber: 145,
                            columnNumber: 34
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(EmptyOrAQIDisplay, {
                    city: selectedCity
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "card-footer",
                  style: {
                    fontSize: "10px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    className: "fw-bold",
                    children: article.paragraphs[5]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    children: article.paragraphs[9]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    children: article.paragraphs[7]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
        className: "bg-dark",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: onChangeLanguage,
          value: "english",
          className: "btn d-inline link-btn link-light",
          children: "English"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "text-light",
          children: "|"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: onChangeLanguage,
          value: "hindi",
          className: "btn link-btn link-light",
          children: "Hindi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

_s(Home, "dtMPKcI6IlmGV5bUa5BjKu5WfCY=");

_c4 = Home;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "EmptyOrAQIDisplay");
$RefreshReg$(_c2, "EmptyDisplay");
$RefreshReg$(_c3, "AQIDisplay");
$RefreshReg$(_c4, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRW1wdHlPckFRSURpc3BsYXkiLCJjaXR5Iiwic3R5bGUiLCJoZWlnaHQiLCJtYXJnaW4iLCJyZW5kZXIiLCJuYW1lIiwiRW1wdHlEaXNwbGF5Iiwic3R5bGVCZyIsImJhY2tncm91bmQiLCJBUUlEaXNwbGF5IiwiYXFpIiwiYXFpX3VuaXQiLCJjaWdnIiwiSG9tZSIsImFydGljbGVFbiIsInBhcnNlciIsInBhcnNlIiwiZGF0YUpzb24iLCJhcnRpY2xlSW4iLCJkYXRhSnNvbkluIiwidXNlU3RhdGUiLCJzZWxlY3RlZENpdHkiLCJzZXRTZWxlY3RlZENpdHkiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsIm9uQ2hhbmdlU2VsZWN0Q2l0eSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlTGFuZ3VhZ2UiLCJjb25zb2xlIiwibG9nIiwibmV4dEFyIiwianVtYm90cm9uU3R5bGUiLCJpbWFnZSIsImJhY2tncm91bmRTaXplIiwibWluSGVpZ2h0IiwidGl0bGUiLCJhdXRob3IiLCJkYXRlIiwicGFyYWdyYXBocyIsImZvbnRTaXplIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsT0FBbUM7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDakMsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLFVBQU0sRUFBRSxNQURJO0FBRVpDLFVBQU0sRUFBRTtBQUZJLEdBQWQ7QUFJQSxNQUFJQyxNQUFKOztBQUNBLE1BQUksT0FBT0osSUFBSSxDQUFDSyxJQUFaLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ3BDRCxVQUFNLGdCQUFHLHFFQUFDLFlBQUQ7QUFBYyxXQUFLLEVBQUVIO0FBQXJCO0FBQUE7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L3dlYnBhY2svcGFnZXMvaW5kZXguYTFmM2NlZmJmNjAxZmMwODhiOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbmltcG9ydCBwYXJzZXIgZnJvbSBcIi4uL3V0aWxzL2RhdGEvcGFyc2VyXCJcbmltcG9ydCBkYXRhSnNvbiBmcm9tIFwiLi4vcHVibGljL2RhdGEvZW4uanNvblwiXG5pbXBvcnQgZGF0YUpzb25JbiBmcm9tIFwiLi4vcHVibGljL2RhdGEvaW4uanNvblwiXG5cbmZ1bmN0aW9uIEVtcHR5T3JBUUlEaXNwbGF5KHtjaXR5fSkge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBoZWlnaHQ6IFwiNzJweFwiLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIlxuICB9XG4gIGxldCByZW5kZXI7XG4gIGlmICh0eXBlb2YgY2l0eS5uYW1lID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVuZGVyID0gPEVtcHR5RGlzcGxheSBzdHlsZT17c3R5bGV9Lz5cbiAgfSBlbHNlIHtcbiAgICByZW5kZXIgPSA8QVFJRGlzcGxheSBjaXR5PXtjaXR5fSBzdHlsZT17c3R5bGV9Lz5cbiAgfVxuICByZXR1cm4gcmVuZGVyO1xufVxuXG5mdW5jdGlvbiBFbXB0eURpc3BsYXkoe3N0eWxlfSkge1xuICBsZXQgc3R5bGVCZyA9IHsuLi5zdHlsZSwgYmFja2dyb3VuZDogXCIjZGRkXCJ9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNSByb3VuZGVkLTNcIiBzdHlsZT17c3R5bGVCZ30+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgcm91bmRlZC0zXCIgc3R5bGU9e3N0eWxlQmd9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gQVFJRGlzcGxheSh7Y2l0eSwgc3R5bGV9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgYm9yZGVyLWVuZFwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtdC0yIG1iLTBcIj57Y2l0eS5hcWl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMSB0ZXh0LWRhbmdlclwiPntjaXR5LmFxaV91bml0fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNVwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtdC0zXCI+e2NpdHkuY2lnZ308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEgcHgtMFwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWgtMTAwXCIgc3JjPVwiaW1nL2NpZ2dyZXR0ZV9pY29uLnBuZ1wiPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGFydGljbGVFbiA9IHBhcnNlci5wYXJzZShkYXRhSnNvbilcbiAgY29uc3QgYXJ0aWNsZUluID0gcGFyc2VyLnBhcnNlKGRhdGFKc29uSW4pXG4gIGNvbnN0IFtzZWxlY3RlZENpdHksIHNldFNlbGVjdGVkQ2l0eV0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUoYXJ0aWNsZUVuKVxuXG4gIGNvbnN0IG9uQ2hhbmdlU2VsZWN0Q2l0eSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U2VsZWN0ZWRDaXR5KGFydGljbGUuZGF0YVtlLnRhcmdldC52YWx1ZV0pXG4gIH1cblxuICBjb25zdCBvbkNoYW5nZUxhbmd1YWdlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGxldCBuZXh0QXIgPSBlLnRhcmdldC52YWx1ZSA9PT0gXCJoaW5kaVwiID8gYXJ0aWNsZUluIDogYXJ0aWNsZUVuXG4gICAgc2V0QXJ0aWNsZShuZXh0QXIpXG4gIH1cblxuICBjb25zdCBqdW1ib3Ryb25TdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKFwiJHthcnRpY2xlLmltYWdlfVwiKWAsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICBtaW5IZWlnaHQ6IFwiNTB2d1wiXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YXJ0aWNsZS50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxuYXYgaWQ9XCJtYWluTmF2XCIgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5CQkMgVGVzdDwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtZW5kXCIgaWQ9XCJuYXZiYXJTY3JvbGxcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJodHRwOi8vZ2l0aHViLmNvbS9heXVzaGthbWFkamlcIiBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBpbWctdGh1bWJuYWlsIG1oLTI1IHAtMFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS84MjU1MzU3P3M9MzAmdj00XCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4gQXl1c2hrYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHgtMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHB4LTAgbWItNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtZW5kIGJnLWxpZ2h0IGgtMjVcIiBzdHlsZT17anVtYm90cm9uU3R5bGV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBweS02XCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBiLTMgcHgtbWQtMyBweC1sZy01IGRpc3BsYXktNSBmc3QtaXRhbGljXCI+e2FydGljbGUudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtbGctNyBtZS1sZy0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg2IGZzdC1pdGFsaWMgbWItMFwiPnthcnRpY2xlLmF1dGhvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmdy1saWdodFwiPnthcnRpY2xlLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPHA+e2FydGljbGUucGFyYWdyYXBoc1sxXX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e2FydGljbGUucGFyYWdyYXBoc1szXX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e2FydGljbGUucGFyYWdyYXBoc1syXX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e2FydGljbGUucGFyYWdyYXBoc1s2XX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e2FydGljbGUucGFyYWdyYXBoc1s4XX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtbGctNCBtcy1sZy0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHJvdW5kZWQtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnBhcmFncmFwaHNbMF19XG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LWNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCIgc3R5bGU9e3tmb250U2l6ZTogXCIxM3B4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnBhcmFncmFwaHNbNF19XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWxlY3RDaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlbGVjdCBDaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuZGF0YS5tYXAoIChjaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2NpdHkubmFtZX0gdmFsdWU9e2luZGV4fT57Y2l0eS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5T3JBUUlEaXNwbGF5IGNpdHk9e3NlbGVjdGVkQ2l0eX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiIHN0eWxlPXt7Zm9udFNpemU6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj57YXJ0aWNsZS5wYXJhZ3JhcGhzWzVdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUucGFyYWdyYXBoc1s5XX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnBhcmFncmFwaHNbN119PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DaGFuZ2VMYW5ndWFnZX1cbiAgICAgICAgICAgIHZhbHVlPVwiZW5nbGlzaFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZC1pbmxpbmUgbGluay1idG4gbGluay1saWdodFwiPkVuZ2xpc2g8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+fDwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNoYW5nZUxhbmd1YWdlfVxuICAgICAgICAgICAgdmFsdWU9XCJoaW5kaVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbGluay1idG4gbGluay1saWdodFwiPkhpbmRpPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=