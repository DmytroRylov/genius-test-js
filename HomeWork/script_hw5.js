// --1--
// 1) написати об * єкт студента який буде виводити ім * я, спеціальнісь,
// середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою  call apply bind

const stud = {
    name: "David",
    spec: "economist",
    serbal: 5,
    pass: 2,
    infoStud: function (city, age) {
        console.group(`Student:`);
        console.log(`імя: ${this.name}`);
        console.log(`спеціальнісь : ${this.spec}`);
        console.log(`середній бал : ${this.serbal}`);
        console.log(`кількість пропущених занять : ${this.pass}`);
        console.log(`місто : ${city}`);
        console.log(`вік : ${age}`);
        console.groupEnd();
    }
};
// stud.infoStud("Kyiv", 20);

const Van = {
    name: "Vano",
    spec: "matematyk",
    serbal: 4,
    pass: 3,
};

const Ola = {
    name: "Olga",
    spec: "chimik",
    serbal: 5,
    pass: 4,
};

const Max = {
    name: "Maxim",
    spec: "Buchgalter",
    serbal: 3,
    pass: 1,
};

stud.infoStud.call(Ola, "lviw", 25);
stud.infoStud.apply(Max, ["Odessa", 30]);
stud.infoStud.bind(Van, "Dnepr", 30)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке


// const html = {
//     showhtml() {
//         console.log("html это язык гипертекстовой разметки текста.");
//     }
// };

// document
//   .querySelector("#html")
//   .addEventListener("click", html.showhtml);

// const css = {
//     showcss() {
//         console.log("css это формальный язык декорирования и описания внешнего вида документа.");
//     }
// };

// document
//   .querySelector("#css")
//     .addEventListener("click", css.showcss);

// --3--
// Написати функцію магазин, яка отримує: назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry  58, 1,3
// 3) jrange 89, 3,4

// function shop(name, price, q) { 
//     return `${name} ${price * q}`
// }
// console.log(shop("banana", 30, 4,5));