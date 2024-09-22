const boton = document.getElementById('mostrar-imagen');
const imagenContainer = document.getElementById('imagen-container');
const images = document.querySelectorAll('.image'); // Seleccionamos todas las imágenes

boton.addEventListener('click', () => {
  imagenContainer.style.display = 'block';
  boton.style.display = 'none';

  // Mostramos la primera imagen y ocultamos las demás
  images[0].style.opacity = 1;
  images[1].style.opacity = 0;
  images[2].style.opacity = 0;
  images[3].style.opacity = 0; // Ocultamos la cuarta imagen inicialmente

  let currentImageIndex = 0;

  function showNextImage() {
    images[currentImageIndex].style.opacity = 0; // Ocultamos la imagen actual

    // Cambiamos al siguiente índice, asegurándonos de volver al inicio si llegamos al final
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1; // Mostramos la siguiente imagen

    setTimeout(showNextImage, 3000); // Llamamos a la función nuevamente después de 3 segundos
  }

  setTimeout(showNextImage, 1000); // Iniciamos el cambio de imágenes después de un segundo
});