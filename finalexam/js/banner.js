let thedate = new Date();
console.log(thedate.getDay());

if (thedate.getDay() == 0) {
    document.querySelector("#banner").style.display = "block"
};
const div = document.querySelector("#banner");
const btn = document.querySelector("bannerbtn");

function remove(elem) {
    Element.parentNode.removeChild(elem);
}