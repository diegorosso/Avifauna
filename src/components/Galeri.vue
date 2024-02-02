<template>
  <section class="insta-post">
    <ul class="insta-post-list">
      <li class="insta-post-item">
        <a href="#" class="insta-post-link">
          <img
            src="../assets/images/galeria-1.jpg"
            width="320"
            height="300"
            loading="lazy"
            alt="Lion"
            class="img-cover"
          />

          <ion-icon name="camera-outline"></ion-icon>
        </a>
      </li>

      <li class="insta-post-item">
        <a href="#" class="insta-post-link">
          <img
            src="../assets/images/galeria-2.jpg"
            width="320"
            height="300"
            loading="lazy"
            alt="Deer"
            class="img-cover"
          />

          <ion-icon name="camera-outline"></ion-icon>
        </a>
      </li>

      <li class="insta-post-item">
        <a href="#" class="insta-post-link">
          <img
            src="../assets/images/galeria-3.jpg"
            width="320"
            height="300"
            loading="lazy"
            alt="Wild Bear"
            class="img-cover"
          />

          <ion-icon name="camera-outline"></ion-icon>
        </a>
      </li>

      <li class="insta-post-item">
        <a href="#" class="insta-post-link">
          <img
            src="../assets/images/galeria-4.jpg"
            width="320"
            height="300"
            loading="lazy"
            alt="Deer"
            class="img-cover"
          />

          <ion-icon name="camera-outline"></ion-icon>
        </a>
      </li>

      <li class="insta-post-item">
        <a href="#" class="insta-post-link">
          <img
            src="../assets/images/galeria-5.jpg"
            width="320"
            height="300"
            loading="lazy"
            alt="Horses"
            class="img-cover"
          />

          <ion-icon name="camera-outline"></ion-icon>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scope>
.insta-post-link {
  position: relative;
  background-color: var(--eerie-black-1);
  overflow: hidden;
}

.insta-post-link > img {
  transition: var(--transition-2);
}

.insta-post-link {
  display: inline;
}

.insta-post-link:is(:hover, :focus) > img {
  transform: scale(1.1);
  opacity: 0.5;
}

.insta-post-link > ion-icon {
  color: var(--white);
  font-size: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: var(--transition-2);
}

.insta-post-link:is(:hover, :focus) > ion-icon {
  opacity: 1;
}

.insta-post-list {
  display: flex;
  overflow: hidden;
  scroll-snap-type: inline mandatory;
}

.insta-post-list::-webkit-scrollbar {
  display: none;
}

.insta-post-item {
  min-width: 90%;
  scroll-snap-align: center;
}

@media (min-width: 992px) {
  .insta-post-item {
    min-width: 24%;
  }
}

@media (min-width: 1200px) {
  .insta-post-item {
    min-width: 20%;
  }
}
</style>
