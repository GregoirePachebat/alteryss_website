// ========================================
// Language Translation System
// ========================================

// Store loaded translations
let translations = {};
let isLoadingTranslations = false;
let translationsLoadedPromise = null;

// Simple YAML parser for front matter (handles basic key-value pairs and nested objects)
function parseSimpleYAML(yamlStr) {
    const lines = yamlStr.split('\n');
    const result = {};
    const stack = [{ obj: result, indent: -1 }];
    
    for (const line of lines) {
        if (!line.trim() || line.trim().startsWith('#')) continue;
        
        const indent = line.search(/\S/);
        const trimmed = line.trim();
        
        // Handle key-value pairs
        const colonIndex = trimmed.indexOf(':');
        if (colonIndex > 0) {
            const key = trimmed.substring(0, colonIndex).trim();
            let value = trimmed.substring(colonIndex + 1).trim();
            
            // Pop stack until we find the right parent
            while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
                stack.pop();
            }
            
            const parent = stack[stack.length - 1].obj;
            
            // Check if value is empty (nested object coming)
            if (!value) {
                parent[key] = {};
                stack.push({ obj: parent[key], indent: indent });
            } else {
                // Handle quoted strings
                if ((value.startsWith('"') && value.endsWith('"')) || 
                    (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                parent[key] = value;
            }
        }
    }
    
    return result;
}

// Function to parse YAML front matter from markdown content
function parseFrontMatter(content) {
    const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/;
    const match = content.match(frontMatterRegex);
    
    if (match) {
        try {
            // Parse YAML front matter using simple parser
            const frontMatter = parseSimpleYAML(match[1]);
            const body = match[2].trim();
            return { frontMatter, body };
        } catch (e) {
            console.error('Error parsing YAML front matter:', e);
            return { frontMatter: {}, body: content };
        }
    }
    
    return { frontMatter: {}, body: content };
}

// Function to load a single markdown file
async function loadMarkdownFile(lang, section) {
    try {
        const response = await fetch(`content/${lang}/${section}.md`);
        if (!response.ok) {
            throw new Error(`Failed to load ${lang}/${section}.md`);
        }
        const content = await response.text();
        const { frontMatter, body } = parseFrontMatter(content);
        return frontMatter;
    } catch (error) {
        console.error(`Error loading ${lang}/${section}.md:`, error);
        return {};
    }
}

// Function to load all translations for a language
async function loadLanguageTranslations(lang) {
    const sections = ['nav', 'hero', 'sponsors', 'vision', 'missions', 'team', 'partners', 'contact', 'legal', 'footer', 'messages'];
    
    const results = await Promise.all(
        sections.map(section => loadMarkdownFile(lang, section))
    );
    
    const langTranslations = {};
    sections.forEach((section, index) => {
        langTranslations[section] = results[index];
    });
    
    return langTranslations;
}

// Function to load translations for both languages
async function loadAllTranslations() {
    if (isLoadingTranslations) {
        return translationsLoadedPromise;
    }
    
    isLoadingTranslations = true;
    translationsLoadedPromise = (async () => {
        try {
            const [enTranslations, frTranslations] = await Promise.all([
                loadLanguageTranslations('en'),
                loadLanguageTranslations('fr')
            ]);
            
            translations = {
                en: enTranslations,
                fr: frTranslations
            };
            
            return translations;
        } catch (error) {
            console.error('Error loading translations:', error);
            return {};
        } finally {
            isLoadingTranslations = false;
        }
    })();
    
    return translationsLoadedPromise;
}

// Function to get nested translation value
function getTranslation(lang, key) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    
    return value;
}

// Function to set language
async function setLanguage(lang) {
    // Ensure translations are loaded
    await loadAllTranslations();
    
    // Save language preference
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(lang, key);
        
        // Check if the translation contains HTML tags
        if (/<[^>]+>/.test(translation)) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(lang, key);
        element.placeholder = translation;
    });
    
    // Update language toggle visual state
    document.querySelectorAll('.lang-option').forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if (optionLang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Update form success message translation
    window.currentLanguage = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', async () => {
    // Get saved language or default to 'en'
    const savedLang = localStorage.getItem('language') || 'en';
    await setLanguage(savedLang);
    
    // Add click handler for language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', async () => {
            const currentLang = localStorage.getItem('language') || 'en';
            const newLang = currentLang === 'en' ? 'fr' : 'en';
            await setLanguage(newLang);
        });
    }
    
    // Add click handlers for individual language options
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', async (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            await setLanguage(lang);
        });
    });
});

// ========================================
// End of Language Translation System
// ========================================

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        // For now, we'll just show a success message
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
            z-index: 9999;
            animation: slideInRight 0.5s ease;
        `;
        
        // Use translated message
        const currentLang = window.currentLanguage || localStorage.getItem('language') || 'en';
        const successText = getTranslation(currentLang, 'messages.formSuccess');
        successMessage.textContent = successText;
        
        document.body.appendChild(successMessage);
        
        // Clear form
        contactForm.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => {
                if (successMessage.parentNode) {
                    document.body.removeChild(successMessage);
                }
            }, 500);
        }, 5000);
    });
}

// Add keyframe animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero circles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.5;
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Console message for developers
const currentLangForConsole = localStorage.getItem('language') || 'en';
if (currentLangForConsole === 'fr') {
    console.log('%cBienvenue sur Alteryss ! 🌱', 'color: #10b981; font-size: 20px; font-weight: bold;');
    console.log('%cL\'innovation technologique au service de la performance humaine', 'color: #06b6d4; font-size: 14px;');
} else {
    console.log('%cWelcome to Alteryss ! 🌱', 'color: #10b981; font-size: 20px; font-weight: bold;');
    console.log('%cTechnological innovation for human performance', 'color: #06b6d4; font-size: 14px;');
}
