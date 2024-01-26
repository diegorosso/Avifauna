<template>
  <section class="section donate" id="donate">
    <div class="container">
      <ul class="donate-list">
        <li>
          <div class="donate-card">
            <figure class="card-banner">
              <img
                src="../assets/imagenes/donated-1.jpg"
                width="520"
                height="325"
                loading="lazy"
                alt="Elephant"
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <div class="progress-wrapper">
                <p class="progress-text">
                  <span>Raised</span>

                  <data value="256">$256</data>
                </p>

                <data class="progress-value" value="83">83%</data>
              </div>

              <div class="progress-box">
                <div class="progress"></div>
              </div>

              <h3 class="h3 card-title">Raise Hand To Save Animals</h3>

              <div class="card-wrapper">
                <p class="card-wrapper-text">
                  <span>Goal</span>

                  <data class="green" value="34562">$34562</data>
                </p>

                <p class="card-wrapper-text">
                  <span>Raise</span>

                  <data class="yellow" value="562">$562</data>
                </p>

                <p class="card-wrapper-text">
                  <span>To Go</span>

                  <data class="cyan" value="864">$864</data>
                </p>
              </div>

              <button class="btn btn-secondary">
                <span>Donation</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </li>

        <li>
          <div class="donate-card">
            <figure class="card-banner">
              <img
                src="../assets/imagenes/donated-2.jpg"
                width="520"
                height="325"
                loading="lazy"
                alt="Elephant"
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <div class="progress-wrapper">
                <p class="progress-text">
                  <span>Raised</span>

                  <data value="256">$256</data>
                </p>

                <data class="progress-value" value="83">83%</data>
              </div>

              <div class="progress-box">
                <div class="progress"></div>
              </div>

              <h3 class="h3 card-title">Raise Hand To Save Animals</h3>

              <div class="card-wrapper">
                <p class="card-wrapper-text">
                  <span>Goal</span>

                  <data class="green" value="34562">$34562</data>
                </p>

                <p class="card-wrapper-text">
                  <span>Raise</span>

                  <data class="yellow" value="562">$562</data>
                </p>

                <p class="card-wrapper-text">
                  <span>To Go</span>

                  <data class="cyan" value="864">$864</data>
                </p>
              </div>

              <button class="btn btn-secondary">
                <span>Donation</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </li>

        <li>
          <div class="donate-card">
            <figure class="card-banner">
              <img
                src="../assets/imagenes/donated-3.jpg"
                width="520"
                height="325"
                loading="lazy"
                alt="Elephant"
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <div class="progress-wrapper">
                <p class="progress-text">
                  <span>Raised</span>

                  <data value="256">$256</data>
                </p>

                <data class="progress-value" value="83">83%</data>
              </div>

              <div class="progress-box">
                <div class="progress"></div>
              </div>

              <h3 class="h3 card-title">Raise Hand To Save Animals</h3>

              <div class="card-wrapper">
                <p class="card-wrapper-text">
                  <span>Goal</span>

                  <data class="green" value="34562">$34562</data>
                </p>

                <p class="card-wrapper-text">
                  <span>Raise</span>

                  <data class="yellow" value="562">$562</data>
                </p>

                <p class="card-wrapper-text">
                  <span>To Go</span>

                  <data class="cyan" value="864">$864</data>
                </p>
              </div>

              <button class="btn btn-secondary">
                <span>Donation</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </li>

        <li>
          <div class="donate-card">
            <figure class="card-banner">
              <img
                src="../assets/imagenes/donated-4.jpg"
                width="520"
                height="325"
                loading="lazy"
                alt="Elephant"
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <div class="progress-wrapper">
                <p class="progress-text">
                  <span>Raised</span>

                  <data value="256">$256</data>
                </p>

                <data class="progress-value" value="83">83%</data>
              </div>

              <div class="progress-box">
                <div class="progress"></div>
              </div>

              <h3 class="h3 card-title">Raise Hand To Save Animals</h3>

              <div class="card-wrapper">
                <p class="card-wrapper-text">
                  <span>Goal</span>

                  <data class="green" value="34562">$34562</data>
                </p>

                <p class="card-wrapper-text">
                  <span>Raise</span>

                  <data class="yellow" value="562">$562</data>
                </p>

                <p class="card-wrapper-text">
                  <span>To Go</span>

                  <data class="cyan" value="864">$864</data>
                </p>
              </div>

              <button class="btn btn-secondary">
                <span>Donation</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scope>
.donate-list {
  display: grid;
  gap: 60px;
}

.donate-card {
  box-shadow: var(--card-shadow);
}

.donate-card .card-banner {
  background-color: var(--light-gray);
}

.donate-card .card-content {
  background-color: var(--white);
  padding: 35px;
}

.progress-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-text {
  display: flex;
  gap: 5px;
  font-size: var(--fs-8);
}

.progress-text data {
  color: var(--eerie-black-2);
  font-weight: var(--fw-600);
}

.donate-card .card-title {
  --fs-5: 2.1rem;
}

.progress-box {
  background-color: var(--cultured);
  border-radius: 20px;
  margin-block: 10px 20px;
}

.progress {
  height: 6px;
  width: 83%;
  background-color: #87ceeb;
  border-radius: inherit;
}

.progress-value {
  color: #87ceeb;
  font-size: var(--fs-7);
  font-weight: var(--fw-600);
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-block: 15px;
}

.donate-card .card-wrapper-text {
  display: flex;
  gap: 5px;
}

.donate-card .card-wrapper-text span {
  color: var(--sonic-silver);
  font-weight: var(--fw-500);
}

.card-wrapper-text data {
  font-weight: var(--fw-600);
}

.card-wrapper-text .green {
  color: #87ceeb;
}

.card-wrapper-text .yellow {
  color: var(--bright-yellow-crayola);
}

.card-wrapper-text .cyan {
  color: var(--medium-turquoise);
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
