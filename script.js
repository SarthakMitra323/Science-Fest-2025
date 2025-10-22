// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Firebase Configuration
// Replace these with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD-JoW5Q0GTlm8taQUet6E5DcPU6EUejSg",
    authDomain: "science-fest-feedback-storage.firebaseapp.com",
    projectId: "science-fest-feedback-storage",
    storageBucket: "science-fest-feedback-storage.firebasestorage.app",
    messagingSenderId: "953304023023",
    appId: "1:953304023023:web:8e017168331814badf401a",
    measurementId: "G-GN8RZC2Z1T"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

let db;

try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Firebase initialization error:', error);
}

// Smooth Scrolling for Navigation Links
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

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.9)';
    }
});

// Form Submission Handler
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate
    if (!name || !message) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    // Disable submit button
    const submitBtn = feedbackForm.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';

    try {
        // Add document to Firestore
        if (db) {
            await addDoc(collection(db, 'feedback'), {
                name: name,
                email: email || 'Not provided',
                message: message,
                timestamp: serverTimestamp(),
                date: new Date().toISOString()
            });

            // Success
            showToast('✅ Thank you for your feedback!', 'success');
            feedbackForm.reset();
        } else {
            // Fallback if Firebase is not configured
            console.log('Feedback (offline):', { name, email, message });
            showToast('✅ Thank you for your feedback! (Demo mode)', 'success');
            feedbackForm.reset();
        }
    } catch (error) {
        console.error('Error adding feedback:', error);
        showToast('❌ Error submitting feedback. Please try again.', 'error');
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Feedback</span><div class="btn-glow"></div>';
    }
});

// Toast Notification Function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastText = toast.querySelector('span');
    
    toastText.textContent = message;
    
    if (type === 'error') {
        toast.style.background = 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)';
    } else {
        toast.style.background = 'linear-gradient(135deg, #00d9ff 0%, #0066ff 100%)';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled * 0.002);
    }
});

// Add hover sound effect (optional - can be enabled)
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add subtle animation on hover
        const avatar = card.querySelector('.avatar-placeholder');
        if (avatar) {
            avatar.style.animation = 'pulse 0.5s ease';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const avatar = card.querySelector('.avatar-placeholder');
        if (avatar) {
            avatar.style.animation = '';
        }
    });
});

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Fun animation when konami code is entered
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particle.style.opacity = '0.5';
    });
    
    showToast('🎉 Easter egg activated! Team TFFS rocks!', 'success');
}

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on load
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
// });

console.log('%c🚀 TFFS Science Fest 2025 - Nexus AI', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with ❤️ by Team TFFS', 'color: #8892b0; font-size: 14px;');
