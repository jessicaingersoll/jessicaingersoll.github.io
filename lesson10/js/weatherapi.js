const apiURL =
    'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f76def132e0211ea6635d4837cd91bdb';

 fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });