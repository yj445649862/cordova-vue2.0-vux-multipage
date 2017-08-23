<template>
	<div class="homepage">
		<div class="banner">
			<swiper auto :duration=1000 :interval=3000 :aspect-ratio=160/375 :loop=true>
				<swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index"><img :src="item"></swiper-item>
			</swiper>
		</div>
		<div class="appointmentWrap" @click="jumpTo('/hospital/appointment')">
			<div class="appointment">
				<img src="../../../assets/imgs/icon_guahao.png">
				<div  class="introd">
					<strong class="font">预约挂号</strong>
					<p class="tips">快速在线挂号，省去排队烦恼</p>
				</div>
			</div>
		</div>
		<div class="inquiry">
			<div class="online"  @click="jumpTo('/hospital/onlineInquiry/doctorList')">
				<img src="../../../assets/imgs/icon_wenzhen.png">
				<div class="introd">
					<strong class="font">在线问诊</strong>
					<p class="tips top-10">专业眼科医生在线答疑</p>
				</div>
			</div>
			<div class="free"  @click="jumpTo('/hospital/inquiry/inquiryForm')">
				<img src="../../../assets/imgs/icon_free.png">
				<div class="introd">
					<strong class="font">免费咨询</strong>
					<p class="tips top-10">爱尔眼科医生快速解答</p>
				</div>
			</div>
		</div>
		<div class="advertise">
			<img src="../../../assets/imgs/image.png">
			<!--<router-link to="/hospital/eye-test"></router-link>-->
		</div>
		<ul class="nav">
			<li @click="jumpTo('/hospital/appointment')">
				<img src="../../../assets/imgs/nav-icon_guahao_s.png">
				<span class="blue">预约挂号</span>
			</li>
			<li  @click="jumpToCms('/hospital/cmsSystem/')">
				<img src="../../../assets/imgs/icon_zixun.png">
				<span>健康资讯</span>
			</li>
			<li  @click="jumpTo('../users/index.html')">
				<img  src="../../../assets/imgs/icon_geren.png">
				<span>个人中心</span>
			</li>
		</ul>
	</div>
</template>
<script>
    import {Swiper,SwiperItem} from 'vux'
    import baner01 from 'images/banner01.png'
    import baner02 from 'images/banner02.png'
    import baner03 from 'images/banner03.png'
    import common from 'assets/js/common.js' ;
    export default {
        components:{Swiper,SwiperItem},
        data(){
            return {
                list:[
                    baner01,
                    baner02,
                    baner03
                ]
            }
        },
        methods:{
            jumpTo(url){
                location.href = url ;
            },
            jumpToCms(){
                var hospitalId = JSON.parse(localStorage.getItem('hospitalInfo')).hospitalId ;
                this.$router.push({path:'/hospital/cms/cmsList/'+hospitalId})
            }
        }
    }
</script>
<style  lang='stylus' rel='stylesheet/stylus' scoped>
	.homepage
		background #edf4ff
		height 100%
		-webkit-overflow-scrolling touch
		position relative
		z-index 1
		*
			box-sizing border-box
		.banner
			height 320px
			width 100%
			img
				width 100%
		.introd
			.font
				height 66px
				line-height 66px
				font-size 32px
				font-weight 600
				color #333
			.tips
				color #999
				height 50px
				line-height 50px
			.top-10
				margin-top -10px
		.appointmentWrap
			width 100%
			padding 30px 20px
			.appointment
				height 218px
				background #fff
				border-radius 12px
				display flex
				padding 40px
				img
					width 205px
					height 122px
					margin-right 20px
		.inquiry
			display flex
			padding 0 10px
			&>div
				flex 1
				margin 0 10px
				background #fff
				height 300px
				border-radius 12px
				text-align center
				padding 30px
				img
					width 122px
					height 122px
				.tips
					font-size 24px
		.advertise
			padding 30px 20px 142px 20px
			img
				width 100%
	.nav
		height 112px
		background #fff
		display flex
		padding 10px 0
		position fixed
		bottom 0
		width 100%
		&>li
			display flex
			flex 1
			flex-direction column
			font-size 18px
			text-align center
			img
				width 50px
				height 50px
				margin 5px auto
			span
				display inline-block
				height 36px
				line-height 36px
				color #adadad
			.blue
				color #2696ff
</style>


<!--<template>-->
<!--<div id="app">-->
	<!---->
	<!--<divider>github 地址 </divider>-->
	<!---->
	<!--<div class="font12 pad10">-->
		<!--<a class="color888" href="https://github.com/bluefox1688/vue-cli-multi-page" target="_blank">https://github.com/bluefox1688/vue-cli-multi-page</a>-->
	<!--</div>-->
	<!---->
    <!--<div>-->
    	<!--<divider>vux UI 展示</divider>-->
		<!--<group title="vux UI demo">-->
			<!--<cell v-for="el in list" :key="el.id" :title="el.name" value="" is-link :link="el.url"></cell>-->
		<!--</group>-->
		<!--<div class="note">-->
			<!--<p>这里仅展示几个VUE UI的demo，更多组件demo请访问vux UI官网，官网地址：<a href="https://vux.li" target="_blank">https://vux.li</a> </p>-->
		<!--</div>-->
	<!--</div>-->
	<!--<div>-->
	<!--<divider>多页面 vue-router 2</divider>-->
    <!--<group>-->
		<!--<cell title="多页面路由" value="" is-link link="../router/details.html"></cell>-->
	<!--</group>-->
	<!--</div>-->
	<!---->
	<!--<div class="martop15">-->
	<!--<divider>iconfont 字体</divider>-->
    <!--<group>-->
		<!--<cell title="iconfont图标展示" value="" is-link link="../iconfont/list.html"></cell>-->
	<!--</group>-->
	<!--</div>-->
	<!---->
	<!--<div class="martop15">-->
	<!--<divider>其他</divider>-->
    <!--<group>-->
		<!--<cell title="自定义vue全局过滤器" value="" is-link link="../tools/vuefilter.html"></cell>-->
		<!--<cell title="模块下放静态文件" value="" is-link link="../tools/bigimage.html"></cell>-->
		<!--<cell title="ajax" value="" is-link link="../tools/ajax.html"></cell>-->
		<!--<cell title="获取url参数" value="" is-link link="../tools/getQuery.html?goodsid=1688&shopid=25"></cell>-->
	<!--</group>-->
	<!--</div>-->

<!--</div>-->
<!--</template>-->

<!--<script>-->

<!--import common from 'assets/js/common';-->

<!--import { Cell,Group,Divider } from 'vux'-->


<!--export default {-->
  <!--data() {-->
    <!--return {-->
    	<!--webname:5464,-->
		<!--'list':[{-->
			<!--'id':0,-->
			<!--'name':'alert弹窗',-->
			<!--'url':'../vuxDemo/alert.html'-->
		<!--},{-->
			<!--'id':1,-->
			<!--'name':'Calendar时间选择',-->
			<!--'url':'../vuxDemo/calendar.html'-->
		<!--},{-->
			<!--'id':2,-->
			<!--'name':'button按钮',-->
			<!--'url':'../vuxDemo/button.html'-->
		<!--}]-->
    <!--}-->
  <!--},-->
  <!--components: {-->
	<!--Cell,Group,Divider	-->
  <!--},-->
  <!--//实例初始化最之前，无法获取到data里的数据-->
  <!--beforeCreate(){-->
  	<!---->
  	<!---->
  <!--},  -->
  <!--//在挂载开始之前被调用-->
  <!--beforeMount(){-->
  	<!---->
  <!---->
  <!--}, -->
  <!--//已成功挂载，相当ready()-->
  <!--mounted(){-->
  <!---->
  <!---->
	<!---->
  <!--},-->
  <!--//相关操作事件-->
  <!--methods: {-->
	<!---->
	<!---->
	<!---->
      <!---->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style lang="less">-->


<!--.note{-->
	<!--color:#666;-->
	<!--padding:10px;-->
	<!--font-size:12px;-->
<!--}-->
<!--.note p{-->
	<!--line-height:25px;-->
<!--}-->

<!--.weui-cells{-->
<!--font-size: 14px!important;	-->
<!--}-->

<!--/*-->
 <!--* less 展示-->
 <!--*/ -->
<!--.lessTest{-->
	<!--.listbox{-->
		<!--border-radius: 10px;-->
		<!--font-size: 14px;-->
	<!--}-->
	<!--.boxcontent{-->
		<!--padding: 15px;-->
	<!--}-->
<!--}-->


<!--</style>-->
