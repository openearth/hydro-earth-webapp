(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)r=i[u],n[r]&&p.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},n={app:0},s=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6845b970"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,a){o=n[t]=[e,a]});e.push(o[2]=a);var s,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t),s=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,o[1](r)}n[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,l.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("c490")},"1c94":function(t,e,o){},"5bbe":function(t,e,o){},"6af9":function(t,e,o){},"71db":function(t,e,o){"use strict";var a=o("1c94"),n=o.n(a);n.a},a505:function(t,e,o){t.exports=o.p+"img/logo.63a7d78d.svg"},a92d:function(t,e,o){"use strict";var a=o("daef"),n=o.n(a);n.a},c490:function(t,e,o){"use strict";o.r(e);o("192e"),o("0d42"),o("b4af");var a=o("55ab"),n=(o("8efa"),o("604e"));o("b4b6");a["default"].use(n["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-toolbar",{attrs:{app:"",tabs:"",dark:"",color:"primary","clipped-left":t.clipped}},[o("v-toolbar-title",{staticClass:"headline"},[o("span",[t._v("Hydro ")]),o("span",{staticClass:"font-weight-light"},[t._v("Earth")])]),o("v-spacer"),o("div",[o("v-tabs",{attrs:{dark:"",color:"primary","slider-color":"yellow"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[o("v-tab",{attrs:{to:"/"}},[t._v("\n                    Home\n                ")]),o("v-tab",{attrs:{to:"/tasks"}},[t._v("\n                    Tasks\n                ")])],1)],1),o("v-tooltip",{attrs:{bottom:""}},[t.isLoggedIn?t._e():o("v-btn",{attrs:{slot:"activator",icon:""},on:{click:t.signInWithGoogle},slot:"activator"},[o("v-icon",[t._v("account_box")])],1),o("span",[t._v("Sign-in")])],1),o("v-tooltip",{attrs:{bottom:""}},[t.isLoggedIn?o("v-btn",{attrs:{slot:"activator",icon:""},on:{click:t.signOut},slot:"activator"},[o("img",{staticStyle:{width:"30px",height:"30px","border-radius":"50%"},attrs:{src:t.$store.state.user.photoURL,alt:"avatar"}})]):t._e(),o("span",[t._v("Sign-out")])],1)],1),o("v-content",[o("router-view")],1),o("v-footer",{attrs:{fixed:t.fixed,app:"",dark:"",color:"primary"}},["/tasks"===t.activeTab?o("v-btn",{attrs:{absolute:"",dark:"",fab:"",small:"",top:"",right:"",color:"green"},on:{click:t.addTask}},[o("v-icon",[t._v("add")])],1):t._e(),o("v-spacer"),o("span",[t._v("© Deltares 2018")]),o("v-spacer")],1)],1)},r=[],i=o("ada6"),l=o("ce05"),c=o("398e"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-flex",{attrs:{xs10:"","offset-xs1":""}},[o("v-subheader",[t._v("Tasks")]),o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tasks,pagination:t.pagination,"rows-per-page-items":[10,25,50,{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}]},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[o("td",[t._v(t._s(e.item.name))]),o("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.author))]),o("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.created))]),o("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.type))]),o("td",{staticClass:"text-xs-left"},[t._v("\n                "+t._s(e.item.status)+"\n                "),t.isRunning(e.item)?o("v-progress-circular",{attrs:{size:15,width:2,indeterminate:"",color:"primary"}}):t._e()],1),o("td",{staticClass:"px-0 ma-0"},[o("v-btn",{staticClass:"primary--text px-0 ma-0",attrs:{icon:"",disabled:!e.item.url},on:{click:function(o){o.stopPropagation(),t.onDownload(e.item.url)}}},[o("v-icon",[t._v("cloud_download")])],1)],1),o("td",{staticClass:"px-0 ma-0"},[o("v-btn",{staticClass:"primary--text ma-0",attrs:{icon:""},on:{click:function(o){o.stopPropagation(),t.onDeleteTask(e.item)}}},[o("v-icon",[t._v("delete")])],1)],1)]}}])}),o("v-dialog",{attrs:{width:"800px"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.showAddTaskDialog=!1}},model:{value:t.showAddTaskDialog,callback:function(e){t.showAddTaskDialog=e},expression:"showAddTaskDialog"}},[o("v-card",[o("v-card-title",{staticClass:"grey lighten-4 py-4 title"},[t._v("\n                Add new task\n            ")]),o("v-container",{staticClass:"pa-4",attrs:{"grid-list-sm":""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{label:"Name","prepend-icon":"notes"},model:{value:t.newTask.name,callback:function(e){t.$set(t.newTask,"name",e)},expression:"newTask.name"}})],1),o("v-flex",{attrs:{xs3:""}},[o("v-select",{attrs:{items:t.modelTypes,label:"Model Type","prepend-icon":"notes"},on:{change:t.onNewTaskModelTypeChanged},model:{value:t.newTask.type,callback:function(e){t.$set(t.newTask,"type",e)},expression:"newTask.type"}})],1),o("v-flex",{attrs:{xs9:""}}),o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{"prepend-icon":"notes",label:"Description"},model:{value:t.newTask.description,callback:function(e){t.$set(t.newTask,"description",e)},expression:"newTask.description"}})],1),o("v-flex",{attrs:{xs12:""}},[o("v-textarea",{attrs:{"prepend-icon":"notes",label:"Parameters",value:"...",rows:"10"},model:{value:t.newTask.parameters,callback:function(e){t.$set(t.newTask,"parameters",e)},expression:"newTask.parameters"}})],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.showAddTaskDialog=!1}}},[t._v("Cancel")]),o("v-btn",{attrs:{flat:""},on:{click:t.onSaveNewTask}},[t._v("Save")])],1)],1)],1)],1)},d=[],p=o("65d7"),h=o("c465"),m=new a["default"];const f="http://v1-dot-hydro-earth.appspot.com";var v={inherit:!0,components:{VDataTable:p["a"],VSubheader:h["a"]},created:function(){m.$on("addTask",this.onAddTask),console.log("Fetching data ...");const t=this;function e(e){fetch(f+"/tasks/",{method:"GET",mode:"cors",cache:"no-cache",headers:{Authorization:e}}).then(t=>{return t.json()}).then(e=>{t.tasks=e.tasks.map(t=>{return{name:t.title||t.name,author:t.createdBy,created:t.createdTime,description:t.description,type:t.type,status:t.status,id:t.id,url:t.url}}),t.nextPageToken=e.next_page_token,console.log("Fetched tasks: "+t.tasks.length)})}function o(e){fetch(f+"/tasks/templates/"+e,{method:"GET",mode:"cors",cache:"no-cache"}).then(t=>{return t.text()}).then(o=>{t.modelTemplates[e]=o,console.log("Fetched model template: "+e),console.log(o)})}e(this.$store.state.userToken),o("wflow"),o("iMOD")},data(){return{showAddTaskDialog:!1,newTask:{name:"",author:"",created:null,description:"",parameters:"",type:"",status:"",id:"",url:""},modelTypes:["wflow","iMOD"],modelTemplates:{},pagination:{sortBy:"created",descending:!0},headers:[{text:"Name",align:"left",value:"name"},{text:"Author",value:"author"},{text:"Created",value:"created"},{text:"Type",value:"type"},{text:"Status",value:"status"},{text:"",value:"download"},{text:"",value:"delete"}],tasks:[],isRunning:function(t){return"UPLOADING_DATA"===t.status||"CREATED"===t.status}}},methods:{onDownload:function(t){const e=document.createElement("a");e.href=t,e.target="_blank",e.click()},onNewTaskModelTypeChanged:function(t){this.newTask.parameters=this.modelTemplates[this.newTask.type]},onDeleteTask:function(t){if(!this.validateUser("delete task"))return;const e=this;let o=JSON.stringify(t);fetch(f+"/tasks/"+t.id+"/delete",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:this.$store.state.userToken},body:o}).then(t=>{return t.json}).then(o=>{console.log(o),e.$forceUpdate();let a=e.tasks.findIndex(e=>e.id===t.id),n=e.tasks.splice(a,1);console.log("Removed: "+JSON.stringify(n))})},onAddTask:function(){this.validateUser("add a new task")&&(this.showAddTaskDialog=!0)},onSaveNewTask:function(){console.log("Saving task ...");let t=this.newTask;console.log(t);var e=JSON.stringify(t);let o=this;fetch(f+"/tasks/add",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:this.$store.state.userToken},body:e}).then(t=>{return t.json()}).then(t=>{console.log("New model: "),console.log(t);let e={name:t.title||t.name,author:t.createdBy,created:t.createdTime,description:t.description,type:t.type,status:t.status,id:t.id,url:t.url};o.tasks.push(e)}),this.showAddTaskDialog=!1},validateUser:function(t){return!!this.$store.state.user||(alert("You need to login to "+t),!1)}}},g=v,b=o("1083"),k=o("9333"),y=o.n(k),x=o("8c06"),w=o("962a"),T=o("153f"),_=o("5ecc"),$=o("02c5"),C=o("2cba"),j=o("2279"),O=o("452f"),V=o("35ba"),A=o("33d2"),S=o("d951"),D=o("070e"),I=o("d705"),P=o("b607"),E=o("2fe2"),z=o("03cc"),L=Object(b["a"])(g,u,d,!1,null,null,null);L.options.__file="TasksPanel.vue";var N=L.exports;y()(L,{VBtn:x["a"],VCard:w["a"],VCardActions:T["a"],VCardTitle:_["a"],VContainer:$["a"],VDataTable:C["a"],VDialog:j["a"],VFlex:O["a"],VIcon:V["a"],VLayout:A["a"],VProgressCircular:S["a"],VSelect:D["a"],VSpacer:I["a"],VSubheader:P["a"],VTextField:E["a"],VTextarea:z["a"]});var M=o("1735"),F=o("b0bb"),q=o("a0e7"),U=o("a802"),B=o("88ef"),W=o.n(B),G={name:"App",components:{VToolbar:i["a"],VTabs:F["a"],VTab:q["a"],VTabItem:U["a"],VLabel:l["a"],VTooltip:c["a"],ModelsPanel:N,VCard:M["a"]},data(){return{activeTab:0,clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Hydro Engine",isLoggedIn:!1}},created:function(){var t=this;W.a.auth().onAuthStateChanged(e=>{t.$store.state.user=e,console.log("State changed."),e&&e.getIdToken(!0).then(function(o){t.$store.state.userToken=o,t.isLoggedIn=!0,console.log("id_token: "+o),console.log(e),vm.$forceUpdate(),console.log("Refreshing ...")}).catch(function(t){})})},methods:{addTask:function(t){m.$emit("addTask")},signInWithGoogle(){var t=this;const e=new W.a.auth.GoogleAuthProvider;W.a.auth().signInWithPopup(e).then(e=>{t.$store.state.user=e.user,t.$store.state.userAccessToken=e.credential.accessToken,t.isLoggedIn=!0,console.log("Current user: "+W.a.auth().currentUser),t.$forceUpdate()}).catch(t=>console.log(t))},signOut(){var t=this;t.isLoggedIn=!1,t.$store.state.user=null,t.$store.state.userToken=null,t.$store.state.userAccessToken=null,W.a.auth().signOut().then(()=>{t.isLoggedIn=!1,t.$store.state.user=null,t.$forceUpdate()}).catch(t=>console.log(error))}}},J=G,R=(o("a92d"),o("dbb7"),o("f57f")),H=o("ee9a"),X=o("242d"),Y=o("7309"),K=o("efaf"),Q=o("6c30"),Z=o("0a94"),tt=o("4335"),et=Object(b["a"])(J,s,r,!1,null,null,null);et.options.__file="App.vue";var ot=et.exports;y()(et,{VApp:R["a"],VBtn:x["a"],VContent:H["a"],VFooter:X["a"],VIcon:V["a"],VSpacer:I["a"],VTab:Y["a"],VTabs:K["a"],VToolbar:Q["a"],VToolbarTitle:Z["a"],VTooltip:tt["a"]});var at=o("5d82"),nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Mapbox",{attrs:{id:"map","access-token":"pk.eyJ1IjoiZ2VubmFkaXkiLCJhIjoiMm9WN3VWQSJ9.b9s_EXvxcqiAbaf5GzrEnA","map-options":{style:"mapbox://styles/gennadiy/cjiw5qm9q21nf2rl7suhlzbm5",center:[0,25],zoom:2},"geolocate-control":{show:!0,position:"top-right"},"scale-control":{show:!0,position:"bottom-right"},"fullscreen-control":{show:!0,position:"top-right"}}})},st=[],rt=o("a6d6"),it=o("b6ac"),lt=o("ad3e"),ct=o("9256"),ut=o("5440"),dt=o("28fa"),pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:o("a505"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),t._v("please join our online\n        "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}))],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}))],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}))],1)],1)],1)},ht=[],mt={data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},ft=mt,vt=(o("d538"),o("930c")),gt=Object(b["a"])(ft,pt,ht,!1,null,null,null);gt.options.__file="HelloWorld.vue";var bt=gt.exports;y()(gt,{VContainer:$["a"],VFlex:O["a"],VImg:vt["a"],VLayout:A["a"]});var kt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:t.mapOptions.hasOwnProperty("container")?t.mapOptions.container:"map"}})},yt=[],xt=o("00b7"),wt=o.n(xt),Tt={data(){return{map:null}},props:{accessToken:{type:String,required:!0},mapOptions:{type:Object,required:!0},navControl:{type:Object,default:()=>{return{show:!0,position:"top-right"}}},geolocateControl:{type:Object,default:()=>{return{show:!1,position:"top-left",options:{}}}},scaleControl:{type:Object,default:()=>{return{show:!1,position:"top-left",options:{}}}},fullscreenControl:{type:Object,default:()=>{return{show:!1,position:"top-right"}}}},mounted(){const t=this.mapInit();this.map=t,this.addControls(t),this.registerEvents(t)},methods:{mapInit(){wt.a.accessToken=this.accessToken,this.mapOptions.hasOwnProperty("container")||(this.mapOptions.container="map");const t=new wt.a.Map(this.mapOptions);return this.$emit("map-init",t),t},registerEvents(t){t.on("load",()=>{this.$emit("map-load",t)}),t.on("mousemove",e=>{this.$emit("map-mousemove",t,e)}),t.on("click",e=>{this.$emit("map-click",t,e)}),t.on("contextmenu",e=>{this.$emit("map-contextmenu",t,e)}),t.on("resize",()=>{this.$emit("map-resize",t)}),t.on("webglcontextlost",e=>{this.$emit("map-webglcontextlost",t,e)}),t.on("webglcontextrestored",e=>{this.$emit("map-webglcontextrestored",t,e)}),t.on("remove",()=>{this.$emit("map-remove",t)}),t.on("sourcedataloading",e=>{this.$emit("map-sourcedataloading",t,e)}),t.on("touchstart",e=>{this.$emit("map-touchstart",t,e)}),t.on("movestart",e=>{this.$emit("map-movestart",t,e)}),t.on("move",e=>{this.$emit("map-move",t,e)}),t.on("moveend",e=>{this.$emit("map-moveend",t,e)}),t.on("error",e=>{this.$emit("map-error",t,e)}),t.on("data",e=>{this.$emit("map-data",t,e)}),t.on("styledata",e=>{this.$emit("map-styledata",t,e)}),t.on("mouseup",e=>{this.$emit("map-mouseup",t,e)}),t.on("touchcancel",e=>{this.$emit("map-touchcancel",t,e)}),t.on("sourcedata",e=>{this.$emit("map-sourcedata",t,e)}),t.on("dataloading",e=>{this.$emit("map-dataloading",t,e)}),t.on("styledataloading",e=>{this.$emit("map-styledataloading",t,e)}),t.on("dblclick",e=>{this.$emit("map-dblclick",t,e)}),t.on("render",()=>{this.$emit("map-render",t)}),t.on("mouseout",e=>{this.$emit("map-mouseout",t,e)}),t.on("mousedown",e=>{this.$emit("map-mousedown",t,e)}),t.on("mouseover",e=>{this.$emit("map-mouseover",t,e)}),t.on("touchend",e=>{this.$emit("map-touchend",t,e)}),t.on("touchmove",e=>{this.$emit("map-touchmove",t,e)}),t.on("zoomstart",e=>{this.$emit("map-zoomstart",t,e)}),t.on("zoomend",e=>{this.$emit("map-zoomend",t,e)}),t.on("zoom",e=>{this.$emit("map-zoom",t,e)}),t.on("boxzoomcancel",e=>{this.$emit("map-boxzoomcancel",t,e)}),t.on("boxzoomend",e=>{this.$emit("map-boxzoomend",t,e)}),t.on("boxzoomstart",e=>{this.$emit("map-boxzoomstart",t,e)}),t.on("rotatestart",e=>{this.$emit("map-rotatestart",t,e)}),t.on("rotate",e=>{this.$emit("map-rotate",t,e)}),t.on("rotateend",e=>{this.$emit("map-rotateend",t,e)}),t.on("dragend",e=>{this.$emit("map-dragend",t,e)}),t.on("drag",e=>{this.$emit("map-drag",t,e)}),t.on("dragstart",e=>{this.$emit("map-dragstart",t,e)}),t.on("pitch",e=>{this.$emit("map-pitch",t,e)}),t.on("pitchstart",e=>{this.$emit("map-pitchstart",t,e)}),t.on("pitchend",e=>{this.$emit("map-pitchend",t,e)})},addControls(t){if(this.navControl.show){const e=new wt.a.NavigationControl;t.addControl(e,this.navControl.position)}if(this.geolocateControl.show){const e=new wt.a.GeolocateControl(this.geolocateControl.options);t.addControl(e,this.geolocateControl.position),e.on("geolocate",t=>{this.$emit("geolocate-geolocate",e,t)}),e.on("trackuserlocationstart",()=>{this.$emit("geolocate-trackuserlocationstart",e)}),e.on("trackuserlocationend",()=>{this.$emit("geolocate-trackuserlocationend",e)}),e.on("error",t=>{this.$emit("geolocate-error",e,t)})}if(this.scaleControl.show){const e=new wt.a.ScaleControl(this.scaleControl.options);t.addControl(e,this.scaleControl.position)}if(this.fullscreenControl.show){const e=new wt.a.FullscreenControl;t.addControl(e,this.fullscreenControl.position)}}},beforeDestroy(){this.map.remove()}},_t=Tt,$t=Object(b["a"])(_t,kt,yt,!1,null,null,null);$t.options.__file="Mapbox.vue";var Ct=$t.exports,jt=function(t){function e(){return Object(rt["a"])(this,e),Object(lt["a"])(this,Object(ct["a"])(e).apply(this,arguments))}return Object(it["a"])(e,t),e}(dt["b"]);jt=ut["a"]([Object(dt["a"])({components:{HelloWorld:bt,VCard:M["a"],Mapbox:Ct}})],jt);var Ot=jt,Vt=Ot,At=(o("71db"),Object(b["a"])(Vt,nt,st,!1,null,null,null));At.options.__file="Home.vue";var St=At.exports,Dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tasks"},[o("TasksPanel")],1)},It=[],Pt={inherit:!0,components:{TasksPanel:N},created:function(){},methods:{}},Et=Pt,zt=(o("dd32"),Object(b["a"])(Et,Dt,It,!1,null,null,null));zt.options.__file="Tasks.vue";var Lt=zt.exports;a["default"].use(at["a"]);var Nt=new at["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:St},{path:"/tasks",name:"tasks",component:Lt},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"3c91"))}}]}),Mt=o("f610");a["default"].use(Mt["a"]);var Ft=new Mt["a"].Store({state:{addTask:!1},mutations:{addTask:function(t){t.addTask=!0,console.log("change state")}},actions:{onShowAddTaskDialog:function(t){}}}),qt=o("c02d");Object(qt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Ut={apiKey:"AIzaSyCOjCagAB6rrKXBmMa_qRuDhHY67l3W0OY",authDomain:"hydro-earth.firebaseapp.com",databaseURL:"https://hydro-earth.firebaseio.com",projectId:"hydro-earth",storageBucket:"hydro-earth.appspot.com",messagingSenderId:"578920177147"};W.a.initializeApp(Ut),a["default"].config.productionTip=!1,new a["default"]({router:Nt,store:Ft,render:function(t){return t(ot)}}).$mount("#app")},d538:function(t,e,o){"use strict";var a=o("6af9"),n=o.n(a);n.a},daef:function(t,e,o){},dd32:function(t,e,o){"use strict";var a=o("5bbe"),n=o.n(a);n.a}});
//# sourceMappingURL=app.fc17e045.js.map