/* Light/dark toggle: follows the system setting until clicked, then remembers the choice */
function initTheme() {
  const r = document.documentElement;
  document.getElementById('theme').addEventListener('click', () => {
    const dark = r.dataset.theme ? r.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches;
    r.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', r.dataset.theme); } catch (e) {}
  });
}
