var cityid = "";
const appid = "f76def132e0211ea6635d4837cd91bdb";

if (document.getElementById('city').textContent == "Preston") {
  var cityid = "5604473";
}
else if (document.getElementById('city').textContent == "Soda Springs") {
  var cityid = "5607916";
}
else {
  var cityid = "5585010";
};

const apiURL =
    `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${appid}&units=imperial`;

 fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = Math.round(jsObject.main.temp_max); 
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed);
    document.getElementById('description').textContent = jsObject.weather[0].description.toUpperCase();
 
    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fiveDayForecast);
    fiveDayForecast.forEach( x => {
        let d = new Date(x.dt_txt);
        //console.log(d);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp);
        document.getElementById(`icon${day+1}`).setAttribute('src', `https://openweathermap.org/img/w/${x.weather[0].icon}.png`);
       
        document.getElementById(`icon${day+1}`).setAttribute('alt', 'N/A'); 
        day++
    });
});