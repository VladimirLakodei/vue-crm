import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)

const configDB = {
  apiKey: "AIzaSyDO9z9J9aZ7uXqCQzOfyBvDAd_tqISxCm4",
  authDomain: "vue-crm-training.firebaseapp.com",
  databaseURL: "https://vue-crm-training.firebaseio.com",
  projectId: "vue-crm-training",
  storageBucket: "vue-crm-training.appspot.com",
  messagingSenderId: "152266731608",
  appId: "1:152266731608:web:f103eed95fffaa77451a2d",
  measurementId: "G-MR49MHNRPB"
}

firebase.initializeApp(configDB)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
