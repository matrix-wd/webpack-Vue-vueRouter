import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// lazy-load
const routes = [
	{
		path: '/', 
		component: resolve => require(['../components/vue-index.vue'], resolve)
	},
	{	
		path: '/index',
		component: resolve => require(['../components/vue-index.vue'], resolve)
	},
	{
		path: '/product', 
		component: resolve => require(['../components/vue-product.vue'], resolve)
	},
	{	
		path: '/team', 
		component: resolve => require(['../components/vue-team.vue'], resolve)
	},
	{
		path: '/story', 
		component: resolve => require(['../components/vue-story.vue'], resolve)
	},
	{
		path: '/article', 
		component: resolve => require(['../components/vue-article.vue'], resolve)
	},
	{
		path: '/us', 
		component: resolve => require(['../components/vue-us.vue'], resolve)
	},
	{
		path: '/product/purelove', 
		component: resolve => require(['../components/product/vue-pure-love.vue'], resolve)
	},
	{
		path: '/product/puppylove', 
		component: resolve => require(['../components/product/vue-puppy-love.vue'], resolve)
	},
	{
		path: '/product/maturelove', 
		component: resolve => require(['../components/product/vue-mature-love.vue'], resolve)
	},
	{
		path: '/product/familymember', 
		component: resolve => require(['../components/product/vue-family-member.vue'], resolve)
	},
	{
		path: '/article/america', 
		component: resolve => require(['../components/article/vue-america.vue'], resolve)
	},
	{
		path: '/article/defer', 
		component: resolve => require(['../components/article/vue-defer.vue'], resolve)
	},
	{
		path: '/article/enroll', 
		component: resolve => require(['../components/article/vue-enroll.vue'], resolve)
	},
	{
		path: '/article/transfer', 
		component: resolve => require(['../components/article/vue-transfer.vue'], resolve)
	},
	{
		path: '/article/ielts', 
		component: resolve => require(['../components/article/vue-ielts.vue'], resolve)
	},
	{
		path: '/article/sat', 
		component: resolve => require(['../components/article/vue-sat.vue'], resolve)
	},
	{
		path: '/article/ap', 
		component: resolve => require(['../components/article/vue-ap.vue'], resolve)
	},
]


export default new VueRouter({
 	base: __dirname,
	routes
})