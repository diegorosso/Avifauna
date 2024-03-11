<template>
  <section class="section features">
    <div class="container">
      <ul class="features-list">
        <li class="features-item">
          <div class="item-icon">
            <ion-icon name="earth-outline"></ion-icon>
          </div>

          <div>
            <h3 class="h4 item-title">95% de animales irrecuperables</h3>
          </div>
        </li>

        <li class="features-item">
          <div class="item-icon">
            <ion-icon name="egg-outline"></ion-icon>
          </div>

          <div>
            <h3 class="h4 item-title">Más de 150 especies</h3>
          </div>
        </li>

        <li class="features-item">
          <div class="item-icon">
            <ion-icon name="leaf-outline"></ion-icon>
          </div>

          <div>
            <h3 class="h4 item-title">Sostenibilidad natural</h3>
          </div>
        </li>

        <li class="features-item">
          <div class="item-icon">
            <ion-icon name="school-outline"></ion-icon>
          </div>

          <div>
            <h3 class="h4 item-title">Educacion ambiental</h3>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scope>
.section {
  padding-block: var(--section-padding);
}

.features {
  padding-block-start: 0;
  background-color: var(--eerie-black-1);
}

.features-list {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 3rem;
}

.features-item {
  display: flex;
  align-items: center;
  padding-bottom: 3rem;
}

.features-item .item-icon {
  color: #82ad45;
  font-size: 5.5rem;
  margin-right: 0.1em;
}

.features-item .item-icon ion-icon {
  --ionicon-stroke-width: 25px;
}

/* .features-item .item-title {
  margin-block-end: 10px;
} */

.features-item .item-text {
  max-width: 25ch;
  color: var(--white_50);
  font-size: var(--fs-9);
}

@media (min-width: 992px) {
  .features {
    padding-block-start: var(--section-padding);
  }

  .features-list {
    flex-direction: row;
  }
}
@media (min-width: 1200px) {
  .features {
    padding-block-start: 0;
    margin-block-start: -185px;
    background-color: transparent;
  }
}
</style>
