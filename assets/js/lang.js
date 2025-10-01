
document.addEventListener('click',e=>{
  const btn=e.target.closest('[data-lang]'); if(!btn) return;
  const lang=btn.getAttribute('data-lang');
  if(lang==='en'){ location.href='/en/'; } else { location.href='/'; }
});
