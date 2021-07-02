var requestURL =
  'https://byui-cit230.github.io/weather/data/towndata.json';

  console.log(requestURL);

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    var towns = jsonObject['towns'];
    var pagename = document.getElementById('.city').innerHTML;
    console.log(pagename);
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Soda Springs") {
        let events = document.createElement('section');
        let p = document.createElement('p');

        p.textContent = towns[i].events;

        events.appendChild(p);
       console.log(events);

        document.querySelector('div.sevents').appendChild(events);
        
      }
      else if ( towns[i].name == "Fish Haven"){
        let events = document.createElement('section');
        let p = document.createElement('p');

        p.textContent = towns[i].events;

        events.appendChild(p);
        console.log(events);
        document.querySelector('div.fevents').appendChild(events);
      }
      else if (towns[i].name == "Preston") {
      let events = document.createElement('section');
        let p = document.createElement('p');

        p.textContent = towns[i].events;

        events.appendChild(p);
        console.log(events);
        document.querySelector('div.pevents').appendChild(events);
     }
    };

   
})