import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Aos from 'aos'

import App from './App.vue'

const Home = () => import('./pages/Home.vue')
const AboutMe = () => import('./pages/AboutMe.vue')
const Projects = () => import('./pages/Projects.vue')
const PrivacyPolicy = () => import('./pages/PrivacyPolicy.vue')
const Pokedex = () => import('./pages/projects/Pokedex.vue')
const PortalVR = () => import('./pages/projects/PortalVR.vue')

import './App.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'

import { ROUTES } from './routes'

Aos.init()

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: ROUTES.HOME },
    { path: ROUTES.HOME, component: Home },
    { path: ROUTES.ABOUT, component: AboutMe },
    { path: ROUTES.PROJECTS, component: Projects },
    { path: ROUTES.PROJECTS_POKEDEX, component: Pokedex },
    { path: ROUTES.PROJECTS_PORTAL_VR, component: PortalVR },
    { path: ROUTES.PRIVACY, component: PrivacyPolicy },
  ]
})

const app = createApp(App)
app.use(router)
app.use(PrimeVue, { theme: { preset: Aura } })
app.mount('#root')
