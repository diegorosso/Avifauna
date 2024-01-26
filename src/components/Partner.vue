<template>
  <section class="section partner">
    <div class="container">
      <a href="#" class="partner-logo">
        <img
          src="../assets/imagenes/partner-1.png"
          width="157"
          height="55"
          loading="lazy"
          alt="Children Fund"
          class="gray"
        />

        <img
          src="../assets/imagenes/partner-1-active.png"
          width="157"
          height="55"
          loading="lazy"
          alt="Children Fund"
          class="color"
        />
      </a>

      <a href="#" class="partner-logo">
        <img
          src="../assets/imagenes/partner-2.png"
          width="163"
          height="55"
          loading="lazy"
          alt="Non Profit Agency"
          class="gray"
        />

        <img
          src="../assets/imagenes/partner-2-active.png"
          width="163"
          height="55"
          loading="lazy"
          alt="Non Profit Agency"
          class="color"
        />
      </a>

      <a href="#" class="partner-logo">
        <img
          src="../assets/imagenes/partner-3.png"
          width="149"
          height="55"
          loading="lazy"
          alt="Rise Hand Help Us"
          class="gray"
        />

        <img
          src="../assets/imagenes/partner-3-active.png"
          width="149"
          height="55"
          loading="lazy"
          alt="Rise Hand Help Us"
          class="color"
        />
      </a>

      <a href="#" class="partner-logo">
        <img
          src="../assets/imagenes/partner-4.png"
          width="169"
          height="58"
          loading="lazy"
          alt="Helping"
          class="gray"
        />

        <img
          src="../assets/imagenes/partner-4-active.png"
          width="169"
          height="58"
          loading="lazy"
          alt="Helping"
          class="color"
        />
      </a>

      <a href="#" class="partner-logo">
        <img
          src="../assets/imagenes/partner-5.png"
          width="211"
          height="55"
          loading="lazy"
          alt="Poor Fund Organization"
          class="gray"
        />

        <img
          src="../assets/imagenes/partner-5-active.png"
          width="211"
          height="55"
          loading="lazy"
          alt="Poor Fund Organization"
          class="color"
        />
      </a>
    </div>
  </section>
</template>

<style scope>
.partner {
  background-color: var(--baby-powder);
}

.partner .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.partner-logo .color,
.partner-logo:is(:hover, :focus) .gray {
  display: none;
}

.partner-logo:is(:hover, :focus) .color,
.partner-logo .gray {
  display: block;
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
