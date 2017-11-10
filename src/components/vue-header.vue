<template>
	<el-row>
		<el-col :span="24" class="">
			<div class="bg-black">
				<el-row class="nav">
					<router-link to="/index">
						<el-col :span="2" :offset="3">Goth</el-col>
					</router-link>
					<router-link to="/product">
						<el-col :span="2" :offset="1">服务</el-col>
					</router-link>
					<router-link to="/team">
						<el-col :span="2" :offset="1">团队</el-col>
					</router-link>
					<router-link to="/story">
						<el-col :span="2" :offset="1">感言</el-col>
					</router-link>
					<router-link to="/article">
						<el-col :span="2" :offset="1">干货</el-col>
					</router-link>
					<router-link to="/us">
						<el-col :span="2" :offset="1">我们</el-col>
					</router-link>
				</el-row>
			</div>
			<div class="select">
				<el-select v-model="option" placeholder="请选择" @change="link">
				    <el-option v-for="item in options"
				    	:key="item.value"
				    	:label="item.label"
				    	:value="item.value">
				    </el-option>
				</el-select>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	export default{
		name: "vue-header",
		data() {
			return{
				options: [
					{label:"Goth", value:"index"},
					{label:"服务", value:"product"},
					{label:"团队", value:"team"},
					{label:"故事", value:"story"},
					{label:"干货", value:"article"},
					{label:"我们", value:"us"}
				],
				option: "index",
			}
		},
		methods: {
			link: function() {
				this.$router.push( {path:'/'+this.option} )
			}
		}
	}
</script>

<style lang="less">
	@import url("../assets/css/reset.css");
	@media (max-width:768px) {
		.bg-black {
			display: none;
		}
		.select {
			display: block !important;
		}
	}
	.select {
		display: none;
		div {
			width: 100%;
		}
	}
	.bg-black {
		background: #111111;
		height: 80px;
		line-height: 80px;
			.nav {
			font-size: 16px;
			.router-link-active {
				color: red;
			}
			a {
				text-decoration: none;
				color: inherit;
				div {
					border-radius: 5px;
					cursor: pointer;
					color: white;
					text-align: center;
				}
				div:hover{
					background: #d2d3d5;
					color: black;
				}
			}
			.router-link-active {
				div {
					background: #d2d3d5;
					color: black;
				}
			}
		}
	}
</style>