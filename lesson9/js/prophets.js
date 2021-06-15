const requestURL =
  'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
console.log(requestURL);

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
       let p2 = document.createElement('p');

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      p.textContent = "Date of Birth:" + "birthdate";
      p2.textContent = "Place of Birth:" + "birthplace";


      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(p2);
      
      document.querySelector('div.cards').appendChild(card);
    }
  });