document.addEventListener('DOMContentLoaded', function () {
    const imageGallery = document.querySelectorAll('.image-gallery');

    imageGallery.forEach(function (container) {
        container.addEventListener('click', function () {
            toggleFullscreen(container);
        });
    });

    function toggleFullscreen(element) {
        if (!document.fullscreenElement) {
            element.requestFullscreen().catch(err => {
                console.error(`Error al intentar entrar en modo de pantalla completa: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }
});
