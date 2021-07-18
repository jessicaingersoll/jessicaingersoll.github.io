let thedate = new Date();
console.log(thedate.getDay());

if (thedate.getDay() == 0) {
    document.querySelector("#banner").style.display = "block"
}