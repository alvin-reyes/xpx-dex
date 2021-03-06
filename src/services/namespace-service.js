import Vue from 'vue'
import store from '@/store'
/**
* The alias type
*
* - 0 : No alias
* - 1 : Mosaic id alias
* - 2 : Address alias
*/
function aliasType (type) {
  let typeAlias = null
  if (type === 0) { typeAlias = 'none' }
  if (type === 1) { typeAlias = 'mosaic' }
  if (type === 2) { typeAlias = 'address' }
  return typeAlias
}
/**
 *
 * @param {*} rootNamespaceName
 * @param {*} subnamespaceName
 * @param {*} duration
 * @param {*} type
 */
function buildRegisterNamespaceTransaction (rootNamespaceName, subnamespaceName, duration, type) {
  const durationsend = Vue.prototype.$generalService.calculateDurationforDay(Number(duration))
  let dataRequired = []
  const action = 'registerNamespaceTx'
  const transaction = Vue.prototype.$blockchainProvider.registerNamespaceTransaction(rootNamespaceName, subnamespaceName, durationsend, type)

  return {
    transaction,
    dataRequired,
    action
  }
}
/**
 *
 * @param {*} duration
 */
function getCalRentalFee (duration) {
  const durationByBlock = Vue.prototype.$generalService.calculateDurationforDay(duration)
  return store.getters.environment.rentalFee.namespace * durationByBlock
}

function nameToAssetExample (nameForm = null, nameNamespace = null) {
  let name = null
  if (nameForm && nameNamespace) {
    name = `${nameNamespace}.${nameForm}`
  } else if (nameForm) {
    name = nameForm
  } else {
    name = nameNamespace
  }
  return name
}

/**
 *
 * @param {*} accounts
 */
async function searchNamespacesFromAccounts (accounts) {
  store.commit('namespaceStore/LOADING', true)
  const allNamespaces = []
  for (const account of accounts) {
    const address = Vue.prototype.$blockchainProvider.createRawAddress(account.simpleWallet.address['address'])
    try {
      // Gets array of NamespaceInfo for an account
      const namespaceInfo = await Vue.prototype.$blockchainProvider.getNamespaceFromAccount(address).toPromise()
      if (namespaceInfo && namespaceInfo.length > 0) {
        namespaceInfo.forEach(element => {
          allNamespaces.push(element)
        })
      }
    } catch {
      return
    }
    saveNamespace(allNamespaces)
  }
}
/**
 * validate name namespace
 * @param {*} value
 */
function validateNamespaceName (value) {
  let isvalid = null
  if (value) {
    const formatter = value
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .trim()
    if (formatter !== value) {
      isvalid = `Format not allowed, characters (${Vue.prototype.$generalService.differString(
        formatter,
        value
      )}) not valid`
    } else {
      isvalid = true
    }
  }
  return isvalid
}
/**
 *
 * @param {*} parantName
 * @param {*} childName
 */
function validateRootAndSubNamespace (parantName, childName, typeNamespace = 'rootNamespaceName') {
  let returnValue = {
    rootNamespaceName: null,
    subNamespaceName: null

  }
  const defaultV = 'd'
  if (typeNamespace === 'rootNamespaceName') {
    returnValue.rootNamespaceName = parantName || defaultV
    returnValue.subNamespaceName = parantName || defaultV
  } else {
    returnValue.rootNamespaceName = childName || defaultV
    returnValue.subNamespaceName = parantName || defaultV
  }
  return returnValue
}
/**
 *
 *
 * @param {*} namespaceInfo
 */
async function saveNamespace (namespaceInfo) {
  // const namespacesStorage = this.getNamespacesStorage()
  const namespacesStorage = []
  const names = await Vue.prototype.$blockchainProvider.getNamespacesName(namespaceInfo.map(x => x.id)).toPromise()
  const namespacesFound = []
  for (const info of namespaceInfo) {
    namespacesFound.push({
      id: [info.id.id.lower, info.id.id.higher],
      idToHex: info.id.toHex(),
      namespaceName: names.find(name => name.namespaceId.toHex() === info.id.toHex()),
      namespaceInfo: info
    })
  }
  const namespaceToSaved = namespacesFound.slice(0)
  if (namespacesStorage.length > 0 && namespaceToSaved.length > 0) {
    for (const namespacesSaved of namespacesStorage) {
      const existNamespace = namespaceToSaved.find(b => b.idToHex === namespacesSaved.idToHex)
      if (!existNamespace) {
        namespaceToSaved.push(namespacesSaved)
      }
    }
  }
  store.commit('namespaceStore/SET_NAMESPACES', namespaceToSaved)
}
/**
 *
 * @param {*} duration
 */
function getCalRentalFeeSubNamespace () {
  return store.getters.environment.rentalFee.subnamespace
}

export {
  aliasType,
  buildRegisterNamespaceTransaction,
  getCalRentalFee,
  nameToAssetExample,
  searchNamespacesFromAccounts,
  validateNamespaceName,
  validateRootAndSubNamespace,
  getCalRentalFeeSubNamespace
}
