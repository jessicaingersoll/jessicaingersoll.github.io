const requestURL =
  'https://byui-cit230.github.io/weather/data/towndata.json';

  console.log(requestURL);

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {
        let display = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
         let p2 = document.createElement('p');
         let p3 = document.createElement('p');
         let p4 = document.createElement('p');
         let img = document.createElement('img');
       
  
        h2.textContent = towns[i].name;
        p.textContent = towns[i].motto;
        p2.textContent = "Year Founded: " + towns[i].yearFounded;
        p3.textContent = "Population: " + towns[i].currentPopulation;
        p4.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        img.setAttribute('src', 'images/${towns.photo}');
      img.setAttribute('alt', "Photo of " + towns[i].name); 
        
  
        display.appendChild(h2);
        display.appendChild(p);
        display.appendChild(p2);
        display.appendChild(p3);
        display.appendChild(p4);
        display.appendChild(img);
        
  
        document.querySelector('div.display').appendChild(display);
    }}
    });