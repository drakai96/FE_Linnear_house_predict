<template>
    <div>
      <input type="file" @change="handleFileUpload">
      <input type="text" v-model="fileName" placeholder="Enter file name">
      <button @click="uploadData">Upload</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        csvFile: null,
        fileName: "",
      };
    },
    methods: {
      handleFileUpload(event) {
        this.csvFile = event.target.files[0];
      },
      uploadData() {
        if (!this.csvFile) {
          console.error("No file selected.");
          return;
        }
        if (!this.fileName.trim()) {
          console.error("File name is required.");
          return;
        }
        const formData = new FormData();
        formData.append("csvFile", this.csvFile);
        formData.append("fileName", this.fileName);
        
        // Here you can send formData to your server using fetch or another method
        // Example: Sending formData using fetch
        fetch("http://localhost:8000/datapi/data_upload/1", {
          method: "POST",
          body: formData,
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network respon
  