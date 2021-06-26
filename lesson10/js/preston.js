const cityid = "5604473";
const appid = "f76def132e0211ea6635d4837cd91bdb";

const apiURL =
    `http://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${appid}&units=imperial`;
 fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.main.temp_max; 
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;
    document.getElementById('description').textContent = jsObject.weather[0].main;
  });