document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos todas las páginas
    const pages = document.querySelectorAll('.page');
    
    // Configuramos el Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // La página debe ser visible en un 20% para activarse
    };
    
    const pageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase visible para que aparezca
                entry.target.classList.add('visible');
                // Dejamos de observar una vez que ya apareció (opcional, para que no desaparezca al subir)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observamos cada página
    pages.forEach(page => {
        pageObserver.observe(page);
    });

    // Opcional: Efecto de "pasar página" al hacer click en los números
    const pageNumbers = document.querySelectorAll('.page-number');
    
    pageNumbers.forEach(num => {
        num.addEventListener('click', () => {
            // Un pequeño efecto de rebote al hacer click
            num.style.transform = 'scale(1.2)';
            setTimeout(() => {
                num.style.transform = 'scale(1)';
            }, 200);
        });
    });
});