// ESCOPO PADRÃO DE CLASSES

class Person {
  // PROPRIEDADES
  name;
  age;
  weight;
  height;

  // CONSTRUTOR
  constructor(name, age, weight, height) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
  }

  // MÉTODOS
  makeAnniversary() {
    this.age++;
    return `Feliz aniversário, ${this.name}! Hoje você está fazendo ${this.age} anos de idade!`;
  }

  // MÉTODO ESTÁTICO
  static getAge() {
    return this.age;
  }
}

// INSTÂNCIA DE CLASSE
const person = new Person('Lucas', 22, 73, 18.2);

person.makeAnniversary();