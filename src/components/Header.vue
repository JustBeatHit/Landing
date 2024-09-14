<script setup lang="ts">
import Navbar from './NavBar.vue';
import ButtonInscription from './ButtonInscription.vue';
</script>
<template>
  <header>
    <Navbar />
    <!-- <img src="../assets/img/BGGradient.png" class="bg-image" /> -->
     <div class="animated-background"></div>
     <div class="animated-background inverse"></div>
    <div class="header-jbh">
      <img src="../../public/assets/img/Logo.svg" alt="Vue logo" />
      <ButtonInscription text="S'inscrire" class="btn-primary"/>
    </div>
  </header>
</template>