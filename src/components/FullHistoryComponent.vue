<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

const emit = defineEmits<{
  (e: "back"): void;
}>();
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="container-modal">
      <h1>Nuestra historia:</h1>
      <p>
        En 1978 los hermanos Antonio y Francisco Ibañez Burgo, adquieren el
        terreno de una antigua cantera de piedra utilizada como escombrera con
        la intención de crear un parque botánico y ornitológico.
      </p>
      <p>
        Durante los primeros años se dedicaron a limpiar y darle forma al
        terreno de un modo manual. Los conocimientos de diseño y construcción,
        por su condición de delineante, hacen que comience a distribuir los
        diferentes alojamientos, así como la plantación ordenada de la
        vegetación y la introducción de las primeras aves.
      </p>
      <p>
        En 1987 se consigue la condición de núcleo zoológico a nivel nacional,
        siendo uno de los primeros en la comunidad autónoma de Galicia.
      </p>
      <p>
        En 1998, teniendo acondicionado más de la mitad de los 25.000 metros
        cuadrados, muere de forma repentina Francisco, quedando su hermano
        Antonio muy afectado y parando el proyecto que con tanto esfuerzo e
        ilusión habían comenzado juntos.
      </p>
      <p>
        A los pocos meses, Carlos Fernández Moreira, aficionado a las aves y
        gran amigo de los hermanos se une a Antonio para darle un nuevo impulso
        al proyecto. A partir de ese momento el parque adquiere un importante
        desarrollo tanto en las instalaciones como en la importación de aves.
      </p>
      <p>
        Al poco tiempo se suma al proyecto otro aficionado a las aves, que tiene
        una estrecha amistad con Antonio, Remigio Sánchez Diaz. Es en ese
        momento que se toma la decisión de crear una Asociación sin ánimo de
        lucro, básicamente dedicada a la educación ambiental, naciendo de esta
        forma AVIFAUNA, con la denominación de Asociación Centro de
        Interpretación de Avifauna.
      </p>
      <p>
        Ante las inmensas tareas para hacer funcionar todo era necesario dotar
        el parque de más personal, lo que dio como resultado la incorporación
        permanente de José Manuel Díaz Paz.
      </p>
      <p>
        De aquí en adelante, Antonio y José se encargan de diseñar y construir
        la infraestructura necesaria para el desarrollo de las actividades que
        en la actualidad cuenta con 76 alojamientos totalmente adecuados para
        las aves.
      </p>
      <p>
        En el año 2000, se abre al público y se comienzan a recibir visitas de
        colegios, siendo una de las ofertas de actividades medioambientales más
        importantes y recibiendo por ello la mayor distinción civil de Galicia,
        la Medalla de Plata de Galicia.
      </p>
      <p>
        En el año 2017, la asociación recibe un nuevo miembro, José Manuel López
        Cedrón, formando el equipo que en la actualidad gobierna toda la
        actividad de Avifauna. En estos momentos, además de las actividades de
        educación ambiental, el parque mantiene convenios con la Diputación de
        Lugo, el Ayuntamiento de Outeiro de Rei y con la Universidad de Santiago
        de Compostela y participa en el programa de vigilancia sanitaria, en la
        incorporación de estudiantes en prácticas de diferentes grados y de
        recoge y cuida aves irrecuperables de los diferentes centros de
        recuperación de España.
      </p>
      <p>
        Al día de hoy Avifauna es uno de los parques ornitológicos con mayor
        reconocimiento de la península, siendo visitado por un gran número de
        personas anualmente.
      </p>
      <p>Esperamos encarecidamente que tú seas una de esas.</p>

      <button class="btn btn-primary" @click="emit('back')">Volver</button>
    </div>
  </VueFinalModal>
</template>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  width: 90vw;
  height: 90vh;
  padding: 1rem 0 1rem 1rem;
  background: #fff;
  border-radius: 0.5rem;
}
.confirm-modal-content > * + * {
  margin: 0.5rem 0;
}

.container-modal {
  font-size: 1.2em;
  width: 100%;
  max-height: 98%;
  overflow-y: auto;
  padding: 4em;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.confirm-modal-content h1 {
  font-size: var(--fs-4);
}
.confirm-modal-content button {
  margin-top: 4rem;
  width: 180px;
  border: 1px solid;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.dark .confirm-modal-content {
  background: #000;
}
</style>
