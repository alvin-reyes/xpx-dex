(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dda2e"],{"81dc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ma-2 ml-7 mx-auto"},[a("div",{staticClass:"caption font-weight-light"},[t._v("Account Name:")]),a("div",{staticClass:"ml-1 headline font-weight-regular"},[t.editName?a("v-row",[a("v-form",{ref:"form",staticClass:"row",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-col",{attrs:{cols:"8"}},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{label:t.configForm.accountName.label,minlength:t.configForm.accountName.min,maxlength:t.configForm.accountName.max,counter:t.configForm.accountName.max,color:t.inputStyle,rules:[t.configForm.accountName.rules.required,t.configForm.accountName.rules.max,t.walletIsRepeat]},on:{keyup:t.validateWalletName},model:{value:t.accountNewName,callback:function(e){t.accountNewName="string"===typeof e?e.trim():e},expression:"accountNewName"}})],1),a("v-col",{staticClass:"d-flex justify-start align-center",attrs:{cols:"4"}},[a("v-icon",{staticClass:"font-weight-regular",attrs:{medium:""},on:{click:function(e){return t.editNameF("editChange")}}},[t._v("mdi-content-save-edit")])],1)],1)],1)],1)],1):t._e(),t.editName?t._e():a("v-row",[a("v-col",{staticClass:"d-flex justify-start align-center",attrs:{cols:"6"}},[t._v(" "+t._s(t.nameCurrentWallet)+" "),a("span",{staticClass:"ml-3"},[t.editName?t._e():a("v-icon",{staticClass:"font-weight-regular",attrs:{medium:""},on:{click:function(e){return t.editNameF("editName")}}},[t._v("mdi-pencil")])],1)])],1)],1)])},i=[],c=a("5530"),l=a("2f62"),o=a("a988"),s={data:function(){return{valid:!1,editName:!1,accountNewName:null,walletIsRepeat:!0,configForm:null,inputStyle:"inputStyle"}},computed:Object(c["a"])({},Object(l["c"])("walletStore",["nameCurrentWallet"])),methods:{editNameF:function(t){"editName"===t?(this.accountNewName=this.nameCurrentWallet,this.editName=!this.editName):this.accountNewName&&this.walletIsRepeat&&this.valid&&(Object(o["b"])(this.nameCurrentWallet,this.accountNewName),this.editName=!1)},validateWalletName:function(){var t=this.accountNewName;if(t&&""!==t&&t.length>=this.configForm.accountName.min){if(Object(o["g"])(t))return void(this.walletIsRepeat="".concat(t," already exists, try another wallet name"));this.walletIsRepeat=!0}}},beforeMount:function(){this.configForm={accountName:this.$configForm.walletAccountName("Account name")}}},r=s,m=a("2877"),u=a("6544"),d=a.n(u),f=a("62ad"),N=a("4bd4"),v=a("132d"),h=a("0fd9"),w=a("8654"),g=Object(m["a"])(r,n,i,!1,null,null,null);e["default"]=g.exports;d()(g,{VCol:f["a"],VForm:N["a"],VIcon:v["a"],VRow:h["a"],VTextField:w["a"]})}}]);
//# sourceMappingURL=chunk-2d0dda2e.c03855e6.js.map