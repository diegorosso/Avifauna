<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer-list">
        <li>
          <a href="https://www.facebook.com/avifauna.lugo" class="footer-link">Síguenos en Facebook</a>
        </li>

        <li>
          <a href="https://www.instagram.com/avifaunalugo/" class="footer-link">Síguenos en Instagram</a>
        </li>

        <!-- Nuevo elemento para Tramitación, gestión y administración -->
        <li>
          Tramitación, gestión y administración
        </li>

        <!-- Teléfono de las oficinas -->
        <li>
          Teléfono de las oficinas: 982 24 20 53
        </li>

        <!-- Teléfono del parque -->
        <li>
          Teléfono del parque: 686 37 51 70
        </li>
      </ul>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: var(--raisin-black);
  color: var(--white);
  font-family: var(--ff-inter);
  padding-block: 40px;
}

.footer .container {
  margin-inline: 15px;
  background-color: var(--eerie-black-3);
  padding: 20px;
}

.footer-list {
  max-width: max-content;
  margin-inline: auto;
}

.footer-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px 40px;
  margin-block-end: 15px;
}

.footer-link {
  text-decoration: underline;
  transition: var(--transition-1);
}

.footer-link {
  color: var(--white_50);
}

:is(.footer-link):is(:hover, :focus) {
  background-color: hsla(0, 0%, 100%, 0.05);
}

@media (min-width: 1200px) {
  .footer .container {
    margin-inline: 30px;
    width: auto;
  }
}
</style>
