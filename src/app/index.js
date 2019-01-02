import Vue from 'vue';
import App from './components/App.vue';
import io from 'socket.io-client';
Vue.prototype.$eventHub = new Vue(); // Global event bus

Vue.filter('reverse', function (value) {
    // slice to make a copy of array, then reverse the copy
    return value.slice().reverse();
});
new Vue({
    render: h => h(App),
}).$mount('#app');