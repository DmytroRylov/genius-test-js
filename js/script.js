//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Що таке JS
//Підключення скрипта
//Структура коду

//Змінні

// console.log(a); // ReferenceError: a is not defined
// let a = 10;
// console.log(a); // 10
// a = 20;
// console.log(a); //20

// console.log(b); // ReferenceError: b is not defined
// const b = 15;
// console.log(b); //15

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Типи

// typeof

// console.log(typeof 3);
// console.log(typeof 'adf');
// console.log(typeof true);

// Boolean;

// let nameFieldChecked = true; // так, ім’я було перевірене
// let ageFieldChecked = false; // ні, вік не був перевіреним

// Symbol - примітивний тип даних (новий тип даних який появився в специфікації ES6)
// Спеціальний тип даних:
// undefined - зміна якій не присвоїли значення.
// null - нулєве значення, "пусте значення".

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Число

// приведення до числа

// const value = '3';
// console.log(Number(value)); // 3
// console.log(typeof Number(value));

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Перевірка на число

// let a = 31;
// console.log(a);

// const number = Number('51'); // 51
// console.log(Number.isNaN(number)); // false

// const string = Number('qweqwe'); // NaN
// console.log(Number.isNaN(string)); // true

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Number.parseInt() и Number.parseFloat()

// console.log(Number.parseInt('5ddd')); // 5
// console.log(Number.parseInt('12qg994')); // 12
// console.log(Number.parseInt('11.6qwfe79')); // 11
// console.log(Number.parseInt('zzxxc')); // NaN

// Парсить у строки число з крапкою

// console.log(Number.parseFloat('5ddd')); // 5
// console.log(Number.parseFloat('12qg994')); // 12
// console.log(Number.parseFloat('11.6qwfe79')); // 11.6
// console.log(Number.parseFloat('zzxxc')); // NaN

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//складання з крапкою

// console.log(0.1 + 0.2 === 0.3); // false

// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//Объект Math

//  Math.floor(num) - повертає найбільше ціле число, меньше,
// або  таке, що дорівнює вказаному
// console.log(Math.floor(2.9)); // 1

// // Math.ceil(num) - повертає наименьше ціле число, більше,
// //або  таке, що дорівнює вказаному
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округлене до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше число із набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає наменше число із набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - повертає в степінь
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає випадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // випадкове число від 1 до 10

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//String

// let str = 'Привіт';
// let str2 = 'Одинарні лапки також дозволяються';
// let phrase = `так можна вставляти ${str}`;
// let name = 'Оля';
// let hello = `Привіт ${name}`;
// console.log(hello);

// const message = 'JavaScript ' + 'is' + ' awesome';
// console.log(message); // JavaScript is awesome

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Конкатенація;
// let result;

// result = 5 + '5';
// console.log(result); // '55'
// console.log(typeof result); // string

// result = 5 + '5' + 5;
// console.log(result); // '555'
// console.log(typeof result); // string

// result = 5 + 5 + '5';
// console.log(result); // '105'
// console.log(typeof result); // string

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// методи строк

// const js = 'JavaScript';

// length - довжина
// toLowerCase() и toUpperCase()
// indexOf()
// includes()

// const message = 'Welcome to Bahamas!';

// // console.log(message.length); // 19
// console.log('There is nothing impossible to him who will try'.length); // 47

// console.log(message.toLowerCase()); // welcome to bahamas!
// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// console.log(message); // Welcome to Bahamas!

// console.log(message.indexOf('t')); // 8
// console.log(message.indexOf('hello')); // -1

// // Всі методи строк чутливі до регістру
// console.log(message.includes('welcome')); // false
// console.log(message.includes('Welcome')); // true

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// BigInt

// const num = 9007199499994254740991n;
// console.log(typeof num);

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Об*єкти

// let user = {
//   // об’єкт
//   name: 'Іван', // за ключем "name" зберігаємо значення "Іван"
//   age: 30, // за ключем "age" зберігати значення "30"
//   work: true,
// };

// console.log(user);

// отримаємо значення властивостей об’єкта:
// console.log(user.name); // Іван
// console.log(user.age); // 30

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//методи

// let user = {
//   name: 'Іван',
//   age: 30,
//   'likes birds': true, // Ім’я властивості з декількох слів повинно бути в лапках
// };

// // delete user.age;
// console.log(user['likes birds']);

// це викличе синтаксичну помилку
// user.likes birds = true

// присвоювання значення властивості
// let user = {};
// user.name = 'Niko';
// console.log(user);
// user.age = 45;
// console.log(user);

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Цикл “for…in”
// Для перебору всіх властивостей

// Синтаксис:

// for (key in object) {
//   // тіло циклу виконується для кожної властивості об’єкта
// }
// Наприклад, виведемо всі властивості user:

// let user = {
//   name: 'Іван',
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
// ключі
//   console.log(key); // name, age, isAdmin
// значення ключів
//   console.log(user[key]); // Іван, 30, true
// }

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

//------------------------------------------------//

// Впорядкування властивостей об’єкта
// let codes = {
//   49: 'Німеччина',
//   41: 'Швейцарія',
//   44: 'Великобританія',
//   1: 'США',
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

//чисельні властивості
// let user = {
//   name: 'Іван',
// //   surname: 'Smith',
// };
// user.age = 25; // добавимо ще одну властивість

// не цілочисельні властивості перераховані в порядку створення
// for (let prop in user) {
//   console.log(prop);
// } // name, surname, age

// В JavaScript є багато інших типів об’єктів:

// Array для зберігання впорядкованих колекцій даних,
// Date для зберігання інформації про дату і час,
// Error для зберігання інформації про помилку.
// … і так далі.

// Lesson 2

// ----------------------------------//
// ----------------------------------//
// Вивід данних/ Ввід данних
// ----------------------------------//
// ----------------------------------//

// const message = 'JavaScript is awesome!';

// Виведення

// alert(message);

// console.log(message);

// Отримання

// confirm

// const isConfirm = confirm('Please confirm reservation');
// console.log(isConfirm);

// const test = confirm('Yes or no?');
// console.log(test);

// prompt
// const userName = prompt('Please enter your name:');
// console.log(userName);

// const number = prompt('Please enter your number');
// console.log(number);

// const number = prompt("Please enter number");
// console.log(number);

// ----------------------------------//
// ----------------------------------//
// Перетворення типу
// ----------------------------------//
// ----------------------------------//

// const value = prompt('Please enter a number!');
// console.log(typeof value); // 'string'
// console.log(value); // '5'

// let value;

// ---String--- //

// value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);

// ---Number--- //

// value = "123";
// console.log(typeof value);

// const newValue = Number(value);
// console.log(typeof newValue);

// const test = Number('qwerty');
// console.log(test);
// console.log(typeof value);

// ---Boolean--- //

// Правила перетворення:

// Значення, які інтуїтивно “порожні”, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean('вітаю')); // true
// console.log(Boolean('')); // false

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false

// ----------------------------------//
// ----------------------------------//
// Оператори
// ----------------------------------//
// ----------------------------------//

//Терміни: “унарний”, “бінарний”, “операнд”

//Операнд – це те, до чого застосовуються оператори.
//Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2.
//Іноді їх називають “аргументами”

//Оператор є унарним, якщо він має один операнд
//let x = 1;

//x = -x;

//Оператор є бінарним, якщо він має два операнди

// let x = 1, y = 3;
// alert( y - x );

//JavaScript підтримує такі математичні операції:

// Додавання +,
// Віднімання -,
// Множення *,
// Ділення /,
// Остача від ділення %,
// Піднесення до степеня **.

// // Додавання
// console.log(2 + 2);

// // // Віднімання
// console.log(10 - 4);

// // // Множення
// console.log(5 * 5);

// // // Ділення
// console.log(6 / 2);

//Остача від ділення %

// console.log(8 % 3);
// console.log(10 % 3);
// console.log(10 % 2);

//Піднесення до степеня **

// console.log(5 ** 2);
// console.log(4 ** 4);

// -------Оператори порівняння------//

// результатом вертають буль

// a > b и a < b //- більше/меньше
// a >= b и a <= b  //- більше/меньше або дорівнює
// a == b //- дорівнює
// a != b //- не дорівнює
// a === b //- строго дорівнює
// a !== b //- строго не дорівнює

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 3);

// == приведення до типу
// let value = '0';
// console.log(value == 0);
// console.log(5 !== 5);

// ----------------------------------//
// ----------------------------------//
// or -and -not //
// ----------------------------------//
// ----------------------------------//

//   -----and (&&)------  //

// console.log(5 === 6 && 6 > 3);
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

//   -----or (||)------ //

// console.log(5 * 5 === 25 || 2 * 2 === 6);

//   -----not (!) ------ //

// console.log(!false);

// ----------------------------------//
// ----------------------------------//
// Умови if/else
// ----------------------------------//
// ----------------------------------//

//--- одинарні
// if (5 * 5 === 25) {
//   console.log('1');
// } else {
//   console.log('2');
// }

// if (2 + 2 === 6) {
//   console.log('Hello');
// } else {
//   console.log('No Hello');
// }

/// ------Тернарний оператор------///

// 2 + 2 === 4 ? console.log("1") : console.log("2");
// 5 * 5 === 24 ? console.log(true) : console.log(false);

// if (5 + 5 === 10) {
//   console.log('5+5 ===10');
// } else if (2 + 2 === 4) {
//   console.log('2+2 ===4');
// } else {
//   console.log('no');
// }

// let leng = 'ua';

// if (leng === 'ua') {
//   console.log('Понеділок');
// } else if (leng === 'en') {
//   console.log('Monday');
// } else {
//   console.log('Reset');
// }

// ----------------------------------//
// ----------------------------------//
// switch/case
// ----------------------------------//
// ----------------------------------//

// let num = 10;
// switch (num) {
//   case 0:
//     console.log(0);
//     break;

//   case 5:
//     console.log(5);
//     break;

//   case 10:
//     console.log(10);
//     break;
// }

// let cost = null;
// const sub = 'free';

// switch (sub) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//   default:
//     console.log('Invalid sub'); // умова яка буде в будь якому випадку
// }

// console.log(cost);

// ----------------------------------//
// ----------------------------------//
// Вирішення логічних задач та побудова алгоритмів
// ----------------------------------//
// ----------------------------------//

// const min = prompt("Введіть хвилину");

// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 45 && min <= 59) {
//   console.log("Четверта чверть");
// } else {
//   console.log("ВВедіть іншу цифру");
// }

// const value = prompt('Введіть назву товару').toLowerCase();
// let cost;

// switch (value) {
//   case 'яблуко':
//     cost = 10;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case 'груша':
//     cost = 15;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case 'кавун':
//     cost = 50;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case 'вишня':
//     cost = 70;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   default:
//     alert(`Товару ${value} немає в наявності`);
// }
// const num = 8;

// num % 2 === 0 ? console.log(true) : console.log(false);

// Lesson 3

// --------------------------//
// --------------------------//
// області видимості
// --------------------------//
// --------------------------//

// const a = 5;

// if (true) {
//   const b = 10;
//   console.log("Block", b);
// }

// console.log("Global", a);

// --------------------------//
// --------------------------//
// Цикли
// --------------------------//
// --------------------------//

// while

// let a = 0;

// while (a < 5) {
//   a++;
//   console.log("a", a);
// }

// let a = 3;

// while (a) console.log(a--);

// do while

// do {
//   console.log(a);
//   a++;
// } while (a < 5);

//for

// let a = 0;

// for (let a = 0; a < 3; a++) {
  
//     console.log(a);
// }

// або 

// for (; a < 3;) {
//     a++;
//     console.log(a);
// }

// break && continue

// let summ = 0;

// while (true) {
//   let value = +prompt("Введіть число");
//   if (!value) break;

//     // let i = summ + value; // довший варіант
//     // summ = i;
       
//       summ += value; // теж саме що довший варіант але коротша запис
// }

// console.log("Summ", summ);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// --------------------------//
// --------------------------//
// масиви
// --------------------------//
// --------------------------//

// let arr = ["Apple", "Orange", "Plum"];

// arr[2] = "Lemon"; // заміняємо зруге зна чення масиву

// arr[3] = "Cherry";

// console.log(arr);
// console.log(arr.length); // можемо дізнатися довжину ціклу
// arr2 = [1, "Hello", { key: "  " }]; // можна додавати різного роду поля
// console.log(arr2);

// arr.push("Tomat"); // додавання в кінець масуву елементу

// console.log(arr);

// arr.pop(); //видалення з масіву останього єлементу

// console.log(arr);

// arr.shift(); // - працює з першим елементом масива тобто видаляє його на початку

// console.log(arr);

// arr.unshift("Tomat"); // + працює з першим елементом масива тобто додає його на початку

// console.log(arr);


// перебирання масиву

// старий метод перебору
// let arr = ["Apple", "Orange", "Plum"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// новий метод перебору   // не дає індексу
// for (let item of arr) {
//   console.log(item);
// }

// for (let key in arr) {
//    // console.log(key); // перевіряємо чи виводиться індекс
//   console.log(arr[key]); // пербір з доступом до індексу (але він не є хорошим)
// }


// масив може містити декілько масивів
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]);

// масиви порівняти не можливо лише один випадок, коли перебираємо кожний елемент

// --------------------------//
// --------------------------//
// методи присвоєння
// --------------------------//
// --------------------------//

// let a = 5;
// let b = a;

// a = 10;

// console.log(a);
// console.log(b);

// обєкти і масиви копіюються за посиланням, а примітивні типи по value

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);

// console.log(arr2);

// --------------------------//
// --------------------------//
// методи масиву
// --------------------------//
// --------------------------//

// let arr = ["a", "b", "c", "d", "f"];

// delete arr[2]; // коли ми видаляємо через delete ми видалили лише значення, а ключ лишився, з масивом так робити не правельно
// console.log(arr);


// правельне видалення елементів з масиу
// arr.splice(2, 2); // перше значення це індекс з якого треба почати, а друге значення це скільки елементів після цього індексу потрібно удалити

// console.log(arr);

// slice вертає(копіює) нам новий масиз з обраного за параметрами від початкового до останньго який ми вкажимо
// console.log(arr.slice(1, 3)); // "b", "c"

// let a = [1, 2, 3];

// console.log(arr.concat(a, "test")); // створює новий масив і додає до нього ті данні які в ньоми ми додаємо


// пошук по масиву

// console.log(arr.indexOf("c", 1)); // задаємо що шукаємо, а другим аргументом з якого індексу.(ящо не знайде то виведе "-1")

// console.log(arr.lastIndexOf("c")); // шукає з кінця масиву

// console.log(arr.includes("c")); // повертає тру або фолс

// пошук по масиву 

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// console.log(fruts);

// find

// console.log(fruts.find((item) => item.id === 1)); // мінус цього пошуку як тільки він знайшов щось одне пошук скінчається

// filter // фільтр потрібен тоді коли умова передбачає що співпадінь буде більше ніж одне

// console.log(fruts.filter((item) => item.id < 2));

// map // найчастіше використовується для відмальовки

// let result = fruts.map((item) => item.name.length);
// console.log(result);


// split (зі строки робим масив)

// let names = "Оля, Юля, Аня, Петя";

// let arr = names.split(", ");// в душках показуємо по какому символу потрібно розділити масив
// console.log(arr);

// join (з масива роби строку)

// let newString = arr.join(", ");

// console.log(newString);

// arr.reduce (обчислити сумму значень всього масиву)

// let value = arr.reduce(
//   function (accumulator, item, index, array) {
//     // ...
//   },
//   [initial]
// );


// arr.reduce (обчислити сумму значень всього масиву)
// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((summ, item) => summ + item);

// console.log(red);

// обчислюємо середнє значення масиву
let arr = [23, 45, 30];

let summ = arr.reduce((sum, item) => sum + item) / arr.length;
console.log(summ);

// Lesson 4 

// ФУНКЦІЇ

// функція декларейшин

// function showMessage(name, city) { 
//     console.log("Hello, my name is " + name + " I'm from " + city);
// }

// showMessage("Nata", "Kyiv");
// showMessage("Olia", "Lviv");

// функція експрешин

//можимо використовувати змінні

// const userName = " Ann" // в фуекції можуть  бути глобальні змінні

// const sayHi = function () { 
//     let message = "Hello, my name Ivan" // в функції можуть бути локальні змінні
//     console.log(message + userName);
// }

// sayHi();

// математичні функції

// function sum(a, b) { 
//     // let c = a + b; // якщо багато строчок та обчислень можно зробити наступним чином
//     // return c;
//     return a + b;
// }

// let result = sum(7, 8);
// console.log(result);

//

// const testFunk = function (a, b) {
//     console.log("a :", a);
//     console.log("b :", b);
//     c = a + b;
//     console.log(c);
//     return; // return зупиняє виконання функції
//     // return c; // все що записується в return передається в функцію

// };

// testFunk(5, 8);

// Порядок виконання коду

// const a = function () {  // як написано в тілі функції так оно і буде виконуватись
//     c();
//     console.log("function a");
//     b();
// };

// const b = function () {
//     console.log("function b");
// };

// const c = function () {
//     console.log("function c");
// };

// a();

// Аргументи і rest

// const addName = function () {
//     const arg = Array.from(arguments);
//     console.log(arguments); // псевдомасив (ми не знаємо скільки там буде аргументів)
//     console.log(arg);
// };

// метод  rest (...) три крапки

// const addName = function (...arg) {
//    console.log(arg);
// };

// addName(1, 3, 5);

// callback функції зворотнього виклику (функція яка буде виконана пізніше)

// function ask(question, yes, no) { 
//     if (confirm(question)) {
//         yes();
//     } else { 
//         no();
//     }
// }

// function showOk() { 
//     console.log("You say Ok");
// }

// function showCancel() { 
//     console.log("You say No");
// }

// ask("Yes or no?", showOk, showCancel);

// ще такі callbac називають HOF хай ондерфаинд функтион (тобто функцыъ вищого порядку)

// const hello = function (name) { 
//     console.log(`Hello, ${name}`);
// }

// const searchName = function (callback) { 
//     const name = "Ivan";
//     callback(name);
//     }

// searchName(hello);

// правило - одна функція - одна дія!

