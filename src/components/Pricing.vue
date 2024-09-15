<template>
    <div id="section-pricing" class="section-pricing">
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

<script setup lang="ts">
import ButtonInscription from './ButtonInscription.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

</script>