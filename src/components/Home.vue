<template>
  <section class="hero" id="home">
    <div class="container">
      <p class="section-subtitle">
        <img
          src="../assets/imagenes/subtitle-img-white.png"
          width="32"
          height="7"
          alt="wavy line"
        />
        <span>Bienvenidos a Avifauna</span>
      </p>

      <h2 class="h1 hero-title">
        El parque Ornitológico más grande de <strong>España.</strong>
      </h2>

      <p class="hero-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        eveniet, laborum aliquam dicta debitis vero aspernatur similique unde
        sint veniam quam earum, commodi explicabo optio asperiores error. Alias,
        qui perspiciatis!
      </p>
      <button class="btn btn-primary">
        <span>Comprar</span>
        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>
  </section>
</template>

<style scope>
.hero {
  background-color: var(--eerie-black-1);
  color: var(--white);
  min-height: 700px;
  padding-block: 120px 60px;
  display: grid;
  align-items: center;
}

.section-subtitle {
  color: var(--color, #87ceeb);
  font-size: var(--fs, var(--fs-8));
  font-family: var(--ff, var(--ff-roboto));
  font-weight: var(--fw-600);
  display: flex;
  align-items: center;
  gap: 10px;
}
.h1,
.h2 {
  font-weight: var(--fw-300);
}

.h2,
.h3 {
  line-height: 1.6;
}
.h2 {
  font-size: var(--fs-3);
  color: var(--eerie-black-2);
}
.h3 {
  font-size: var(--fs-5);
  color: var(--eerie-black-2);
}
.h4 {
  color: var(--white);
  font-size: var(--fs-6);
}

.hero .section-subtitle {
  --color: var(--white);
  --ff: var(--ff-inter);
  --fs: var(--fs-7);
}

.hero-title {
  font-size: var(--fs-2);
  margin-block: 30px;
  line-height: 1.2;
}

.hero-text {
  font-family: var(--ff-inter);
  font-size: var(--fs-8);
  letter-spacing: -1px;
  max-width: 50ch;
  margin-block-end: 30px;
}

.btn {
  position: relative;
  background-color: var(--btn-bg, #87ceeb);
  color: var(--white);
  font-weight: var(--fw-600);
  padding: 12px 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: var(--transition-2);
}
.btn ion-icon {
  --ionicon-stroke-width: 55px;
  font-size: 1.8rem;
}
.btn:not(.btn-outline)::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--btn-bg, #87ceeb);
  transform: translate(5px, 5px);
  transition: var(--transition-2);
}
.btn:is(:hover, :focus)::after {
  transform: translate(0, 0);
}

.btn-secondary {
  --btn-bg: var(--black);
}

.btn-secondary:is(:hover, :focus) {
  --btn-bg: #87ceeb;
}

.btn-outline {
  border: 2px solid var(--white);
  background-color: transparent;
}
.btn-white {
  --btn-bg: var(--platinum);
  color: var(--black);
}

@media (min-width: 992px) {
  .hero {
    background-image: url("../assets/imagenes/blue-bird-6884633_1280.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    min-height: 780px;
  }
}

@media (min-width: 1200px) {
  .hero {
    padding-block: 200px 325px;
    background-position: center;
  }
}
</style>
