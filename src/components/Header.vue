<script setup lang="ts">
import Navbar from './NavBar.vue';
import ButtonInscription from './ButtonInscription.vue';
</script>
<template>
  <header>
    <Navbar />
    <div class="header-img-with-button">
      <img src="../assets/img/Logo.svg" alt="Vue logo" />
      <ButtonInscription text="S'inscrire"/>
    </div>
  </header>
</template>