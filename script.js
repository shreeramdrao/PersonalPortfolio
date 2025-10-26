document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
    // Typing Effect
    const textElement = document.querySelector(".typing-effect");
    const words = ["AI Engineer", "ML Engineer", "Generative AI Developer"];
=======
    // ===================
    // THEME TOGGLE
    // ===================
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'neon') {
        htmlElement.setAttribute('data-theme', 'neon');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'neon') {
            htmlElement.removeAttribute('data-theme');
            themeToggle.querySelector('i').className = 'fas fa-moon';
            localStorage.setItem('portfolio-theme', 'default');
        } else {
            htmlElement.setAttribute('data-theme', 'neon');
            themeToggle.querySelector('i').className = 'fas fa-sun';
            localStorage.setItem('portfolio-theme', 'neon');
        }
    });
    
    // ===================
    // ACTIVE NAVIGATION INDICATOR
    // ===================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    updateActiveNav();
    
    // ===================
    // TYPING EFFECT
    // ===================
    const textElement = document.querySelector(".typing-effect");
    const words = ["AI Engineer", "ML Engineer", "Gen AI Developer"];
>>>>>>> d52d419 (Final portfolio update)
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let delayAfterWord = 1000; // Delay after typing a word

    function type() {
        let currentWord = words[wordIndex];
        let currentText = isDeleting 
            ? currentWord.substring(0, letterIndex - 1) 
            : currentWord.substring(0, letterIndex + 1);

        textElement.innerHTML = currentText + `<span class="cursor">|</span>`; // Blinking Cursor

        if (!isDeleting && letterIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, delayAfterWord);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        letterIndex += isDeleting ? -1 : 1;
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
    type();
    
    // Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
<<<<<<< HEAD
=======
            // Update aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Prevent body scroll when menu is open
            if (isExpanded) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                menuToggle.focus();
            }
>>>>>>> d52d419 (Final portfolio update)
        });
    }
    
    // Close mobile menu when clicking on a nav link
<<<<<<< HEAD
    const navLinks = document.querySelectorAll('#navMenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
=======
    const navLinksMenu = document.querySelectorAll('#navMenu a');
    navLinksMenu.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    // Mobile performance optimizations
    let ticking = false;
    
    function updateOnScroll() {
        // Throttled scroll updates for better performance
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNav();
                animateOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Use passive event listeners for better performance
    window.addEventListener('scroll', updateOnScroll, { passive: true });
    
    // Optimize resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Recalculate layouts on resize
            updateActiveNav();
        }, 250);
    }, { passive: true });
    
>>>>>>> d52d419 (Final portfolio update)
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button based on scroll position
<<<<<<< HEAD
    window.addEventListener('scroll', function() {
=======
    function updateScrollButton() {
>>>>>>> d52d419 (Final portfolio update)
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
<<<<<<< HEAD
    });
=======
    }
    
    // Add scroll button update to the optimized scroll handler
    const originalUpdateOnScroll = updateOnScroll;
    updateOnScroll = function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNav();
                animateOnScroll();
                updateScrollButton();
                ticking = false;
            });
            ticking = true;
        }
    };
>>>>>>> d52d419 (Final portfolio update)
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        const elements = document.querySelectorAll('.skill, .timeline-item, .certification-card');
        
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionPosition < windowHeight - 50) {
                section.classList.add('visible');
            }
        });
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    animateOnScroll();
<<<<<<< HEAD
});  // End of DOMContentLoaded event listener

=======
    
    // ===================
    // RENDER PROJECTS FROM JSON
    // ===================
    renderProjects();
    
});  // End of DOMContentLoaded event listener

// ===================
// PROJECT RENDERING & FILTERING
// ===================
let projectsData = [];
let currentFilter = 'all';

// Fallback data if JSON fails to load
const fallbackProjects = [
    {"id":1,"title":"Cysinfo AI","shortDesc":"Cybersecurity AI Assistant","description":"A project utilizing Large Language Models (LLMs) and Generative AI to enhance cybersecurity learning and problem-solving.","tags":["LLMs","Generative AI","Python","NLP","AI"],"github":"https://github.com/shreeramdrao/Cysinfo-AI.git","demo":"","featured":true,"icon":"fas fa-shield-alt"},
    {"id":2,"title":"DocuSense","shortDesc":"AI-powered Documentation Assistant","description":"An AI-powered documentation assistant using RAG with LangChain, LLaMA 2, and Nomic Embed Text.","tags":["LangChain","LLaMA 2","Streamlit","RAG","AI"],"github":"https://github.com/shreeramdrao/DocuSense.git","demo":"","featured":true,"icon":"fas fa-file-alt"},
    {"id":3,"title":"Voice Genius","shortDesc":"Echoes of Intelligence","description":"A web application that utilizes OpenAI API and SpeechRecognition API to create a voice-accessible chat interface.","tags":["OpenAI","Speech Recognition","GPT-3.5","Web APIs","AI"],"github":"https://github.com/shreeramdrao/VoiceGenius.git","demo":"","featured":true,"icon":"fas fa-microphone"},
    {"id":4,"title":"Beyond Skin-Deep","shortDesc":"Melanoma Detection using Deep Learning","description":"A comprehensive project leveraging state-of-the-art deep learning techniques to accurately detect melanoma skin cancer.","tags":["CNN","Deep Learning","Image Processing","Python","ML"],"github":"https://github.com/shreeramdrao/Beyond-Skin-Deep.git","demo":"","featured":true,"icon":"fas fa-heartbeat"}
];

async function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    try {
        // Try to fetch from JSON file
        const response = await fetch('projects-data.json');
        if (response.ok) {
            projectsData = await response.json();
        } else {
            throw new Error('Failed to load projects');
        }
    } catch (error) {
        console.log('Using fallback project data');
        projectsData = fallbackProjects;
    }
    
    displayProjects(projectsData);
    setupProjectFilters();
}

function displayProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    // Clear existing projects
    projectsGrid.innerHTML = '';
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #999;">No projects found.</p>';
        return;
    }
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.featured ? 'featured' : ''}`;
        projectCard.setAttribute('data-tags', project.tags.join(','));
        
        projectCard.innerHTML = `
            ${project.featured ? '<div class="project-featured-badge">Featured</div>' : ''}
            <div class="project-icon"><i class="${project.icon || 'fas fa-code'}"></i></div>
            <h3>${project.title}</h3>
            <p class="project-subtitle">${project.shortDesc}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fab fa-github"></i> GitHub</a>` : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('projectSearch');
    
    // Filter button click
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            filterProjects();
        });
    });
    
    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }
}

function filterProjects() {
    const searchInput = document.getElementById('projectSearch');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    let filtered = projectsData;
    
    // Filter by category
    if (currentFilter !== 'all') {
        filtered = filtered.filter(project => 
            project.tags.some(tag => tag.includes(currentFilter))
        );
    }
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    displayProjects(filtered);
}

>>>>>>> d52d419 (Final portfolio update)
// Open Modal Function
function openModal(certId) {
    document.getElementById(certId).style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// Close Modal Function
function closeModal(certId) {
    document.getElementById(certId).style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Close Modal on Click Outside
window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Restore scrolling
        }
    });
};

// Close Modal on Escape Key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        let modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Restore scrolling
        });
    }
});

<<<<<<< HEAD
=======
// Artisan Economy Modal Functions
function openModal(id) {
    document.getElementById(id + 'Modal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal(id) {
    document.getElementById(id + 'Modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

>>>>>>> d52d419 (Final portfolio update)
// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('y8WhK2Rd-3m-NQO8s'); // Replace with your EmailJS public key

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;

                // Send email using EmailJS
<<<<<<< HEAD
                emailjs.send('service_iy1svty', 'template_muis5vr', { // Replace with your service and template IDs
=======
                emailjs.send('service_jox3k0d', 'template_muis5vr', { // Replace with your service and template IDs
>>>>>>> d52d419 (Final portfolio update)
                    to_email: 'shreeramds3462@gmail.com',
                    from_name: name,
                    from_email: email,
                    message: message
                }).then(function() {
                    // Create success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'form-success';
                    successMessage.innerHTML = `<i class="fas fa-check-circle"></i> Thanks ${name}! Your message has been sent successfully.`;
                    
                    // Replace form with success message
                    contactForm.innerHTML = '';
                    contactForm.appendChild(successMessage);
                    
                    // Reset form after 5 seconds
                    setTimeout(() => {
                        contactForm.innerHTML = `
                            <div class="form-group">
                                <input type="text" id="name" placeholder="Your Name" required>
                            </div>
                            <div class="form-group">
                                <input type="email" id="email" placeholder="Your Email" required>
                            </div>
                            <div class="form-group">
                                <textarea id="message" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" class="submit-btn">Send Message</button>
                        `;
                    }, 5000);
                }).catch(function(error) {
                    // Handle error
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'form-error';
                    errorMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Sorry, there was an error sending your message. Please try again.`;
                    contactForm.insertBefore(errorMessage, contactForm.firstChild);
                    
                    // Reset button state
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
            }
        });
    }
});