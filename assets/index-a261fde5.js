(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();function g(){}function N(e){return e()}function v(){return Object.create(null)}function p(e){e.forEach(N)}function L(e){return typeof e=="function"}function S(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function A(e){return Object.keys(e).length===0}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function I(e){return Array.from(e.childNodes)}let $;function a(e){$=e}const l=[],k=[],h=[],E=[],M=Promise.resolve();let m=!1;function q(){m||(m=!0,M.then(P))}function y(e){h.push(e)}const _=new Set;let f=0;function P(){if(f!==0)return;const e=$;do{try{for(;f<l.length;){const t=l[f];f++,a(t),B(t.$$)}}catch(t){throw l.length=0,f=0,t}for(a(null),l.length=0,f=0;k.length;)k.pop()();for(let t=0;t<h.length;t+=1){const r=h[t];_.has(r)||(_.add(r),r())}h.length=0}while(l.length);for(;E.length;)E.pop()();m=!1,_.clear(),a(e)}function B(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const F=new Set;function K(e,t){e&&e.i&&(F.delete(e),e.i(t))}function z(e,t,r,s){const{fragment:n,after_update:c}=e.$$;n&&n.m(t,r),s||y(()=>{const i=e.$$.on_mount.map(N).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...i):p(i),e.$$.on_mount=[]}),c.forEach(y)}function D(e,t){const r=e.$$;r.fragment!==null&&(p(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function G(e,t){e.$$.dirty[0]===-1&&(l.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,r,s,n,c,i,j=[-1]){const d=$;a(e);const o=e.$$={fragment:null,ctx:[],props:c,update:g,not_equal:n,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:v(),dirty:j,skip_bound:!1,root:t.target||d.$$.root};i&&i(o.root);let b=!1;if(o.ctx=r?r(e,t.props||{},(u,x,...w)=>{const O=w.length?w[0]:x;return o.ctx&&n(o.ctx[u],o.ctx[u]=O)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](O),b&&G(e,u)),x}):[],o.update(),b=!0,p(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const u=I(t.target);o.fragment&&o.fragment.l(u),u.forEach(C)}else o.fragment&&o.fragment.c();t.intro&&K(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),P()}a(d)}class J{$destroy(){D(this,1),this.$destroy=g}$on(t,r){if(!L(r))return g;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(r),()=>{const n=s.indexOf(r);n!==-1&&s.splice(n,1)}}$set(t){this.$$set&&!A(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Q extends J{constructor(t){super(),H(this,t,null,null,S,{})}}new Q({target:document.getElementById("app")});
