const apiURL =
    'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f76def132e0211ea6635d4837cd91bdb';
 fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });
