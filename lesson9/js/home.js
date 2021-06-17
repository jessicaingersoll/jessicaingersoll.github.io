const requestURL =
  'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
        let display = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
         let p2 = document.createElement('p');
         let p3 = document.createElement('p');
         let p4 = document.createElement('p');
       
  
        h2.textContent = towns[i].name;
        p.textContent = towns[i].motto;
        p2.textContent = "Year Founded" + towns[i].yearFounded;
        p3.textContent = "Population" + towns[i].currentPopulation;
        p4.textContent = "Annual Rainfall" + towns[i].averageRainfall;
  
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
  
        document.querySelector('div.display').appendChild(display);
      }
    });