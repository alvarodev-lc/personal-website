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
