import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './style.css'

import '../node_modules/font-awesome/css/font-awesome.min.css';

import CanvasJSStockChart from '@canvasjs/vue-stockcharts';
import FileUpload from 'primevue/fileupload';
import 'primevue/resources/themes/aura-light-green/theme.css'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
let app = createApp(App)
app.use(router);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(CanvasJSStockChart);
app.use(FileUpload); // install the CanvasJS Vuejs StockChart Plugin
app.mount('#app')
