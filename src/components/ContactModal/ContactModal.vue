<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import CVModal from '../CVModal/CVModal.vue'
import './contact_modal.min.css'

import mail_icon from '../../static/images/icons/mail.svg'
import linkedin_icon from '../../static/images/icons/linkedin.webp'
import user_icon from '../../static/images/icons/user.webp'
import github_icon from '../../static/images/icons/github.webp'
import clipboard_icon from '../../static/images/icons/clipboard.webp'
import mobile_icon from '../../static/images/icons/mobile.webp'
import stackoverflow_icon from '../../static/images/icons/stackoverflow.webp'

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

  <Dialog
    v-model:visible="visible"
    modal
    header="Contact data"
    :style="{ width: '50rem' }"
    :pt="{
      content: { style: 'padding-top: 0;' },
      footer: { style: 'justify-content: center; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem;' },
    }"
  >
    <hr style="margin: 0 0 1rem; opacity: 0.2;" />
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
      <CVModal />
    </template>
  </Dialog>
</template>
