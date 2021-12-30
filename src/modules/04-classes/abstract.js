// interface Transporte {
//   locomover(): void;
//   tipo: string;
//   quantidade_rodas: number;
// }
// class Carro implements Transporte {
//   quantidade_litros_porta_malas: number;
//   tipo: string;
//   quantidade_rodas: number;
//   constructor(tipo: string, quantidade_rodas: number, quantidade_litros_porta_malas: number) {
//     this.tipo = tipo;
//     this.quantidade_litros_porta_malas = quantidade_litros_porta_malas;
//     this.quantidade_rodas = quantidade_rodas;
//   }
//   locomover(): void {
//     console.log(`O carro do tipo ${this.tipo} locomoveu!`);
//   }
// }
// const astra = new Carro('Terrestre', 4, 500);
// console.log(astra);
// abstract class Transport {
//   tipo: string;
//   rodas: number;
//   constructor(tipo: string, rodas: number) {
//     this.tipo = tipo;
//     this.rodas = rodas;
//   }
//   locomover() {
//     console.log(`O transporte do tipo ${this.tipo} locomoveu!`);
//   }
// }
// class Carro extends Transport {
//   constructor(tipo: string, rodas: number) {
//     super(tipo, rodas);
//   }
//   locomover(): string {
//     super.locomover();
//     return 'O carro locomoveu!';
//   }
// }
// class Moto implements Transport {
//   tipo: string;
//   rodas: number;
//   constructor(tipo: string, rodas: number) {
//     this.tipo = tipo;
//     this.rodas = rodas;
//   }
//   locomover(): void {
//     console.log(`A moto do tipo ${this.tipo} e com ${this.rodas} rodas se locomoveu a 90km/h`);
//   }
// }
// const peugeot = new Carro('Terrestre', 4);
// const suzuki = new Moto('Terrestre', 2);
// peugeot.locomover();
// suzuki.locomover();
// console.log(suzuki.rodas);
// console.log(suzuki.tipo);
// abstract class Person {
//   nome: string;
//   idade: number;
//   private _dinheiro_conta: number;
//   constructor(nome: string, idade: number) {
//     this.nome = nome;
//     this.idade = idade;
//   }
//   set dinheiro_conta(value: number) {
//     this._dinheiro_conta = value;
//   }
//   get dinheiro_conta() {
//     return this._dinheiro_conta;
//   }
// }
// class NovoCliente extends Person {
//   constructor(nome: string, idade: number) {
//     super(nome, idade);
//   }
// }
// const cliente = new NovoCliente('Lucas', 22);
// console.log(cliente.dinheiro_conta);
//# sourceMappingURL=abstract.js.map