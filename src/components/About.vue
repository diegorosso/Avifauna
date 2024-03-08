<template>
  <section class="section about" id="about">
    <div class="txt-container">
      <p class="section-subtitle">
        <img
          src="../assets/images/subtitle-img-green.png"
          width="32"
          height="7"
          alt="Wavy line"
        />
        <span>Nuestro parque</span>
      </p>

      <h2 class="h2 section-title">
        La historia de cómo <strong>nació Avifauna</strong>
      </h2>
      <div class="section-text">
        <p class="text">
          En 1978, los hermanos Antonio y Francisco Ibañez Burgo adquirieron una
          antigua cantera.
        </p>
        <p class="text">
          Tras años de desarrollo y con la llegada de nuevos colaboradores el
          parque abrió al público en 2000, convirtiéndose en un referente
          ornitológico.
        </p>
        <p class="text">
          Hoy, Avifauna destaca por su compromiso con la educación ambiental,
          colaborando con entidades locales y educativas, y recibe visitantes de
          toda la península.
        </p>
      </div>

      <button class="btn btn-primary" @click="open">
        <span>Conoce la historia completa</span>
        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>

    <div class="img-container display-none">
      <img class="img" src="../assets/photos/DSC01286.jpg" alt="" />
    </div>
  </section>
</template>

<script setup>
import { useModal } from "vue-final-modal";
import FullHistoryComponent from "./FullHistoryComponent.vue";

const { open, close } = useModal({
  component: FullHistoryComponent,
  attrs: {
    onBack() {
      close();
    },
  },
});
</script>

<style scoped>
.section.about {
  background-color: #2e2e2e;
  width: 100vw;
  padding: 0 0 0 2em;
  display: flex;
  justify-content: space-between;
}

.txt-container,
.img-container {
  width: 58%;
}

.txt-container {
  width: 100%;
  padding-block: calc(var(--section-padding) - 2.5em);
}
h2.section-title {
  color: #fff;
  line-height: 1.3;
  font-size: var(--fs-4);
  padding-top: 0.3em;
}

.section-text {
  line-height: 1.4;
  color: #fff;
  max-width: 89%;
  padding-top: 0.5em;
  font-family: "Inter", sans-serif;
  font-size: var(--fs-8);
}
.text {
  padding-top: 0.3em;
}

.img {
  width: 100%;
}

.btn.btn-primary {
  margin-top: 2em;
  cursor: pointer;
}

@media (min-width: 992px) {
  .display-none {
    display: inline;
  }
  .txt-container {
    width: 42%;
  }
}
</style>
