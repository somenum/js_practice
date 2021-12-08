function loadJson() {
  return fetch(`https://swapi.dev/api/films/`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      const moviesList = document.querySelector("ul");
      for (let i = 0; i < res.results.length; i++) {
        const movie = document.createElement("li");
        movie.innerHTML = `<h3 class="title">${res.results[i].title}</h3>`;
        movie.innerHTML += `<p class="title"> Episode ${res.results[i].episode_id}</p>`;
        movie.innerHTML += `<p class="opening"> ${res.results[i].opening_crawl}</p>`;

        // let castList = "<ul>";
        let allPromise = res.results[i].characters.map((character) => {
          return fetch(character);
        });
        console.log(allPromise);
        Promise.all(allPromise).then((data) => {
          let newData = data.map((item) => {
            return item.json();
          });
          Promise.all(newData).then((pers) => {
            console.log(pers);
          });
        });
        // castList += "</ul>";
        movie.innerHTML += ` Cast: ${castList}`;
        moviesList.appendChild(movie);
      }
    });
}

loadJson();
// async function charactersRequest(characterToShow) {
//   // await fetch(`${characterToShow}`)
//   //   .then((response) => {
//   //     return response.json();
//   //   })
//   //   .then((res) => {
//   //     const characterList = document.querySelector("ul");
//   //     for (let j = 0; j < res.length; j++) {
//   //       const char = document.createElement("li");
//   //       char.innerHTML = `<p> ${res[j].name} </p>`;

//   //       char.innerHTML;
//   //       characterList.appendChild(char);
//   //     }
//   //   });
//   let requests = characterToShow.map((url) => fetch(url));

//   await Promise.all(requests).then((responses) =>
//     responses.forEach((res) => {
//       const char = document.createElement("li");
//       char.innerHTML = `<p> ${res[j].name} </p>`;
//       char.innerHTML;
//       characterList.appendChild(char);
//     })
//   );
// }

// let char = {};
// charactersRequest();

// <!-- let castList = `<ul>${(charName = res.results[i].characters.map(
//   (elem) => {
//     async function getChar(character) {
//       let response = await fetch(character);
//       let data = await response.json();

//       filmCharacters = data.name;
//       console.log(filmCharacters);
//       return `${filmCharacters}, `;
//     }
//     getChar(elem);
//   }
// ))}</ul>`; -->
