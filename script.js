// ========================================
// Language Translation System
// ========================================

const translations = {
    en: {
        nav: {
            home: "Home",
            vision: "Vision",
            missions: "Missions",
            team: "Team",
            partners: "Partners",
            contact: "Contact",
            legal: "Legal Notice"
        },
        hero: {
            subtitle: "Technological innovation for human performance",
            description: "We unite engineers and doctors to build and test non-invasive tools for monitoring the human body.",
            pillar1: {
                title: "Missions",
                description: "Study the human body and develop non-invasive monitoring tools"
            },
            pillar2: {
                title: "Expertises",
                description: "Technological innovation and sustainable solutions for humans"
            },
            pillar3: {
                title: "Impacts",
                description: "Understand the human body to improve health and performance"
            },
            cta1: "Contact Us",
            cta2: "Join as a student",
            cta3: "Discover the Project"
        },
        sponsors: {
            title: "Our Sponsors",
            sponsor1: {
                name: "Sponsor Name 1",
                role: "Position / Organization",
                message: "Sponsor support message..."
            },
            sponsor2: {
                name: "Sponsor Name 2",
                role: "Position / Organization",
                message: "Sponsor support message..."
            }
        },
        vision: {
            title: "Vision",
            origin: {
                title: "Project Origin",
                content: "Alteryss was born from a shared frustration. Engineers often face regulatory constraints that limit their ability to fully test new sensors and technologies for monitoring the human body, while clinicians are frequently unaware of the innovations emerging from engineering laboratories. Our association was created to bridge this gap by fostering communication and collaboration between these two worlds."
            },
            longterm: {
                title: "Long term",
                content: "We aspire to bridge the gap between engineering and clinical practice by offering"
            },
            values: {
                title: "Core Values",
                value1: "<strong>Excellence:</strong> A rigorous and professional approach in every mission",
                value2: "<strong>Innovation:</strong> Constant search for new and adapted solutions",
                value3: "<strong>Commitment:</strong> Sincere dedication to the environmental cause",
                value4: "<strong>Collaboration:</strong> Networking with all stakeholders in the territory"
            },
            difference: {
                title: "What Sets Us Apart",
                content: "Unlike traditional firms, Alteryss combines student proximity with professional expertise, offering tailor-made solutions at affordable rates while maintaining optimal service quality. Our dual technical and environmental expertise allows us to approach projects comprehensively."
            }
        },
        missions: {
            title: "Missions / Actions",
            intro: {
                title: "Our Past Missions",
                content: "Since our creation, we have carried out several major missions to support our clients in their environmental and technical projects."
            },
            service1: {
                title: "Environmental Impact Studies",
                description: "Comprehensive analysis of environmental impacts of your projects with improvement recommendations and compensatory measures."
            },
            service2: {
                title: "Energy Transition Consulting",
                description: "Support in implementing sustainable energy solutions and optimizing energy performance."
            },
            service3: {
                title: "Biodiversity Assessment",
                description: "Fauna and flora inventories, evaluation of ecological issues, and proposals for adapted management."
            },
            service4: {
                title: "Innovation & R&D",
                description: "Development of innovative technological solutions to meet environmental challenges."
            },
            service5: {
                title: "Training & Awareness",
                description: "Workshops and training on environmental issues and sustainable development best practices."
            },
            service6: {
                title: "Project Management Assistance",
                description: "Technical and environmental support for conducting your sustainable development projects."
            },
            partnership: {
                title: "Junior-Enterprise Partnership",
                content: "Alteryss works in partnership with the Junior-Enterprise to offer quality student missions. This collaboration allows us to mobilize high-level technical skills while offering students an enriching professional experience.",
                cta: "Access the JE platform"
            }
        },
        team: {
            title: "Team / Governance",
            intro: "Our team is made up of passionate and committed students from various backgrounds in engineering, environment, and management.",
            photo: "Committee photo (to be added)",
            member1: {
                name: "First Name Last Name 1",
                role: "President",
                description: "Passionate about the environment and innovation, leads the overall strategy of the association."
            },
            member2: {
                name: "First Name Last Name 2",
                role: "Vice President",
                description: "Expert in project management, ensures mission monitoring and team coordination."
            },
            member3: {
                name: "First Name Last Name 3",
                role: "Treasurer",
                description: "Responsible for financial management and development of economic partnerships."
            },
            member4: {
                name: "First Name Last Name 4",
                role: "Secretary",
                description: "Ensures internal and external communication, manages partner relations."
            },
            member5: {
                name: "First Name Last Name 5",
                role: "Technical Manager",
                description: "Expert in innovative technological solutions for environmental projects."
            },
            member6: {
                name: "First Name Last Name 6",
                role: "Environment Manager",
                description: "Specialist in ecological issues and biodiversity, ensures the quality of our studies."
            }
        },
        partners: {
            title: "Partners / Supporters",
            intro: "Alteryss benefits from the support of numerous partners who believe in our mission and accompany us in our development.",
            feedback: {
                title: "Feedback on Junior-Enterprise Partnership",
                content: "Our collaboration with the Junior-Enterprise has been a real catalyst for our development. This partnership allows us to mobilize high-level student skills while offering a secure professional framework for our missions.",
                stat1: "Completed missions",
                stat2: "Students mobilized",
                stat3: "Client satisfaction"
            },
            partner1: {
                name: "Junior-Enterprise",
                type: "Operational Partner",
                description: "Strategic collaboration for the realization of professional student missions."
            },
            partner2: {
                name: "Partner 2",
                type: "Institutional Support",
                description: "Description of the partnership and contribution..."
            },
            partner3: {
                name: "Partner 3",
                type: "Sponsorship",
                description: "Description of sponsorship and support provided..."
            },
            partner4: {
                name: "Partner 4",
                type: "Technical Partner",
                description: "Technical support and specialized expertise..."
            }
        },
        contact: {
            title: "Contact / Get Involved",
            join: "Join Us",
            description: "Would you like to contact us, become a partner, volunteer, or provide your support? We would be delighted to exchange with you.",
            location: "France",
            howto: {
                title: "How to get involved?",
                partner: "💼 <strong>Become a partner:</strong> Collaborate with us on innovative projects",
                volunteer: "🤝 <strong>Become a volunteer:</strong> Participate in our missions and events",
                support: "❤️ <strong>Provide your support:</strong> Support our actions and development",
                student: "🎓 <strong>Student application:</strong> <a href='javascript:void(0)' class='link-je' title='Link coming soon'>Access the JE platform</a>"
            },
            form: {
                name: "Your name",
                email: "Your email",
                message: "Your message",
                submit: "Send message",
                subject: {
                    default: "Select a subject",
                    inquiry: "Information request",
                    partner: "Become a partner",
                    volunteer: "Become a volunteer",
                    support: "Provide my support",
                    student: "Student application",
                    other: "Other"
                }
            }
        },
        legal: {
            title: "Legal Notice / GDPR",
            publisher: {
                title: "Site Publisher",
                type: "Association under the 1901 law"
            },
            hosting: {
                title: "Hosting",
                intro: "This site is hosted by:"
            },
            privacy: {
                title: "Personal Data Protection (GDPR)",
                paragraph1: "In accordance with the General Data Protection Regulation (GDPR) and the Data Protection Act, you have the right to access, rectify, delete, and oppose the personal data concerning you.",
                paragraph2: "Information collected via the contact form is solely for Alteryss' internal use and will under no circumstances be transferred to third parties.",
                paragraph3: "To exercise your rights, you can contact us at: contact@alteryss.org"
            },
            cookies: {
                title: "Cookies",
                content: "This site does not use tracking or advertising cookies. Only technical cookies necessary for the proper functioning of the site may be used."
            },
            ip: {
                title: "Intellectual Property",
                paragraph1: "All content on this site (texts, images, graphics, logo, icons) is the exclusive property of Alteryss, except for particular mentions.",
                paragraph2: "Any reproduction, distribution, modification, adaptation, retransmission, or publication of these elements is strictly prohibited without the written consent of Alteryss."
            },
            opendata: {
                title: "Open Access Data",
                content: "We are currently working on a platform to make our data accessible as open data. More information coming soon."
            }
        },
        footer: {
            tagline: "Technological innovation for the environment",
            navigation: "Navigation",
            social: "Follow us",
            copyright: "© 2024 Alteryss. All rights reserved. Committed to a sustainable future."
        },
        messages: {
            formSuccess: "Thank you for your message! We will respond to you soon."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            vision: "Vision",
            missions: "Missions",
            team: "Équipe",
            partners: "Partenaires",
            contact: "Contact",
            legal: "Mentions légales"
        },
        hero: {
            subtitle: "L'innovation technologique au service de la performance humaine",
            description: "Nous unissons ingénieurs et médecins pour construire et tester des outils non-invasifs de surveillance du corps humain.",
            pillar1: {
                title: "Missions",
                description: "Étudier le corps humain et développer des outils non-invasifs de surveillance"
            },
            pillar2: {
                title: "Expertises",
                description: "Innovation technologique et solutions durables pour l'humain"
            },
            pillar3: {
                title: "Impacts",
                description: "Comprendre le corps humain pour améliorer la santé et la performance"
            },
            cta1: "Nous contacter",
            cta2: "Rejoindre en tant qu'étudiant",
            cta3: "Découvrir le projet"
        },
        sponsors: {
            title: "Nos Sponsors",
            sponsor1: {
                name: "Nom Sponsor 1",
                role: "Poste / Organisation",
                message: "Message de soutien du sponsor..."
            },
            sponsor2: {
                name: "Nom Sponsor 2",
                role: "Poste / Organisation",
                message: "Message de soutien du sponsor..."
            }
        },
        vision: {
            title: "Vision",
            origin: {
                title: "Origine du Projet",
                content: "Alteryss est né d'une frustration partagée. Les ingénieurs se heurtent souvent à des contraintes réglementaires qui limitent leur capacité à tester pleinement les nouveaux capteurs et technologies de surveillance du corps humain, tandis que les cliniciens ignorent fréquemment les innovations émergeant des laboratoires d'ingénierie. Notre association a été créée pour combler cette lacune en favorisant la communication et la collaboration entre ces deux mondes."
            },
            longterm: {
                title: "Long terme",
                content: "Nous aspirons à combler le fossé entre l'ingénierie et la pratique clinique en offrant"
            },
            values: {
                title: "Valeurs Structurantes",
                value1: "<strong>Excellence :</strong> Une approche rigoureuse et professionnelle dans chaque mission",
                value2: "<strong>Innovation :</strong> La recherche constante de solutions nouvelles et adaptées",
                value3: "<strong>Engagement :</strong> Un dévouement sincère à la cause environnementale",
                value4: "<strong>Collaboration :</strong> Le travail en réseau avec tous les acteurs du territoire"
            },
            difference: {
                title: "Ce qui Nous Différencie",
                content: "Contrairement aux cabinets traditionnels, Alteryss allie la proximité étudiante à une expertise professionnelle, offrant des solutions sur-mesure à des tarifs accessibles tout en maintenant une qualité de service optimale. Notre double compétence technique et environnementale nous permet d'appréhender les projets dans leur globalité."
            }
        },
        missions: {
            title: "Missions / Actions",
            intro: {
                title: "Nos Missions Passées",
                content: "Depuis notre création, nous avons mené plusieurs missions d'envergure pour accompagner nos clients dans leurs projets environnementaux et techniques."
            },
            service1: {
                title: "Études d'Impact Environnemental",
                description: "Analyse complète des impacts environnementaux de vos projets avec recommandations d'amélioration et mesures compensatoires."
            },
            service2: {
                title: "Conseil en Transition Énergétique",
                description: "Accompagnement dans la mise en place de solutions énergétiques durables et optimisation de la performance énergétique."
            },
            service3: {
                title: "Diagnostic Biodiversité",
                description: "Inventaires faune et flore, évaluation des enjeux écologiques et propositions de gestion adaptées."
            },
            service4: {
                title: "Innovation & R&D",
                description: "Développement de solutions technologiques innovantes pour répondre aux défis environnementaux."
            },
            service5: {
                title: "Formation & Sensibilisation",
                description: "Ateliers et formations sur les enjeux environnementaux et les bonnes pratiques de développement durable."
            },
            service6: {
                title: "Assistance à Maîtrise d'Ouvrage",
                description: "Support technique et environnemental pour la conduite de vos projets d'aménagement durable."
            },
            partnership: {
                title: "Partenariat Junior-Entreprise",
                content: "Alteryss travaille en partenariat avec la Junior-Entreprise pour proposer des missions étudiantes de qualité. Cette collaboration permet de mobiliser des compétences techniques pointues tout en offrant aux étudiants une expérience professionnelle enrichissante.",
                cta: "Accéder à la plateforme JE"
            }
        },
        team: {
            title: "Équipe / Gouvernance",
            intro: "Notre équipe est composée d'étudiants passionnés et engagés, issus de formations variées en ingénierie, environnement et management.",
            photo: "Photo du comité (à ajouter)",
            member1: {
                name: "Prénom Nom 1",
                role: "Président(e)",
                description: "Passionné(e) par l'environnement et l'innovation, pilote la stratégie globale de l'association."
            },
            member2: {
                name: "Prénom Nom 2",
                role: "Vice-Président(e)",
                description: "Expert(e) en gestion de projet, assure le suivi des missions et la coordination des équipes."
            },
            member3: {
                name: "Prénom Nom 3",
                role: "Trésorier(ère)",
                description: "Responsable de la gestion financière et du développement des partenariats économiques."
            },
            member4: {
                name: "Prénom Nom 4",
                role: "Secrétaire",
                description: "Assure la communication interne et externe, gère les relations avec les partenaires."
            },
            member5: {
                name: "Prénom Nom 5",
                role: "Responsable Technique",
                description: "Expert(e) en solutions technologiques innovantes pour les projets environnementaux."
            },
            member6: {
                name: "Prénom Nom 6",
                role: "Responsable Environnement",
                description: "Spécialiste des enjeux écologiques et de la biodiversité, garantit la qualité de nos études."
            }
        },
        partners: {
            title: "Partenaires / Soutiens",
            intro: "Alteryss bénéficie du soutien de nombreux partenaires qui croient en notre mission et nous accompagnent dans notre développement.",
            feedback: {
                title: "Retour sur le Partenariat Junior-Entreprise",
                content: "Notre collaboration avec la Junior-Entreprise a été un véritable catalyseur pour notre développement. Ce partenariat nous permet de mobiliser des compétences étudiantes de haut niveau tout en offrant un cadre professionnel sécurisé pour nos missions.",
                stat1: "Missions réalisées",
                stat2: "Étudiants mobilisés",
                stat3: "Satisfaction client"
            },
            partner1: {
                name: "Junior-Entreprise",
                type: "Partenaire Opérationnel",
                description: "Collaboration stratégique pour la réalisation de missions étudiantes professionnelles."
            },
            partner2: {
                name: "Partenaire 2",
                type: "Soutien Institutionnel",
                description: "Description du partenariat et de la contribution..."
            },
            partner3: {
                name: "Partenaire 3",
                type: "Parrainage",
                description: "Description du parrainage et du soutien apporté..."
            },
            partner4: {
                name: "Partenaire 4",
                type: "Partenaire Technique",
                description: "Soutien technique et expertise spécialisée..."
            }
        },
        contact: {
            title: "Contact / S'impliquer",
            join: "Rejoignez-nous",
            description: "Vous souhaitez nous contacter, devenir partenaire, bénévole, ou apporter votre soutien ? Nous serions ravis d'échanger avec vous.",
            location: "France",
            howto: {
                title: "Comment s'impliquer ?",
                partner: "💼 <strong>Devenir partenaire :</strong> Collaborez avec nous sur des projets innovants",
                volunteer: "🤝 <strong>Devenir bénévole :</strong> Participez à nos missions et événements",
                support: "❤️ <strong>Apporter votre soutien :</strong> Soutenez nos actions et notre développement",
                student: "🎓 <strong>Postulation étudiante :</strong> <a href='javascript:void(0)' class='link-je' title='Lien à venir prochainement'>Accéder à la plateforme JE</a>"
            },
            form: {
                name: "Votre nom",
                email: "Votre email",
                message: "Votre message",
                submit: "Envoyer le message",
                subject: {
                    default: "Sélectionnez un sujet",
                    inquiry: "Demande de renseignements",
                    partner: "Devenir partenaire",
                    volunteer: "Devenir bénévole",
                    support: "Apporter mon soutien",
                    student: "Postulation étudiante",
                    other: "Autre"
                }
            }
        },
        legal: {
            title: "Mentions Légales / RGPD",
            publisher: {
                title: "Éditeur du Site",
                type: "Association loi 1901"
            },
            hosting: {
                title: "Hébergement",
                intro: "Ce site est hébergé par :"
            },
            privacy: {
                title: "Protection des Données Personnelles (RGPD)",
                paragraph1: "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.",
                paragraph2: "Les informations collectées via le formulaire de contact sont uniquement destinées à l'usage interne d'Alteryss et ne seront en aucun cas cédées à des tiers.",
                paragraph3: "Pour exercer vos droits, vous pouvez nous contacter à : contact@alteryss.org"
            },
            cookies: {
                title: "Cookies",
                content: "Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés."
            },
            ip: {
                title: "Propriété Intellectuelle",
                paragraph1: "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive d'Alteryss, à l'exception des mentions particulières.",
                paragraph2: "Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit d'Alteryss."
            },
            opendata: {
                title: "Données en Accès Libre",
                content: "Nous travaillons actuellement sur une plateforme pour rendre nos données accessibles en open data. Plus d'informations prochainement."
            }
        },
        footer: {
            tagline: "L'innovation technologique au service de l'environnement",
            navigation: "Navigation",
            social: "Suivez-nous",
            copyright: "© 2024 Alteryss. Tous droits réservés. Engagés pour un avenir durable."
        },
        messages: {
            formSuccess: "Merci pour votre message ! Nous vous répondrons bientôt."
        }
    }
};

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
function setLanguage(lang) {
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
document.addEventListener('DOMContentLoaded', () => {
    // Get saved language or default to 'en'
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    
    // Add click handler for language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'en';
            const newLang = currentLang === 'en' ? 'fr' : 'en';
            setLanguage(newLang);
        });
    }
    
    // Add click handlers for individual language options
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
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
