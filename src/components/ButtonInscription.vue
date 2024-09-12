<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <router-link to="/" class="button-inscription-header">
      <font-awesome-icon :icon="faArrowRight" />
          {{ text }}
        </router-link>
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