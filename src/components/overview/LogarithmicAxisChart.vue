<script>

export default {

  data() {
    return {
      options: {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: {
          text: "Change in Atmospheric Mass Density with Altitude",
        },
        axisX: {
          title: "Altitude",
          valueFormatString: "#,##0 km"
        },
        axisY: {
          logarithmic: true, //change it to false
          title: "Atmospheric Mass Density (g/cm3)",
          titleFontSize: 16,
          valueFormatString: "0.0#E+0"
        },
        data: [{
          type: "line",
          yValueFormatString: "0.0##E+0 g/cm3",
          xValueFormatString: "#,##0 km",
          name: "Atmospheric Mass Density",
          dataPoints: [
            { x: 0, y: 1.293 * Math.pow(10, -3) },
            { x: 10, y: 3.982 * Math.pow(10, -4) },
            { x: 20, y: 8.269 * Math.pow(10, -5) },
            { x: 30, y: 1.554 * Math.pow(10, -5) },
            { x: 40, y: 3.148 * Math.pow(10, -6) },
            { x: 50, y: 8.280 * Math.pow(10, -7) },
            { x: 60, y: 2.328 * Math.pow(10, -7) },
            { x: 70, y: 5.761 * Math.pow(10, -8) },
            { x: 80, y: 1.296 * Math.pow(10, -8) },
            { x: 90, y: 2.702 * Math.pow(10, -9) },
            { x: 100, y: 4.535 * Math.pow(10, -10) },
            { x: 110, y: 6.809 * Math.pow(10, -11) },
            { x: 120, y: 1.604 * Math.pow(10, -11) },
            { x: 130, y: 6.210 * Math.pow(10, -12) },
            { x: 140, y: 3.143 * Math.pow(10, -12) },
            { x: 150, y: 1.825 * Math.pow(10, -12) }
          ]
        }]
      },
      styleOptions: {
        width: "100%",
        height: "360px"
      }
    }
  }
}
</script>
<template>
    <CanvasJSChart :options="options" :style="styleOptions"/>
</template>                              