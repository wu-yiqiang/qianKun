// 注册微应用文件
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
	{
		name: 'bpmn',
		entry: '//localhost:6789',
		container: '#micro-app-container',
		activeRule: '/bpmn'
	},
]);
// 启动子应用
start();