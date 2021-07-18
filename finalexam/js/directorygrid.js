const gridbutton = document.querySelector('.gridview');
const listview = document.querySelector('.listview')

hambutton.addEventListener('click', () => {listview.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};