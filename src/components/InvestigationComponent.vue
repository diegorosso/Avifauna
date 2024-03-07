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
      <div class="description">
        <p>
          "La nutrición es uno de los factores más importantes dentro del manejo
          y cuidado de las aves, ya que condiciona su salud, longevidad, aspecto
          y comportamiento cuando se mantienen en cautividad. Para la mayoría de
          las especies, excepto las tradicionales de avicultura, seleccionar la
          dieta más adecuada es una labor realmente compleja y, en muchos casos,
          empírica.
        </p>
        <p>
          En este libro realizamos una revisión de los principales aspectos de
          la anatomía y funcionamiento del complejo sistema digestivo de las
          aves. Revisamos la importancia de los componentes de una dieta
          equilibrada para cubrir los requerimientos específicos en los periodos
          críticos de la vida de un ave (cría, crecimiento, muda, reproducción y
          puesta). Así mismo describimos las principales patologías debidas a
          una dieta inadecuada. Finalmente aportamos las fichas de nutrición
          recomendadas para cada grupo taxonómico elaboradas a partir de la
          experiencia acumulada en Avifauna, parque zoológico dedicado
          exclusivamente al mundo de las aves."
        </p>
      </div>
    </div>
  </section>
</template>

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
  max-width: 1000px;
}
.description > p {
  font-size: var(--fs-9);
}
.imgs-container {
  width: 70%;
  padding-block: 1em 2em;
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

@media (max-width: 880px) {
  .imgs-container {
    width: 90%;
  }
  .img-container {
    width: 100%;
  }
  .img-container:first-of-type {
    padding-right: 0;
  }
  .img-container:last-of-type {
    padding-left: 0;
    padding-top: 2em;
  }
}
</style>
