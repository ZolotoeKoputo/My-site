import Vue from 'vue'
import App from './App.vue'

import App404 from 'D:/javaScript/My-site/src/components/App404.vue'
import AppDeveloperVersion from 'D:/javaScript/My-site/src/components/AppDeveloperVersion.vue'
import AppHeader from 'D:/javaScript/My-site/src/components/AppHeader.vue'
import AppMainPage from 'D:/javaScript/My-site/src/components/AppMainPage.vue'
import AppTitle from 'D:/javaScript/My-site/src/components/AppTitle.vue'


Vue.component('App404', App404);
Vue.component('AppDeveloperVersion', AppDeveloperVersion);
Vue.component('AppHeader', AppHeader);
Vue.component('AppMainPage', AppMainPage);
Vue.component('AppTitle', AppTitle);


new Vue({
  el: '#app',
  render: h => h(App)
})
