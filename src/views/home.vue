<template>
    <div class="head">
        <div class="smdiv" id="navbar">
            <div class="mdiv">
                <p class="m1">DSATHON</p>
                <p class="m1">DSATHON</p>
                <p class="m1">DSATHON</p>
                <p class="m1">DSATHON</p>
                <p class="m1">DSATHON</p>
                <p class="m1">DSATHON</p>
                <p class="m1">DSATHON</p>
            </div>
            <div class="mdiv">
                <p class="m1 f1">ALGORITHM ODYSSEY</p>
                <p class="m1 f1">ALGORITHM ODYSSEY</p>
                <p class="m1 f1">ALGORITHM ODYSSEY</p>
                <p class="m1 f1">ALGORITHM ODYSSEY</p>
                <p class="m1 f1">ALGORITHM ODYSSEY</p>
                <p class="m1 f1">ALGORITHM ODYSSEY</p>
                <p class="m1 f1">ALGORITHM ODYSSEY</p>
            </div>
            <div class="mdiv">
                <p class="m1 f2">CODE COMBAT</p>
                <p class="m1 f2">CODE COMBAT</p>
                <p class="m1 f2">CODE COMBAT</p>
                <p class="m1 f2">CODE COMBAT</p>
                <p class="m1 f2">CODE COMBAT</p>
                <p class="m1 f2">CODE COMBAT</p>
                <p class="m1 f2">CODE COMBAT</p>
            </div>
            <div class="mdiv">
                <p class="m1 f3">PYCHAMPION</p>
                <p class="m1 f3">PYCHAMPION</p>
                <p class="m1 f3">PYCHAMPION</p>
                <p class="m1 f3">PYCHAMPION</p>
                <p class="m1 f3">PYCHAMPION</p>
                <p class="m1 f3">PYCHAMPION</p>
                <p class="m1 f3">PYCHAMPION</p>
            </div>
        </div>
        <div class="submain" id="subnavbar">
            <button class="sub" @click="route('/')">
                <div class="logo" id="std1">
                    <img :src="require('../assets/logo2.png')" />
                </div>
                <p class="title" id="std2">BATTLE<br>OF<br>BYTES</p>
            </button>
            <div class="sub">
                <button @click="route('/events')" class="b1" style="background-color: #893F45;">
                    EVENTS
                </button>
                <button @click="route('/teams')" class="b1" style="background-color: #800080;">
                    TEAMS
                </button>
                <button @click="route('/gallery')" class="b1" style="background-color: #7BA05B;">
                    GALLERY
                </button>
                <button @click="route('/auction')" class="b1" style="background-color: #0D98BA;">
                    AUCTION<span class="span">LIVE</span>
                </button>
                <button @click="route('/vote')" class="b1" style="background-color: #D99058;">
                    VOTE<span class="span">LIVE</span>
                </button>
            </div>
            <div class="sub">
                <a href="https://www.instagram.com/battle_of_bytes?utm_source=qr&igsh=aXd3a3BmeHVvNWl4"
                    target="_blank"><span class="mdi mdi-instagram"></span></a>
                <a href="https://www.linkedin.com/company/battle-of-bytes/" target="_blank"><span
                        class="mdi mdi-linkedin"></span></a>
                <a href="https://battleofbytes.techverse.ltd" target="_blank"><span class="mdi mdi-web"></span></a>
            </div>
        </div>
        <div class="submain alt" id="subnavbar">
            <button class="sub" @click="route('/')">
                <p class="title" id="std2">BATTLE OF BYTES</p>
            </button>
            <div class="sub">
                <button class="b1">
                    <span class="material-icons">menu</span>MENU
                </button>
            </div>
        </div>
    </div>
    <div class="body">
        <div class="hero2">
            <img class="code9cca" :src="require('../assets/download.gif')">
            <p class="t1 child1hidden child2hidden">battle of bytes</p>
            <p class="t2 child1hidden child2hidden">Welcome To The Biggest Technical Battle Of BIT-Mesra Jaipur...</p>
        </div>
        <div class="hero">
            <img class="code9cca">
            <p class="t1">rise & shine</p>
            <p class="t2" style="margin-top: -4vw;">
                The dawn of a new challenge breaks. Are you a coder who thrives on the thrill of the intellectual duel?
                Battle Of Bytes is your battleground, a coding competition designed to push your limits and ignite the
                champion within. Dive into a sea of intricate puzzles and algorithmic tests, where every line of code is
                your weapon. Sharpen your skills, conquer the challenges, and rise to the top of the leaderboard. This is
                your chance to shine.
            </p>
        </div>
        <div class="subdiv">
            <p class="t1">
                AUCTION PALOOZA
            </p>
            <p class="t1" style="color: #685B07;">
                <span>BID.</span>
                <span>&nbsp;CALL.</span>
                <span>&nbsp;SOLD.</span>
            </p>
            <p class="t1 code1cca" style="color: transparent;">
                ...
            </p>
        </div>
        <div class="subdiv2" style="margin-top: -5vw;">
            <div class="d1sb">
                <button id="scrollLeftButton1">PREV</button>
                <button id="scrollRightButton1">NEXT</button>
            </div>
            <div class="d1" id="scrollableContent1">
                <img :src="require('../assets/imgs/auc5.jpg')">
                <img :src="require('../assets/imgs/auc10.jpg')">
                <img :src="require('../assets/imgs/auc2.jpg')">
                <img :src="require('../assets/imgs/auc6.jpg')">
                <img :src="require('../assets/imgs/auc9.jpg')">
                <img :src="require('../assets/imgs/auc3.jpg')">
            </div>
            <div class="d2" style="margin-top: 4vw;">
                <p class="t2">
                    Calling all educators! Unleash the coding champions within your students! Auction Palooza is the
                    ultimate classroom draft where teachers go head-to-head, bidding for the brightest minds in the Battle
                    of Bytes coding competition.
                    Showcase your strategic genius and secure the coding prodigies who will lead your team to victory! It's
                    survival of the fittest code - don't miss out on this electrifying event!
                </p>
            </div>
            <div class="d3" style="margin-top: 2vw;">
                <button @click="route('/events')">LEARN MORE</button>
                <button @click="route('/auction')">ONLINE AUCTION</button>
            </div>
        </div>
        <div class="subdiv" style="background-color: #564EF3;">
            <p class="t1" style="text-align: left;">
                BUZZER BLITZ,<br>CODE MYSTERY<br>& more
            </p>
            <p class="t1 code2cca" style="color: #0D0A49;">
                <span>BUZZ.</span>
                <span>&nbsp;SOLVE.</span>
                <span>&nbsp;WIN.</span>
            </p>
        </div>
        <div class="subdiv2" style="margin-top: 2vw;">
            <div class="d1sb">
                <button id="scrollLeftButton2">PREV</button>
                <button id="scrollRightButton2">NEXT</button>
            </div>
            <div class="d1" id="scrollableContent2">
                <img :src="require('../assets/imgs/bb1.jpg')">
                <img :src="require('../assets/imgs/bb2.jpg')">
                <img :src="require('../assets/imgs/bb3.jpg')">
                <img :src="require('../assets/imgs/bb4.jpg')">
                <img :src="require('../assets/imgs/bb5.jpg')">
                <img :src="require('../assets/imgs/bb6.jpg')">
            </div>
            <div class="d2" style="margin-top: 4vw;">
                <p class="t2">
                    The Battle of Bytes is a coding coliseum, offering a variety of challenges for every coder: from
                    lightning-fast trivia in Buzzer Blitz to the algorithmic puzzles of Code Mystery and the data mastery of
                    Data Dynasty. Face off in DSAthon marathons, conquer the logic of Algorithm Odyssey, and showcase your
                    programming prowess in C Code Mania and PyChampion. Even coding newcomers can join the fight in the
                    gamified world of Code Combat. It's a code-fueled battle royale - which champion will you be?
                </p>
            </div>
            <div class="d3" style="margin-top: 2vw;">
                <button @click="route('/teams')">LEARN MORE</button>
                <button @click="route('/vote')">ONLINE VOTING</button>
            </div>
        </div>
        <div class="subdiv" style="background-color: #1FD437;">
            <p class="t1" style="text-align: left;">
                MEET THE TEAM
            </p>
            <p class="t4" style="color: #0A5815;">
                <span>The dedicated organizing team behind Battle of Bytes comprises passionate individuals driven by a
                    shared commitment to fostering innovation and excellence in coding. With meticulous planning and
                    unwavering enthusiasm, they ensure a seamless and unforgettable experience for all participants,
                    mentors, and attendees.</span>
            </p>
            <p class="t1 code3cca" style="color: transparent;">
                ...
            </p>
        </div>
        <div class="subdiv3" style="margin-top: -5vw;">
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/rajveer.jpg'">
                </div>
                <p class="t1">
                    Rajveer Mewara
                </p>
                <p class="t2">
                    Coordinator
                </p>
            </div>
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/hardik.jpg'">
                </div>
                <p class="t1">
                    Hardik Malik
                </p>
                <p class="t2">
                    Coordinator
                </p>
            </div>
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/abhinav.png'">
                </div>
                <p class="t1">
                    Abhinav Tadi
                </p>
                <p class="t2">
                    Coordinator
                </p>
            </div>
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/anushree.jpg'">
                </div>
                <p class="t1">
                    Anushree Agarwal
                </p>
                <p class="t2">
                    Coordinator
                </p>
            </div>
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/sanchi.jpg'">
                </div>
                <p class="t1">
                    Sanchi Malhotra
                </p>
                <p class="t2">
                    Coordinator
                </p>
            </div>
        </div>
        <div class="subdiv" style="background-color: #000;">
            <p class="t1" style="text-align: left;">
                SPECIAL THANKS
            </p>
            <p class="t4" style="color: #eee;">
                <span>We would like to express our sincere gratitude to these volunteers. Their invaluable contributions
                    were instrumental in the success of this project/event/achievement.</span>
            </p>
            <p class="t1 code4cca" style="color: transparent;">
                ...
            </p>
        </div>
        <div class="subdiv4" style="margin-top: -5vw;">
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/palash.png'">
                </div>
                <p class="t1">
                    Palash Chatterjee
                </p>
                <p class="t2">
                    Website Developer
                </p>
            </div>
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/jaya.png'">
                </div>
                <p class="t1">
                    Jaya
                </p>
                <p class="t2">
                    Anchor
                </p>
            </div>
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/shilpi.png'">
                </div>
                <p class="t1">
                    Shilpi
                </p>
                <p class="t2">
                    Anchor
                </p>
            </div>
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/prabhat.jpg'">
                </div>
                <p class="t1">
                    Prabhat Sharma
                </p>
                <p class="t2">
                    Question Master
                </p>
            </div>
            <div class="dd1">
                <div class="d1">
                    <img :src="'https://battleofbytes.techverse.ltd/assets/img/team/lensoc.JPG'">
                </div>
                <p class="t1">
                    Lensoc
                </p>
                <p class="t2">
                    Photography Club
                </p>
            </div>
        </div>
        <div class="subdiv5">
            <div class="s1">
                <div class="d1">
                    <img class="i1" src="https://media.collegedekho.com/media/img/institute/logo/BIT_logo.png" />
                    <p class="t1">Birla Institute Of Technology, Mesra<br>Jaipur Campus</p>
                </div>
                <p class="t2"><span class="mdi mdi-map-marker"></span>&nbsp;27, Central Road Apex Circle, 27, Central Road,
                    Malviya Nagar Industrial Area, Malviya Nagar, Jaipur, Rajasthan 302017</p>
                <p class="t2"><span class="mdi mdi-email"></span>&nbsp;hardikmalikc9010@gmail.com, r.mewara3@gmail.com</p>
                <p class="t2"><span class="mdi mdi-phone"></span>&nbsp;+91 9950996447, +91 7339790401</p>
            </div>
            <GMapMap :options="{
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
                disableDefaultUi: false,
                mapId: 'b230bef4f55ba819',
            }" class="s2" :center='center' :zoom='14'>
                <GMapMarker :position="center">
                </GMapMarker>
            </GMapMap>
        </div>
        <div class="subdiv6">
            <img class="i1" src="https://battleofbytes.techverse.ltd/assets/img/testimonials/JavascriptTitans.png" />
            <p class="t1"><i>"DOMinating the world!!!"</i></p>
            <p class="t2"><span class="mdi mdi-account-circle"></span>&nbsp;Mr. P.K. Sharma</p>
            <button @click="route('/teammembers')">TEAM MEMBERS</button>
            <p class="t2">Designed & Developed by <b>Tanishq Singh Rajawat.</b></p>
        </div>
    </div>
    <button @click="cbox.visible = true" class="foot">
        <img :src="require('../assets/cus.png')">
    </button>
    <button @click="cbox2.visible = true" class="foot2">
        <img :src="require('../assets/cus1.png')">
    </button>
    <div class="cboxcont" v-if="cbox.visible">
        <div class="cbox">
            <p class="t1">contact us</p>
            <p class="t2">Write your query below, and we'll respond back shortly...</p>
            <input class="i1" placeholder="Name" v-model="cbox.name">
            <input class="i1" placeholder="Email" v-model="cbox.email">
            <textarea class="i1" placeholder="Message" v-model="cbox.message"></textarea>
            <button :disabled="Object.values(cbox).every(i=>i==null||i=='')" @click="sendmsg()">SEND</button>
            <button @click="cbox.visible = !cbox.visible"
                style="background-color: transparent;color:#000000aa;text-decoration:underline;">Cancel</button>
        </div>
    </div>
    <div class="cboxcont" v-if="cbox2.visible">
        <div class="cbox2">
            <span style="position: absolute;right:1vw;top:1vw; cursor:pointer;color:#000;" @click="cbox2.visible=false" class="material-icons cancel">cancel</span>
            <p class="t1">chat with us</p>
            <p class="t2">get information right away!!!</p>
            <div class="resp">
                <p class="t3" v-for="item in resp" :style="item.type=='user'?{'background-color':'#fff'}:{}">{{item.msg}}</p>
                </div>
            <input type="text" class="i1" placeholder="Enter your query" v-model="cbox2.message">
            <button :disabled="Object.values(cbox2).every(i=>i==null||i=='')" @click="chat(cbox2.message)">SEND</button>
        </div>
    </div>
</template>
<script>
import router from '@/router';
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            center: { lat: 26.85411, lng: 75.82833 },
            cbox: {
                visible: false,
                email: null, message: null, name: null,
            },
            cbox2: {
                visible: false,message: null
            },
            resp:[{type:'bot',msg:'Hi I can help you with the basic queries related to Battle Of Bytes...'}],
            responses: {
            hello: ['Hi there!', 'Hey! How can I help you today?'],
            goodbye: ['Bye!', 'See you later! '],
            bye: ['Bye!', 'See you later! '],
            thanks: ['You\'re welcome!', 'No problem! '],
            'thank you': ['You\'re welcome!', 'No problem! '],
            'jstitans': ['JavaScript Titans is being mentored by PK Sharma sir', 'PK Sharma sir is mentoring JavaScript Titans'],
            'js titans': ['JavaScript Titans is being mentored by PK Sharma sir', 'PK Sharma sir is mentoring JavaScript Titans'],
            'javascript titans': ['JavaScript Titans is being mentored by PK Sharma sir', 'PK Sharma sir is mentoring JavaScript Titans'],
            'python pacers': ['JavaScript Titans is being mentored by Subash Chand Gupta sir', 'Subash Chand Gupta sir is mentoring JavaScript Titans'],
            'byte blasters': ['JavaScript Titans is being mentored by B Pathak sir', 'B Pathak sir is mentoring JavaScript Titans'],
            'code ninjas': ['JavaScript Titans is being mentored by Seema gaur maam', 'seema gaur maam is mentoring JavaScript Titans'],
            'tech troopers': ['JavaScript Titans is being mentored by vikas sangwan sir', 'vikas sangwan sir is mentoring JavaScript Titans'],
            participants: ['You can have atmost 11 players in a team with each player having to play atleast 1 and atmost 3 rounds.'],
            participant: ['You can have atmost 11 players in a team with each player having to play atleast 1 and atmost 3 rounds.'],
            // Add more greetings and responses here
            },

        }
    },
    mounted() {

        document.getElementById("navbar").style.position = "relative";
        const chObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('child1shown');
                } else {
                    entry.target.classList.remove('child1shown');
                }
            });
        });
        const ch2bserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('child2shown');
                } else {
                    entry.target.classList.remove('child2shown');
                }
            });
        });
        const hiddenChw = document.querySelectorAll('.child1hidden')
        const hiddenChe = document.querySelectorAll('.child2hidden')
        hiddenChw.forEach((el) => { chObserver.observe(el) });
        hiddenChe.forEach((el) => { ch2bserver.observe(el) });
        const targetDiv = document.getElementById('navbar');
        const stickyDiv = document.getElementById('subnavbar');
        const std1 = document.getElementById('std1');
        const std2 = document.getElementById('std2');
        // Get buttons and scrollable content elements
        const scrollLeftButton1 = document.getElementById("scrollLeftButton1");
        const scrollRightButton1 = document.getElementById("scrollRightButton1");
        const scrollableContent1 = document.getElementById("scrollableContent1");

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
        const scrollLeftButton2 = document.getElementById("scrollLeftButton2");
        const scrollRightButton2 = document.getElementById("scrollRightButton2");
        const scrollableContent2 = document.getElementById("scrollableContent2");

        scrollLeftButton2.addEventListener("click", function () {
            scrollableContent2.scroll({
                left: scrollableContent2.scrollLeft - 400,
                behavior: "smooth"
            });
        });

        scrollRightButton2.addEventListener("click", function () {
            scrollableContent2.scroll({
                left: scrollableContent2.scrollLeft + 400,
                behavior: "smooth"
            });
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    std1.style.display = 'flex';
                    stickyDiv.style.position = 'relative';
                    std2.innerHTML = 'BATTLE<br>OF<br>BYTES'
                    stickyDiv.style.paddingTop = '3vw';
                    stickyDiv.style.paddingBottom = '3vw';
                    stickyDiv.style.marginTop = '-3vw';
                    stickyDiv.style.backgroundColor = 'rgb(239, 239, 201)'
                } else {
                    stickyDiv.style.backgroundColor = 'rgb(239, 239, 201)'
                    std1.style.display = 'none';
                    std2.innerText = 'BATTLE OF BYTES'
                    stickyDiv.style.marginTop = '0';
                    stickyDiv.style.paddingTop = '0.8vw';
                    stickyDiv.style.paddingBottom = '0.8vw';
                    stickyDiv.style.position = 'fixed';
                    stickyDiv.style.top = '0vw';
                    stickyDiv.style.zIndex = '99';
                }
            });
        });
        observer.observe(targetDiv);

        const ch1Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.body.style.transition = '0.75s';
                    document.body.style.backgroundColor = '#FFC40C';
                } else {
                }
            });
        });
        const hiddenCh1 = document.querySelectorAll('.code1cca')
        hiddenCh1.forEach((el) => { ch1Observer.observe(el) });
        const ch2Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.body.style.transition = '0.75s';
                    document.body.style.backgroundColor = '#564EF3';
                } else {
                }
            });
        });
        const hiddenCh2 = document.querySelectorAll('.code2cca')
        hiddenCh2.forEach((el) => { ch2Observer.observe(el) });
        const ch3Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.body.style.transition = '0.75s';
                    document.body.style.backgroundColor = '#1FD437';
                } else {
                }
            });
        });
        const hiddenCh3 = document.querySelectorAll('.code3cca')
        hiddenCh3.forEach((el) => { ch3Observer.observe(el) });
        const ch4Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.body.style.transition = '0.75s';
                    document.body.style.backgroundColor = '#000';
                } else {
                }
            });
        });
        const hiddenCh4 = document.querySelectorAll('.code4cca')
        hiddenCh4.forEach((el) => { ch4Observer.observe(el) });
        const ch9Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.body.style.transition = '0.75s';
                    document.body.style.backgroundColor = 'rgb(228, 228, 189)';
                } else {
                }
            });
        });
        const hiddenCh9 = document.querySelectorAll('.code9cca')
        hiddenCh9.forEach((el) => { ch9Observer.observe(el) });
    },
    methods: {
        route(e) {
            router.push(e)
        },
        sendmsg(e) {
            var data = {
                service_id: 'service_7aky6ea',
                template_id: 'template_ofnhjyk',
                user_id: 'a6A0lMjNupGkJ3YeA',
                template_params: {
                    'to_email': this.cbox.email,
                    'to_name': this.cbox.name,
                    'message': this.cbox.message
                }
            };
            axios.post('https://api.emailjs.com/api/v1.0/email/send',data,)
            alert('We have received your message! please check your email...')
            this.cbox.visible=false;
        },
        chat(e) {
            let input = e.toLowerCase();
            // Find the key with the highest match count
            let bestMatch = { key: null, count: 0 };
            for (const key in this.responses) {
            const count = input.split(' ').filter(word => key.includes(word)).length;
            if (count > bestMatch.count) {
                bestMatch = { key, count };
            }
            }
            this.resp.push({
                type:'user',
                msg:e

            });
            bestMatch.count > 0
            ? this.resp.push({msg:this.responses[bestMatch.key][Math.floor(Math.random() * this.responses[bestMatch.key].length)],type:'bot'})
            :  this.resp.push({msg: 'Sorry, I didn\'t understand.',type:'bot'})

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
            background-color: rgb(30, 29, 29);
            gap: 1.25vw;
            word-spacing: 0vw;

            .m1 {
                font-size: 4vw;
                flex-shrink: 0;
                width: auto;
                color: rgb(228, 228, 189);
                font-weight: bolder;
                animation: marquee1 25s linear infinite;
                opacity: 0.25;
                z-index: 1;
                margin-top: -2.75vw;
                font-family: f4;
                letter-spacing: 0.2vw;
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
        margin-top: -3vw;
        background-color: rgb(30, 29, 29);
        backdrop-filter: blur(0.8rem);
        border-top: 0.08vw solid black;
        border-bottom: 0.08vw solid black;
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
                color: rgb(30, 29, 29);
            }

            .b1 {
                transition: 0.2s;
                padding-left: 1.5vw;
                padding-right: 1.5vw;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10vw;
                border: 0.1vw solid black;
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
                color: black;
            }

            .mdi:hover {
                opacity: 1;
            }
        }
    }
    .submain.alt{
        display: none;
    }
}

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vw;
    gap: 5vw;
    margin-top: 7.5vw;

    .hero {
        width: 96vw;
        height: auto;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        gap: 2.5vw;
        margin-top: -10vw;

        img {
            width: 80%;
            margin-left: 5%;
            height: auto;
        }

        .t1 {
            font-family: f4;
            font-size: 7vw;
            color:  rgb(30, 29, 29);
        }

        .t2 {
            font-family: f3;
            font-size: 1.8vw;
            width: 80%;
            color:  rgb(30, 29, 29);
        }
    }
    .hero2 {
        width: 100vw;
        height: auto;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        gap: 2.5vw;
        height: 120vh;
        margin-top: -10vw;

        img {
            width: 100%;
            height: auto;
            position: absolute;
            filter: brightness(65%);
        }

        .t1 {
            font-family: f4;
            font-size: 14vw;
            color:  rgb(228, 228, 189);
            text-shadow: 6px 6px 0px rgba(0,0,0,1);
            z-index: 2;
            margin-top: 7vw;
        }

        .t2 {
            font-family: f3;
            font-size: 2.2vw;
            width: 70%;
            margin-top: -2vw;
            color: rgb(228, 228, 189);
            text-shadow: 2px 2px 0px rgba(0,0,0,1);
            border-radius: 2vw;
            padding: 1vw;
        }
    }

    .subdiv {
        width: 70vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: auto;
        background-color: #FFC40C;
        border-radius: 3vw;
        padding: 8vw;
        padding-bottom: 0vw;

        .t1 {
            font-family: f4;
            font-size: 7vw;
            line-height: 8vw;
        }

        .t4 {
            font-family: f1;
            font-size: 1.3vw;
            width: 100%;
            text-align: left;
        }
    }

    .subdiv2 {
        display: flex;
        flex-direction: column;
        gap: 1.5vw;

        .d1 {
            display: flex;
            overflow: auto;
            gap: 2vw;
            height: 18vw;
            width: 100vw;
            padding-left: 12.5vw;
            padding-right: 2.5vw;

            img {
                height: 100%;
                width: auto;
                border-radius: 1.5vw;
            }
        }

        .d1::-webkit-scrollbar {
            display: none;
        }

        .d2 {
            display: flex;
            width: 80%;
            margin-left: 10%;

            .t2 {
                font-family: f3;
                font-size: 1.4vw;
            }
        }

        .d3 {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.33vw;

            button {
                padding-left: 1.73vw;
                padding-right: 1.73vw;
                padding-top: .5vw;
                padding-bottom: .5vw;
                background-color: rgba(47, 47, 47, 1);
                backdrop-filter: blur(1rem);
                border-radius: 10vw;
                transition: 0.2s;
            }

            button:hover {
                background-color: rgb(10, 10, 10);
            }
        }

        .d1sb {
            display: flex;
            width: 70vw;
            margin-left: 15vw;
            gap: 1vw;

            button {
                padding-left: 1vw;
                padding-right: 1vw;
                padding-top: 0.2vw;
                padding-bottom: 0.2vw;
                background-color: rgb(47, 47, 47);
                border-radius: 10vw;
                display: grid;
                justify-content: center;
                align-items: center;
                font-family: f1;
                transition: 0.2s;
            }

            button:hover {
                background-color: rgb(10, 10, 10);
            }
        }
    }

    .subdiv3 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2vw;
        width: 80%;

        .dd1 {
            display: flex;
            flex-direction: column;
            border-radius: 1.6vw;
            gap: 1vw;
            height: 25vw;
            width: 23vw;
            overflow: hidden;
            align-items: center;
            background-color: #07320D;
            padding: 2vw;

            .d1 {
                background-color: #07320D;
                align-items: center;
                display: flex;
                flex-direction: column;
                height: 14.5vw;
                width: 20vw;
                position: relative;

                img {
                    height: 100%;
                    width: auto;
                    border-radius: 100%;
                    border: 0.08vw solid white;
                }
            }

            .t1 {
                font-family: f3;
                font-size: 1.6vw;
                line-height: 1.2vw;
            }

            .t2 {
                font-family: f1;
                font-size: 1.1vw;
                line-height: 1.3vw;
            }
        }
    }

    .subdiv4 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2vw;
        width: 80%;

        .dd1 {
            display: flex;
            flex-direction: column;
            border-radius: 1.6vw;
            gap: 1vw;
            height: 18vw;
            width: 13vw;
            overflow: hidden;
            align-items: center;
            background-color: white;
            padding: 2vw;

            .d1 {
                background-color: #fff;
                align-items: center;
                display: flex;
                flex-direction: column;
                height: 8.5vw;
                width: 11vw;
                position: relative;

                img {
                    height: 100%;
                    width: auto;
                    border-radius: 100%;
                    border: 0.08vw solid black;
                }
            }

            .t1 {
                font-family: f3;
                font-size: 1.4vw;
                line-height: 1.4vw;
                color: black;
            }

            .t2 {
                font-family: f1;
                font-size: 1vw;
                line-height: 1vw;
                color: black;
            }
        }
    }

    .subdiv5 {
        width: 100vw;
        height: 22.5vw;
        display: flex;
        background-color: white;

        .s1 {
            width: 52.5%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 3vw;
            color: black;

            .d1 {
                display: flex;
                align-items: center;
                gap: 2vw;
                margin-bottom: 2vw;

                .t1 {
                    font-family: f3;
                    font-size: 1.7vw;
                    line-height: 2vw;
                    text-align: left;
                }

                img {
                    width: 12.5%;
                    height: auto;
                    flex-shrink: 0;
                }
            }

            .t2 {
                font-family: f1;
                font-size: 1.1vw;
                text-align: left;
            }
        }

        .s2 {
            height: 100%;
            width: 47.5%;
        }
    }

    .subdiv6 {
        width: 100vw;
        height: 22.5vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vw;

        .t1 {
            font-family: f3;
            font-size: 1.7vw;
            line-height: 2vw;
            text-align: center;
        }

        img {
            width: 12.5%;
            height: auto;
            flex-shrink: 0;
            border-radius: 100%;
        }

        .t2 {
            font-family: f1;
            font-size: 1.1vw;
            text-align: center;
        }

        button {
            border-radius: 10vw;
            padding-top: 0.2vw;
            padding-bottom: 0.2vw;
            padding-left: 1.5vw;
            padding-right: 1.5vw;
            border: 0.09vw solid #fff;
            background-color: #aa3d0e;
            transition: 0.2s;
        }

        button:hover {
            filter: contrast(80%);
        }
    }
}

.cboxcont {
    position: fixed;
    justify-content: center;
    align-items: center;
    display: grid;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    .cbox {
        width: 30vw;
        height: 50vh;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 2vw;
        backdrop-filter: blur(1rem);
        border-radius: 1.6vw;
        display: flex;
        flex-direction: column;
        gap: 0.5vw;

        .t1 {
            font-family: f4;
            font-size: 3vw;
            color: black;
        }

        .t2 {
            font-family: f2;
            font-size: 1vw;
            color: black;
            margin-bottom: 1vw;
        }

        .i1 {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 0.4vw;
            text-indent: 1vw;
        }

        button {
            background-color: black;
            padding-left: 2vw;
            padding-right: 2vw;
            padding-top: 0.3vw;
            padding-bottom: 0.3vw;
            border-radius: 2vw;
        }
    }
    .cbox2 {
        width: 40vw;
        height: auto;
        min-height: 40vh;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 2vw;
        backdrop-filter: blur(1rem);
        border-radius: 1.6vw;
        display: flex;
        flex-direction: column;
        gap: 0.5vw;

        .t1 {
            font-family: f4;
            font-size: 3vw;
            color: black;
        }
        .resp{
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: scroll;
            max-height: 40vh;
            margin-bottom: 3vw;
            gap: 0.5VW;

            .t3{
                background-color: rgb(165, 165, 228);
                color: black;
                border-radius: 1vw;
                padding: 0.5vw;
                max-width: 70%;
                font-size: 0.8vw;
            }
        }

        .t2 {
            font-family: f2;
            font-size: 1vw;
            color: black;
            margin-bottom: 1vw;
        }

        .i1 {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 0.4vw;
            text-indent: 1vw;
            position: absolute;
            bottom: 1vw;
            padding-left: 2vw;
            padding-right: 2vw;
            padding-top: 0.3vw;
            padding-bottom: 0.3vw;
            border-radius: 10vw;
            margin-left: 8vw;
            width: 70%;

        }

        button {
            background-color: black;
            padding-left: 2vw;
            padding-right: 2vw;
            padding-top: 0.3vw;
            padding-bottom: 0.3vw;
            border-radius: 2vw;
            bottom: 1vw;
            position: absolute;
        }
    }
}

.foot {
    right: 2vw;
    bottom: 2vw;
    height: 6vw;
    width: 6vw;
    border-radius: 10vw;
    background-color: red;
    position: fixed;

    img {
        width: 100%;
        height: 100%;
        animation: rotateann 15s infinite;
    }
}
.foot2 {
    left: 2vw;
    bottom: 2vw;
    height: 6vw;
    width: 6vw;
    border-radius: 10vw;
    background-color: red;
    position: fixed;

    img {
        width: 100%;
        height: 100%;
        animation: rotateann 15s infinite;
    }
}

@media (max-width: 768px) and (orientation: portrait) {
    .head{
        .smdiv{
            display: none;
        }
        .submain{
            display: none;
        }
        .submain.alt{
            display: flex;
            .sub{
                height: 10vw;
                .title{
                    font-size: 7vw;
                }
                .b1{
                    font-size: 3vw;
                    background-color: white;
                    color: black;
                    height: 5vw;

                }
            }
        }
    }
    .body {
    
        .hero {
            width: 100vw;
    
            img {
                width: 100%;
                margin-left: 5%;
            }
    
            .t1 {
                font-size: 18vw;
            }
    
            .t2 {
                font-size: 4vw;
                width: 90%;
            }
        }
        .subdiv {
            width: 90vw;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            height: auto;
            background-color: #FFC40C;
            border-radius: 3vw;
            padding: 8vw;
            padding-bottom: 0vw;
    
            .t1 {
                font-family: f4;
                font-size: 12vw;
                line-height: 13vw;
                text-align: left;
            }
    
            .t4 {
                font-size: 4.5vw;
            }
        }
    
        .subdiv2 {
            display: flex;
            flex-direction: column;
            gap: 1.5vw;
    
            .d1 {
                display: flex;
                overflow: auto;
                gap: 2vw;
                height: 70vw;
                width: 100vw;
                padding-left: 12.5vw;
                padding-right: 2.5vw;
    
                img {
                    height: 100%;
                    width: auto;
                    border-radius: 2.5vw;
                }
            }
    
            .d1::-webkit-scrollbar {
                display: none;
            }
    
            .d2 {
                display: flex;
                width: 90%;
                margin-left: 5%;
    
                .t2 {
                    font-family: f3;
                    font-size: 5vw;
                }
            }
    
            .d3 {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1.33vw;
    
                button {
                    padding-left: 2.73vw;
                    padding-right: 2.73vw;
                    padding-top: .7vw;
                    padding-bottom: .7vw;
                    font-size: 4vw;
                    background-color: rgba(47, 47, 47, 1);
                    backdrop-filter: blur(1rem);
                    border-radius: 10vw;
                    transition: 0.2s;
                }
    
                button:hover {
                    background-color: rgb(10, 10, 10);
                }
            }
    
            .d1sb {
                display: none;
            }
        }
        .subdiv3 {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 5vw;
            width: 80%;
    
            .dd1 {
                display: flex;
                flex-direction: column;
                border-radius: 4.6vw;
                gap: 1vw;
                height: 45vw;
                width: 35vw;
                overflow: hidden;
                align-items: center;
                background-color: #07320D;
                padding: 2vw;
    
                .d1 {
                    background-color: #07320D;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    height: 25vw;
                    width: 30vw;
                    position: relative;
    
                    img {
                        height: 100%;
                        width: auto;
                        border-radius: 100%;
                        border: 0.08vw solid white;
                    }
                }
    
                .t1 {
                    font-family: f3;
                    font-size: 3.6vw;
                    line-height: 3.8vw;
                }
    
                .t2 {
                    font-family: f1;
                    font-size: 3.1vw;
                    line-height: 3.3vw;
                }
            }
        }
        .subdiv4 {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 5vw;
            width: 80%;
    
            .dd1 {
                display: flex;
                flex-direction: column;
                border-radius: 1.6vw;
                gap: 1vw;
                height: 38vw;
                width: 30vw;
                overflow: hidden;
                align-items: center;
                background-color: white;
                padding: 2vw;
    
                .d1 {
                    background-color: #fff;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    height: 18.5vw;
                    width: 30vw;
                    position: relative;
    
                    img {
                        height: 100%;
                        width: auto;
                        border-radius: 100%;
                        border: 0.08vw solid black;
                    }
                }
    
                .t1 {
                    font-family: f3;
                    font-size: 3.4vw;
                    line-height: 3.5vw;
                    color: black;
                }
    
                .t2 {
                    font-family: f1;
                    font-size: 3vw;
                    line-height: 3vw;
                    color: black;
                }
            }
        }
    
        .subdiv5 {
            width: 100vw;
            height: 100vw;
            display: flex;
            flex-direction: column;
            background-color: white;
    
            .s1 {
                width: 100%;
                height: 65%;
                display: flex;
                flex-direction: column;
                padding: 3vw;
                color: black;
    
                .d1 {
                    display: flex;
                    align-items: center;
                    gap: 2vw;
                    margin-bottom: 2vw;
    
                    .t1 {
                        font-family: f3;
                        font-size: 4.7vw;
                        line-height: 4.7vw;
                        text-align: left;
                    }
    
                    img {
                        width: 22.5%;
                        height: auto;
                        flex-shrink: 0;
                        margin-left: 5%;
                    }
                }
    
                .t2 {
                    font-family: f1;
                    font-size: 3.1vw;
                    text-align: left;
                    width: 85%;
                    margin-left: 7.5%;
                }
            }
    
            .s2 {
                height: 50%;
                width: 100%;
            }
        }
    
        .subdiv6 {
            width: 100vw;
            height: 50vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4vw;
    
            .t1 {
                font-family: f3;
                font-size: 4.7vw;
                line-height: 4vw;
                text-align: center;
            }
    
            img {
                width: 27.5%;
                height: auto;
                flex-shrink: 0;
                border-radius: 100%;
            }
    
            .t2 {
                font-family: f1;
                font-size: 4.1vw;
                text-align: center;
            }
    
            button {
                border-radius: 10vw;
                padding-top: 0.2vw;
                padding-bottom: 0.2vw;
                padding-left: 1.5vw;
                padding-right: 1.5vw;
                border: 0.09vw solid #fff;
                background-color: #aa3d0e;
                transition: 0.2s;
            }
    
            button:hover {
                filter: contrast(80%);
            }
        }
    }
    .cboxcont {
        position: fixed;
        justify-content: center;
        align-items: center;
        display: grid;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    
        .cbox {
            width: 80vw;
            height: 50vh;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 2vw;
            backdrop-filter: blur(1rem);
            border-radius: 1.6vw;
            display: flex;
            flex-direction: column;
            gap: 2vw;
    
            .t1 {
                font-family: f4;
                font-size: 15vw;
                color: black;
            }
    
            .t2 {
                font-family: f2;
                font-size: 3vw;
                color: black;
                margin-bottom: 1vw;
            }
    
            .i1 {
                background-color: rgba(0, 0, 0, 0.2);
                border-radius: 1vw;
                text-indent: 3vw;
                font-size: 5vw;
                color: black;
            }
    
            button {
                background-color: black;
                padding-left: 2vw;
                padding-right: 2vw;
                padding-top: 0.3vw;
                padding-bottom: 0.3vw;
                border-radius: 2vw;
            }
        }
    }
    
    .foot {
        right: 5vw;
        bottom: 5vw;
        height: 17.5vw;
        width: 17.5vw;
        border-radius: 10vw;
        background-color: red;
        position: fixed;
    
        img {
            width: 100%;
            height: 100%;
            animation: rotateann 15s infinite;
        }
    }

}

.child1hidden {
    transition: all 0.9s ease-in-out;
    transform: translateY(10%);
}

.child1shown {
    transform: translateY(00%);
    animation: rotateanne 5s infinite ;
}

.child2hidden {
    transition: all 1.1s ease-in-out;
    opacity: 0;
    transform: scale(0.75);
}

.child2shown {
    opacity: 1;
    transform: scale(1);
}

@keyframes rotateann {
    from {
        transform: rotateZ(0deg);
    }

    /* Start from right */
    to {
        transform: rotateZ(360deg);
    }

    /* Move to left */
}

@keyframes rotateanne {
    0% {
        transform: translateY(5%);
    }

    /* Start from right */
    50% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(5%);
    }
    /* Move to left */
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
  