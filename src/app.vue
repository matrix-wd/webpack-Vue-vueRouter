<template>
	<div>
		<vueHeader></vueHeader>
		<vueContent></vueContent>
		<vueFooter></vueFooter>
	</div>
</template>

<script>
	import vueHeader from './components/vue-header.vue';
	import vueContent from './components/vue-content.vue';
	import vueFooter from './components/vue-footer.vue';
	export default{
		name: "app",
		components: {
			vueHeader,
			vueContent,
			vueFooter
		}
	}
</script>