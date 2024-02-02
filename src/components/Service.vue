<template>
  <section
    class="section service"
    id="service"
    style="background-image: url('../assets/imagenes/service-map.png')"
  >
    <div class="container">
      <p class="section-subtitle">
        <img
          src="../assets/imagenes/subtitle-img-green.png"
          width="32"
          height="7"
          alt="Wavy line"
        />

        <span>What We Do</span>
      </p>

      <h2 class="h2 section-title">
        We Work Differently to <strong>keep The World Safe</strong>
      </h2>

      <ul class="service-list">
        <li>
          <div class="service-card">
            <div class="card-icon">
              <ion-icon name="leaf-outline"></ion-icon>
            </div>

            <h3 class="h3 card-title">Save Nature</h3>

            <p class="card-text">
              Tempor incididunt ut labores dolore magna suspene
            </p>

            <a href="#" class="btn-link">
              <span>Read More</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </li>

        <li>
          <div class="service-card">
            <div class="card-icon">
              <ion-icon name="earth-outline"></ion-icon>
            </div>

            <h3 class="h3 card-title">Save Ecology</h3>

            <p class="card-text">
              Tempor incididunt ut labores dolore magna suspene
            </p>

            <a href="#" class="btn-link">
              <span>Read More</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </li>

        <li>
          <div class="service-card">
            <div class="card-icon">
              <ion-icon name="flower-outline"></ion-icon>
            </div>

            <h3 class="h3 card-title">Tree Plantation</h3>

            <p class="card-text">
              Tempor incididunt ut labores dolore magna suspene
            </p>

            <a href="#" class="btn-link">
              <span>Read More</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </li>

        <li>
          <div class="service-card">
            <div class="card-icon">
              <ion-icon name="boat-outline"></ion-icon>
            </div>

            <h3 class="h3 card-title">Clear Ocean</h3>

            <p class="card-text">
              Tempor incididunt ut labores dolore magna suspene
            </p>

            <a href="#" class="btn-link">
              <span>Read More</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scope>
.service {
  background-color: var(--baby-powder);
  background-repeat: no-repeat;
  background-position: center top;
  margin-block-start: -200px;
  padding-block-start: 200px;
}

.service .section-title {
  margin-block: 10px 40px;
}

.service-list {
  display: grid;
  gap: 30px;
}

.service-card {
  background-color: var(--white);
  text-align: center;
  padding: 45px 40px;
  border-radius: 2px;
  outline: 3px solid transparent;
  box-shadow: var(--card-shadow);
  transition: var(--transition-2);
}

.service-card:is(:hover, :focus-within) {
  outline-color: #82ad45;
}

.service-card .card-icon {
  color: #82ad45;
  font-size: 7rem;
  max-width: max-content;
  margin-inline: auto;
}

.service-card .card-icon ion-icon {
  --ionicon-stroke-width: 20px;
}

.service-card .card-title {
  letter-spacing: -1px;
  margin-block: 10px;
}

.service-card .card-text {
  font-family: var(--ff-inter);
}

.btn-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: var(--silver-chalice);
  font-size: var(--fs-8);
  font-weight: var(--fw-600);
  margin-block-start: 15px;
}

.btn-link span {
  text-decoration: underline;
}

@media (min-width: 992px) {
  .service-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
