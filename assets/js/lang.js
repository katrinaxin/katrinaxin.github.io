
(function(){
  const KEY='astr_lang_choice';
  function wantLang(){const s=localStorage.getItem(KEY);if(s) return s;const n=(navigator.languages&&navigator.languages[0])||navigator.language||'en';return /zh|cn/i.test(n)?'zh':'en'}
  function currentLang(){return location.pathname.startsWith('/en/')?'en':'zh'}
  function goto(lang){try{localStorage.setItem(KEY,lang)}catch(e){};const isEn=currentLang()==='en';if(lang==='en'&&!isEn){const p='/en'+(location.pathname==='/'?'/':location.pathname)+location.search+location.hash;location.assign(p.replace('//en//','/en/'))}else if(lang==='zh'&&isEn){const p=location.pathname.replace(/^\/en\//,'/')+location.search+location.hash;location.assign(p)}}
  document.addEventListener('click',e=>{const b=e.target.closest('[data-lang]');if(!b)return;e.preventDefault();goto(b.getAttribute('data-lang'))});
  const isLanding=(location.pathname==='/'||location.pathname==='/index.html'||location.pathname==='/en/'||location.pathname==='/en/index.html');if(document.referrer===''&&isLanding){const w=wantLang(),c=currentLang();if(w!==c) goto(w)}
})();
