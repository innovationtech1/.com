/**
 * innovationTECH - Main Javascript Controller
 * Author: Antigravity AI
 * Description: Implements premium user interactions, dynamic animations,
 *              interactive AI Solution Configurator, and validated contacts.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Dynamic Header on Scroll
    // ==========================================
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Navigation Scrollspy
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
                // Customize active indicator style
                link.style.color = 'var(--text-white)';
            } else {
                link.style.color = 'var(--text-gray)';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check


    // ==========================================
    // 2. Mobile Responsive Menu
    // ==========================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIconPath = document.getElementById('menu-icon-path');

    const toggleMenu = () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');

        // Toggle SVG icon paths between Burger and Close cross
        if (!isExpanded) {
            // Change path to "X" (Close)
            menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        } else {
            // Change path back to Burger
            menuIconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
        }
    };

    mobileToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    // ==========================================
    // 3. Typwriter Subtitle Effect (Hero Section)
    // ==========================================
    const subtitleEl = document.getElementById('hero-subtitle');
    const phrases = [
        "Desarrollamos software empresarial premium e integraciones a la medida.",
        "Potenciamos tus operaciones con Inteligencia Artificial y Machine Learning.",
        "Diseñamos arquitecturas Cloud Native de alta resiliencia y escalabilidad.",
        "Protegemos tus activos digitales con ciberseguridad avanzada Zero-Trust."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;

    const typeEffect = () => {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            subtitleEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 30; // Faster deletion
        } else {
            subtitleEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 60; // Natural typing speed
        }

        // Handle states
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Phrase fully typed. Wait before starting deletion.
            isDeleting = true;
            typingSpeed = 2500; // Pause at end of phrase
        } else if (isDeleting && charIndex === 0) {
            // Phrase deleted. Switch to next.
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Brief pause before starting next typing
        }

        setTimeout(typeEffect, typingSpeed);
    };

    // Initialize typewriter
    typeEffect();


    // ==========================================
    // 4. Animated Stats Counter (IntersectionObserver)
    // ==========================================
    const statCounters = document.querySelectorAll('.stat-counter');
    
    const animateCounter = (counterEl) => {
        const target = parseInt(counterEl.getAttribute('data-target'), 10);
        const duration = 1800; // duration in ms
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * target);

            counterEl.textContent = currentVal;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counterEl.textContent = target; // Ensure exact final value
            }
        };

        requestAnimationFrame(updateCount);
    };

    const statsSection = document.getElementById('stats');
    let animated = false;

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                statCounters.forEach(counter => animateCounter(counter));
                animated = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }


    // ==========================================
    // 5. Interactive AI Solution Configurator
    // ==========================================
    const sectorButtons = document.querySelectorAll('#sector-choices .choice-btn');
    const goalButtons = document.querySelectorAll('#goal-choices .choice-btn');
    const scaleSlider = document.getElementById('scale-slider');

    // Outputs
    const recTitle = document.getElementById('rec-title');
    const recTech1 = document.getElementById('rec-tech-1');
    const recTech2 = document.getElementById('rec-tech-2');
    const recTech3 = document.getElementById('rec-tech-3');
    const recComp1 = document.getElementById('rec-comp-1');
    const recComp2 = document.getElementById('rec-comp-2');
    const recComp3 = document.getElementById('rec-comp-3');
    const recDesc1 = document.getElementById('rec-desc-1');
    const recDesc2 = document.getElementById('rec-desc-2');
    const recDesc3 = document.getElementById('rec-desc-3');
    const recTime = document.getElementById('rec-time');

    // Configurator State
    let configState = {
        sector: 'fintech',
        goal: 'ai',
        scale: 2 // 1: Startup, 2: Crecimiento, 3: Enterprise
    };

    const updateConfiguratorResult = () => {
        const { sector, goal, scale } = configState;
        
        // Define tech packages based on user selections
        let title = '';
        let techs = ['', '', ''];
        let comps = ['', '', ''];
        let descs = ['', '', ''];
        let weeks = '';

        if (goal === 'ai') {
            title = 'Ecosistema de Inteligencia Artificial';
            weeks = scale === 1 ? '6 - 8 Semanas' : scale === 2 ? '10 - 14 Semanas' : '18 - 24 Semanas';
            
            if (sector === 'fintech') {
                techs = ['Python', 'FastAPI', 'PyTorch / GCP'];
                comps = ['Detección de Fraude', 'API Segura', 'Inferencia en Tiempo Real'];
                descs = [
                    'Modelos predictivos de riesgo financiero entrenados a la medida.',
                    'Endpoints RESTful encriptados asíncronos y ultrarrápidos.',
                    'Infraestructura serverless con latencia inferior a 25ms.'
                ];
            } else if (sector === 'health') {
                techs = ['Python', 'TensorFlow', 'HIPAA Cloud'];
                comps = ['Visión Artificial', 'Procesador NLP', 'Base Datos Médica'];
                descs = [
                    'Segmentación de imágenes clínicas de alta resolución diagnóstica.',
                    'Extracción inteligente de resúmenes de historias clínicas estructuradas.',
                    'Almacenamiento seguro compatible con regulaciones de datos de salud.'
                ];
            } else if (sector === 'ecommerce') {
                techs = ['Python', 'Scikit-Learn', 'Redis / AWS'];
                comps = ['Recomendador Personalizado', 'Analítica de Comportamiento', 'Buscador Semántico'];
                descs = [
                    'Algoritmos de filtrado colaborativo para incrementar ticket promedio.',
                    'Predicción de abandono de carrito en tiempo real.',
                    'Motor de búsqueda potenciado con embeddings vectoriales.'
                ];
            } else { // default or general sector (logistics, edtech, industry)
                techs = ['Python', 'PyTorch', 'AWS SageMaker'];
                comps = ['Optimización de Rutas', 'Modelado Predictivo', 'Pipeline MLOps'];
                descs = [
                    'Modelos matemáticos aplicados a logística o cadenas de suministro.',
                    'Sistemas inteligentes de recomendación de contenidos o automatización.',
                    'Monitoreo continuo de desvío de modelos (Drift Detection).'
                ];
            }
        } 
        else if (goal === 'cloud') {
            title = 'Arquitectura Cloud Scalable';
            weeks = scale === 1 ? '4 - 6 Semanas' : scale === 2 ? '8 - 12 Semanas' : '16 - 20 Semanas';

            if (sector === 'fintech' || sector === 'industry') {
                techs = ['Go / Rust', 'gRPC / Envoy', 'Kubernetes / AWS'];
                comps = ['Microservicios Transaccionales', 'Service Mesh', 'Orquestador Multi-AZ'];
                descs = [
                    'Backend compilado con cero overhead y seguridad nativa de memoria.',
                    'Comunicación de alto rendimiento asíncrona entre servicios.',
                    'Cluster autoescalable distribuido en zonas de disponibilidad redundantes.'
                ];
            } else if (sector === 'ecommerce') {
                techs = ['Node.js', 'Next.js', 'Vercel + AWS Lambda'];
                comps = ['Backend Serverless', 'Frontend Estático Integrado', 'Base de Datos Distribuida'];
                descs = [
                    'Funciones en la nube asíncronas con escalado inmediato a demanda.',
                    'Páginas estáticas autogeneradas con SEO sobresaliente en el Edge.',
                    'Base de datos NoSQL global de baja latencia como DynamoDB.'
                ];
            } else { // health, logistics, edtech
                techs = ['TypeScript', 'NestJS', 'Docker / GCP'];
                comps = ['Arquitectura Modular', 'API Gateway', 'Auto-Scaling Groups'];
                descs = [
                    'Código modular mantenible de grado empresarial bajo DDD.',
                    'Centralizador de políticas, ruteo y autenticación segura de tráfico.',
                    'Infraestructura de cómputo elástico basado en el uso de CPU.'
                ];
            }
        } 
        else if (goal === 'iot') {
            title = 'Plataforma IoT Conectada';
            weeks = scale === 1 ? '8 - 10 Semanas' : scale === 2 ? '12 - 16 Semanas' : '22 - 28 Semanas';

            techs = ['C / C++', 'MQTT / Kafka', 'React / InfluxDB'];
            comps = ['Firmware Edge', 'Broker de Mensajes', 'Dashboard Analítico'];
            descs = [
                'Optimización de consumo energético en microcontroladores con FreeRTOS.',
                'Transmisión masiva bidireccional tolerante a cortes de red.',
                'Visualización de series de tiempo con telemetría en vivo.'
            ];
        }

        // Apply changes to DOM
        recTitle.textContent = title;
        recTech1.textContent = techs[0];
        recTech2.textContent = techs[1];
        recTech3.textContent = techs[2];
        recComp1.textContent = comps[0];
        recComp2.textContent = comps[1];
        recComp3.textContent = comps[2];
        recDesc1.textContent = descs[0];
        recDesc2.textContent = descs[1];
        recDesc3.textContent = descs[2];
        recTime.textContent = weeks;

        // Visual fade-in effect on update
        const outputPane = document.getElementById('config-output-pane');
        outputPane.style.opacity = 0.5;
        setTimeout(() => {
            outputPane.style.transition = 'opacity var(--transition-fast)';
            outputPane.style.opacity = 1;
        }, 50);
    };

    // Add event listeners to Sector Choices
    sectorButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            sectorButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            configState.sector = btn.getAttribute('data-value');
            updateConfiguratorResult();
        });
    });

    // Add event listeners to Goal Choices
    goalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            goalButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            configState.goal = btn.getAttribute('data-value');
            updateConfiguratorResult();
        });
    });

    // Add event listener to scale slider
    scaleSlider.addEventListener('input', (e) => {
        configState.scale = parseInt(e.target.value, 10);
        updateConfiguratorResult();
    });

    // Initial run
    updateConfiguratorResult();


    // ==========================================
    // 6. Contact Form Validation & Submission
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const successOverlay = document.getElementById('success-overlay');
    const closeSuccessBtn = document.getElementById('btn-success-close');
    
    // Inputs & Errors
    const fields = [
        { id: 'contact-name', errorId: 'error-name', check: (val) => val.trim().length > 2 },
        { id: 'contact-email', errorId: 'error-email', check: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) },
        { id: 'contact-subject', errorId: 'error-subject', check: (val) => val.trim().length > 4 },
        { id: 'contact-message', errorId: 'error-message', check: (val) => val.trim().length > 10 }
    ];

    // Real-time input listener to clear validation errors
    fields.forEach(field => {
        const inputEl = document.getElementById(field.id);
        const errorEl = document.getElementById(field.errorId);
        
        inputEl.addEventListener('input', () => {
            if (field.check(inputEl.value)) {
                inputEl.classList.remove('invalid');
                errorEl.style.display = 'none';
            }
        });
    });

    const validateForm = () => {
        let isValid = true;
        
        fields.forEach(field => {
            const inputEl = document.getElementById(field.id);
            const errorEl = document.getElementById(field.errorId);
            
            if (!field.check(inputEl.value)) {
                inputEl.classList.add('invalid');
                errorEl.style.display = 'block';
                isValid = false;
            } else {
                inputEl.classList.remove('invalid');
                errorEl.style.display = 'none';
            }
        });
        
        return isValid;
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Form is valid - Simulate submission loader
            const submitBtn = document.getElementById('btn-submit-form');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Enviando Solicitud... <span class="badge-dot" style="margin-left: 10px;"></span>';
            
            setTimeout(() => {
                // Show success dialog
                successOverlay.style.display = 'flex';
                successOverlay.setAttribute('aria-hidden', 'false');
                
                // Reset button and form
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                contactForm.reset();

                // Clear layout classes
                fields.forEach(f => {
                    const inputEl = document.getElementById(f.id);
                    inputEl.classList.remove('invalid');
                    // Reset labels positioning by forcing dispatch events if needed
                });
            }, 1500);
        }
    });

    // Close success overlay button
    closeSuccessBtn.addEventListener('click', () => {
        successOverlay.style.display = 'none';
        successOverlay.setAttribute('aria-hidden', 'true');
    });

});
