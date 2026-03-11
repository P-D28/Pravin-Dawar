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

    // Active Navigation Highlight & Shuttle Animation
    const sections = document.querySelectorAll('section');
    const navShuttle = document.querySelector('.nav-shuttle');
    
    function updateShuttlePosition(link) {
        if (!navShuttle || !link) return;
        const linkRect = link.getBoundingClientRect();
        const containerRect = document.querySelector('.island-links').getBoundingClientRect();
        
        navShuttle.style.width = `${linkRect.width}px`;
        navShuttle.style.transform = `translateX(${linkRect.left - containerRect.left}px)`;
    }

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        let activeLink = null;
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
                activeLink = link;
            }
        });
        
        if (activeLink) {
            updateShuttlePosition(activeLink);
        }
    }

    // Initialize shuttle position
    setTimeout(updateActiveLink, 100);

    // Hover effect for shuttle
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            updateShuttlePosition(link);
        });
    });

    const navLinksContainer = document.querySelector('.island-links');
    if (navLinksContainer) {
        navLinksContainer.addEventListener('mouseleave', () => {
            const activeLink = document.querySelector('.nav-link.active');
            if (activeLink) {
                updateShuttlePosition(activeLink);
            } else {
                navShuttle.style.width = '0px';
            }
        });
    }

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
    let currentTag = 'all';

    const filterBtns = document.querySelectorAll('.filter-btn');
    const tagFilterBtns = document.querySelectorAll('.tag-filter-btn');
    const portfolioItems = document.querySelectorAll('.bento-item');

    function applyFilters() {
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            const itemTagsAttr = item.getAttribute('data-tags');
            const itemTags = itemTagsAttr ? itemTagsAttr.split(',') : [];
            
            const categoryMatch = currentCategory === 'all' || itemCategory === currentCategory;
            const tagMatch = currentTag === 'all' || itemTags.includes(currentTag);
            
            if (categoryMatch && tagMatch) {
                item.style.display = 'block';
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

    tagFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tagFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTag = btn.getAttribute('data-tag');
            applyFilters();
        });
    });

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

    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // Check if device supports touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Add a slight delay to the outline for a trailing effect
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .filter-btn, .tag-filter-btn, .dot, .socials a, .holo-socials a, .bento-inner');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hover');
                cursorOutline.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hover');
                cursorOutline.classList.remove('hover');
            });
        });
    } else {
        // Hide custom cursor elements on touch devices
        if (cursorDot) cursorDot.style.display = 'none';
        if (cursorOutline) cursorOutline.style.display = 'none';
        document.body.style.cursor = 'auto';
        
        // Restore default cursor for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .filter-btn, .tag-filter-btn, .dot, .socials a, .holo-socials a, .bento-inner');
        interactiveElements.forEach(el => {
            el.style.cursor = 'pointer';
        });
    }
});
