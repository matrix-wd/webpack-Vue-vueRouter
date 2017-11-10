<template>
	<div class="introduction">
		<el-row>
			<el-col :span="20" :offset="4">
				<div>
					<h3>Family Member</h3>
					<ul>
						<li>1.服务内容：</li>
						<li>GRE/GMAT学习（目前此业务只对美国分公司开放）</li>
						<li>美国研究生留学申请服务（目前此业务只对美国分公司开放）</li>
						<li>美国真实作业集提前练习和批改</li>
						<li>美国本科通识课学习</li>
						<li>美国实习和就业规划</li>
						<li>美国本科论文辅导和发表</li>
						<li>美国科研项目研究指导</li>
						<li>2.成果展示：</li>
						<li>学生作业完成单</li>
						<li>阅读书目单</li>
						<li>课外活动记录表</li>
					</ul>
				</div>
			</el-col>
		</el-row>
		<el-row class="story">
			<el-col :offset="10" :span="14">
				<router-link to="familyStory" append>
					<span>Story</span>
				</router-link>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name: "vue-family-member",
	}
</script>

<style lang="less">
	@import url("../../assets/less/product.less");
</style>