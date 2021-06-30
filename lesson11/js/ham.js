const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const currentdate = weekday[d.getDay()]+", "+d.getDate()+" "+month[d.getMonth()]+" "+ d.getFullYear()

document.querySelector('#currentdate').textContent = currentdate;