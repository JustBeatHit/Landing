<script setup lang="ts">
import ButtonInscription from './ButtonInscription.vue';
</script>
<template>
  <nav>
    <ul>
      <li><router-link to="/"><img src="../assets/img/LogoMini.svg" alt="Vue logo" /></router-link></li>
    </ul>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Services</router-link></li>
      <li><router-link to="/about">Pricing</router-link></li>
      <li><router-link to="/contact">À propos</router-link></li>
      <li>
        <ButtonInscription text="S'inscrire"/>
      </li>
    </ul>
  </nav>
</template>