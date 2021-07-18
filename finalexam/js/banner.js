let thedate = new Date();
console.log(thedate.getDay());

if (thedate.getDay() == 0) {
    document.querySelector("#banner").style.display = "block"
};
document.body.addEventListener("mousedown", function(e) {
    console.log(e.target.nodeName, e.target.id)
    if (e.target.nodeName == "DIV") {
        document.getElementById(e.target.id).outerHTML = ""
    }
}, false)