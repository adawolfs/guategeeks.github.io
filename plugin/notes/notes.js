!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).RevealNotes=t()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=function(e){return e&&e.Math==Math&&e},n=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof e&&e)||function(){return this}()||Function("return this")(),r={},a=function(e){try{return!!e()}catch(e){return!0}},i=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o={},c={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,u=l&&!c.call({1:2},1);o.f=u?function(e){var t=l(this,e);return!!t&&t.enumerable}:c;var s=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},f={}.toString,p=function(e){return f.call(e).slice(8,-1)},g=p,d="".split,h=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==g(e)?d.call(e,""):Object(e)}:Object,v=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},m=h,y=v,b=function(e){return m(y(e))},S=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_=S,x=function(e,t){if(!_(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!_(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!_(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!_(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},w=v,E=function(e){return Object(w(e))},A=E,R={}.hasOwnProperty,k=function(e,t){return R.call(A(e),t)},O=S,$=n.document,T=O($)&&O($.createElement),j=function(e){return T?$.createElement(e):{}},I=j,P=!i&&!a((function(){return 7!=Object.defineProperty(I("div"),"a",{get:function(){return 7}}).a})),L=i,C=o,M=s,z=b,D=x,N=k,Z=P,U=Object.getOwnPropertyDescriptor;r.f=L?U:function(e,t){if(e=z(e),t=D(t,!0),Z)try{return U(e,t)}catch(e){}if(N(e,t))return M(!C.f.call(e,t),e[t])};var q={},F=S,G=function(e){if(!F(e))throw TypeError(String(e)+" is not an object");return e},V=i,B=P,K=G,H=x,Y=Object.defineProperty;q.f=V?Y:function(e,t,n){if(K(e),t=H(t,!0),K(n),B)try{return Y(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var J=q,W=s,X=i?function(e,t,n){return J.f(e,t,W(1,n))}:function(e,t,n){return e[t]=n,e},Q={exports:{}},ee=n,te=X,ne=function(e,t){try{te(ee,e,t)}catch(n){ee[e]=t}return t},re=ne,ae="__core-js_shared__",ie=n[ae]||re(ae,{}),oe=ie,ce=Function.toString;"function"!=typeof oe.inspectSource&&(oe.inspectSource=function(e){return ce.call(e)});var le=oe.inspectSource,ue=le,se=n.WeakMap,fe="function"==typeof se&&/native code/.test(ue(se)),pe={exports:{}},ge=ie;(pe.exports=function(e,t){return ge[e]||(ge[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.12.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var de,he,ve,me=0,ye=Math.random(),be=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++me+ye).toString(36)},Se=pe.exports,_e=be,xe=Se("keys"),we=function(e){return xe[e]||(xe[e]=_e(e))},Ee={},Ae=fe,Re=S,ke=X,Oe=k,$e=ie,Te=we,je=Ee,Ie="Object already initialized",Pe=n.WeakMap;if(Ae||$e.state){var Le=$e.state||($e.state=new Pe),Ce=Le.get,Me=Le.has,ze=Le.set;de=function(e,t){if(Me.call(Le,e))throw new TypeError(Ie);return t.facade=e,ze.call(Le,e,t),t},he=function(e){return Ce.call(Le,e)||{}},ve=function(e){return Me.call(Le,e)}}else{var De=Te("state");je[De]=!0,de=function(e,t){if(Oe(e,De))throw new TypeError(Ie);return t.facade=e,ke(e,De,t),t},he=function(e){return Oe(e,De)?e[De]:{}},ve=function(e){return Oe(e,De)}}var Ne={set:de,get:he,has:ve,enforce:function(e){return ve(e)?he(e):de(e,{})},getterFor:function(e){return function(t){var n;if(!Re(t)||(n=he(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Ze=n,Ue=X,qe=k,Fe=ne,Ge=le,Ve=Ne.get,Be=Ne.enforce,Ke=String(String).split("String");(Q.exports=function(e,t,n,r){var a,i=!!r&&!!r.unsafe,o=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||qe(n,"name")||Ue(n,"name",t),(a=Be(n)).source||(a.source=Ke.join("string"==typeof t?t:""))),e!==Ze?(i?!c&&e[t]&&(o=!0):delete e[t],o?e[t]=n:Ue(e,t,n)):o?e[t]=n:Fe(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&Ve(this).source||Ge(this)}));var He=n,Ye=n,Je=function(e){return"function"==typeof e?e:void 0},We=function(e,t){return arguments.length<2?Je(He[e])||Je(Ye[e]):He[e]&&He[e][t]||Ye[e]&&Ye[e][t]},Xe={},Qe=Math.ceil,et=Math.floor,tt=function(e){return isNaN(e=+e)?0:(e>0?et:Qe)(e)},nt=tt,rt=Math.min,at=function(e){return e>0?rt(nt(e),9007199254740991):0},it=tt,ot=Math.max,ct=Math.min,lt=function(e,t){var n=it(e);return n<0?ot(n+t,0):ct(n,t)},ut=b,st=at,ft=lt,pt=function(e){return function(t,n,r){var a,i=ut(t),o=st(i.length),c=ft(r,o);if(e&&n!=n){for(;o>c;)if((a=i[c++])!=a)return!0}else for(;o>c;c++)if((e||c in i)&&i[c]===n)return e||c||0;return!e&&-1}},gt={includes:pt(!0),indexOf:pt(!1)},dt=k,ht=b,vt=gt.indexOf,mt=Ee,yt=function(e,t){var n,r=ht(e),a=0,i=[];for(n in r)!dt(mt,n)&&dt(r,n)&&i.push(n);for(;t.length>a;)dt(r,n=t[a++])&&(~vt(i,n)||i.push(n));return i},bt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],St=yt,_t=bt.concat("length","prototype");Xe.f=Object.getOwnPropertyNames||function(e){return St(e,_t)};var xt={};xt.f=Object.getOwnPropertySymbols;var wt=Xe,Et=xt,At=G,Rt=We("Reflect","ownKeys")||function(e){var t=wt.f(At(e)),n=Et.f;return n?t.concat(n(e)):t},kt=k,Ot=Rt,$t=r,Tt=q,jt=a,It=/#|\.prototype\./,Pt=function(e,t){var n=Ct[Lt(e)];return n==zt||n!=Mt&&("function"==typeof t?jt(t):!!t)},Lt=Pt.normalize=function(e){return String(e).replace(It,".").toLowerCase()},Ct=Pt.data={},Mt=Pt.NATIVE="N",zt=Pt.POLYFILL="P",Dt=Pt,Nt=n,Zt=r.f,Ut=X,qt=Q.exports,Ft=ne,Gt=function(e,t){for(var n=Ot(t),r=Tt.f,a=$t.f,i=0;i<n.length;i++){var o=n[i];kt(e,o)||r(e,o,a(t,o))}},Vt=Dt,Bt=function(e,t){var n,r,a,i,o,c=e.target,l=e.global,u=e.stat;if(n=l?Nt:u?Nt[c]||Ft(c,{}):(Nt[c]||{}).prototype)for(r in t){if(i=t[r],a=e.noTargetGet?(o=Zt(n,r))&&o.value:n[r],!Vt(l?r:c+(u?".":"#")+r,e.forced)&&void 0!==a){if(typeof i==typeof a)continue;Gt(i,a)}(e.sham||a&&a.sham)&&Ut(i,"sham",!0),qt(n,r,i,e)}},Kt=G,Ht=function(){var e=Kt(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},Yt={},Jt=a;function Wt(e,t){return RegExp(e,t)}Yt.UNSUPPORTED_Y=Jt((function(){var e=Wt("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),Yt.BROKEN_CARET=Jt((function(){var e=Wt("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));var Xt=Ht,Qt=Yt,en=pe.exports,tn=RegExp.prototype.exec,nn=en("native-string-replace",String.prototype.replace),rn=tn,an=function(){var e=/a/,t=/b*/g;return tn.call(e,"a"),tn.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),on=Qt.UNSUPPORTED_Y||Qt.BROKEN_CARET,cn=void 0!==/()??/.exec("")[1];(an||cn||on)&&(rn=function(e){var t,n,r,a,i=this,o=on&&i.sticky,c=Xt.call(i),l=i.source,u=0,s=e;return o&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),s=String(e).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(l="(?: "+l+")",s=" "+s,u++),n=new RegExp("^(?:"+l+")",c)),cn&&(n=new RegExp("^"+l+"$(?!\\s)",c)),an&&(t=i.lastIndex),r=tn.call(o?n:i,s),o?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:an&&r&&(i.lastIndex=i.global?r.index+r[0].length:t),cn&&r&&r.length>1&&nn.call(r[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r});var ln=rn;Bt({target:"RegExp",proto:!0,forced:/./.exec!==ln},{exec:ln});var un,sn,fn=We("navigator","userAgent")||"",pn=n.process,gn=pn&&pn.versions,dn=gn&&gn.v8;dn?sn=(un=dn.split("."))[0]<4?1:un[0]+un[1]:fn&&(!(un=fn.match(/Edge\/(\d+)/))||un[1]>=74)&&(un=fn.match(/Chrome\/(\d+)/))&&(sn=un[1]);var hn=sn&&+sn,vn=hn,mn=a,yn=!!Object.getOwnPropertySymbols&&!mn((function(){return!String(Symbol())||!Symbol.sham&&vn&&vn<41})),bn=yn&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Sn=n,_n=pe.exports,xn=k,wn=be,En=yn,An=bn,Rn=_n("wks"),kn=Sn.Symbol,On=An?kn:kn&&kn.withoutSetter||wn,$n=function(e){return xn(Rn,e)&&(En||"string"==typeof Rn[e])||(En&&xn(kn,e)?Rn[e]=kn[e]:Rn[e]=On("Symbol."+e)),Rn[e]},Tn=Q.exports,jn=ln,In=a,Pn=$n,Ln=X,Cn=Pn("species"),Mn=RegExp.prototype,zn=!In((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),Dn="$0"==="a".replace(/./,"$0"),Nn=Pn("replace"),Zn=!!/./[Nn]&&""===/./[Nn]("a","$0"),Un=!In((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),qn=function(e,t,n,r){var a=Pn(e),i=!In((function(){var t={};return t[a]=function(){return 7},7!=""[e](t)})),o=i&&!In((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[Cn]=function(){return n},n.flags="",n[a]=/./[a]),n.exec=function(){return t=!0,null},n[a](""),!t}));if(!i||!o||"replace"===e&&(!zn||!Dn||Zn)||"split"===e&&!Un){var c=/./[a],l=n(a,""[e],(function(e,t,n,r,a){var o=t.exec;return o===jn||o===Mn.exec?i&&!a?{done:!0,value:c.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Dn,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Zn}),u=l[0],s=l[1];Tn(String.prototype,e,u),Tn(Mn,a,2==t?function(e,t){return s.call(e,this,t)}:function(e){return s.call(e,this)})}r&&Ln(Mn[a],"sham",!0)},Fn=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t},Gn=p,Vn=ln,Bn=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==Gn(e))throw TypeError("RegExp#exec called on incompatible receiver");return Vn.call(e,t)},Kn=G,Hn=v,Yn=Fn,Jn=Bn;qn("search",1,(function(e,t,n){return[function(t){var n=Hn(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=Kn(e),i=String(this),o=a.lastIndex;Yn(o,0)||(a.lastIndex=0);var c=Jn(a,i);return Yn(a.lastIndex,o)||(a.lastIndex=o),null===c?-1:c.index}]}));var Wn=tt,Xn=v,Qn=function(e){return function(t,n){var r,a,i=String(Xn(t)),o=Wn(n),c=i.length;return o<0||o>=c?e?"":void 0:(r=i.charCodeAt(o))<55296||r>56319||o+1===c||(a=i.charCodeAt(o+1))<56320||a>57343?e?i.charAt(o):r:e?i.slice(o,o+2):a-56320+(r-55296<<10)+65536}},er={codeAt:Qn(!1),charAt:Qn(!0)}.charAt,tr=function(e,t,n){return t+(n?er(e,t).length:1)},nr=G,rr=at,ar=v,ir=tr,or=Bn;qn("match",1,(function(e,t,n){return[function(t){var n=ar(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=nr(e),i=String(this);if(!a.global)return or(a,i);var o=a.unicode;a.lastIndex=0;for(var c,l=[],u=0;null!==(c=or(a,i));){var s=String(c[0]);l[u]=s,""===s&&(a.lastIndex=ir(i,rr(a.lastIndex),o)),u++}return 0===u?null:l}]}));var cr=E,lr=Math.floor,ur="".replace,sr=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,fr=/\$([$&'`]|\d{1,2})/g,pr=qn,gr=G,dr=at,hr=tt,vr=v,mr=tr,yr=function(e,t,n,r,a,i){var o=n+e.length,c=r.length,l=fr;return void 0!==a&&(a=cr(a),l=sr),ur.call(i,l,(function(i,l){var u;switch(l.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(o);case"<":u=a[l.slice(1,-1)];break;default:var s=+l;if(0===s)return i;if(s>c){var f=lr(s/10);return 0===f?i:f<=c?void 0===r[f-1]?l.charAt(1):r[f-1]+l.charAt(1):i}u=r[s-1]}return void 0===u?"":u}))},br=Bn,Sr=Math.max,_r=Math.min;pr("replace",2,(function(e,t,n,r){var a=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,o=a?"$":"$0";return[function(n,r){var a=vr(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!a&&i||"string"==typeof r&&-1===r.indexOf(o)){var c=n(t,e,this,r);if(c.done)return c.value}var l=gr(e),u=String(this),s="function"==typeof r;s||(r=String(r));var f=l.global;if(f){var p=l.unicode;l.lastIndex=0}for(var g=[];;){var d=br(l,u);if(null===d)break;if(g.push(d),!f)break;""===String(d[0])&&(l.lastIndex=mr(u,dr(l.lastIndex),p))}for(var h,v="",m=0,y=0;y<g.length;y++){d=g[y];for(var b=String(d[0]),S=Sr(_r(hr(d.index),u.length),0),_=[],x=1;x<d.length;x++)_.push(void 0===(h=d[x])?h:String(h));var w=d.groups;if(s){var E=[b].concat(_,S,u);void 0!==w&&E.push(w);var A=String(r.apply(void 0,E))}else A=yr(b,u,S,_,w,r);S>=m&&(v+=u.slice(m,S)+A,m=S+b.length)}return v+u.slice(m)}]}));var xr=S,wr=G,Er=function(e){if(!xr(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e},Ar=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return wr(n),Er(r),t?e.call(n,r):n.__proto__=r,n}}():void 0),Rr=S,kr=Ar,Or=S,$r=p,Tr=$n("match"),jr=function(e){var t;return Or(e)&&(void 0!==(t=e[Tr])?!!t:"RegExp"==$r(e))},Ir=We,Pr=q,Lr=i,Cr=$n("species"),Mr=i,zr=n,Dr=Dt,Nr=function(e,t,n){var r,a;return kr&&"function"==typeof(r=t.constructor)&&r!==n&&Rr(a=r.prototype)&&a!==n.prototype&&kr(e,a),e},Zr=q.f,Ur=Xe.f,qr=jr,Fr=Ht,Gr=Yt,Vr=Q.exports,Br=a,Kr=Ne.enforce,Hr=function(e){var t=Ir(e),n=Pr.f;Lr&&t&&!t[Cr]&&n(t,Cr,{configurable:!0,get:function(){return this}})},Yr=$n("match"),Jr=zr.RegExp,Wr=Jr.prototype,Xr=/a/g,Qr=/a/g,ea=new Jr(Xr)!==Xr,ta=Gr.UNSUPPORTED_Y;if(Mr&&Dr("RegExp",!ea||ta||Br((function(){return Qr[Yr]=!1,Jr(Xr)!=Xr||Jr(Qr)==Qr||"/a/i"!=Jr(Xr,"i")})))){for(var na=function(e,t){var n,r=this instanceof na,a=qr(e),i=void 0===t;if(!r&&a&&e.constructor===na&&i)return e;ea?a&&!i&&(e=e.source):e instanceof na&&(i&&(t=Fr.call(e)),e=e.source),ta&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=Nr(ea?new Jr(e,t):Jr(e,t),r?this:Wr,na);ta&&n&&(Kr(o).sticky=!0);return o},ra=function(e){e in na||Zr(na,e,{configurable:!0,get:function(){return Jr[e]},set:function(t){Jr[e]=t}})},aa=Ur(Jr),ia=0;aa.length>ia;)ra(aa[ia++]);Wr.constructor=na,na.prototype=Wr,Vr(zr,"RegExp",na)}Hr("RegExp");var oa=Q.exports,ca=G,la=a,ua=Ht,sa="toString",fa=RegExp.prototype,pa=fa.toString,ga=la((function(){return"/a/b"!=pa.call({source:"a",flags:"b"})})),da=pa.name!=sa;(ga||da)&&oa(RegExp.prototype,sa,(function(){var e=ca(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in fa)?ua.call(e):n)}),{unsafe:!0});var ha=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},va=G,ma=ha,ya=$n("species"),ba=qn,Sa=jr,_a=G,xa=v,wa=function(e,t){var n,r=va(e).constructor;return void 0===r||null==(n=va(r)[ya])?t:ma(n)},Ea=tr,Aa=at,Ra=Bn,ka=ln,Oa=Yt.UNSUPPORTED_Y,$a=[].push,Ta=Math.min,ja=4294967295;ba("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(xa(this)),a=void 0===n?ja:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!Sa(e))return t.call(r,e,a);for(var i,o,c,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),s=0,f=new RegExp(e.source,u+"g");(i=ka.call(f,r))&&!((o=f.lastIndex)>s&&(l.push(r.slice(s,i.index)),i.length>1&&i.index<r.length&&$a.apply(l,i.slice(1)),c=i[0].length,s=o,l.length>=a));)f.lastIndex===i.index&&f.lastIndex++;return s===r.length?!c&&f.test("")||l.push(""):l.push(r.slice(s)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=xa(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,e,this,a,r!==t);if(i.done)return i.value;var o=_a(e),c=String(this),l=wa(o,RegExp),u=o.unicode,s=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(Oa?"g":"y"),f=new l(Oa?"^(?:"+o.source+")":o,s),p=void 0===a?ja:a>>>0;if(0===p)return[];if(0===c.length)return null===Ra(f,c)?[c]:[];for(var g=0,d=0,h=[];d<c.length;){f.lastIndex=Oa?0:d;var v,m=Ra(f,Oa?c.slice(d):c);if(null===m||(v=Ta(Aa(f.lastIndex+(Oa?d:0)),c.length))===g)d=Ea(c,d,u);else{if(h.push(c.slice(g,d)),h.length===p)return h;for(var y=1;y<=m.length-1;y++)if(h.push(m[y]),h.length===p)return h;d=g=v}}return h.push(c.slice(g)),h}]}),Oa);var Ia="\t\n\v\f\r                　\u2028\u2029\ufeff",Pa=v,La="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Ca=RegExp("^"+La+La+"*"),Ma=RegExp(La+La+"*$"),za=function(e){return function(t){var n=String(Pa(t));return 1&e&&(n=n.replace(Ca,"")),2&e&&(n=n.replace(Ma,"")),n}},Da={start:za(1),end:za(2),trim:za(3)},Na=a,Za=Ia,Ua=function(e){return Na((function(){return!!Za[e]()||"​᠎"!="​᠎"[e]()||Za[e].name!==e}))},qa=Da.trim;Bt({target:"String",proto:!0,forced:Ua("trim")},{trim:function(){return qa(this)}});var Fa=p,Ga=Array.isArray||function(e){return"Array"==Fa(e)},Va=S,Ba=Ga,Ka=$n("species"),Ha=function(e,t){var n;return Ba(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!Ba(n.prototype)?Va(n)&&null===(n=n[Ka])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},Ya=x,Ja=q,Wa=s,Xa=function(e,t,n){var r=Ya(t);r in e?Ja.f(e,r,Wa(0,n)):e[r]=n},Qa=a,ei=hn,ti=$n("species"),ni=function(e){return ei>=51||!Qa((function(){var t=[];return(t.constructor={})[ti]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},ri=Bt,ai=lt,ii=tt,oi=at,ci=E,li=Ha,ui=Xa,si=ni("splice"),fi=Math.max,pi=Math.min,gi=9007199254740991,di="Maximum allowed length exceeded";ri({target:"Array",proto:!0,forced:!si},{splice:function(e,t){var n,r,a,i,o,c,l=ci(this),u=oi(l.length),s=ai(e,u),f=arguments.length;if(0===f?n=r=0:1===f?(n=0,r=u-s):(n=f-2,r=pi(fi(ii(t),0),u-s)),u+n-r>gi)throw TypeError(di);for(a=li(l,r),i=0;i<r;i++)(o=s+i)in l&&ui(a,i,l[o]);if(a.length=r,n<r){for(i=s;i<u-r;i++)c=i+n,(o=i+r)in l?l[c]=l[o]:delete l[c];for(i=u;i>u-r+n;i--)delete l[i-1]}else if(n>r)for(i=u-r;i>s;i--)c=i+n-1,(o=i+r-1)in l?l[c]=l[o]:delete l[c];for(i=0;i<n;i++)l[i+s]=arguments[i+2];return l.length=u-r+n,a}});var hi=a,vi=function(e,t){var n=[][e];return!!n&&hi((function(){n.call(null,t||function(){throw 1},1)}))},mi=Bt,yi=b,bi=[].join,Si=h!=Object,_i=vi("join",",");mi({target:"Array",proto:!0,forced:Si||!_i},{join:function(e){return bi.call(yi(this),void 0===e?",":e)}});var xi=ha,wi=function(e,t,n){if(xi(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}},Ei=h,Ai=E,Ri=at,ki=Ha,Oi=[].push,$i=function(e){var t=1==e,n=2==e,r=3==e,a=4==e,i=6==e,o=7==e,c=5==e||i;return function(l,u,s,f){for(var p,g,d=Ai(l),h=Ei(d),v=wi(u,s,3),m=Ri(h.length),y=0,b=f||ki,S=t?b(l,m):n||o?b(l,0):void 0;m>y;y++)if((c||y in h)&&(g=v(p=h[y],y,d),e))if(t)S[y]=g;else if(g)switch(e){case 3:return!0;case 5:return p;case 6:return y;case 2:Oi.call(S,p)}else switch(e){case 4:return!1;case 7:Oi.call(S,p)}return i?-1:r||a?a:S}},Ti={forEach:$i(0),map:$i(1),filter:$i(2),some:$i(3),every:$i(4),find:$i(5),findIndex:$i(6),filterOut:$i(7)},ji=Ti.map;Bt({target:"Array",proto:!0,forced:!ni("map")},{map:function(e){return ji(this,e,arguments.length>1?arguments[1]:void 0)}});var Ii=Bt,Pi=S,Li=Ga,Ci=lt,Mi=at,zi=b,Di=Xa,Ni=$n,Zi=ni("slice"),Ui=Ni("species"),qi=[].slice,Fi=Math.max;Ii({target:"Array",proto:!0,forced:!Zi},{slice:function(e,t){var n,r,a,i=zi(this),o=Mi(i.length),c=Ci(e,o),l=Ci(void 0===t?o:t,o);if(Li(i)&&("function"!=typeof(n=i.constructor)||n!==Array&&!Li(n.prototype)?Pi(n)&&null===(n=n[Ui])&&(n=void 0):n=void 0,n===Array||void 0===n))return qi.call(i,c,l);for(r=new(void 0===n?Array:n)(Fi(l-c,0)),a=0;c<l;c++,a++)c in i&&Di(r,a,i[c]);return r.length=a,r}});var Gi=Bt,Vi=Da.start,Bi=Ua("trimStart"),Ki=Bi?function(){return Vi(this)}:"".trimStart;Gi({target:"String",proto:!0,forced:Bi},{trimStart:Ki,trimLeft:Ki});var Hi=Bt,Yi=Da.end,Ji=Ua("trimEnd"),Wi=Ji?function(){return Yi(this)}:"".trimEnd;Hi({target:"String",proto:!0,forced:Ji},{trimEnd:Wi,trimRight:Wi});var Xi=Ti.filter;Bt({target:"Array",proto:!0,forced:!ni("filter")},{filter:function(e){return Xi(this,e,arguments.length>1?arguments[1]:void 0)}});var Qi=v,eo=/"/g,to=a,no=function(e,t,n,r){var a=String(Qi(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(r).replace(eo,"&quot;")+'"'),i+">"+a+"</"+t+">"};Bt({target:"String",proto:!0,forced:function(e){return to((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}("link")},{link:function(e){return no(this,"a","href",e)}});var ro={};ro[$n("toStringTag")]="z";var ao="[object z]"===String(ro),io=ao,oo=p,co=$n("toStringTag"),lo="Arguments"==oo(function(){return arguments}()),uo=io?oo:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),co))?n:lo?oo(t):"Object"==(r=oo(t))&&"function"==typeof t.callee?"Arguments":r},so=ao?{}.toString:function(){return"[object "+uo(this)+"]"},fo=ao,po=Q.exports,go=so;fo||po(Object.prototype,"toString",go,{unsafe:!0});var ho=Ti.forEach,vo=n,mo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},yo=vi("forEach")?[].forEach:function(e){return ho(this,e,arguments.length>1?arguments[1]:void 0)},bo=X;for(var So in mo){var _o=vo[So],xo=_o&&_o.prototype;if(xo&&xo.forEach!==yo)try{bo(xo,"forEach",yo)}catch(e){xo.forEach=yo}}var wo=yt,Eo=bt,Ao=Object.keys||function(e){return wo(e,Eo)},Ro=E,ko=Ao;Bt({target:"Object",stat:!0,forced:a((function(){ko(1)}))},{keys:function(e){return ko(Ro(e))}});var Oo,$o=q,To=G,jo=Ao,Io=i?Object.defineProperties:function(e,t){To(e);for(var n,r=jo(t),a=r.length,i=0;a>i;)$o.f(e,n=r[i++],t[n]);return e},Po=We("document","documentElement"),Lo=G,Co=Io,Mo=bt,zo=Ee,Do=Po,No=j,Zo=we("IE_PROTO"),Uo=function(){},qo=function(e){return"<script>"+e+"</"+"script>"},Fo=function(){try{Oo=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;Fo=Oo?function(e){e.write(qo("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Oo):((t=No("iframe")).style.display="none",Do.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(qo("document.F=Object")),e.close(),e.F);for(var n=Mo.length;n--;)delete Fo.prototype[Mo[n]];return Fo()};zo[Zo]=!0;var Go=Object.create||function(e,t){var n;return null!==e?(Uo.prototype=Lo(e),n=new Uo,Uo.prototype=null,n[Zo]=e):n=Fo(),void 0===t?n:Co(n,t)},Vo=q,Bo=$n("unscopables"),Ko=Array.prototype;null==Ko[Bo]&&Vo.f(Ko,Bo,{configurable:!0,value:Go(null)});var Ho=gt.includes,Yo=function(e){Ko[Bo][e]=!0};Bt({target:"Array",proto:!0},{includes:function(e){return Ho(this,e,arguments.length>1?arguments[1]:void 0)}}),Yo("includes");var Jo=jr,Wo=$n("match"),Xo=function(e){if(Jo(e))throw TypeError("The method doesn't accept regular expressions");return e},Qo=v;Bt({target:"String",proto:!0,forced:!function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[Wo]=!1,"/./"[e](t)}catch(e){}}return!1}("includes")},{includes:function(e){return!!~String(Qo(this)).indexOf(Xo(e),arguments.length>1?arguments[1]:void 0)}});var ec=Bt,tc=a,nc=Ga,rc=S,ac=E,ic=at,oc=Xa,cc=Ha,lc=ni,uc=hn,sc=$n("isConcatSpreadable"),fc=9007199254740991,pc="Maximum allowed index exceeded",gc=uc>=51||!tc((function(){var e=[];return e[sc]=!1,e.concat()[0]!==e})),dc=lc("concat"),hc=function(e){if(!rc(e))return!1;var t=e[sc];return void 0!==t?!!t:nc(e)};ec({target:"Array",proto:!0,forced:!gc||!dc},{concat:function(e){var t,n,r,a,i,o=ac(this),c=cc(o,0),l=0;for(t=-1,r=arguments.length;t<r;t++)if(hc(i=-1===t?o:arguments[t])){if(l+(a=ic(i.length))>fc)throw TypeError(pc);for(n=0;n<a;n++,l++)n in i&&oc(c,l,i[n])}else{if(l>=fc)throw TypeError(pc);oc(c,l++,i)}return c.length=l,c}});var vc=i,mc=q.f,yc=Function.prototype,bc=yc.toString,Sc=/^\s*function ([^ (]*)/,_c="name";vc&&!(_c in yc)&&mc(yc,_c,{configurable:!0,get:function(){try{return bc.call(this).match(Sc)[1]}catch(e){return""}}});var xc=/(^|[^\[])\^/g;function wc(e,t){e=e.source||e,t=t||"";var n={replace:function(t,r){return r=(r=r.source||r).replace(xc,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n}var Ec={exec:function(){}};function Ac(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}var Rc={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ec,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Rc.def=wc(Rc.def).replace("label",Rc._label).replace("title",Rc._title).getRegex(),Rc.bullet=/(?:[*+-]|\d{1,9}[.)])/,Rc.listItemStart=wc(/^( *)(bull) */).replace("bull",Rc.bullet).getRegex(),Rc.list=wc(Rc.list).replace(/bull/g,Rc.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Rc.def.source+")").getRegex(),Rc._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Rc._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Rc.html=wc(Rc.html,"i").replace("comment",Rc._comment).replace("tag",Rc._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Rc.paragraph=wc(Rc._paragraph).replace("hr",Rc.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rc._tag).getRegex(),Rc.blockquote=wc(Rc.blockquote).replace("paragraph",Rc.paragraph).getRegex(),Rc.normal=Ac({},Rc),Rc.gfm=Ac({},Rc.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Rc.gfm.table=wc(Rc.gfm.table).replace("hr",Rc.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rc._tag).getRegex(),Rc.gfm.paragraph=wc(Rc._paragraph).replace("hr",Rc.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Rc.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rc._tag).getRegex(),Rc.pedantic=Ac({},Rc.normal,{html:wc("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Rc._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ec,paragraph:wc(Rc.normal._paragraph).replace("hr",Rc.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Rc.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var kc={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ec,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ec,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};kc.punctuation=wc(kc.punctuation).replace(/punctuation/g,kc._punctuation).getRegex(),kc.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,kc.escapedEmSt=/\\\*|\\_/g,kc._comment=wc(Rc._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),kc.emStrong.lDelim=wc(kc.emStrong.lDelim).replace(/punct/g,kc._punctuation).getRegex(),kc.emStrong.rDelimAst=wc(kc.emStrong.rDelimAst,"g").replace(/punct/g,kc._punctuation).getRegex(),kc.emStrong.rDelimUnd=wc(kc.emStrong.rDelimUnd,"g").replace(/punct/g,kc._punctuation).getRegex(),kc._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,kc._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,kc._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,kc.autolink=wc(kc.autolink).replace("scheme",kc._scheme).replace("email",kc._email).getRegex(),kc._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,kc.tag=wc(kc.tag).replace("comment",kc._comment).replace("attribute",kc._attribute).getRegex(),kc._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,kc._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,kc._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,kc.link=wc(kc.link).replace("label",kc._label).replace("href",kc._href).replace("title",kc._title).getRegex(),kc.reflink=wc(kc.reflink).replace("label",kc._label).replace("ref",Rc._label).getRegex(),kc.nolink=wc(kc.nolink).replace("ref",Rc._label).getRegex(),kc.reflinkSearch=wc(kc.reflinkSearch,"g").replace("reflink",kc.reflink).replace("nolink",kc.nolink).getRegex(),kc.normal=Ac({},kc),kc.pedantic=Ac({},kc.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:wc(/^!?\[(label)\]\((.*?)\)/).replace("label",kc._label).getRegex(),reflink:wc(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",kc._label).getRegex()}),kc.gfm=Ac({},kc.normal,{escape:wc(kc.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),kc.gfm.url=wc(kc.gfm.url,"i").replace("email",kc.gfm._extended_email).getRegex(),kc.breaks=Ac({},kc.gfm,{br:wc(kc.br).replace("{2,}","*").getRegex(),text:wc(kc.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});return function(){var e,t=null;function n(n){var r=e.getCurrentSlide(),a=r.querySelector("aside.notes"),i=r.querySelector(".current-fragment"),o={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:e.getState()};if(r.hasAttribute("data-notes")&&(o.notes=r.getAttribute("data-notes"),o.whitespace="pre-wrap"),i){var c=i.querySelector("aside.notes");c?a=c:i.hasAttribute("data-notes")&&(o.notes=i.getAttribute("data-notes"),o.whitespace="pre-wrap",a=null)}a&&(o.notes=a.innerHTML,o.markdown="string"==typeof a.getAttribute("data-markdown")),t.postMessage(JSON.stringify(o),"*")}function r(n){var r,i,o,c,l=JSON.parse(n.data);l&&"reveal-notes"===l.namespace&&"connected"===l.type?(clearInterval(undefined),a()):l&&"reveal-notes"===l.namespace&&"call"===l.type&&(r=l.methodName,i=l.arguments,o=l.callId,c=e[r].apply(e,i),t.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:c,callId:o}),"*"))}function a(){e.on("slidechanged",n),e.on("fragmentshown",n),e.on("fragmenthidden",n),e.on("overviewhidden",n),e.on("overviewshown",n),e.on("paused",n),e.on("resumed",n),n()}return{id:"notes",init:function(n){e=n,/receiver/i.test(window.location.search)||(null!==window.location.search.match(/(\?|\&)notes/gi)||window.addEventListener("message",(function(e){if(!t&&"string"==typeof e.data){var n;try{n=JSON.parse(e.data)}catch(e){}n&&"reveal-notes"===n.namespace&&"heartbeat"===n.type&&(i=e.source,t&&!t.closed?t.focus():(t=i,window.addEventListener("message",r),a()))}var i})),e.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},(function(){})))},open:function(){}}}}));