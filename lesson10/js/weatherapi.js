const apiURL =
    'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f76def132e0211ea6635d4837cd91bdb&units=imperial';
 fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.main.temp_max;  



  });
