//determine day of week
let thedate = new Date();
console.log(thedate.getDay());

//if it is friday then turn the aside display property to block
if (thedate.getDay() == 5) {
    document.querySelector("#banner").style.display = "block"
}