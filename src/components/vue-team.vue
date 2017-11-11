<template>
	<div>
		<el-row class="title">
			<el-col :span="18" :offset="3">
				<h1>LEADERSHIP</h1>
			</el-col>
		</el-row>
		<el-row class="intro">
			<el-col class="item" :lg="5" :md="5" v-for="(item,index) in leadership" :key="index">
				<img v-bind:src=" './dist/team/'+item.imgName+'.png' " alt="" />
				<h3 v-text="item.name"></h3>
				<h3 v-text="item.pos"></h3>
				<p v-text="item.saying"></p>
			</el-col>
		</el-row>
		<el-row class="title employee">
			<el-col :span="18" :offset="3">
				<h1>American Team</h1>
			</el-col>
		</el-row>
		<el-row class="intro team">
			<el-col class="item" :lg="5" :md="5" v-for="(item,index) in team" :key="index">
				<img v-bind:src=" './dist/team/' +item.imgName+'.png' " alt="" />
				<h3 v-text="item.name"></h3>
				<h3 v-html="item.pos"></h3>
				<p v-text="item.saying"></p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "vue-team",
		data() {
			return {
				leadership: [
					{name:"Gladius Swift", pos:"创始人",saying:"China is on the World Stage, from Hangzhou to New York, Chicago, Los Angeles and Austin. I believe Goth will be your best family member. Go Goth, get globalized.",imgName:"gladius"},
					{name:"黄婷 Tina", pos:"CEO",saying:"知者乐水，仁者乐山； 知者动，仁者静； 知者乐，仁者寿。寓中国传统文化之博大精深于美式教育中，兼柔并蓄，打造专属于中国孩子的美式成长历程。哥特当仁不让。",imgName:"Tina"},
					{name:"徐周星 Betty", pos:"COO",saying:"教育的本质其实是让学生在语言潜移默化的熏陶中培养出现代教育所要求的思维能力，这是哥特专属美式教育历程切实可以带给学生的。能够陪伴孩子打造他的专属美式教育，我很荣幸也很欣慰成为哥特一员。期待与孩子们的共同成长。",imgName:"Betty"},
				],
				team: [
					{name:"Blair Dixon", pos:"哈佛大学,心理学专业<br/>历任布朗大学招生官",saying:"How much more profitable for the independent mind, after the mere rudiments of education, to range through a library at random, taking down books as the mother wit suggests!",imgName:"Blair"},
					{name:"Danielle Mack", pos:"麻省理工学院，经济学专业<br/>莱斯大学招生面试官",saying:"Example is always more efficacious than precept.",imgName:"Danielle"},
					{name:"Primo Kasch", pos:"范德堡大学,教育学专业<br/>曾在Cranbrook Schools任教七年",saying:"A teacher affects eternity; he can never tell where his influence stops.",imgName:"Primo"},
					{name:"Christina Mahapatra", pos:"哥伦比亚大学,应用数据分析学专业<br/>曾任职马里兰大学商学院招生办",saying:"Genius without education is like silver in the mine.",imgName:"Christina"},
					{name:"Madelyn Brown", pos:"芝加哥大学,哲学专业<br/>曾在Turtle Rock Elementary任教三年",saying:"Every person has two education, one which he receives from others, and one, more important, which he gives himself.",imgName:"Madelyn"},
					{name:"John Naranjo", pos:"加州大学伯克利分校,计算机专业<br/>曾任职于Peddie School",saying:"Better be unborn than untaught, for ignorance is the root of misfortune.",imgName:"John"},
					{name:"Mary Agbo", pos:"斯坦福大学,教育学专业<br/>曾在Alice C. Stelle Middle School任教一年",saying:"Education commences at the mother's knee, and every word spoken within the hearsay of children tends towards the formation of character.",imgName:"Mary"},
					{name:"Lauren Dubois", pos:"西北大学,心理学专业<br/>曾任职于加州大学安德森招生办",saying:"Plato is dear to me , but dearer still is truth.",imgName:"Lauren"},
					{name:"Marisa Mamer", pos:"密歇根大学安娜堡分校,机械工程专业<br/>曾任职于Bragg Elementary",saying:"Education is a progressive discovery of our ignorance.",imgName:"Marisa"},
					{name:"Romit Ariel", pos:"华盛顿大学,教育学专业<br/>曾在Anza Elementary任职一年半",saying:"Education is an admirable thing, but it is well to remember from time to time that nothing worth knowing can be taught.",imgName:"Romit"},
					{name:"Samantha Kastan", pos:"约翰霍普金斯大学,教育学专业<br/>曾在Loomis Chaffee school任教五年",saying:"Education begins a gentleman, conversation completes him.",imgName:"Samantha"},
					{name:"Jonathan Kaley", pos:"南加州大学,法律专业<br/>曾任宾夕法尼亚大学夏校申请材料审核人",saying:"The purpose of education is to replace an empty mind with an open one.",imgName:"Jonathan"},
					{name:"Aviva Plumb", pos:"威斯康星大学,生物工程专业<br/>曾担任奥本大学生物助教",saying:"Education does not mean teaching people to know what they do not know; it means teaching them to behave as they do not behave.",imgName:"Aviva"},
					{name:"Alex Sullivan", pos:"莱斯大学,数学专业<br/>曾任职于Sierra Vista Intermediate",saying:"Education is not the filling of a pail but the lighting of a fire.",imgName:"Alex"},
					{name:"Abbott Mandel", pos:"加州大学洛杉矶分校,哲学专业<br/>曾在Oak Mesa Elementary任职三年",saying:"What sculpture is to a block of marble, education is to the soul.",imgName:"Abbott"},
					{name:"Rachel Clarke", pos:"<br/>杜克大学,环境工程专业<br/>太平洋大学3年招生经验",saying:"I have long since abandoned the notion that higher education is essential to either success or happiness. Hot houses of learning do not always grow anything edible.",imgName:"Rachel"},
					{name:"Nicole Mendoza", pos:"耶鲁大学,哲学专业<br/>曾在Kimball Union Academy任职一年半",saying:"The primary purpose of education is not to teach you to earn your bread, but to make every mouthful sweeter.",imgName:"Nicole"},
					{name:"Antoinette C. Wellman", pos:"埃默里大学,工商管理专业<br/>密苏里大学1年招生经验",saying:"The roots of education are bitter, but the fruit is sweet.",imgName:"Antoinette"},
					{name:"Katie Wells McConnell", pos:"卡内基梅隆大学,计算机专业<br/>历任阿肯色大学招生办副主任",saying:"We have but one task-the instruction of people, the diffusion of education, the encouragement of science-on that day, a great step will have then been taken in our generation.",imgName:"Katie"},
					{name:" Robin Tveit", pos:"波士顿学院,教育学专业<br/>曾任职于Towers Elementary",saying:"Education is the ability to listen to almost anything without losing your temper or your self-confidence.",imgName:"Robin"},
				]
			}
		}
	}
</script>
<style lang="less">
	@media (min-width: 1200px) {
		.intro {
			margin-left: 160px;
		}
	}
	@media (min-width: 992px) and (max-width: 1199px) {
		.intro {
			margin-left: 100px;
		}
	}
	@media (min-width: 768px) and (max-width: 991px) {
		.intro {
			margin-left: 20px;
			.item {
				height: 300px;
			}
		}
	}
	@media (max-width: 767px) {
		.intro {
			margin-left: 10px;
			.item {
				height: 350px;
			}
		}
	}
	.title {
		margin-top: 40px;
		h1 {
			padding-bottom: 30px;
			border-bottom: 1px solid #d2d3d5;
			font-size: 30px;
			font-family: "华文隶书";
		}
	}
	.employee {
		margin-top: 60px;
	}
	.intro  {
		margin-top: 20px;
		div {
			background: #d2d3d5;
			background-clip: content-box;
			height: 400px;
			padding: 10px 20px 5px 30px;
			min-width: 270px;
			img,p,h3 {
				font-size: 14px;
				padding: 10px 10px 0 10px;
			}
			h3 {
				line-height: 22px;
			}
			p {
				padding-top: 20px;
				font-size: 14px;
				line-height: 20px;
			}
		}
	}
	.team {
		div {
			margin-top: 12px;
		}
		margin-bottom: 50px;
	}
</style>