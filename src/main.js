/**
* @author: yangwenjie
* @file: description
* @Date: 2020-05-04 17:30:22
* @LastEditors: yangwenjie
* @LastEditTime: 2020-05-04 22:29:50
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App';

import StartPage from './components/Start.vue'
import SelectHole from './components/Select.vue';
import SilkWorm from './components/Silkworm.vue';
import LoadingVideo from './components/LoadingVideo.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
  { path: '/', component: StartPage },
  { path: '/s', component: SelectHole },
  { path: '/c', component: SilkWorm },
  { path: '/v', component: LoadingVideo },
];

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
