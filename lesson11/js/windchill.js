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
