import {zh,translateText} from './zh.js?v=22';
import {en} from './en.js?v=22';
const reverse=Object.fromEntries(Object.entries(zh).map(([a,b])=>[b,a]));
let language='zh';try{language=localStorage.getItem('bg-language')==='en'?'en':'zh';}catch{}
const originals=new WeakMap();
let titleSource, titleOutput;
export function english(text){const t=text.trim();let v=en[t]??reverse[t];if(v===undefined){if(t.endsWith(' | BG Wallet'))v=english(t.slice(0,-12))+' | BG Wallet';else if(t.startsWith('产品 / '))v='Products / '+english(t.slice(5));else if(t.endsWith(' →')||t.endsWith(' ↓'))v=english(t.slice(0,-2))+t.slice(-2);else if(t.startsWith('切换至'))v='Show '+english(t.slice(3));else v=t;}return text.replace(t,v);}
function copy(text){return language==='en'?english(translateText(text)):translateText(text);}
export function applyLanguage(){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
 while(n=walker.nextNode()){
  if(n.parentElement?.closest('script,style,.logo,[data-language]'))continue;
  let state=originals.get(n);if(!state||state.output!==n.nodeValue)state={source:n.nodeValue};
  const output=copy(state.source);if(output!==n.nodeValue)n.nodeValue=output;state.output=output;originals.set(n,state);
 }
 document.querySelectorAll('[placeholder],[aria-label]').forEach(el=>{if(el.matches('[data-language]'))return;for(const a of ['placeholder','aria-label']){const value=el.getAttribute(a);if(!value)continue;const key='data-original-'+a;const source=el.getAttribute(key)||value;el.setAttribute(key,source);el.setAttribute(a,copy(source));}});
 document.documentElement.lang=language==='en'?'en':'zh-CN';if(document.title!==titleOutput)titleSource=document.title;titleOutput=copy(titleSource);document.title=titleOutput;
 document.querySelectorAll('[data-language]').forEach(b=>{b.textContent=language==='en'?'中文 ↗':'EN ↗';b.setAttribute('aria-label',language==='en'?'切换为中文':'Switch to English');});
}
export function toggleLanguage(){language=language==='en'?'zh':'en';try{localStorage.setItem('bg-language',language);}catch{}applyLanguage();}
