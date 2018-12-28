import Vue from 'vue';
import App from './components/App.vue';

Vue.prototype.$eventHub = new Vue(); // Global event bus

new Vue({
    render: h => h(App),
}).$mount('#app');