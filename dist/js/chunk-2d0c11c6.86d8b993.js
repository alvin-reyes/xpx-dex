(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c11c6"],{"453b":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"display-1 font-weight-regular text-left primary--text",class:[t.colorText]},[t._v(" Congratulations ")]),n("div",{staticClass:"ma-2 ml-4 mx-auto"},[n("div",{staticClass:"caption font-weight-black pt-3"},[t._v(" Your transaction has been successfully registered into blockchain. ")])]),t._l(t.txInfo,(function(a){return n("div",{key:a.hash,staticClass:"ma-2 pt-4 ml-4 mx-auto"},[n("span",{staticClass:"body-1 font-weight-black"},[t._v(t._s(a.name)+" Hash :")]),n("span",[n("a",{attrs:{href:t.hrefAdd(a.hash),target:"_blank"}},[t._v(t._s(a.hash))])])])}))],2),n("v-col",{staticClass:"caption d-flex",attrs:{cols:"6"}},[n("custom-buttons",{attrs:{align:"start",arrayBtn:t.getArrayBtn[0]},on:{action:t.action}})],1)],1)},e=[],r=(n("99af"),n("d3b7"),{props:["txInfo","colorText"],data:function(){return{arrayBtn:null}},computed:{getArrayBtn:function(){var t=this.arrayBtn;return t}},components:{"custom-buttons":function(){return n.e("chunk-2d0ba196").then(n.bind(null,"3685"))}},methods:{action:function(t){switch(t){case"viewOnAssets":this.$router.push({path:"/myWallet",query:{item:0}}).catch((function(t){}));break;case"print":break}},hrefAdd:function(t){return"".concat(this.$store.getters.environment.explorerHash.url).concat(t)}},beforeMount:function(){this.arrayBtn=[{viewOnExplorer:{key:"viewOnExplorer",action:"viewOnAssets",disabled:!1,color:"primary",textColor:"white--text",loading:!1,text:" Go to assets"}}]}}),o=r,c=n("2877"),i=n("6544"),l=n.n(i),u=n("62ad"),h=n("0fd9"),d=Object(c["a"])(o,s,e,!1,null,null,null);a["default"]=d.exports;l()(d,{VCol:u["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=chunk-2d0c11c6.86d8b993.js.map