// --- 1--
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
//     return true;
// } else {
//   return confirm('Батьки дозволили?');
// }
// }

// let age = prompt('Скільки вам років?', 18);

// if ( checkAge(age) ) {
//   alert( 'Доступ надано' );
// } else {
//   alert( 'У доступі відмовлено' );
// }

// рішення

// function checkAge(age) {
//   return age > 18 ? true: confirm('Батьки дозволили?');
// }
// let age = prompt('Скільки вам років?', 18);

// checkAge(age) ? alert('Доступ надано') :  alert( 'У доступі відмовлено' );

// --- 2-- 

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// рішення

// function min(a, b) { 
//   if (a < b) {
//     return console.log(a);
//   } else { 
//     console.log(b);
//   }
// }

// function min(a, b) { 
// return (a < b) ? console.log(a) : console.log(b);
// }

// min(5, 7);

// ---3--

// Перепишіть з використанням стрілкових функцій 
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   function () { alert("Ви погодились."); },
//   function () { alert("Ви скасували виконання."); }
// );

// рішення

// const ask = (question, yes, no) => { 
//   if (confirm(question)) уes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   ()=> { alert("Ви погодились."); },
//   ()=> { alert("Ви скасували виконання."); }
// );

