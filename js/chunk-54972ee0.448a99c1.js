(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54972ee0"],{3835:function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function o(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,r=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done);l=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){c=!0,o=i}finally{try{l||null==n["return"]||n["return"]()}finally{if(c)throw o}}return r}}var r=n("06c5");n("d9e2");function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){return a(e)||o(e,t)||Object(r["a"])(e,t)||l()}},"6a85":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("5530"),o=n("7a23");function r(e,t){var n=Object(o["ref"])(),r=Object(o["ref"])({}),l=function(t){n.value&&(n.value.centerDialogVisible=!0,r.value=Object(a["a"])({},t)),e&&e(t)},c=function(){r.value={},n.value&&(n.value.centerDialogVisible=!0),t&&t()};return[n,r,c,l]}},"9d1a":function(e,t,n){"use strict";var a=n("7a23"),o={class:"page-modal"},r={class:"dialog-footer"},l=Object(a["createTextVNode"])("Cancel"),c=Object(a["createTextVNode"])("Confirm");function i(e,t,n,i,d,u){var f=Object(a["resolveComponent"])("hd-form"),p=Object(a["resolveComponent"])("el-button"),b=Object(a["resolveComponent"])("el-dialog");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(b,{modelValue:e.centerDialogVisible,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.centerDialogVisible=t}),title:"Warning",width:"30%",center:"","destroy-on-close":""},{footer:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",r,[Object(a["createVNode"])(p,{onClick:t[1]||(t[1]=function(t){return e.centerDialogVisible=!1})},{default:Object(a["withCtx"])((function(){return[l]})),_:1}),Object(a["createVNode"])(p,{type:"primary",onClick:e.handleConfirm},{default:Object(a["withCtx"])((function(){return[c]})),_:1},8,["onClick"])])]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(f,Object(a["mergeProps"])(e.pageFromConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formData=t})}),null,16,["modelValue"]),Object(a["renderSlot"])(e.$slots,"default")]})),_:3},8,["modelValue"])])}var d=n("b85c"),u=n("5530"),f=(n("b64b"),n("319e")),p=n("5502"),b=Object(a["defineComponent"])({props:{pageFromConfig:{type:Object,require:!0},defaultInfo:{type:Object,default:function(){return{}}},pageName:{type:String,default:""},otherInfo:{type:Object,default:function(){return{}}}},components:{HdForm:f["a"]},setup:function(e){var t=Object(a["ref"])(!1),n=Object(a["ref"])({}),o=Object(p["b"])(),r=function(){Object.keys(e.defaultInfo).length>0?o.dispatch("system/editPageDataAction",{pageName:e.pageName,editData:Object(u["a"])(Object(u["a"])({},n),e.otherInfo),id:e.defaultInfo.id}):o.dispatch("system/createPageDataAction",{pageName:e.pageName,createData:Object(u["a"])(Object(u["a"])({},n),e.otherInfo)}),t.value=!1};return Object(a["watch"])((function(){return e.defaultInfo}),(function(t){var a,o,r=Object(d["a"])(null===(a=e.pageFromConfig)||void 0===a?void 0:a.formItems);try{for(r.s();!(o=r.n()).done;){var l=o.value;n.value[l.field]=t[l.field]}}catch(c){r.e(c)}finally{r.f()}})),{centerDialogVisible:t,formData:n,handleConfirm:r}}}),m=n("6b0d"),s=n.n(m);const g=s()(b,[["render",i]]);var h=g;t["a"]=h},cacb:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"department"};function r(e,t,n,r,l,c){var i=Object(a["resolveComponent"])("page-search"),d=Object(a["resolveComponent"])("page-contnet"),u=Object(a["resolveComponent"])("page-modal");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(i,{config:e.formconfig},null,8,["config"]),Object(a["createVNode"])(d,{pageName:"department",contnetTableConfig:e.contentTableConfig,onCreateBtnClick:e.handleCreate,onUpdateBtnClick:e.handleUpdate},null,8,["contnetTableConfig","onCreateBtnClick","onUpdateBtnClick"]),Object(a["createVNode"])(u,{ref:"pageModalRef",pageFromConfig:e.modalconfig},null,8,["pageFromConfig"])])}var l=n("3835"),c=n("fe8c"),i=n("3573"),d=n("9d1a"),u={labelWidth:120,formItems:[{label:"id",type:"input",field:"id",placeholder:"请输入查询id"},{label:"部门名称",type:"input",field:"name",placeholder:"请输入部门名称"},{label:"部门领导",type:"input",field:"leader",placeholder:"请输入领导名称"}],itemStyle:{padding:"10px 50px"}},f={header:{title:"部门列表",createBtn:"新建部门"},propList:[{prop:"name",label:"部门名称",minWidth:"100"},{prop:"leader",label:"权限介绍",minWidth:"120"},{prop:"parentId",label:"上级部门",minWidth:"120"},{label:"创建时间",minWidth:"280",slotName:"createAt"},{label:"更新时间",minWidth:"280",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!1,showSelectColumn:!1,childrenProps:{rowKey:"id",treeProp:{children:"children"}},showFooter:!1},p={itemStyle:{},colLayout:{span:24},formItems:[{field:"name",type:"input",label:"部门名称",placeholder:"请输入部门名称"},{field:"intro",type:"input",label:"权限介绍",placeholder:"请输入权限介绍"}]},b=n("6a85"),m=Object(a["defineComponent"])({name:"department",components:{PageSearch:c["a"],PageContnet:i["a"],PageModal:d["a"]},setup:function(){var e=Object(b["a"])(),t=Object(l["a"])(e,4),n=t[0],a=(t[1],t[2]),o=t[3];return{pageModalRef:n,formconfig:u,contentTableConfig:f,modalconfig:p,handleCreate:a,handleUpdate:o}}}),s=n("6b0d"),g=n.n(s);const h=g()(m,[["render",r]]);t["default"]=h}}]);
//# sourceMappingURL=chunk-54972ee0.448a99c1.js.map