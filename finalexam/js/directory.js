const file = require(''./json/business.json');
console.log(file);

 fetch(file)
 .then(function (resonse) {
     return response.json();
 })
 .then(function(jsonObject) {
    const business = jsonObject['business'];
    console.log(business);
 })