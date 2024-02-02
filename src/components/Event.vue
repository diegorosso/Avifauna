<template>
  <section class="section event" id="events">
    <div class="container">
      <p class="section-subtitle">
        <img
          src="@/assets/images/subtitle-img-green.png"
          width="32"
          height="7"
          alt="Wavy line"
        />

        <span>Eventos y actividades</span>

        <img
          src="@/assets/images/subtitle-img-green.png"
          width="32"
          height="7"
          alt="Wavy line"
        />
      </p>

      <h3 class="h2 section-title">
        Aquí encontrarás la información de todas las actividades que realizamos
        en el parque
      </h3>

      <ul class="event-list">
        <li>
          <div class="event-card">
            <time class="card-time" datetime="01-05">
              <span class="month">Feb</span>

              <span class="date">20</span>
            </time>

            <div class="wrapper">
              <div class="card-content">
                <p class="card-subtitle">Paseo largo</p>

                <h3 class="card-title">Reconocimiento de 20 especies</h3>

                <p class="card-text">
                  Haremos un recorrido caminando que durara 2hs, asimilando
                  información y encontrando similitudes y diferencias entre las
                  aves.
                </p>
              </div>

              <button class="btn btn-white">
                <span>Quiero participar</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </li>
        <li>
          <div class="event-card">
            <time class="card-time" datetime="01-05">
              <span class="month">Mar</span>

              <span class="date">12</span>
            </time>

            <div class="wrapper">
              <div class="card-content">
                <p class="card-subtitle">Paseo corto</p>

                <h3 class="card-title">Reconocimiento de 10 especies</h3>

                <p class="card-text">
                  Haremos un recorrido caminando que durara 1hs, asimilando
                  información y encontrando similitudes y diferencias entre las
                  aves.
                </p>
              </div>

              <button class="btn btn-white">
                <span>Quiero participar</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.event {
  padding-block-end: 1em;
}

.event .section-subtitle {
  justify-content: center;
}

.event .section-title {
  text-align: center;
  padding-bottom: 0.7em;
}

.section-title{
  max-width: 70%;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-list {
  /* display: grid; */
  /* gap: 30px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 70px;
  width: 100%;
}

li {
  margin-bottom: 1em;
}

.event-card {
  border: 1px solid var(--platinum);
  padding: 40px 30px;
  border-radius: 2px;
  outline: 3px solid transparent;
  transition: var(--transition-2);
}

.event-card:is(:hover, :focus-within) {
  outline-color: #82ad45;
}

.event-card .card-time {
  background-color: #82ad45;
  color: var(--white);
  font-weight: var(--fw-600);
  line-height: 1.3;
  max-width: max-content;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 10px 15px #82ad45;
}

.event-card .card-time .month {
  font-size: 2.1rem;
}

.event-card .card-time .date {
  font-size: var(--fs-4);
}

.event-card .card-subtitle {
  margin-block: 30px 5px;
  color: #82ad45;
  font-size: var(--fs-8);
  font-weight: var(--fw-600);
  letter-spacing: -1px;
}

.event-card .card-title {
  color: var(--eerie-black-2);
  letter-spacing: -1px;
}

.event-card .card-text {
  font-family: var(--ff-inter);
  margin-block: 5px 30px;
  max-width: 60vw;
}

.event .btn-secondary {
  margin-inline: auto;
}

@media (min-width: 992px) {
  .event-card .wrapper {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }

  .event-card .card-text {
    margin-block-end: 0;
  }
}
</style>
