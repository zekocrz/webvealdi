document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150, /* Duración de la transición */
        dist: -80, /* Ampliación o reducción al salir la imagen  */
        shift: 5,  /* Distancia a los costados de las imagenes */
        padding: 5, /* Separción dentro */
        numVisible: 5,  /* Numero de imagenes vidsibles */
        indicators: true, /* Para colocar los indicadores */
        /*noWrap: true, /* En caso de querer iniciar con la primera imagen y si tiene fin */
        
    });
});
 


const hamburguer = document.querySelector ('.hamburguer');
const menu = document.querySelector ('.menu-navegacion');

/* console.log(menu)
console.log(hamburguer) */

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread")
    }
})