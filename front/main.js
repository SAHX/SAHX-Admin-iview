import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from './store/index'
import api from './lib/api'
import iView from 'iview'
import App from './views/app.vue'    // 路由挂载
import routes from './router.js'     // 路由列表
import timeago from './util/timeago.min'
import time_format_m_d from './filters/time_format_m_d'
import 'iview/dist/styles/iview.css'
import VuePreview from 'vue-preview'
import Page from './views/common/page.vue'
import { sync } from 'vuex-router-sync'

Vue.use(api,axios);
Vue.use(iView);
Vue.use(VuePreview);
Vue.use(VueRouter);
Vue.filter('formatDate', function (time) {
    let timeagoInstance = new timeago();
    let theTime = parseInt(time) * 1000;
    if ((new Date().getTime()) - theTime > 86400000) {
        return time_format_m_d(theTime);
    } else {
        return timeagoInstance.format(theTime, 'zh_CN');
    }
});
Vue.mixin({
    // 全局混合 page组件
    components:{
      Page
    },
    //  全局混合 导航路由
    methods: {
        routerTo(path, param) {
            this.$router.push({name: path, params: param });
        },
    }
});
const router = new VueRouter({
    base: __dirname, routes,
});
sync(store, router);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});

