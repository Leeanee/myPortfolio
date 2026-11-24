/* Mobile menu + highlight the link of the section in view */
function initNav() {
  const list = document.getElementById('navlist'), btn = document.getElementById('menu');
  const set = open => { list.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); };
  btn.addEventListener('click', () => set(!list.classList.contains('open')));
  list.addEventListener('click', e => { if (e.target.tagName === 'A') set(false); });

  document.addEventListener('keydown', e => { if (e.key === 'Escape' && list.classList.contains('open')) { set(false); btn.focus(); } });

  const links = [...list.querySelectorAll('a[href^="#"]')];
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), {rootMargin: '-45% 0px -50% 0px'});
  links.forEach(a => { const s = document.querySelector(a.getAttribute('href')); if (s) spy.observe(s); });
}
