<script setup lang="ts">
import ButtonInscription from './ButtonInscription.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

</script>
<template>
    <div class="section-pricing">
      <h2>Pricing</h2>
      <div class="container-pricings">
          <div class="pricing">
            <ul>
                <li><h4>Gratuit</h4></li>
                <li class="desc">Jouez aussi longtemps que vous le souhaitez</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" style="background-color:;"/> Musiques libre de droits</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> 3 jeux</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> 1 défi journalier</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> Mode multi-joueur</li>
            </ul>
            <ButtonInscription text="S'inscrire" class="btn-secondary"></ButtonInscription>
          </div>
          <div class="pricing">
            <ul>
                <li><h4>Journalier</h4></li>
                <li class="desc">5€ / MOIS</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> Offre gratuite</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> Musiques du moment</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> Tous les défis journaliers</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> Mode de difficultés</li>
            </ul>
            <ButtonInscription text="S'abonner" class="btn-secondary"></ButtonInscription>
          </div>
          <div class="pricing">
            <ul>
                <li><h4>Premium</h4></li>
                <li class="desc">10€ / MOIS</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> Offre journalier</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> Toutes les musiques</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> Tous les modes et défis</li>
                <li class="fa"><font-awesome-icon :icon="faCheck" /> Ajout de fonctionnalités IA </li>
            </ul>
            <ButtonInscription text="S'abonner" class="btn-white"></ButtonInscription>
          </div>
        </div>
      </div>
  </template>


<style lang="scss">
@import '../styles/_variables.scss';

    .section-pricing{
      max-width: 1240px;
      padding: 7rem 1rem 3rem 1rem;
      margin: auto;

    h2{
        text-transform: uppercase;
        font-size: 2rem;
        text-align: center;
    }
}

.container-pricings{
    display: flex;
    flex-direction: row;
    gap: 1rem;

    .pricing{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        border-radius: 10px;
        color: white;
        justify-content: space-between;

        .fa{
            padding: 0.25rem 0;
        }
        h4{
            font-size: 2rem;
            margin: 0;
        }
        .desc{
            min-height: 4rem;
            line-height: 1;
            padding-bottom: 1rem;
            font-size: 1.5rem;
            font-weight: 700;
        }

    }

    .pricing:nth-child(1) {
    background-color: white;
    color: black;
    width: 30%;

    .desc{
        color: $secondary-color;
    }
    }
    
    .pricing:nth-child(2) {
    background-color: white;
    color: black;
    width: 30%;
    .desc{
        color: $secondary-color;
    }
    }
    
    .pricing:nth-child(3) {
    background-color: $secondary-color;
    width: 40%
    }
}
</style>


