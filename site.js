// Small enhancement: mark the current page in the navigation.
const current=(location.pathname.split('/').pop()||'index.html');
document.querySelectorAll('.navlinks a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
