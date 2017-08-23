webpackJsonp([2],{

/***/ 101:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-swiper-item"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homepage"
  }, [_c('div', {
    staticClass: "banner"
  }, [_c('swiper', {
    attrs: {
      "auto": "",
      "duration": 1000,
      "interval": 3000,
      "aspect-ratio": 160 / 375,
      "loop": true
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('swiper-item', {
      key: index,
      staticClass: "swiper-demo-img"
    }, [_c('img', {
      attrs: {
        "src": item
      }
    })])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "appointmentWrap",
    on: {
      "click": function($event) {
        _vm.jumpTo('/hospital/appointment')
      }
    }
  }, [_vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "inquiry"
  }, [_c('div', {
    staticClass: "online",
    on: {
      "click": function($event) {
        _vm.jumpTo('/hospital/onlineInquiry/doctorList')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(80)
    }
  }), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('div', {
    staticClass: "free",
    on: {
      "click": function($event) {
        _vm.jumpTo('/hospital/inquiry/inquiryForm')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(74)
    }
  }), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('ul', {
    staticClass: "nav"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.jumpTo('/hospital/appointment')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(84)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "blue"
  }, [_vm._v("预约挂号")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.jumpToCms('/hospital/cmsSystem/')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(18)
    }
  }), _vm._v(" "), _c('span', [_vm._v("健康资讯")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.jumpTo('../users/index.html')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(75)
    }
  }), _vm._v(" "), _c('span', [_vm._v("个人中心")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "appointment"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(77)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "introd"
  }, [_c('strong', {
    staticClass: "font"
  }, [_vm._v("预约挂号")]), _vm._v(" "), _c('p', {
    staticClass: "tips"
  }, [_vm._v("快速在线挂号，省去排队烦恼")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "introd"
  }, [_c('strong', {
    staticClass: "font"
  }, [_vm._v("在线问诊")]), _vm._v(" "), _c('p', {
    staticClass: "tips top-10"
  }, [_vm._v("专业眼科医生在线答疑")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "introd"
  }, [_c('strong', {
    staticClass: "font"
  }, [_vm._v("免费咨询")]), _vm._v(" "), _c('p', {
    staticClass: "tips top-10"
  }, [_vm._v("爱尔眼科医生快速解答")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "advertise"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(82)
    }
  })])
}]}

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAA3lBMVEUAAACtra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra3////c3Nz39/f8/Pz6+vrGxsa+vr6vr6/y8vLl5eXg4ODKysq1tbWysrLCwsLX19fOzs64uLjp6enU1NTR0dG7u7uxsbHi4uLu7u7t7e3s7OyD5jFOAAAALnRSTlMABPrzUNE49uymJW3Ffiwd5dq/mldM6ayThT8vFAufRzQIurFjW+HMtg3cjHN6pfKn3gAAA01JREFUSMfNVWtjqjAMLaiggCKKOt/OqXv3+lZ087np/P9/6CYtUJi4Xb/d80GhyWlzkjSQS6gbaodciyal91eT4pQm/guSdB0J/bVesnANSUrRG/JCqRz/d5J0B/5Ei0WzCpEpr+copXlClGhWrUfT0ZwUJqGahKfumcOteZGDyCCrQH7Hg+BwVkrYtM7zg5WNqUUrl9dboiKm4DBWT3VVSc18kYYQK9mPrq1N89J5hc1ylkYglq+6OskZzLzMnSb7/vY4GxxPzu79ky/dtUgUHssqWqeL+fBPENv1ktFSZkQHsMA2/RHzHM3348XepQ8PExakLn07poHLS8fdffVGGZZ97zhGy4UOy1gY2MqNa/ROfYy9WB3cJ9jbcRXVzzwVyHlb9/sLTMLCWx0tKODV4+j4tvKV99GVSRsgfe4bDrCJV6k0brz1TcMlBOU9A+tDJHK2weRLLmczC6QY1A18NzAKG6jlLIXCZuDkYyUOAkDWnIBxOAZ3ndxwjsCa0p14W/hqBcsg0J7rUAfsQgvg49ZKpClGsN0OodWQ9iVLn8AXlEslcJXCYQ+CaXYgK6OA8YQltkgCSVyFqO1y5u77idUVOEzRuU1KECO2i9hvBpZPbNzBCp7eBiG5FOTcYJkMPG1z8m0Ob9YluylC0WCC3fdEaYdUQFjtAe17/x7NMXLO3IoEYRMlWvCjEQmaNU7SMh528Cu/2yDlY+UHfZqwi1jvUJolBEWVYGRa7J4Hgvk6CjVfY7QmbUIMkMTnr2zCzCjL/OqCaxhDZ8Lvew0GK/zjtJB6nEy0EmV47x8Dje2MpxRhKISHde9dJ1kjiGpK5rzpx3i9368XEy8juSbaWXfbfJhlsV4cZvqJnqF4k+FWKQH5c6eLzdrdQzXdjgmCbDxX/CFUhoVKYLDLChGQtIL+Wn5O6/HMbfiTRRviWwQBJjXyI/iHzHoU7xUZavYLq5WE3gFxAl2snfITp4kfzGZ4TUfRLxcpUhnt9vdlW8ZyZC7IucdZLs4RurK4WT5CWSZFAVaVRKBWYoW5s0Ofrnq3TRGNOolGgbeDmkt3FbNW05Ru2eCNlaiQy3o7Fo1AwpbIT5Aqjdj3zlPI75BaLw2jqEK6ikZDj5L/F+S+9XhcOst2AAAAAElFTkSuQmCC"

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  "data-v-ac4a3830",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_vue__);



new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__index_vue___default.a)
}).$mount('#app');

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'swiper-item',
  mounted() {
    this.$nextTick(() => {
      this.$parent.rerender();
    });
  },
  beforeDestroy() {
    const $parent = this.$parent;
    this.$nextTick(() => {
      $parent.rerender();
    });
  }
});

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swiper_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_router__ = __webpack_require__(8);
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
  name: 'swiper',
  created() {
    this.index = this.value || 0;
    if (this.index) {
      this.current = this.index;
    }
  },
  mounted() {
    this.hasTwoLoopItem();
    this.$nextTick(() => {
      if (!(this.list && this.list.length === 0)) {
        this.render(this.index);
      }
      this.xheight = this.getHeight();
    });
  },
  methods: {
    hasTwoLoopItem() {
      if (this.list.length === 2 && this.loop) {
        this.listTwoLoopItem = this.list;
      } else {
        this.listTwoLoopItem = [];
      }
    },
    clickListItem(item) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_router__["a" /* go */])(item.url, this.$router);
      this.$emit('on-click-list-item', JSON.parse(JSON.stringify(item)));
    },
    buildBackgroundUrl(url) {
      return `url(${url})`;
    },
    render(index = 0) {
      this.swiper && this.swiper.destroy();
      this.swiper = new __WEBPACK_IMPORTED_MODULE_0__swiper_js__["a" /* default */]({
        container: this.$el,
        direction: this.direction,
        auto: this.auto,
        loop: this.loop,
        interval: this.interval,
        threshold: this.threshold,
        duration: this.duration,
        height: this.height || this._height,
        minMovingDistance: this.minMovingDistance,
        imgList: this.imgList
      }).on('swiped', (prev, index) => {
        this.current = index % this.length;
        this.index = index % this.length;
      });
      if (index > 0) {
        this.swiper.go(index);
      }
    },
    rerender() {
      if (!this.$el || this.hasRender) {
        return;
      }
      this.hasRender = true;
      this.hasTwoLoopItem();
      this.$nextTick(() => {
        this.index = this.value || 0;
        this.current = this.value || 0;
        this.length = this.list.length || this.$children.length;
        this.destroy();
        this.render(this.value);
      });
    },
    destroy() {
      this.hasRender = false;
      this.swiper && this.swiper.destroy();
    },
    getHeight() {
      // when list.length > 0, it's better to set height or ratio
      const hasHeight = parseInt(this.height, 10);
      if (hasHeight) return this.height;
      if (!hasHeight) {
        if (this.aspectRatio) {
          return this.$el.offsetWidth * this.aspectRatio + 'px';
        }
        return '180px';
      }
    }
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showDescMask: {
      type: Boolean,
      default: true
    },
    dotsPosition: {
      type: String,
      default: 'right'
    },
    dotsClass: String,
    auto: {
      type: Boolean,
      default: false
    },
    loop: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    threshold: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 300
    },
    height: {
      type: String,
      default: 'auto'
    },
    aspectRatio: Number,
    minMovingDistance: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hasRender: false,
      current: this.index || 0,
      xheight: 'auto',
      length: this.list.length,
      index: 0,
      // issue #1484 Fix click to fail
      listTwoLoopItem: []
    };
  },
  watch: {
    list(val) {
      this.rerender();
    },
    current(currentIndex) {
      this.index = currentIndex;
      this.$emit('on-index-change', currentIndex);
    },
    index(val) {
      const _this = this;
      if (val !== this.current) {
        this.$nextTick(() => {
          _this.swiper && _this.swiper.go(val);
        });
      }
      this.$emit('input', val);
    },
    value(val) {
      this.index = val;
    }
  },
  beforeDestroy() {
    this.destroy();
  }
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_swiper_swiper_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_swiper_swiper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vux_src_components_swiper_swiper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_swiper_swiper_item_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_swiper_swiper_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_swiper_swiper_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_images_banner01_png__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_images_banner01_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_images_banner01_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_images_banner02_png__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_images_banner02_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_images_banner02_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_images_banner03_png__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_images_banner03_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_images_banner03_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_assets_js_common_js__ = __webpack_require__(3);








/* harmony default export */ __webpack_exports__["default"] = ({
  components: { Swiper: __WEBPACK_IMPORTED_MODULE_0_vux_src_components_swiper_swiper_vue___default.a, SwiperItem: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_swiper_swiper_item_vue___default.a },
  data() {
    return {
      list: [__WEBPACK_IMPORTED_MODULE_2_images_banner01_png___default.a, __WEBPACK_IMPORTED_MODULE_3_images_banner02_png___default.a, __WEBPACK_IMPORTED_MODULE_4_images_banner03_png___default.a]
    };
  },
  methods: {
    jumpTo(url) {
      location.href = url;
    },
    jumpToCms() {
      var hospitalId = JSON.parse(localStorage.getItem('hospitalInfo')).hospitalId;
      this.$router.push({ path: '/hospital/cms/cmsList/' + hospitalId });
    }
  }
});

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);

const arrayFrom = nodeList => Array.prototype.slice.call(nodeList);

class Swiper {
  constructor(options) {
    this._default = {
      container: '.vux-swiper',
      item: '.vux-swiper-item',
      direction: 'vertical',
      activeClass: 'active',
      threshold: 50,
      duration: 300,
      auto: false,
      loop: false,
      interval: 3000,
      height: 'auto',
      minMovingDistance: 0
    };
    this._options = __WEBPACK_IMPORTED_MODULE_0_object_assign___default()(this._default, options);
    this._options.height = this._options.height.replace('px', '');
    this._start = {};
    this._move = {};
    this._end = {};
    this._eventHandlers = {};
    this._prev = this._current = this._goto = 0;
    this._width = this._height = this._distance = 0;
    this._offset = [];
    this.$box = this._options.container;
    this.$container = this._options.container.querySelector('.vux-swiper');
    this.$items = this.$container.querySelectorAll(this._options.item);
    this.count = this.$items.length;
    this.realCount = this.$items.length; // real items length
    this._position = []; // used by go event
    this._firstItemIndex = 0;
    if (!this.count) {
      return;
    }
    this._init();
    this._auto();
    this._bind();
    this._onResize();
    return this;
  }

  _auto() {
    const me = this;
    me.stop();
    if (me._options.auto) {
      me.timer = setTimeout(() => {
        me.next();
      }, me._options.interval);
    }
  }

  updateItemWidth() {
    this._width = this.$box.offsetWidth || document.documentElement.offsetWidth;
    this._distance = this._options.direction === 'horizontal' ? this._width : this._height;
  }

  stop() {
    this.timer && clearTimeout(this.timer);
  }

  _loop() {
    return this._options.loop && this.realCount >= 3;
  }

  _onResize() {
    const me = this;
    this.resizeHandler = () => {
      setTimeout(() => {
        me.updateItemWidth();
        me._setOffset();
        me._setTransform();
      }, 100);
    };
    window.addEventListener('orientationchange', this.resizeHandler, false);
  }

  _init() {
    this._height = this._options.height === 'auto' ? 'auto' : this._options.height - 0;
    this.updateItemWidth();
    this._initPosition();
    this._activate(this._current);
    this._setOffset();
    this._setTransform();
    if (this._loop()) {
      this._loopRender();
    }
  }

  _initPosition() {
    for (let i = 0; i < this.realCount; i++) {
      this._position.push(i);
    }
  }

  _movePosition(position) {
    const me = this;
    if (position > 0) {
      let firstIndex = me._position.splice(0, 1);
      me._position.push(firstIndex[0]);
    } else if (position < 0) {
      let lastIndex = me._position.pop();
      me._position.unshift(lastIndex);
    }
  }

  _setOffset() {
    let me = this;
    let index = me._position.indexOf(me._current);
    me._offset = [];
    arrayFrom(me.$items).forEach(function ($item, key) {
      me._offset.push((key - index) * me._distance);
    });
  }

  _setTransition(duration) {
    duration = duration || this._options.duration || 'none';
    let transition = duration === 'none' ? 'none' : duration + 'ms';
    arrayFrom(this.$items).forEach(function ($item, key) {
      $item.style.webkitTransition = transition;
      $item.style.transition = transition;
    });
  }

  _setTransform(offset) {
    const me = this;
    offset = offset || 0;
    arrayFrom(me.$items).forEach(function ($item, key) {
      let distance = me._offset[key] + offset;
      let transform = `translate3d(${distance}px, 0, 0)`;
      if (me._options.direction === 'vertical') {
        transform = `translate3d(0, ${distance}px, 0)`;
      }
      $item.style.webkitTransform = transform;
      $item.style.transform = transform;
    });
  }

  _bind() {
    const me = this;
    me.touchstartHandler = e => {
      me.stop();
      me._start.x = e.changedTouches[0].pageX;
      me._start.y = e.changedTouches[0].pageY;
      me._setTransition('none');
    };
    me.touchmoveHandler = e => {
      me._move.x = e.changedTouches[0].pageX;
      me._move.y = e.changedTouches[0].pageY;
      let distanceX = me._move.x - me._start.x;
      let distanceY = me._move.y - me._start.y;
      let distance = distanceY;
      let noScrollerY = Math.abs(distanceX) > Math.abs(distanceY);
      if (me._options.direction === 'horizontal' && noScrollerY) {
        distance = distanceX;
      }
      if ((me._options.minMovingDistance && Math.abs(distance) >= me._options.minMovingDistance || !me._options.minMovingDistance) && noScrollerY) {
        me._setTransform(distance);
      }

      noScrollerY && e.preventDefault();
    };

    me.touchendHandler = e => {
      me._end.x = e.changedTouches[0].pageX;
      me._end.y = e.changedTouches[0].pageY;

      let distance = me._end.y - me._start.y;
      if (me._options.direction === 'horizontal') {
        distance = me._end.x - me._start.x;
      }

      distance = me.getDistance(distance);
      if (distance !== 0 && me._options.minMovingDistance && Math.abs(distance) < me._options.minMovingDistance) {
        return;
      }
      if (distance > me._options.threshold) {
        me.move(-1);
      } else if (distance < -me._options.threshold) {
        me.move(1);
      } else {
        me.move(0);
      }

      me._loopRender();
    };

    me.transitionEndHandler = e => {
      me._activate(me._current);
      let cb = me._eventHandlers.swiped;
      cb && cb.apply(me, [me._prev % me.count, me._current % me.count]);
      me._auto();
      me._loopRender();
      e.preventDefault();
    };
    me.$container.addEventListener('touchstart', me.touchstartHandler, false);
    me.$container.addEventListener('touchmove', me.touchmoveHandler, false);
    me.$container.addEventListener('touchend', me.touchendHandler, false);
    me.$items[1] && me.$items[1].addEventListener('webkitTransitionEnd', me.transitionEndHandler, false);
  }

  _loopRender() {
    const me = this;
    if (me._loop()) {
      // issue #507 (delete cloneNode)
      if (me._offset[me._offset.length - 1] === 0) {
        me.$container.appendChild(me.$items[0]);
        me._loopEvent(1);
      } else if (me._offset[0] === 0) {
        me.$container.insertBefore(me.$items[me.$items.length - 1], me.$container.firstChild);
        me._loopEvent(-1);
      }
    }
  }

  _loopEvent(num) {
    const me = this;
    me._itemDestoy();
    me.$items = me.$container.querySelectorAll(me._options.item);
    me.$items[1] && me.$items[1].addEventListener('webkitTransitionEnd', me.transitionEndHandler, false);
    me._movePosition(num);
    me._setOffset();
    me._setTransform();
  }

  getDistance(distance) {
    if (this._loop()) {
      return distance;
    } else {
      if (distance > 0 && this._current === 0) {
        return 0;
      } else if (distance < 0 && this._current === this.realCount - 1) {
        return 0;
      } else {
        return distance;
      }
    }
  }

  _moveIndex(num) {
    if (num !== 0) {
      this._prev = this._current;
      this._current += this.realCount;
      this._current += num;
      this._current %= this.realCount;
    }
  }

  _activate(index) {
    let clazz = this._options.activeClass;
    Array.prototype.forEach.call(this.$items, ($item, key) => {
      $item.classList.remove(clazz);
      if (index === Number($item.dataset.index)) {
        $item.classList.add(clazz);
      }
    });
  }

  go(index) {
    const me = this;
    me.stop();

    index = index || 0;
    index += this.realCount;
    index = index % this.realCount;
    index = this._position.indexOf(index) - this._position.indexOf(this._current);

    me._moveIndex(index);
    me._setOffset();
    me._setTransition();
    me._setTransform();
    me._auto();
    return this;
  }

  next() {
    this.move(1);
    return this;
  }

  move(num) {
    this.go(this._current + num);
    return this;
  }

  on(event, callback) {
    if (this._eventHandlers[event]) {
      console.error(`[swiper] event ${event} is already register`);
    }
    if (typeof callback !== 'function') {
      console.error('[swiper] parameter callback must be a function');
    }
    this._eventHandlers[event] = callback;
    return this;
  }

  _itemDestoy() {
    this.$items.length && arrayFrom(this.$items).forEach(item => {
      item.removeEventListener('webkitTransitionEnd', this.transitionEndHandler, false);
    });
  }

  destroy() {
    this.stop();
    this._current = 0;
    this._setTransform(0);
    window.removeEventListener('orientationchange', this.resizeHandler, false);
    this.$container.removeEventListener('touchstart', this.touchstartHandler, false);
    this.$container.removeEventListener('touchmove', this.touchmoveHandler, false);
    this.$container.removeEventListener('touchend', this.touchendHandler, false);
    this._itemDestoy();
    // remove clone item (used by loop only 2)
    if (this._options.loop && this.count === 2) {
      let $item = this.$container.querySelector(`${this._options.item}-clone`);
      $item && this.$container.removeChild($item);
      $item = this.$container.querySelector(`${this._options.item}-clone`);
      $item && this.$container.removeChild($item);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Swiper);

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/banner01.png";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/banner02.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/banner03.png";

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAMAAABkkgs4AAAAw1BMVEUAAACtra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra3///+tra36+vry8vLOzs6ysrL9/f3t7e3R0dHf39/AwMDZ2dnU1NT09PTj4+PExMS7u7u2trbv7+/p6en29vbo6OjKysrIyMjCwsK4uLgYMTVcAAAAJ3RSTlMACNQiFc5V/OTewrlrZTwNBPPb17OsmUoR+Omgj3gbx35cKMhEMTDWoo+PAAAB5klEQVRIx4XV2XKbMBhAYfCGwfvuxHGbdOPYbMZ4i5O0ff+nKnITEATEuf6Gkf6RhJbv13o6HsGoNuvWNWV6t4bU19aw3Lba5Jr8KKGDGaI/++ths9m+RiGiuV5kv4gVuNGLnbR1bmtpFNgxcLpRiYuv15afttYE9nY+LwCs/DbnwM4uaA88ZG0fiOzCxML7GVyD0CvG3hmasl0AW7skH1hIuANvdmm/YZrahgF+OfbBSIfdgout6AKtBD+Ao8KOPL2OmLGiHXTkwb2q8BUmCW6r9hf3DG0ZP1fg+wSPq5dhJtiq3qCVHrmK0QWwSnAPzip8hm56SxTnKG4LSM/Cd+U6guwZ7YF7KLMvLvQkPGzDSXFC7/XM8wLsS+fGk5ZpBhyL7BFxirItx+m385fb/PTM1Nvi6coN8HAiXvC3BKV6QtybL50fhzgztVKDFaKLc/TEWp2/iGZLrbjFhFubGHPLbGmlDVsdQ8LW01BTVk/xT62qZYrrFbRR76d4UW8UK73fnVvmXX6Dhmmtuv1BZmi96TuTcdrdtPfh9ccRSe7lHIYCh+H54pI0etRvy2z+V6dodz14ubf54B+jk4uo2Xj/mbiBH7OyPD9yhda1NRBs7Io2AbDWarFVuvQi1jQjc7GVV9z4B9R20BqVY1a5AAAAAElFTkSuQmCC"

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/image.png";

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAMAAACvdQotAAAAwFBMVEUAAAAAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6oAW6qg0/8ygMQJYq8QZ7MccLpGj8+c0P2OxvaJwvM5hskpesAUarWUyvl1s+gvf8SDve96t+xjpd4Wa7ZNldQkdr4idLyazvyYzftrq+NnqOEDXaw0H30uAAAAJHRSTlMAD3GPakDxNi37sVvsGHgfBgOiSPamY5Xl2cS3hlUBfxQKYDqhiBTHAAACXUlEQVRIx43W2XaCMBAG4LCoUAUX3Fq1apsodUFwq3Z9/7fqjEkIeirkvykH+JqZOPFI/s1k+Oi6j5ZHtBOU6SXtka6o0jS2vpgfk+QnRKMrwj2DrGM0mmLNLlm96xjHFUKZ1wLyIIQ0UNtTvjBgkS3L5ADLePl1wWax0zxNxGDbSsVkQdPMWAykuLAs2RcWRgaUxjNKW3XImNLzW2H7pOJSjIXXJl7dr6sR+ONuHS66t8TEFk1rODKuRbdPMR0o274mPiH1AcWUzWcFnntUpO+gUQRFpSaftppSNFs4u9HiA/7UwLwoYoPAw7M5LXCuHxpCdPBewhg7ClMVRIrfb3j4tRNGik82ozy1ChhOQJRAXPLGljNpsI/dkgmCbYKZIDFAtGlKGIuwH7gpBBJleFAoIkyA035GgcQ3eKaSTMWNQBC2gdJIDaddEJPcSUmSA9RAYKmVPlnB6wR25KBPtrCj2MtGmyzP2EsAS0WcyLRL6VyX1Y6h2PHBbgkzywoPwVQZIEL0cOwf8PQtU1IGYVtI7KqaSSCfG5z1JpFm9wULff/yz9GWMwbGQXOEh4kSwoSLE95DYapJfhHmYxHNb6c/M5N+9rzYYPryaS97xkze5qCOQhFuvA4/fl1yFWM0tEyHv6cIBl+sd8d+0Lj7od0St0Ly8wTbGUHVBsSHtmOoNl948G/32W/LLSxj5AmsK2ZZwmBvnSISahNV2IFlUlwYth+vlFiHOO35eYVl3ldZ4TqkILYwUuBo6ph4jWIvhJ4Jf5LkOFei2Iig0MyozUE5INrxLPw9Npz8+/APbhKS5eY3gbEAAAAASUVORK5CYII="

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-slider"
  }, [_c('div', {
    staticClass: "vux-swiper",
    style: ({
      height: _vm.xheight
    })
  }, [_vm._t("default"), _vm._v(" "), _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      staticClass: "vux-swiper-item",
      attrs: {
        "data-index": index
      },
      on: {
        "click": function($event) {
          _vm.clickListItem(item)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:"
      }
    }, [_c('div', {
      staticClass: "vux-img",
      style: ({
        backgroundImage: _vm.buildBackgroundUrl(item.img)
      })
    }), _vm._v(" "), (_vm.showDescMask) ? _c('p', {
      staticClass: "vux-swiper-desc"
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()])])
  }), _vm._v(" "), _vm._l((_vm.listTwoLoopItem), function(item, index) {
    return (_vm.listTwoLoopItem.length > 0) ? _c('div', {
      staticClass: "vux-swiper-item vux-swiper-item-clone",
      attrs: {
        "data-index": index
      },
      on: {
        "click": function($event) {
          _vm.clickListItem(item)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:"
      }
    }, [_c('div', {
      staticClass: "vux-img",
      style: ({
        backgroundImage: _vm.buildBackgroundUrl(item.img)
      })
    }), _vm._v(" "), (_vm.showDescMask) ? _c('p', {
      staticClass: "vux-swiper-desc"
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()])]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDots),
      expression: "showDots"
    }],
    class: [_vm.dotsClass, 'vux-indicator', 'vux-indicator-' + _vm.dotsPosition]
  }, _vm._l((_vm.length), function(key) {
    return _c('a', {
      attrs: {
        "href": "javascript:"
      }
    }, [_c('i', {
      staticClass: "vux-icon-dot",
      class: {
        'active': key - 1 === _vm.current
      }
    })])
  }))])
},staticRenderFns: []}

/***/ })

},[29]);