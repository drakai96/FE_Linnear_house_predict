
<template>
    <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/>
</template>

<script>
import { ref, watch, computed } from 'vue';

export default {
  setup() {
    const chart = ref(null);
    const dataPoints = ref([]);

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/datapi/datapoint/1');
        const jsonData = await response.json();
        // Assuming the API response is an array of data points with label and y properties
        dataPoints.value = jsonData.map(item => ({ label: item.label, y: item.y }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data when component is mounted
    fetchData();

    // Watch for changes in the dataPoints array and update the chart
    watch(dataPoints, () => {
      if (chart.value) {
        chart.value.render(); // Render the chart when dataPoints change
      }
    });

    // Generate options object dynamically based on dataPoints
    const options = computed(() => {
      return {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: {
          text: "UPI Transactions in India"
        },
        axisX: {
          valueFormatString: "YYYY",
          labelTextAlign: "center",
          labelAngle: 0
        },
        axisY: {
          title: "Amount (in ₹ Crore)",
          valueFormatString: "₹##,##,##0cr"
        },
        data: [{
          type: "line",
          yValueFormatString: "₹##,##,##0.## crores",
          dataPoints: dataPoints.value // Use the reactive dataPoints variable
        }]
      };
    });

    const styleOptions = {
      width: "100%",
      height: "360px"
    };

    // Method to assign chart instance
    const chartInstance = (chartRef) => {
      chart.value = chartRef;
    };

    return {
      chart,
      options,
      styleOptions,
      chartInstance
    };
  }
}
</script>
