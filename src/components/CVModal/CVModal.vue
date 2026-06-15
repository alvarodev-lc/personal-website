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

<style>
.p-dialog-close-button {
  color: white !important;
}

.p-dialog-close-button svg {
  color: white !important;
  fill: white !important;
}
</style>
