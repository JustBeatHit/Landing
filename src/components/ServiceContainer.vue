<template>
    <div class="container-service">
        <div class="left-container-service">
            <div class="up-left-container-service">
                <div class="participate-friends-div-service">
                    <h3>Participez et défiez vos amis dans des mini-jeux musicaux</h3>
                </div>
                <div class="exclu-trailer-div-service">
                    <p>Regarde en exclusivité notre nouveau trailer promotionnel</p>
                    <img src="../assets/img/TrailerPromo.png" alt="">
                </div>
            </div>
            <div class="down-left-container-service">
                <svg width="119" height="442" viewBox="0 0 119 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75.9958 12.9999C101.978 59.3262 105.935 110.485 88.4802 160.301C79.3461 186.366 64.598 210.168 57.4824 237.008C41.4564 297.479 50.4208 365.09 90.8724 414.17" stroke="#FC9464" stroke-width="24.5697" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="93.9335" y="321" width="25" height="120" rx="12.5" transform="rotate(3.79073 93.9335 321)" fill="#FC9464"/>
                <rect x="115.448" y="423.224" width="25" height="120" rx="12.5" transform="rotate(114.742 115.448 423.224)" fill="#FC9464"/>
                </svg>
                <div class="open-beta">
                    <p>Ouverture de notre beta 2025</p>
                </div>
                <div class="jsb-feat-iim">

                </div>
            </div>
        </div>
        <div class="right-container-service">
            <p>Nouveau jeu</p>
            <h2>Karakaku</h2>
            <div class="separator">
                <svg width="284" height="44" viewBox="0 0 284 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.01522 40.5124C27.5891 26.6611 59.3887 21.1935 94.3698 24.336C112.673 25.9807 155.879 29.5397 174.296 30.3233C215.786 32.0867 257.107 23.3767 280.706 3.56664" stroke="#EC5C6C" stroke-width="6" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <p>
                Le jeu musical qui met à l'épreuve ta vitesse de frappe !
            </p>
            <p>
                Retape les paroles de chansons aussi vite qu'elles sont chantées !
            </p>
            <div>
                <img src="../assets/img/Karakaku.svg" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import '../styles/_variables.scss';

.container-service{
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    .left-container-service{
        width: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        .up-left-container-service{
            background-image: url('../assets/img/backgroundService.svg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-radius: 10px;
            padding: 1rem;

            .participate-friends-div-service{
                font-size: 1.75rem;
                text-transform: uppercase;
                h3{
                    margin: 0;
                }
            }
            .exclu-trailer-div-service{
                display: flex;
                flex-direction: column;
                align-items: end;
                gap: 1rem;
                p{
                    color: $secondary-color;
                    font-weight: bold;
                    font-style: italic; 
                    font-size: 1.5rem;
                    text-align: end;
                    width: 75%;
                    margin: 0;
                }
                img{
                    height: 220px;
                    width: 400px;
                }
            }
        }
        .down-left-container-service{
            display: flex;
            flex-direction: row;
            position: relative;
            justify-content: flex-end;
            width: 100%;
            gap: 1rem;
            svg{
                position: absolute;
                top: -30px;
                left: 60px;
                height: 225px;
                width: auto;
                z-index: -2;
            }
            .open-beta{
                text-transform: uppercase;
                background-image: url('../assets/img/backgroundGradient.svg');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                width: 440px;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight:700;
            }
            .jsb-feat-iim{
                width: 330px;
                height: 132px;
                border-radius: 10px;
                background-image: url('../assets/img/background_JBH_IIM.svg');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    }
    .right-container-service{
        display: flex;
        flex-direction: column;
        background-color: $primary-color;
        border-radius: 10px;
        width: 25%;
        padding: 1rem;

        p{
            font-size: 1.15rem;
            margin: 0;
        }
        .separator{
            width: 100%;
            height: 2rem;
        }
        h2{
            font-size: 2rem;
            margin: 0;
        }
        div{
            position: relative;

            svg{
                position: absolute;
                top: -25px;
                width: 200px;
            }
        }
        img{
            position: absolute;
            top: -40px;
            right: -60px;
            width: auto;
            height: 25vw;
            // z-index: -1;
        }
    }
}
</style>