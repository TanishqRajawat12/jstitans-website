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
                <button class="b1" @click="route('/teams')"  style="background-color: #800080;">
                    TEAMS
                </button>
                <button class="b1" @click="route('/gallery')"   style="background-color: #7BA05B;">
                    GALLERY
                </button>
                <button @click="route('/auction')" class="b1" style="background-color: #0D98BA">
                    AUCTION<span class="span">LIVE</span>
                </button>
                <button class="b1" style="background-color: #D99058;border-width:0.3vw">
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
            <p class="t0">CAST VOTES FOR<br><span style="color: #452607;">YOUR FAVOURITE TEAMS</span></p>
            <button @click="loginWithGoogle()" class="b1"><span class="mdi mdi-google"></span>&nbsp;SIGN IN WITH
                GOOGLE</button>
            <p class="t3">sign in to place & manage your votes...</p>
        </div>
        <div class="d2" v-if="user != null">
            <p class="t2">Hello {{ user.displayName.split(' ')[0] }}!</p>
            <p class="t3" style="margin-bottom: 1vw;">
                Every Vote Counts! Your vote helps determine which team comes out on top. Whether it's a friendly competition, a playoff bracket, or a community challenge, your participation makes a difference.
                Spread the Word!
Encourage your friends, family, and fellow fans to join the fun and cast their votes too! Share the voting page on social media or spread the word in person to maximize your team's support.
Let's see which team reigns supreme!
            </p>
            <div class="sd0">
                <p class="t1">yoUr<br>votes</p>
                <div class="sd1 alt" v-if="!userdata.hasOwnProperty('votes') || userdata.votes.length < 1">
                    <p class="t1">No Votes Casted...</p>
                </div>
                <div class="sd1" id="scd1" v-else>
                    <div class="buttons">
                        <button id="scb1">PREV</button>
                        <button id="scb2">NEXT</button>
                    </div>
                    <div class="bid" v-for="item in Object.values(userdata.votes)">
                        <div class="st1">
                            <p class="m1">{{ item.team.substr(0, 1) }}</p>
                            <p class="m2">
                                {{ item.team }}
                            </p>
                        </div>
                        <p class="m3">
                            <span style="font-family:f3;">Casted at {{ new Date(item.time.seconds*1000).toLocaleString('en-In') }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="d3" v-if="user!=null">
            <p class="t1" style="color: #452607;">cast. yoUr. votes.</p>
            <div class="sd1">
                <div class="teamsec" v-for="item in teams.sort((a,b)=>b.votes-a.votes)">
                    <img :src="item.img"/>
                    <p class="t1">{{item.name}}&nbsp;<sup>{{teams.sort((a,b)=>b.votes-a.votes).indexOf(item)+1}}</sup></p>
                    <p class="t2">{{item.votes}} votes</p>
                    <button v-if="!userdata.hasOwnProperty('votes')||!userdata.votes.hasOwnProperty(item.name)" @click="castvote(item.name)" class="b1">VOTE</button>
                    <button v-else class="b1" style="display:flex;background-color:green;"><span class="material-icons">done</span>VOTED</button>
                </div>
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
            center: { lat: 26.85411, lng: 75.82833 },
            targetDate: new Date("2024-04-14T19:30:00"),
            currccd: {},
            bidplacer: {
                "Alice Johnson": { bid: 0 },
                "Brian Miller": { bid: 0 },
                "Charlie Garcia": { bid: 0 },
                "David Williams": { bid: 0 },
                "Emily Jones": { bid: 0 },
                "Frank Brown": { bid: 0 },
                "Grace Davis": { bid: 0 },
                "Henry Moore": { bid: 0 },
                "Isabella Clark": { bid: 0 },
                "Jack Wilson": { bid: 0 },
                "Olivia Taylor": { bid: 0 },
                "William Smith": { bid: 0 },
                "Sophia Evans": { bid: 0 },
                "Benjamin Lewis": { bid: 0 },
                "Mia Lopez": { bid: 0 },
                "Noah Hernandez": { bid: 0 },
                "Ava Robinson": { bid: 0 },
                "Lucas Walker": { bid: 0 },
                "Elizabeth Allen": { bid: 0 },
                "Matthew King": { bid: 0 },
            },
        }
    },
    computed: {
        ...mapState({ user: s => s.user, userdata: s => s.userdata, teams: s => s.teams, players: s => s.players })
    },
    mounted() {
        document.body.style.backgroundColor = '#D99058';
        this.calculateTimeLeft()
        setInterval(this.calculateTimeLeft, 1000)
        if (this.user!=null&&this.userdata.votes){
            const scrollLeftButton1 = document.getElementById("scb1");
        const scrollRightButton1 = document.getElementById("scb2");
        const scrollableContent1 = document.getElementById("scd1");

        scrollLeftButton1.addEventListener("click", function () {
            scrollableContent1.scroll({
                left: scrollableContent1.scrollLeft - 400,
                behavior: "smooth"
            });
        });
        scrollRightButton1.addEventListener("click", function () {
            scrollableContent1.scroll({
                left: scrollableContent1.scrollLeft + 400,
                behavior: "smooth"
            });
        });
        }
    },
    beforeDestroy() {
        // Clear the interval when the component is destroyed
    },
    methods: {
        loginWithGoogle,
        calculateTimeLeft() {
            const diffInMs = this.targetDate.getTime() - new Date().getTime();
            const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
            this.currccd = { days, hours, minutes, seconds };
        },
        castvote(who) {
            getFirebaseInstances().db.runTransaction(async t => {
                let uref = getFirebaseInstances().db.collection('users').doc(this.user.email);
                let tref = getFirebaseInstances().db.collection('teams').doc(who);
                t.set(uref, {
                    votes: {
                        [who]: {
                            team: who,
                            time: firebase.firestore.Timestamp.now()
                        }
                    }},{merge:true})
                t.set(tref, {
                    votes: firebase.firestore.FieldValue.increment(1)
                },{merge:true})
            })
        },
        route(e) {
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
            font-size: 7vw;
            line-height: 7.5vw;
            margin-top: 3vw;
        }

        .b1 {
            border-radius: 10vw;
            padding-left: 2vw;
            padding-right: 2vw;
            padding-top: 0.8vw;
            padding-bottom: 0.8vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            font-family: f3;
            font-size: 1.2vw;
            transition: 0.2s;
        }

        .b1:hover {
            background-color: #303030;
        }

        .t3 {
            font-family: f1;
        }
    }

    .d2 {
        display: flex;
        flex-direction: column;
        gap: 1vw;
        align-items: center;

        .countdown {
            font-family: f4;
            font-size: 3vw;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 1vw;
            border-radius: 10vw;
            padding-left: 2.5vw;
            padding-right: 2.5vw;
            max-width: 50%;
        }

        .t1 {
            font-family: f4;
            font-size: 9vw;
            line-height: 10vw;
            text-align: left;
        }

        .t2 {
            font-family: f4;
            font-size: 3vw;
            text-align: center;
        }

        .t3 {
            width: 65%;
        }

        .sd0 {
            display: flex;
            gap: 7.5vw;
            padding-left: 2vw;
            width: 100vw;
            justify-content: flex-end;

            .t1 {
                font-family: f4;
                font-size: 9vw;
                line-height: 10vw;
                text-align: left;
            }

            .sd1 {
                width: 70vw;
                height: 20vw;
                border-top-left-radius: 3vw;
                border-bottom-left-radius: 3vw;
                background: rgba(0, 0, 0, 0.75);
                display: flex;
                gap: 1vw;
                overflow: auto;
                align-items: center;
                padding-left: 4vw;
                padding-right: 2vw;

                .buttons{
                    position:sticky;
                    left: 52.5vw;
                    margin-top: -16.5vw;
                    margin-left: -12vw;
                    z-index: 10;
                    gap: 0.7vw;
                    display: flex;
                    button{
                        font-family: f1;
                        font-size: 1vw;
                        padding-left: 1.5vw;
                        padding-right: 1.5vw;
                        padding-top: .2vw;
                        padding-bottom: .2vw;
                        background-color: rgb(170, 170, 170);
                        border-radius: 10vw;
                        color: black;
                        transition: 0.2s;
                    }
                    button:hover{
                        background-color: white;
                    }
                }
                .bid {
                    height: 13vw;
                    width: 25vw;
                    border-radius: 2.5vw;
                    background-color: rgba(255, 255, 255, 1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    padding: 2vw;
                    gap: 1vw;
                    flex-shrink: 0;
    
                    .st1 {
                        display: flex;
                        gap: 1vw;
                        align-items: center;
    
                        .m1 {
                            height: 3vw;
                            width: 3vw;
                            font-size: 1.2vw;
                            border-radius: 10vw;
                            display: grid;
                            justify-content: center;
                            align-items: center;
                            background-color: #072E45;
                        }
    
                        .m2 {
                            color: #072E45;
                            font-size: 1.7vw;
                        }
                    }
    
                    .m3 {
                        padding-left: 2vw;
                        padding-right: 2vw;
                        padding-top: 0.2vw;
                        padding-bottom: 0.2vw;
                        border-radius: 2vw;
                        background-color: #072E45;
                    }


                }
            }
            .sd1::-webkit-scrollbar{
                display: none;
            }
            .sd1.alt {
                width: 70vw;
                height: 20vw;
                border-top-left-radius: 3vw;
                border-bottom-left-radius: 3vw;
                background: rgba(0, 0, 0, 0.75);
                display: grid;
                justify-content: center;
                align-items: center;

                .t1 {
                    font-size: 2vw;
                    font-family: f3;
                    color: rgba(255, 255, 255, 0.5);
                }
            }
        }
    }

    .d3 {
        display: flex;
        flex-direction: column;
        gap: 1vw;
        width: 100vw;
        padding: 3vw;
        align-items: flex-start;

        .t1 {
            font-family: f4;
            font-size: 4vw;
            text-align: left;
            color: #072E45;
        }

        .sd1 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 2vw;
            justify-content: center;

            
            .teamsec{
                background-color: #000;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 2.2vw;
                width: 20vw;
                height: 20vw;
                padding: 2vw;
                img{
                    height: 7vw;
                    width: 7vw;
                    border-radius: 10vw;
                    object-fit: cover;
                    object-position: 50% 50%;
                }
                .t1{
                    font-family: f3;
                    font-size: 1.2vw;
                    color: white;
                    margin-top: 1.4vw;
                }
                .t2{
                    font-family: f3;
                    font-size: 1.5vw;
                    background-color: white;
                    color: black;
                    padding-left: 1.5vw;
                    padding-right: 1.5vw;
                    padding-top: 0.2vw;
                    padding-bottom: 0.2vw;
                    display: grid;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    border-radius: 2vw;
                    margin-top: 1vw;
                }
                .b1{
                    background-color: rgb(12, 86, 215);
                    margin-top: 1vw;
                    color: white;
                    display: grid;
                    justify-content: center;
                    align-items: center;
                    padding-left: 2vw;
                    padding-right: 2vw;
                    padding-top: 0.3vw;
                    padding-bottom: 0.3vw;
                    border-radius: 10vw;

                }
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
  