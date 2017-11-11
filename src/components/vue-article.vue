<template>
	<el-row class="article">
		<el-col :span="20" class="waterfall" :offset="2">
			<div class="item" v-for="(item,index) in articles">
				<router-link :to=" item.page " append>
					<img :src=" './dist/article/'+(index+1)+'.jpg' " alt="" />
					<p v-text="item.description"></p>
				</router-link>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: "vue-article",
		data() {
			return {
				articles: [
					{description:"如何顺利申请到美国名校",page:"america"},
					{description:"被defer和waitlisted的原因及区别",page:"defer"},
					{description:"美国春季入学和秋季入学",page:"enroll"},
					{description:"论美国大学转学",page:"transfer"},
					{description:"托福考试常识问答",page:"ielts"},
					{description:"解读新SAT",page:"sat"},
					{description:"关于AP考试(美国大学先修课程)",page:"ap"},
				]
			}
		}
	}
</script>

<style lang="less">
	.article {
		background-color: #d2d3d5;
		padding: 50px 0;
		.waterfall {
			column-count: 3;
			column-gap: 20px;
			.item {
				padding: 10px;
				margin: 0 0 10px 0;
				background-color: white;
				break-inside: avoid;
				img {
					width: 100%;
				}
				p {
					padding: 50px 0 20px 10px;
					font-size: 30px;
					line-height: 30px;
				}
				a {
					text-decoration: none;
					color: black;
				}
			}
		}
	}
	@media (min-width: 568px) and (max-width: 991px) {
        .waterfall {
            column-count: 2 !important;
        }
        p {
            font-size: 24px !important;
        }
    }
    @media (max-width: 567px) {
        .waterfall {
            column-count: 1 !important;
        }
    }
</style>