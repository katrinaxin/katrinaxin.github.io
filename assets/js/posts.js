
async function renderPostsList(opts){
  const { containerSelector, lang } = opts;
  const jsonUrl = lang === 'en' ? '/assets/data/posts_en.json' : '/assets/data/posts.json';
  const toPostUrl = (slug) => lang === 'en' ? `/en/posts/${slug}.html` : `/posts/${slug}.html`;
  try {
    const res = await fetch(jsonUrl, { cache: 'no-store' });
    const items = await res.json();
    const wrap = document.querySelector(containerSelector);
    if(!wrap) return;
    if(!Array.isArray(items) || !items.length){
      wrap.innerHTML = `<p style="color:#475569">(${lang==='en'?'No articles yet.':'暂无文章'})</p>`;
      return;
    }
    wrap.innerHTML = items.sort((a,b)=> (a.date<b.date?1:-1)).map(post => `
      <article class="card">
        <img class="cover" src="${post.image || '/assets/img/story-1.jpg'}" alt="">
        <h3><a href="${toPostUrl(post.slug)}">${post.title}</a></h3>
        <p style="color:#475569;font-size:14px">${post.date}${post.tags?.length? ' · '+post.tags.join(' / '):''}</p>
        <p>${post.summary||''}</p>
        <p><a href="${toPostUrl(post.slug)}">${lang==='en'?'Read more →':'阅读更多 →'}</a></p>
      </article>`).join('');
  } catch(e){ console.error(e); }
}
