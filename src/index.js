import Vue from 'vue'
import App from '@components/App'
import router from './router'
import Acl from 'vue-browser-acl'
import store from './store/index.js'
import debug from 'debug'

const log = debug('demo')

// Sync the user is asynchronously fetch we
// provide a function to fetch it in this case
// we access it through the Vuex store.
const user = () => {
  return store.getters['user/user']
}

// Kick of the application's auth system
store.dispatch('user/init')

// Setup user rules. The `acl` is an acl instance (of browser-acl)
// that the plugin provides you for registering rules and policies
Vue.use(
  Acl,
  user,
  acl => {
    // Only admin users can do admin-stuff
    acl.rule('admin', user => user && user.type === 'admin')
    acl.rule(
      'super',
      user => user && user.type === 'admin' && user.name === 'super',
    )
  },
  { router },
)

Vue.config.productionTip = false
const render = h => h(App)

new Vue({ router, render, store }).$mount('#app', true)
