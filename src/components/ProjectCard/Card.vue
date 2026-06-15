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
