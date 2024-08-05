import{C as W,E as _,F as V,H as me,L as F,M as q,N as g,O as d,Q as Ae,S as G,a as M,b as le,d as de,da as x,e as fe,fb as ke,g as T,gb as Ee,h as y,i as U,j as R,jb as Z,k as N,la as I,o as pe,p as he,xb as Te,z as ge}from"./chunk-CV6BSBOB.js";import{F as Y,J as be,K as J,O as ye,P as C,Q as m,c as we,g as X,l as ve,n as _e}from"./chunk-W7LYWJAE.js";import{h as E}from"./chunk-HFBR4SKI.js";var Ue="firebase",We="10.12.2";C(Ue,We,"app");var $=new ke("ANGULARFIRE2_VERSION");var Ve=(e,r)=>{let t=r?[r]:ye(),n=[];return t.forEach(i=>{i.container.getProvider(e).instances.forEach(a=>{n.includes(a)||n.push(a)})}),n},S=class{constructor(){return Ve(qe)}},qe="app-check";function Q(){}var j=class{zone;delegate;constructor(r,t=fe){this.zone=r,this.delegate=t}now(){return this.delegate.now()}schedule(r,t,n){let i=this.zone,o=function(a){i.runGuarded(()=>{r.apply(this,[a])})};return this.delegate.schedule(o,t,n)}},ee=class{zone;task=null;constructor(r){this.zone=r}call(r,t){let n=this.unscheduleTask.bind(this);return this.task=this.zone.run(()=>Zone.current.scheduleMacroTask("firebaseZoneBlock",Q,{},Q,Q)),t.pipe(me({next:n,complete:n,error:n})).subscribe(r).add(n)}unscheduleTask(){setTimeout(()=>{this.task!=null&&this.task.state==="scheduled"&&(this.task.invoke(),this.task=null)},10)}},Pe=(()=>{class e{ngZone;outsideAngular;insideAngular;constructor(t){this.ngZone=t,this.outsideAngular=t.runOutsideAngular(()=>new j(Zone.current)),this.insideAngular=t.run(()=>new j(Zone.current,de)),globalThis.\u0275AngularFireScheduler||=this}static \u0275fac=function(n){return new(n||e)(d(I))};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Re(){let e=globalThis.\u0275AngularFireScheduler;if(!e)throw new Error(`Either AngularFireModule has not been provided in your AppModule (this can be done manually or implictly using
provideFirebaseApp) or you're calling an AngularFire method outside of an NgModule (which is not supported).`);return e}function Wt(e){return e.pipe(T(Re().outsideAngular))}function Ce(e){return Ge(Re())(e)}function Ge(e){return function(t){return t=t.lift(new ee(e.ngZone)),t.pipe(y(e.outsideAngular),T(e.insideAngular))}}var Xe="firebase",Ye="10.12.2";m.registerVersion(Xe,Ye,"app-compat");var Je=["ngOnDestroy"],De=(e,r,t,n={})=>new Proxy(e,{get:(i,o)=>t.runOutsideAngular(()=>{if(e[o])return n?.spy?.get&&n.spy.get(o,e[o]),e[o];if(Je.indexOf(o)>-1)return()=>{};let a=r.toPromise().then(c=>{let s=c?.[o];return typeof s=="function"?s.bind(c):s?.then?s.then(l=>t.run(()=>l)):t.run(()=>s)});return new Proxy(()=>{},{get:(c,s)=>a[s],apply:(c,s,l)=>a.then(h=>{let b=h?.(...l);return n?.spy?.apply&&n.spy.apply(o,l,b),b})})})});var H=class{constructor(r){return r}},L=new g("angularfire2.app.options"),z=new g("angularfire2.app.name");function te(e,r,t){let n=typeof t=="string"&&t||"[DEFAULT]",i=typeof t=="object"&&t||{};i.name=i.name||n;let a=m.apps.filter(c=>c&&c.name===i.name)[0]||r.runOutsideAngular(()=>m.initializeApp(e,i));try{if(JSON.stringify(e)!==JSON.stringify(a.options)){let c=!!module.hot;Qe("error",`${a.name} Firebase App already initialized with different options${c?", you may need to reload as Firebase is not HMR aware.":"."}`)}}catch{}return new H(a)}var Qe=(e,...r)=>{Z()&&typeof console<"u"&&console[e](...r)},et={provide:H,useFactory:te,deps:[L,I,[new Ae,z]]},en=(()=>{class e{static initializeApp(t,n){return{ngModule:e,providers:[{provide:L,useValue:t},{provide:z,useValue:n}]}}constructor(t){m.registerVersion("angularfire",$.full,"core"),m.registerVersion("angularfire",$.full,"app-compat"),m.registerVersion("angular",Ee.full,t.toString())}static \u0275fac=function(n){return new(n||e)(d(x))};static \u0275mod=G({type:e});static \u0275inj=q({providers:[et]})}return e})();function Oe(e,r,t,n,i){let[,o,a]=globalThis.\u0275AngularfireInstanceCache.find(c=>c[0]===e)||[];if(o)return tt(i,a)||(Se("error",`${r} was already initialized on the ${t} Firebase App with different settings.${nt?" You may need to reload as Firebase is not HMR aware.":""}`),Se("warn",{is:i,was:a})),o;{let c=n();return globalThis.\u0275AngularfireInstanceCache.push([e,c,i]),c}}function tt(e,r){try{return e.toString()===r.toString()}catch{return e===r}}var nt=typeof module<"u"&&!!module.hot,Se=(e,...r)=>{Z()&&typeof console<"u"&&console[e](...r)};globalThis.\u0275AngularfireInstanceCache||=[];var rt=new Map,it={activated:!1,tokenObservers:[]},ot={initialized:!1,enabled:!1};function p(e){return rt.get(e)||Object.assign({},it)}function je(){return ot}var st="https://content-firebaseappcheck.googleapis.com/v1";var at="exchangeDebugToken",Me={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},hn=24*60*60*1e3;var re=class{constructor(r,t,n,i,o){if(this.operation=r,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=i,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=i,i>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}process(r){return E(this,null,function*(){this.stop();try{this.pending=new X,this.pending.promise.catch(t=>{}),yield ct(this.getNextRun(r)),this.pending.resolve(),yield this.pending.promise,this.pending=new X,this.pending.promise.catch(t=>{}),yield this.operation(),this.pending.resolve(),yield this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}})}getNextRun(r){if(r)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{let t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}};function ct(e){return new Promise(r=>{setTimeout(r,e)})}var ut={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},w=new _e("appCheck","AppCheck",ut);function $e(e){if(!p(e).activated)throw w.create("use-before-activation",{appName:e.name})}function He(n,i){return E(this,arguments,function*({url:e,body:r},t){let o={"Content-Type":"application/json"},a=t.getImmediate({optional:!0});if(a){let f=yield a.getHeartbeatsHeader();f&&(o["X-Firebase-Client"]=f)}let c={method:"POST",body:JSON.stringify(r),headers:o},s;try{s=yield fetch(e,c)}catch(f){throw w.create("fetch-network-error",{originalErrorMessage:f?.message})}if(s.status!==200)throw w.create("fetch-status-error",{httpStatus:s.status});let l;try{l=yield s.json()}catch(f){throw w.create("fetch-parse-error",{originalErrorMessage:f?.message})}let h=l.ttl.match(/^([\d.]+)(s)$/);if(!h||!h[2]||isNaN(Number(h[1])))throw w.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${l.ttl}`});let b=Number(h[1])*1e3,O=Date.now();return{token:l.token,expireTimeMillis:O+b,issuedAtTimeMillis:O}})}function Le(e,r){let{projectId:t,appId:n,apiKey:i}=e.options;return{url:`${st}/projects/${t}/apps/${n}:${at}?key=${i}`,body:{debug_token:r}}}var lt="firebase-app-check-database",dt=1,ie="firebase-app-check-store";var B=null;function ft(){return B||(B=new Promise((e,r)=>{try{let t=indexedDB.open(lt,dt);t.onsuccess=n=>{e(n.target.result)},t.onerror=n=>{var i;r(w.create("storage-open",{originalErrorMessage:(i=n.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=n=>{let i=n.target.result;switch(n.oldVersion){case 0:i.createObjectStore(ie,{keyPath:"compositeKey"})}}}catch(t){r(w.create("storage-open",{originalErrorMessage:t?.message}))}}),B)}function pt(e,r){return ht(gt(e),r)}function ht(e,r){return E(this,null,function*(){let n=(yield ft()).transaction(ie,"readwrite"),o=n.objectStore(ie).put({compositeKey:e,value:r});return new Promise((a,c)=>{o.onsuccess=s=>{a()},n.onerror=s=>{var l;c(w.create("storage-set",{originalErrorMessage:(l=s.target.error)===null||l===void 0?void 0:l.message}))}})})}function gt(e){return`${e.options.appId}-${e.name}`}var oe=new be("@firebase/app-check");function ne(e,r){return ve()?pt(e,r).catch(t=>{oe.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}function ze(){return je().enabled}function Be(){return E(this,null,function*(){let e=je();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)})}var mt={error:"UNKNOWN_ERROR"};function At(e){return we.encodeString(JSON.stringify(e),!1)}function se(e,r=!1){return E(this,null,function*(){let t=e.app;$e(t);let n=p(t),i=n.token,o;if(i&&!D(i)&&(n.token=void 0,i=void 0),!i){let s=yield n.cachedTokenPromise;s&&(D(s)?i=s:yield ne(t,void 0))}if(!r&&i&&D(i))return{token:i.token};let a=!1;if(ze()){n.exchangeTokenPromise||(n.exchangeTokenPromise=He(Le(t,yield Be()),e.heartbeatServiceProvider).finally(()=>{n.exchangeTokenPromise=void 0}),a=!0);let s=yield n.exchangeTokenPromise;return yield ne(t,s),n.token=s,{token:s.token}}try{n.exchangeTokenPromise||(n.exchangeTokenPromise=n.provider.getToken().finally(()=>{n.exchangeTokenPromise=void 0}),a=!0),i=yield p(t).exchangeTokenPromise}catch(s){s.code==="appCheck/throttled"?oe.warn(s.message):oe.error(s),o=s}let c;return i?o?D(i)?c={token:i.token,internalError:o}:c=Fe(o):(c={token:i.token},n.token=i,yield ne(t,i)):c=Fe(o),a&&wt(t,c),c})}function kt(e){return E(this,null,function*(){let r=e.app;$e(r);let{provider:t}=p(r);if(ze()){let n=yield Be(),{token:i}=yield He(Le(r,n),e.heartbeatServiceProvider);return{token:i}}else{let{token:n}=yield t.getToken();return{token:n}}})}function Et(e,r,t,n){let{app:i}=e,o=p(i),a={next:t,error:n,type:r};if(o.tokenObservers=[...o.tokenObservers,a],o.token&&D(o.token)){let c=o.token;Promise.resolve().then(()=>{t({token:c.token}),Ne(e)}).catch(()=>{})}o.cachedTokenPromise.then(()=>Ne(e))}function Ke(e,r){let t=p(e),n=t.tokenObservers.filter(i=>i.next!==r);n.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=n}function Ne(e){let{app:r}=e,t=p(r),n=t.tokenRefresher;n||(n=Tt(e),t.tokenRefresher=n),!n.isRunning()&&t.isTokenAutoRefreshEnabled&&n.start()}function Tt(e){let{app:r}=e;return new re(()=>E(this,null,function*(){let t=p(r),n;if(t.token?n=yield se(e,!0):n=yield se(e),n.error)throw n.error;if(n.internalError)throw n.internalError}),()=>!0,()=>{let t=p(r);if(t.token){let n=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5,i=t.token.expireTimeMillis-5*60*1e3;return n=Math.min(n,i),Math.max(0,n-Date.now())}else return 0},Me.RETRIAL_MIN_WAIT,Me.RETRIAL_MAX_WAIT)}function wt(e,r){let t=p(e).tokenObservers;for(let n of t)try{n.type==="EXTERNAL"&&r.error!=null?n.error(r.error):n.next(r)}catch{}}function D(e){return e.expireTimeMillis-Date.now()>0}function Fe(e){return{token:At(mt),error:e}}var ae=class{constructor(r,t){this.app=r,this.heartbeatServiceProvider=t}_delete(){let{tokenObservers:r}=p(this.app);for(let t of r)Ke(this.app,t.next);return Promise.resolve()}};function vt(e,r){return new ae(e,r)}function _t(e){return{getToken:r=>se(e,r),getLimitedUseToken:()=>kt(e),addTokenListener:r=>Et(e,"INTERNAL",r),removeTokenListener:r=>Ke(e.app,r)}}var bt="@firebase/app-check",yt="0.8.4";var It="app-check",xe="app-check-internal";function Pt(){J(new Y(It,e=>{let r=e.getProvider("app").getImmediate(),t=e.getProvider("heartbeat");return vt(r,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,t)=>{e.getProvider(xe).initialize()})),J(new Y(xe,e=>{let r=e.getProvider("app-check").getImmediate();return _t(r)},"PUBLIC").setInstantiationMode("EXPLICIT")),C(bt,yt)}Pt();var Rt=["localhost","0.0.0.0","127.0.0.1"],In=typeof window<"u"&&Rt.includes(window.location.hostname);var St=new g("angularfire2.auth.use-emulator"),Dt=new g("angularfire2.auth.settings"),Ot=new g("angularfire2.auth.tenant-id"),Mt=new g("angularfire2.auth.langugage-code"),Nt=new g("angularfire2.auth.use-device-language"),Ft=new g("angularfire.auth.persistence"),xt=(e,r,t,n,i,o,a,c)=>Oe(`${e.name}.auth`,"AngularFireAuth",e.name,()=>{let s=r.runOutsideAngular(()=>e.auth());if(t&&s.useEmulator(...t),n&&(s.tenantId=n),s.languageCode=i,o&&s.useDeviceLanguage(),a)for(let[l,h]of Object.entries(a))s.settings[l]=h;return c&&s.setPersistence(c),s},[t,n,i,o,a,c]),Bn=(()=>{class e{authState;idToken;user;idTokenResult;credential;constructor(t,n,i,o,a,c,s,l,h,b,O,f){let ce=new le,P=R(void 0).pipe(T(a.outsideAngular),_(()=>o.runOutsideAngular(()=>import("./chunk-BSCU6DXT.js"))),N(()=>te(t,o,n)),N(k=>xt(k,o,c,l,h,b,s,O)),W({bufferSize:1,refCount:!1}));if(Te(i))this.authState=this.user=this.idToken=this.idTokenResult=this.credential=R(null);else{P.pipe(ge()).subscribe();let k=P.pipe(_(u=>u.getRedirectResult().then(A=>A,()=>null)),Ce,W({bufferSize:1,refCount:!1})),ue=P.pipe(_(u=>new M(A=>({unsubscribe:o.runOutsideAngular(()=>u.onAuthStateChanged(v=>A.next(v),v=>A.error(v),()=>A.complete()))})))),K=P.pipe(_(u=>new M(A=>({unsubscribe:o.runOutsideAngular(()=>u.onIdTokenChanged(v=>A.next(v),v=>A.error(v),()=>A.complete()))}))));this.authState=k.pipe(V(ue),y(a.outsideAngular),T(a.insideAngular)),this.user=k.pipe(V(K),y(a.outsideAngular),T(a.insideAngular)),this.idToken=this.user.pipe(_(u=>u?U(u.getIdToken()):R(null))),this.idTokenResult=this.user.pipe(_(u=>u?U(u.getIdTokenResult()):R(null))),this.credential=pe(k,ce,this.authState.pipe(he(u=>!u))).pipe(N(u=>u?.user?u:null),y(a.outsideAngular),T(a.insideAngular))}return De(this,P,o,{spy:{apply:(k,ue,K)=>{(k.startsWith("signIn")||k.startsWith("createUser"))&&K.then(u=>ce.next(u))}}})}static \u0275fac=function(n){return new(n||e)(d(L),d(z,8),d(x),d(I),d(Pe),d(St,8),d(Dt,8),d(Ot,8),d(Mt,8),d(Nt,8),d(Ft,8),d(S,8))};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"any"})}return e})();export{$ as a,S as b,Pe as c,Wt as d,Ce as e,L as f,z as g,te as h,en as i,Oe as j,St as k,Dt as l,Ot as m,Mt as n,Nt as o,Ft as p,xt as q,Bn as r};
