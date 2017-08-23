<template>
	<div class="question-detail">
		<article>
			<header class="detail-title">
				<h1 v-text="faq['key']"></h1>
			</header>
			<hr/>
			<section class="faq-text">
				<p v-text="faq['value']"></p>
			</section>
		</article>
	</div>
</template>
<script>
    import common from 'assets/js/common.js' ;
    export default{
        data(){
            return {
                faq:{}
            }
        },
        created(){
            this.faq = JSON.parse(sessionStorage.getItem('faqDetails'));
        }
    }
</script>
<style scoped>
	.question-detail{
		background: #f8f8f8;
	}
	.detail-title{
		padding: 30px ;
		color: #333;
	}
	.faq-text{
		padding: 10px 30px;
		color: #666;
	}

</style>
