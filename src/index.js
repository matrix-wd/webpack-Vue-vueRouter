import Vue from 'vue';
import App from './app.vue';
import router from './router';
import ElementUI  from './element';


new Vue({
	router,
	render: h=>h(App)
}).$mount("#app");