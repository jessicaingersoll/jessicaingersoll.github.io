
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
    document.getElementById('currenticon').setAttribute('src', `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`);
    document.getElementById('currenticon').setAttribute('alt', 'N/A');


    document.querySelector('#banner').textContent = jsObject.alerts.event;
    doocument.querySelector('#banner').textContent = jsObject.alerts.description;
    console.log('#banner');


    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const threeDayForecast = jsObject.daily;
    console.log(threeDayForecast);
    threeDayForecast.forEach( x => {
        let d = new Date(x.dt * 1000);
        console.log(d);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = Math.round(x.temp.max);
        document.getElementById(`icon${day+1}`).setAttribute('src', `https://openweathermap.org/img/w/${x.weather[0].icon}.png`);
       
        document.getElementById(`icon${day+1}`).setAttribute('alt', 'N/A'); 
        day++
  })});