<template>
  <div>
    <router-view/>
  </div>
</template>
<script>
import getFirebaseInstances from './fb';
import store from './store';
import { mapState } from 'vuex';
export default {
  name: 'App',
  methods:{
    'userdata.lastlogin'(newVal){
      console.log('reloading');
        window.location.reload();
    }
  },
  watch:{
  },
  mounted(){
    document.title='Battle Of Bytes - JSTitans';
    if(store.state.user!==null){
      getFirebaseInstances().db.collection('users').doc(store.state.user.email).onSnapshot(snap=>{
        store.commit('setuserdata',snap.data());
      })
    }
    getFirebaseInstances().db.collection('players').onSnapshot(snap=>{
      let arr =[];
      snap.docs.forEach(i=>{
        arr.push(i.data())
      })
        store.commit('setplayers',arr);
    })
    getFirebaseInstances().db.collection('teams').onSnapshot(snap=>{
      let arr =[];
      snap.docs.forEach(i=>{
        arr.push(i.data())
      })
        store.commit('setteams',arr);
    })
  },
  computed:{
    ...mapState(['userdata']),
  }
}
</script>

<style>
@font-face {
	font-family: f1;
	src: url('./assets/fonts/1.woff');
}
@font-face {
	font-family: f2;
	src: url('./assets/fonts/2.woff');
}
@font-face {
	font-family: f3;
	src: url('./assets/fonts/3.woff');
}
@font-face {
	font-family: f4;
	src: url('./assets/fonts/f4.woff');
}
#app {
  font-family: f3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
a{
  color: white;
  text-decoration: none;
}
body{
  background-color: rgb(228, 228, 189);
}
</style>
