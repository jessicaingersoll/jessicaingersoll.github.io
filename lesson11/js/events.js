var requestURL =
  'https://byui-cit230.github.io/weather/data/towndata.json';

  console.log(requestURL);

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    var towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Soda Springs") {
        let events = document.createElement('section');
        let p = document.createElement('p');

        p.textContent = towns[i].events;

        events.appendChild(p);

        document.querySelector('div.p-events').appendChild(events);
        
      }
      else if ( towns[i].name == "Fish Haven"){
        let p = document.createElement('p');

        p.textContent = towns[i].events;

        events.appendChild(p);

        document.querySelector('div.p-events').appendChild(events);
      }
     else if (towns[i].name == "Preston") {
        let p = document.createElement('p');

        p.textContent = towns[i].events;

        events.appendChild(p);

        document.querySelector('div.p-events').appendChild(events);
     }
    };

   
})