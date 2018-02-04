window._ = require('lodash');
window.Vue = require('vue');
window.AOS = require('aos');

Vue.component('background-view', require('./components/Background.vue'));
Vue.component('tile-view', require('./components/Tile.vue'));
Vue.component('figure-view', require('./components/Figure.vue'));


const app = new Vue({
    el: '#app',

    mounted() {
        AOS.init({
            duration: 1200,
        });
    }
    
});
