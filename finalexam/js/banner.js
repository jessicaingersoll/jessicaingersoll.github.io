let thedate = new Date();
console.log(thedate.getDay());

if (thedate.getDay() == 1) {
    document.querySelector("#banner").style.display = "block"
}