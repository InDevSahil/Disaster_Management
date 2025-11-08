// Global JavaScript for Disaster Management Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper for hero banner
    const heroSwiper = new Swiper('.banner-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // Navbar toggle for mobile (if needed in future)
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate intro section on scroll
    gsap.from('.intro h2', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.intro',
            start: 'top 80%',
        }
    });

    gsap.from('.intro p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.intro',
            start: 'top 80%',
        }
    });

    gsap.from('.stats', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
            trigger: '.intro',
            start: 'top 80%',
        }
    });

    // Animate stats counter
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        gsap.from(stat, {
            textContent: 0,
            duration: 2,
            ease: 'power1.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
            }
        });
    });

    // Emergency alert animation
    gsap.from('.emergency-alert', {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5
    });

    // Accessibility improvements
    // Add focus states for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #3182ce';
        });
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Keyboard navigation for emergency button
    const emergencyBtn = document.querySelector('.btn-emergency');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Add emergency modal or redirect logic here
                alert('Emergency services activated! Please call 112 for immediate assistance.');
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s';
    });

    // Handle window resize for responsive adjustments
    window.addEventListener('resize', function() {
        // Reinitialize Swiper if needed
        if (heroSwiper) {
            heroSwiper.update();
        }
    });

    // Add print styles
    const printStyles = `
        @media print {
            .navbar, .footer, .emergency-alert, .slider-controls {
                display: none !important;
            }
            .container {
                max-width: none !important;
                padding: 0 !important;
            }
            .intro, .contact-form-section {
                page-break-inside: avoid;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = printStyles;
    document.head.appendChild(styleSheet);
});
