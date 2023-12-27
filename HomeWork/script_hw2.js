// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let number;
// number = -3
// if (number > 0) {
//     console.log(true);
// } else { console.log(false); }

// або інший варіант

// let num;
// num = -3
// num > 0 ? console.log(true) : console.log(false);


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let zmina;
// zmina = "test"
// if (zmina == "test") {
//     console.log(true);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const num = 2;
// if (num > 10) {
//     console.log(num - 5);
// } else { console.log(num + 5); }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу


// const value = prompt('Введіть номер місяця від 1-12');
// let mis = null;
// switch (value) {
//     case "1":
//         mis = "січень"
//         alert(`1 - місяць ${mis}`);
//         break;
//     case "2":
//         mis = "лютий"
//         alert(`2 - місяць ${mis}`);
//         break;
//      default:
//     alert(`Не правильній введен номер місяця (1-12) - ${value}`);
// }

// const mis = prompt('Введіть назву місяця').toLowerCase();;
// let num = null;
// switch (mis) {
//     case "січень":
//         num = 1
//         alert(`січень ${num} - місць`);
//         break;
//     case "лютий":
//         num = 2
//         alert(`лютий ${num} - місць`);
//         break;
//      default:
//         alert(`Не правильній введен місяць - ${mis}`);
// }


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = prompt("Введіть будь яке трьох значне число");

// if (number>= 100 && number <= 999) {
//     zalyshok1 = number % 10;
//     chyslo1 = Math.floor(number / 10);
//     zalyshok2 = chyslo1 % 10;
//     chyslo2 = Math.floor(chyslo1 / 10);
//     zalyshok3 = chyslo2 % 10;
//     chyslo3 = Math.floor(chyslo2 / 10);
//     alert(zalyshok1 + zalyshok2 + zalyshok3);
//     } else {
//   alert("ВВедіть трьох значне число число");
// }


// let number = Math.random() * (999 - 100) + 100;
// res = Math.round(number);
// alert(`Випадкове 3-х значне число -  "${res}"`);
//     zalyshok1 = res % 10;
//     chyslo1 = Math.floor(res / 10);
//     zalyshok2 = chyslo1 % 10;
//     chyslo2 = Math.floor(chyslo1 / 10);
//     zalyshok3 = chyslo2 % 10;
//     chyslo3 = Math.floor(chyslo2 / 10);
// sum = zalyshok1 + zalyshok2 + zalyshok3;
// alert(`Сума випадкових 3-х чисел - "${sum}"`);
