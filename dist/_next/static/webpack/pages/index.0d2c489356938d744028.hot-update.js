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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn link-btn",
          children: "English"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this)
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRW1wdHlPckFRSURpc3BsYXkiLCJjaXR5Iiwic3R5bGUiLCJoZWlnaHQiLCJtYXJnaW4iLCJyZW5kZXIiLCJuYW1lIiwiRW1wdHlEaXNwbGF5Iiwic3R5bGVCZyIsImJhY2tncm91bmQiLCJBUUlEaXNwbGF5IiwiYXFpIiwiYXFpX3VuaXQiLCJjaWdnIiwiSG9tZSIsImFydGljbGUiLCJwYXJzZXIiLCJwYXJzZSIsImRhdGFKc29uSW4iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2l0eSIsInNldFNlbGVjdGVkQ2l0eSIsIm9uQ2hhbmdlU2VsZWN0Q2l0eSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsImp1bWJvdHJvblN0eWxlIiwiaW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsIm1pbkhlaWdodCIsInRpdGxlIiwiYXV0aG9yIiwiZGF0ZSIsInBhcmFncmFwaHMiLCJmb250U2l6ZSIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULE9BQW1DO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQ2pDLE1BQU1DLEtBQUssR0FBRztBQUNaQyxVQUFNLEVBQUUsTUFESTtBQUVaQyxVQUFNLEVBQUU7QUFGSSxHQUFkO0FBSUEsTUFBSUMsTUFBSjs7QUFDQSxNQUFJLE9BQU9KLElBQUksQ0FBQ0ssSUFBWixLQUFxQixXQUF6QixFQUFzQztBQUNwQ0QsVUFBTSxnQkFBRyxxRUFBQyxZQUFEO0FBQWMsV0FBSyxFQUFFSDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVQ7QUFDRCxHQUZELE1BRU87QUFDTEcsVUFBTSxnQkFBRyxxRUFBQyxVQUFEO0FBQVksVUFBSSxFQUFFSixJQUFsQjtBQUF3QixXQUFLLEVBQUVDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVDtBQUNEOztBQUNELFNBQU9HLE1BQVA7QUFDRDs7S0FaUUwsaUI7O0FBY1QsU0FBU08sWUFBVCxRQUErQjtBQUFBLE1BQVJMLEtBQVEsU0FBUkEsS0FBUTs7QUFDN0IsTUFBSU0sT0FBTyxtQ0FBT04sS0FBUDtBQUFjTyxjQUFVLEVBQUU7QUFBMUIsSUFBWDs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBaUMsYUFBSyxFQUFFRDtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBaUMsYUFBSyxFQUFFQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O01BVlFELFk7O0FBWVQsU0FBU0csVUFBVCxRQUFtQztBQUFBLE1BQWRULElBQWMsU0FBZEEsSUFBYztBQUFBLE1BQVJDLEtBQVEsU0FBUkEsS0FBUTtBQUNqQyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFrQyxhQUFLLEVBQUVBLEtBQXpDO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLHNCQUErQkQsSUFBSSxDQUFDVTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsc0JBQWtDVixJQUFJLENBQUNXO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBdUIsYUFBSyxFQUFFVixLQUE5QjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBQSxzQkFBMEJELElBQUksQ0FBQ1k7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFZRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUE0QixhQUFLLEVBQUVYLEtBQW5DO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQWtDLGFBQUcsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7TUFyQlFRLFU7QUF1Qk0sU0FBU0ksSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEtBQVAsQ0FBYUMsaURBQWIsQ0FBaEI7O0FBRDZCLGtCQUVXQyxzREFBUSxDQUFDLEVBQUQsQ0FGbkI7QUFBQSxNQUV0QkMsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUc3QixNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLENBQUQsRUFBTztBQUNoQ0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0FILG1CQUFlLENBQUNOLE9BQU8sQ0FBQ1UsSUFBUixDQUFhRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBdEIsQ0FBRCxDQUFmO0FBQ0QsR0FIRDs7QUFJQSxNQUFNQyxjQUFjLEdBQUc7QUFDckJuQixjQUFVLGtCQUFVTSxPQUFPLENBQUNjLEtBQWxCLFFBRFc7QUFFckJDLGtCQUFjLEVBQUUsT0FGSztBQUdyQkMsYUFBUyxFQUFFO0FBSFUsR0FBdkI7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUWhCLE9BQU8sQ0FBQ2lCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSwrQkFDRTtBQUFLLFlBQUUsRUFBQyxTQUFSO0FBQWtCLG1CQUFTLEVBQUMscUJBQTVCO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBNEIsZ0JBQUksRUFBQyxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVJO0FBQUsscUJBQVMsRUFBQyxvQ0FBZjtBQUFvRCxjQUFFLEVBQUMsY0FBdkQ7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsVUFBYjtBQUF3QixrQkFBSSxFQUFDLGdDQUE3QjtBQUE4RCwrQkFBYyxNQUE1RTtBQUFBLHNDQUNFO0FBQ0UseUJBQVMsRUFBQyx3Q0FEWjtBQUVFLG1CQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBcUJFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsTUFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsMkJBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsK0NBQWY7QUFBK0QsaUJBQUssRUFBRUosY0FBdEU7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBQSxxQ0FDRTtBQUFJLHlCQUFTLEVBQUMsMkNBQWQ7QUFBQSwwQkFBMkRiLE9BQU8sQ0FBQ2lCO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyw0QkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxNQUFmO0FBQUEsd0NBQ0U7QUFBSywyQkFBUyxFQUFDLG9CQUFmO0FBQUEsNEJBQXFDakIsT0FBTyxDQUFDa0I7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVFO0FBQUssMkJBQVMsRUFBQyxxQkFBZjtBQUFBLDRCQUFzQ2xCLE9BQU8sQ0FBQ21CO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRixlQU1FO0FBQUEsMEJBQUluQixPQUFPLENBQUNvQixVQUFSLENBQW1CLENBQW5CO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixlQU9FO0FBQUEsMEJBQUlwQixPQUFPLENBQUNvQixVQUFSLENBQW1CLENBQW5CO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRixlQVFFO0FBQUEsMEJBQUlwQixPQUFPLENBQUNvQixVQUFSLENBQW1CLENBQW5CO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRixlQVNFO0FBQUEsMEJBQUlwQixPQUFPLENBQUNvQixVQUFSLENBQW1CLENBQW5CO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFURixlQVVFO0FBQUEsMEJBQUlwQixPQUFPLENBQUNvQixVQUFSLENBQW1CLENBQW5CO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFhRTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsZ0JBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFNLGFBQVg7QUFBQSx5Q0FDRTtBQUFJLDZCQUFTLEVBQUMsWUFBZDtBQUFBLDhCQUNHcEIsT0FBTyxDQUFDb0IsVUFBUixDQUFtQixDQUFuQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBTUU7QUFBSywyQkFBUyxFQUFDLFdBQWY7QUFBQSwwQ0FDRTtBQUFBLDJDQUNFO0FBQUssK0JBQVMsRUFBQyxNQUFmO0FBQUEsOENBQ0E7QUFBTywrQkFBTyxFQUFDLGFBQWY7QUFBNkIsaUNBQVMsRUFBQyxZQUF2QztBQUFvRCw2QkFBSyxFQUFFO0FBQUNDLGtDQUFRLEVBQUU7QUFBWCx5QkFBM0Q7QUFBQSxrQ0FDR3JCLE9BQU8sQ0FBQ29CLFVBQVIsQ0FBbUIsQ0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURBLGVBSUE7QUFDRSxnQ0FBUSxFQUFFYixrQkFEWjtBQUVFLGlDQUFTLEVBQUMsYUFGWjtBQUdFLHNDQUFXLGFBSGI7QUFBQSxnREFJRTtBQUFRLCtCQUFLLEVBQUMsRUFBZDtBQUFpQixrQ0FBUSxNQUF6QjtBQUEwQixrQ0FBUTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUpGLEVBS0dQLE9BQU8sQ0FBQ1UsSUFBUixDQUFhWSxHQUFiLENBQWtCLFVBQUNwQyxJQUFELEVBQU9xQyxLQUFQLEVBQWlCO0FBQ2xDLDhDQUFPO0FBQXdCLGlDQUFLLEVBQUVBLEtBQS9CO0FBQUEsc0NBQXVDckMsSUFBSSxDQUFDSztBQUE1Qyw2QkFBYUwsSUFBSSxDQUFDSyxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFQO0FBQ0QseUJBRkEsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQWlCRSxxRUFBQyxpQkFBRDtBQUFtQix3QkFBSSxFQUFFYztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTkYsZUF5QkU7QUFBSywyQkFBUyxFQUFDLGFBQWY7QUFBNkIsdUJBQUssRUFBRTtBQUFDZ0IsNEJBQVEsRUFBRTtBQUFYLG1CQUFwQztBQUFBLDBDQUNFO0FBQUcsNkJBQVMsRUFBQyxTQUFiO0FBQUEsOEJBQXdCckIsT0FBTyxDQUFDb0IsVUFBUixDQUFtQixDQUFuQjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBRUU7QUFBQSw4QkFBSXBCLE9BQU8sQ0FBQ29CLFVBQVIsQ0FBbUIsQ0FBbkI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLGVBR0U7QUFBQSw4QkFBSXBCLE9BQU8sQ0FBQ29CLFVBQVIsQ0FBbUIsQ0FBbkI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkYsZUFpRkU7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNFO0FBQUEsK0JBQ0U7QUFBUSxtQkFBUyxFQUFDLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5RkQ7O0dBckd1QnJCLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGQyYzQ4OTM1NjkzOGQ3NDQwMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbmltcG9ydCBwYXJzZXIgZnJvbSBcIi4uL3V0aWxzL2RhdGEvcGFyc2VyXCJcbmltcG9ydCBkYXRhSnNvbiBmcm9tIFwiLi4vcHVibGljL2RhdGEvZW4uanNvblwiXG5pbXBvcnQgZGF0YUpzb25JbiBmcm9tIFwiLi4vcHVibGljL2RhdGEvaW4uanNvblwiXG5cbmZ1bmN0aW9uIEVtcHR5T3JBUUlEaXNwbGF5KHtjaXR5fSkge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBoZWlnaHQ6IFwiNzJweFwiLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIlxuICB9XG4gIGxldCByZW5kZXI7XG4gIGlmICh0eXBlb2YgY2l0eS5uYW1lID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVuZGVyID0gPEVtcHR5RGlzcGxheSBzdHlsZT17c3R5bGV9Lz5cbiAgfSBlbHNlIHtcbiAgICByZW5kZXIgPSA8QVFJRGlzcGxheSBjaXR5PXtjaXR5fSBzdHlsZT17c3R5bGV9Lz5cbiAgfVxuICByZXR1cm4gcmVuZGVyO1xufVxuXG5mdW5jdGlvbiBFbXB0eURpc3BsYXkoe3N0eWxlfSkge1xuICBsZXQgc3R5bGVCZyA9IHsuLi5zdHlsZSwgYmFja2dyb3VuZDogXCIjZGRkXCJ9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNSByb3VuZGVkLTNcIiBzdHlsZT17c3R5bGVCZ30+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgcm91bmRlZC0zXCIgc3R5bGU9e3N0eWxlQmd9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gQVFJRGlzcGxheSh7Y2l0eSwgc3R5bGV9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgYm9yZGVyLWVuZFwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtdC0yIG1iLTBcIj57Y2l0eS5hcWl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMSB0ZXh0LWRhbmdlclwiPntjaXR5LmFxaV91bml0fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNVwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtdC0zXCI+e2NpdHkuY2lnZ308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEgcHgtMFwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWgtMTAwXCIgc3JjPVwiaW1nL2NpZ2dyZXR0ZV9pY29uLnBuZ1wiPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGFydGljbGUgPSBwYXJzZXIucGFyc2UoZGF0YUpzb25JbilcbiAgY29uc3QgW3NlbGVjdGVkQ2l0eSwgc2V0U2VsZWN0ZWRDaXR5XSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBvbkNoYW5nZVNlbGVjdENpdHkgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFNlbGVjdGVkQ2l0eShhcnRpY2xlLmRhdGFbZS50YXJnZXQudmFsdWVdKVxuICB9XG4gIGNvbnN0IGp1bWJvdHJvblN0eWxlID0ge1xuICAgIGJhY2tncm91bmQ6IGB1cmwoXCIke2FydGljbGUuaW1hZ2V9XCIpYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIG1pbkhlaWdodDogXCI1MHZ3XCJcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnthcnRpY2xlLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPG5hdiBpZD1cIm1haW5OYXZcIiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPkJCQyBUZXN0PC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1lbmRcIiBpZD1cIm5hdmJhclNjcm9sbFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL2F5dXNoa2FtYWRqaVwiIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIGltZy10aHVtYm5haWwgbWgtMjUgcC0wXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzgyNTUzNTc/cz0zMCZ2PTRcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPiBBeXVzaGthPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJweC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHgtMCBtYi01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1lbmQgYmctbGlnaHQgaC0yNVwiIHN0eWxlPXtqdW1ib3Ryb25TdHlsZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHB5LTZcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItMyBweC1tZC0zIHB4LWxnLTUgZGlzcGxheS01IGZzdC1pdGFsaWNcIj57YXJ0aWNsZS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy03IG1lLWxnLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDYgZnN0LWl0YWxpYyBtYi0wXCI+e2FydGljbGUuYXV0aG9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZ3LWxpZ2h0XCI+e2FydGljbGUuZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzFdfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzNdfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzJdfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzZdfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzhdfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy00IG1zLWxnLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcm91bmRlZC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5wYXJhZ3JhcGhzWzBdfVxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC1jaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIHN0eWxlPXt7Zm9udFNpemU6IFwiMTNweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5wYXJhZ3JhcGhzWzRdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VsZWN0Q2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgQ2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuZGF0YS5tYXAoIChjaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2NpdHkubmFtZX0gdmFsdWU9e2luZGV4fT57Y2l0eS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5T3JBUUlEaXNwbGF5IGNpdHk9e3NlbGVjdGVkQ2l0eX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiIHN0eWxlPXt7Zm9udFNpemU6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj57YXJ0aWNsZS5wYXJhZ3JhcGhzWzVdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUucGFyYWdyYXBoc1s5XX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnBhcmFncmFwaHNbN119PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBsaW5rLWJ0blwiPkVuZ2xpc2g8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==