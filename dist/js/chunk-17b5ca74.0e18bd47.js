(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17b5ca74"],{"60ec":function(t,a,e){t.exports=e.p+"img/icon-mosaic.c29be591.svg"},a371:function(t,a,e){var s={"./light/icon-mosaic.svg":"60ec"};function i(t){var a=n(t);return e(a)}function n(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="a371"},da09:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-row",{staticClass:"ml-3 d-flex mx-auto  justify-lg-end"},[s("v-col",{staticClass:"d-flex  ",attrs:{xs:"12",sm:"6",md:"6",lg:"4",xl:"4"}},[s("div",[s("div",{staticClass:"subtitle-1 font-weight-black"},[t._v("Available balances")]),s("div",{staticClass:"subtitle-1 ma-0 pa-0"},[s("img",{staticClass:"pr-1",staticStyle:{"vertical-align":"middle"},attrs:{src:e("a371")("./"+t.theme+"/icon-mosaic.svg"),alt:"logo",height:"20"}}),s("span",{staticClass:"subheading",domProps:{textContent:t._s(t.getAvailableBalance["part1"])}}),s("span",{staticClass:"subheading mr-1",domProps:{textContent:t._s(t.getAvailableBalance["part2"])}}),s("span",{staticClass:"subheading text-uppercase"},[t._v(t._s(t.nameMosaic))])]),s("div",{staticClass:"caption font-italic font-weight-thin mx-auto"},[t._v("USD "+t._s(t._f("toCurrency")(t.getBalanceUsd.availableBalance)))])])]),s("v-col",{staticClass:"d-flex ",attrs:{xs:"12",sm:"6",md:"6",lg:"4",xl:"4"}},[s("div",[s("div",{staticClass:"subtitle-1 font-weight-black"},[t._v("On hold balances")]),s("div",{staticClass:"subtitle-1 ma-0 pa-0"},[s("img",{staticClass:"pr-1",staticStyle:{"vertical-align":"middle"},attrs:{src:e("a371")("./"+t.theme+"/icon-mosaic.svg"),alt:"logo",height:"20"}}),s("span",{staticClass:"subheading mr-1"},[t._v(t._s(t.getOnHoldBalance))]),s("span",{staticClass:"subheading text-uppercase"},[t._v(t._s(t.nameMosaic))])]),s("div",{staticClass:"caption font-italic font-weight-thin mx-auto"},[t._v("USD "+t._s(t._f("toCurrency")(t.getBalanceUsd.onHoldBalance)))])])]),s("v-col",{staticClass:"d-flex ",attrs:{xs:"12",sm:"6",md:"6",lg:"4",xl:"4"}},[s("div",[s("div",{staticClass:"subtitle-1 font-weight-black"},[t._v("Total balance")]),s("div",{staticClass:"subtitle-1 ma-0 pa-0"},[s("img",{staticClass:"pr-1",staticStyle:{"vertical-align":"middle"},attrs:{src:e("a371")("./"+t.theme+"/icon-mosaic.svg"),alt:"logo",height:"20"}}),s("span",{staticClass:"subheading mr-1"},[t._v(t._s(t.getTotalBalance))]),s("span",{staticClass:"subheading text-uppercase"},[t._v(t._s(t.nameMosaic))])]),s("div",{staticClass:"caption font-italic font-weight-thin mx-auto"},[t._v("USD "+t._s(t._f("toCurrency")(t.getBalanceUsd.totalBalance)))])])])],1)},i=[],n=(e("4160"),e("b0c0"),e("a9e3"),e("ac1f"),e("5319"),e("159b"),e("b85c")),c=e("5530"),o=e("2f62"),l={data:function(){return{theme:"light",nameMosaic:null}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(o["c"])("coingeckoStore",["xpxInformation"])),Object(o["c"])("offersStore",["offerAll","type"])),Object(o["c"])("accountStore",["currentAccount"])),{},{getBalanceUsd:function(){var t="usd",a={availableBalance:0,onHoldBalance:0,totalBalance:0};return this.xpxInformation&&(a.availableBalance=this.coingecko(this.xpxInformation,this.totalBalance(),t),a.onHoldBalance=this.coingecko(this.xpxInformation,this.getOnHoldBalance,t),a.totalBalance=this.coingecko(this.xpxInformation,this.getTotalBalance,t)),a},getAvailableBalance:function(){return this.$generalService.getDataPart(this.totalBalance(),this.$store.getters.environment.mosaic.divisibility)},getOnHoldBalance:function(){return this.$generalService.amountFormatter(this.onHoldBalance(this.offerAll),this.$store.getters.environment.mosaic.divisibility)},getTotalBalance:function(){var t=0,a=0;t=this.$store.getters["accountStore/totalBalance"](this.$store.getters.environment.mosaic.id),a=this.onHoldBalance(this.offerAll);var e=t+a;return this.$generalService.amountFormatter(e,this.$store.getters.environment.mosaic.divisibility)}}),beforeMount:function(){this.nameMosaic=this.$store.getters.environment.mosaic.name,this.searchInformationXPX(this.$store.getters)},methods:Object(c["a"])(Object(c["a"])({},Object(o["b"])("coingeckoStore",["searchInformationXPX"])),{},{onHoldBalance:function(t){var a=this.filtersOfferts(t,this.currentAccount.publicKey,"buy"),e=0;if(a&&a.length>0){var s,i=Object(n["a"])(a);try{for(i.s();!(s=i.n()).done;){var c=s.value;e+=c.initialCost.compact()}}catch(o){i.e(o)}finally{i.f()}}return e},totalBalance:function(){var t=this.$generalService.amountFormatter(this.$store.getters["accountStore/totalBalance"](this.$store.getters.environment.mosaic.id),this.$store.getters.environment.mosaic.divisibility);return t},coingecko:function(t,a,e){var s=null;return s=void 0!==t.market_data.current_price[e]?Number(a.replace(/,/g,""))*t.market_data.current_price[e]:0,s},filtersOfferts:function(t,a,e){var s=[];return t.forEach((function(t){t.allOffers[e].length>0&&t.allOffers[e][0].owner.publicKey===a&&s.push(t.allOffers[e][0])})),s}})},r=l,u=e("2877"),m=e("6544"),f=e.n(m),g=e("62ad"),h=e("0fd9"),v=Object(u["a"])(r,s,i,!1,null,null,null);a["default"]=v.exports;f()(v,{VCol:g["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=chunk-17b5ca74.0e18bd47.js.map