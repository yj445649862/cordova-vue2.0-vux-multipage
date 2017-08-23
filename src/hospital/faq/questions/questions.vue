<template>
	<div class="questions">
		<div class="faq-title  icon_faq" style="margin-top:0;">预约挂号相关问题</div>
		<group>
			<cell v-for="(item,index) in yuyue" :title="(index+1)+'.'+item['key']" is-link :key="index" @click.native="toFaqDetails(item)"></cell>
		</group>
		<div class="faq-title icon_wenzhen">在线问诊相关问题</div>
		<group >
			<cell v-for="(item,index) in onlineInquiry" :title="(index+1)+'.'+item['key']"  :key="index" is-link @click.native="toFaqDetails(item)"></cell>
		</group>
		<div class="faq-title icon_zixun">免费咨询相关问题</div>
		<group>
			<cell v-for="(item,index) in freeInquiry" :title="(index+1)+'.'+item['key']" :key="index" is-link @click.native="toFaqDetails(item)"></cell>
		</group>
		<div class="btn-yijian" @click="tofeedback" > <i class="icon_faq-yijian"></i> <span style="display: inline-block;">意见反馈</span></div>
	</div>
</template>
<script>
    import faq from './faq.json' ;
    import {Group,Cell} from 'vux' ;
    import common from 'assets/js/common.js' ;
    export default{
        components:{Group,Cell},
        data(){
            return {
                yueyue:[],
                onlineInquiry:[],
                freeInquiry:[]
            }
        },
        created(){
            this.yuyue = faq['yuyue'] ;
            this.onlineInquiry = faq['onlineInquiry'] ;
            this.freeInquiry = faq['freeInquiry'] ;
        },
        methods:{
            toFaqDetails(item){
                sessionStorage.setItem("faqDetails",JSON.stringify(item)) ;
                location.href='../faq/questionsDetails.html' ;
            },
            tofeedback(){
            }
        }
    }
</script>
<style scoped>
	.questions{
		background:#f8f8f8;
	}
	.faq-title{
		height: 90px;
		line-height: 90px;
		color: #333;
		padding:10px 0 10px 90px;
		font-size:30px;
		background: #fff;
		margin-top: 20px;
	}
	.icon_faq{
		background-image: url('../../../assets/imgs/icon_faq-yuyue.png');
		background-repeat: no-repeat;
		background-position: 20px;
		background-size: 50px;
	}
	.icon_wenzhen{
		background-image: url('../../../assets/imgs/icon_faq-wenzhen.png');
		background-repeat: no-repeat;
		background-position: 20px;
		background-size: 50px;
	}
	.icon_zixun{
		background-image: url('../../../assets/imgs/icon_faq-zixun.png');
		background-repeat: no-repeat;
		background-position: 20px;
		background-size: 50px;
	}

	.btn-yijian{
		background-color: #fff;
		text-align: center;
		position: fixed;
		height: 100px;
		width: 100%;
		line-height: 90px;
		bottom: 0px;
	}
	.icon_faq-yijian{
		display: inline-block;
		background: url(../../../assets/imgs/icon_faq-yijian.png) no-repeat;
		background-size:100% 100%;
		height: 40px;
		width: 40px;
		vertical-align: middle;
	}
</style>
