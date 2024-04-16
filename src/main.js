import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-icons/iconfont/material-icons.css'
import 'vuelidate'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);

app.use(vuetify)
    .use(router)
    .use(store)
    .use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyCoKbAKr4ScBQUFJXlZgrKviKV6hJdnAWo',
        libraries: ['places','visualization'],
      }
    })
    .mount('#app')
