<script>

export default {

  data() {
    return {
      chart: null,
      options: {
        zoomEnabled: true,
        title:{
          text: "Try Zooming & Panning"
        },
        data: [{
          type: "line",
          dataPoints: this.generateRandomData()
        }]
      },
      styleOptions: {
        width: "100%",
        height: "360px"
      }
    }
  },
  methods: {
    generateRandomData() {
      var y  = 1000, dps = [];
      for(var i = 0; i < 1000; i++) {
        y += Math.round(Math.random() * 10 - 5);
        dps.push({ y: y});
      }
      return dps;
    },
    chartInstance(chart) {
      this.chart = chart;
    }
  }
}
</script>
<template>
    <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/>
</template>                              