<template>
  <div
    class="header"
    :class="{ activate: isActive }"
    data-header
    v-scroll="handleScroll"
  >
    <div class="container">
      <h1>
        <a href="#" class="logo">Avifauna</a>
      </h1>

      <button class="nav-open-btn" aria-label="Open Menu" @click="toggleNav">
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <nav class="navbar" :class="{ active: isActive }" data-navbar>
        <button
          class="nav-close-btn"
          aria-label="Close Menu"
          @click="toggleNav"
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <a href="#" class="logo">Avifauna</a>

        <ul class="navbar-list">
          <li>
            <a href="#home" class="navbar-link" @click="closeNav">
              <span>Home</span>

              <ion-icon
                name="chevron-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </li>

          <li>
            <a href="#about" class="navbar-link" @click="closeNav">
              <span>About</span>

              <ion-icon
                name="chevron-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </li>

          <li>
            <a href="#service" class="navbar-link" @click="closeNav">
              <span>Service</span>

              <ion-icon
                name="chevron-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </li>

          <li>
            <a href="#donate" class="navbar-link" @click="closeNav">
              <span>Donate</span>

              <ion-icon
                name="chevron-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </li>

          <li>
            <a href="#event" class="navbar-link" @click="closeNav">
              <span>Event</span>

              <ion-icon
                name="chevron-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="navbar-link" @click="closeNav">
              <span>Contact</span>

              <ion-icon
                name="chevron-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </li>
        </ul>
      </nav>

      <div class="header-action">
        <button class="btn btn-primary">
          <span>Compra tu entrada</span>

          <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      isTransparent: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
    closeNav() {
      this.isActive = false;
    },
    handleScroll() {
      const scrollY = window.scrollY;
      this.isActive = scrollY >= 50;
    },
  },
};
</script>

<style>
.container {
  padding-inline: 15px;
}
.lang-switch,
.header-action {
  display: none;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  padding-block: 18px;
  z-index: 4;
  transition: background-color 0.3s ease; /* Agrega una transición suave al cambio de clase */
}
.header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 140px);
  height: 1px;
  background-color: var(--white_10);
}
.header.activate {
  background-color: var(--eerie-black-1);
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.8);
}
.header.active::after {
  display: none;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}
.logo {
  color: var(--white);
  font-family: var(--ff-oswald);
  font-size: 3.2rem;
  text-transform: uppercase;
}
.nav-open-btn {
  color: var(--white);
  font-size: 3.8rem;
}
.navbar {
  position: fixed;
  background-color: var(--eerie-black-1);
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  outline: 1px solid var(--white_10);
  display: flex;
  flex-direction: column;
  z-index: 1;
  visibility: hidden;
  transition: 0.25s var(--cubic-in);
}
.navbar.active {
  transform: translateY(-100%);
  visibility: visible;
  transition: 0.5s var(--cubic-out);
}
.nav-close-btn {
  color: var(--white);
  font-size: 2.4rem;
  position: absolute;
  top: 15px;
  right: 15px;
}
.nav-close-btn ion-icon {
  --ionicon-stroke-width: 60px;
}
.navbar > .logo {
  font-size: 4rem;
  width: max-content;
  margin-inline: auto;
  margin-block-start: 50px;
}
.navbar-list {
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding-inline: 10px;
  opacity: 0;
  transition: 0.5s ease;
  transition-delay: 0s;
}
.navbar.active .navbar-list {
  opacity: 1;
  transition-delay: 0.25s;
}
.navbar-link {
  color: var(--white);
  font-size: var(--fs-9);
  font-weight: var(--fw-500);
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10px 15px;
  padding-block: 8px;
  transition: var(--transition-1);
}
.navbar-link:is(:hover, :focus) {
  background-color: #87ceeb;
}

.header.transparent {
  background-color: transparent !important; /* Fondo transparente cuando isTransparent es verdadero */
  transition: background-color 0.3s ease !important; /* Agrega la transición solo para background-color */
}

@media (min-width: 992px) {
  .header {
    transition: var(--transition-2);
  }

  .header-action {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .search-btn {
    color: var(--white);
    font-size: 2.6rem;
  }

  .search-btn ion-icon {
    --ionicon-stroke-width: 50px;
  }
  .donate-list {
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1400px;
    width: 100%;
    margin-inline: auto;
    padding-inline: 30px;
  }

  .section-title {
    line-height: 1.2;
  }

  .nav-open-btn,
  .nav-close-btn,
  .navbar > .logo,
  .navbar-link > ion-icon {
    display: none;
  }

  .header {
    padding-block: 25px;
  }

  .lang-switch {
    position: relative;
    display: block;
    background-color: transparent;
    border: none;
    color: var(--white);
    font: inherit;
    font-size: var(--fs-8);
    font-weight: var(--fw-600);
  }

  .lang-switch option {
    color: var(--eerie-black-1);
  }

  .navbar {
    all: unset;
    margin-inline: auto;
  }

  .navbar-list {
    all: unset;
    display: flex;
    gap: 10px;
  }

  .navbar-link {
    font-size: var(--fs-8);
    font-weight: var(--fw-600);
    text-transform: capitalize;
    transition: var(--transition-2);
  }

  .navbar-link:is(:hover, :focus) {
    background: none;
  }

  .navbar-list:hover .navbar-link:not(:hover) {
    color: var(--white-60);
  }
}
</style>
