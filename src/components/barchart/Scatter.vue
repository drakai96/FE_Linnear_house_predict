<template>
    <div>
      <CanvasJSChart :options="options" :style="styleOptions" />
    </div>
</template>
  
  <script>
  import { ref, computed, watch } from 'vue';
  
  export default {
    setup() {
      const options = ref({
        animationEnabled: true,
        zoomEnabled: true,
        exportEnabled: true,
        title:{
          text: "Real Estate Rates"
        },
        axisX: {
          title:"Area (in sq. ft)",
        },
        axisY:{
          title: "Price (in USD)",
          valueFormatString: "$#,##0k"
        },
        data: [{
          type: "scatter",
          toolTipContent: "<b>Area: </b>{x} sq.ft<br/><b>Price: </b>${y}k",
          dataPoints: []
        }]
      });
  
      const styleOptions = {
        width: "100%",
        height: "360px"
      };
  
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/visualization/scatter/1');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          options.value.data[0].dataPoints = jsonData.map(item => ({ x: item.x, y: item.y }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Fetch data when component is mounted
      fetchData();
  
      // Watch for changes in dataPoints and update options
      watch(() => options.value.data[0].dataPoints, () => {
        options.value = { ...options.value }; // Force reactivity
      });
  
      // Computed property to watch for changes in options and return a deep copy
      const chartOptions = computed(() => {
        return JSON.parse(JSON.stringify(options.value));
      });
  
      return {
        options: chartOptions,
        styleOptions,
      };
    }
  };
  </script>
  