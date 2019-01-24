import Vue from 'vue';
import vueRouter from 'vue-router'
import App from './App.vue';
import home from './components/home.vue'
import goods from './components/goods/goods.vue'
import news from './components/news/news.vue'
import newsinfo from './components/news/newsinfo.vue'
import Mint from 'mint-ui'
import moment from 'moment'
import 'mint-ui/lib/style.css'
import '../www/mui/css/mui.css'
import '../www/css/base.css'
import resource from 'vue-resource'

Vue.use(vueRouter)
var router = new vueRouter({
    linkActiveClass:'mui-active',
    routes:[
        {path:'',component:home},
        {path:'/home',component:home},
        {
            path:'/goods/list',
            component:goods

        },
        {path:'/news/newslist', component:news},
        {path:'/news/newsinfo/:id?', component:newsinfo}
        /*{path:'/photo', component:photo},
        {path:'/shopcar', component:shopcar},
        {path:'/subcom', component:subcom}*/
    ]
})

Vue.use(Mint)
Vue.use(resource)
Vue.filter('dataFmt',(input,fmtString)=> moment(input).format(fmtString))
new Vue({
    el:'#app',
    router,
    render:c=>c(App)
})