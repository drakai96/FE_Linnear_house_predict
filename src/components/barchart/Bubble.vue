<script>
export default {
  data() {
    return {
      rawData: [], // Store raw data fetched from the API
    };
  },
  computed: {
    options() {
      return {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Validation model"
        },
        axisX: {
          title: "MSE",
          logarithmic: true,
          maximum: 4000,
          labelAngle: 0,
          labelMaxWidth: 100
        },
        axisY: {
          title: "MAPE"
        },
        data: [{
          type: "bubble",
          indexLabel: "{label}",
          toolTipContent: "{label}:<br>MSE: {x}<br>MAPE: {y}",
          dataPoints: this.chartDataPoints // Use computed property to get chart dataPoints
        }]
      };
    },
    chartDataPoints() {
      // Convert raw data fetched from API to chart dataPoints format
      return this.rawData.map(item => ({
        label: item.label,
        x: item.x,
        y: item.y,
        z: item.z
      }));
    }
  },
  watch: {
    rawData: {
      handler(newData) {
        // Update chart options when rawData changes
        this.options.data[0].dataPoints = this.chartDataPoints;
      },
      immediate: true // Trigger handler immediately after component creation
    }
  },
  async created() {
    try {
      const response = await fetch('http://localhost:8000/visualization/bubble/1');
      this.rawData = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};
</script>

<template>
  <CanvasJSChart :options="options" style="width: 100%; height: 360px;" />
</template>
