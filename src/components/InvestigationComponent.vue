<template>
  <section class="section" id="investigation">
    <p class="section-subtitle">
      <img
        src="../assets/images/subtitle-img-green.png"
        width="32"
        height="7"
        alt="Wavy line"
      />
      <span>Investigación</span>
    </p>
    <div class="book">
      <div class="description">2015</div>
      <div class="imgs-container flex-row spsace-between flex-wrap">
        <div class="img-container">
          <img src="/IMG_3505.jpg" alt="" />
        </div>
        <div class="img-container">
          <img src="/IMG_3502.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.section {
  background-color: #2e2e2e;
  padding: var(--section-padding);
}
.book {
    padding-block: 3em;
}
.description {
  font-family: "Inter", sans-serif;
  font-size: var(--fs-5);
  color: #fff;
  padding-bottom: 1em;
}
.imgs-container{
    width: 100%;
}
.img-container {
  width: 50%;
}
.img-container:first-of-type {
  padding-right: 2em;
}
.img-container:last-of-type {
  padding-left: 2em;
}
.img-container > img {
  width: 100%;
}
</style>
