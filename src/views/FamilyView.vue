<template>
  <div v-if="family" class="container">
    <div class="flex-row space-between">
      <aside class="aside flex-column">
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
          <div class="controls-container">
            <div class="control" @click="selectBack()">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div class="title">{{ family?.name }}</div>
            <div class="control" @click="selectNext()">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </header>
        <div class="card-container">
          <div
            class="card-header flex-row flex-wrap space-between align-center"
          >
            <div class="card-info">
              <div class="card-title">{{ selectedAnimal.name }}</div>
              <div class="card-subtitle">{{ selectedAnimal.scientific }}</div>

              <div class="data-container">
                <p class="item">
                  <span class="highlighted"> Alimentación:</span>
                  {{
                    selectedAnimal.biology?.feeding
                      ? selectedAnimal.biology.feeding
                      : "-"
                  }}
                </p>
                <p class="item">
                  <span class="highlighted"> Tamaño:</span>
                  {{
                    selectedAnimal.biology?.size
                      ? selectedAnimal.biology.size
                      : "-"
                  }}
                </p>
                <p class="item">
                  <span class="highlighted"> Reproducción:</span>
                  {{
                    selectedAnimal.biology?.reproduction
                      ? selectedAnimal.biology.reproduction
                      : "-"
                  }}
                </p>

                <p class="item">
                  <span class="highlighted"> Hábitat:</span>
                  {{ selectedAnimal.habitat ? selectedAnimal.habitat : "-" }}
                </p>
              </div>
            </div>
            <div
              class="img-container"
              :class="{ 'no-img': !selectedAnimal.img }"
            >
              <img
                :src="
                  selectedAnimal.img
                    ? selectedAnimal.img
                    : '/icons/no-photo.png'
                "
                :class="{ 'no-img': !selectedAnimal.img }"
                alt=""
              />
            </div>
          </div>
          <div class="description">
            {{ selectedAnimal.description }}
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

window.scrollTo(0, 0);

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
  if (selectedAnimalIndex.value < family.value.animals.length - 1)
    selectedAnimalIndex.value++;
  selectedAnimal.value = family.value.animals[selectedAnimalIndex.value];
}

function selectBack() {
  if (selectedAnimalIndex.value > 0) selectedAnimalIndex.value--;
  selectedAnimal.value = family.value.animals[selectedAnimalIndex.value];
}
</script>

<style scoped>
.w-100 {
  width: 100%;
}
.container {
  padding-top: 170px;
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
/* .flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.align-center {
  align-items: center;
}
.center {
  justify-content: center;
}
.space-between {
  justify-content: space-between;
}
.space-around {
  justify-content: space-around;
} */

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 18vh;
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
  align-items: center;
  padding-block: 7vh 0.5em;
  font-size: var(--fs-8);
  width: 100%;
}
.card-header {
  width: 85%;
  padding-block: 2em;
}
.card-title {
  color: #82ad45;
  font-weight: 600;
  font-size: var(--fs-5);
}
.card-subtitle {
  font-weight: var(--fw-300);
}
.card-info{
  width: 65%;
}

.img-container {
  border-radius: 8px;
  width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-container.no-img {
  max-width: 300px;
  width: 150px;
  height: 200px;
  margin-right: 4em;
}
.img-container > img {
  border-radius: 8px;
  width: 300px;
  height: 350px;
  object-fit: cover;
  object-position: top;
}
.img-container > img.no-img {
  width: 100%;
  height: auto;
}
.description {
  font-size: var(--fs-9);
  padding-block: 0.5em;
  max-width: 85%;
  font-weight: var(--fw-300);
}

.data-container {
  width: 95%;
  padding-block: 1em;
}
.item {
  display: flex;
  flex-wrap: wrap;
  color: #616161;
  font-weight: var(--fw-300);
  font-size: var(--fs-9);
}
.highlighted {
  margin-right: 0.5em;
  color: var(--bright-yellow-crayola);
  font-weight: var(--fw-400);
}
@media only screen and (max-width: 768px) {
  .card-info{
    width: auto;
  }
  .aside {
    display: none;
  }
  .card-header {
    display: flex;
    flex-direction: column-reverse;
  }
  .img-container {
    margin-bottom: 3rem;
  }
}
</style>
