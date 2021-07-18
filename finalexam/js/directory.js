fetch("./business.json")
.then(response => {
   return response.json();
})
/*.then(data => console.log(data)); */

.then(function (jsonObject) {
    const business = jsonObject.business;

    for(let i=0; i< business.length; i++) {
    let card = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let img = document.createElement('img');

    img.setAttribute('src', `images/${business[i].shortcut}.jpg`);
    img.setAttribute('alt', "Photo of" + business[i].name);
    h3.textContent = business[i].name;
    p.textContent = business[i].address;
    p2.textContent = business[i].phone;
    p3.textContent = business[i].website;
  
    card.appendChild(img);
 card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    

    document.querySelector('div.businessdirectory').appendChild(card);
}
});
