let toScreen = (data, block) => {
  let target = document.querySelector(`${block}`);
  target.insertAdjacentHTML("beforeend", data);
};

let fetchUrl = (url) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

let fetchAll = (arr) => {
  let trueMas = arr.map((item) => {
    return fetch(item);
  });
  return Promise.all(trueMas);
};

let data = fetchUrl("https://swapi.dev/api/films/");

data.then((items) => {
  items.results.forEach((e) => {
    toScreen(
      `<div class="card episode_${e.episode_id}">
    <h3 class="card__caption">Episode ${e.episode_id}</h3>
    <h4 class="card__caption">${e.title}</h4>
    <p class="card__caption">${e.opening_crawl}</p>
    </div>`,
      ".container"
    );
    let characters = fetchAll(e.characters);
    characters
      .then((data) => {
        return data;
      })
      .then((data) => {
        let x = data.map((item) => {
          return item.json();
        });
        let y = x.map((item) => {
          return item;
        });
        Promise.all(y).then((data) => {
          let list = data
            .map((item) => {
              return `<li>${item.name}</li>`;
            })
            .join("");
          let listUl = `<ul>${list}</ul>`;

          toScreen(listUl, `.episode_${e.episode_id}`);
        });
      });
  });
});
