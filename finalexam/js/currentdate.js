const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const currentdate = weekday[d.getDay()]+", "+d.getDate()+" "+month[d.getMonth()]+" "+ d.getFullYear()

document.querySelector('#currentdate').textContent = currentdate;