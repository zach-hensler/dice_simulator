(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();var F,d,he,P,ee,me,B,$={},J=[],we=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function N(e,_){for(var t in _)e[t]=_[t];return e}function ve(e){var _=e.parentNode;_&&_.removeChild(e)}function Ne(e,_,t){var r,n,o,l={};for(o in _)o=="key"?r=_[o]:o=="ref"?n=_[o]:l[o]=_[o];if(arguments.length>2&&(l.children=arguments.length>3?F.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return T(e,l,r,n,null)}function T(e,_,t,r,n){var o={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++he,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(o),o}function W(e){return e.children}function L(e,_){this.props=e,this.context=_}function H(e,_){if(_==null)return e.__?H(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?H(e):null}function Pe(e,_,t){var r,n=e.__v,o=n.__e,l=e.__P;if(l)return(r=N({},n)).__v=n.__v+1,d.vnode&&d.vnode(r),X(l,r,n,e.__n,l.ownerSVGElement!==void 0,32&n.__u?[o]:null,_,o??H(n),!!(32&n.__u),t),r.__v=n.__v,r.__.__k[r.__i]=r,r.__d=void 0,r.__e!=o&&ye(r),r}function ye(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return ye(e)}}function _e(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!R.__r++||ee!==d.debounceRendering)&&((ee=d.debounceRendering)||me)(R)}function R(){var e,_,t,r=[],n=[];for(P.sort(B);e=P.shift();)e.__d&&(t=P.length,_=Pe(e,r,n)||_,t===0||P.length>t?(z(r,_,n),n.length=r.length=0,_=void 0,P.sort(B)):_&&d.__c&&d.__c(_,J));_&&z(r,_,n),R.__r=0}function ge(e,_,t,r,n,o,l,u,s,c,a){var i,p,f,g,x,b=r&&r.__k||J,m=_.length;for(t.__d=s,He(t,_,b),s=t.__d,i=0;i<m;i++)(f=t.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(p=f.__i===-1?$:b[f.__i]||$,f.__i=i,X(e,f,p,n,o,l,u,s,c,a),g=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&Y(p.ref,null,f),a.push(f.ref,f.__c||g,f)),x==null&&g!=null&&(x=g),65536&f.__u||p.__k===f.__k?s=be(f,s,e):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:g&&(s=g.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=s,t.__e=x}function He(e,_,t){var r,n,o,l,u,s=_.length,c=t.length,a=c,i=0;for(e.__k=[],r=0;r<s;r++)l=r+i,(n=e.__k[r]=(n=_[r])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?T(null,n,null,null,null):Q(n)?T(W,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?T(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=e,n.__b=e.__b+1,u=Oe(n,t,l,a),n.__i=u,o=null,u!==-1&&(a--,(o=t[u])&&(o.__u|=131072)),o==null||o.__v===null?(u==-1&&i--,typeof n.type!="function"&&(n.__u|=65536)):u!==l&&(u===l+1?i++:u>l?a>s-l?i+=u-l:i--:u<l?u==l-1&&(i=u-l):i=0,u!==r+i&&(n.__u|=65536))):(o=t[l])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=H(o)),G(o,o,!1),t[l]=null,a--);if(a)for(r=0;r<c;r++)(o=t[r])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=H(o)),G(o,o))}function be(e,_,t){var r,n;if(typeof e.type=="function"){for(r=e.__k,n=0;r&&n<r.length;n++)r[n]&&(r[n].__=e,_=be(r[n],_,t));return _}e.__e!=_&&(t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function Oe(e,_,t,r){var n=e.key,o=e.type,l=t-1,u=t+1,s=_[t];if(s===null||s&&n==s.key&&o===s.type&&!(131072&s.__u))return t;if(r>(s!=null&&!(131072&s.__u)?1:0))for(;l>=0||u<_.length;){if(l>=0){if((s=_[l])&&!(131072&s.__u)&&n==s.key&&o===s.type)return l;l--}if(u<_.length){if((s=_[u])&&!(131072&s.__u)&&n==s.key&&o===s.type)return u;u++}}return-1}function te(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||we.test(_)?t:t+"px"}function V(e,_,t,r,n){var o;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||te(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||te(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?r?t.u=r.u:(t.u=Date.now(),e.addEventListener(_,o?re:ne,o)):e.removeEventListener(_,o?re:ne,o);else{if(n)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_!=="rowSpan"&&_!=="colSpan"&&_!=="role"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function ne(e){if(this.l){var _=this.l[e.type+!1];if(e.t){if(e.t<=_.u)return}else e.t=Date.now();return _(d.event?d.event(e):e)}}function re(e){if(this.l)return this.l[e.type+!0](d.event?d.event(e):e)}function X(e,_,t,r,n,o,l,u,s,c){var a,i,p,f,g,x,b,m,k,w,C,O,Z,E,q,D=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(s=!!(32&t.__u),o=[u=_.__e=t.__e]),(a=d.__b)&&a(_);e:if(typeof D=="function")try{if(m=_.props,k=(a=D.contextType)&&r[a.__c],w=a?k?k.props.value:a.__:r,t.__c?b=(i=_.__c=t.__c).__=i.__E:("prototype"in D&&D.prototype.render?_.__c=i=new D(m,w):(_.__c=i=new L(m,w),i.constructor=D,i.render=Ce),k&&k.sub(i),i.props=m,i.state||(i.state={}),i.context=w,i.__n=r,p=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),D.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=N({},i.__s)),N(i.__s,D.getDerivedStateFromProps(m,i.__s))),f=i.props,g=i.state,i.__v=_,p)D.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(D.getDerivedStateFromProps==null&&m!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,w),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,w)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(i.props=m,i.state=i.__s,i.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(S){S&&(S.__=_)}),C=0;C<i._sb.length;C++)i.__h.push(i._sb[C]);i._sb=[],i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,w),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,g,x)})}if(i.context=w,i.props=m,i.__P=e,i.__e=!1,O=d.__r,Z=0,"prototype"in D&&D.prototype.render){for(i.state=i.__s,i.__d=!1,O&&O(_),a=i.render(i.props,i.state,i.context),E=0;E<i._sb.length;E++)i.__h.push(i._sb[E]);i._sb=[]}else do i.__d=!1,O&&O(_),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Z<25);i.state=i.__s,i.getChildContext!=null&&(r=N(N({},r),i.getChildContext())),p||i.getSnapshotBeforeUpdate==null||(x=i.getSnapshotBeforeUpdate(f,g)),ge(e,Q(q=a!=null&&a.type===W&&a.key==null?a.props.children:a)?q:[q],_,t,r,n,o,l,u,s,c),i.base=_.__e,_.__u&=-161,i.__h.length&&l.push(i),b&&(i.__E=i.__=null)}catch(S){_.__v=null,s||o!=null?(_.__e=u,_.__u|=s?160:32,o[o.indexOf(u)]=null):(_.__e=t.__e,_.__k=t.__k),d.__e(S,_,t)}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=$e(t.__e,_,t,r,n,o,l,s,c);(a=d.diffed)&&a(_)}function z(e,_,t){for(var r=0;r<t.length;r++)Y(t[r],t[++r],t[++r]);d.__c&&d.__c(_,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){d.__e(o,n.__v)}})}function $e(e,_,t,r,n,o,l,u,s){var c,a,i,p,f,g,x,b=t.props,m=_.props,k=_.type;if(k==="svg"&&(n=!0),o!=null){for(c=0;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!k&&(k?f.localName===k:f.nodeType===3)){e=f,o[c]=null;break}}if(e==null){if(k===null)return document.createTextNode(m);e=n?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,m.is&&m),o=null,u=!1}if(k===null)b===m||u&&e.data===m||(e.data=m);else{if(o=o&&F.call(e.childNodes),b=t.props||$,!u&&o!=null)for(b={},c=0;c<e.attributes.length;c++)b[(f=e.attributes[c]).name]=f.value;for(c in b)f=b[c],c=="children"||(c=="dangerouslySetInnerHTML"?i=f:c==="key"||c in m||V(e,c,null,f,n));for(c in m)f=m[c],c=="children"?p=f:c=="dangerouslySetInnerHTML"?a=f:c=="value"?g=f:c=="checked"?x=f:c==="key"||u&&typeof f!="function"||b[c]===f||V(e,c,f,b[c],n);if(a)u||i&&(a.__html===i.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),_.__k=[];else if(i&&(e.innerHTML=""),ge(e,Q(p)?p:[p],_,t,r,n&&k!=="foreignObject",o,l,o?o[0]:t.__k&&H(t,0),u,s),o!=null)for(c=o.length;c--;)o[c]!=null&&ve(o[c]);u||(c="value",g!==void 0&&(g!==e[c]||k==="progress"&&!g||k==="option"&&g!==b[c])&&V(e,c,g,b[c],!1),c="checked",x!==void 0&&x!==e[c]&&V(e,c,x,b[c],!1))}return e}function Y(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){d.__e(r,t)}}function G(e,_,t){var r,n;if(d.unmount&&d.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Y(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,_)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(n=0;n<r.length;n++)r[n]&&G(r[n],_,t||typeof e.type!="function");t||e.__e==null||ve(e.__e),e.__=e.__e=e.__d=void 0}function Ce(e,_,t){return this.constructor(e,t)}function Ee(e,_,t){var r,n,o,l;d.__&&d.__(e,_),n=(r=typeof t=="function")?null:t&&t.__k||_.__k,o=[],l=[],X(_,e=(!r&&t||_).__k=Ne(W,null,[e]),n||$,$,_.ownerSVGElement!==void 0,!r&&t?[t]:n?null:_.firstChild?F.call(_.childNodes):null,o,!r&&t?t:n?n.__e:_.firstChild,r,l),e.__d=void 0,z(o,e,l)}F=J.slice,d={__e:function(e,_,t,r){for(var n,o,l;_=_.__;)if((n=_.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(e)),l=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,r||{}),l=n.__d),l)return n.__E=n}catch(u){e=u}throw e}},he=0,L.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=N({},this.state),typeof e=="function"&&(e=e(N({},t),this.props)),e&&N(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),_e(this))},L.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_e(this))},L.prototype.render=W,P=[],me=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B=function(e,_){return e.__v.__b-_.__v.__b},R.__r=0;var U,v,j,oe,ie=0,ke=[],A=[],y=d,le=y.__b,ce=y.__r,ue=y.diffed,se=y.__c,fe=y.unmount,ae=y.__;function De(e,_){y.__h&&y.__h(v,e,ie||_),ie=0;var t=v.__H||(v.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:A}),t.__[e]}function Se(e,_,t){var r=De(U++,2);if(r.t=e,!r.__c&&(r.__=[t?t(_):Ae(void 0,_),function(u){var s=r.__N?r.__N[0]:r.__[0],c=r.t(s,u);s!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.u)){var n=function(u,s,c){if(!r.__c.__H)return!0;var a=r.__c.__H.__.filter(function(p){return!!p.__c});if(a.every(function(p){return!p.__N}))return!o||o.call(this,u,s,c);var i=!1;return a.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(i=!0)}}),!(!i&&r.__c.props===u)&&(!o||o.call(this,u,s,c))};v.u=!0;var o=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(u,s,c){if(this.__e){var a=o;o=void 0,n(u,s,c),o=a}l&&l.call(this,u,s,c)},v.shouldComponentUpdate=n}return r.__N||r.__}function de(e,_){var t=De(U++,7);return Le(t.__H,_)?(t.__V=e(),t.i=_,t.__h=e,t.__V):t.__}function Ve(){for(var e;e=ke.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(M),e.__H.__h.forEach(K),e.__H.__h=[]}catch(_){e.__H.__h=[],y.__e(_,e.__v)}}y.__b=function(e){v=null,le&&le(e)},y.__=function(e,_){e&&_.__k&&_.__k.__m&&(e.__m=_.__k.__m),ae&&ae(e,_)},y.__r=function(e){ce&&ce(e),U=0;var _=(v=e.__c).__H;_&&(j===v?(_.__h=[],v.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=A,t.__N=t.i=void 0})):(_.__h.forEach(M),_.__h.forEach(K),_.__h=[],U=0)),j=v},y.diffed=function(e){ue&&ue(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(ke.push(_)!==1&&oe===y.requestAnimationFrame||((oe=y.requestAnimationFrame)||Te)(Ve)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==A&&(t.__=t.__V),t.i=void 0,t.__V=A})),j=v=null},y.__c=function(e,_){_.some(function(t){try{t.__h.forEach(M),t.__h=t.__h.filter(function(r){return!r.__||K(r)})}catch(r){_.some(function(n){n.__h&&(n.__h=[])}),_=[],y.__e(r,t.__v)}}),se&&se(e,_)},y.unmount=function(e){fe&&fe(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{M(r)}catch(n){_=n}}),t.__H=void 0,_&&y.__e(_,t.__v))};var pe=typeof requestAnimationFrame=="function";function Te(e){var _,t=function(){clearTimeout(r),pe&&cancelAnimationFrame(_),setTimeout(e)},r=setTimeout(t,100);pe&&(_=requestAnimationFrame(t))}function M(e){var _=v,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),v=_}function K(e){var _=v;e.__c=e.__(),v=_}function Le(e,_){return!e||e.length!==_.length||_.some(function(t,r){return t!==e[r]})}function Ae(e,_){return typeof _=="function"?_(e):_}const I=e=>{throw new Error("Didn't expect to get here")};var Me=0;function h(e,_,t,r,n,o){var l,u,s={};for(u in _)u=="ref"?l=_[u]:s[u]=_[u];var c={type:e,props:s,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Me,__i:-1,__u:0,__source:n,__self:o};if(typeof e=="function"&&(l=e.defaultProps))for(u in l)s[u]===void 0&&(s[u]=l[u]);return d.vnode&&d.vnode(c),c}const Re=e=>{if([e.numberOfDice,e.numberOfDice].some(isNaN))return null;const _=(r,n,o)=>{switch(console.log("old: ",r,`
new: `,n),o){case"none":return r+n;case"chooseHighest":return r>n?r:n;case"chooseLowest":return r>n||r===0?n:r;default:return I()}},t=[];for(let r=0;r<e.numberOfRolls;r++){let n=0;for(let o=0;o<e.numberOfDice;o++)n=_(n,Math.floor(Math.random()*e.sidesPerDice)+1,e.modifiers);t.push(n)}return t},Ue=e=>{switch(e.modifiers){case"none":return e.numberOfDice;case"chooseLowest":case"chooseHighest":return 1;default:return I(e.modifiers)}},Fe=e=>{switch(e.modifiers){case"none":return e.numberOfDice*e.sidesPerDice;case"chooseLowest":case"chooseHighest":return e.sidesPerDice;default:return I(e.modifiers)}},xe=e=>{var n;if(!e.diceValues)return[];const _={},t=Ue(e),r=Fe(e);for(let o=t;o<=r;o++)_[o]=0;return(n=e.diceValues)==null||n.forEach(o=>_[o]+=1),Object.entries(_).map(o=>[parseInt(o[0]),o[1]])},We=e=>xe(e).reduce((_,t)=>{const r=t[0],n=t[1];return _+r*n/e.numberOfRolls},0),Ie={modifiers:"none",numberOfRolls:100,numberOfDice:1,sidesPerDice:6,diceValues:null},qe=()=>{const e=(l,u)=>{const[s,c]=u;switch(s){case"updateModifiers":return{...l,modifiers:c.modifiers,diceValues:null};case"updateNumberOfRolls":return{...l,numberOfRolls:c.numberOfRolls,diceValues:null};case"updateNumberOfDice":return{...l,numberOfDice:c.numberOfDice,diceValues:null};case"updateSidesPerDice":return{...l,sidesPerDice:c.sidesPerDice,diceValues:null};case"generateDiceValues":return{...l,diceValues:Re(l)};default:return I()}},[_,t]=Se(e,Ie),r=de(()=>xe(_),[_]),n=de(()=>We(_),[_]),o=h("br",{style:{margin:"10px"}});return h("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[h("label",{children:"Number of Rolls"}),h("input",{type:"number",value:_.numberOfRolls,onChange:l=>t(["updateNumberOfRolls",{numberOfRolls:l.currentTarget.valueAsNumber}])}),o,h("label",{children:"Number of Dice"}),h("input",{type:"number",value:_.numberOfDice,onChange:l=>t(["updateNumberOfDice",{numberOfDice:l.currentTarget.valueAsNumber}])}),o,h("label",{children:"Sides per Dice"}),h("input",{type:"number",value:_.sidesPerDice,onChange:l=>t(["updateSidesPerDice",{sidesPerDice:l.currentTarget.valueAsNumber}])}),o,h("div",{style:{display:"flex",justifyContent:"space-around"},children:[h("span",{children:[h("label",{children:"Choose Highest"}),h("input",{type:"checkbox",checked:_.modifiers=="chooseHighest",onChange:l=>t(["updateModifiers",{modifiers:l.currentTarget.checked?"chooseHighest":"none"}])})]}),o,h("span",{children:[h("label",{children:"Choose Lowest"}),h("input",{type:"checkbox",checked:_.modifiers=="chooseLowest",onChange:l=>t(["updateModifiers",{modifiers:l.currentTarget.checked?"chooseLowest":"none"}])})]})]}),o,h("button",{onClick:()=>t(["generateDiceValues"]),children:"Roll Dice"}),o,h("hr",{style:{width:"50%"}}),o,h("div",{style:{display:"flex"},children:r.map(([l,u])=>h("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[h("div",{children:u}),h("div",{style:{backgroundColor:"gray",width:"20px",height:`${200*u/_.numberOfRolls}px`}}),h("div",{style:{width:"20px"},children:l})]}))}),h("div",{children:["Expected Value: ",n]})]})};Ee(h(qe,{}),document.getElementById("app"));