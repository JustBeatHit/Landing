<template>
    <div class="section-games">
      <h2>Nos Jeux</h2>
      <div class="container-games"
      >
        <div
          v-for="(game, index) in games"
          :key="index"
          class="game"
          :class="{ 'game-expanded': expandedIndex === index }"
          @mouseenter="expandGame(index)"
        >
          <ul class="ul-game" :class="{'ul-game-expanded' : expandedIndex === index}">
            <li><h2>{{ game.name }}</h2></li>
            <li><h4>{{ game.description }}</h4></li>
            <!-- If expandedGame -->
            <transition name="instant">
            <li v-if="expandedIndex === index">
                <p>{{ game.playstyle }}</p>
            </li>
            </transition>
            <transition name="fade">
                <li  class="button-play-game" v-if="expandedIndex !== index">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50V88.6525C100 94.9195 94.9195 100 88.6525 100H50C22.3858 100 0 77.6142 0 50Z" fill="white"/>
                    <path d="M41 61L61 41M61 41H41M61 41V61" stroke="#1D1D1D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
            </transition>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expandedIndex: 0,
        games: [
          { name: "Karakaku", description:"Karakaku est un jeu musical qui met à l'épreuve ta vitesse de frappe !", playstyle:"Tu dois retaper les paroles de chansons aussi vite qu'elles sont chantées. Ce jeu va te challenger, et te permettre de comparer tes scores avec ceux de tes amis. Un mélange parfait entre musique et compétition qui te garantit des heures de divertissement tout en améliorant ta maîtrise du clavier." },
          { name: "Blind Test", description:"Karakaku est un jeu musical qui met à l'épreuve ta vitesse de frappe !", playstyle:"Tu dois retaper les paroles de chansons aussi vite qu'elles sont chantées. Ce jeu va te challenger, et te permettre de comparer tes scores avec ceux de tes amis. Un mélange parfait entre musique et compétition qui te garantit des heures de divertissement tout en améliorant ta maîtrise du clavier." },
          { name: "Karakaku", description:"Karakaku est un jeu musical qui met à l'épreuve ta vitesse de frappe !", playstyle:"Tu dois retaper les paroles de chansons aussi vite qu'elles sont chantées. Ce jeu va te challenger, et te permettre de comparer tes scores avec ceux de tes amis. Un mélange parfait entre musique et compétition qui te garantit des heures de divertissement tout en améliorant ta maîtrise du clavier." },
        ],
      };
    },
    methods: {
      expandGame(index) {
        this.expandedIndex = index;
      },
    },
  };
  </script>


<style lang="scss">
@import '../styles/_variables.scss';

.section-games{
    max-width: 1240px;
    margin: 7rem auto 3rem auto;
    
    h2{
        text-transform: uppercase;
        font-size: 2rem;
    }
}
.container-games{
    display: flex;
    flex-direction: row;
    max-width: 1240px;
    height: 500px;
    margin: 0 auto;
    gap: 1rem;
    
    .game {
    flex: 1;
    transition: flex 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    h2,h4, p{
        margin: 0.5rem 0;
    }
    ul{
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
    }
    .game-expanded{
        width: 100%;
    }
    .ul-game-expanded{
        width: 75%;
    }
    li{

        p, h3{
            font-size: 1.25rem;
        }
    }
    }
    
    .game-expanded {
    flex: 2;
    }
    
    .game:nth-child(1) {
    background-color: $secondary-color;
    }
    
    .game:nth-child(2) {
    background-color: $primary-color;
    }
    
    .game:nth-child(3) {
    background-color: $secondary-color;
    }
    .button-play-game{
        position: absolute;
        bottom: 10px;
        right: 10px;
        height: 100px;
    }

    .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.instant-enter-active,
.instant-leave-active {
  transition: none;
}

.instant-enter,
.instant-leave-to {
  opacity: 0;
}
}

  
</style>