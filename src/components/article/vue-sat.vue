<template>
	<el-row class="article-item">
		<el-col :span="18" :offset="3">
			<h1>解读新SAT</h1>
			<h3>1、新SAT考试启动时间</h3>
			<small>2016年3月北美　2016年5月亚洲</small>
			<h3>2、改革原因</h3>
			<p>第一，2012年，SAT考试的人数第一次被同样称为“美国高考”(很多时候也被称为“美国会考”)的ACT考试超越了。对于一个已经运行了80多年的考试来说，无疑是前所未有的挑战。</p>
			<p>第二，现在SAT的单词“太高冷”。现在SAT考试中的一部分单词除了在考试中出现之外，其他情况中特别是在日常生活中几乎都用不到，徒增了学生的负担。</p>
			<p>第三，现在SAT写作的要求使学生编造例子而忽略事实成为可能。美国一些高中老师指出现在的SAT写作基于事实的太少，主要是编造例子，给学生造成误导，并且与实际联系不大。</p>
			<h3>3.新旧SAT和ACT对比</h3>
			<table>
				<tr>
					<td>项目</td>
					<td>SAT</td>
					<td>新SAT</td>
					<td>ACT</td>
				</tr>
				<tr>
					<td>考试时长</td>
					<td>3小时45分钟</td>
					<td>3小时（50分钟写作可选）</td>
					<td>2小时55分钟（40分钟写作可选）</td>
				</tr>
				<tr>
					<td>分项</td>
					<td>ESSAY<br/>CR<br/>WRITING<br/>MATH</td>
					<td>Evidence-based<br/>Reading<br/>Evidence-based<br/>Writing<br/>
						Math<br/>Essay(可选)</td>
					<td>English<br/>Math<br/>Reading<br/>Science</td>
				</tr>
				<tr>
					<td>特点对比</td>
					<td>*强调整体逻辑能力<br/>*有限语境中的单词考察（词填）<br/>
						*复杂记分<br/>*10个小SECTION<br/></td>
					<td>*强调为大学及未来职业发展准备的逻辑能力（图表）<br/>	*强调语境中的词汇考察<br/>
					*简单记分（4选项，不倒扣）<br/>
					*4个大SECTION<br/>
					</td>
					<td>
						*强调为大学及未来职业发展准备的技能<br/>
						*语境中的词汇考察<br/>
						*简单记分（4选项，不倒扣）<br/>
						*4个大SECTION
					</td>
				</tr>
				<tr>
					<td>记分</td>
					<td>三个分项各200-800
					Essay  12
					总分600-2400
					</td>
					<td>EBRW 200-800
					Math  200-800
					Essay  3个独立的2-8
					总分   400-1600
					</td>
					<td>4个独立的36分
					平均计分
					</td>
				</tr>
			</table>
			<small>总结：</small>
			<h4>一、基本形式的变化</h4>
			<ul>
				<li>总分重回1600分</li>
				<li>选项五个变四个</li>
				<li>错题不再倒扣分</li>
			</ul>
			<h4>二、数学的变化</h4>
			<ul>
				<li>数学题干变长，读题难度加大</li>
				<li>分可以使用计算器和不能使用计算器两部分</li>
			</ul>
			<h4>三、写作与语言的变化</h4>
			<ul>
				<li>所有写作客观题都被嵌入文章</li>
				<li>新增英语措辞题</li>
				<li>新增图表与文字匹配题</li>
			</ul>
			<h4>四、阅读的变化</h4>
			<ul>
				<li>单词填空题取消</li>
				<li>去掉了短篇阅读</li>
				<li>更加重视科学和历史等主题</li>
				<li>新增例证分析题和图表信息题</li>
			</ul>
			<h3>4.SAT改革了该怎么复习啊?</h3>
			<p>第一，词汇简单化，但是考察语境会更多，参考下葛底斯堡演讲中的dedicate就会明白。建议多读美国建国纲领文章，比如芭芭拉弹劾尼克松演讲，马丁路德金，权利法案，独立宣言等。</p>
			<p>第二，作文加入修辞手法分析，论据分析，要学会议论文如何分析。</p>
			<p>第三，数学表格不要担心，对于中国孩子是小case，实际分析要练习一下，比如会考你汇率换算。</p>
			<p>第四，阅读文章还是会从原版杂志上出，所以多看杂志，新科学家，经济学家等等都可以看，英文原版小说可以继续按照学校要求阅读，如果学校没有要求，那就按照SAT推荐书单来。
			最后，历年真题还是很有参考性的，不会完全改变，只是新加了一部分内容而已，认真研历年真题和OG。跟着老师走，有效率有条理进行复习。
			</p>
		</el-col>
	</el-row>
</template>

<script>
	export default{
		name: "vue-sat",
	}
</script>

<style lang="less">
	@import url('../../assets/less/article-item.less');
	table,tr,td {
		border:1px solid black;
	}
	td {
		padding: 10px 0 10px 10px;
	}
	ul {
		li {
			list-style: inside;
		}
	}
</style>