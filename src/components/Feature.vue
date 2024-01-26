<template>
  <section class="section features">
    <div class="container">
      <ul class="features-list">
        <li class="features-item">
          <div class="item-icon">
            <ion-icon name="shield-checkmark-outline"></ion-icon>
          </div>

          <div>
            <h3 class="h4 item-title">Safe Shelter</h3>

            <p class="item-text">
              Sit amet consecte adiscine eiusm temor ultrices.
            </p>
          </div>
        </li>

        <li class="features-item">
          <div class="item-icon">
            <ion-icon name="water-outline"></ion-icon>
          </div>

          <div>
            <h3 class="h4 item-title">Safe Water</h3>

            <p class="item-text">
              Sit amet consecte adiscine eiusm temor ultrices.
            </p>
          </div>
        </li>

        <li class="features-item">
          <div class="item-icon">
            <ion-icon name="leaf-outline"></ion-icon>
          </div>

          <div>
            <h3 class="h4 item-title">Ecology Save</h3>

            <p class="item-text">
              Sit amet consecte adiscine eiusm temor ultrices.
            </p>
          </div>
        </li>

        <li class="features-item">
          <div class="item-icon">
            <ion-icon name="snow-outline"></ion-icon>
          </div>

          <div>
            <h3 class="h4 item-title">Environment</h3>

            <p class="item-text">
              Sit amet consecte adiscine eiusm temor ultrices.
            </p>
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
  display: grid;
  gap: 30px;
}

.features-item {
  display: flex;
  align-items: flex-start;
  gap: 25px;
}

.features-item .item-icon {
  color: #87ceeb;
  font-size: 5.5rem;
  margin-block-start: 10px;
}

.features-item .item-icon ion-icon {
  --ionicon-stroke-width: 25px;
}

.features-item .item-title {
  margin-block-end: 10px;
}

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
    grid-template-columns: repeat(4, 1fr);
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
