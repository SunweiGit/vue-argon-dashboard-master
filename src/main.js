/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import i18n from './lang'

/**
 * 在main.js文件中全局使用：axios
 */
import http from './utils/request.js';  //此处问http文件的路径
import {getAuthorization} from "@/utils/authorization"
Vue.prototype.$http = http;

Vue.config.productionTip = false

Vue.use(ArgonDashboard)
new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        // 判断该路由是否需要登录权限
        if (getAuthorization()) {
            // 获取当前的token是否存在
            next();
        } else {
            next({
                path: '/login',
                // 将跳转的路由path作为参数，登录成功后跳转到该路由
                query: {redirect: to.fullPath}
            })
        }
    } else {
        // 如果不需要权限校验，直接进入路由界面
        next();
    }
});

