# React → Vue 3 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the personal portfolio SPA from React 18 to Vue 3.5 with Composition API, replacing react-router-dom with vue-router and react-bootstrap with PrimeVue.

**Architecture:** All `.jsx` files become `.vue` SFCs using `<script setup>` Composition API. The entry point becomes `src/main.js` (creates a Vue app, mounts router and PrimeVue). Routing uses `createWebHashHistory` (GitHub Pages compatible). The Loading page is removed — the root `/` redirects directly to `/home` via the router config.

**Tech Stack:** Vue 3.5, vue-router 4, PrimeVue 4 + @primevue/themes (Aura preset), @vitejs/plugin-vue, AOS, Bootstrap 5 CSS (layout only), FontAwesome.

> **Important:** The project will NOT compile correctly until Task 17 (vite config switch). Create all `.vue` files first, then switch the build config, then delete the old `.jsx` files.

---

## File Map

| Action | Path |
|---|---|
| Create | `src/main.js` |
| Create | `src/App.vue` |
| Create | `src/pages/Home.vue` |
| Create | `src/pages/AboutMe.vue` |
| Create | `src/pages/Projects.vue` |
| Create | `src/pages/PrivacyPolicy.vue` |
| Create | `src/pages/projects/Pokedex.vue` |
| Create | `src/pages/projects/PortalVR.vue` |
| Create | `src/components/Navbar/Navbar.vue` |
| Create | `src/components/Footer/Footer.vue` |
| Create | `src/components/ContactModal/ContactModal.vue` |
| Create | `src/components/CVModal/CVModal.vue` |
| Create | `src/components/ProjectCard/Card.vue` |
| Create | `src/components/ProgressBar/ProgressBar.vue` |
| Rename | `src/components/Navbar/menuItems.jsx` → `menuItems.js` |
| Modify | `vite.config.mjs` |
| Modify | `index.html` |
| Modify | `package.json` |
| Delete | `src/index.jsx` |
| Delete | `src/pages/loading.jsx` |
| Delete | `src/components/Loader/loader.jsx` |
| Delete | `src/components/Loader/template.jsx` |
| Delete | all remaining `src/**/*.jsx` files |

---

### Task 1: Add Vue dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Add Vue packages to package.json**

Replace the `dependencies` block in `package.json` with:

```json
{
  "name": "personal_website",
  "homepage": "https://alvarodev-lc.github.io/personal-website/",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "aos": "^2.3.4",
    "bootstrap": "^5.3.3",
    "gh-pages": "^6.1.1",
    "primevue": "^4.3.0",
    "@primevue/themes": "^4.3.0",
    "vue": "^3.5.0",
    "vue-router": "^4.5.0",
    "vite-plugin-svgr": "^4.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.0",
    "vite": "^5.2.11"
  },
  "scripts": {
    "dev": "vite",
    "deploy": "gh-pages -d build",
    "start": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
```

- [ ] **Step 2: Install dependencies**

```bash
pnpm install
```

Expected: packages installed with no peer dependency errors.

---

### Task 2: Create entry point and App shell

**Files:**
- Create: `src/main.js`
- Create: `src/App.vue`

- [ ] **Step 1: Create `src/App.vue`**

```vue
<template>
  <RouterView />
</template>
```

- [ ] **Step 2: Create `src/main.js`**

```js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Aos from 'aos'

import App from './App.vue'
import Home from './pages/Home.vue'
import AboutMe from './pages/AboutMe.vue'
import Projects from './pages/Projects.vue'
import PrivacyPolicy from './pages/PrivacyPolicy.vue'
import Pokedex from './pages/projects/Pokedex.vue'
import PortalVR from './pages/projects/PortalVR.vue'

import './App.min.css'
import './static/css/fontawesome/fontawesome.min.css'
import './static/css/bootstrap/bootstrap.min.css'
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
```

---

### Task 3: Migrate ProgressBar

**Files:**
- Create: `src/components/ProgressBar/ProgressBar.vue`

The dynamic `@keyframes` trick from React (inline `<style>`) is replicated in Vue using `<component is="style">`.

- [ ] **Step 1: Create `src/components/ProgressBar/ProgressBar.vue`**

```vue
<script setup>
import './progressbar.min.css'

const props = defineProps({
  progress: { type: String, required: true },
  background: { type: String, required: true },
  delay: { type: String, required: true },
})

const fillClass = `progressbar-fill-${props.progress}`
const keyframeName = `fill-${props.progress}`
const css = `
.${fillClass} {
  width: ${props.progress}%;
  height: 100%;
  background: ${props.background};
  border-radius: 4px;
  animation: ${keyframeName} ${1 + parseInt(props.delay)}s forwards;
}
@keyframes ${keyframeName} {
  from { width: 0%; }
  to   { width: ${props.progress}%; }
}
`
</script>

<template>
  <div class="progressbar">
    <div :class="fillClass">
      <span class="progress-text">{{ progress }}%</span>
    </div>
    <component is="style">{{ css }}</component>
  </div>
</template>
```

---

### Task 4: Migrate Footer

**Files:**
- Create: `src/components/Footer/Footer.vue`

- [ ] **Step 1: Create `src/components/Footer/Footer.vue`**

```vue
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
```

---

### Task 5: Migrate ProjectCard

**Files:**
- Create: `src/components/ProjectCard/Card.vue`

- [ ] **Step 1: Create `src/components/ProjectCard/Card.vue`**

```vue
<script setup>
import './card.css'

const props = defineProps({
  index: { type: Number, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  redirectUrl: { type: String, required: true },
  negative: { type: Boolean, default: false },
})

const BOXES_PER_ROW = 2
const row = Math.floor(props.index / BOXES_PER_ROW)
const col = props.index % BOXES_PER_ROW
const delay = `${(row + col) * 0.08}s`
</script>

<template>
  <div class="box" :style="{ animationDelay: delay }">
    <RouterLink :to="redirectUrl" style="display: block; height: 100%; text-decoration: none;">
      <div :class="`proj-card ${image}`">
        <div class="proj-card-content">
          <p :class="negative ? 'proj-card-titleneg' : 'proj-card-title'">{{ title }}</p>
          <p :class="negative ? 'proj-card-bodyneg' : 'proj-card-body'">{{ desc }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
```

---

### Task 6: Migrate CVModal

**Files:**
- Create: `src/components/CVModal/CVModal.vue`

- [ ] **Step 1: Create `src/components/CVModal/CVModal.vue`**

```vue
<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
</script>

<template>
  <Button label="Check out my CV!" @click="visible = true" />

  <Dialog v-model:visible="visible" modal header="Curriculum Vitae" :style="{ width: '70rem' }">
    <div class="row pb-3">
      <iframe
        title="CV"
        src="https://drive.google.com/file/d/1BB3uKem7OzP1KHZqLTCOm8gh8OQkpVps/preview"
        width="640"
        height="600"
        allow="autoplay"
      />
    </div>
    <template #footer>
      <Button label="Close" @click="visible = false" />
    </template>
  </Dialog>
</template>

<script setup>
const visible = ref(false)
</script>
```

Wait — `<script setup>` can only appear once per SFC. Correct version:

```vue
<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

const visible = ref(false)
</script>

<template>
  <Button label="Check out my CV!" @click="visible = true" />

  <Dialog v-model:visible="visible" modal header="Curriculum Vitae" :style="{ width: '70rem' }">
    <div class="row pb-3">
      <iframe
        title="CV"
        src="https://drive.google.com/file/d/1BB3uKem7OzP1KHZqLTCOm8gh8OQkpVps/preview"
        width="640"
        height="600"
        allow="autoplay"
      />
    </div>
    <template #footer>
      <Button label="Close" @click="visible = false" />
    </template>
  </Dialog>
</template>
```

---

### Task 7: Migrate ContactModal

**Files:**
- Create: `src/components/ContactModal/ContactModal.vue`

- [ ] **Step 1: Create `src/components/ContactModal/ContactModal.vue`**

```vue
<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import CVModal from '../CVModal/CVModal.vue'
import './contact_modal.min.css'

import mail_icon from '../../static/images/icons/mail.svg'
import linkedin_icon from '../../static/images/icons/linkedin.png'
import user_icon from '../../static/images/icons/user.png'
import github_icon from '../../static/images/icons/github.png'
import clipboard_icon from '../../static/images/icons/clipboard.png'
import mobile_icon from '../../static/images/icons/mobile.png'
import stackoverflow_icon from '../../static/images/icons/stackoverflow.png'

const EMAIL = 'alvaro.lopez19997@gmail.com'
const visible = ref(false)
const toastrVisible = ref(false)

function copyToClipboard() {
  navigator.clipboard.writeText(EMAIL)
  toastrVisible.value = true
  setTimeout(() => { toastrVisible.value = false }, 3000)
}
</script>

<template>
  <div class="pb-3" id="contact_modal">
    <Button id="contact-button" label="Contact" @click="visible = true" />
  </div>

  <Dialog v-model:visible="visible" modal header="Contact data" :style="{ width: '50rem' }">
    <div class="row pb-3 offset-md-2">
      <div class="col-12 left">
        <img :src="user_icon" alt="User Icon" width="30" height="24" class="pe-2 pb-2px" />
        <span class="modal-text">Álvaro López Cruz</span>
      </div>
    </div>
    <div class="row pb-3 offset-md-2">
      <div class="col-12 left">
        <img :src="mail_icon" alt="Mail Icon" width="30" height="25" class="pe-2" />
        <span class="modal-text">{{ EMAIL }}</span>
        <div class="display-inline ps-2">
          <button type="button" class="smallbutton" @click="copyToClipboard">
            <img :src="clipboard_icon" alt="Clipboard Icon" width="20" height="20" />
          </button>
        </div>
      </div>
    </div>
    <div class="row pb-3 offset-md-2">
      <div class="col-12 left">
        <img :src="mobile_icon" alt="Mobile Icon" width="30" height="20" class="pe-2" />
        <span class="modal-text">+34 603 623 143</span>
      </div>
    </div>
    <div class="row offset-md-2">
      <div class="col-4 left">
        <img :src="linkedin_icon" alt="LinkedIn Icon" width="30" height="20" class="pe-2" />
        <a class="link" href="https://www.linkedin.com/in/alvaro-lopez-b354321b8" target="_blank" rel="noreferrer">Alvaro Lopez</a>
      </div>
      <div class="col-4 left">
        <img :src="github_icon" alt="Github Icon" width="30" height="20" class="pe-2" />
        <a class="link" href="https://github.com/alvarodev-lc" target="_blank" rel="noreferrer">alvarodev-lc</a>
      </div>
      <div class="col-4 left">
        <img :src="stackoverflow_icon" alt="Stackoverflow Icon" width="30" height="20" class="pe-2" />
        <a class="link" href="https://stackoverflow.com/users/16878581/alvaro-lopez" target="_blank" rel="noreferrer">alvaro-lopez</a>
      </div>
    </div>
    <div id="clipboard_toastr" :class="{ show: toastrVisible }">Successfully copied email to clipboard!</div>
    <template #footer>
      <div class="d-flex justify-content-center">
        <CVModal />
      </div>
    </template>
  </Dialog>
</template>
```

---

### Task 8: Migrate Navbar

**Files:**
- Rename: `src/components/Navbar/menuItems.jsx` → `src/components/Navbar/menuItems.js` (content unchanged)
- Create: `src/components/Navbar/Navbar.vue`

The React class component converts to `<script setup>` with `ref`. The dynamic margin CSS uses `<component is="style">`. The React icon `fa-react` becomes `fa-vuejs`.

- [ ] **Step 1: Rename menuItems file**

```bash
mv /path/to/src/components/Navbar/menuItems.jsx src/components/Navbar/menuItems.js
```

(No content change needed — the file has no JSX.)

- [ ] **Step 2: Create `src/components/Navbar/Navbar.vue`**

```vue
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
```

---

### Task 9: Migrate Home page

**Files:**
- Create: `src/pages/Home.vue`

Note: The "React" skill bar is updated to "Vue" since the site now runs on Vue.

- [ ] **Step 1: Create `src/pages/Home.vue`**

```vue
<script setup>
import Navbar from '../components/Navbar/Navbar.vue'
import ProgressBar from '../components/ProgressBar/ProgressBar.vue'
import Footer from '../components/Footer/Footer.vue'

import neverland_poster from '../static/images/thumbnails/neverland_poster.png'
import pyicon from '../static/images/icons/python.png'
import jsicon from '../static/images/icons/js.png'
import javaicon from '../static/images/icons/java.png'
import htmlicon from '../static/images/icons/html.png'
import cssicon from '../static/images/icons/css.png'
import othersicon from '../static/images/icons/others.png'
import dockericon from '../static/images/icons/docker.png'
import giticon from '../static/images/icons/git.png'
import sqlicon from '../static/images/icons/sql.png'
import djangoicon from '../static/images/icons/django.png'
import linuxicon from '../static/images/icons/linux.png'
import vueicon from '../static/images/icons/vue.png'

function resetVideo() {
  document.getElementById('neverland-video').load()
}

function initVideo() {
  document.getElementById('neverland-video').volume = 0.2
}
</script>

<template>
  <div id="home">
    <Navbar />
    <div>
      <div class="container-fluid" data-aos="fade-down" data-aos-duration="1500">
        <div class="row">
          <div class="col offset-md-2">
            <span class="big-text">Hi! Im Álvaro, a software developer.</span>
          </div>
        </div>
        <div class="row">
          <div class="col offset-md-2 pt-md-3 pb-100 max-w-70perc">
            <span class="normal-text">
              I solve problems using my skills and a data driven mentallity. My passion is to create a direct impact on people with my code, and
              see how it makes their life easier. Automation, features, beautiful and intuitive UI's... everything is possible with the correct mindset
              and a lot of strategic thinking!
            </span>
          </div>
        </div>
      </div>

      <div class="container-fluid pb-5">
        <div class="row justify-content-around">
          <!-- Languages card -->
          <div class="col col-lg-4 card min-width-300" data-aos="fade-right" data-aos-duration="1500">
            <div class="card-header">Languages</div>
            <div class="card-body">
              <div class="mb-3">
                <img :src="pyicon" alt="Python Icon" width="25" height="25" />
                <span class="card-title">Python</span>
                <ProgressBar progress="80" delay="0" background="linear-gradient(135deg, rgba(219,236,45,1) 10%, rgba(27,138,171,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="htmlicon" alt="Html Icon" width="25" height="25" />
                <span class="card-title">HTML</span>
                <ProgressBar progress="78" delay="1" background="linear-gradient(135deg, rgba(255,162,0,1) 24%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="jsicon" alt="Js Icon" width="25" height="25" />
                <span class="card-title">JavaScript</span>
                <ProgressBar progress="74" delay="2" background="linear-gradient(135deg, rgba(249,255,0,1) 10%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="cssicon" alt="Css Icon" width="25" height="25" />
                <span class="card-title">CSS</span>
                <ProgressBar progress="65" delay="3" background="linear-gradient(135deg, rgba(0,206,255,1) 14%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="javaicon" alt="Java Icon" width="25" height="25" />
                <span class="card-title">Java</span>
                <ProgressBar progress="62" delay="4" background="linear-gradient(135deg, rgba(255,162,0,1) 30%, rgba(255,64,0,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="othersicon" alt="C Icon" width="25" height="25" />
                <span class="card-title">C, C++, C#</span>
                <ProgressBar progress="53" delay="5" background="linear-gradient(135deg, rgba(167,115,9,1) 30%, rgba(199,185,157,1) 66%)" />
              </div>
            </div>
          </div>

          <!-- Technology knowledge card -->
          <div class="col col-lg-4 card min-width-300" data-aos="fade-left" data-aos-duration="1500" id="technology-card">
            <div class="card-header">Technology knowledge</div>
            <div class="card-body">
              <div class="mb-3">
                <img :src="dockericon" alt="Docker Icon" width="25" height="25" />
                <span class="card-title">Docker</span>
                <ProgressBar progress="90" delay="0" background="linear-gradient(135deg, rgba(0,206,255,1) 14%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="giticon" alt="Git Icon" width="25" height="25" />
                <span class="card-title">Git</span>
                <ProgressBar progress="87" delay="1" background="linear-gradient(135deg, rgba(255,162,0,1) 30%, rgba(255,64,0,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="sqlicon" alt="SQL Icon" width="25" height="25" />
                <span class="card-title">PostgreSQL, MySQL</span>
                <ProgressBar progress="83" delay="2" background="linear-gradient(135deg, rgba(4,37,180,1) 33%, rgba(195,251,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="djangoicon" alt="Django Icon" width="25" height="25" />
                <span class="card-title">Django</span>
                <ProgressBar progress="79" delay="3" background="linear-gradient(135deg, rgba(43,169,119,1) 37%, rgba(224,255,222,1) 66%)" />
              </div>
              <div class="mb-3">
                <img :src="linuxicon" alt="Linux Icon" width="25" height="25" />
                <span class="card-title">Linux</span>
                <ProgressBar progress="75" delay="4" background="linear-gradient(135deg, rgba(255,146,2,1) 33%, rgba(255,255,255,1) 77%)" />
              </div>
              <div class="mb-3">
                <img :src="vueicon" alt="Vue Icon" width="30" height="25" />
                <span class="card-title">Vue</span>
                <ProgressBar progress="50" delay="5" background="linear-gradient(135deg, rgba(115,255,223,1) 33%, rgba(255,255,255,1) 74%)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="hobbies" class="container-fluid pt-5">
      <div class="row justify-content-around">
        <div class="col pt-5 min-w-350" data-aos="fade-right" data-aos-duration="1500">
          <div class="row offset-md-2">
            <span class="big-text">Hobbies</span>
          </div>
          <div class="row offset-md-2 pt-5">
            <span class="normal-text">
              I spend a lot of my free time investigating and discovering new techologies and trying them on on my own. It is both fun and educative to
              learn and apply this knowledge on fields I love such as gaming.<br /><br />
              Neverland is a small project i started on summer in 2019. Its a rogue like game where you defeat waves of enemies. I wanted to learn how to
              manage infinite object spawning, enemy interactions and projectile physics.<br /><br />
              Moreover, I designed every image and sprite from scratch, which was a hard process but really let me develop my creativity.
            </span>
          </div>
        </div>
        <div class="col pb-100 min-w-350" data-aos="fade-left" data-aos-duration="1500">
          <div class="row">
            <video id="neverland-video" class="w-85" controls="1" :poster="neverland_poster" width="740" height="580" @ended="resetVideo" @loadstart="initVideo">
              <source src="https://dl.dropboxusercontent.com/s/vck1o60ipg02n7a/Neverland_video.mp4?raw=1" />
            </video>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
```

---

### Task 10: Migrate AboutMe page

**Files:**
- Create: `src/pages/AboutMe.vue`

Note: The text "This website was developed using React" is updated to "Vue".

- [ ] **Step 1: Create `src/pages/AboutMe.vue`**

```vue
<script setup>
import { ROUTES } from '../routes'
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'

import upmicon from '../static/images/icons/upm.png'
import degreeicon from '../static/images/icons/degree.png'
import mastersicon from '../static/images/icons/masters.png'
import magnifying_glassicon from '../static/images/icons/magnifying_glass.png'
import vueicon from '../static/images/icons/vue.png'
import reacticon from '../static/images/icons/react.png'
import angularicon from '../static/images/icons/angular.png'
import workericon from '../static/images/icons/worker.png'
import usizyicon from '../static/images/icons/usizy.svg'
import mailicon from '../static/images/icons/mail.png'
</script>

<template>
  <div id="about">
    <Navbar />
    <div>
      <div class="container-fluid">
        <div class="row" data-aos="fade-down" data-aos-duration="1500">
          <div class="text-center">
            <span class="big-text">Education</span>
            <img :src="upmicon" alt="Upm Icon" width="325" height="150" />
          </div>
        </div>

        <div class="pb-100">
          <div class="row">
            <div class="col pt-5 min-w-350" data-aos="fade-right" data-aos-duration="1500">
              <div class="row offset-md-2 pb-3">
                <div>
                  <img :src="degreeicon" alt="Degree Icon" width="50" height="50" />
                  <a class="med-text ps-3" href="http://www.etsisi.upm.es/estudios/grados/61iw/ig" target="_blank" rel="noreferrer">Degree</a>
                </div>
              </div>
              <div class="row offset-md-2 pt-3">
                <span class="normal-text max-w-90perc">
                  I got started on my software developer career studing at Universidad Politécnica de Madrid, where I graduated as a software engineer after 4
                  years.<br /><br />
                  There, I had the oportunity to learn a lot of languages and techologies, although I think the most important thing I learned are good software
                  practices, agile methodologies and software architecture and infrastructure. I also had the chance to work with a lot of other developers,
                  which forced me to learn even more from them.<br /><br />
                  That made me be the developer I am today, and be able to write efficient, sustainable and writable code.
                </span>
              </div>
            </div>

            <div class="col pt-5 min-w-350" data-aos="fade-left" data-aos-duration="1500">
              <div class="row offset-md-1 pb-3">
                <div>
                  <img :src="mastersicon" alt="Masters Icon" width="50" height="50" />
                  <a class="med-text ps-3" href="http://msde.etsisi.upm.es/" target="_blank" rel="noreferrer">Master's</a>
                </div>
              </div>
              <div class="row offset-md-1 pt-3">
                <span class="normal-text max-w-90perc">
                  After finishing my degree, I knew I wanted to expand my knowledge. I didn't really have any specific subject i wanted to specialize on, so I
                  decided to apply for the Distributed and Embedded Systems Software Master's, where I got accepted. There i got to learn a lot of different branches
                  of the software development world, which was exactly what I was looking for.<br /><br />
                  From the most advanced blockchain or machine learning technologies, to low level electronic and real time software development, I made projects
                  following the whole life cycle, as if it was a real world scenario.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="container-fluid" data-aos="fade-down" data-aos-duration="1500">
          <div class="row">
            <div class="col offset-md-2">
              <div class="row">
                <div>
                  <img :src="magnifying_glassicon" alt="Magnifying Glass Icon" width="50" height="50" class="height-auto pb-15" />
                  <span class="big-text ps-3">Interests</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2 pt-md-3 pb-100 max-w-70perc">
              <span class="normal-text">
                I have always been a very curious person. That translates to my profesional life and hobbies. When i see a project, game or interesting
                system, I can't help but question myself how it was made and if I could make it myself.<br /><br />
                This exact same thing happens when a new techology, framework or language is developed. I love to take a look at the project, understand
                the basics and think of possible use cases where that particular thing could be applied. That leads to tons of fun and interesting project
                ideas to work on, and new opportunities to learn.
              </span>
            </div>
          </div>
        </div>

        <div class="col offset-md-2 pt-md-3 pb-100 max-w-70perc">
          <div id="js-frameworks" class="row pt-5 ps-130">
            <div class="col-4 js-framework-image" data-aos="fade-right" data-aos-duration="1500">
              <img :src="vueicon" alt="Vue Icon" class="pb-2" width="300" height="250" />
            </div>
            <div class="col-4 js-framework-image" data-aos="fade-down" data-aos-duration="1500">
              <img :src="reacticon" alt="React Icon" class="pb-2" width="300" height="250" />
            </div>
            <div class="col-4 js-framework-image" data-aos="fade-left" data-aos-duration="1500">
              <img :src="angularicon" alt="Angular Icon" class="pb-2" width="300" height="250" />
            </div>
          </div>
        </div>

        <div class="row" data-aos="fade-down" data-aos-duration="3000">
          <div class="col offset-md-2 pt-md-3 pb-50 max-w-70perc">
            <span class="normal-text">
              And that's how this project was born! This website was developed using Vue. I also had the opportunity to check out React and Angular, which are
              very similar, but each and every one of them have their unique use cases which makes it very important to chose the correct one.<br /><br />
              A good developer should invest time in thinking, structuring and choosing the right tools before writing any line of code before starting a project.
              That makes the difference between a sustainable and robust product and a failure that will fall eventually.<br /><br />
              Starting a project is easy, ending it is not.<br /><br />
            </span>
          </div>
        </div>

        <div class="row pb-200" data-aos="zoom-in-right" data-aos-duration="1500">
          <div class="col offset-md-2 pt-md-3 max-w-70perc">
            <span class="normal-text">
              Want to know more about me? Check out my projects <RouterLink :to="ROUTES.PROJECTS">here!</RouterLink>
            </span>
          </div>
        </div>
      </div>

      <div class="row" data-aos="fade-down" data-aos-duration="1500">
        <div class="text-center">
          <img :src="workericon" alt="Worker Icon" class="pb-3" width="100" height="120" />
          <div class="display-inline ps-4">
            <span class="big-text">Experience</span>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-100">
      <div class="row justify-content-around">
        <div class="col pt-5 min-w-350" data-aos="fade-right" data-aos-duration="1500">
          <div class="row offset-md-2 pb-3">
            <div>
              <img :src="usizyicon" alt="Usizy Icon" width="50" height="60" />
              <a class="med-text ps-3" href="https://usizy.com/" target="_blank" rel="noreferrer">Usizy</a>
            </div>
          </div>
          <div class="row offset-md-2 pt-3">
            <span class="normal-text max-w-90perc">
              Usizy is a startup that offers the most advanced and accurate size recommendation technology in the market. They provide a full range
              of eCommerce solutions based on machine learning and under one single platform.<br /><br />
              This is where I currently work, and where I have learned the most in my life. From machine learning and complex dashboards for several
              eCommerces, to analysis and actions to reduce returns and get the best CVR possible.<br /><br />
              We work with the latest technology to automatically give service to every product our clients uploads to their eCommerce and to get
              all data available and store it to make our system stronger and get the best service and KPI's possible. Usizy boosts businesses
              regardless of their scope, from apparel to bycicles, footwear and bras, we have a solution for almost everything.<br /><br />
              With only 2 lines of code, we can integrate any client from around the world, and give service to most if not all of their brands out of the box.
            </span>
          </div>
        </div>

        <div class="col pt-5 min-w-350" data-aos="fade-left" data-aos-duration="1500">
          <div class="row offset-md-1 pb-3">
            <div>
              <img :src="mailicon" alt="Nexus Icon" class="pb-2" width="70" height="60" />
              <a class="med-text ps-3" href="https://www.nexus-it.es/" target="_blank" rel="noreferrer">Nexus IT</a>
            </div>
          </div>
          <div class="row offset-md-1 pt-3">
            <span class="normal-text max-w-90perc">
              I had my first internship at Nexus. They create solutions to help companies digitalize their services, mainly offering 2 products: OpenLis
              and Plyca.<br /><br />
              I worked on Plyca, which is a solution for digitalizing auctioning, managing records and, overall, speeding up processes. Plyca is a software
              written in Java which is very flexible for customers. I had the oportunity to work on it and handle customers simoultaneously, which was a
              very good experience for me, since I learned a lot.<br /><br />
              OpenLis is a product that supports clinical laboratories management, unifying the pre-analysis and post-analysis phases, while also making them
              more flexible and speeding the process.
            </span>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
```

---

### Task 11: Migrate Projects page

**Files:**
- Create: `src/pages/Projects.vue`

- [ ] **Step 1: Create `src/pages/Projects.vue`**

```vue
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
```

---

### Task 12: Migrate Pokedex page

**Files:**
- Create: `src/pages/projects/Pokedex.vue`

- [ ] **Step 1: Create `src/pages/projects/Pokedex.vue`**

```vue
<script setup>
import Navbar from '@components/Navbar/Navbar.vue'
import Footer from '@components/Footer/Footer.vue'

import pasicon from '@images/projects/pas_pokedex/pas.png'
import pas_login from '@images/projects/pas_pokedex/pas_login.png'
import pas_pokedexoverview from '@images/projects/pas_pokedex/pas_pokedex_overview.png'
import pas_pokemonoverview1 from '@images/projects/pas_pokedex/pokemon_overview_1.png'
import pas_pokemonoverview2 from '@images/projects/pas_pokedex/pokemon_overview_2.png'
import pas_teambuilderoverview from '@images/projects/pas_pokedex/pas_teambuilder_overview.png'
import pas_teambuilderteamcreationoverview from '@images/projects/pas_pokedex/pas_teambuilder_teamcreation_overview.png'
</script>

<template>
  <div id="projects">
    <Navbar />
    <div>
      <div class="container-fluid">
        <div class="row" data-aos="fade-down" data-aos-duration="1500">
          <div class="col offset-md-2">
            <img :src="pasicon" alt="Pas Pokedex Icon" class="pb-2" width="120" height="105" />
            <a class="big-text ps-3" href="https://github.com/alvarodev-lc/PAS-Pokedex" target="_blank" rel="noreferrer">
              Pas Pokedex
            </a>
          </div>
        </div>

        <div class="row pt-4" data-aos="fade-down" data-aos-duration="1500">
          <div class="col offset-md-2">
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
          <div class="col offset-md-2 pt-md-3 pb-100 max-w-70perc">
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
```

---

### Task 13: Migrate PortalVR page

**Files:**
- Create: `src/pages/projects/PortalVR.vue`

- [ ] **Step 1: Create `src/pages/projects/PortalVR.vue`**

```vue
<script setup>
import Navbar from '@components/Navbar/Navbar.vue'
import Footer from '@components/Footer/Footer.vue'

import vrportalsicon from '@images/projects/vr_portals/portals.png'
import vrportals_overview from '@images/projects/vr_portals/portals_overview.png'
import vrportals_gameplay_example_1 from '@images/projects/vr_portals/gameplay_example_1.png'
import vrportals_gameplay_example_2 from '@images/projects/vr_portals/gameplay_example_2.png'
import tfg_poster from '@images/thumbnails/tfg_poster.png'

function resetVideo() {
  document.getElementById('tfg-video').load()
}

function initVideo() {
  document.getElementById('tfg-video').volume = 0
}
</script>

<template>
  <div id="portal-vr">
    <Navbar />
    <div>
      <div class="container-fluid">
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col offset-md-2">
            <img :src="vrportalsicon" alt="VR Portals Icon" class="pb-2" width="120" height="105" />
            <a class="big-text ps-3" href="https://github.com/jesusmayor/VRPortalsUnity" target="_blank" rel="noreferrer">VR Portals</a>
          </div>
        </div>

        <div class="row">
          <div class="col offset-md-2 pt-md-3 pb-100 max-w-70perc">
            <div data-aos="fade-left" data-aos-duration="1500">
              <span class="normal-text">
                This was my final project before graduating as a software engineer. I wanted to explore how
                <a href="https://en.wikipedia.org/wiki/Non-Euclidean_geometry" target="_blank" rel="noreferrer">non euclidean spaces</a>
                could be used to take advantage of the space on virtual reality applications.<br /><br />
                One of the main problems of virtual reality, is the lack of space available by users. When immersed in the virtual world, most people forget
                about the real enviroment and that can cause crashes that end up damaging the user or the technology they are using. The idea is to simulate
                non euclidean enviroments using portals in virtual reality that are connected to each other.
              </span>
            </div>

            <div class="container">
              <div class="row pt-5">
                <div class="col flex justify-content-center" data-aos="fade-right" data-aos-duration="1500">
                  <img :src="vrportals_overview" alt="VRPortals Overview" class="pb-2" width="410" height="380" />
                </div>
              </div>
            </div>

            <div class="pt-100" data-aos="fade-down" data-aos-duration="1500">
              <span class="normal-text">
                Users would see on portal 1 a reflection of portal's 2 view. This way, even if portals are on ceillings on walls, gravity is changed so that
                the transition between portals is smooth. Each eye of the VR Headset is transported separately, this way users can peek through portals. With
                these tools, I made an algorythm that procedurally generates labyrinths depending on the user's available space.<br /><br />
                The main condition is that the user can't see a portal through another portal. This is to avoid performance issues, since the enviroment is
                dynamically generated depending on how the player moves, removing sections the user can't see and rendering sections that the user is now
                able to see.
              </span>
            </div>

            <div id="vr-portals-gameplay" class="row pt-5 ps-90 justify-content-center">
              <div class="col" data-aos="fade-right" data-aos-duration="1500">
                <img :src="vrportals_gameplay_example_1" alt="VRPortals Gameplay1" class="pb-2 vr-portals-image" width="500" height="350" />
              </div>
              <div class="col" data-aos="fade-left" data-aos-duration="1500">
                <img :src="vrportals_gameplay_example_2" alt="VRPortals Gameplay2" class="pb-2 vr-portals-image" width="500" height="350" />
              </div>
            </div>

            <div class="pt-4" data-aos="fade-left" data-aos-duration="1500">
              <span class="normal-text">
                Here you can see a demo where the player experiments impossible 3D enviroments while exploring a procedurally generated maze on a 6x6 m room. If
                you have virtual reality equipment and want to check it out for yourself, contact me!
              </span>
            </div>

            <div class="row justify-content-center pt-5" data-aos="fade-up" data-aos-duration="1500">
              <video id="tfg-video" class="w-85" controls :poster="tfg_poster" width="740" height="580" @ended="resetVideo" @loadstart="initVideo">
                <source src="https://dl.dropboxusercontent.com/s/wyczrxzyww7fom1/TFG_Video.mp4?raw=1" />
              </video>
            </div>

            <div class="pt-100" data-aos="fade-up" data-aos-duration="1500">
              <span class="normal-text">
                Click <a href="https://www.linkedin.com/in/alvaro-lopez-b354321b8/overlay/1635464364542/single-media-viewer/" target="_blank" rel="noreferrer">here </a>
                to know more about the project. Open source project on <a href="https://github.com/jesusmayor/VRPortalsUnity" target="_blank" rel="noreferrer">Github</a>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
```

---

### Task 14: Migrate PrivacyPolicy page

**Files:**
- Create: `src/pages/PrivacyPolicy.vue`

This page is mostly static content — the only change is `className` → `class`.

- [ ] **Step 1: Create `src/pages/PrivacyPolicy.vue`**

```vue
<script setup>
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'
</script>

<template>
  <div id="privacy-policy">
    <Navbar />
    <div class="container">
      <h1 class="pb-1">Privacy Policy</h1>
      <p class="pb-4">Last updated: July 06, 2022</p>
      <p>This Privacy Policy describes My policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
      <p>I use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
      <h1 class="pb-1">Interpretation and Definitions</h1>
      <h2 class="pb-3">Interpretation</h2>
      <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
      <h2 class="pb-1 pt-2">Definitions</h2>
      <p>For the purposes of this Privacy Policy:</p>
      <ul>
        <li><p><strong>Account</strong> means a unique account created for You to access my Service or parts of my Service.</p></li>
        <li><p><strong>Company</strong> (referred to as either "the Company", "I", "Me" or "My" in this Agreement) refers to alvarodev-lc.</p></li>
        <li><p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p></li>
        <li><p><strong>Country</strong> refers to: Spain</p></li>
        <li><p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p></li>
        <li><p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p></li>
        <li><p><strong>Service</strong> refers to the Website.</p></li>
        <li><p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p></li>
        <li><p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p></li>
        <li><p><strong>Website</strong> refers to alvarodev-lc, accessible from <a href="http://alvarodev-lc.com" target="_blank" rel="noreferrer">http://alvarodev-lc.com</a></p></li>
        <li><p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p></li>
      </ul>
      <h1 class="pb-2 pt-3">Collecting and Using Your Personal Data</h1>
      <h2 class="pb-2">Types of Data Collected</h2>
      <h3 class="pb-3">Personal Data</h3>
      <p>While using My Service, I may ask You to provide Me with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
      <ul>
        <li><p>Email address</p></li>
        <li><p>Usage Data</p></li>
      </ul>
      <h3 class="pb-2 pt-2">Usage Data</h3>
      <p>Usage Data is collected automatically when using the Service.</p>
      <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of my Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
      <p>When You access the Service by or through a mobile device, I may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
      <p>I may also collect information that Your browser sends whenever You visit my Service or when You access the Service by or through a mobile device.</p>
      <h3 class="pb-1 pt-3">Tracking Technologies and Cookies</h3>
      <p>I use Cookies and similar tracking technologies to track the activity on My Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze My Service. The technologies I use may include:</p>
      <ul>
        <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of my Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, my Service may use Cookies.</li>
        <li><strong>Flash Cookies.</strong> Certain features of my Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on my Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read "Where can I change the settings for disabling, or deleting local shared objects?" available <a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_" rel="noreferrer" target="_blank">here</a>.</li>
        <li><strong>Web Beacons.</strong> Certain sections of my Service and my emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
      </ul>
      <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
      <p>I use both Session and Persistent Cookies for the purposes set out below:</p>
      <ul>
        <li>
          <p><strong>Necessary / Essential Cookies</strong></p>
          <p>Type: Session Cookies</p>
          <p>Administered by: Me</p>
          <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and I only use these Cookies to provide You with those services.</p>
        </li>
        <li>
          <p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
          <p>Type: Persistent Cookies</p>
          <p>Administered by: Me</p>
          <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
        </li>
        <li>
          <p><strong>Functionality Cookies</strong></p>
          <p>Type: Persistent Cookies</p>
          <p>Administered by: Me</p>
          <p>Purpose: These Cookies allow me to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
        </li>
      </ul>
      <p>For more information about the cookies I use and your choices regarding cookies, please visit my Cookies Policy or the Cookies section of my Privacy Policy.</p>
      <h2 class="pb-1 pt-3">Use of Your Personal Data</h2>
      <p>The Company may use Personal Data for the following purposes:</p>
      <ul>
        <li><p><strong>To provide and maintain my Service</strong>, including to monitor the usage of my Service.</p></li>
        <li><p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p></li>
        <li><p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Me through the Service.</p></li>
        <li><p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p></li>
        <li><p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which I offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p></li>
        <li><p><strong>To manage Your requests:</strong> To attend and manage Your requests to Me.</p></li>
        <li><p><strong>For business transfers:</strong> I may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of My assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Me about my Service users is among the assets transferred.</p></li>
        <li><p><strong>For other purposes</strong>: I may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of my promotional campaigns and to evaluate and improve my Service, products, services, marketing and your experience.</p></li>
      </ul>
      <p>I may share Your personal information in the following situations:</p>
      <ul>
        <li><strong>With Service Providers:</strong> I may share Your personal information with Service Providers to monitor and analyze the use of my Service, to contact You.</li>
        <li><strong>For business transfers:</strong> I may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of My business to another company.</li>
        <li><strong>With Affiliates:</strong> I may share Your information with My affiliates, in which case I will require those affiliates to honor this Privacy Policy. Affiliates include My parent company and any other subsidiaries, joint venture partners or other companies that I control or that are under common control with Me.</li>
        <li><strong>With business partners:</strong> I may share Your information with My business partners to offer You certain products, services or promotions.</li>
        <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
        <li><strong>With Your consent</strong>: I may disclose Your personal information for any other purpose with Your consent.</li>
      </ul>
      <h2 class="pb-2 pt-3">Retention of Your Personal Data</h2>
      <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. I will retain and use Your Personal Data to the extent necessary to comply with my legal obligations (for example, if I are required to retain your data to comply with applicable laws), resolve disputes, and enforce my legal agreements and policies.</p>
      <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of My Service, or I are legally obligated to retain this data for longer time periods.</p>
      <h2 class="pb-2 pt-3">Transfer of Your Personal Data</h2>
      <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
      <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
      <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
      <h2 class="pb-1 pt-3">Disclosure of Your Personal Data</h2>
      <h3 class="pb-1">Business Transactions</h3>
      <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. I will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
      <h3 class="pb-1 pt-2">Law enforcement</h3>
      <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
      <h3 class="pb-1 pt-2">Other legal requirements</h3>
      <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
      <ul>
        <li>Comply with a legal obligation</li>
        <li>Protect and defend the rights or property of the Company</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>Protect the personal safety of Users of the Service or the public</li>
        <li>Protect against legal liability</li>
      </ul>
      <h2 class="pb-1 pt-2">Security of Your Personal Data</h2>
      <p>The security of Your Personal Data is important to Me, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While I strive to use commercially acceptable means to protect Your Personal Data, I cannot guarantee its absolute security.</p>
      <h2 class="pb-1 pt-3">Children's Privacy</h2>
      <p>My Service does not address anyone under the age of 13. I do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Me with Personal Data, please contact Me. If I become aware that I have collected Personal Data from anyone under the age of 13 without verification of parental consent, I take steps to remove that information from My servers.</p>
      <p>If I need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, I may require Your parent's consent before I collect and use that information.</p>
      <h2 class="pb-1 pt-3">Links to Other Websites</h2>
      <p>My Service may contain links to other websites that are not operated by Me. If You click on a third party link, You will be directed to that third party's site. I strongly advise You to review the Privacy Policy of every site You visit.</p>
      <p>I have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
      <h2 class="pb-1 pt-3">Changes to this Privacy Policy</h2>
      <p>I may update My Privacy Policy from time to time. I will notify You of any changes by posting the new Privacy Policy on this page.</p>
      <p>I will let You know via email and/or a prominent notice on My Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
      <h2 class="pb-1 pt-3">Contact Me</h2>
      <p>If you have any questions about this Privacy Policy, You can contact me:</p>
      <ul>
        <li><p>By email: alvaro.lopez19997@gmail.com</p></li>
        <li><p>By phone number: 603623143</p></li>
      </ul>
    </div>
    <Footer />
  </div>
</template>
```

---

### Task 15: Switch Vite config to Vue plugin

**Files:**
- Modify: `vite.config.mjs`

This is the **switchover point**. After this task all `.jsx` files will fail to parse.

- [ ] **Step 1: Replace `vite.config.mjs` content**

```js
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'build'
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@images', replacement: fileURLToPath(new URL('./src/static/images', import.meta.url)) },
    ]
  }
})
```

- [ ] **Step 2: Update `index.html` entry point**

Change line 19 from:
```html
<script type="module" src="/src/index.jsx"></script>
```
to:
```html
<script type="module" src="/src/main.js"></script>
```

---

### Task 16: Delete React files and run the app

**Files:**
- Delete: `src/index.jsx`
- Delete: `src/pages/loading.jsx`
- Delete: `src/components/Loader/loader.jsx`
- Delete: `src/components/Loader/template.jsx`
- Delete: `src/pages/home.jsx`
- Delete: `src/pages/about_me.jsx`
- Delete: `src/pages/projects.jsx`
- Delete: `src/pages/privacy_policy.jsx`
- Delete: `src/pages/projects/pokedex.jsx`
- Delete: `src/pages/projects/portal-vr.jsx`
- Delete: `src/components/Navbar/navbar.jsx`
- Delete: `src/components/Footer/footer.jsx`
- Delete: `src/components/ContactModal/contact_modal.jsx`
- Delete: `src/components/CVModal/cvmodal.jsx`
- Delete: `src/components/ProjectCard/card.jsx`
- Delete: `src/components/ProgressBar/progressbar.jsx`

- [ ] **Step 1: Delete all old React component files**

```bash
rm src/index.jsx \
   src/pages/loading.jsx \
   src/pages/home.jsx \
   src/pages/about_me.jsx \
   src/pages/projects.jsx \
   src/pages/privacy_policy.jsx \
   src/pages/projects/pokedex.jsx \
   src/pages/projects/portal-vr.jsx \
   src/components/Navbar/navbar.jsx \
   src/components/Footer/footer.jsx \
   src/components/ContactModal/contact_modal.jsx \
   src/components/CVModal/cvmodal.jsx \
   src/components/ProjectCard/card.jsx \
   src/components/ProgressBar/progressbar.jsx \
   src/components/Loader/loader.jsx \
   src/components/Loader/template.jsx
```

- [ ] **Step 2: Start the dev server and verify**

```bash
pnpm dev
```

Expected: Vite starts without errors. Open the browser at `http://localhost:5173`. Verify:
- Root `/` redirects to `/#/home`
- Navbar renders with Vue icon (`fa-vuejs`)
- Progress bars animate correctly on Home page
- Contact modal opens (PrimeVue Dialog)
- CV modal opens inside Contact modal
- Projects page shows 2 cards, both links work
- About, Pokedex, PortalVR, Privacy Policy pages render correctly
- Footer year is current year

- [ ] **Step 3: Commit everything**

```bash
git add -A
git commit -m "$(cat <<'EOF'
Migrate from React 18 to Vue 3

- Replace React + react-router-dom + react-bootstrap with Vue 3 + vue-router + PrimeVue
- Convert all .jsx files to .vue SFCs using Composition API (<script setup>)
- Remove Loading page; root path now redirects directly to /home via router
- Replace fa-react icon with fa-vuejs in Navbar
- Update About page text to reflect Vue instead of React
- Update Home skill card from React to Vue

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

---

## Self-Review

**Spec coverage:**
- ✅ Vue 3 Composition API with `<script setup>` — all components
- ✅ vue-router 4 with hash history — `main.js` Task 2
- ✅ PrimeVue Dialog + Button — ContactModal (Task 7) and CVModal (Task 6)
- ✅ Bootstrap CSS kept for layout — imported in `main.js`
- ✅ AOS unchanged — `Aos.init()` in `main.js`
- ✅ Loading page removed — no Loading.vue created, root redirects to `/home`
- ✅ Dynamic keyframes in ProgressBar — `<component is="style">` in Task 3
- ✅ Navbar mobile CSS dynamic — `computed` + `<component is="style">` in Task 8
- ✅ Footer dynamic year — `const year = new Date().getFullYear()` in Task 4
- ✅ fa-react → fa-vuejs — Task 8
- ✅ "developed using React" → "Vue" — Task 10

**Placeholder scan:** No TBDs, all steps have complete code.

**Type consistency:** Component names used in imports match the filenames created (`Navbar.vue`, `Footer.vue`, `Card.vue`, `ProgressBar.vue`, `ContactModal.vue`, `CVModal.vue`). Props passed in pages match `defineProps` declarations in components.
