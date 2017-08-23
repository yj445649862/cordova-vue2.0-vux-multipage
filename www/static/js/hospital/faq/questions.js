webpackJsonp([3],{

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "questions"
  }, [_c('div', {
    staticClass: "faq-title  icon_faq",
    staticStyle: {
      "margin-top": "0"
    }
  }, [_vm._v("预约挂号相关问题")]), _vm._v(" "), _c('group', _vm._l((_vm.yuyue), function(item, index) {
    return _c('cell', {
      key: index,
      attrs: {
        "title": (index + 1) + '.' + item['key'],
        "is-link": ""
      },
      nativeOn: {
        "click": function($event) {
          _vm.toFaqDetails(item)
        }
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "faq-title icon_wenzhen"
  }, [_vm._v("在线问诊相关问题")]), _vm._v(" "), _c('group', _vm._l((_vm.onlineInquiry), function(item, index) {
    return _c('cell', {
      key: index,
      attrs: {
        "title": (index + 1) + '.' + item['key'],
        "is-link": ""
      },
      nativeOn: {
        "click": function($event) {
          _vm.toFaqDetails(item)
        }
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "faq-title icon_zixun"
  }, [_vm._v("免费咨询相关问题")]), _vm._v(" "), _c('group', _vm._l((_vm.freeInquiry), function(item, index) {
    return _c('cell', {
      key: index,
      attrs: {
        "title": (index + 1) + '.' + item['key'],
        "is-link": ""
      },
      nativeOn: {
        "click": function($event) {
          _vm.toFaqDetails(item)
        }
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "btn-yijian",
    on: {
      "click": _vm.tofeedback
    }
  }, [_c('i', {
    staticClass: "icon_faq-yijian"
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "display": "inline-block"
    }
  }, [_vm._v("意见反馈")])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports = {"yuyue":[{"key":"网上预约和现场挂号有什么区别？","value":"网上预约可帮您提前安排看病时间，方便您到医院通过绿色通道取号就诊，避免您到医院排队挂号时间过长或者挂不上号。"},{"key":"预约挂号什么时间更新？","value":"排班每周一早9:00更新，排班时有变动最终以实际排班为准。"},{"key":"未成年如何预约？","value":"如果未成年已经落户，可以使用户口本上的身份证号码进行预约；如果未成年没有落户，可以使用出生证编号进行预约。"}],"onlineInquiry":[{"key":"如何进行在线问诊？","value":"您可以在爱尔眼科互联网医院首页点击“在线门诊”，通过图片和文字形式描述病情，选择合适您的专家进行问诊。"},{"key":"如果在问诊咨询中遇到问题，应该如何获取帮助？","value":"您可拨打客服热线400-6303-120咨询获取帮助。"},{"key":"提交问诊后，医生多久会回复？","value":"您下单后，医生会在4小时内确认接诊，问诊时长为24小时。"}],"freeInquiry":[{"key":"什么是免费咨询？","value":"您可以随时、随地免费咨询疾病相关问题，值班医助会快速、专业为您解答疑问。"},{"key":"免费咨询是24小时提供服务的吗？","value":"医助值班时间为：8：30-23:00。"}]}

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vux-label-desc"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.title) ? _c('div', {
    staticClass: "weui-cells__title",
    style: ({
      color: _vm.titleColor
    }),
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("title"), _vm._v(" "), _c('div', {
    staticClass: "weui-cells",
    class: {
      'vux-no-group-title': !_vm.title
    },
    style: ({
      marginTop: typeof _vm.gutter === 'number' ? (_vm.gutter + 'px') : _vm.gutter
    })
  }, [_vm._t("after-title"), _vm._v(" "), _vm._t("default")], 2)], 2)
},staticRenderFns: []}

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell",
    class: {
      'vux-tap-active': _vm.isLink || !!_vm.link,
        'weui-cell_access': _vm.isLink || !!_vm.link,
        'vux-cell-no-border-intent': !_vm.borderIntent,
        'vux-cell-disabled': _vm.disabled
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_vm._t("icon")], 2), _vm._v(" "), _c('div', {
    staticClass: "vux-cell-bd",
    class: {
      'vux-cell-primary': _vm.primary === 'title' && _vm.valueAlign !== 'left'
    }
  }, [_c('p', [(_vm.title || _vm.hasTitleSlot) ? _c('label', {
    staticClass: "vux-label",
    class: _vm.labelClass,
    style: (_vm.getLabelStyles())
  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _vm._v(" "), _vm._t("after-title")], 2), _vm._v(" "), _c('inline-desc', [_vm._t("inline-desc", [_vm._v(_vm._s(_vm.inlineDesc))])], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft",
    class: _vm.valueClass
  }, [_vm._t("value"), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.value))]), _vm._v(" "), (_vm.isLoading) ? _c('i', {
    staticClass: "weui-loading"
  }) : _vm._e()], 2), _vm._v(" "), _vm._t("child")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  "data-v-357a5e1f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questions_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__questions_vue__);



new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__questions_vue___default.a)
}).$mount('#app');

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inline_desc__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inline_desc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__inline_desc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__props__ = __webpack_require__(7);
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
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'cell',
  components: {
    InlineDesc: __WEBPACK_IMPORTED_MODULE_0__inline_desc___default.a
  },
  props: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */])(),
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
  },
  computed: {
    valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    getLabelStyles() {
      return {
        width: this.$parent.labelWidth || this.$parent.$parent.labelWidth,
        textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
      };
    },
    onClick() {
      !this.disabled && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_router__["a" /* go */])(this.link, this.$router);
    }
  },
  data() {
    return {
      hasTitleSlot: false
    };
  }
});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__faq_json__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__faq_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__faq_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_cell_index_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_cell_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_src_components_cell_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_js_common_js__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["default"] = ({
  components: { Group: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default.a, Cell: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_cell_index_vue___default.a },
  data() {
    return {
      yueyue: [],
      onlineInquiry: [],
      freeInquiry: []
    };
  },
  created() {
    this.yuyue = __WEBPACK_IMPORTED_MODULE_0__faq_json___default.a['yuyue'];
    this.onlineInquiry = __WEBPACK_IMPORTED_MODULE_0__faq_json___default.a['onlineInquiry'];
    this.freeInquiry = __WEBPACK_IMPORTED_MODULE_0__faq_json___default.a['freeInquiry'];
  },
  methods: {
    toFaqDetails(item) {
      sessionStorage.setItem("faqDetails", JSON.stringify(item));
      location.href = '../faq/questionsDetails.html';
    },
    tofeedback() {}
  }
});

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  name: 'group',
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number]
  }
});

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'inline-desc'
});

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return {
    title: [String, Number],
    value: [String, Number, Array],
    isLink: Boolean,
    isLoading: Boolean,
    inlineDesc: [String, Number],
    primary: {
      type: String,
      default: 'title'
    },
    link: [String, Object],
    valueAlign: [String, Boolean, Number],
    borderIntent: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    arrowDirection: String // down or up
  };
});

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[28]);