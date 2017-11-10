<template>
	<el-row class="footer">
		<el-col :span="10" :offset="4">
			<div class="content">
				<p>联系我们</p>
				<p>Austin　　New York　　 Chicago　　 Los Angeles</p>
				<p>兰州：中国甘肃省兰州市城关区南河路高新大厦A座22层</p>
				<p>杭州：中国浙江省杭州市下城区朝晖路168号钛合国际1号楼1608</p>
				<p>电话：0571-87228810</p>
				<p>邮箱：edu@goth.vip</p>
			</div>
		</el-col>
		<el-col :span="9" :offset="1">
			<div class="tel content">
				<img src="../assets/img/code.png" alt="" />
			</div>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: "vue-footer"
	}
</script>
<style lang="less">
	.footer {
		background-color: #111111;
		color: white;
		font-size: 14px;
		padding: 50px 0 50px 0;
		.content {
			margin-top: 30px;
			p {
				margin-top: 14px;
			}
		}
		.tel {
			margin-top: 30px;
			img {
				padding: 10px 0 0 10px;
				width: 100px;
			}
		}
	}
</style>