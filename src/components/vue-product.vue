<template>
	<div>
		<el-row class="summary">
			<el-col :span="16" :offset="4">
				<h1>打造专属9-18岁孩子的VIP美式教育</h1>
				<p v-for="item in introduction">{{item.content}}</p>
			</el-col>
		</el-row>
		<el-row class="product vip-six">
			<div class="angel">
				<router-link to="purelove" append>了解更多</router-link>
			</div>
			<el-col :span="11" :offset="3">
				<ul>
					<li v-for="item in vipSix">{{item}}</li>
				</ul>
			</el-col>
			<el-col :span="5" :offset="2">
				<h1>VIP Ⅵ</h1>
				<h1>Puppy Love</h1>
				<h2>美式教育初成长</h2>
			</el-col>
		</el-row>
		<el-row class="product vip-five">
			<div class="angel">
				<router-link to="puppylove" append>了解更多</router-link>
			</div>
			<el-col :span="11" :offset="3">
				<ul>
					<li v-for="item in vipFive">{{item}}</li>
				</ul>
			</el-col>
			<el-col :span="5" :offset="2">
				<h1>VIP V</h1>
				<h1>Pure Love</h1>
				<h2>美式教育初体验</h2>
			</el-col>
		</el-row>
		<el-row class="product vip-three">
			<div class="angel">
				<router-link to="maturelove" append>了解更多</router-link>
			</div>
			<el-col :span="11" :offset="3">
				<ul>
					<li v-for="item in vipThree">{{item}}</li>
				</ul>
			</el-col>
			<el-col :span="5" :offset="2">
				<h1>VIP Ⅲ</h1>
				<h1>Mature Love</h1>
				<h2>美式教育成熟期</h2>
			</el-col>
		</el-row>
		<el-row class="product vip-two">
			<!-- <div class="angel"> -->
				<!-- <router-link to="familymember" append>了解更多</router-link> -->
			<!-- </div> -->
			<el-col :span="11" :offset="3">
				<div v-html="vipTwo">
				</div>
			</el-col>
			<el-col :span="5" :offset="2" class="right-bar">
				<h1>VIP Ⅱ</h1>
				<h1>Friend</h1>
				<h2>美式教育好朋友</h2>
			</el-col>
		</el-row>
		<el-row class="product vip-one">
			<!-- <div class="angel"> -->
				<!-- <router-link to="familymember" append>了解更多</router-link> -->
			<!-- </div> -->
			<el-col :span="11" :offset="3">
				<ul>
					<li v-for="item in vipOne">{{item}}</li>
				</ul>
			</el-col>
			<el-col :span="5" :offset="2">
				<h1>VIP Ⅰ</h1>
				<h1>Family Member</h1>
				<h2>美式教育大家庭</h2>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "vue-product",
		data() {
			return {
				introduction: [
					{content:"哥特以中美教材结合教学，充分运用中式的灵巧思维，糅合美式的创新思维。选取在中美文化交融坏境下成长的并且教学经验极为丰富的老师对孩子进行专属美式教育，培养孩子形成美式教育要求的团队协作能力、与人沟通的能力、创造力、批判性思维、能力和品格。这不仅仅是中国教育综合素质的要求，同时也是美国学校选拔学生的重要依据。"},
					{content:"通过长期一对一美式教育服务，深入了解学生，悉心服务每一个环节，挖掘人生潜能，助力美式成长，为每一个孩子制定个性化高标准的美式成长规划，打造孩子的专属美式成长历程，确保孩子在中美交融的环境下茁壮成长，顺利入读美国名列前茅的学校。"}
				],
				vipSix: [
					"国内小学课程语文数学英语科学同步辅导",
					"周末兴趣班美术音乐体育舞蹈多姿多彩",
					"寒暑期美国学校游学",
					"系统接受美式发音的全方位学习和练习，纠正之前错误和偏差发音",
					"同步美国小学教材学习吸收",
					"美国小学同步经典短篇小说书单指导阅读",
					"美国小学同步段落写作指导训练",
					"长跑和游泳课外活动定期开展",
					"基础美国礼仪培训和生活习惯调整"
				],
				vipFive: [
					"国内初中课程语文数学英语科学人文同步辅导",
					"周末特长班插画小提琴网球爵士舞专业培养",
					"寒暑假美国学校全真课堂学习",
					"系统接受英语语法体系的全方位学习和练习，深入理解吸收地道美语",
					"同步美国初中教材学习吸收",
					"美国初中同步原版短篇小说书单指导阅读",
					"美国初中同步篇章写作指导训练",
					"辩论演讲类课外活动定期开展",
					"专业餐桌礼仪和生活习惯培养"
				],
				vipThree: [
					"国内高中课程语文数学英语文理各科同步辅导",
					"周末专长班专业指导",
					"寒暑假美国夏校项目研究",
					"接受英语母语环境熏陶，体验美国当地风土人情",
					"同步美国高中教材学习吸收",
					"美国高中同步书单指导阅读",
					"美国高中同步学术写作指导训练",
					"野外拓展类课外活动定期开展",
					"专业美国社交活动开展和人际交往圈培养"
				],
				vipTwo: "<h3>Buddy 好哥们</h3>\
					<ul>\
						<li>TOEFL JUNIOR学习</li>\
						<li>美国初中留学申请服务</li>\
						<li>课外活动专业打造</li>\
						<li>面试素材挖掘和包装</li>\
						<li>推荐信指导和包装</li>\
						<li>美国留学行前准备和安全知识培训</li>\
					</ul>\
					<h3>Mate 好伙伴</h3>\
					<ul>\
						<li>TOEFL、SSAT学习</li>\
						<li>美国高中留学申请服务</li>\
						<li>专业文书指导</li>\
						<li>课外活动专业打造</li>\
						<li>面试素材挖掘和包装</li>\
						<li>推荐信指导和包装</li>\
						<li>美国留学行前准备和安全知识培训</li>\
					<ul>\
					<h3>Companion 好帮手</h3>\
					<ul>\
						<li>TOEFL、SAT/ACT学习</li>\
						<li>SAT II、AP学习</li>\
						<li>美国本科留学申请服务</li>\
						<li>专业文书指导</li>\
						<li>课外活动专业打造</li>\
						<li>面试素材挖掘和包装</li>\
						<li>推荐信指导和包装</li>\
						<li>美国留学行前准备和安全知识培训</li>\
					<ul>",
				vipOne: [
					"GRE/GMAT学习（目前此业务只对美国分公司开放）",
					"美国研究生留学申请服务（目前此业务只对美国分公司开放）",
					"美国真实作业集提前练习和批改",
					"美国本科通识课学习",
					"美国实习和就业规划",
					"美国本科论文辅导和发表",
					"美国科研项目研究指导"
				]
			}
		}
	}
</script>

<style lang='less'>
	.summary {
		background-color: #d2d3d5;
		padding-bottom: 50px;
		h1 {
			font-size: 30px;
			padding: 50px 0 0 0;
		}
		p:first-child {
			padding: 0;
			line-height: 30px;
		}
		p {
			padding: 20px 0 0 0;
			line-height: 30px;
		}
	}
	.product {
		position: relative;
		counter-reset: order;
		height: 650px;
		color: white;
		padding-top: 160px;
		margin-top: 10px;
		background-size: 100% 100%;
		overflow: hidden;
		.angel {
            width: 0;
            height: 0;
            position: absolute;
            bottom:0;
            right: 0;
            box-shadow: -4px -4px 8px black;
            background:linear-gradient(to left top,white 50%,#d2d3d5 0,#d2d3d5 100%);
            transition:all 1s;
            a {
	            text-decoration: none;
	            color: black;
	            display: inline-block;
	            margin-top: 30px;
	            margin-left: 40px;
	            // letter-spacing: 20px;
	        }
        }
		h1 {
			font-size: 30px;
			// font-family: "华文隶书";
		}
		h1:first-child {
			border-top: 1px solid #d2d3d5;
			padding-top: 30px;
		}
		h2 {
			font-size: 20px;
			padding-top: 10px;
		}
		ul {
			border-top: 2px solid #d2d3d5;
			padding-top: 30px;
			.more {
				padding: 20px 0 0 30px;
				margin-top:  30px;
			}
			li {
				font-size: 16px;
				list-style: none;
				margin-top: 20px;
				font-weight: 600;
			}
			li:before {
				counter-increment: order;
				content: Counter(order) ".";
			}
		}
	}
	.product:hover .angel{
        width: 200px;
        height: 140px;
        background:linear-gradient(to left top,white 50%,#d2d3d5 0,#d2d3d5 100%);
    }
	.vip-six {
		background: url('../assets/img/vip-six.jpg') no-repeat center center;
		margin-top: 0;
	}
	.vip-five {
		background: url('../assets/img/vip-five.jpg') no-repeat center center;
	}
	.vip-three {
		background: url('../assets/img/vip-three.jpg') no-repeat center center;
	}
	.vip-two {
		height: 750px;
		padding-top: 40px;
		background: url('../assets/img/vip-two.jpg') no-repeat center center;
		.right-bar {
			padding-top: 55px;
		}
		h3 {
			font-size: 24px;
			padding: 20px 0 10px 0;
			border-bottom: 2px solid #d2d3d5;
		}
		h3:before {
			counter-increment: order;
			content: Counter(order) ".";
		}
		ul {
			counter-reset: suborder;
			border: none;
			padding: 0;
			li {
				font-size: 14px;
				margin-top: 10px;
				font-weight: 100;
			}
			li:before {
				counter-increment: suborder;
				content: Counter(suborder) ".";
			}
		}
	}
	.vip-one {
		background: url('../assets/img/vip-one.jpg') no-repeat center center;
	}
	@media (min-width: 768px) and (max-width: 991px) {
		.product {
			h1 {
				font-size: 30px !important;
			}
		}
	}
	@media (max-width: 767px) {
		.product {
			padding-top: 80px !important;
			h1 {
				font-size: 22px !important;
			}
			h2 {
				font-size: 22px !important;
			}
			ul {
				li {
					font-size: 14px !important;
				}
			}
		}
		.product:hover .angel{
	        width: 100px !important;
	        height: 70px !important;
	        background:linear-gradient(to left top,white 50%,#d2d3d5 0,#d2d3d5 100%) !important;
	    }
	    a {
	    	font-size: 12px !important;
	    	margin-left: 10px !important;
	    	margin-top: 10px !important;
	    }
	    .vip-two {
			padding-top: 60px !important;
			h1:first-child {
				padding-top: 10px !important;
			}
			h3 {
				padding: 10px 0 5px 0 !important;
			}
			ul {
				li {
					margin-top: 8px !important;
				}
			}
		}
	}
</style>