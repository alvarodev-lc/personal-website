<script setup>
import Navbar from '@components/Navbar/Navbar.vue'
import Footer from '@components/Footer/Footer.vue'

import pasicon from '@images/projects/pas_pokedex/pas.webp'
import pas_login from '@images/projects/pas_pokedex/pas_login.webp'
import pas_pokedexoverview from '@images/projects/pas_pokedex/pas_pokedex_overview.webp'
import pas_pokemonoverview1 from '@images/projects/pas_pokedex/pokemon_overview_1.webp'
import pas_pokemonoverview2 from '@images/projects/pas_pokedex/pokemon_overview_2.webp'
import pas_teambuilderoverview from '@images/projects/pas_pokedex/pas_teambuilder_overview.webp'
import pas_teambuilderteamcreationoverview from '@images/projects/pas_pokedex/pas_teambuilder_teamcreation_overview.webp'
</script>

<template>
  <div id="projects">
    <Navbar />
    <div>
      <div class="container-fluid">
        <div class="row" data-aos="fade-down" data-aos-duration="1500">
          <div class="col-md-8 offset-md-2">
            <img :src="pasicon" alt="Pas Pokedex Icon" class="pb-2" width="120" height="105" />
            <a class="big-text ps-3" href="https://github.com/alvarodev-lc/PAS-Pokedex" target="_blank" rel="noreferrer">
              Pas Pokedex
            </a>
          </div>
        </div>

        <div class="row pt-4" data-aos="fade-down" data-aos-duration="1500">
          <div class="col-md-8 offset-md-2">
            <a
              href="https://play.google.com/store/apps/details?id=es.upm.mssde.pokedex"
              target="_blank"
              rel="noreferrer"
              :style="{
                display: 'inline-block',
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #34a853 0%, #1e7e34 100%)',
                color: '#fff',
                fontFamily: 'Fredoka, sans-serif',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(52,168,83,0.45)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }"
              @mouseenter="e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(52,168,83,0.6)'; }"
              @mouseleave="e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(52,168,83,0.45)'; }"
            >
              <i class="fab fa-google-play" style="margin-right: 10px"></i>
              Download it right now!
            </a>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 offset-md-2 pt-md-3 pb-100">
            <div data-aos="fade-down" data-aos-duration="1500">
              <span class="normal-text">
                PAS Pokedex was a project I made with a group of developers using Android Studio and Java. The point was to consume a
                <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">Pokémon API</a> to consume all the information we could and create a Pokédex
                with usefull information for Pokémon lovers. We implemented a login system using
                <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">Firebase</a> so that we could store users on the cloud.
              </span>
            </div>

            <div class="row pt-5">
              <div class="col" data-aos="fade-right" data-aos-duration="1500">
                <img :src="pas_login" alt="Pas Login" class="pb-2" width="270" height="460" />
              </div>
              <div class="col" data-aos="fade-down" data-aos-duration="1500">
                <img :src="pas_pokedexoverview" alt="Pas Pokedex Overview" class="pb-2" width="270" height="460" />
              </div>
              <div class="col" data-aos="fade-left" data-aos-duration="1500">
                <img :src="pas_pokemonoverview1" alt="Pas Pokemon Overview1" class="pb-2" width="270" height="460" />
              </div>
            </div>

            <div class="pt-5" data-aos="fade-in" data-aos-duration="1500">
              <span class="normal-text">You can also see the shiny version and a graphical view of the base stats if you scroll down!</span>
            </div>

            <div class="text-center pt-5" data-aos="fade-in" data-aos-duration="1500">
              <img :src="pas_pokemonoverview2" alt="Pas Pokemon Overview2" class="pb-2" width="350" height="310" />
            </div>

            <div class="pt-100" data-aos="fade-down" data-aos-duration="1500">
              <span class="normal-text">
                Whats the fun about Pokémon if you can't build a team? TeamBuilder has you covered! Build as many teams as you want using the search functionality
                and create, modify or delete them at will. When a team is created, it's displayed as a new team with Pokémon images. You can create a team of a
                maximum of 6 members, but you can leave some spots open and fill them later!
              </span>
            </div>

            <div id="teambuilder" class="row pt-5 ps-200">
              <div class="col" data-aos="fade-right" data-aos-duration="1500">
                <img :src="pas_teambuilderoverview" alt="Pas TeamBuilder Overview" class="pb-2" width="270" height="460" />
              </div>
              <div class="col" data-aos="fade-left" data-aos-duration="1500">
                <img :src="pas_teambuilderteamcreationoverview" alt="Pas TeamBuilder TeamCreation Overview" class="pb-2" width="270" height="460" />
              </div>
            </div>

            <div class="pt-100" data-aos="fade-up" data-aos-duration="1500">
              <span class="normal-text">
                Check out the open source project on <a href="https://github.com/alvarodev-lc/PAS-Pokedex" target="_blank" rel="noreferrer">Github!</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
