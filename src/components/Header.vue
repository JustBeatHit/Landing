<script setup lang="ts">
import Navbar from './NavBar.vue';
import ButtonInscription from './ButtonInscription.vue';
// import '../styles/_variables.scss';
</script>
<template>
  <header>
    <Navbar />
    <div class="header">
      <img src="../assets/img/Logo.svg" alt="Vue logo" />
      <ButtonInscription text="S'inscrire" class="btn-primary"/>
    </div>
  </header>
</template>


<style lang="scss">
@import '../styles/_variables.scss';
header{
    color: white;
    padding: 1rem;
    margin: 0 auto;
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    nav{
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      width: 100%;
      ul{
        display: inline-flex;
        align-items: center;
        padding: 0;
        margin: 0;
      }
      li{
        margin: 0 1rem;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
    .header{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      padding-bottom: 8rem;
      img{
        width: 60%;
        height: auto;
      }
    }
  }
</style>