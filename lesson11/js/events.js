var requestURL =
  'https://byui-cit230.github.io/weather/data/towndata.json';

  console.log(requestURL);

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    var towns = jsonObject['towns'];
    var pagename = document.getElementById('city').innerHTML;
    
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == pagename) {
        var events = towns[i].events;
        for(let i=0; i < towns[i].events.length; i++) {
          let p =  document.createElement('p');

          p.textContent = events[i];
          document.querySelector('div.events').appendChild(p);
        }
        
      }}});