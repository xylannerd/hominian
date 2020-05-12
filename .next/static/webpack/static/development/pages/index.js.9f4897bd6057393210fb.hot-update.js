webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/colors */ "./constants/colors.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var _assets_images_dot_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/images/dot.png */ "./assets/images/dot.png");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/reducer */ "./store/reducer.js");








var _jsxFileName = "D:\\Desktop\\X\\Websites\\hominian-web\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var store = Object(redux__WEBPACK_IMPORTED_MODULE_16__["createStore"])(_store_reducer__WEBPACK_IMPORTED_MODULE_18__["default"]);

var index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _React$Component);

  var _super = _createSuper(index);

  function index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "readMore", function () {
      _this.setState({
        showMore: true
      });
    });

    _this.state = {
      showMore: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "render",
    value: function render() {
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_17__["Provider"], {
        store: store,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }
      }, __jsx("title", {
        className: "jsx-285224775",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }
      }, "Hominian"), __jsx("link", {
        rel: "icon",
        href: "/h.png",
        className: "jsx-285224775",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }
      })), __jsx(MainContainer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }
      }, __jsx(MainContent, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }
      }, __jsx(LeftPart, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 29
        }
      }, __jsx(Quote, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 33
        }
      }, __jsx(Paragraphs, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 37
        }
      }, __jsx("p", {
        className: "jsx-285224775",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 41
        }
      }, "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every \"superstar,\" every \"supreme leader,\" every saint and sinner in the history of our species lived there-on a mote of dust suspended in a sunbeam.", !this.state.showMore ? __jsx(Toggle, {
        onClick: this.readMore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 63
        }
      }, "more") : undefined), this.state.showMore ? __jsx("div", {
        className: "jsx-285224775",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 66
        }
      }, __jsx("p", {
        className: "jsx-285224775",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 45
        }
      }, "The Earth is a very small stage in a vast cosmic arena. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot."), __jsx("p", {
        className: "jsx-285224775",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 45
        }
      }, "Our posturings, our imagined self-importance, the delusion that we have some privileged position in the Universe, are challenged by this point of pale light. Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves."), __jsx("p", {
        className: "jsx-285224775",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 45
        }
      }, "The Earth is the only world known so far to harbor life. There is nowhere else, at least in the near future, to which our species could migrate. Visit, yes. Settle, not yet. Like it or not, for the moment the Earth is where we make our stand."), __jsx("p", {
        className: "jsx-285224775",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 45
        }
      }, "It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we've ever known.\u201D")) : undefined), __jsx(Author, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 37
        }
      }, "\u2015 Carl Sagan, Pale Blue Dot: A Vision of the Human Future in Space"))), __jsx(RightPart, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 29
        }
      }, __jsx(ImageContainer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 33
        }
      }, __jsx(EarthImage, {
        src: _assets_images_dot_png__WEBPACK_IMPORTED_MODULE_15__["default"],
        alt: "Planet Earth via Voyager 1 at roughly 4 billion miles away from home.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 37
        }
      }), __jsx(ImageDescription, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 37
        }
      }, __jsx(DescTitle, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 41
        }
      }, "Date: 14 February 1990"), __jsx(Desc, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 41
        }
      }, "Taken by Voyager 1 at roughly 4 billion miles (6.4 billion km) away from home.")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "285224775",
        __self: this
      }, "body{margin:0;padding:0;border:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxYXFxXZWJzaXRlc1xcaG9taW5pYW4td2ViXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0d5QixBQUdzQyxTQUNDLFVBQ0QsU0FDYiIsImZpbGUiOiJEOlxcRGVza3RvcFxcWFxcV2Vic2l0ZXNcXGhvbWluaWFuLXdlYlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgQ29sb3JzIGZyb20gJy4uL2NvbnN0YW50cy9jb2xvcnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5cclxuaW1wb3J0IGVhcnRoSW1nIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZG90LnBuZydcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vc3RvcmUvcmVkdWNlcidcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93TW9yZTogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB7fVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVhZE1vcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dNb3JlOiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SG9taW5pYW48L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9oLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRQYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEZpcnN0UGFyYT7igJxXZSBzdWNjZWVkZWQgaW4gdGFraW5nIHRoYXQgcGljdHVyZSwgYW5kLCBpZiB5b3UgbG9vayBhdCBpdCwgeW91IHNlZSBhIGRvdC48L0ZpcnN0UGFyYT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb29rIGFnYWluIGF0IHRoYXQgZG90LiBUaGF0J3MgaGVyZS4gVGhhdCdzIGhvbWUuIFRoYXQncyB1cy4gT24gaXQgZXZlcnlvbmUgeW91IGxvdmUsIGV2ZXJ5b25lIHlvdSBrbm93LCBldmVyeW9uZSB5b3UgZXZlciBoZWFyZCBvZiwgZXZlcnkgaHVtYW4gYmVpbmcgd2hvIGV2ZXIgd2FzLCBsaXZlZCBvdXQgdGhlaXIgbGl2ZXMuIFRoZSBhZ2dyZWdhdGUgb2Ygb3VyIGpveSBhbmQgc3VmZmVyaW5nLCB0aG91c2FuZHMgb2YgY29uZmlkZW50IHJlbGlnaW9ucywgaWRlb2xvZ2llcywgYW5kIGVjb25vbWljIGRvY3RyaW5lcywgZXZlcnkgaHVudGVyIGFuZCBmb3JhZ2VyLCBldmVyeSBoZXJvIGFuZCBjb3dhcmQsIGV2ZXJ5IGNyZWF0b3IgYW5kIGRlc3Ryb3llciBvZiBjaXZpbGl6YXRpb24sIGV2ZXJ5IGtpbmcgYW5kIHBlYXNhbnQsIGV2ZXJ5IHlvdW5nIGNvdXBsZSBpbiBsb3ZlLCBldmVyeSBtb3RoZXIgYW5kIGZhdGhlciwgaG9wZWZ1bCBjaGlsZCwgaW52ZW50b3IgYW5kIGV4cGxvcmVyLCBldmVyeSB0ZWFjaGVyIG9mIG1vcmFscywgZXZlcnkgY29ycnVwdCBwb2xpdGljaWFuLCBldmVyeSBcInN1cGVyc3RhcixcIiBldmVyeSBcInN1cHJlbWUgbGVhZGVyLFwiIGV2ZXJ5IHNhaW50IGFuZCBzaW5uZXIgaW4gdGhlIGhpc3Rvcnkgb2Ygb3VyIHNwZWNpZXMgbGl2ZWQgdGhlcmUtb24gYSBtb3RlIG9mIGR1c3Qgc3VzcGVuZGVkIGluIGEgc3VuYmVhbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghdGhpcy5zdGF0ZS5zaG93TW9yZSkgPyA8VG9nZ2xlIG9uQ2xpY2s9e3RoaXMucmVhZE1vcmV9Pm1vcmU8L1RvZ2dsZT4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnNob3dNb3JlKSA/IDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgRWFydGggaXMgYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEuIFRoaW5rIG9mIHRoZSBlbmRsZXNzIGNydWVsdGllcyB2aXNpdGVkIGJ5IHRoZSBpbmhhYml0YW50cyBvZiBvbmUgY29ybmVyIG9mIHRoaXMgcGl4ZWwgb24gdGhlIHNjYXJjZWx5IGRpc3Rpbmd1aXNoYWJsZSBpbmhhYml0YW50cyBvZiBzb21lIG90aGVyIGNvcm5lciwgaG93IGZyZXF1ZW50IHRoZWlyIG1pc3VuZGVyc3RhbmRpbmdzLCBob3cgZWFnZXIgdGhleSBhcmUgdG8ga2lsbCBvbmUgYW5vdGhlciwgaG93IGZlcnZlbnQgdGhlaXIgaGF0cmVkcy4gVGhpbmsgb2YgdGhlIHJpdmVycyBvZiBibG9vZCBzcGlsbGVkIGJ5IGFsbCB0aG9zZSBnZW5lcmFscyBhbmQgZW1wZXJvcnMgc28gdGhhdCwgaW4gZ2xvcnkgYW5kIHRyaXVtcGgsIHRoZXkgY291bGQgYmVjb21lIHRoZSBtb21lbnRhcnkgbWFzdGVycyBvZiBhIGZyYWN0aW9uIG9mIGEgZG90LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBwb3N0dXJpbmdzLCBvdXIgaW1hZ2luZWQgc2VsZi1pbXBvcnRhbmNlLCB0aGUgZGVsdXNpb24gdGhhdCB3ZSBoYXZlIHNvbWUgcHJpdmlsZWdlZCBwb3NpdGlvbiBpbiB0aGUgVW5pdmVyc2UsIGFyZSBjaGFsbGVuZ2VkIGJ5IHRoaXMgcG9pbnQgb2YgcGFsZSBsaWdodC4gT3VyIHBsYW5ldCBpcyBhIGxvbmVseSBzcGVjayBpbiB0aGUgZ3JlYXQgZW52ZWxvcGluZyBjb3NtaWMgZGFyay4gSW4gb3VyIG9ic2N1cml0eSwgaW4gYWxsIHRoaXMgdmFzdG5lc3MsIHRoZXJlIGlzIG5vIGhpbnQgdGhhdCBoZWxwIHdpbGwgY29tZSBmcm9tIGVsc2V3aGVyZSB0byBzYXZlIHVzIGZyb20gb3Vyc2VsdmVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgRWFydGggaXMgdGhlIG9ubHkgd29ybGQga25vd24gc28gZmFyIHRvIGhhcmJvciBsaWZlLiBUaGVyZSBpcyBub3doZXJlIGVsc2UsIGF0IGxlYXN0IGluIHRoZSBuZWFyIGZ1dHVyZSwgdG8gd2hpY2ggb3VyIHNwZWNpZXMgY291bGQgbWlncmF0ZS4gVmlzaXQsIHllcy4gU2V0dGxlLCBub3QgeWV0LiBMaWtlIGl0IG9yIG5vdCwgZm9yIHRoZSBtb21lbnQgdGhlIEVhcnRoIGlzIHdoZXJlIHdlIG1ha2Ugb3VyIHN0YW5kLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBoYXMgYmVlbiBzYWlkIHRoYXQgYXN0cm9ub215IGlzIGEgaHVtYmxpbmcgYW5kIGNoYXJhY3Rlci1idWlsZGluZyBleHBlcmllbmNlLiBUaGVyZSBpcyBwZXJoYXBzIG5vIGJldHRlciBkZW1vbnN0cmF0aW9uIG9mIHRoZSBmb2xseSBvZiBodW1hbiBjb25jZWl0cyB0aGFuIHRoaXMgZGlzdGFudCBpbWFnZSBvZiBvdXIgdGlueSB3b3JsZC4gVG8gbWUsIGl0IHVuZGVyc2NvcmVzIG91ciByZXNwb25zaWJpbGl0eSB0byBkZWFsIG1vcmUga2luZGx5IHdpdGggb25lIGFub3RoZXIsIGFuZCB0byBwcmVzZXJ2ZSBhbmQgY2hlcmlzaCB0aGUgcGFsZSBibHVlIGRvdCwgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLuKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0aG9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCVIENhcmwgU2FnYW4sIFBhbGUgQmx1ZSBEb3Q6IEEgVmlzaW9uIG9mIHRoZSBIdW1hbiBGdXR1cmUgaW4gU3BhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F1dGhvcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xlZnRQYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0UGFydD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWFydGhJbWFnZSBzcmM9e2VhcnRoSW1nfSBhbHQ9J1BsYW5ldCBFYXJ0aCB2aWEgVm95YWdlciAxIGF0IHJvdWdobHkgNCBiaWxsaW9uIG1pbGVzIGF3YXkgZnJvbSBob21lLicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVzY1RpdGxlPkRhdGU6IDE0IEZlYnJ1YXJ5IDE5OTA8L0Rlc2NUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjPlRha2VuIGJ5IFZveWFnZXIgMSBhdCByb3VnaGx5IDQgYmlsbGlvbiBtaWxlcyAoNi40IGJpbGxpb24ga20pIGF3YXkgZnJvbSBob21lLjwvRGVzYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SaWdodFBhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWFpbkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuXHJcblxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9TdHlsZWQtQ29tcG9uZW50c1xyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbndpZHRoOiAxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuYFxyXG5cclxuY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7ICAgICAgICBcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgTGVmdFBhcnQgPSBzdHlsZWQuZGl2YFxyXG53aWR0aDogNjAlO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbmBcclxuY29uc3QgUmlnaHRQYXJ0ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxud2lkdGg6IDQwJTtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFF1b3RlID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6IDQyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1NHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI3NTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjRweDtcclxuICAgIH1cclxuYFxyXG5jb25zdCBQYXJhZ3JhcGhzID0gc3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOiBncmV5O1xyXG5gXHJcblxyXG5jb25zdCBUb2dnbGUgPSBzdHlsZWQuYWBcclxuICAgIGNvbG9yOiAke0NvbG9ycy5ibHVlU2hhZGV9O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNnM7XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICR7Q29sb3JzLmxpZ2h0Qmx1ZVNoYWRlfTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQXV0aG9yID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbmBcclxuXHJcbmNvbnN0IEZpcnN0UGFyYSA9IHN0eWxlZC5wYFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG5gXHJcblxyXG5jb25zdCBFYXJ0aEltYWdlID0gc3R5bGVkLmltZ2BcclxuaGVpZ2h0OiA1MDBweDtcclxud2lkdGg6IDUwMHB4O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiAgNDAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6ICA0MDBweDtcclxufVxyXG5cclxuYFxyXG5cclxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAxNnB4IDE2cHggNjRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIFxyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXMsIDFzO1xyXG5cclxuICAgIFxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xJSwgLTElKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZURlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNiU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzLCAwLjZzO1xyXG5cclxuICAgJHtJbWFnZUNvbnRhaW5lcn06aG92ZXIgJntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JzLnRyYW5zbHVjZW50V2hpdGV9O1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5gXHJcbmNvbnN0IERlc2NUaXRsZSA9IHN0eWxlZC5wYFxyXG5tYXJnaW4tbGVmdDogNHB4O1xyXG5tYXJnaW4tdG9wOiAxNnB4O1xyXG5tYXJnaW4tYm90dG9tOiAwcHg7XHJcbmBcclxuXHJcbmNvbnN0IERlc2MgPSBzdHlsZWQucGBcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGZvbnQta2VybmluZzogbm9ybWFsO1xyXG5cclxuICAgIFxyXG5cclxuYFxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\X\\\\Websites\\\\hominian-web\\\\pages\\\\index.js */")));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {});

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component); //Styled-Components



var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__MainContainer",
  componentId: "sc-113215w-0"
})(["display:flex;flex-direction:column;width:100%;background-color:white;"]);
var MainContent = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__MainContent",
  componentId: "sc-113215w-1"
})(["display:flex;flex-direction:row;width:100%;min-height:100%;@media (max-width:900px){flex-direction:column-reverse;}"]);
var LeftPart = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__LeftPart",
  componentId: "sc-113215w-2"
})(["width:60%;justify-content:center;@media(max-width:900px){width:100%;display:flex;justify-content:center;}"]);
var RightPart = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__RightPart",
  componentId: "sc-113215w-3"
})(["display:flex;width:40%;flex-direction:column;align-items:center;@media(max-width:900px){width:100%;margin-top:64px;align-items:center;justify-content:center;}"]);
var Quote = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__Quote",
  componentId: "sc-113215w-4"
})(["margin-top:420px;margin-right:54px;margin-left:72px;margin-bottom:128px;line-height:1.275;font-size:20px;@media(max-width:900px){margin-bottom:164px;margin-left:32px;margin-right:32px;margin-top:64px;}"]);
var Paragraphs = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__Paragraphs",
  componentId: "sc-113215w-5"
})(["color:grey;"]);
var Toggle = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].a.withConfig({
  displayName: "pages__Toggle",
  componentId: "sc-113215w-6"
})(["color:", ";margin-left:8px;transition:color 0.6s;&:hover{cursor:pointer;color:", ";}"], _constants_colors__WEBPACK_IMPORTED_MODULE_12__["default"].blueShade, _constants_colors__WEBPACK_IMPORTED_MODULE_12__["default"].lightBlueShade);
var Author = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].p.withConfig({
  displayName: "pages__Author",
  componentId: "sc-113215w-7"
})(["color:black;"]);
var FirstPara = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].p.withConfig({
  displayName: "pages__FirstPara",
  componentId: "sc-113215w-8"
})(["margin-bottom:1px;"]);
var EarthImage = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].img.withConfig({
  displayName: "pages__EarthImage",
  componentId: "sc-113215w-9"
})(["height:500px;width:500px;position:absolute;@media(max-width:900px){height:400px;width:400px;}@media(max-width:1200px){height:400px;width:400px;}"]);
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__ImageContainer",
  componentId: "sc-113215w-10"
})(["height:500px;width:500px;position:relative;border-radius:4px;overflow:hidden;box-shadow:16px 16px 64px 20px rgba(0,0,0,0.2);transition-property:transform,box-shadow;transition-duration:1s,1s;@media(max-width:900px){height:400px;width:400px;}@media(max-width:1200px){height:400px;width:400px;}&:hover{box-shadow:20px 20px 32px 0 rgba(0,0,0,0.3);transform:translate(-1%,-1%);cursor:pointer;}-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]);
var ImageDescription = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__ImageDescription",
  componentId: "sc-113215w-11"
})(["position:absolute;width:100%;height:16%;bottom:0;background-color:transparent;padding-left:10px;padding-bottom:16px;color:transparent;transition-property:color,background-color;transition-duration:0.6s,0.6s;", ":hover &{background-color:", ";color:lightgray;}@media(max-width:900px){font-size:13px;}@media(max-width:1200px){font-size:13px;}"], ImageContainer, _constants_colors__WEBPACK_IMPORTED_MODULE_12__["default"].translucentWhite);
var DescTitle = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].p.withConfig({
  displayName: "pages__DescTitle",
  componentId: "sc-113215w-12"
})(["margin-left:4px;margin-top:16px;margin-bottom:0px;"]);
var Desc = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].p.withConfig({
  displayName: "pages__Desc",
  componentId: "sc-113215w-13"
})(["margin-left:3px;margin-top:8px;margin-right:8px;word-wrap:break-word;font-kerning:normal;"]);

/***/ })

})
//# sourceMappingURL=index.js.9f4897bd6057393210fb.hot-update.js.map