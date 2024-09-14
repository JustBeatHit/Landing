<script setup lang="ts">
import ButtonInscription from './ButtonInscription.vue';
</script>
<template>
  <nav>
    <ul>
      <li><img src="../../public/assets/img/LogoMini.svg" alt="Vue logo" /></li>
    </ul>
    <ul>
      <li class="anchor"><a href="/#section-games">Nos jeux</a></li>
      <li class="anchor"><a href="/#section-pricing">Pricing</a></li>
      <li>
        <ButtonInscription text="S'inscrire" class="btn-primary"/>
      </li>
    </ul>
  </nav>
</template>