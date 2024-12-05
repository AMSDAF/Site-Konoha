const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) { // Verifica se houve rolagem
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});