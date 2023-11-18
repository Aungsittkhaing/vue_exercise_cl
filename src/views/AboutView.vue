<template>
  <div>
    <div class="about">
      <h1>This is an about page</h1>
      <!-- <h3>{{ this.$route.params.x }}</h3>
      <h3>{{ this.$route.params.y }}</h3> -->
    </div>
    <button class="me-2 btn btn-primary" @click="goHome()">Go Home</button>
    <button class="me-2 btn btn-info" @click="goList()">Go List</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goList() {
      this.$router.push({ name: "alllist" });
    },
  },
};
</script>
