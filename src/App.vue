<script setup lang="ts">
import Header from './components/Header.vue';
import PresentationGames from './components/PresentationGames.vue';
import ServiceContainer from './components/ServiceContainer.vue';
import Pricing from './components/Pricing.vue';
</script>

<template>
  <!-- Import Header -->
  <Header />
  <ServiceContainer />
  <PresentationGames />
  <Pricing />
</template>


<style lang="scss">
@import './styles/_variables.scss';

:root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }


  .btn{
    background-color: $primary-color;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &-primary{
      background-color: $primary-color;

      &:hover{
        box-shadow: 0 0 10px 0 rgba(252, 148, 100, 0.8);
      }
    }

    &-secondary{
      background-color: $secondary-color;
      width: fit-content;
      margin: 0 auto;

      &:hover{
        box-shadow: 0 0 10px 0 rgb(236, 92, 108, 0.8);
      }
    }

    &-white{
      background-color: white;
      color: $secondary-color;
      width: fit-content;
      margin: 0 auto;
      &:hover{
        box-shadow: 0 0 10px 0 rgb(255, 255, 255, 0.8);
      }
    }
  }

  li{
    list-style: none;
  }
</style>