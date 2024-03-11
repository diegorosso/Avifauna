<template>
  <section class="section schedule" id="schedule">
    <div class="container">
      <div class="schedule-banner">
        <h2 class="deco-title display-none">Avifauna</h2>

        <img
          src="../assets/images/deco-img.png"
          width="58"
          height="261"
          alt=""
          class="deco-img"
        />

        <div class="banner-row">
          <div class="banner-col">
            <img
              width="315"
              height="380"
              loading="lazy"
              alt=""
              class="schedule-img w-100"
              src="../assets/photos/DSC00885.jpg"
              />

            <img
              src="../assets/photos/DSC01266.jpg"
              width="386"
              height="250"
              loading="lazy"
              alt=""
              class="schedule-img schedule-img-2 w-100 display-none"
            />
          </div>

          <div class="banner-col">
            <img
              src="../assets/photos/DSC01205.jpg"
              width="250"
              height="277"
              loading="lazy"
              alt=""
              class="schedule-img schedule-img-3 w-100 display-none"
            />

            <img
              width="315"
              height="380"
              loading="lazy"
              alt=""
              class="schedule-img w-100 display-none"
              src="../assets/photos/DSC00929.jpg"
            />
          </div>
        </div>
      </div>

      <div class="schedule-content">
        <p class="section-subtitle">
          <img
            src="../assets/images/subtitle-img-green.png"
            width="32"
            height="7"
            alt="Wavy line"
          />

          <span>Conócenos</span>
        </p>

        <h2 class="h2 section-title">
          Ven a conocer <strong>el parque y sus especies </strong>
        </h2>

        <ul class="tab-nav">
          <li>
            <button
              class="tab-btn"
              @click="setTab(1)"
              :class="{ active: selectedTab === 1 }"
            >
              Horarios y tarifas
            </button>
          </li>

          <li>
            <button
              class="tab-btn"
              :class="{ active: selectedTab === 2 }"
              @click="setTab(2)"
            >
              Visitas guiadas
            </button>
          </li>
        </ul>

        <div v-if="selectedTab === 1">
          <p class="section-text">Invierno:</p>
          <ul class="tab-list schedule">
            <li class="tab-item">
              <p class="tab-text">Martes a Viernes de 10 a 14 hs.</p>
            </li>
            <li class="tab-item">
              <p class="tab-text">
                Sábados, Domingos y festivos de 10 a 14 y de 16 a 19 hs.
              </p>
            </li>
          </ul>

          <p class="section-text">Verano:</p>
          <ul class="tab-list schedule">
            <li class="tab-item">
              <p class="tab-text">
                Martes a Domingos de 10 a 14 y de 16 a 19 hs
              </p>
            </li>
          </ul>

          <p class="section-text">Tarifas:</p>
          <ul class="tab-list schedule">
            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <p class="tab-text">
                Menores de 4 años: <span class="yellow">GRATIS</span>
              </p>
            </li>
            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <p class="tab-text">
                De 4 a 14 años: <span class="yellow"> 7€</span>
              </p>
            </li>
            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <p class="tab-text">
                Mayores de 14 años: <span class="yellow"> 10€</span>
              </p>
            </li>
            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <p class="tab-text">
                Mayores de 65 años, discapacitados o grupos de más de 15
                personas (acreditando identidad y condición):
                <span class="yellow">8€</span>
              </p>
            </li>
          </ul>
        </div>

        <div v-if="selectedTab === 2" class="tab-content">
          <p class="section-text">De la mano de los que más saben.</p>
          <ul class="tab-list">
            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <p class="tab-text">Grupo mínimo 10 personas</p>
            </li>
            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <p class="tab-text">4€</p>
            </li>
          </ul>
          <button @click="$emit('guidedVisit')" class="btn btn-secondary">
            <span>Planifica tu visita</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

let selectedTab = ref(1);

const setTab = (tab) => {
  selectedTab.value = tab;
};

const toGuidedVisitContact = (router) => {};
</script>

<style scope>
.schedule {
  padding-block-start: 120px;
}

.schedule-banner {
  position: relative;
  max-width: max-content;
  margin-block-end: 30px;
}

.deco-title {
  font-size: var(--fs-1);
  font-weight: var(--fw-700);
  white-space: nowrap;
  line-height: 0.5;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--light-gray);
  transform-origin: top left;
  transform: rotate(0.25turn);
  position: absolute;
  top: 0;
  left: calc(100vw / 2 + 8%);
  z-index: -1;
}

.deco-img {
  position: absolute;
  top: -40px;
  left: 0;
  z-index: -1;
}

.schedule-img {
  max-width: max-content;
  margin-block-end: 30px;
}

.schedule .section-subtitle {
  margin-block-end: 10px;
}
.w-100 {
  width: 100%;
}

.schedule .section-subtitle {
  margin-block-end: 10px;
}

.tab-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-block: 25px 35px;
}
.tab-btn {
  background-color: var(--platinum);
  color: var(--granite-gray);
  font-size: var(--fs-8);
  font-weight: var(--fw-500);
  padding: 10px 32px;
}
.tab-btn.active {
  background-color: #82ad45;
  color: var(--white);
}

.section-text {
  line-height: 2;
  max-width: 55%;
}

.tab-list {
  margin-block: 25px 50px;
}

.tab-list.schedule {
  margin-block: 0 1em;
  padding-block-start: 0;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block: 5px;
}

.tab-item .item-icon {
  font-size: 2.3rem;
  color: #82ad45;
}

.tab-text {
  color: var(--eerie-black-2);
  font-size: var(--fs-9);
  font-weight: var(--fw-400);
  max-width: 75%;
}
.display-none {
  display: none;
}

span.yellow {
  display: inline;
  font-weight: var(--fw-500);
  margin-left: 0.3em;
}

.yellow {
  color: var(--bright-yellow-crayola);
}

@media (min-width: 992px) {
  .banner-col {
    width: 50%;
  }

  .schedule-img {
    max-width: 100%;
  }

  .schedule-img-2 {
    min-width: 120%;
    margin-inline-start: -20%;
  }

  .schedule-img-3 {
    max-width: 90%;
  }

  .schedule .container {
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    align-items: flex-start;
    gap: 120px;
  }

  .schedule-banner {
    margin-block-end: 0;
  }
  .display-none {
    display: inline;
  }
}
@media (min-width: 992px) {
  .banner-col {
    width: 50%;
  }
}
@media (min-width: 768px) {
  .banner-row {
    display: flex;
    gap: 20px;
  }
}
@media (min-width: 1200px) {
  .deco-img {
    left: -35px;
  }
}
</style>
