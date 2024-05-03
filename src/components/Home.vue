<template>
  <div class="file-upload">
    <input type="file" @change="handleFileChange">
    <input type="text" v-model="id" placeholder="Enter ID" class="input-id">
    <button @click="uploadFile" class="upload-btn">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      id: "",
    };
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
    },
    async uploadFile() {
      if (!this.file || !this.id.trim()) {
        console.error("Please select a file and enter an ID.");
        return;
      }
      
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("id", this.id);
      
      try {
        const response = await fetch(`http://localhost:8000/datapi/data_upload/${this.id}`, {
          method: "POST",
          body: formData,
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        console.log("File uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    },
  },
};
</script>

<style scoped>
.file-upload {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-id {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.upload-btn {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
