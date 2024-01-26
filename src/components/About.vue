<template>
  <section class="section about" id="about">
    <div class="container">
      <div class="about-banner">
        <h2 class="deco-title">About Us</h2>

        <img
          src="../assets/imagenes/deco-img.png"
          width="58"
          height="261"
          alt=""
          class="deco-img"
        />

        <div class="banner-row">
          <div class="banner-col">
            <img
              src="../assets/imagenes/banner1.jpg"
              width="315"
              height="380"
              loading="lazy"
              alt=""
              class="about-img w-100"
            />

            <img
              src="../assets/imagenes/banner2.jpg"
              width="386"
              height="250"
              loading="lazy"
              alt=""
              class="about-img about-img-2 w-100"
            />
          </div>

          <div class="banner-col">
            <img
              src="../assets/imagenes/banner3.jpg"
              width="250"
              height="277"
              loading="lazy"
              alt=""
              class="about-img about-img-3 w-100"
            />

            <img
              src="../assets/imagenes/banner4.jpg"
              width="315"
              height="380"
              loading="lazy"
              alt=""
              class="about-img w-100"
            />
          </div>
        </div>
      </div>

      <div class="about-content">
        <p class="section-subtitle">
          <img
            src="../assets/imagenes/subtitle-img-white.png"
            width="32"
            height="7"
            alt="Wavy line"
          />

          <span>Why Choose Us</span>
        </p>

        <h2 class="h2 section-title">
          Rise Your Hand to Save <strong>World Animals Life</strong>
        </h2>

        <ul class="tab-nav">
          <li>
            <button class="tab-btn active">Our Mission</button>
          </li>

          <li>
            <button class="tab-btn">Our Vision</button>
          </li>

          <li>
            <button class="tab-btn">Next Plan</button>
          </li>
        </ul>

        <div class="tab-content">
          <p class="section-text">
            But I must explain to you how all this mistaken denouncing pleasure
            and praising pain was born and I will give you a complete account of
            the system expoundmaster
          </p>

          <ul class="tab-list">
            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>

              <p class="tab-text">Charity For Foods</p>
            </li>

            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>

              <p class="tab-text">Charity For Education</p>
            </li>

            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>

              <p class="tab-text">Charity For Water</p>
            </li>

            <li class="tab-item">
              <div class="item-icon">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>

              <p class="tab-text">Charity For Medical</p>
            </li>
          </ul>

          <button class="btn btn-secondary">
            <span>Learn More Us</span>

            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scope>
.about {
  padding-block-start: 120px;
}

.about-banner {
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
  top: 55%;
  left: 100%;
  z-index: -1;
}

.deco-img {
  position: absolute;
  top: -40px;
  left: 0;
  z-index: -1;
}

.about-img {
  max-width: max-content;
  margin-block-end: 30px;
}

.about .section-subtitle {
  margin-block-end: 10px;
}
.w-100 {
  width: 100%;
}

.about .section-subtitle {
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
  background-color: #87ceeb;
  color: var(--white);
}

.section-text {
  line-height: 2;
}

.tab-list {
  margin-block: 25px 50px;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block: 5px;
}

.tab-item .item-icon {
  font-size: 3rem;
  color: #87ceeb;
}

.tab-text {
  color: var(--eerie-black-2);
  font-size: var(--fs-8);
  font-weight: var(--fw-500);
}

@media (min-width: 992px) {
  .banner-col {
    width: 50%;
  }

  .about-img {
    max-width: 100%;
  }

  .about-img-2 {
    min-width: 120%;
    margin-inline-start: -20%;
  }

  .about-img-3 {
    max-width: 90%;
  }

  .about .container {
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    align-items: flex-start;
    gap: 120px;
  }

  .about-banner {
    margin-block-end: 0;
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
