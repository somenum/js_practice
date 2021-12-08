const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70,
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40,
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  },
];

function checkArray(arr) {
  let newArr = arr.filter((obj, i) => {
    if (obj.author && obj.name && obj.price) {
      return obj;
    } else {
      try {
        if (obj.author === undefined)
          throw new Error("No key Author in object " + i);
        if (obj.name === undefined)
          throw new Error("No key Name in object " + i);
        if (obj.price === undefined)
          throw new Error("No key Price in object " + i);
      } catch (err) {
        console.error(err.message);
      }
    }
  });
  return newArr;
}

let html = checkArray(books)
  .map(function (element) {
    return (
      "<li>" +
      element.author +
      ", " +
      element.name +
      ", " +
      element.price +
      "</li>"
    );
  })
  .join("");

document.getElementById("root").innerHTML = "<ul>" + html + "</ul>";
