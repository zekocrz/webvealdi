const images = document.querySelectorAll('.imgg');
const containerImage = document.querySelector('.container-imgg');
const imageContainer = document.querySelector('.imgg-show');
const copy = document.querySelector('.copyg');
/* Para cerrar solo con el icono de cerrar se declara la constante y se cambia en el evento de cerrar */
const closeModal = document.querySelector('.bx.bx-x');

images.forEach(image => {
    image.addEventListener('click', ()=>{
         
         addImage(image.getAttribute('src'),image.getAttribute('alt'));
    })
})

const addImage = (srcImage, altImage)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;
}

/* Se cambia aqui al constante Close Modal para que sólo cierre con el icono, sino se queda como "containerImage" para cerrar al dar click en cualquier area de la pantalla*/
closeModal.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
})
