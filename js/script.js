const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    const overlay = container.querySelector('.overlay');

    container.addEventListener('mouseenter', () => {
        overlay.style.maxHeight = overlay.scrollHeight + 'px'; // Ajusta la altura máxima para mostrar el texto
    });

    container.addEventListener('mouseleave', () => {
        overlay.style.maxHeight = '0'; // Oculta el texto ajustando la altura máxima nuevamente
    });
});
