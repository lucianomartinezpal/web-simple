console.log('Hello!');

// Funcionalidades del Dashboard
document.addEventListener('DOMContentLoaded', function() {
    
    // Efecto de aparición gradual para los elementos del dashboard
    function animateDashboardElements() {
        const elements = document.querySelectorAll('.dashboard-header, .link-button');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Efecto hover mejorado para los botones de enlace
    function enhanceLinkButtons() {
        const linkButtons = document.querySelectorAll('.link-button');
        
        linkButtons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
                this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // Efecto de partículas flotantes en el dashboard
    function createFloatingParticles() {
        const dashboard = document.querySelector('.dashboard-container');
        if (!dashboard) return;
        
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${3 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            
            dashboard.appendChild(particle);
        }
        
        // Agregar CSS para la animación
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0%, 100% { 
                    transform: translateY(0px) translateX(0px); 
                    opacity: 0.3;
                }
                50% { 
                    transform: translateY(-20px) translateX(10px); 
                    opacity: 0.8;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Efecto de escritura para el título principal
    function typewriterEffect() {
        const title = document.querySelector('.profile-name');
        if (!title) return;
        
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid #667eea';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            title.textContent += text.charAt(i);
            i++;
            
            if (i >= text.length) {
                clearInterval(typeInterval);
                title.style.borderRight = 'none';
            }
        }, 100);
    }
    
    // Contador de visitas (simulado)
    function updateVisitCounter() {
        const footer = document.querySelector('.dashboard-footer p');
        if (!footer) return;
        
        let visits = localStorage.getItem('dashboardVisits') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('dashboardVisits', visits);
        
        footer.innerHTML = `© 2024 - Creado sin React, solo HTML, CSS y JavaScript puro<br><small>Visitas: ${visits}</small>`;
    }
    
    // Efecto de scroll suave para los enlaces internos
    function smoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
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
    }
    
    // Efecto de carga de página
    function pageLoadEffect() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.8s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
    
    // Inicializar todas las funcionalidades
    function initDashboard() {
        pageLoadEffect();
        
        setTimeout(() => {
            animateDashboardElements();
            enhanceLinkButtons();
            createFloatingParticles();
            typewriterEffect();
            updateVisitCounter();
            smoothScroll();
        }, 300);
    }
    
    // Ejecutar inicialización
    initDashboard();
    
    // Efecto de scroll parallax sutil
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.profile-avatar, .dashboard-header');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Efecto de cambio de tema según la hora del día
    function timeBasedTheme() {
        const hour = new Date().getHours();
        const body = document.body;
        
        if (hour >= 18 || hour < 6) {
            // Modo nocturno
            body.classList.add('night-mode');
        } else {
            // Modo diurno
            body.classList.remove('night-mode');
        }
    }
    
    // Aplicar tema basado en la hora
    timeBasedTheme();
    
    // Cambiar tema cada hora
    setInterval(timeBasedTheme, 3600000); // 1 hora
    
    // Efecto de interacción con el teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Volver al dashboard desde cualquier sección
            if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
                window.location.href = 'index.html';
            }
        }
    });
    
    // Efecto de hover en el avatar
    const avatar = document.querySelector('.profile-avatar img');
    if (avatar) {
        avatar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        avatar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // Efecto de notificación de nueva visita
    function showWelcomeNotification() {
        if (!localStorage.getItem('welcomeShown')) {
            const notification = document.createElement('div');
            notification.className = 'welcome-notification';
            notification.innerHTML = `
                <div style="
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 10px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                    z-index: 1000;
                    animation: slideInRight 0.5s ease;
                    max-width: 300px;
                ">
                    <strong>¡Bienvenido!</strong><br>
                    Explora las diferentes secciones del dashboard
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Agregar CSS para la animación
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
            
            // Remover notificación después de 5 segundos
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.5s ease';
                setTimeout(() => notification.remove(), 500);
            }, 5000);
            
            localStorage.setItem('welcomeShown', 'true');
        }
    }
    
    // Mostrar notificación de bienvenida
    setTimeout(showWelcomeNotification, 1000);
});

// Funcionalidades específicas para las páginas de sección
if (window.location.pathname.includes('seccion')) {
    // Efecto de carga de contenido para las secciones
    function loadSectionContent() {
        const contentElements = document.querySelectorAll('.content, .content-section, .tech-card');
        
        contentElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // Efecto de scroll reveal para las secciones
    function scrollReveal() {
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
        
        const elements = document.querySelectorAll('.content, .content-section, .tech-card');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            observer.observe(element);
        });
    }
    
    // Inicializar efectos de sección
    document.addEventListener('DOMContentLoaded', function() {
        loadSectionContent();
        scrollReveal();
    });
}
