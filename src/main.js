import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { GeneralService } from './services/general'
import { BlockchainProvider } from './services/blockchain-provider'
import { StorageService } from './services/storage'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'
import VueLodash from 'vue-lodash'
Vue.config.productionTip = false
// Vue.use(axios)
const options = { name: 'lodash' } // customize the way you want to call it
Vue.use(VueLodash, options)
Vue.use(VueClipboard)
// Define prototype
Vue.prototype.$generalService = new GeneralService()
Vue.prototype.$storage = new StorageService(localStorage)
const configIntegration = async function () {
  try {
    const configInfo = await axios.get('../config/config.json')
    console.log('configInfo', configInfo)
    store.commit('ADD_CONFIG_INFO', configInfo.data)
    const environment = getEnvironment(configInfo.data)
    Vue.prototype.$configInfo = configInfo
    Vue.prototype.$environment = environment
    Vue.prototype.$blockchainProvider = new BlockchainProvider(
      environment.connectionNodes.nodes[0],
      environment.connectionNodes.protocol,
      environment.connectionNodes.networkType
    )
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  } catch (e) {
    console.error(e)
  }
}
const getEnvironment = function (configInfo) {
  let environment = null
  switch (configInfo.version) {
    case 'TEST_NET':
      environment = configInfo.environment.TESTNET
      break
    case 'MAIN_NET':
      environment = configInfo.environment.MAINNET
      break
    case 'PRIVATE':
      environment = configInfo.environment.PRIVATE
      break
  }
  return environment
}

configIntegration()
