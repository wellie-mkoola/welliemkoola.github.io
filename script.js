// FIXED: variable + function name
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    window.scrollY > 50 
        ? navbar.style.backgroundColor = 'rgba(10,10,10,0.98)'
        : navbar.style.backgroundColor = 'rgba(10,10,10,0.95)';
});

// ADDED: mobile toggle (needed for responsiveness)
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
