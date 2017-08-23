webpackJsonp([4],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  "data-v-05eb0c84",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionsDetails_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionsDetails_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__questionsDetails_vue__);



new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__questionsDetails_vue___default.a)
}).$mount('#app');

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_js_common_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            faq: {}
        };
    },
    created() {
        this.faq = JSON.parse(sessionStorage.getItem('faqDetails'));
    }
});

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question-detail"
  }, [_c('article', [_c('header', {
    staticClass: "detail-title"
  }, [_c('h1', {
    domProps: {
      "textContent": _vm._s(_vm.faq['key'])
    }
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('section', {
    staticClass: "faq-text"
  }, [_c('p', {
    domProps: {
      "textContent": _vm._s(_vm.faq['value'])
    }
  })])])])
},staticRenderFns: []}

/***/ })

},[27]);