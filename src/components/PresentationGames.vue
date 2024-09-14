<template>
    <section id="section-games" class="section-games">
      <h2>Nos Jeux</h2>

      <div class="games-container">
        <div
            v-for="(game, index) in games"
            :key="game.name"
            :class="['game', expandedIndex === index ? 'open' : 'close']"
        >
          <div class="game__content">
            <img class="game-icon header-icon" :src="'../assets/img/icon/' + game.icon + '.svg'" :alt="game.name + ' Logo'" />
            <div class="game__content__desc">
              <h2>{{ game.name }}</h2>
              <h3>{{ game.headline }}</h3>
              <p>{{ game.description }}</p>
            </div>
            <div class="game__content__logo">
              <img class="game-icon" :src="'../assets/img/icon/' + game.icon + '.svg'" :alt="game.name + ' Logo'" />
            </div>
          </div>
          <button class="btn-expand" v-if="expandedIndex !== index" @click="expandGame(index)">
            <img src="../../public/assets/img/icon/arrow-open.svg"/>
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expandedIndex: 0,
        games: [
          { name: "Blind Test", headline:"le Blind Test est un jeu musical qui met à l'épreuve ton oreille et ta culture musicale !", description:"Une chanson est jouée, mais avec un instrumental différent, et c'est à toi de deviner à la fois le titre de la chanson et l'instrumental utilisé. Ce jeu va challenger ta capacité à reconnaître les morceaux et te permettra de comparer tes résultats avec ceux de tes amis.", icon: "speaker" },
          { name: "Paroles en Tête", headline:"Paroles en tête est un jeu musical qui met à l'épreuve ta mémoire et ta connaissance des paroles !", description:"Écoute attentivement une chanson, puis lorsque la musique s'interrompt, c'est à toi de compléter les paroles manquantes. Ce jeu va tester ta capacité à te souvenir des paroles et te permettra de comparer tes performances avec celles de tes amis.", icon: "music-file"},
          { name: "Karakaku", headline:"Karakaku est un jeu musical qui met à l'épreuve ta vitesse de frappe !", description:"Tu dois retaper les paroles de chansons aussi vite qu'elles sont chantées. Ce jeu va te challenger, et te permettre de comparer tes scores avec ceux de tes amis. Un mélange parfait entre musique et compétition qui te garantit des heures de divertissement tout en améliorant ta maîtrise du clavier.", icon: "vinyle" },
        ],
      };
    },
    methods: {
      expandGame(index) {
        this.expandedIndex = index === this.expandedIndex ? null : index;
      },
    },
  };
</script>