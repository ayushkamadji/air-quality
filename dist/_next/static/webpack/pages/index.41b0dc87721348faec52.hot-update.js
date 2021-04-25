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

  var article = _utils_data_parser__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_public_data_in_json__WEBPACK_IMPORTED_MODULE_7__);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      selectedCity = _useState[0],
      setSelectedCity = _useState[1];

  var onChangeSelectCity = function onChangeSelectCity(e) {
    e.preventDefault();
    setSelectedCity(article.data[e.target.value]);
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
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
            lineNumber: 79,
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
                lineNumber: 82,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: " Ayushka"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
                lineNumber: 96,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
                  lineNumber: 104,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "text-muted fw-light",
                  children: article.date
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[1]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[3]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[2]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[6]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[8]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col-md-12 col-lg-4 ms-lg-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "card rounded-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  "class": "card-header",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
                    className: "card-title",
                    children: article.paragraphs[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
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
                        lineNumber: 124,
                        columnNumber: 23
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
                        onChange: onChangeSelectCity,
                        className: "form-select",
                        "aria-label": "Select City",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                          value: "",
                          disabled: true,
                          selected: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 131,
                          columnNumber: 25
                        }, this), article.data.map(function (city, index) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                            value: index,
                            children: city.name
                          }, city.name, false, {
                            fileName: _jsxFileName,
                            lineNumber: 133,
                            columnNumber: 34
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(EmptyOrAQIDisplay, {
                    city: selectedCity
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
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
                    lineNumber: 141,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    children: article.paragraphs[9]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    children: article.paragraphs[7]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
        className: "bg-dark",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn d-inline link-btn link-light",
          children: "English"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: "/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn link-btn link-light",
          children: "English"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

_s(Home, "8Trfc8LbktKfs46+H4Qhx+1+ht8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRW1wdHlPckFRSURpc3BsYXkiLCJjaXR5Iiwic3R5bGUiLCJoZWlnaHQiLCJtYXJnaW4iLCJyZW5kZXIiLCJuYW1lIiwiRW1wdHlEaXNwbGF5Iiwic3R5bGVCZyIsImJhY2tncm91bmQiLCJBUUlEaXNwbGF5IiwiYXFpIiwiYXFpX3VuaXQiLCJjaWdnIiwiSG9tZSIsImFydGljbGUiLCJwYXJzZXIiLCJwYXJzZSIsImRhdGFKc29uSW4iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2l0eSIsInNldFNlbGVjdGVkQ2l0eSIsIm9uQ2hhbmdlU2VsZWN0Q2l0eSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsImp1bWJvdHJvblN0eWxlIiwiaW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsIm1pbkhlaWdodCIsInRpdGxlIiwiYXV0aG9yIiwiZGF0ZSIsInBhcmFncmFwaHMiLCJmb250U2l6ZSIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULE9BQW1DO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQ2pDLE1BQU1DLEtBQUssR0FBRztBQUNaQyxVQUFNLEVBQUUsTUFESTtBQUVaQyxVQUFNLEVBQUU7QUFGSSxHQUFkO0FBSUEsTUFBSUMsTUFBSjs7QUFDQSxNQUFJLE9BQU9KLElBQUksQ0FBQ0ssSUFBWixLQUFxQixXQUF6QixFQUFzQztBQUNwQ0QsVUFBTSxnQkFBRyxxRUFBQyxZQUFEO0FBQWMsV0FBSyxFQUFFSDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVQ7QUFDRCxHQUZELE1BRU87QUFDTEcsVUFBTSxnQkFBRyxxRUFBQyxVQUFEO0FBQVksVUFBSSxFQUFFSixJQUFsQjtBQUF3QixX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LDZCQUNFO0FBQVEsaUJBQVMsRUFBQyxTQUFsQjtBQUFBLGdDQUNFO0FBQVEsbUJBQVMsRUFBQyxrQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQVEsbUJBQVMsRUFBQyx5QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJGRDs7R0F2R3VCckIsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MWIwZGM4NzcyMTM0OGZhZWM1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuaW1wb3J0IHBhcnNlciBmcm9tIFwiLi4vdXRpbHMvZGF0YS9wYXJzZXJcIlxuaW1wb3J0IGRhdGFKc29uIGZyb20gXCIuLi9wdWJsaWMvZGF0YS9lbi5qc29uXCJcbmltcG9ydCBkYXRhSnNvbkluIGZyb20gXCIuLi9wdWJsaWMvZGF0YS9pbi5qc29uXCJcblxuZnVuY3Rpb24gRW1wdHlPckFRSURpc3BsYXkoe2NpdHl9KSB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogXCI3MnB4XCIsXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiXG4gIH1cbiAgbGV0IHJlbmRlcjtcbiAgaWYgKHR5cGVvZiBjaXR5Lm5hbWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZW5kZXIgPSA8RW1wdHlEaXNwbGF5IHN0eWxlPXtzdHlsZX0vPlxuICB9IGVsc2Uge1xuICAgIHJlbmRlciA9IDxBUUlEaXNwbGF5IGNpdHk9e2NpdHl9IHN0eWxlPXtzdHlsZX0vPlxuICB9XG4gIHJldHVybiByZW5kZXI7XG59XG5cbmZ1bmN0aW9uIEVtcHR5RGlzcGxheSh7c3R5bGV9KSB7XG4gIGxldCBzdHlsZUJnID0gey4uLnN0eWxlLCBiYWNrZ3JvdW5kOiBcIiNkZGRcIn1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IHJvdW5kZWQtM1wiIHN0eWxlPXtzdHlsZUJnfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNSByb3VuZGVkLTNcIiBzdHlsZT17c3R5bGVCZ30+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBBUUlEaXNwbGF5KHtjaXR5LCBzdHlsZX0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBib3JkZXItZW5kXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzIG10LTIgbWItMFwiPntjaXR5LmFxaX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xIHRleHQtZGFuZ2VyXCI+e2NpdHkuYXFpX3VuaXR9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01XCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzIG10LTNcIj57Y2l0eS5jaWdnfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMSBweC0wXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtaC0xMDBcIiBzcmM9XCJpbWcvY2lnZ3JldHRlX2ljb24ucG5nXCI+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgYXJ0aWNsZSA9IHBhcnNlci5wYXJzZShkYXRhSnNvbkluKVxuICBjb25zdCBbc2VsZWN0ZWRDaXR5LCBzZXRTZWxlY3RlZENpdHldID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IG9uQ2hhbmdlU2VsZWN0Q2l0eSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U2VsZWN0ZWRDaXR5KGFydGljbGUuZGF0YVtlLnRhcmdldC52YWx1ZV0pXG4gIH1cbiAgY29uc3QganVtYm90cm9uU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZDogYHVybChcIiR7YXJ0aWNsZS5pbWFnZX1cIilgLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgbWluSGVpZ2h0OiBcIjUwdndcIlxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2FydGljbGUudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8bmF2IGlkPVwibWFpbk5hdlwiIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+QkJDIFRlc3Q8L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWVuZFwiIGlkPVwibmF2YmFyU2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiaHR0cDovL2dpdGh1Yi5jb20vYXl1c2hrYW1hZGppXCIgYXJpYS1kaXNhYmxlZD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgaW1nLXRodW1ibmFpbCBtaC0yNSBwLTBcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODI1NTM1Nz9zPTMwJnY9NFwiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+IEF5dXNoa2E8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInB4LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBweC0wIG1iLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWVuZCBiZy1saWdodCBoLTI1XCIgc3R5bGU9e2p1bWJvdHJvblN0eWxlfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHktNlwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwYi0zIHB4LW1kLTMgcHgtbGctNSBkaXNwbGF5LTUgZnN0LWl0YWxpY1wiPnthcnRpY2xlLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTcgbWUtbGctM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNiBmc3QtaXRhbGljIG1iLTBcIj57YXJ0aWNsZS5hdXRob3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgZnctbGlnaHRcIj57YXJ0aWNsZS5kYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnBhcmFncmFwaHNbMV19PC9wPlxuICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnBhcmFncmFwaHNbM119PC9wPlxuICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnBhcmFncmFwaHNbMl19PC9wPlxuICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnBhcmFncmFwaHNbNl19PC9wPlxuICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnBhcmFncmFwaHNbOF19PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTQgbXMtbGctM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCByb3VuZGVkLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnBhcmFncmFwaHNbMF19XG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LWNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCIgc3R5bGU9e3tmb250U2l6ZTogXCIxM3B4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnBhcmFncmFwaHNbNF19XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWxlY3RDaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlbGVjdCBDaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5kYXRhLm1hcCggKGNpdHksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17Y2l0eS5uYW1lfSB2YWx1ZT17aW5kZXh9PntjaXR5Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlPckFRSURpc3BsYXkgY2l0eT17c2VsZWN0ZWRDaXR5fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCIgc3R5bGU9e3tmb250U2l6ZTogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctYm9sZFwiPnthcnRpY2xlLnBhcmFncmFwaHNbNV19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzldfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUucGFyYWdyYXBoc1s3XX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmtcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBkLWlubGluZSBsaW5rLWJ0biBsaW5rLWxpZ2h0XCI+RW5nbGlzaDwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuPi88L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbGluay1idG4gbGluay1saWdodFwiPkVuZ2xpc2g8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==