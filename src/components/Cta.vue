<template>
  <section class="section cta">
    <div class="container">
      <div class="cta-content">
        <h2 class="h2 section-title">324+ Trusted Global Partners</h2>

        <button class="btn btn-outline">
          <span>Become a Partner</span>

          <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <figure class="cta-banner">
        <img
          src="../assets/imagenes/cta-banner.jpg"
          width="520"
          height="228"
          loading="lazy"
          alt="Fox"
          class="img-cover"
        />
      </figure>
    </div>
  </section>
</template>

<style scope>
.cta-content {
  background-color: #87ceeb;
  text-align: center;
  padding: 50px 15px;
  margin-block-end: 30px;
}

.cta .section-title {
  color: var(--white);
  font-size: var(--fs-4);
  font-weight: var(--fw-600);
  line-height: 1.2;
  margin-block-end: 25px;
}

.cta .btn-outline {
  margin-inline: auto;
}

.cta-banner {
  background-color: var(--light-gray);
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 992px) {
  .cta .container {
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    gap: 30px;
  }

  .cta-content {
    margin-block-end: 0;
  }

  .cta .section-title {
    --fs-4: 5rem;
  }
}
</style>
