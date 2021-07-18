fetch("./business.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
console.log(jsonFile);
const business = jsonObject['business'];
