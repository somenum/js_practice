// Обработчик событий - обьект в браузере, который регестрирует на каком  эелементе какое событие должно произойти
// и каку функцию нужно вызвать для этого.

let price = document.querySelector(".price");
let container = document.querySelector(".container");
let error = document.querySelector(".error");
let correct = document.querySelector(".correct");

price.onblur = function () {
  let inputData = price.value;

  if (inputData < 0) {
    price.classList.add("error");
    error.innerHTML = "Please enter correct price";
  } else {
    container.insertAdjacentHTML(
      "beforebegin",
      `<div class ="span-good"><span class="current-price">Текущая цена: ${inputData}<button class="btn-del">x</button>
      </span></div> `
    );
    let btnDel = document.querySelector(".btn-del");
    btnDel.onclick = function () {
      btnDel.parentNode.remove();
      price.value = "";
    };
    this.classList.add("correct");
  }
};

price.onfocus = function () {
  if (this.classList.contains("error")) {
    this.classList.remove("error");
    error.innerHTML = "";
  }
};
