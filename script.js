document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav');
    const header = document.querySelector('header');
    const heroCTA = document.querySelector('.hero-cta');
    const plansSection = document.querySelector('.plans');

    // Menu Hamburger
    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', () => {
            hamburgerButton.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
    }

    // Cambia sfondo header su scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { /* Regola la distanza di scroll per far comparire lo sfondo */
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll al click su "Acquista Ora"
    if (heroCTA && plansSection) {
        heroCTA.addEventListener('click', (e) => {
            e.preventDefault(); // Previeni il comportamento predefinito del link
            plansSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
