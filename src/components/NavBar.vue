<script setup lang="ts">
import ButtonInscription from './ButtonInscription.vue';
</script>
<template>
  <nav>
    <ul>
      <li><router-link to="/"><img src="../assets/img/LogoMini.svg" alt="Vue logo" /></router-link></li>
    </ul>
    <ul>
      <li><router-link to="/">Nos jeux</router-link></li>
      <li><router-link to="/about">Pricing</router-link></li>
      <li>
        <ButtonInscription text="S'inscrire" class="btn-primary"/>
      </li>
    </ul>
  </nav>
</template>