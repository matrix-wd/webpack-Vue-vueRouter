<template>
	<div>
		<el-row>
			<el-col :span="24" class="content">
				<img src="../assets/img/index2.jpg" alt="" />
			</el-col>
		</el-row>
		<el-row class="index-intro">
			<el-col :span="18" :offset="3">
				<p>哥特创办于1999年2月美国奥斯汀，创办者Gladius，毕业于耶鲁大学，教育学和经济学双硕士，辅修心理学。至今18年的风雨历程，哥特创始人Gladius把美式教育从美国奥斯汀带到纽约，芝加哥，洛杉矶，继而走进中国。2010年，哥特中国兰州分公司成立，这意味着美式教育在中国开始生根发芽，历经7年野蛮成长后，哥特打造的我的专属美式教育在杭州正式拉开帷幕。</p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "vue-index",
	}
</script>
<style lang="less">
	.content {
		margin: 0 auto;
		img {
			width: 100%;
		}
	}
	.index-intro {
		margin-top: -5px;
		background-color: #d2d3d5;
		p {
			padding:50px 0;
			line-height: 30px;
		}
	}
</style>