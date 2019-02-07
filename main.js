const current = document.querySelector('#firstImg');
const pictures    = document.querySelectorAll('.pictures img'); 
const    opacity= 0.6;

// the opacity of the clicked image
pictures[0].style.opacity = opacity;


pictures.forEach(img=>img.addEventListener('click', imgClick));

function imgClick(e){
//opacity reset
    pictures.forEach(img=>(img.style.opacity=1));
//changing the image to the next image after every click
current.src = e.target.src;
// adds fade in class
current.classList.add('fade-in');
//remove the fade in after 5 seconds
setTimeout(()=> current.classList.remove('fade-in'), 500);
// change the opacity to the variable opacity
e.target.style.opacity= opacity;
}