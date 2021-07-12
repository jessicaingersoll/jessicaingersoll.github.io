var apikey = "f76def132e0211ea6635d4837cd91bdb";

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=25.7906&lon=-80.1301&&appid=${apikey}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('high').textContent = Math.round(jsObject.daily[0].temp.max); 
    document.getElementById('low').textContent = Math.round(jsObject.daily[0].temp.min);
    document.getElementById('humidity').textContent = jsObject.current.humidity;
    document.getElementById('currenttemp').textContent = Math.round(jsObject.current.temp);
    document.getElementById('currenticon').setAttribute('src', `https://openweathermap.org/img/w/${current.weather.icon}.png`);
    document.getElementById('currenticon').setAttribute('alt', 'N/A');
    
  });