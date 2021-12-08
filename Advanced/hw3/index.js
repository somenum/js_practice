class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  get nameInfo() {
    return this.name;
  }
  get ageInfo() {
    return this.age;
  }
  get salaryInfo() {
    return this.salary;
  }

  set nameInfo(newName) {
    this.name = newName;
  }
  set ageInfo(newAge) {
    this.age = newAge;
  }
  set salaryInfo(newSalary) {
    this.salary = newSalary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }
  get salaryInfo() {
    return this.salary * 3;
  }
}

let brian = new Programmer("Brian", 28, 1000, "English, Ukraine");
let john = new Programmer("John", 21, 3000, "English");
let nick = new Programmer("Nick", 35, 1500, "English, Ukraine, French");

console.log(brian);
console.log(john);
console.log(nick);
