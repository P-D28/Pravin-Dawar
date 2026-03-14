/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        });
    });

    // Navbar Scroll Effect & Back to Top
    const navbar = document.getElementById('navbar');
    const btt = document.getElementById('btt');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            btt.classList.add('show');
        } else {
            navbar.classList.remove('scrolled');
            btt.classList.remove('show');
        }
        updateActiveLink();
    });

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => revealOnScroll.observe(reveal));

    // Active Navigation Highlight
    const sections = document.querySelectorAll('section');
    
    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    // Initialize active link
    setTimeout(updateActiveLink, 100);

    // Local Time Updater
    function updateLocalTime() {
        const timeElement = document.getElementById('local-time');
        if (!timeElement) return;
        
        const now = new Date();
        const options = { 
            hour: '2-digit', 
            minute: '2-digit', 
            timeZoneName: 'short' 
        };
        timeElement.textContent = now.toLocaleTimeString('en-US', options);
    }
    
    updateLocalTime();
    setInterval(updateLocalTime, 60000); // Update every minute

    // Portfolio Filtering
    let currentCategory = 'all';

    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    function applyFilters() {
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            const categoryMatch = currentCategory === 'all' || itemCategory === currentCategory;
            
            if (categoryMatch) {
                item.style.display = 'flex';
                setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => { item.style.display = 'none'; }, 300);
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-filter');
            applyFilters();
        });
    });

    // Gallery Slider Logic
    const gallerySliders = document.querySelectorAll('.gallery-slider');
    gallerySliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        let currentSlide = 0;

        function showSlide(index) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showSlide(currentSlide - 1);
            });
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showSlide(currentSlide + 1);
            });
        }
    });

    // Lightbox Logic
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    let currentLightboxGroup = [];
    let currentLightboxIndex = 0;

    if (lightboxModal && lightboxImg) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                // Determine group
                const slider = img.closest('.gallery-slider');
                if (slider) {
                    currentLightboxGroup = Array.from(slider.querySelectorAll('img'));
                    currentLightboxIndex = currentLightboxGroup.indexOf(img);
                    lightboxPrev.style.display = 'flex';
                    lightboxNext.style.display = 'flex';
                } else {
                    currentLightboxGroup = [img];
                    currentLightboxIndex = 0;
                    lightboxPrev.style.display = 'none';
                    lightboxNext.style.display = 'none';
                }

                updateLightboxImage();
                lightboxModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        function updateLightboxImage() {
            const img = currentLightboxGroup[currentLightboxIndex];
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt;
            lightboxImg.classList.remove('zoomed');
        }

        if (lightboxPrev && lightboxNext) {
            lightboxPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                if (currentLightboxGroup.length > 1) {
                    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxGroup.length) % currentLightboxGroup.length;
                    updateLightboxImage();
                }
            });

            lightboxNext.addEventListener('click', (e) => {
                e.stopPropagation();
                if (currentLightboxGroup.length > 1) {
                    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxGroup.length;
                    updateLightboxImage();
                }
            });
        }

        lightboxClose.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || (e.target.closest('.lightbox-card') === null && e.target !== lightboxPrev && e.target !== lightboxNext && e.target !== lightboxImg)) {
                lightboxModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        lightboxImg.addEventListener('click', (e) => {
            e.stopPropagation();
            lightboxImg.classList.toggle('zoomed');
        });

        // Touch swipe support for lightbox
        let touchStartX = 0;
        let touchEndX = 0;

        lightboxModal.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        lightboxModal.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (currentLightboxGroup.length <= 1) return;
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left -> next
                currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxGroup.length;
                updateLightboxImage();
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right -> prev
                currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxGroup.length) % currentLightboxGroup.length;
                updateLightboxImage();
            }
        }
    }

    // Portfolio Modal Logic
    const modal = document.getElementById('portfolio-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-description');
    const modalTechList = document.getElementById('modal-tech-list');
    const modalDemoLink = document.getElementById('modal-demo-link');
    const modalCaseLink = document.getElementById('modal-case-link');

    function openModal(item) {
        // Get data from attributes
        const title = item.getAttribute('data-title');
        const category = item.getAttribute('data-category');
        const desc = item.getAttribute('data-description');
        const tech = item.getAttribute('data-tech');
        const demo = item.getAttribute('data-demo');
        const caseStudy = item.getAttribute('data-case');

        // Populate modal
        if (modalTitle) modalTitle.textContent = title;
        if (modalCategory) {
            modalCategory.textContent = category === 'uiux' ? 'UI/UX Design' : category === 'branding' ? 'Branding' : 'AI Projects';
        }
        if (modalDesc) modalDesc.textContent = desc;
        
        // Populate tech list
        if (modalTechList) {
            modalTechList.innerHTML = '';
            if (tech) {
                const techArray = tech.split(',');
                techArray.forEach(t => {
                    const li = document.createElement('li');
                    li.textContent = t.trim();
                    modalTechList.appendChild(li);
                });
            }
        }

        // Setup links
        if (modalDemoLink) {
            if (demo && demo !== '#') {
                modalDemoLink.href = demo;
                modalDemoLink.style.display = 'inline-flex';
            } else {
                modalDemoLink.style.display = 'none';
            }
        }

        if (modalCaseLink) {
            if (caseStudy && caseStudy !== '#') {
                modalCaseLink.href = caseStudy;
                modalCaseLink.style.display = 'inline-flex';
            } else {
                modalCaseLink.style.display = 'none';
            }
        }

        // Show modal
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => openModal(item));
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Testimonial Slider
    const slides = document.querySelectorAll('.testi-slide');
    const dotsContainer = document.getElementById('slider-dots');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Auto slide
    setInterval(() => {
        let next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }, 5000);

    // Subtle Parallax for Background Elements
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        const glow1 = document.querySelector('.glow-1');
        const glow2 = document.querySelector('.glow-2');
        
        if(glow1 && glow2) {
            glow1.style.transform = `translate(${mouseX * 50}px, ${mouseY * 50}px)`;
            glow2.style.transform = `translate(${mouseX * -50}px, ${mouseY * -50}px)`;
        }
    });
});
