<script>
import CanvasJS from '@canvasjs/charts';
export default {

  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Population Pyramid - United Kingdom",
          fontFamily: "Tahoma, Verdana, sans-serif"
        },
        axisY: {
          labelFormatter: (e) => {
          var suffixes = ["", "K", "M", "B"];
          var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
          if(order > suffixes.length - 1)
            order = suffixes.length - 1;
          var suffix = suffixes[order];
          return Math.abs(e.value) / Math.pow(1000, order) + suffix;
          }
        },
        toolTip: {
          shared: true,
          contentFormatter: (e) => {
          var content = "<span style='font-weight: bold;'>Age Group: " + e.entries[0].dataPoint.label + "</span><br/>";
          for (var i = 0; i < e.entries.length; i++) {
            content += "<span style='color:" + e.entries[i].dataSeries.color +"'>" + e.entries[i].dataSeries.name + "</span>: " + CanvasJS.formatNumber(Math.abs(e.entries[i].dataPoint.y), "#,##0.##");
            content += "<br/>";
          }
          return content;
          }
        },
        legend: {
          verticalAlign: "top"
        },
        data: [{
          type: "stackedBar",
          showInLegend: true,
          name: "♂️Male",
          legendMarkerType: "none",
          color: "#00a6ed",
          dataPoints: [
          { label: "0-4", y: -2009363},
          { label: "5-9", y: -2108550},
          { label: "10-14", y: -2022370},
          { label: "15-19", y: -1880611},
          { label: "20-24", y: -2072674},
          { label: "25-29", y: -2275138},
          { label: "30-34", y: -2361054},
          { label: "35-39", y: -2279836},
          { label: "40-44", y: -2148253},
          { label: "45-49", y: -2128343},
          { label: "50-54", y: -2281421},
          { label: "55-59", y: -2232388},
          { label: "60-64", y: -1919839},
          { label: "65-69", y: -1647391},
          { label: "70-74", y: -1624635},
          { label: "75-79", y: -1137438},
          { label: "80-84", y: -766956},
          { label: "85-89", y: -438663},
          { label: "90-94", y: -169952},
          { label: "95-99", y: -34524},
          { label: "100+", y: -3016}
          ]
        }, {
          type: "stackedBar",
          showInLegend: true,
          name: "♀️Female",
          legendMarkerType: "none",
          color: "#f70a8d",
          dataPoints: [
          { label: "0-4", y: 1915127 },
          { label: "5-9", y: 2011016 },
          { label: "10-14", y: 1933970 },
          { label: "15-19", y: 1805522 },
          { label: "20-24", y: 2001966 },
          { label: "25-29", y: 2208929 },
          { label: "30-34", y: 2345774 },
          { label: "35-39", y: 2308360 },
          { label: "40-44", y: 2159877 },
          { label: "45-49", y: 2167778 },
          { label: "50-54", y: 2353119 },
          { label: "55-59", y: 2306537 },
          { label: "60-64", y: 1985177 },
          { label: "65-69", y: 1734370 },
          { label: "70-74", y: 1763853 },
          { label: "75-79", y: 1304709 },
          { label: "80-84", y: 969611 },
          { label: "85-89", y: 638892 },
          { label: "90-94", y: 320625 },
          { label: "95-99", y: 95559 },
          { label: "100+", y: 12818 }
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