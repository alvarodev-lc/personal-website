<script setup>
import { ref, computed } from 'vue'
import { menuItems } from './menuItems'
import ContactModal from '../ContactModal/ContactModal.vue'
import './navbar.min.css'

const clicked = ref(false)
const margin = ref(80)

function handleClick() {
  clicked.value = !clicked.value
  margin.value = clicked.value ? 300 : 80
}

const mobileCSS = computed(() => `
  @media screen and (max-width: 960px) {
    .c-navbar-items { margin-bottom: ${margin.value}px; transition: all 0.5s ease-in-out; }
    .c-nav-menu { height: 200px; }
    #contact_modal { padding-bottom: 0; padding-top: 29.5px; }
    .c-navbar-logo { padding-top: 4px; }
  }
`)
</script>

<template>
  <nav class="c-navbar-items">
    <RouterLink class="c-navbar-logo" to="/home">
      <h1>Alvaro<i class="fab fa-vuejs"></i></h1>
    </RouterLink>
    <div class="c-menu-icon" @click="handleClick">
      <i :class="clicked ? 'fas fa-times' : 'fas fa-bars'"></i>
    </div>
    <ul :class="clicked ? 'c-nav-menu active' : 'c-nav-menu'">
      <li v-for="(item, index) in menuItems" :key="index">
        <RouterLink :class="item.cName" :to="item.url">{{ item.title }}</RouterLink>
      </li>
      <component is="style">{{ mobileCSS }}</component>
    </ul>
    <ContactModal />
  </nav>
</template>
