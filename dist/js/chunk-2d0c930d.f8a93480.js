(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c930d"],{"57a6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.offerAlldata?a("simple-table",{attrs:{dataTh:t.dataTh,type:"delete",dataTable:t.offerAlldata,mosaicInfo:[]},on:{action:t.action}}):t._e()],1)},n=[],r=(a("4de4"),a("d81d"),a("a9e3"),a("d3b7"),a("b85c")),o=a("5530"),c=a("2f62"),l={data:function(){return{dataTh:["Type","Assets","Initial Quantity","Quantity Available","Price (XPX)","Total (XPX)"]}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["c"])("offersStore",["offerAll"])),Object(c["c"])("accountStore",["currentAccount"])),{},{offerAlldata:function(){return this.buildData(this.offerAll)}}),components:{"simple-table":function(){return a.e("chunk-23527b85").then(a.bind(null,"ce20"))}},methods:{action:function(t){this.$store.commit("mosaicExchange/SET_EXCHANGE_DELETE",t),this.$router.push({path:"/deleteOffer"})},buildData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[];if(t.length>0){var a,i=Object(r["a"])(t);try{for(i.s();!(a=i.n()).done;){var n=a.value,o=this.typeBuildData("buy",n)[0],c=this.typeBuildData("sell",n)[0];o&&e.push(o),c&&e.push(c)}}catch(l){i.e(l)}finally{i.f()}return e}},calcPrice:function(t,e){return t*e},typeBuildData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=[];return a.allOffers[e]&&a.allOffers[e].length>0&&(i=a.allOffers[e].filter((function(e){return e.owner.publicKey===t.currentAccount.publicKey})).map((function(i){var n=t.$generalService.amountFormatter(i.initialAmount.compact(),a.tableData.info.mosaicInfo[0].mosaicInfo.properties.divisibility),r=t.$generalService.amountFormatter(i.amount.compact(),a.tableData.info.mosaicInfo[0].mosaicInfo.properties.divisibility),o=t.$generalService.amountFormatter(i.initialCost.compact(),6),c=t.$generalService.addZerosQuantity(a.tableData.info.mosaicInfo[0].mosaicInfo.properties.divisibility,1),l=t.$generalService.amountFormatter(t.calcPrice(i.price,Number(c)),6);return{type:e,assets:a.tableData.info.text,initialQuantity:n,quantityAvailable:r,price:l,initialCost:o,exchange:i}}))),i}}},u=l,s=a("2877"),f=Object(s["a"])(u,i,n,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0c930d.f8a93480.js.map