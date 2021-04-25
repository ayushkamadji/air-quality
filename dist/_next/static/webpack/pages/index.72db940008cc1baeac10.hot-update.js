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
    var nextAr = e.target.value === "Hindi" ? articleIn : articleEn;
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
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
            lineNumber: 89,
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
                lineNumber: 92,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: " Ayushka"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
                lineNumber: 106,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
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
                  lineNumber: 114,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "text-muted fw-light",
                  children: article.date
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[1]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[3]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[2]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[6]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: article.paragraphs[8]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
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
                    lineNumber: 127,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
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
                        lineNumber: 134,
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
                          lineNumber: 141,
                          columnNumber: 25
                        }, this), article.data.map(function (city, index) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                            value: index,
                            children: city.name
                          }, city.name, false, {
                            fileName: _jsxFileName,
                            lineNumber: 143,
                            columnNumber: 34
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(EmptyOrAQIDisplay, {
                    city: selectedCity
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
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
                    lineNumber: 151,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    children: article.paragraphs[9]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    children: article.paragraphs[7]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
        className: "bg-dark",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: onChangeLanguage,
          className: "btn d-inline link-btn link-light",
          children: "English"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "text-light",
          children: "|"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: onChangeLanguage,
          className: "btn link-btn link-light",
          children: "Hindi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRW1wdHlPckFRSURpc3BsYXkiLCJjaXR5Iiwic3R5bGUiLCJoZWlnaHQiLCJtYXJnaW4iLCJyZW5kZXIiLCJuYW1lIiwiRW1wdHlEaXNwbGF5Iiwic3R5bGVCZyIsImJhY2tncm91bmQiLCJBUUlEaXNwbGF5IiwiYXFpIiwiYXFpX3VuaXQiLCJjaWdnIiwiSG9tZSIsImFydGljbGVFbiIsInBhcnNlciIsInBhcnNlIiwiZGF0YUpzb24iLCJhcnRpY2xlSW4iLCJkYXRhSnNvbkluIiwidXNlU3RhdGUiLCJzZWxlY3RlZENpdHkiLCJzZXRTZWxlY3RlZENpdHkiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsIm9uQ2hhbmdlU2VsZWN0Q2l0eSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlTGFuZ3VhZ2UiLCJuZXh0QXIiLCJqdW1ib3Ryb25TdHlsZSIsImltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJtaW5IZWlnaHQiLCJ0aXRsZSIsImF1dGhvciIsImRhdGUiLCJwYXJhZ3JhcGhzIiwiZm9udFNpemUiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxpQkFBVCxPQUFtQztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUNqQyxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsVUFBTSxFQUFFLE1BREk7QUFFWkMsVUFBTSxFQUFFO0FBRkksR0FBZDtBQUlBLE1BQUlDLE1BQUo7O0FBQ0EsTUFBSSxPQUFPSixJQUFJLENBQUNLLElBQVosS0FBcUIsV0FBekIsRUFBc0M7QUFDcENELFVBQU0sZ0JBQUcscUVBQUMsWUFBRDtBQUFjLFdBQUssRUFBRUg7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0xHLFVBQU0sZ0JBQUcscUVBQUMsVUFBRDtBQUFZLFVBQUksRUFBRUosSUFBbEI7QUFBd0IsV0FBSyxFQUFFQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVQ7QUFDRDs7QUFDRCxTQUFPRyxNQUFQO0FBQ0Q7O0tBWlFMLGlCOztBQWNULFNBQVNPLFlBQVQsUUFBK0I7QUFBQSxNQUFSTCxLQUFRLFNBQVJBLEtBQVE7O0FBQzdCLE1BQUlNLE9BQU8sbUNBQU9OLEtBQVA7QUFBY08sY0FBVSxFQUFFO0FBQTFCLElBQVg7O0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQWlDLGFBQUssRUFBRUQ7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQWlDLGFBQUssRUFBRUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztNQVZRRCxZOztBQVlULFNBQVNHLFVBQVQsUUFBbUM7QUFBQSxNQUFkVCxJQUFjLFNBQWRBLElBQWM7QUFBQSxNQUFSQyxLQUFRLFNBQVJBLEtBQVE7QUFDakMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBa0MsYUFBSyxFQUFFQSxLQUF6QztBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxzQkFBK0JELElBQUksQ0FBQ1U7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLHNCQUFrQ1YsSUFBSSxDQUFDVztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQXVCLGFBQUssRUFBRVYsS0FBOUI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUEsc0JBQTBCRCxJQUFJLENBQUNZO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBWUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBNEIsYUFBSyxFQUFFWCxLQUFuQztBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFrQyxhQUFHLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O01BckJRUSxVO0FBdUJNLFNBQVNJLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxLQUFQLENBQWFDLGlEQUFiLENBQWxCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSCx5REFBTSxDQUFDQyxLQUFQLENBQWFHLGlEQUFiLENBQWxCOztBQUY2QixrQkFHV0Msc0RBQVEsQ0FBQyxFQUFELENBSG5CO0FBQUEsTUFHdEJDLFlBSHNCO0FBQUEsTUFHUkMsZUFIUTs7QUFBQSxtQkFJQ0Ysc0RBQVEsQ0FBQ04sU0FBRCxDQUpUO0FBQUEsTUFJdEJTLE9BSnNCO0FBQUEsTUFJYkMsVUFKYTs7QUFNN0IsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxDQUFELEVBQU87QUFDaENBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBTCxtQkFBZSxDQUFDQyxPQUFPLENBQUNLLElBQVIsQ0FBYUYsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQXRCLENBQUQsQ0FBZjtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTCxDQUFELEVBQU87QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlLLE1BQU0sR0FBR04sQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVQsS0FBbUIsT0FBbkIsR0FBNkJaLFNBQTdCLEdBQXlDSixTQUF0RDtBQUNBVSxjQUFVLENBQUNRLE1BQUQsQ0FBVjtBQUNELEdBSkQ7O0FBTUEsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCekIsY0FBVSxrQkFBVWUsT0FBTyxDQUFDVyxLQUFsQixRQURXO0FBRXJCQyxrQkFBYyxFQUFFLE9BRks7QUFHckJDLGFBQVMsRUFBRTtBQUhVLEdBQXZCO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFiLE9BQU8sQ0FBQ2M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLCtCQUNFO0FBQUssWUFBRSxFQUFDLFNBQVI7QUFBa0IsbUJBQVMsRUFBQyxxQkFBNUI7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUMsY0FBYjtBQUE0QixnQkFBSSxFQUFDLEdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUk7QUFBSyxxQkFBUyxFQUFDLG9DQUFmO0FBQW9ELGNBQUUsRUFBQyxjQUF2RDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyxVQUFiO0FBQXdCLGtCQUFJLEVBQUMsZ0NBQTdCO0FBQThELCtCQUFjLE1BQTVFO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxFQUFDLHdDQURaO0FBRUUsbUJBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFxQkU7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxNQUFoQjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQywrQ0FBZjtBQUErRCxpQkFBSyxFQUFFSixjQUF0RTtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxzQkFBZjtBQUFBLHFDQUNFO0FBQUkseUJBQVMsRUFBQywyQ0FBZDtBQUFBLDBCQUEyRFYsT0FBTyxDQUFDYztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBQyxvQkFBZjtBQUFBLDRCQUFxQ2QsT0FBTyxDQUFDZTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBSywyQkFBUyxFQUFDLHFCQUFmO0FBQUEsNEJBQXNDZixPQUFPLENBQUNnQjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEYsZUFNRTtBQUFBLDBCQUFJaEIsT0FBTyxDQUFDaUIsVUFBUixDQUFtQixDQUFuQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsZUFPRTtBQUFBLDBCQUFJakIsT0FBTyxDQUFDaUIsVUFBUixDQUFtQixDQUFuQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEYsZUFRRTtBQUFBLDBCQUFJakIsT0FBTyxDQUFDaUIsVUFBUixDQUFtQixDQUFuQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkYsZUFTRTtBQUFBLDBCQUFJakIsT0FBTyxDQUFDaUIsVUFBUixDQUFtQixDQUFuQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVEYsZUFVRTtBQUFBLDBCQUFJakIsT0FBTyxDQUFDaUIsVUFBUixDQUFtQixDQUFuQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBYUU7QUFBSyx1QkFBUyxFQUFDLDRCQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLGdCQUFmO0FBQUEsd0NBQ0U7QUFBSywyQkFBTSxhQUFYO0FBQUEseUNBQ0U7QUFBSSw2QkFBUyxFQUFDLFlBQWQ7QUFBQSw4QkFDR2pCLE9BQU8sQ0FBQ2lCLFVBQVIsQ0FBbUIsQ0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQU1FO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQUEsMENBQ0U7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsTUFBZjtBQUFBLDhDQUNBO0FBQU8sK0JBQU8sRUFBQyxhQUFmO0FBQTZCLGlDQUFTLEVBQUMsWUFBdkM7QUFBb0QsNkJBQUssRUFBRTtBQUFDQyxrQ0FBUSxFQUFFO0FBQVgseUJBQTNEO0FBQUEsa0NBQ0dsQixPQUFPLENBQUNpQixVQUFSLENBQW1CLENBQW5CO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFEQSxlQUlBO0FBQ0UsZ0NBQVEsRUFBRWYsa0JBRFo7QUFFRSxpQ0FBUyxFQUFDLGFBRlo7QUFHRSxzQ0FBVyxhQUhiO0FBQUEsZ0RBSUU7QUFBUSwrQkFBSyxFQUFDLEVBQWQ7QUFBaUIsa0NBQVEsTUFBekI7QUFBMEIsa0NBQVE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FKRixFQUtHRixPQUFPLENBQUNLLElBQVIsQ0FBYWMsR0FBYixDQUFrQixVQUFDMUMsSUFBRCxFQUFPMkMsS0FBUCxFQUFpQjtBQUNsQyw4Q0FBTztBQUF3QixpQ0FBSyxFQUFFQSxLQUEvQjtBQUFBLHNDQUF1QzNDLElBQUksQ0FBQ0s7QUFBNUMsNkJBQWFMLElBQUksQ0FBQ0ssSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBUDtBQUNELHlCQUZBLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFpQkUscUVBQUMsaUJBQUQ7QUFBbUIsd0JBQUksRUFBRWdCO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFORixlQXlCRTtBQUFLLDJCQUFTLEVBQUMsYUFBZjtBQUE2Qix1QkFBSyxFQUFFO0FBQUNvQiw0QkFBUSxFQUFFO0FBQVgsbUJBQXBDO0FBQUEsMENBQ0U7QUFBRyw2QkFBUyxFQUFDLFNBQWI7QUFBQSw4QkFBd0JsQixPQUFPLENBQUNpQixVQUFSLENBQW1CLENBQW5CO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUFBLDhCQUFJakIsT0FBTyxDQUFDaUIsVUFBUixDQUFtQixDQUFuQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkYsZUFHRTtBQUFBLDhCQUFJakIsT0FBTyxDQUFDaUIsVUFBUixDQUFtQixDQUFuQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRixlQWlGRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsNkJBQ0U7QUFBUSxpQkFBUyxFQUFDLFNBQWxCO0FBQUEsZ0NBQ0U7QUFDRSxpQkFBTyxFQUFFVCxnQkFEWDtBQUVFLG1CQUFTLEVBQUMsa0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFNLG1CQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRTtBQUNFLGlCQUFPLEVBQUVBLGdCQURYO0FBRUUsbUJBQVMsRUFBQyx5QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0ZEOztHQXJIdUJsQixJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcyZGI5NDAwMDhjYzFiYWVhYzEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5pbXBvcnQgcGFyc2VyIGZyb20gXCIuLi91dGlscy9kYXRhL3BhcnNlclwiXG5pbXBvcnQgZGF0YUpzb24gZnJvbSBcIi4uL3B1YmxpYy9kYXRhL2VuLmpzb25cIlxuaW1wb3J0IGRhdGFKc29uSW4gZnJvbSBcIi4uL3B1YmxpYy9kYXRhL2luLmpzb25cIlxuXG5mdW5jdGlvbiBFbXB0eU9yQVFJRGlzcGxheSh7Y2l0eX0pIHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgaGVpZ2h0OiBcIjcycHhcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCJcbiAgfVxuICBsZXQgcmVuZGVyO1xuICBpZiAodHlwZW9mIGNpdHkubmFtZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJlbmRlciA9IDxFbXB0eURpc3BsYXkgc3R5bGU9e3N0eWxlfS8+XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyID0gPEFRSURpc3BsYXkgY2l0eT17Y2l0eX0gc3R5bGU9e3N0eWxlfS8+XG4gIH1cbiAgcmV0dXJuIHJlbmRlcjtcbn1cblxuZnVuY3Rpb24gRW1wdHlEaXNwbGF5KHtzdHlsZX0pIHtcbiAgbGV0IHN0eWxlQmcgPSB7Li4uc3R5bGUsIGJhY2tncm91bmQ6IFwiI2RkZFwifVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgcm91bmRlZC0zXCIgc3R5bGU9e3N0eWxlQmd9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IHJvdW5kZWQtM1wiIHN0eWxlPXtzdHlsZUJnfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEFRSURpc3BsYXkoe2NpdHksIHN0eWxlfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGJvcmRlci1lbmRcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDMgbXQtMiBtYi0wXCI+e2NpdHkuYXFpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEgdGV4dC1kYW5nZXJcIj57Y2l0eS5hcWlfdW5pdH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTVcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDMgbXQtM1wiPntjaXR5LmNpZ2d9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xIHB4LTBcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1oLTEwMFwiIHNyYz1cImltZy9jaWdncmV0dGVfaWNvbi5wbmdcIj48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBhcnRpY2xlRW4gPSBwYXJzZXIucGFyc2UoZGF0YUpzb24pXG4gIGNvbnN0IGFydGljbGVJbiA9IHBhcnNlci5wYXJzZShkYXRhSnNvbkluKVxuICBjb25zdCBbc2VsZWN0ZWRDaXR5LCBzZXRTZWxlY3RlZENpdHldID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKGFydGljbGVFbilcblxuICBjb25zdCBvbkNoYW5nZVNlbGVjdENpdHkgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFNlbGVjdGVkQ2l0eShhcnRpY2xlLmRhdGFbZS50YXJnZXQudmFsdWVdKVxuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VMYW5ndWFnZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IG5leHRBciA9IGUudGFyZ2V0LnZhbHVlID09PSBcIkhpbmRpXCIgPyBhcnRpY2xlSW4gOiBhcnRpY2xlRW5cbiAgICBzZXRBcnRpY2xlKG5leHRBcilcbiAgfVxuXG4gIGNvbnN0IGp1bWJvdHJvblN0eWxlID0ge1xuICAgIGJhY2tncm91bmQ6IGB1cmwoXCIke2FydGljbGUuaW1hZ2V9XCIpYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIG1pbkhlaWdodDogXCI1MHZ3XCJcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnthcnRpY2xlLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPG5hdiBpZD1cIm1haW5OYXZcIiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPkJCQyBUZXN0PC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1lbmRcIiBpZD1cIm5hdmJhclNjcm9sbFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL2F5dXNoa2FtYWRqaVwiIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIGltZy10aHVtYm5haWwgbWgtMjUgcC0wXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzgyNTUzNTc/cz0zMCZ2PTRcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPiBBeXVzaGthPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJweC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHgtMCBtYi01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1lbmQgYmctbGlnaHQgaC0yNVwiIHN0eWxlPXtqdW1ib3Ryb25TdHlsZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHB5LTZcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItMyBweC1tZC0zIHB4LWxnLTUgZGlzcGxheS01IGZzdC1pdGFsaWNcIj57YXJ0aWNsZS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy03IG1lLWxnLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDYgZnN0LWl0YWxpYyBtYi0wXCI+e2FydGljbGUuYXV0aG9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZ3LWxpZ2h0XCI+e2FydGljbGUuZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzFdfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzNdfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzJdfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzZdfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5wYXJhZ3JhcGhzWzhdfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy00IG1zLWxnLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcm91bmRlZC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5wYXJhZ3JhcGhzWzBdfVxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC1jaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIHN0eWxlPXt7Zm9udFNpemU6IFwiMTNweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5wYXJhZ3JhcGhzWzRdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VsZWN0Q2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgQ2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuZGF0YS5tYXAoIChjaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2NpdHkubmFtZX0gdmFsdWU9e2luZGV4fT57Y2l0eS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5T3JBUUlEaXNwbGF5IGNpdHk9e3NlbGVjdGVkQ2l0eX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiIHN0eWxlPXt7Zm9udFNpemU6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj57YXJ0aWNsZS5wYXJhZ3JhcGhzWzVdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUucGFyYWdyYXBoc1s5XX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnBhcmFncmFwaHNbN119PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DaGFuZ2VMYW5ndWFnZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBkLWlubGluZSBsaW5rLWJ0biBsaW5rLWxpZ2h0XCI+RW5nbGlzaDwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj58PC9zcGFuPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2hhbmdlTGFuZ3VhZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbGluay1idG4gbGluay1saWdodFwiPkhpbmRpPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=