import Vue from 'vue'
import App from './App'
import router from './router'
import "zone.js/dist/zone"; // 在父应用引入 zone.js，需要在 import qiankun 之前引入。
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

const vueApp = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

/* 确保装载子应用的容器已创建，等DOM加载完成后启动子应用 */
vueApp.$nextTick( () => {
  /* 注册微应用并启动 */
  registerMicroApps([
    /**
     * name: 微应用名称 - 具有唯一性
     * entry: 微应用入口 - 通过该地址加载微应用
     * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
     * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
     */
    {
      name: 'bpmn',
      entry: '//localhost:6789',
      container: '#micro-app-container',
      activeRule: '/bpmn'
    }
  ]);
  start();
})
