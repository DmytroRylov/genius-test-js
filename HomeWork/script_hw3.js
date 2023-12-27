//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// console.log(fruts);

// let result = fruts.map((item) => item.name);
// console.log(result);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// let num = 0;

// for (let num = 2; num <= 10; num++) {
//   if (num % 2 !== 0) continue;
//    console.log(num);
// }


//  -- 3 --
// Замініть цикл "for" на "while"

// for (let i = 0; i < 5; i++) {
//     console.log( `цифра ${i}!` );
// }
  
//   let i = 0;
// while (i < 5) {
//   i++;
//   console.log( `цифра ${i}!` );
// }


//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (value => 100) {
//   let value = +prompt("Введіть число > за 100");
//   if (!value || value > 100) break;
//  }

//  -- 5 --
// Вирахуйте середній вік

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

console.log(girls.reduce((sum, girl) => sum + girl.age, 0) / girls.length);
