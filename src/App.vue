<template>
  <div>
    <Header></Header>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import { RouterView } from 'vue-router'
import Footer from "./components/Footer.vue"
</script>
