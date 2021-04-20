import Vue from 'vue'
import App from './App'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faFontAwesome, faTwitter, faFacebook, faGithub, faLinkedin, faHive, faStackOverflow, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)
library.add(faFontAwesome, faTwitter, faLinkedin, faGithub, faHive, faStackOverflow, faTelegram)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
