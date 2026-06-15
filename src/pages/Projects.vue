<script setup>
import Navbar from '../components/Navbar/Navbar.vue'
import ProjectCard from '../components/ProjectCard/Card.vue'
import { ROUTES } from '../routes'
</script>

<template>
  <div id="projects">
    <Navbar />
    <div class="proj-page-content">
      <div class="proj-header">
        <h1 class="big-text">Projects</h1>
        <p class="normal-text proj-subtitle">A selection of things I've built</p>
      </div>
      <div class="proj-grid">
        <ProjectCard
          :index="0"
          image="bulbasur-bg"
          title="Pokédex"
          desc="Android pokédex and team builder for all pokémon generations"
          :redirectUrl="ROUTES.PROJECTS_POKEDEX"
          :negative="true"
        />
        <ProjectCard
          :index="1"
          image="portal-bg"
          title="VR Portals"
          desc="Non-euclidean spaces in virtual reality"
          :redirectUrl="ROUTES.PROJECTS_PORTAL_VR"
          :negative="true"
        />
      </div>
    </div>
  </div>
</template>
