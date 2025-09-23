
(function(){
  const KEY='astr_lang_choice';
  function show(lang){
    document.querySelectorAll('.lang').forEach(el=>{
      el.classList.toggle('hidden', !el.classList.contains(lang));
    });
    try{ localStorage.setItem(KEY, lang); }catch(e){}
  }
  function detect(){
    const saved = localStorage.getItem(KEY);
    if (saved) return saved;
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return /zh|cn/i.test(nav) ? 'zh' : 'en';
  }
  window.addEventListener('DOMContentLoaded', ()=>{
    show(detect());
    document.querySelectorAll('[data-lang]').forEach(btn=>{
      btn.addEventListener('click', ()=> show(btn.getAttribute('data-lang')));
    });
  });
})();
