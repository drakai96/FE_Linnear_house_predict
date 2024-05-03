<script>
import * as $ from 'jquery';

export default {
  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Number of Births in the United States"
        },
        axisY: { 
          title: "No of Births (in Millions)",         
          labelFormatter: (e) => {
            var suffixes = ["", "K", "M", "B"];
            var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
            if(order > suffixes.length - 1)
              order = suffixes.length - 1;
            var suffix = suffixes[order];
            return (e.value / Math.pow(1000, order)) + suffix;
          }
        },
        data: [{
          type: "line",
          xValueFormatString: "YYYY",
          dataPoints: []
        }]
      },
      styleOptions: {
        width: "100%",
        height: "360px"
      }
    }
  },
  methods: {
    parseDataAndRenderChart(url) {
      $.getJSON(url, (response) => {
          for(var i = 0; i < response.length; i++) {
            this.options.data[0].dataPoints.push({ x: new Date(response[i]["year"], 0, 1), y: response[i]["birth-number"]});
          }
          this.chart.render();
        });
    },
    chartInstance(chart) {
      this.chart = chart;
      this.parseDataAndRenderChart("https://canvasjs.com/data/gallery/vuejs/birth-rate-usa.json");
    }
  }
}
</script>
<template>
    <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/>
</template>                              