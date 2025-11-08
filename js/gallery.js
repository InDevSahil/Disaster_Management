// Gallery functionality for image modal, carousel, and filters

document.addEventListener('DOMContentLoaded', function() {
    // Image Modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');

    if (modal && modalImg && modalCaption && closeBtn) {
        // Open modal when clicking on gallery images
        document.querySelectorAll('.gallery-image').forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'flex';
                modalImg.src = this.src;
                const caption = this.nextElementSibling;
                if (caption) {
                    modalCaption.innerHTML = `<h3>${caption.querySelector('h3').textContent}</h3><p>${caption.querySelector('p').textContent}</p>`;
                }
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });

        // Close modal
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });

        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Gallery filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        item.style.display = 'block';
                        // Add fade-in animation
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.transition = 'opacity 0.3s';
                            item.style.opacity = '1';
                        }, 10);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-controls.prev');
    const nextBtn = document.querySelector('.carousel-controls.next');
    const indicators = document.querySelectorAll('.indicator');

    if (carousel && carouselItems.length > 0 && prevBtn && nextBtn && indicators.length > 0) {
        let currentIndex = 0;
        const totalItems = carouselItems.length;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        }

        // Event listeners for controls
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        // Auto-play functionality
        let autoplayInterval = setInterval(nextSlide, 5000);

        // Pause autoplay on hover
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(autoplayInterval);
            });

            carouselContainer.addEventListener('mouseleave', () => {
                autoplayInterval = setInterval(nextSlide, 5000);
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') return;

            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        // Touch/swipe support
        let startX = 0;
        let endX = 0;

        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;

            if (Math.abs(diffX) > 50) { // Minimum swipe distance
                if (diffX > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        });
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Video gallery functionality
    const videos = document.querySelectorAll('.gallery-video');
    videos.forEach(video => {
        // Pause other videos when one starts playing
        video.addEventListener('play', function() {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });

        // Add loading state
        video.addEventListener('loadstart', function() {
            this.style.opacity = '0.7';
        });

        video.addEventListener('canplay', function() {
            this.style.opacity = '1';
        });
    });

    // Gallery statistics (optional enhancement)
    function updateGalleryStats() {
        const totalImages = document.querySelectorAll('.gallery-image').length;
        const totalVideos = document.querySelectorAll('.gallery-video').length;
        const totalItems = totalImages + totalVideos;

        console.log(`Gallery contains ${totalItems} items: ${totalImages} images, ${totalVideos} videos`);
    }

    updateGalleryStats();

    // Accessibility improvements
    // Add ARIA labels and roles
    if (modal) {
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'modalCaption');
    }

    if (closeBtn) {
        closeBtn.setAttribute('aria-label', 'Close gallery modal');
    }

    // Focus management for modal
    if (modal && closeBtn) {
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                // Trap focus within modal
                const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Add loading animations
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        galleryGrid.style.opacity = '0';
        setTimeout(() => {
            galleryGrid.style.transition = 'opacity 0.5s';
            galleryGrid.style.opacity = '1';
        }, 100);
    }

    // Error handling for broken images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'assets/placeholder.jpg'; // Fallback image
            this.alt = 'Image not available';
        });
    });
});
