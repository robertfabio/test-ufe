// Atualizar o countdown
const eventDate = new Date('2025-04-14T08:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
}

// Adicionando efeitos avançados para o "ROLE PARA BAIXO"
document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');
    
    if (scrollDown) {
        // Adicionar efeito de pulsação 3D para o indicador de rolagem
        const mouseElement = scrollDown.querySelector('.mouse');
        
        // Adiciona observador de interseção para animações baseadas no viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animação avançada quando visível
                    mouseElement.style.animation = 'pulse3D 2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955)';
                    
                    // Adicionar texto com efeito de digitação
                    const textElement = scrollDown.querySelector('.scroll-text');
                    textElement.textContent = '';
                    const text = 'ROLE PARA BAIXO';
                    let index = 0;
                    
                    function typeText() {
                        if (index < text.length) {
                            textElement.textContent += text.charAt(index);
                            index++;
                            setTimeout(typeText, 100);
                        } else {
                            // Após completar, adicionar classe para estilo especial
                            textElement.classList.add('typed-complete');
                        }
                    }
                    
                    typeText();
                }
            });
        }, {threshold: 0.5});
        
        observer.observe(scrollDown);
    }

    // Iniciar o countdown
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Adicionar efeitos avançados para as seções usando Intersection Observer API
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adicionar classe para animação de entrada
                entry.target.classList.add('section-visible');
            }
        });
    }, {threshold: 0.1});
    
    sections.forEach(section => sectionObserver.observe(section));
    
    // Configuração das partículas
    if (document.getElementById('particles-js')) {
        // Carregar a biblioteca particles.js via CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = function() {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        };
        document.head.appendChild(script);
    }
    
    // Melhorar a animação do título com efeitos avançados de texto
    const titleSpans = document.querySelectorAll('.text-reveal');
    
    if (titleSpans.length) {
        // Adicionar animação inicial para elementos de texto
        titleSpans.forEach((span, index) => {
            span.style.opacity = '0';
            span.style.animation = `smoothReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.3}s forwards`;
        });
    }
    
    // Gerar logos para redes sociais se não existirem
    document.querySelectorAll('.social-icon-img').forEach(img => {
        img.onerror = function() {
            const canvas = document.createElement('canvas');
            canvas.width = 50;
            canvas.height = 50;
            const ctx = canvas.getContext('2d');
            
            // Desenhar círculo de fundo
            ctx.beginPath();
            ctx.arc(25, 25, 20, 0, 2 * Math.PI);
            
            // Cor baseada na rede social
            if (this.alt.toLowerCase().includes('discord')) {
                ctx.fillStyle = '#5865F2';
            } else if (this.alt.toLowerCase().includes('instagram')) {
                ctx.fillStyle = '#E1306C';
            } else {
                ctx.fillStyle = '#006747';
            }
            
            ctx.fill();
            
            // Adicionar inicial da rede social
            ctx.fillStyle = 'white';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.alt.charAt(0), 25, 25);
            
            this.src = canvas.toDataURL();
        };
    });
    
    // Validação do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            let allValid = true;
            this.querySelectorAll('input, textarea').forEach(input => {
                if (!input.checkValidity()) {
                    allValid = false;
                    input.classList.add('invalid');
                } else {
                    input.classList.remove('invalid');
                }
            });
            
            if (allValid) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
            }
        });
    }
});