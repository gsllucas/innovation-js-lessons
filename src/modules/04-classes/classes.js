class Person {
  constructor(name, age, weight, height) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
  }

  makeAnniversary() {
    this.age++;
    return `Feliz aniversário, ${this.name}! Hoje você está fazendo ${this.age} anos de idade!`;
  }

  static getAge() {
    return this.age;
  }
}

const person = new Person('Lucas', 22, 73, 18.2);

person.makeAnniversary();