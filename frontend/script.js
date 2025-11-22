// Small interactivity: mobile nav toggle and dynamic year
document.addEventListener('DOMContentLoaded',function(){
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click',function(){
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // set year in footer
  const yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav if open
        if(window.innerWidth < 840 && nav) nav.style.display = '';
      }
    });
  });
});