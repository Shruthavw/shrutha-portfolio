// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.className = 'fas fa-sun';
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.className = 'fas fa-moon';
    }
}

// Typing Animation
const typedTextElement = document.getElementById('typed-text');
const textToType = "Building scalable, human-centered web applications";
let typeIndex = 0;

function typeWriter() {
    if (typeIndex < textToType.length) {
        typedTextElement.textContent += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 100);
    } else {
        // Add blinking cursor
        typedTextElement.innerHTML += '<span style="animation: blink 1s infinite;">|</span>';
    }
}

// Start typing animation after page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 2000);
});

// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation Active State
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
            
            // Animate timeline items
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.classList.add('visible');
            }
        }
    });
}, observerOptions);

// Observe all sections and timeline items
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Animate Skill Bars
function animateSkillBars() {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 500);
    });
}

// Project Modal
const projectData = {
    project1: {
        title: "EV Charger Locator Dashboard",
        description: "A comprehensive real-time EV charger locator dashboard that revolutionizes the electric vehicle charging experience. Built with modern web technologies, this application provides users with accurate, up-to-date information about charging station availability, pricing, and location.",
        features: [
            "Real-time charger availability tracking",
            "Interactive Google Maps integration",
            "Advanced filtering and search capabilities",
            "Responsive design for mobile and desktop",
            "Secure user authentication system",
            "Performance optimization reducing load time by 35%"
        ],
        technologies: ["React.js", "Node.js", "Google Maps API", "Flask", "Tailwind CSS", "PostgreSQL"],
        github: "#",
        demo: "#"
    },
    project2: {
        title: "AI Resume Analyzer",
        description: "An intelligent resume analysis system that leverages natural language processing and machine learning to provide comprehensive feedback on resume content, structure, and ATS compatibility. This tool helps job seekers optimize their resumes for better chances of landing interviews.",
        features: [
            "Advanced NLP for content analysis",
            "ATS compatibility scoring",
            "Personalized improvement recommendations",
            "Skills gap analysis",
            "Industry-specific insights",
            "Real-time feedback and suggestions"
        ],
        technologies: ["Python", "Machine Learning", "Natural Language Processing", "Flask", "React", "TensorFlow"],
        github: "#",
        demo: "#"
    },
    project3: {
        title: "Recipe Generation from Food Images",
        description: "A cutting-edge computer vision application that identifies food items from uploaded images and generates detailed, step-by-step recipes. Using advanced deep learning models, the system can recognize various cuisines and provide accurate cooking instructions with ingredient lists.",
        features: [
            "Advanced image recognition using CNN",
            "Multi-cuisine recipe generation",
            "Nutritional information analysis",
            "Ingredient substitution suggestions",
            "Dietary preference accommodations",
            "Social sharing capabilities"
        ],
        technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "React", "OpenCV"],
        github: "#",
        demo: "#"
    },
    project4: {
        title: "Parkinson's Disease Detection",
        description: "An AI-powered medical application designed for early detection of Parkinson's disease using machine learning algorithms and medical imaging analysis. This system assists healthcare professionals in making more accurate and timely diagnoses.",
        features: [
            "Medical image analysis using AI",
            "Early detection capabilities",
            "Clinical decision support system",
            "Patient data visualization",
            "Secure healthcare data handling",
            "Integration with medical workflows"
        ],
        technologies: ["Python", "Machine Learning", "Medical Imaging", "AI", "Healthcare APIs", "TensorFlow"],
        github: "#",
        demo: "#"
    },
    project5: {
        title: "Online Learning Management System",
        description: "A comprehensive Learning Management System with responsive dashboards, featuring complete course management, student progress tracking, and role-based access control. Built with modern web technologies to provide seamless educational experiences.",
        features: [
            "Complete course management system",
            "Student progress tracking",
            "Role-based access control",
            "Interactive assignments and quizzes",
            "Real-time communication tools",
            "Analytics and reporting dashboard"
        ],
        technologies: ["React", "Django", "PostgreSQL", "REST APIs", "Authentication", "WebSocket"],
        github: "#",
        demo: "#"
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const project = projectData[projectId];
    
    modalContent.innerHTML = `
        <h2 style="color: var(--accent-primary); margin-bottom: 1rem;">${project.title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.6;">${project.description}</p>
        
        <h3 style="color: var(--text-primary); margin-bottom: 1rem;">Key Features:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            ${project.features.map(feature => `<li style="color: var(--text-secondary); margin-bottom: 0.5rem;">${feature}</li>`).join('')}
        </ul>
        
        <h3 style="color: var(--text-primary); margin-bottom: 1rem;">Technologies Used:</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        <div style="display: flex; gap: 1rem;">
            <a href="${project.github}" class="btn btn-outline" target="_blank">
                <i class="fab fa-github"></i> View on GitHub
            </a>
            <a href="${project.demo}" class="btn btn-primary" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

// Download Resume
function downloadResume() {
    // Create a simple alert for demo purposes
    alert('Resume download functionality would be implemented here. Please contact directly for resume.');
}

// Copy Email
function copyEmail() {
    const email = 'shruthavw12@gmail.com';
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            showNotification('Email copied to clipboard!');
        }).catch(() => {
            fallbackCopyTextToClipboard(email);
        });
    } else {
        fallbackCopyTextToClipboard(email);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        showNotification(successful ? 'Email copied to clipboard!' : 'Failed to copy email');
    } catch (err) {
        showNotification('Failed to copy email');
    }
    document.body.removeChild(textArea);
}

// Send Message
function sendMessage(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // For demo purposes, show success message
    showNotification('Thank you for your message! I will get back to you soon.');
    form.reset();
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add slide animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .btn-full-width {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Mobile Menu Toggle (for future implementation)
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Initialize theme
document.body.setAttribute('data-theme', 'dark');

// Prevent form submission on demo
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', sendMessage);
    }
});