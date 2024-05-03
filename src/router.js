import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [ 
    {
      path: '/',
      component: Home,
    },
    {path: '/prediction',
    component: () => import("./components/overview/Predict.vue")
  },
    {path: '/training',
    component: ()=> import('./components/overview/Training.vue'),
    },
    {
      path: '/table1',
      component: () => import('./components/overview/AnimatedChart.vue'),
    },
    {
      path:'/precessing',
      component: ()=> import('./components/overview/PrecessingData.vue'),
    },
    {
      path: '/chart-with-zoom-pan',
      component: () => import('./components/overview/ChartWithZoom.vue'),
    },
    {
      path: '/multiseries-chart',
      component: () => import('./components/overview/MultiseriesChart.vue'),
    },
    {
      path: '/chart-multiple-axes',
      component: () => import('./components/overview/MultipleAxisChart.vue'),
    },
    {
      path: '/logarithmic-axis',
      component: () => import('./components/overview/LogarithmicAxisChart.vue'),
    },
    {
      path: '/chart-data-ajax-json',
      component: () => import('./components/overview/ChartJSONData.vue'),
    },
    {
      path: '/dynamic-line-chart',
      component: () => import('./components/overview/DynamicChart.vue'),
    },
    {
      path: '/drilldown-chart',
      component: () => import('./components/overview/DrilldownChart.vue'),
    },
    {
      path: '/responsive-chart',
      component: () => import('./components/overview/ResponsiveChart.vue'),
    },
    {
      path: '/synchronized-charts',
      component: () => import('./components/overview/SynchronizedCharts.vue'),
    },
    {
      path: "/total",
      component: () => import('./components/barchart/total.vue')
    },
    { path: "/table",
    component: () => import('./components/barchart/table.vue')},
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('./components/NotFound.vue'),
  },
  {
      path: '/:catchAll(.*)',
      redirect:'404'
  }    
  ],
})
