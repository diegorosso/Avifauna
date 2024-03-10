<template>
  <section id="Contact">
    <div class="hero-container">
      <div class="title-form">
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

      <form class="form-style" @submit.prevent="sendEmail">
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
            type="email"
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

        <label v-if="guidedVisit" class="checkbox-container">
          <input type="checkbox" v-model="formData.guidedVisit" />
          <span class="checkmark"></span>
        </label>
        <button
          class="btn win"
          type="submit"
          :class="{ disabled: !isValidForm() }"
        >
          <span v-if="!showSpinner">
            <ion-icon class="padding" name="paper-plane-sharp"></ion-icon>Enviar
          </span>
          <VueSpinner v-if="showSpinner" size="30" color="#fff" />
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { VueSpinner } from "vue3-spinners";
import { useModal } from "vue-final-modal";
import SimpleModalInfo from "./SimpleModalInfo.vue";

let showSpinner = ref(false);

const props = defineProps(["guidedVisit"]);
const guidedVisit = ref(props.guidedVisit);

const formData = ref({
  name: "",
  phone: "",
  email: "",
  entity: "",
  message: "",
  guidedVisit: false,
});

const isValidForm = () => {
  const { name, phone, email, entity, message } = formData.value;
  if (
    name === "" ||
    phone === "" ||
    !email.includes("@") ||
    entity === "" ||
    message === ""
  )
    return false;
  return true;
};

watch(
  () => props.guidedVisit,
  (newValue, oldValue) => {
    guidedVisit.value = newValue;

    if (guidedVisit.value) {
      formData.value.guidedVisit = true;
    }
  }
);

let modalTitle = ref("");
let modalContent = ref("");

const { open, close, patchOptions } = useModal({
  component: SimpleModalInfo,
  attrs: {
    modalTitle: "",
    modalContent: "",
    onBack() {
      close();
    },
  },
});

async function sendEmail() {
  showSpinner.value = true;

  let data = {
    service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    user_id: import.meta.env.VITE_EMAILJS_USER_ID,
    accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
    template_params: {
      name: formData.value.name,
      phone: formData.value.phone,
      email: formData.value.email,
      entity: formData.value.entity,
      message: formData.value.message,
      guidedVisit: formData.value.guidedVisit ? "Si" : "No especifica",
    },
  };
  try {
    const url = "https://api.emailjs.com/api/v1.0/email/send";
    await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    showSpinner.value = false;
    patchOptions({
      attrs: {
        modalTitle: "El pedido ha sido enviado de manera exitosa!",
      },
    });
    open();

    formData.value = {
      name: "",
      phone: "",
      email: "",
      entity: "",
      message: "",
      guidedVisit: false,
    };
  } catch (error) {
    showSpinner.value = false;
    console.log({ error });
    patchOptions({
      attrs: {
        modalTitle: "Error inesperado!",
        modalContent:
          "El pedido no ha podido enviarse debido a un error inesperado, por favor vuelva a intentarlo!",
      },
    });
    open();
  }
}
</script>

<style scoped>
.hero-container {
  width: 100%;
  padding-block: 6em;
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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* custom checkbox */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-block: -30px 2em;
}
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 8px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
}
.checkbox-container:after {
  content: "Quiero solicitar una visita guiada";
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}
.checkbox-container input:checked ~ .checkmark {
  background-color: #fff;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}
.checkbox-container .checkmark:after {
  left: 10px;
  top: 6px;
  width: 5px;
  height: 10px;
  border: solid #212121;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.win {
  width: 100%;
  justify-content: center;
}

.win > span {
  display: flex;
  align-items: center;
}
.win > span > ion-icon {
  margin-right: 0.5em;
}
.input-style:focus ~ .label-style,
.input-style:valid ~ .label-style,
.label-style {
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
.title-form {
  margin-bottom: 5rem;
  width: 100%;
  max-width: 70%;
}

@media (min-width: 992px) {
  .form-style {
    max-width: 40%;
  }
  .title-form {
    max-width: 40%;
  }
}

@media (max-width: 520px) {
  .hero-container {
    padding-block: var(--section-padding);
  }

  .title-form, .form-style{
    max-width: 80%;
  }
}
</style>
