/**
* @author: yangwenjie
* @file: description
* @Date: 2020-05-04 17:30:22
* @LastEditors: yangwenjie
* @LastEditTime: 2020-05-04 19:21:18
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App';

import StartPage from './components/Start.vue'
import SelectHole from './components/Select.vue';
import SilkWorm from './components/Silkworm.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
  { path: '/', component: StartPage },
  { path: '/s', component: SelectHole },
  { path: '/c', component: SilkWorm },
];

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
