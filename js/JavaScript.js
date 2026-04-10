document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicialización de AOS (Animaciones)
    AOS.init({
        duration: 1000,
        once: true
    });

    // 2. Animaciones personalizadas con Intersection Observer
    const aparecerAlScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const elementos = document.querySelectorAll('article, .card-evento, .resultado-item, .integrante-card, .galeria-item');
    elementos.forEach(el => {
        el.classList.add('oculto-inicio'); 
        aparecerAlScroll.observe(el);
    });

    // 3. Manejo del Formulario (Evitar recarga)
    const formulario = document.querySelector('.form-contacto');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); 
            alert('¡Gracias! El mensaje no se enviará porque estamos en modo demostración.');
            formulario.reset();
        });
    }
});