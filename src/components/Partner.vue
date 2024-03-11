<template>
  <section class="section partner">
    <div class="container">
      <Swiper
        :slides-per-view="isMobile ? 1 : 3"
        spaceBetween="30"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :autoplay="{ delay: 3000 }"
      >
        <SwiperSlide v-for="(partner, index) in partners" :key="index">
          <a href="#" class="partner-logo">
            <img
              :src="partner.image"
              :alt="partner.alt"
              class="gray"
            />

            <img
              :src="partner.activeImage"
              :alt="partner.alt"
              class="color"
            />
          </a>
        </SwiperSlide>
        <div class="swiper-button-prev" style="color: #82ad45"></div>
        <div class="swiper-button-next" style="color: #82ad45"></div>
      </Swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      partners: [
        {
          image: "/logos/partner-1.png",
          activeImage: "/logos/partner-1-active.png",
          alt: "Children Fund"
        },
        {
          image: "/logos/partner-2.png",
          activeImage: "/logos/partner-2-active.png",
          alt: "Non Profit Agency"
        },
        {
          image: "/logos/partner-3.png",
          activeImage: "/logos/partner-3-active.png",
          alt: "Rise Hand Help Us"
        },
        {
          image: "/logos/partner-4.png",
          activeImage: "/logos/partner-4-active.png",
          alt: "Helping"
        },
        {
          image: "logos/partner-5.png",
          activeImage: "logos/partner-5-active.png",
          alt: "Poor Fund Organization"
        }
      ],
      isMobile: false
    };
  },
  mounted() {
    this.checkMobile(); // Check mobile on component mount
    window.addEventListener('resize', this.checkMobile); // Check mobile on window resize
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768; // Set isMobile to true if window width is less than 768px
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile); // Remove event listener on component destroy
  }
};
</script>

<style scoped>
.partner {
  background-color: var(--baby-powder);
  padding-block: 2em;
  width: 100%;
}

.partner .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.swiper-backface-hidden .swiper-slide{
  display: flex;
  justify-content: center;
}

.partner-logo .color,
.partner-logo:is(:hover, :focus) .gray {
  display: none;
}

.partner-logo:is(:hover, :focus) .color,
.partner-logo .gray {
  display: block;
}

.swiper-button-prev, .swiper-button-next {
  font-size: 24px;
  width: 40px;
  height: 40px;
}

@media (min-width: 1200px) {
  .donate-card {
    padding-inline-end: 120px;
  }

  .donate-card .card-content {
    width: 65%;
  }
}
</style>
