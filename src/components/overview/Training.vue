<template>
    <div class="container">
        {{ options }}
      <p class="title">Select ID data</p>
      <div class="input-container">
        <input type="text" v-model="id" class="input-field" placeholder="Enter ID">
        <button @click="fetchData" class="btn">Start Training</button>
      </div>
      
      <div v-if="isLoading" class="loading-response">
        Loading Response...
      </div>
      <div v-else class="table-container">
        <CanvasJSChart :options="options" :style="chartStyle" />
      </div>
    </div>
</template>
  
<script setup>
import { ref, computed, watch } from 'vue';

const id = ref("");
const rawData = ref([]);
const isLoading = ref(false);

const fetchData = async () => {
  try {
    isLoading.value = true;
    const response = await fetch(`http://localhost:8000/training/training/${id.value}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    rawData.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    isLoading.value = false;
  }
};

watch(id, fetchData, { immediate: true });

const chartDataPoints = computed(() => {
  return rawData.value.map(item => ({
    label: item.name,
    x: item.mape,
    y: item.mse,
    z: item.training_time,
  }));
});

const options = ref({
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
    toolTipContent: "{label}:<br>MSE: {x}<br>MAPE: {y}<br>TRAINING TIME:{z}",
    dataPoints: chartDataPoints.value
  }]
});

watch(chartDataPoints, (newChartDataPoints) => {
  options.value.data[0].dataPoints = newChartDataPoints;
});
</script>

  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .input-field {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  
  .loading-response {
    font-style: italic;
    color: #777;
  }
  
  .table-container {
    overflow-x: auto;
  }
  
  .table-wrapper {
    max-width: 100%;
    overflow-x: auto;
  }
  
  </style>
  