<template>
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3
        @mouseenter="hoverEffect"
        @mouseleave="resetEffect"
        @click="scrollToTop"
      >
        Avifauna
      </h3>
      <!-- 
      <p class="footer-links">
        <a href="#">El parque</a>
        |
        <a href="#">Animales</a>
        |
        <a href="#">Actividades</a>
        |
        <a href="#">Investigación</a>
        |
        <a href="#">Horarios y Tarifas</a>
        |
        <a href="#">Contacto</a>
      </p> -->

      <p class="footer-company-name">
        Copyright © 2024 Bug. All Rights Reserved
      </p>
    </div>

    <div class="footer-center">
      <div>
        <a
          class="display-flex"
          href="https://maps.app.goo.gl/dEWeXfgiVEZmocqv8"
          target="_blank"
        >
          <ion-icon name="location-outline"></ion-icon>
          <p>Outeiro de Rei, Lugo 27157</p>
        </a>
      </div>

      <div @click="toCall(982242053)">
        <ion-icon name="call-outline"></ion-icon>
        <p class="align-item">Teléfono de las oficinas: 982 24 20 53</p>
      </div>
      <div @click="toCall(686375170)">
        <ion-icon name="call-sharp"></ion-icon>
        <p class="align-item">Teléfono del parque: 686 37 51 70</p>
      </div>
      <div>
        <ion-icon name="mail-outline"></ion-icon>
        <p>
          <a href="mailto:administracion@avifauna.net"
            >administracion@avifauna.net</a
          >
        </p>
      </div>
    </div>
    <div class="footer-right">
      <p class="footer-company-about">
        <span>Redes Sociales</span>
        <strong
          >¡Conéctate con nosotros en las redes sociales y déjanos tu
          mensaje!</strong
        >
        Explora nuestras redes sociales para mantenerte al tanto de las últimas
        novedades, actualizaciones y eventos emocionantes. Nos encantaría
        escuchar tus comentarios, sugerencias o simplemente recibir un saludo
        amistoso.
      </p>
      <div class="footer-icons">
        <a href="https://www.facebook.com/avifauna.lugo" target="_blank"
          ><ion-icon name="logo-facebook"></ion-icon
        ></a>
        <a href="https://www.instagram.com/avifaunalugo/" target="_blank"
          ><ion-icon name="logo-instagram"></ion-icon
        ></a>
        <a href="https://www.youtube.com/@avifaunalugo" target="_blank"
          ><ion-icon name="logo-youtube"></ion-icon
        ></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const hoverEffect = () => {
  const avifaunaText = document.querySelector(".footer-left h3");
  avifaunaText.classList.add("hover-effect");
};

const resetEffect = () => {
  const avifaunaText = document.querySelector(".footer-left h3");
  avifaunaText.classList.remove("hover-effect");
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toCall = (number) => {
  window.location.href = 'tel:' + number;
}
</script>

<style scoped>
header {
  text-align: center;
  padding-top: 100px;
  margin-bottom: 300px;
  font-size: 35px;
}

header h2 {
  color: #f0525f;
}

header span {
  color: #eaa03f;
}

/* The footer is fixed to the bottom of the page */

footer {
  bottom: 0;
}

@media (max-height: 800px) {
  footer {
    position: static;
  }
  header {
    padding-top: 40px;
  }
}
.align-item {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
}
.display-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-icons {
  display: flex;
}

.footer-distributed {
  background-color: #2d2a30;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 50px 50px 60px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 30%;
}

.footer-distributed h3 {
  color: #ffffff;
  margin: 0;
  font-size: var(--fs-3);
  font-family: var(--ff-oswald);
}

.footer-distributed h3 span {
  color: #e0ac1c;
}

/* Footer links */

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  display: flex;
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  text-decoration: none;
}

/* Footer Right */

.footer-distributed .footer-right {
  width: 30%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: flex; /* Agrega un contenedor flex */
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-right: 3px;
  margin-bottom: 5px;
}

.footer-distributed .footer-icons a:hover {
  background-color: #82ad45;
}

.footer-links a:hover {
  color: #82ad45;
}
.footer-distributed .footer-center div {
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
}

.footer-distributed .footer-center div p::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: transparent; /* Inicialmente transparente */
  transition: background-color 0.3s ease; /* Transición suave */
}
.footer-distributed .footer-center div p:hover::after {
  background-color: #ffffff; /* Cambia el color del subrayado al pasar el mouse */
}

.footer-distributed .footer-center div ion-icon {
  margin-right: 10px;
}

.footer-distributed .footer-center div p {
  margin: 0;
  position: relative; /* Añadir posición relativa para alinear el subrayado */
}

.footer-distributed .footer-center div ion-icon[name="location-outline"],
.footer-distributed .footer-center div ion-icon[name="call-outline"],
.footer-distributed .footer-center div ion-icon[name="mail-outline"],
.footer-distributed .footer-center div ion-icon[name="call-sharp"] {
  color: #ffffff; /* Color blanco */
  font-size: 30px; /* Tamaño más grande */
  border-radius: 50%; /* Borde redondo */
  background-color: #33383b; /* Color de fondo */
  width: 25px; /* Ajusta el tamaño del icono */
  height: 25px; /* Ajusta el tamaño del icono */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
}

@media (max-width: 880px) {
  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .footer-distributed .footer-center i {
    margin-left: 0;
  }
  .footer-distributed .footer-icons {
    justify-content: center;
  }
  .footer-distributed .footer-center div p[data-v-4896eafd] {
    font-size: 1.4rem;
  }
  .footer-distributed .footer-company-name{
  justify-content: center;
}
}

.footer-distributed .footer-left h3 {
  color: #ffffff;
  margin: 0;
  font-size: var(--fs-3);
  font-family: var(--ff-oswald);
  cursor: pointer; /* Agrega cursor pointer para indicar que es clickeable */
}

.footer-distributed .footer-left h3.hover-effect {
  transition: color 0.3s ease; /* Transición suave */
  color: #82ad45; /* Cambia el color al pasar el mouse */
}

</style>
