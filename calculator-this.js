const readlineSync = require('readline-sync');

let calculator = {
  read() {
    this.a = Number(readlineSync.question('Первое значение: '));
    this.b = Number(readlineSync.question('Второе значение: '));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
console.log('Сумма чисел: ' + calculator.sum());
console.log('Перемноженные числа: ' + calculator.mul());
