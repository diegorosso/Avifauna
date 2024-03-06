<template>
  <Home></Home>
  <Feature></Feature>
  <Schedule @guidedVisit="handleGuidedVisit"></Schedule>
  <div class="section btn-container">
    <button @click="open" class="btn btn-primary">
      Medalla de plata de Galicia 2005
    </button>
  </div>
  <AnimalsComponent></AnimalsComponent>
  <Cta></Cta>
  <About></About>
  <Event></Event>
  <Contact :guidedVisit="guidedVisitContact"></Contact>
</template>

<script setup>
import Home from "../components/Home.vue";
import Feature from "../components/Feature.vue";
import Schedule from "../components/Schedule.vue";
import Cta from "../components/Cta.vue";
import About from "../components/About.vue";
import AnimalsComponent from "../components/AnimalsComponent.vue";
import Event from "../components/Event.vue";
import Contact from "../components/Contact.vue";
import MedallaDePlata from "../components/MedallaDePlata.vue";
import { useModal } from "vue-final-modal";
import { ref } from "vue";

let guidedVisitContact = ref(false);

const handleGuidedVisit = () => {
  guidedVisitContact.value = !guidedVisitContact.value;
  
  const anchorElement = document.getElementById('Contact'); 
  anchorElement.scrollIntoView({ behavior: 'smooth' });
}

const { open, close } = useModal({
  component: MedallaDePlata,
  attrs: {
    onBack() {
      close();
    },
  },
});
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "inter", sans-serif;
  background-color: #2e2e2e;
  color: #fff;
}

.btn {
  font-size: var(--fs-8);
}
</style>
