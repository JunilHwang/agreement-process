import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from './middleware/gauth.js'

const googleKey = require('./google/key.json')

Vue.config.productionTip = false

Vue.prototype.getApiData = async promise => {
  const response = await promise
  const data = response.data
  if (!data.success) throw data.err
  return data
}

Vue.use(GAuth, googleKey.config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
