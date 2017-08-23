<template>
	<div class="login">
		<div class="logo-eye">
			<img src="../../../assets/imgs/icon_eyehospital.png">
		</div>
		<group class="weui-cells_form" gutter="0">
			<x-input placeholder="请输入手机号码" class="weui-vcode" is-type="china-mobile" type="tel" required ref="input1" v-model="userPhone" @on-change="">
				<img slot="label" src="../../../assets/imgs/icon_s-user.png" >
			</x-input>
			<x-input placeholder="请输入验证码" class="weui-vcode" required ref="input2" v-model="userCode">
				<img slot="label" src="../../../assets/imgs/icon_yanzheng.png">
				<x-button slot="right" type="primary" mini @click.native="" :text="btnText" action-type="button" :disabled="codeEn"
						  class="yzm"></x-button>
			</x-input>
		</group>
        <!--<img :src="image" style="height:100%;width:100%"/>-->
		<!--<button type="button" class="weui-btn btn-login" @click="callPics()">选择图片</button>
		<button type="button" class="weui-btn btn-login" @click="callMedia()">录像</button>-->
		<button type="button" class="weui-btn btn-login" @click="callWxLogin()">微信登录</button>
		<div class="tips">
			<span>温馨提示：</span>
			<p>未注册“爱尔眼科互联网医院”账号的手机号，登录时将自动注册，且代表您已同意《用户注册协议》。</p>
		</div>
	</div>
</template>

<script>
    import {Toast, XInput, Group, XButton, Cell} from 'vux'
	import common from 'assets/js/common.js'
    export default {
        data () {
            return {
                codeEn: true,
                userPhone: "",
                userCode: "",
                image:'',
                showContent: false,
                count:60,
                btnText: "发送验证码"
            }
        },
        components: {
            XInput,
            Group,
            XButton,
            Cell,
        },
        methods: {

        },
        mounted(){
            var _this  = this ;
            window.addEventListener("load", onDeviceReady, false);
            function onDeviceReady() {
                /*;*/
            };


        },
		methods:{
            callWxLogin(){
                /*navigator.geolocation.getCurrentPosition(
					(position)=>{
                        alert('Latitude: '          + position.coords.latitude          + '\n' +
                            'Longitude: '         + position.coords.longitude         + '\n' +
                            'Altitude: '          + position.coords.altitude          + '\n' +
                            'Accuracy: '          + position.coords.accuracy          + '\n' +
                            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                            'Heading: '           + position.coords.heading           + '\n' +
                            'Speed: '             + position.coords.speed             + '\n' +
                            'Timestamp: '         + position.timestamp                + '\n');
					},
					()=>{
					    alert('error')
					},
                    { timeout: 3000 });*/
               /* navigator.notification.alert(
                    'You are the winner!',  // message
					(d)=>{
                        alert(d)
					},         // callback
                    'Game Over',            // title
                    'Done'                  // buttonName
                );*/
                /*Wechat.isInstalled(function (installed) {
                    alert("Wechat installed: " + (installed ? "Yes" : "No"));
                }, function (reason) {
                    alert("Failed: " + reason);
                });
				 */
              /*  var scope = "",
                    state = "_" + (+new Date());
               ;*/
              /*  Wechat.share({
                            media: {
                    type: Wechat.Type.LINK,
                        webpageUrl: "http://tech.qq.com/zt2012/tmtdecode/252.htm"
            },
                scene: Wechat.Scene.TIMELINE   // share to Timeline
            }, function () {
                    alert("Success");
                }, function (reason) {
                    alert("Failed: " + reason);
                });*/
//                Wechat.auth('snsapi_userinfo', function (response) {
//                    alert(JSON.stringify(response));
//                }, function (reason) {
//                    alert("Failed: " + reason);
//                })
               /* Wechat.share({
                    text: "This is just a plain string",
                    scene: Wechat.Scene.TIMELINE   // share to Timeline
                    }, function () {
                    alert("Success");
                }, function (reason) {
                    alert("Failed: " + reason);
                });*/
			},
            callMedia(){
                navigator.device.capture.captureVideo(
                    (mediaFiles)=>{
                        var i, path, len;
                        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                            path = mediaFiles[i].fullPath;
                            console.dir(path);
                        }
                    },()=>{
                        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
                    }, {limit:2}
                )
			},
            callPics(){
                let _this = this ;
                navigator.camera.getPicture((data)=>{
                    _this.image=data ;
                }, ()=>{
                },{});
			}
		}
    }
</script>

<style scoped>
	.login {
		background-color: #fff;
		height: 100%;
		font-size: 28px;
	}

	.logo-eye {
		padding-top: 120px;
		padding-bottom:40px;
		text-align: center;
		background-color: #fff;
	}

	.logo-eye img {
		width: 40%;
		margin: 0 auto;
	}

	.weui-vcode img {
		padding-right: 20px;
		display: block;
		width: 32px;
		height: 36px;
		margin: 10px 0;
	}

	.login-title {
		background-color: #fff;
		height:100px;
		line-height: 100px;
		padding-left: 40px;
		font-size: 36px;
	}

	.tips {
		background-color: #fff;
		padding-top: 40px;
	}

	.tips>span, .tips>p {
		color: #999;
		margin: 0 40px;
		display: block;
		font-size: 28px;
		padding-bottom: 10px;
	}

	.btn-login {
		margin-top: 60px;
		width: 90%;
		border-radius: 12px;
	}

	.btn-login:enabled {
		background-color: #3ba2f2;
	}

	.btn-login:disabled {
		background-color: #a9d7fb
	}

	.yzm {
		font-size: 28px;
		border-left: 1px solid #ddd;
		border-top: 1px solid #fff;
		border-bottom: rgba(255, 255, 255, 0);
		border-right: rgba(255, 255, 255, 0);
		background-color: #fff;
		color: #2696ff;
		border-radius: 0;
	}

	.yzm:disabled {
		color: rgb(189, 189, 189);
	}

	.login .weui-btn_primary {
		background-color: #fff;
	}

	.login .weui-btn:after {
		border:0;
	}

	.weui-cell_warn {
		color: #757575;
	}
</style>

