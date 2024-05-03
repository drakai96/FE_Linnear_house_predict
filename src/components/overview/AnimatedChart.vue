<template>
  <div class="container">
    <p class="title">Select ID data</p>
    <div class="input-container">
      <input type="text" v-model="id" class="input-field" placeholder="Enter ID">
      <button @click="fetchData" class="btn">Confirm & Upload ID</button>
    </div>
    
    <div v-if="isLoadingHeaders" class="loading-message">
      Loading headers...
    </div>
    <div v-else-if="headers.length > 0" class="table-container">
      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th v-for="header in headers" :key="header.value">{{ header.text }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td v-for="(value, key) in item" :key="key">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else class="loading-message">
      Loading data...
    </div>
  </div>
</template>

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

.loading-message {
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

.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.table th,
.table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ec7878;
}

.table th {
  background-color: #eb0bc2;
  font-weight: bold;
}

.table tbody tr:nth-child(even) {
  background-color: #06707e;
}

.table tbody tr:hover {
  background-color: #ec6868;
}
</style>

<script setup>
import { ref } from 'vue';

const id = ref("");
const headers = ref([]);
const items = ref([]);
const sortBy = ref([]); // Ref for sorting by columns
const sortType = ref([]); // Ref for sort types (asc, desc)

const fetchData = async () => {
  try {
    const response = await fetch(`http://localhost:8000/datapi/data/${id.value}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Assuming the first item in the response array defines the structure of headers
    if (data.length > 0) {
      headers.value = Object.keys(data[0]).map(key => ({ text: key.toUpperCase(), value: key }));
    }

    items.value = data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
</script>
