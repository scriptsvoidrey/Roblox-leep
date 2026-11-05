const button = document.getElementById('menuButton');
const nav = document.querySelector('nav');
button?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
