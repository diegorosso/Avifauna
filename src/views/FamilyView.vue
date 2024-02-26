<template>
  <div v-if="family" class="container">
    <div class="flex-row">
      <aside class="aside flex-column">
        <!-- <RouterLink to="/#animals">
            <button class="btn btn-primary" >
                Volver
            </button>
        </RouterLink> -->
        <div
          v-for="(animal, index) in family?.animals"
          v-bind:key="index"
          @click="select(index)"
        >
          {{ animal.name }}
        </div>
      </aside>
      <main class="main">
        <header class="flex-column w-100">
          <div class="title">{{ family?.name }}</div>
          <div class="controls-container">
            <div class="control" @click="selectBack()">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div class="control" @click="selectNext()">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </header>
        <div class="card-container">
          <div class="img-container">
            <img
              :src="
                selectedAnimal.img ? selectedAnimal.img : '/icons/no-photo.png'
              "
              alt=""
            />
          </div>
          <div class="card-title">Ficha técnica:</div>
          <div class="data-container">
            <p class="item">
              <span class="highligted"> Nombre:</span> {{ selectedAnimal.name }}
            </p>
            <p class="item">
              <span class="highligted"> Nombre científico:</span>
              {{ selectedAnimal.scientific }}
            </p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let family = ref({});
let selectedAnimal = ref({});
let selectedAnimalIndex = ref(0);

onMounted(() => {
  family.value = JSON.parse(localStorage.getItem("selectedFamily"));
  selectedAnimal.value = family.value?.animals[0];
});

function select(index) {
  selectedAnimal.value = family.value.animals[index];
  selectedAnimalIndex.value = index;
}

function selectNext() {
  if(selectedAnimalIndex.value < family.value.animals.length - 1) selectedAnimalIndex.value++;
  selectedAnimal.value = family.value.animals[selectedAnimalIndex.value];
}

function selectBack() {
  if(selectedAnimalIndex.value > 0) selectedAnimalIndex.value--;
  selectedAnimal.value = family.value.animals[selectedAnimalIndex.value];
}
</script>

<style scoped>
.w-100 {
  width: 100%;
}
.container {
  padding-top: 150px;
  padding-inline: 0;
}

.title {
  font-size: var(--fs-4);
  font-weight: var(--fw-600);
  line-height: 1.2;
  width: 100%;
  display: flex;
  justify-content: center;
}
.aside {
  font-size: var(--fs-8);
  min-width: 260px;
  width: 20vw;
  max-height: 80vh;
  overflow-y: scroll;
  padding: 0.3em 1em;
}
.aside > div {
  cursor: pointer;
  padding-block: 0.2em;
}
.aside > div:hover {
  color: var(--bright-yellow-crayola);
}
.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  justify-content: space-between;
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vh;
}

.controls-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-inline: 4vw;
}

.control {
  cursor: pointer;
}
.control > ion-icon {
  font-size: 40px;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 5vh 0.5em;
  font-size: var(--fs-8);
}
.card-title {
  color: #82ad45;
  font-weight: 600;
  font-size: var(--fs-7);
}

.img-container {
  max-width: 300px;
  width: 200px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-container > img {
  width: 100%;
}
.item {
  display: flex;
}
.highligted {
  margin-right: 0.5em;
  color: var(--bright-yellow-crayola);
}
</style>
