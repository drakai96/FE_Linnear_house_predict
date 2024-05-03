<script>

export default {

  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Revenue by Number of New Customers"
        },
        axisY: {
          maximum: 1000,
          title: "New Customers",
          titleFontColor: "#47acb1",
          labelFontColor: "#47acb1",
          lineColor: "#47acb1",
          tickColor: "#47acb1",
          gridColor: "#d3d3d3"
        },
        axisY2: {
          maximum: 500000,
          title: "Revenue",
          valueFormatString: "$#,##0.##",
          titleFontColor: "#f07113",
          labelFontColor: "#f07113",
          lineColor: "#f07113",
          tickColor: "#f07113"
        },
        toolTip: {
          shared: true
        },
        data: [{
          type: "column",
          name: "No of New Customers",
          color: "#47acb1",
          dataPoints: [
            { label: "Jan", y: 30 },
            { label: "Feb", y: 70 },
            { label: "Mar", y: 81 },
            { label: "Apr", y: 93 },
            { label: "May", y: 104 },
            { label: "Jun", y: 97 },
            { label: "Jul", y: 170 },
            { label: "Aug", y: 190 },
            { label: "Sep", y: 350 },
            { label: "Oct", y: 410 },
            { label: "Nov", y: 485 },
            { label: "Dec", y: 550 }
          ]
        },{
          type: "line",
          axisYType: "secondary",
          name: "Revenue",
          color: "#f07113",
          dataPoints: [
            { label: "Jan", y: 100000 },
            { label: "Feb", y: 142000 },
            { label: "Mar", y: 165000},
            { label: "Apr", y: 198000 },
            { label: "May", y: 164000 },
            { label: "Jun", y: 151000 },
            { label: "Jul", y: 172000 },
            { label: "Aug", y: 235000 },
            { label: "Sep", y: 246000 },
            { label: "Oct", y: 275000 },
            { label: "Nov", y: 310000 },
            { label: "Dec", y: 345000 }
          ]
        }]
      },
      styleOptions: {
        width: "100%",
        height: "360px"
      }
    }
  },
  methods: {
    chartInstance(chart) {
      this.chart = chart;
    }
  }
}
</script>
<template>
    <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/>
</template>                              