//DOM - это отображение html в формате обьектной модели

let mas = [
  "Kharkiv",
  "Kiev",
  ["Borispol", "Irpin"],
  "Odessa",
  "Lviv",
  "Dnieper",
];

function createList(arr, parent = document.body) {
  let ul = document.createElement("ul");
  arr.map(function mapper(item) {
    if (Array.isArray(item)) {
      return item.map(mapper);
    }
    ul.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  });

  parent.append(ul);
}

createList(mas);

let timer = document.querySelector(".timer");

setInterval(() => {
  if (+timer.innerHTML > 0) {
    timer.innerHTML -= 1;
  }
  if (+timer.innerHTML === 0) {
    clearInterval(timer);
    document.body.innerHTML = "";
  }
}, 1000);
