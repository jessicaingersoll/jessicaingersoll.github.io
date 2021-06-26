//from Brother Blazzard's screen cast 
const cityid2 = "5604473";
const appid2 = "f76def132e0211ea6635d4837cd91bdb";

const apiURL2 =
    `http://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${appid}&units=imperial`;

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
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
        document.getElementById(`imgsrc${day+1}`).textContent = weather[x].icon +'.png';
        document.getElementById(`icon${day+1}`).setAttribute('src', `imagesrc${day+1}`);
        document.getElementById(`icon${day+1}`).setAttribute('alt', 'N/A'); 
        day++
    });
});