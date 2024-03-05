<template>
  <section id="Contact">
    <div class="hero-conteiner">
      <div class="tittle-form">
        <p class="section-subtitle">
          <img
            src="../assets/images/subtitle-img-green.png"
            width="32"
            height="7"
            alt="Wavy line"
          />
          <span>Contacto </span>
        </p>
        <h2 class="h2 section-title">Conéctate con Nosotros</h2>
      </div>

      <form class="form-style">
        <div class="row">
          <div class="input-group">
            <input
              class="input-style"
              type="text"
              id="name"
              required
              v-model="formData.name"
            />
            <label class="label-style" for="name">
              <ion-icon class="padding" name="person-sharp"></ion-icon>
              Nombre</label
            >
          </div>
          <div class="input-group">
            <input
              class="input-style"
              type="number"
              id="number"
              required
              v-model="formData.phone"
            />
            <label class="label-style" for="number">
              <ion-icon class="padding" name="call-sharp"></ion-icon>
              Teléfono</label
            >
          </div>
        </div>

        <div class="input-group">
          <input
            class="input-style"
            type="text"
            id="email"
            required
            v-model="formData.email"
          />
          <label class="label-style" for="email">
            <ion-icon class="padding" name="mail-sharp"></ion-icon> Email</label
          >
        </div>
        <div class="input-group">
          <input
            class="input-style"
            type="text"
            id="entity"
            required
            v-model="formData.entity"
          />
          <label class="label-style" for="entity">
            <ion-icon class="padding" name="people-circle-sharp"></ion-icon>
            Entidad</label
          >
        </div>
        <div class="input-group">
          <textarea
            class="textarea-style"
            id="message"
            rows="8"
            required
            v-model="formData.message"
          ></textarea>
          <label class="label-style" for="message"
            ><ion-icon class="padding" name="chatbubbles-sharp"></ion-icon>
            Mensaje</label
          >
        </div>
        <button class="btn win" type="button" @click="sendEmail()">
          <ion-icon class="padding" name="paper-plane-sharp"></ion-icon>Enviar
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const formData = ref({
  name: "",
  phone: "",
  email: "",
  entity: "",
  message: "",
});

async function sendEmail() {
  let data = {
    service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    user_id: import.meta.env.VITE_EMAILJS_USER_ID,
    accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
    template_params: formData.value,
  };
  
  try {
    const url = "https://api.emailjs.com/api/v1.0/email/send";
    await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Mando");
  } catch (error) {
    console.log({ error });
  }
}
</script>

<style scoped>
.hero-conteiner {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), #3551b5),
    url(../assets/images/banner1.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.form-style {
  width: 90%;
  max-width: 70%;
}

.input-group {
  margin-bottom: 30px;
  position: relative;
}

.input-style,
.textarea-style {
  width: 100%;
  padding: 10px;
  outline: 0;
  border: 1px solid #fff;
  background: transparent;
  font-size: 15px;
  color: #fff;
  font-family: var(--ff-roboto);
}

.label-style {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px;
  color: #fff;
  cursor: text;
  display: flex;
  transition: 0.2s;
}
.win {
  width: 100%;
  justify-content: center;
}
.input-style:focus ~ .label-style,
.input-style:valid ~ .label-style {
  top: -35px;
  font-size: 14px;
}

.textarea-style:focus ~ .label-style,
.textarea-style:valid ~ .label-style {
  top: -35px;
  font-size: 14px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.row .input-group {
  flex-basis: 48%;
}
.padding {
  padding: 4px;
}
.h2 {
  color: #fff;
  line-height: 1.3;
  padding-top: 0.3em;
  font-size: var(--fs-3);
}
.tittle-form {
  margin-bottom: 5rem;
  width: 100%;
  /* max-width: 40%; */
  max-width: 70%;
}
@media (min-width: 992px) {
  .form-style {
    max-width: 40%;
  }
  .tittle-form {
    max-width: 40%;
  }
}
</style>
