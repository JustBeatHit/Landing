<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <a href="https://justbeathit.vercel.app/" target="_blank" class="btn">
      <font-awesome-icon :icon="faArrowRight" />
          {{ text }}
        </a>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'white'
    }
  }
}
</script>