document.getElementById('year')?.append(new Date().getFullYear());
document.querySelectorAll('.menu').forEach(btn=>btn.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open')));
