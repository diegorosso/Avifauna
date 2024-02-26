<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
  <div class="container-img">
    <img class="medalla" src="../assets/images/medalla.jpg" alt="" />
  </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
</script>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  width: 70vw;
  height: 90vh;
  padding: 0;
  background: #fff;
  border-radius: 0.5rem;
}
.container-img{
  width: 100%;
  max-height: 98%;
  overflow-y: auto;
}
.medalla{
  width: 100%;

}
</style>