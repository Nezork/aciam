// Script Compartilhado ACIAM Franco da Rocha

document.addEventListener('DOMContentLoaded', () => {
    // Adicionar classe ativa ao link da página atual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // Animação simples ao rolar (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executar uma vez no carregamento

    // Lógica para formulário de contato (se existir na página)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado por sua mensagem! Em breve entraremos em contato.');
            contactForm.reset();
        });
    }
});
