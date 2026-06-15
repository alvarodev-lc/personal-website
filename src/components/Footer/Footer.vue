<script setup>
import { ROUTES } from '../../routes'
import './footer.min.css'

const year = new Date().getFullYear()

function showContactModal() {
  document.getElementById('contact-button').click()
}
</script>

<template>
  <div id="footer" class="footer">
    <div class="mask-base tl" />
    <div class="mask-top tl" />
    <div class="container">
      <div class="footer-content" data-aos="fade-in" data-aos-duration="1000">
        <div class="w-layout-grid grid-col">
          <div class="footer-column">
            <div class="footer-content-item">
              <RouterLink class="footer-text" :to="ROUTES.HOME" @click="() => window.scrollTo(0, 0)">Home</RouterLink>
            </div>
            <div class="footer-content-item">
              <RouterLink class="footer-text" :to="ROUTES.ABOUT" @click="() => window.scrollTo(0, 0)">About me</RouterLink>
            </div>
            <div class="footer-content-item">
              <RouterLink class="footer-text" :to="ROUTES.PROJECTS" @click="() => window.scrollTo(0, 0)">Projects</RouterLink>
            </div>
            <div class="footer-content-item">
              <span class="footer-text" @click="showContactModal">Contact me!</span>
            </div>
          </div>
          <div class="footer-column">
            <div class="footer-content-item">
              <a class="footer-text display-inline" href="https://www.linkedin.com/in/alvaro-lopez-b354321b8" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div class="footer-content-item">
              <a class="footer-text display-inline" href="https://github.com/alvarodev-lc" target="_blank" rel="noreferrer">Github</a>
            </div>
          </div>
          <div class="footer-column">
            <div class="footer-content-item">
              <RouterLink class="footer-text display-inline" :to="ROUTES.PRIVACY" @click="() => window.scrollTo(0, 0)">Privacy policy</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_secondary pb-5">
        <div class="divider dm" />
        <div class="w-layout-grid footer_secondary-grid">
          <div class="left-container">
            <div class="copyright">
              <div class="p12">© {{ year }} - Alvaro López. All rights reserved.</div>
            </div>
          </div>
        </div>
        <div class="divider dm" />
      </div>
    </div>
  </div>
</template>
