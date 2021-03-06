var cityid2 = "";
var appid2 = "f76def132e0211ea6635d4837cd91bdb";

if (document.getElementById('city').textContent == "Preston") {
  var cityid2 = "5604473";
}
else if (document.getElementById('city').textContent == "Soda Springs") {
  var cityid2 = "5607916";
}
else {
  var cityid2 = "5585010";
};

var apiURL2 =
    `https://api.openweathermap.org/data/2.5/forecast?id=${cityid2}&appid=${appid2}&units=imperial`;

 fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
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