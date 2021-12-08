//Метод - это функция, которая является свойством обьекта. Например функция, которую мы записываем в обьект user, для вызова алерта с приветствием этого юзера,
//это и будет методом обькта user.

function createNewUser() {
  let userName = prompt("Ваше имя", "");
  let userSecondName = prompt("Ваша фамилия", "");

  let newUser = {
    firstName: userName,
    lastName: userSecondName,

    getLogin: function () {
      let newLog =
        this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
      return newLog;
    },
  };

  return newUser;
}

let someUser = createNewUser();

console.log(someUser.getLogin());
