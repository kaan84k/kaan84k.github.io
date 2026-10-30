'use strict';
const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

function setTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#10120f' : '#f4f4eb';
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

const projects = [...document.querySelectorAll('[data-project]')];
const filters = [...document.querySelectorAll('[data-filter]')];
function filterProjects(category) {
  let count = 0;
  projects.forEach(project => {
    const visible = category === 'all' || project.dataset.category.split(' ').includes(category);
    project.hidden = !visible;
    if (visible) count++;
  });
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  document.querySelector('[data-project-count]').textContent = `${count} project${count === 1 ? '' : 's'}`;
}
filters.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
filterProjects('all');

const inputs = { a: true, b: true };
function updateCircuit() {
  const on = inputs.a && inputs.b;
  const output = document.querySelector('[data-output]');
  output.dataset.on = String(on);
  output.querySelector('b').textContent = on ? '1' : '0';
  document.querySelector('[data-logic-result]').textContent = `${Number(inputs.a)} AND ${Number(inputs.b)} = ${Number(on)} · ${on ? 'Both inputs are on.' : 'Both inputs must be on for output 1.'}`;
  document.querySelectorAll('[data-input]').forEach(button => {
    const value = inputs[button.dataset.input];
    button.setAttribute('aria-pressed', String(value));
    button.setAttribute('aria-label', `Input ${button.dataset.input.toUpperCase()}, ${value ? 'on' : 'off'}`);
    button.querySelector('b').textContent = value ? '1' : '0';
  });
}
document.querySelectorAll('[data-input]').forEach(button => button.addEventListener('click', () => {
  inputs[button.dataset.input] = !inputs[button.dataset.input];
  updateCircuit();
}));
updateCircuit();

if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main > section[id]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nav.querySelectorAll('a').forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
document.querySelector('[data-year]').textContent = new Date().getFullYear();
