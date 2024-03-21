<template>
  <section class="section cta">
    <div class="container" ref="counterContainer">
      <div class="cta-content">
        <h2 class="h2 section-title">
          <span class="counter"
            >Nos acompañan {{ counter }} apadrinamientos</span
          >
        </h2>

        <button class="btn btn-outline" @click="scrollToContact">
          <span>¿Te gustaría ser colaborador?</span>

          <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <figure
        class="cta-banner"
        v-preload="'../assets/photos/DSC01197-compress-992w.jpg'"
      >
        <img
          srcset="
            ../assets/photos/DSC01197-compress-570w.jpg 570w,
            ../assets/photos/DSC01197-compress-768w.jpg 768w,
            ../assets/photos/DSC01197-compress-992w.jpg 992w
          "
          sizes="(max-width: 570px) 570px, (max-width: 768px) 768px, (max-width: 992px) 992px, 992px"
          width="520"
          height="228"
          loading="lazy"
          alt="Fox"
          class="img-cover"
        />
      </figure>
    </div>
    <!-- <Partner></Partner> -->
  </section>
</template>

<script setup>
import Partner from "./Partner.vue";
import { ref, onMounted } from "vue";

const counterContainer = ref(null);
let counter = ref(0);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && counter.value < 5) {
      const intervalId = setInterval(() => {
        if (counter.value < 5) {
          counter.value += 1;
        } else {
          clearInterval(intervalId);
        }
      }, 150);
    } else {
      counter.value = 0;
    }
  });
};

const scrollToContact = () => {
  const contactSection = document.getElementById("Contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => handleIntersection(entries, observer),
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }
  );

  if (counterContainer.value) {
    observer.observe(counterContainer.value);
  }
});
</script>

<style scope>
.counter {
  transition: opacity 1s;
}

.cta-content {
  background-color: #82ad45;
  text-align: center;
  padding: 50px 15px;
  margin-block-end: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
