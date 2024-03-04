<template>
  <div>
    <Header></Header>
    <RouterView></RouterView>
    <Footer></Footer>
    <ModalsContainer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import { RouterView } from 'vue-router'
import Footer from "./components/Footer.vue"
import { ModalsContainer } from 'vue-final-modal'


</script>
