import Vue from 'vue'
import store from '@/store'
import {
  TransactionType
} from 'tsjs-xpx-chain-sdk/dist/src/model/transaction/TransactionType'
/**
 *
 * @param {*} items
 */
function getAllOffer (items, mosaicUpdate = null) {
  const pass = []
  const x = items.filter(x => x.data.length > 0)
  Object.freeze(x)
  if (x.length > 0) {
    x.forEach(element => {
      if (element.info.mosaicInfo) {
        const price = sumAllAmount(element.data.map(x => x.price)) / element.data.length
        const amount = sumAllAmount(element.data.map(x => x.amount.compact()))
        const totalAssets = Vue.prototype.$generalService.amountFormatter(
          amount,
          element.info.mosaicInfo[0].mosaicInfo.properties.divisibility
        )
        const offersBuy = items.filter(
          x => x.info.mosaicIdHex === element.info.mosaicIdHex && x.type === 'buy'
        )
        const offersSell = items.filter(
          x => x.info.mosaicIdHex === element.info.mosaicIdHex && x.type === 'sell'
        )
        if (!pass.find(x => x.tableData.text === element.info.text)) {
          const pas = {
            tableData: {
              text: element.info.text,
              type: element.type,
              totalAssetAvailable: totalAssets,
              averagePrice: price,
              info: element.info,
              priceArray: element.data.map(x => x.price),
              twentyFourChange: `${(
                (Math.floor(Math.random() * 20) + Math.floor(Math.random() * 1000)) /
                100
              ).toFixed(2)}`
            },
            allOffers: {
              sell: offersSell.length > 0 ? offersSell[0].data : offersSell,
              buy: offersBuy.length > 0 ? offersBuy[0].data : offersBuy
            }
          }
          updateAllOffer(pas, store.getters['offersStore/offerAll'])
        }
      }
    })
  }

  const remove = items.filter(x => x.data.length === 0)
  if (remove.length > 0) {
    removeOffer(remove, mosaicUpdate)
  }
}
function removeOffer (offer, mosaicFilterUpEvent) {
  const dataValue = validateDeleteOffer(offer)
  dataValue.forEach(x => {
    if (x.deleteV) {
      store.commit('offersStore/DELETE_OFFER_ALL', x.mosaicIdHex)
    }
  })
}
function validateDeleteOffer (oferts) {
  let newArray = []
  let arrayTemporal = []
  for (var i = 0; i < oferts.length; i++) {
    arrayTemporal = newArray.filter(resp => resp['mosaicIdHex'] === oferts[i]['info']['mosaicIdHex'])
    if (arrayTemporal.length > 0) {
      newArray[newArray.indexOf(arrayTemporal[0])]['validateDelete'].push(oferts[i]['type'])
    } else {
      newArray.push({
        'mosaicIdHex': oferts[i]['info']['mosaicIdHex'],
        'validateDelete': [oferts[i]['type']]
      })
    }
  }
  return newArray.map(x => {
    return {
      mosaicIdHex: x.mosaicIdHex,
      deleteV: Boolean(x.validateDelete.length === 2)
    }
  })
}
function updateAllOffer (newOffers, alloffert) {
  let newdata = []
  store.commit('offersStore/SET_OFFER_ALL', newdata)
  for (let x of alloffert) {
    if (x.tableData.info.mosaicIdHex === newOffers.tableData.info.mosaicIdHex) {
      store.commit('offersStore/PUSH_OFFER_ALL', newOffers)
    } else {
      store.commit('offersStore/PUSH_OFFER_ALL', x)
    }
  }
  const valor = newdata.find(x => x.tableData.info.mosaicIdHex === newOffers.tableData.info.mosaicIdHex)
  if (!valor) {
    store.commit('offersStore/PUSH_OFFER_ALL', newOffers)
  }
  return newdata
}
/**
 *
 * @param {*} data
 */
function sumAllAmount (data) {
  let total = 0
  data.forEach(element => {
    total = total + element
  })

  return total
}
/**
 *
 * @param {*} data
 */
function filtersAssetsFunc (data) {
  let valor = []
  if (JSON.parse(JSON.stringify(data)).length > 0) {
    valor = data.map(item => {
      item.text = item.mosaicIdHex
      if (
        item.mosaicInfo !== null &&
        item.mosaicInfo !== undefined &&
        item.mosaicInfo[0] &&
        item.mosaicInfo[0].mosaicNames.names.length > 0
      ) {
        item.text = item.mosaicInfo[0].mosaicNames.names[0].name
      }
      return item
    })
  }
  return valor
}
/**
 *
 * @param {*} data
 */
async function validateExpireOffer (data, typeOffer) {
  try {
    const tx = await Vue.prototype.$blockchainProvider.getOutgoingTransactions(data.owner).toPromise()
    const txFilter = filterTxOfferForType(TransactionType.ADD_EXCHANGE_OFFER, tx)
    const pushTx = filterTxOffer(txFilter, data, typeOffer)
    const block = store.getters['nodeStore/currentBlock']
    const offer = findOffer(pushTx, data, typeOffer)
    const blockHeight = pushTx[0].transactionInfo.height.compact()
    let dataRet = null
    for (let index = 0; index < offer.length; index++) {
      const element = offer[index]
      const rest = block - blockHeight
      const expireIn = element.duration.compact() - rest
      if (rest >= element.duration.compact()) {
        dataRet = { expire: true, infoExpire: 0 }
        break
      } else {
        dataRet = { expire: false, infoExpire: { expireInitial: expireIn, blockHeight: blockHeight, duration: element.duration.compact() } }
      }
    }
    return dataRet
  } catch (error) {
    console.error('----Search namespaces from accoun ts error----', error)
  }
  return true
}
/**
 *
 * @param {*} type
 */
function filterTxOfferForType (type, tx = []) {
  const txs = tx.filter(x => x.type === type)
  return txs
}
/**
 *
 * @param {*} tx
 * @param {*} txCompare
 */
function filterTxOffer (tx, txCompare, typeOffer) {
  let pushTx = []
  for (let x of tx) {
    let offertTx = x.offers.filter(l =>
      l.mosaicId.toHex() === txCompare.mosaicId.toHex() &&
      l.cost.compact() === txCompare.initialCost.compact() &&
      l.mosaicAmount.compact() === txCompare.initialAmount.compact() &&
      l.type === typeOffer)
    if (offertTx.length > 0) {
      pushTx.push(x)
    }
  }
  return pushTx
}
/**
 * TODO
 * @param {*} tx
 * @param {*} txCompare
 */
function findOffer (tx, txCompare, typeOffer) {
  let pushOffer = []
  // reduce((a, b) => Math.max(a, b))
  for (let x of tx) {
    let offertTx = x.offers.find(l =>
      l.mosaicId.toHex() === txCompare.mosaicId.toHex() &&
      l.cost.compact() === txCompare.initialCost.compact() &&
      l.mosaicAmount.compact() === txCompare.initialAmount.compact() &&
      l.type === typeOffer)
    if (offertTx) {
      pushOffer.push(offertTx)
    }
  }
  return pushOffer
}
export {
  getAllOffer,
  filtersAssetsFunc,
  validateExpireOffer

}