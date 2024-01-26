<template>
  <section class="section event" id="event">
    <div class="container">
      <p class="section-subtitle">
        <img
          src="./assets/images/subtitle-img-green.png"
          width="32"
          height="7"
          alt="Wavy line"
        />

        <span>Event & Program</span>

        <img
          src="./assets/images/subtitle-img-green.png"
          width="32"
          height="7"
          alt="Wavy line"
        />
      </p>

      <h2 class="h2 section-title">
        Our Most Popular Causes For <strong>Building Fund</strong>
      </h2>

      <ul class="event-list">
        <li>
          <div class="event-card">
            <time class="card-time" datetime="01-05">
              <span class="month">Jan</span>

              <span class="date">05</span>
            </time>

            <div class="wrapper">
              <div class="card-content">
                <p class="card-subtitle">Ocean Water</p>

                <h3 class="card-title">
                  Far from the countries Vokalia and Consonantia 2022
                </h3>

                <p class="card-text">
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor
                </p>
              </div>

              <button class="btn btn-white">
                <span>View Events</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </li>

        <li>
          <div class="event-card">
            <time class="card-time" datetime="02-23">
              <span class="month">Feb</span>

              <span class="date">23</span>
            </time>

            <div class="wrapper">
              <div class="card-content">
                <p class="card-subtitle">Ocean Water</p>

                <h3 class="card-title">
                  Far from the countries Vokalia and Consonantia 2022
                </h3>

                <p class="card-text">
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor
                </p>
              </div>

              <button class="btn btn-white">
                <span>View Events</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </li>

        <li>
          <div class="event-card">
            <time class="card-time" datetime="03-27">
              <span class="month">Mar</span>

              <span class="date">27</span>
            </time>

            <div class="wrapper">
              <div class="card-content">
                <p class="card-subtitle">Ocean Water</p>

                <h3 class="card-title">
                  Far from the countries Vokalia and Consonantia 2022
                </h3>

                <p class="card-text">
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor
                </p>
              </div>

              <button class="btn btn-white">
                <span>View Events</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </li>
      </ul>

      <button class="btn btn-secondary">
        <span>Learn More Us</span>

        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>
  </section>
</template>

<style scope>
.event {
  padding-block-end: 120px;
}

.event .section-subtitle {
  justify-content: center;
}

.event .section-title {
  text-align: center;
  margin-block: 15px 50px;
}

.event-list {
  display: grid;
  gap: 30px;
  margin-block-end: 70px;
}

.event-card {
  border: 1px solid var(--platinum);
  padding: 40px 30px;
  border-radius: 2px;
  outline: 3px solid transparent;
  transition: var(--transition-2);
}

.event-card:is(:hover, :focus-within) {
  outline-color: #87ceeb;
}

.event-card .card-time {
  background-color: #87ceeb;
  color: var(--white);
  font-weight: var(--fw-600);
  line-height: 1.3;
  max-width: max-content;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 10px 15px #87ceeb;
}

.event-card .card-time .month {
  font-size: 2.1rem;
}

.event-card .card-time .date {
  font-size: var(--fs-4);
}

.event-card .card-subtitle {
  margin-block: 30px 5px;
  color: #87ceeb;
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
