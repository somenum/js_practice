//1.Функции нужны для того, чтобы не переписывать один и тот же кусок кода по нескольку раз, а просто вызывать его при помощи всего лишь имя функции.
//Меньше лишнего кода и повторений.
//2. Функция возвращает результат в зависимости от входящих аргументов. По сути один и тот же код может нам выдавать разные резульаты в
// зависимости от входящих параметров. Поэтому передавать аргумент в функцию нужно.

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
let mathOperation = prompt("Математическая операция", "");

function calc(firstNum, secondNum, operation) {
  switch (operation) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}

console.log(calc(a, b, mathOperation));
