import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// https://www.youtube.com/watch?v=MoDIpTuRWfM&ab_channel=SuboptimalEngineer
import App from './App.vue'
import router from './router'
import store from './store'

library.add(fas)

createApp(App).use(store).component('fa', FontAwesomeIcon).use(router).mount('#app')