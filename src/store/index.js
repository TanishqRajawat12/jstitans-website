import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist';

const cookieName = 'data';
const storageKey = 'data';
const encryptionToken = 'data';
const vuexLocal = new VuexPersistence({
  storage: {
    getItem: () => {
      // Get the store from local storage.
      const store = window.localStorage.getItem(storageKey);

      if (store) {
          return JSON.parse(store);
      }

      return null;
    },
    setItem: (key, value) => {
      // Encrypt the store using our encryption token stored in cookies.
      const store = value;

      // Save the encrypted store in local storage.
      return window.localStorage.setItem(storageKey, store);
    },
    removeItem: () => window.localStorage.removeItem(storageKey),
  },
});
export default createStore({
  plugins: [vuexLocal.plugin],
  state: {
    user:null,
    players:[],
    userdata:{},
    teams:[]
  },
  mutations: {
    setuser(state,user){
      state.user=user;
    },
    setplayers(state,user){
      state.players=user;
    },
    setuserdata(state,user){
      state.userdata=user;
    },
    setteams(state,user){
      state.teams=user;
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {}
})
