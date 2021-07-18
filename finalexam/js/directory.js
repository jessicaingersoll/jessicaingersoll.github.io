fetch("./business.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

.then(function (jsonObject){

const business = jsonObject['business'];
for(let i=0; i< business.length; i++) {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = business[i].name;
    p.textContent = business[i].address;
    p2.textContent = business[i].phone;
    p3.textContent = business[i].website;
    img.setAttribute('src', `images/${business.name}.jpg`);
    img.setAttribute('alt', "Photo of" + business[i].name);

    display.appendChild(h2);
    display.appendChild(p);
    display.appendChild(p2);
    display.appendChild(p3);
    display.appendChild(img);

    document.querySelector('div.businessdirectory').appendChild(card);
}
});
