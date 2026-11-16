(() => {
'use strict';
const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

function setTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0b1118' : '#f4f7f8';
}
setTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
themeToggle.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* Preferences are optional. */ }
});

function setMenu(open) {
  nav.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}
menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuToggle.focus(); }
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) setMenu(false);
});
window.matchMedia('(min-width: 981px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelector('[data-year]').textContent = new Date().getFullYear();
})();
