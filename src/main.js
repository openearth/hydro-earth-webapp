import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase';
const config = {
    apiKey: 'AIzaSyCOjCagAB6rrKXBmMa_qRuDhHY67l3W0OY',
    authDomain: 'hydro-earth.firebaseapp.com',
    databaseURL: 'https://hydro-earth.firebaseio.com',
    projectId: 'hydro-earth',
    storageBucket: 'hydro-earth.appspot.com',
    messagingSenderId: '578920177147',
};
firebase.initializeApp(config);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map