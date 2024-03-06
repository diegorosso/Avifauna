<template>
  <VueFinalModal
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="container-modal">
      <h3 class="modal-title">{{ modalTitle }}</h3>
      <p>{{ modalContent }}</p>

      <div class="btn-actions-container">
        <button
          class="btn btn-modal"
          @click="emit('back')"
        >
          Volver
        </button>
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

const props = defineProps(["modalTitle", "modalContent"]);

const emit = defineEmits<{
  (e: "back"): void;
}>();
</script>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  width: 100vw !important;
  height: 90vh;
  padding: 1rem 0 1rem 1rem;
  background: transparent !important;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content > * + * {
  margin: 0.5rem 0;
}

.container-modal {
  font-size: 1.2em;
  width: 55%;
  max-height: 98%;
  overflow-y: hidden;
  padding: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  text-align: center;
}

.confirm-modal-content h1 {
  font-size: var(--fs-4);
}
.confirm-modal-content button {
  margin-top: 4rem;
  width: 180px;
  border: 1px solid;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>
