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
            :class="{ disabled: steps.step1.selected }"
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
            Atrás
          </div>
          <div
            class="control"
            @click="nextStep()"
            :class="{
              disabled:
                (steps.step1.selected && !steps.step1.completed) ||
                (steps.step2.selected && !steps.step2.completed) ||
                steps.step3.selected,
            }"
          >
            Siguiente
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      </header>

      <!-- STEP 1 -->
      <main v-if="steps.step1.selected" class="cards-container">
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
            <button
              @click="selectTicket(1)"
              class="btn btn-primary"
              :class="{ disabled: purchaseData.typeId === 1 }"
            >
              <span>Seleccionar</span>
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
            <button
              @click="selectTicket(2)"
              class="btn btn-primary"
              :class="{ disabled: purchaseData.typeId === 2 }"
            >
              <span>Seleccionar</span>
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
            <button
              class="btn btn-primary"
              @click="selectTicket(3)"
              :class="{ disabled: purchaseData.typeId === 3 }"
            >
              <span>Seleccionar</span>
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
            <button
              @click="selectTicket(4)"
              class="btn btn-primary"
              :class="{ disabled: purchaseData.typeId === 4 }"
            >
              <span>Seleccionar</span>
            </button>
          </div>
        </div>
      </main>

      <!-- Step 2 -->
      <div class="step-2" v-if="steps.step2.selected">
        <div class="step-title">Seleccione una fecha para su visita:</div>
        <div class="datepicker-container">
          <DatePicker
            v-model="date"
            expanded
            locale="es"
            borderless
            color="green"
            :minDate="today"
            :maxDate="maxDate"
          />
        </div>
        <button
          @click="confirmDate()"
          class="btn btn-primary"
          :class="{ disabled: !date }"
        >
          <span>Confirmar</span>
        </button>
      </div>

      <!-- Step 3 -->
      <div class="step-3" v-if="steps.step3.selected">
        <div class="step-title">Detalle:</div>
        <div class="detail-card ticket-card">
          <div class="item">
            <span class="highlighted">Nombre: </span>
            {{ purchaseData.user.name }}
          </div>
          <div class="item">
            <span class="highlighted">Apellido: </span>
            {{ purchaseData.user.lastname }}
          </div>
          <span class="extra-info">*La entrada es intransferible.</span>
          <div class="item">
            <span class="highlighted">Email: </span>
            {{ purchaseData.user.email }}
          </div>
          <div class="item">
            <span v-if="purchaseData.user.phone" class="highlighted"
              >Teléfono:
            </span>
            {{ purchaseData.user.phone }}
          </div>
          <div class="item">
            <span class="highlighted">Fecha: </span>
            {{ getFormattedDate(purchaseData.date) }}
          </div>
          <p class="extra-info">
            *La entrada puede ser utilizada únicamente en esta fecha, durante el
            horario en el que permanece abierto el establecimiento.
          </p>
          <div class="item flex-row">
            <span class="highlighted">Entrada apta para </span>
            <span v-if="purchaseData.typeId === 1"
              >personas menores de 4 años</span
            >
            <span v-if="purchaseData.typeId === 2"
              >personas entre 4 y 14 años</span
            >
            <span v-if="purchaseData.typeId === 3"
              >personas mayores de 14 años</span
            >
            <span v-if="purchaseData.typeId === 4"
              >personas mayores de 65 años / discapacitados / grupos de más de
              15 personas</span
            >
          </div>
          <span class="extra-info">*Acreditando identidad y condición.</span>
          <div class="item">
            <span class="highlighted">Total: </span>
            <strong>{{
              purchaseData.typeId === 1
                ? "0€"
                : purchaseData.typeId === 2
                ? "7€"
                : purchaseData.typeId === 3
                ? "10€"
                : purchaseData.typeId === 4
                ? "8€"
                : ""
            }}</strong>
          </div>
        </div>
        <button @click="confirmPurchase()" class="btn btn-primary">
          <span>Comprar</span>
          <ion-icon name="card-outline"></ion-icon>
        </button>
      </div>

      <!-- Step 4 -->
      <div v-if="steps.step4.selected" class="step-4">
        <RegiondoComponent></RegiondoComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "v-calendar/style.css";
import { DatePicker } from "v-calendar";
import { ref } from "vue";
import moment from "moment";
import RegiondoComponent from "../components/RegiondoComponent.vue";



let steps = ref({
  step1: {
    id: 1,
    selected: true,
    completed: false,
  },
  step2: {
    id: 2,
    selected: false,
    completed: false,
  },
  step3: {
    id: 3,
    selected: false,
    completed: false,
  },
  step4: {
    id: 4,
    selected: false,
    completed: false,
  },
});
let purchaseData = ref({
  typeId: null,
  date: null,
  user: {
    name: null,
    lastname: null,
    email: null,
    phone: null,
  },
});
let showDescription = ref(false);

let date = ref(null);
const today = new Date();
const maxDate = new Date().setFullYear(new Date().getFullYear() + 1);

function getFormattedDate(date: Date) {
  return moment(date).format("DD-MM-YYYY");
}

function handleDescription() {
  showDescription.value = !showDescription.value;
}

function selectTicket(id: number) {
  purchaseData.value.typeId = id;
  steps.value.step1.completed = true;
  nextStep();
}

function confirmDate() {
  purchaseData.value.date = date;
  steps.value.step2.completed = true;
  nextStep();
}

function backStep() {
  if (steps.value.step2.selected) {
    steps.value.step2.selected = false;
    steps.value.step1.selected = true;
  }
  if (steps.value.step3.selected) {
    steps.value.step3.selected = false;
    steps.value.step2.selected = true;
  }
}
function nextStep() {
  if (steps.value.step3.selected) {
    steps.value.step3.selected = false;
    steps.value.step4.selected = true;
  }
  if (steps.value.step2.selected) {
    steps.value.step2.selected = false;
    steps.value.step3.selected = true;
  }
  if (steps.value.step1.selected) {
    steps.value.step1.selected = false;
    steps.value.step2.selected = true;
  }
}

function confirmPurchase() {
  steps.value.step3.completed = true;
  nextStep();
}
</script>

<style scoped>
.disabled {
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
.step-2,
.step-3 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-title {
  font-size: var(--fs-7);
  font-weight: 300;
  color: var(--eerie-black-2);
  font-family: "inter", sans-serif;
}
.datepicker-container {
  width: 50vw;
  min-width: 600px;
  padding-block: 2em;
}

.controls-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.control {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.control > ion-icon {
  font-size: 40px;
}

/* Step 3 */
.detail-card {
  margin-block: 1.5em;
  width: 60%;
  height: auto;
  align-items: flex-start;
}
.item {
  display: flex;
  padding-top: 0.5em;
}
.highlighted {
  margin-right: 0.5em;
}
.extra-info {
  text-align: left;
  font-size: 14px;
}
</style>
