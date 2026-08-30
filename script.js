/**
 * G7 HITECH / JOHNYCODE 
 * Portfolio Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE MENU TOGGLE
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const bars = document.querySelectorAll('.bar');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Simple X animation for hamburger
        bars[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        bars[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // 2. SMOOTH SCROLLING FOR ALL ANCHORS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. HEADER SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(10, 10, 12, 0.98)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.backgroundColor = 'rgba(10, 10, 12, 0.9)';
        }
    });

    // 4. FORM SUBMISSION HANDLING (SIMULATED)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Note: Native mailto: will still trigger, but we can add UI feedback
            console.log('Form submission initiated to Adewumi Gift John');
        });
    }

    // 5. REDUCED MOTION ACCESSIBILITY
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasReducedMotion) {
        // Disable scroll-behavior via JS if needed for older browsers
        document.documentElement.style.scrollBehavior = 'auto';
    }

    // 6. DYNAMIC LOGO FALLBACK LOGIC
    // If logo.png fails to load, the CSS/HTML takes care of showing the text.
    // This logs the status for debugging.
    const logoImg = document.querySelector('.logo-wrapper img');
    if (logoImg) {
        logoImg.onerror = () => {
            console.log('G7 Logo file not found, using text wordmark fallback.');
        };
    }
});
