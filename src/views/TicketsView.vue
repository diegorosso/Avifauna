<template>
  <div class="wrapper">
    <p class="section-subtitle">
      <img
        src="../assets/images/subtitle-img-green.png"
        width="32"
        height="7"
        alt="wavy line"
      />
      <span>Compra tu entrada</span>
    </p>
    <h2 class="h2 section-title">
      Visita uno de los parques ornitológicos con
      <span class="strong">mayor reconocimiento de la península</span>
    </h2>

    <div class="steps-container">
      <header class="flex-column w-100">
        <div class="controls-container">
          <div
            class="control"
            @click="backStep()"
            :class="{ disabled: selectedStep === 1 }"
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
            Atrás
          </div>
          <div class="control" @click="nextStep()">
            Siguiente
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      </header>
      <!-- STEP 1 -->
      <main v-if="selectedStep === 1" class="cards-container">
        <div
          class="ticket-card"
          :class="{ selected: purchaseData.typeId === 1 }"
        >
          <div class="icon-container">
            <img src="/icons/baby.png" width="55px" alt="" />
          </div>
          <div class="title-container">
            <h4 class="title">Menores de 4 años</h4>
          </div>
          <div class="price">GRATIS</div>
          <div class="action-btn">
            <button @click="selectTicket(1)" class="btn btn-primary">
              <span>Seleccionar</span>
              <ion-icon name="card-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div
          class="ticket-card"
          :class="{ selected: purchaseData.typeId === 2 }"
        >
          <div class="icon-container">
            <img src="/icons/kid.png" width="55px" alt="" />
          </div>
          <div class="title-container">
            <h4 class="title">De 4 a 14 años</h4>
          </div>
          <div class="price">7€</div>
          <div class="action-btn">
            <button @click="selectTicket(2)" class="btn btn-primary">
              <span>Seleccionar</span>
              <ion-icon name="card-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div
          class="ticket-card"
          :class="{ selected: purchaseData.typeId === 3 }"
        >
          <div class="icon-container">
            <img src="/icons/adult.png" width="55px" alt="" />
          </div>
          <div class="title-container">
            <h4 class="title">Mayores de 14 años</h4>
          </div>
          <div class="price">10€</div>
          <div class="action-btn">
            <button class="btn btn-primary" @click="selectTicket(3)">
              <span>Seleccionar</span>
              <ion-icon name="card-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div
          class="ticket-card"
          :class="{ selected: purchaseData.typeId === 4 }"
        >
          <div class="icon-container">
            <img src="/icons/pensioner.png" width="55px" alt="" />
          </div>
          <div class="title-container">
            <h4 class="title">
              Tarifa reducida
              <span
                class="icon"
                @mouseenter="handleDescription"
                @mouseleave="handleDescription"
              >
                <ion-icon name="information-circle-outline"></ion-icon>
              </span>
            </h4>
            <ul v-if="showDescription" class="description">
              <li>Mayores de 65 años</li>
              <li>Discapacitados</li>
              <li>Grupos de más de 15 personas</li>
              <li class="detail">(Acreditando identidad y condición)</li>
            </ul>
          </div>
          <div class="price">8€</div>
          <div class="action-btn">
            <button @click="selectTicket(4)" class="btn btn-primary">
              <span>Seleccionar</span>

              <ion-icon name="card-outline"></ion-icon>
            </button>
          </div>
        </div>
      </main>

      <!-- Step 2 -->
      <div class="step-2" v-if="selectedStep === 2">
        <div class="step-title">Seleccione una fecha para su visita:</div>
        <div class="datepicker-container">
          <DatePicker
            v-model="date"
            expanded
            locale="es"
            borderless
            color="green"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "v-calendar/style.css";
import { DatePicker } from "v-calendar";
import { ref } from "vue";

let selectedStep = ref(1);
let purchaseData = {
  typeId: null,
};
let showDescription = ref(false);

let date: Date = new Date();

function handleDescription() {
  showDescription.value = !showDescription.value;
}

function selectTicket(id: number) {
  // selectedStep.value = 2;
  purchaseData.typeId = id;
  nextStep();
}

function backStep() {
  selectedStep.value--;
}
function nextStep() {
  selectedStep.value++;
}
</script>

<style scoped>
.disabled{
  pointer-events: none;
  opacity: 0.6;
}
.wrapper {
  width: 100vw;
  background-image: url(../assets/images/background.png);
  background-color: var(--baby-powder);
  background-repeat: no-repeat;
  background-position: center;
  padding-block: 150px;
  padding-inline: 3em;
}
.section-title {
  max-width: 900px;
  padding-block: 0.3em;
}
.strong {
  font-weight: 500;
}

.steps-container {
  width: 100%;
  padding-top: 3em;
}

/* Step 1 */
.cards-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 2em;
}
.ticket-card {
  color: var(--granite-gray);
  width: 23%;
  border-radius: 8px;
  height: 350px;
  font-family: "inter", sans-serif;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 38px;
  border-radius: 2px;
  outline: 3px solid transparent;
  box-shadow: var(--card-shadow);
  transition: var(--transition-2);
}

.ticket-card:hover {
  outline-color: var(--pistachio);
}

.selected {
  outline-color: var(--pistachio);
}


.icon-container {
  height: 24%;
}
.title-container {
  position: relative;
  height: 17%;
  padding-block: 0;
  padding-top: 0.5em;
}
.title {
  font-size: var(--fs-5);
  padding-top: 0.3em;
  color: var(--eerie-black-2);
  display: flex;
  align-items: center;
}
.title > .icon {
  padding-left: 0.5em;
  font-size: 1.3em;
  cursor: pointer;
}
.description {
  position: absolute;
  top: -130px;
  left: -80px;
  width: 270px;
  z-index: 999;
  /* right: -250px; */
  /* left: -10px; */
  border: 1px ridge #82ad45;
  /* background-color: #82ad45da; */
  padding: 0.8em;
  font-size: var(--fs-9);
  background-color: #fff;
  /* color: #fff; */
  color: var(--granite-gray);
  border-radius: 12px 12px 0;
}
.description > .detail {
  font-size: var(--fs-10);
  padding-top: 1em;
}
.price {
  height: 25%;
  font-size: var(--fs-5);
  color: #616161;
  font-family: "inter", sans-serif;
  display: flex;
  align-items: flex-end;
}
.action-btn {
  height: 34%;
  display: flex;
  align-items: flex-end;
}
.action-btn > .btn {
  margin: 0;
}

/* Step 2 */
.step-2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-title{
  font-size: var(--fs-7);
  /* text-align: left; */
  padding-bottom: 1em;
  color: var(--pistachio);
  font-size: 'inter', sans-serif;
}
.datepicker-container {
  width: 40vw;
}

.controls-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* padding-inline: 4vw; */
}
.control {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.control > ion-icon {
  font-size: 40px;
}
</style>
