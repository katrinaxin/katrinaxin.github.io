
(function(){
  const KEY='astr_lang';
  function show(lang){
    document.querySelectorAll('.lang').forEach(el=>el.classList.toggle('hidden', !el.classList.contains(lang)));
    try{localStorage.setItem(KEY,lang);}catch(e){}
  }
  function detect(){
    const s=localStorage.getItem(KEY); if(s) return s;
    const n=(navigator.languages && navigator.languages[0])||navigator.language||'en';
    return /zh|cn/i.test(n)?'zh':'en';
  }
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-lang]'); if(!b) return;
    e.preventDefault(); show(b.getAttribute('data-lang'));
  });
  if (document.referrer==='' && (location.pathname==='/'||location.pathname==='/index.html'||location.pathname==='/en/'||location.pathname==='/en/index.html')){
    const want=detect(); const cur=location.pathname.startsWith('/en/')?'en':'zh';
    if (want!==cur){
      if (want==='en' && !location.pathname.startsWith('/en/')) location.assign('/en/');
      if (want==='zh' && location.pathname.startsWith('/en/')) location.assign('/');
    }
  }
})();