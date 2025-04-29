import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/gloable.css'
import request from "@/utils/request";
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.request=request
Vue.prototype.rIcon = {
  excludeGrandClasses: [
    "el-popconfirm__action"
  ],
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
