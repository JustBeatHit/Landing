<script setup lang="ts">
import Navbar from './NavBar.vue';
import ButtonInscription from './ButtonInscription.vue';
</script>
<template>
  <header>
    <Navbar />
    <div class="header-jbh">
      <img src="../../public/assets/img/Logo.svg" alt="Vue logo" />
      <ButtonInscription text="S'inscrire" class="btn-primary"/>
    </div>
  </header>
</template>