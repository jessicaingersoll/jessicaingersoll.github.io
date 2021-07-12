var apikey = "f76def132e0211ea6635d4837cd91bdb";

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=25.7906&lon=-80.1301&&appid=${apikey}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('high').textContent = jsObject.daily[0].max; 
    document.getElementById('low').textContent = jsObject.daily[0].temp.min;
    document.getElementById('humidity').textContent = jsObject.current.humidity;
    document.getElementById('currenttemp').textContent = jsObject.current.temp;
  });