var apikey = "f76def132e0211ea6635d4837cd91bdb";

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=25.7906&lon=-80.1301&&appid=${apikey}`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = Math.round(jsObject.main.temp_max); 
    
  });