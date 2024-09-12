<script setup lang="ts">
import ButtonInscription from './ButtonInscription.vue';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <div class="section-pricing">
      <h2>Pricing</h2>
      <div class="container-pricings">
          <div class="pricing">
            <ul>
                <li><h4>Gratuit</h4></li>
                <li class="desc">Jouez aussi longtemps que vous le souhaitez</li>
                <li><img src="../assets/img/icon/true.svg"> Musiques libre de droits</li>
                <li><img src="../assets/img/icon/true.svg"> 3 jeux</li>
                <li><img src="../assets/img/icon/true.svg"> 1 défi journalier</li>
                <li><img src="../assets/img/icon/true.svg"> Mode multi-joueur</li>
            </ul>
            <ButtonInscription text="S'inscrire"/>
          </div>
          <div class="pricing">
            <ul>
                <li><h4>Journalier</h4></li>
                <li class="desc">5€ / MOIS</li>
                <li><img src="../assets/img/icon/true.svg"> Offre gratuite</li>
                <li><img src="../assets/img/icon/true.svg"> Musiques du moment</li>
                <li><img src="../assets/img/icon/true.svg"> Tous les défis journaliers</li>
                <li><img src="../assets/img/icon/true.svg"> Mode de difficultés</li>
            </ul>
            <ButtonInscription text="S'abonner"/>
          </div>
          <div class="pricing">
            <ul>
                <li><h4>Premium</h4></li>
                <li class="desc">10€ / MOIS</li>
                <li>
                    <FontawesomeObject :icon="faHeart" />
                    <img src="../assets/img/icon/true.svg"> Offre journalier</li>
                <li><img src="../assets/img/icon/true.svg"> Toutes les musiques</li>
                <li><img src="../assets/img/icon/true.svg"> Tous les modes et défis</li>
                <li><img src="../assets/img/icon/true.svg"> Ajout de fonctionnalités IA </li>
            </ul>
            <ButtonInscription text="S'abonner"/>
          </div>
        </div>
      </div>
  </template>


<!-- create svg component -->


