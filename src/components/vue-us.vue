<template>
	<div class="us">
		<el-row class="process">
			<el-col :span="19" :offset="3">
				<el-steps :active="4" align-center>
					<el-step
						title="联系我们" 
						icon="message"
						status="success"
						description="讲座留言,网站咨询,微信公众号交流,直接电话或者上门,选取您认为最快捷的方式联系到我们。"></el-step>
					<el-step 
						title="预约规划" 
						status="finish" 
						icon="time" 
						description="根据您的需求,美式教育管家将会为您安排最佳时间带着孩子打造一对一VIP教育规划服务。">
					</el-step>
					<el-step 
						title="取长补短" 
						icon="star-on" 
						status="success" 
						description="根据规划内容,选取最适合孩子的专属美式成长历程服务。">
					</el-step>
					<el-step 
						title="陪伴成长" 
						icon="picture"
						status="finish"
						description="共同打造孩子VIP美式成长历程。">	
					</el-step>
				</el-steps>
			</el-col>
		</el-row>
		<el-row class="picture">
			<el-col :span="24">
				<img src="../assets/img/us.jpg" alt="" />
			</el-col>
		</el-row>
		<el-row class="join-us">
			<el-col :span="18" :offset="3">
				<h1>我们是谁</h1>
				<p v-for="item in contents">{{item.content}}</p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "vue-us",
		data() {
			return {
				contents: [
					{content:"在1999年，哥特创办的初期，当时在美国，91%的科学家认为英语是一种语感，是不能够用语言教出来的，它叫non-verbal thinking，而只有百分之九的科学家认为感觉是有可能通过语言做到一定的接近度的方式讲出来的。非常幸运的是，哥特的创始人Gladius相信了9%，从哥特1999年创立开始，Gladius就开始研究如何让更多的非英语母语的学生更好的学习英语应用英语，而不是只是通过单纯的找规律找套路找方法，通过大量的英语考题通过常规的英语考试。虽然这个思想在中国国内已经成形了，且是成功的思想，但是美国有太多的考试，它是来自于美国本土的能力性考试，在这个情况出现的越来越频繁时，中国学生之前的知识类考试复习方法还真的有效果吗？如果最初真的可以应付完语言考试，顺利来到美国就读，那么这种知识性应对考试法真的足以支撑中国学生在美国顺利完成学业吗？"},
					{content:"哥特专注于美式教育近20年，为数万名留美的中国生提供学习和生活帮助，后陆续发现教育要从娃娃抓起，根源还是在最初成长地中国。于是，哥特来到了中国，为更多的中国孩子提供美式教育。美式教育不仅仅是针对于未来留美学生，也同样适合于国内发展的孩子。美式教育融合了中国综合素质教育和美国创新思维教育，从孩子的生活点滴做起，关注孩子的生活学习日常和健康成长发展，同步辅导中国升学课程和美国进阶课程，激发孩子全方面的潜能，让孩子在学习同时参与更多的课外活动，在中美交融的土壤里茁壮成长。"},
					{content:"哥特推崇一对一私人定制VIP课程模式，为每一位学生制定专属的美式教育历程，包含VIP学习方案和课外活动打造，专属美式教育专家陪伴孩子一起成长，同步制定每日学习和活动计划，有效利用时间，发现问题，随时答疑。陪伴成长，记录点滴，切实可行的让每个孩子都能找到生活的乐趣，徜徉在美式教育的海洋里。"},
					{content:"哥特创办以来，从奥斯汀扩展到纽约到芝加哥到洛杉矶，已经帮助了太多在美国学习的遇到很多学习和生活问题的中国学生走出困境，但是哥特知道，这并不能够从本质上改变中国学生在美求学的困境。所以，哥特来到了中国，从2010年的兰州开始，哥特创办了第一家哥特中国分公司，打造了千万家美式教育专属历程，帮助数万名中国学生从成长初期开始，就逐步形成美式思维，培养美式学习方法，徜徉在美式语言环境，沉寂在地道美语学习中，为之后的中国综合素质教育和留美深造打下坚实基础。"},
					{content:"知者乐水，仁者乐山； 知者动，仁者静； 知者乐，仁者寿。寓中国传统文化之博大精深于美式教育中，兼柔并蓄，打造专属于中国孩子的美式成长历程。哥特当仁不让。"}
				]	
			}
		}
	}
</script>
<style lang="less">
	.us {
		padding-top: 100px;
		background: #d2d3d5;
		.process {
			margin: 0 0 100px 0;
			text-align: center;
		}
		.picture {
			img {
				width: 100%;
			}
		}
		.join-us {
			padding: 100px 0;
			background: #d2d3d5;
			line-height: 30px;
			h1 {
				font-size: 34px;
				padding: 30px 0 10px 0px;
			}
			p {
				margin-top: 20px;
			}
		}
	}
</style>