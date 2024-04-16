<template>
    <div class="head">
        <div class="submain" id="subnavbar" style="margin-top: 0vw;">
            <button @click="route('/')" class="sub">
                <div class="logo" id="std1">
                    <img :src="require('../assets/logo.svg')" />
                </div>
                <p class="title" id="std2">BATTLE<br>OF<br>BYTES</p>
            </button>
            <div class="sub">
                <button class="b1" @click="route('/events')"  style="background-color: #893F45;">
                    EVENTS
                </button>
                <button class="b1" @click="route('/teams')"  style="background-color: #800080;border-width:0.3vw">
                    TEAMS
                </button>
                <button class="b1" @click="route('/gallery')"   style="background-color: #7BA05B;">
                    GALLERY
                </button>
                <button @click="route('/auction')" class="b1" style="background-color: #0D98BA">
                    AUCTION<span class="span">LIVE</span>
                </button>
                <button @click="route('/vote')" class="b1" style="background-color: #D99058">
                    VOTE<span class="span">LIVE</span>
                </button>
            </div>
            <div class="sub">
                <a href="https://www.instagram.com/battle_of_bytes?utm_source=qr&igsh=aXd3a3BmeHVvNWl4"
                    target="_blank"><span class="mdi mdi-instagram"></span></a>
                <a href="https://www.linkedin.com/company/battle-of-bytes/" target="_blank"><span
                        class="mdi mdi-linkedin"></span></a>
                <a href="https://battleofbytes.techverse.ltd" target="_blank"><span class="mdi mdi-web"></span></a>
                <span v-if="user != null" class="mdi mdi-linkedi"></span>
                <span v-if="user != null" class="mdi mdi-linkedi"></span>
                <span v-if="user != null"><img :src="user.photoURL" :alt="user.displayName.split(' ')[0]"
                        style="border-radius: 10vw;height:2.25vw;width:2.25vw;" /></span>
            </div>
        </div>
    </div>
    <div class="body">
        <div class="d1" v-if="user == null">
            <p class="t0">meet the teams<br><span style="color: #C87ECB;">who'll battle for bytes...</span></p>
        </div>
        <div class="d2">
            <div class="sub" v-for="item in teams">
                <img :src="item.img"/>
                <p class="title">{{item.name}}</p>
                <p class="body2">"{{item.quote}}"</p>
                <p class="body">{{item.mentor}}</p>
            </div>
        </div>
    </div>
    <div class="foot">
    </div>
</template>
<script>
import { loginWithGoogle } from '@/auth';
import getFirebaseInstances from '@/fb';
import router from '@/router';
import store from '@/store/index'
import { mapState } from 'vuex';
import firebase from '@firebase/app-compat';
export default {
    name: 'HomePage',
    data() {
        return {
            imgs:['bb1','bb2','bb3','bb4','bb5','bb6','auc1','auc2','auc3','auc4','auc5','auc6','auc7','auc8','auc9','auc10'],
            selectedimg:0,
            lprev:false,
        }
    },
    computed: {
        ...mapState({teams:s=>s.teams}),
    },
    mounted() {
        document.body.style.backgroundColor = '#800080';
    },
    beforeDestroy() {
        // Clear the interval when the component is destroyed
    },
    methods:{
        route(e){
            router.push(e)
        }
    }
}
</script>
  
<style lang="scss" scoped>
.head {
    height: auto;
    display: flex;
    flex-direction: column;

    .smdiv {
        display: flex;
        flex-direction: column;

        .mdiv {
            display: flex;
            overflow: visible;
            width: 100vw;
            background-color: white;
            gap: 1.25vw;
            word-spacing: -1.75vw;

            .m1 {
                font-size: 4vw;
                flex-shrink: 0;
                width: auto;
                color: black;
                font-weight: bolder;
                animation: marquee1 25s linear infinite;
                opacity: 0.25;
                z-index: 1;
                margin-top: -2.75vw;
            }

            .m1.f1 {
                animation: marquee2 20.5s linear infinite;
                opacity: 0.5;
                z-index: 2;
                margin-top: -4vw;
            }

            .m1.f2 {
                animation: marquee3 15s linear infinite;
                opacity: 0.75;
                z-index: 3;
                margin-top: -4vw;
            }

            .m1.f3 {
                margin-top: -4vw;
                animation: marquee4 12.5s linear infinite;
                opacity: 1;
                z-index: 4;
            }
        }
    }

    .submain {
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(0.8rem);
        border-top: 0.08vw solid white;
        z-index: 10;
        height: auto;
        display: flex;
        justify-content: space-between;
        padding-top: 3vw;
        padding-left: 3vw;
        padding-right: 3vw;
        padding-bottom: 3vw;

        .sub {
            width: auto;
            height: 3vw;
            z-index: 10;
            display: flex;
            gap: 1vw;
            align-items: center;

            .logo {
                height: 5vw;
                width: 5vw;

                img {
                    height: 100%;
                    width: 100%;
                }
            }

            .title {
                font-size: 2vw;
                font-family: f4;
                text-align: left;
                line-height: 1.6vw;
            }

            .b1 {
                transition: 0.2s;
                padding-left: 1.5vw;
                padding-right: 1.5vw;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10vw;
                border: 0.07vw solid white;
                width: auto;
                height: 2.33vw;
                font-family: f2;
                font-size: 1vw;

                .span {
                    font-size: 0.7vw;
                    padding-top: 0.1vw;
                    padding-bottom: 0.1vw;
                    padding-right: 0.33vw;
                    padding-left: 0.33vw;
                    margin-left: 0.2vw;
                    font-family: f3;
                    background-color: red;
                    border-radius: 10vw;
                    display: grid;
                    justify-content: center;
                    align-items: center;
                }
            }

            .b1:hover {
                filter: contrast(80%);
            }

            .mdi {
                font-size: 2vw;
                opacity: 0.85;
                transition: 0.2s;
                cursor: pointer;
            }

            .mdi:hover {
                opacity: 1;
            }
        }
    }
}

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2vw;
    gap: 5vw;
    margin-top: 1.5vw;

    .d1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.35vw;

        .countdown {
            font-family: f4;
            font-size: 3vw;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 1vw;
            border-radius: 10vw;
            padding-left: 2.5vw;
            padding-right: 2.5vw;
            min-width: 40%;
        }

        .t0 {
            font-family: f4;
            font-size: 5vw;
            line-height: 5.5vw;
            margin-top: 3vw;
        }

        .t3 {
            font-family: f1;
        }
    }
    .d2{
        display: flex;
        gap: 0.75vw;
        flex-wrap: wrap;
        width: 95vw;
        justify-content: center;
        .sub{
            width: 30vw;
            height: 25vw;
            border-radius: 3vw;
            background-color: azure;
            display: flex;
            flex-direction: column;
            padding: 2vw;
            align-items: center;
            justify-content: flex-start;
    
            img{
                height: 7vw;
                width: 7vw;
                border-radius: 10vw;
                object-fit: cover;
                object-position: 50% 50%;
            }
    
            .title{
                font-family: f4;
                font-size: 3vw;
                color: black;
            }
            .body{
                font-family: f2;
                font-size: 1.13vw;
                line-height: 1.33vw;
                color: rgb(28, 26, 26);
                background-color: black;
                padding: 0.5vw;
                padding-left: 2vw;
                padding-right: 2vw;
                border-radius: 10vw;
                color: white;
            }
            .body2{
                margin-top: 1vw;
                font-style: italic;
                font-family: f2;
                font-size: 1.33vw;
                line-height: 1.33vw;
                color: rgb(28, 26, 26);
                color: black;
            }
        }
        .sub:nth-child(2){
            background-color: black;
            .title{
                color: white;
            }
            .body{
                color: black;
                background-color: white;
            }
            .body2{
                color: rgb(244, 242, 242);
            }
        }
        .sub:nth-child(4){
            background-color: black;
            .title{
                color: white;
            }
            .body{
                color: black;
                background-color: white;
            }
            .body2{
                color: rgb(244, 242, 242);
            }
        }
        .sub:nth-child(6){
            background-color: black;
            .title{
                color: white;
            }
            .body{
                color: black;
                background-color: white;
            }
            .body2{
                color: rgb(244, 242, 242);
            }
        }
        .sub:nth-child(8){
            background-color: black;
            .title{
                color: white;
            }
            .body{
                color: black;
                background-color: white;
            }
            .body2{
                color: rgb(244, 242, 242);
            }
        }
        .sub:nth-child(10){
            background-color: black;
            .title{
                color: white;
            }
            .body{
                color: black;
                background-color: white;
            }
            .body2{
                color: rgb(244, 242, 242);
            }
        }.sub:nth-child(12){
            background-color: black;
            .title{
                color: white;
            }
            .body{
                color: black;
                background-color: white;
            }
            .body2{
                color: rgb(244, 242, 242);
            }
        }
    }
    .d3{
        position: fixed;
        backdrop-filter: blur(0.8rem);
        background-color: rgba(0, 0, 0, 0.25);
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        padding: 4vw;
        z-index: 1000;
        display: grid;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
            height: 90%;
            object-fit: contain;
            margin-top: -2vw;
        }
        .buttons{
            display: flex;
            justify-content: flex-end;
            gap: 1vw;
            button{
                padding-left: 2vw;
                padding-right: 2vw;
                padding-top: 0.3vw;
                padding-bottom: 0.3vw;
                border-radius: 20vw;
                background-color: white;
                font-family: f1;
                color: black;
                transition: 0.2s;
            }
            button:hover{
                background: rgb(180, 180, 180);
            }
            button:active{
                background:white;
            }
        }
    }
}

@keyframes marquee1 {
    from {
        transform: translateX(-3%);
    }

    /* Start from right */
    to {
        transform: translateX(-150%);
    }

    /* Move to left */
}

@keyframes marquee2 {
    from {
        transform: translateX(-5%);
    }

    /* Start from right */
    to {
        transform: translateX(-150%);
    }

    /* Move to left */
}

@keyframes marquee3 {
    from {
        transform: translateX(-7%);
    }

    /* Start from right */
    to {
        transform: translateX(-150%);
    }

    /* Move to left */
}

@keyframes marquee4 {
    from {
        transform: translateX(-9%);
    }

    /* Start from right */
    to {
        transform: translateX(-150%);
    }

    /* Move to left */
}</style>
  