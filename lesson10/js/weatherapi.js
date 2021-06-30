const apiURL =
    'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f76def132e0211ea6635d4837cd91bdb&units=imperial';
 fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    thefive.forEach( x => {
        let d = new Date(x.dt_txt);
        //console.log(d);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
        day++
  });

let temp = parseFloat(document.querySelector('#temperature').textContent);
let speed = parseFloat(document.querySelector('#windspeed').textContent);

if (temp <= 50 && speed >= 3) {
    let wc = windChill(temp, speed);
    document.querySelector('.windchill').textContent = wc.toFixed(0);
}
else {
    document.querySelector('.windchill').textContent = "N/A";
}

function windChill(temp, speed) {
    let wchill = 35.74 + .6215 * temp - 35.75 * (Math.pow(speed, .16)) + .4275 * temp * (Math.pow(speed, .16));
    return wchill;
}
