// Цикл forEach перебирает элементы массива и для каждого из них вызывает функцию callback. которой он передает
//три аргумента: очередной элемент массива, его номер и массив, который перебирается.

// let mas = ["string", 23, {}, 54, "so", "sos"];

function filterBy(arr, type) {
  let newArr = arr.filter((element) => typeof element !== type);
  console.log(newArr);
}

// filterBy(mas, "number");
