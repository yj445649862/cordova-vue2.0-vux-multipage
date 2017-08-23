//注册时，vux必须放在 import Vue from 'vue'; 之前，否侧打包的体积非常大，估计是vux OR vue 抽风了
import Vue from 'vue';
//--- VUX UI 注册 END --
require('assets/css/init.css')
require('assets/css/css.css')
require('assets/css/resetvux.css')
var flexible = require('./flexible') ;
Vue.use(flexible)
//解决click点击300毫秒延时问题
import FastClick from 'fastclick';
FastClick.attach(document.body);	
export default{
}