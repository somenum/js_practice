// 1. var и let - это переменные, а const - это коснтанта. Значения переменных мы можем изменять, а значение константы неизменно.
// 2. var - это устаревшее обьвление переменной. В отличии от let, переменная обьявлена через var видна через весь код, а не только в рамках блока.
//Через var мы можем обьявить перемнную с одним и тем же именем в одном блоке, что может легко нас запутать или даже поломать код, если мы забыли
// что такое имя переменной мы уже давали. C let такого не выйдет.

let name = prompt("Введите ваше имя", "");
let age = +prompt("Введите ваш возраст", "");

if (age < 18) {
  alert("You are not allowed to visit this website");
} else if ((age >= 18, age <= 22)) {
  if (confirm("Are you sure you want to continue?")) {
    alert("Welcome, " + name);
  } else {
    alert("You are not allowed to visit this website");
  }
} else {
  alert("Welcome, " + name);
}
