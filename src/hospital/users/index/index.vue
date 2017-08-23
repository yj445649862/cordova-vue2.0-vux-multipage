<template>
	<div class="personal">
		<div class="weui-tab__panel vux-fix-safari-overflow-scrolling personal" >
			<div class="auth-back">
				<img src="" alt="头像" class="auth-img">
				<h2></h2>
				<div class="auth-set"></div>
			</div>
			<group class="personalNav">
				<cell title="我的预约" is-link >
					<img slot="icon" class="icon auth-icon2" src="../../../assets/imgs/person-i_yuyue.png">
				</cell>
				<cell title="我的提问" is-link >
					<img slot="icon" class="icon auth-icon2"  src="../../../assets/imgs/person-i_wenz.png">
				</cell>
			</group>
			<group  class="personalNav">
				<cell title="家庭联系人" is-link >
					<img slot="icon" class="icon auth-icon2"  src="../../../assets/imgs/person-i_jiuren.png">
				</cell>
				<cell title="帮助与反馈" is-link link="../../hospital/faq/questions.html">
					<img slot="icon" class="icon auth-icon2"  src="../../../assets/imgs/person-i_help.png">
				</cell>
				<cell title="退出登录" is-link link="../../hospital/users/login.html">
					<img slot="icon" class="icon auth-icon2" src="../../../assets/imgs/person-i_setting.png">
				</cell>
			</group>
		</div>
		<ul class="nav">
			<li @click="">
				<img src="../../../assets/imgs/nav-icon_guahao.png">
				<span>预约挂号</span>
			</li>
			<li  @click="">
				<img src="../../../assets/imgs/icon_zixun.png">
				<span>健康资讯</span>
			</li>
			<li  @click="">
				<img  src="../../../assets/imgs/icon_geren_s.png">
				<span class="blue">个人中心</span>
			</li>
		</ul>
	</div>
</template>

<script>
    import docPic from 'images/icon_user.png'
    import backPic from 'images/bg_person.png'
    import editPic from 'images/icon_edit.png'
    import { Cell, Group,Confirm } from 'vux'
    import common from 'assets/js/common.js' ;
    export default {
        data () {
            return {
                docPic: docPic,
                backPic: backPic,
                editPic: editPic,
                show: false
            }
        },
        computed: {
        },
        components: {
            Cell,
            Group
        },
        methods:{
            onCancel(){
                this.show = false;
            },
            onConfirm(){
            }
        }
    }
</script>

<style scoped>
	.personal{
		background: #f8f8f8;
		padding-bottom: 120px;
		box-sizing: border-box;
	}

	.personalNav .auth-icon2{
		width: 0.7rem;
		height: 0.7rem;
	}
	.auth-back{
		position: relative;
		box-sizing: border-box;
		min-height: 440px;
		font-size: 28px;
		width: 100%;
		background-image: url('../../../assets/imgs/bg_person.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		color: #fff;
		text-align: center;
	}
	.auth-img{
		width: 140px;
		height: 140px;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		border: 4px solid #06b3ff;
		margin-top: 70px;
	}
	.auth-back h2{

		font-size: 32px;
		margin: 14px 0;

	}
	.weui-bar__blue{
		color:#005baa;
	}
	.personalNav .icon{
		margin:12px 20px 0 0;
	}
	.auth-set {
		display:  block;
		background:url('../../../assets/imgs/icon_phone.png') 40px center no-repeat ;
		margin: 10px auto;
		font-size: 28px;
		width: 300px;
		height: 50px;
		line-height: 50px;
		padding-left: 30px;
		background-size: 24px 28px;
		text-align: center;
		border-radius:40px;
		background-color: rgba(0,0,0,0.15);
	}


	.auth-account{
		position: absolute;
		bottom: 100px;
		left: 0;
		width: 100%;
		/*font-size: 16px;*/
		text-align: center;
		color: #FFF;
	}

	.auth-icon{
		height: 40px;
		line-height: 40px;
	}

	.nav {
		height:112px;
		background:#fff;
		display:flex;
		padding :10px 0;;
		position :fixed;
		bottom: 0;
		width :100%;
		box-sizing: border-box;
	}
	.nav>li{
		display :flex;
		flex :1;
		flex-direction :column;
		font-size :18px;
		text-align :center;
	}
	.nav>li img{
		width: 50px;
		height :50px;
		margin: 5px auto;

	}
	.nav>li span{
		display: inline-block;
		height: 40px;
		line-height :40px;
		color: #adadad;
	}
	.nav>li  .blue{
		color: #2696ff;
	}

</style>
