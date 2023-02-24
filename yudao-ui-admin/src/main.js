import Vue from 'vue'

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import App from './App'
import store from './store'
import {constantRoutes} from './router'
import VueRouter from 'vue-router'
import directive from './directive' // directive
import plugins from './plugins' // plugins

import './assets/icons' // icon
import './permission' // permission control
import './tongji' // 百度统计
import { getDicts } from "@/api/system/dict/data";
import { getConfigKey } from "@/api/infra/config";
import { parseTime, resetForm, handleTree, addBeginAndEndTime, divide} from "@/utils/ruoyi";
// import Pagination from "@/components/Pagination";
// 自定义表格工具扩展
import RightToolbar from "@/components/RightToolbar"
// 代码高亮插件
// import hljs from 'highlight.js'
// import 'highlight.js/styles/github-gist.css'
import {DICT_TYPE, getDictDataLabel, getDictDatas, getDictDatas2} from "@/utils/dict";
import './public-path'
// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.getDictDatas = getDictDatas
Vue.prototype.getDictDatas2 = getDictDatas2
Vue.prototype.getDictDataLabel = getDictDataLabel
Vue.prototype.DICT_TYPE = DICT_TYPE
Vue.prototype.handleTree = handleTree
Vue.prototype.addBeginAndEndTime = addBeginAndEndTime
Vue.prototype.divide = divide

// 全局组件挂载
Vue.component('DictTag', DictTag)
Vue.component('DocAlert', DocAlert)
// Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)
// 字典标签组件
import DictTag from '@/components/DictTag'
import DocAlert from '@/components/DocAlert'
// 头部标签插件
import VueMeta from 'vue-meta'

Vue.use(directive)
Vue.use(plugins)
Vue.use(VueMeta)
// Vue.use(hljs.vuePlugin);

// bpmnProcessDesigner 需要引入
import MyPD from "@/components/bpmnProcessDesigner/package/index.js";
Vue.use(MyPD);
import "@/components/bpmnProcessDesigner/package/theme/index.scss";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

// Form Generator 组件需要使用到 tinymce
import Tinymce from '@/components/tinymce/index.vue'
Vue.component('tinymce', Tinymce)
import '@/assets/icons'
import request from "@/utils/request" // 实现 form generator 使用自己定义的 axios request 对象
console.log(request)
Vue.prototype.$axios = request
import '@/styles/index.scss'

// 默认点击背景不关闭弹窗
import ElementUI from 'element-ui'
ElementUI.Dialog.props.closeOnClickModal.default = false

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: localStorage.getItem("size") || "medium", // set element-ui default size
});

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })


/* 渲染函数 */
function render(props = {}) {
  const { container } = props;
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/bpmn/' : '/',  // 运行在主应用中时，添加路由命名空间 /app-vue
    mode: 'history',
    constantRoutes,
  });
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app'); // 为了避免根id #app 与其他的 DOM 冲突，限制查找范围
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap() {
  console.log('进入vue app 子应用的bootstrap周期');
}
// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log('进入vue app 子应用的mount周期', props);
  render(props);
}
// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount() {
  console.log('进入vue app 子应用的unmount周期');
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
