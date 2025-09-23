
(function(){
  const LS_KEY = 'astr_lang';
  function detectLang(){
    const stored = localStorage.getItem(LS_KEY);
    if (stored) return stored;
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return /zh|cn/i.test(nav) ? 'zh' : 'en';
  }
  function currentLangFromPath(){
    return location.pathname.startsWith('/en/') ? 'en' : 'zh';
  }
  function go(lang){
    try{ localStorage.setItem(LS_KEY, lang); }catch(e){}
    const isEn = location.pathname.startsWith('/en/');
    if (lang === 'en' && !isEn){
      const to = '/en' + (location.pathname === '/' ? '/' : location.pathname) + location.search + location.hash;
      location.assign(to.replace('//en//','/en/'));
    } else if (lang === 'zh' && isEn){
      const to = location.pathname.replace(/^\/en\//,'/') + location.search + location.hash;
      location.assign(to);
    }
  }
  // attach handlers after DOM ready
  document.addEventListener('click', function(e){
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    e.preventDefault();
    go(btn.getAttribute('data-lang'));
  });

  // Auto-redirect only on first visit to home pages
  if (document.referrer === '' && (location.pathname === '/' || location.pathname === '/index.html' || location.pathname === '/en/' || location.pathname === '/en/index.html')){
    const want = detectLang();
    const cur = currentLangFromPath();
    if (want !== cur) go(want);
  }
})();
