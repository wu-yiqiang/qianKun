import { createApp, nextTick } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import globalComponents from '@/components';
import router from './router';
import store from './store';
import i18n from './locale';
import directive from './directive';
import './mock';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/style/global.less';
import '@/api/interceptor';

const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);
app.use(router);
app.use(store);
app.use(i18n);
app.use(globalComponents);
app.use(directive);
app.mount('#app');

/* 确保装载子应用的容器已创建，等DOM加载完成后启动子应用 */
nextTick(() => {
  registerMicroApps([
    {
      name: 'bpmn',
      entry: '//localhost:6789',
      container: '#micro-app-container',
      activeRule: '/bpmn',
    },
  ]);
  // 启动子应用
  start();
});
