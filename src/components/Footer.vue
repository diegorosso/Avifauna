<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer-list">
        <li>
          <a href="#" class="footer-link">Terms of use</a>
        </li>

        <li>
          <a href="#" class="footer-link">Privacy & Policy</a>
        </li>
      </ul>

      <p class="copyright">
        Copyright 2022 <a href="#" class="copyright-link">Maca Trolo</a>. All
        Rights Reserved.
      </p>
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

.footer-list,
.copyright {
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

.footer-link,
.copyright-link {
  text-decoration: underline;
  transition: var(--transition-1);
}

.footer-link {
  color: var(--white_50);
}

:is(.footer-link, .copyright-link):is(:hover, :focus) {
  background-color: hsla(0, 0%, 100%, 0.05);
}

.copyright {
  text-align: center;
}

.copyright-link {
  display: inline-block;
}

@media (min-width: 1200px) {
  .footer .container {
    margin-inline: 30px;
    width: auto;
  }
}
</style>
