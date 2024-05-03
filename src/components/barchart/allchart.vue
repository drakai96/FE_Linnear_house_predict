// MyRouterComponent.vue
<template>
  <div>
    <div v-html="fetchedContent"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetchedContent: "",
    };
  },
  mounted() {
    fetch('index.html') // Adjust path to your HTML file
      .then(response => response.text())
      .then(htmlContent => {
        this.fetchedContent = htmlContent;
      })
      .catch(error => {
        console.error("Error fetching external content:", error);
      });
  },
};
</script>