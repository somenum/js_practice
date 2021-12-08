//Если мы хотим вставить какой-либо зарезервированный символ в строчку, то мы его всегда должны сэкранировать, для того чтобы он воспринимался не просто как буква
//или символ, а как операция (табуляция,  пробелы, переносы строки и т.д.). Экранирование нужно в таких случаях:
//1. Для того, чтоб работали спецсимволы.
//2. Чтобы мы могли вывести какой-либо символ в строчку, чтобы он не воспринимаося как часть скрипта.

function createNewUser() {
  let userName = prompt("Ваше имя", "");
  let userSecondName = prompt("Ваша фамилия", "");
  let userBirthday = prompt("Дата рождения в формате dd.mm.yyyy", "27.09.1992");

  let newUser = {
    firstName: userName,
    lastName: userSecondName,
    birthday: userBirthday,

    getLogin: function () {
      let newLog =
        this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
      return newLog;
    },
    getAge: function (birthday) {
      let d = this.birthday.split(".");
      if (typeof d[2] !== "undefined") {
        birthday = d[2] + "." + d[1] + "." + d[0];
        return (
          ((new Date().getTime() - new Date(birthday)) /
            (24 * 3600 * 365.25 * 1000)) |
          0
        );
      }
      return 0;
    },
    getPassword: function () {
      let newPassword =
        this.firstName.charAt(0).toUpperCase() +
        this.lastName.toLowerCase() +
        this.birthday.slice(-4);
      return newPassword;
    },
  };

  return newUser;
}

let someUser = createNewUser();

console.log(someUser.getLogin());
console.log(someUser.getAge());
console.log(someUser.getPassword());
