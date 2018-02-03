window.Vue = require('vue');

Vue.component('title-view', require('./components/Title.vue'));

const app = new Vue({
    el: '#app'
});
