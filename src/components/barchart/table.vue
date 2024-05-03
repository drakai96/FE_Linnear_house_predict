<template>
    
    <div>
    <p>Nham1</p>
      <div v-if="headers.length > 0">
        <EasyDataTable
          :headers="headers"
          :items="items"
          :sort-by="sortBy"
          :sort-type="sortType"
          multi-sort
        />
      </div>
      <div v-else>Loading headers...</div>
  
      <!-- Displaying the retrieved data dynamically -->
      <div v-if="items.length > 0">
      </div>
      <div v-else>Loading data...</div>
    </div>
</template>
    
  <script lang="ts" setup>
  import type { Header, Item, SortType } from "vue3-easy-data-table";
  import { ref, onMounted } from 'vue';
  
  const sortBy: string[] = []; // No initial sorting
  const sortType: SortType[] = []; // No initial sorting type
  
  const headers = ref<Header[]>([]);
  const items = ref<Item[]>([]);
  const id = ref<string>(""); // Default ID value
  
  onMounted(async () => {
    try {
      const response = await fetch(`http://localhost:8000/data/${id.value}`);
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
  });
  </script>
  
<style src="./styles.css" scoped></style>