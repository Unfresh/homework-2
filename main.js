'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-10-05");

let appData = {
    budget: money,
    timeData:  time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// первый способ - цикл for......................................
// for (let i = 0; i < 2; i++) {
//     let monthCost = prompt("Введите стятью расходов в этом месяце"),
//         totalCost = +prompt("Во сколько обойдется?");
//         if ( (typeof(monthCost) === 'string') && (typeof(monthCost) != ' ') && (typeof(totalCost) != ' ') && (typeof(monthCost) != null) && (typeof(totalCost) != null) && monthCost.length !== 0) {
//             console.log("Прошла запись");
//             appData.expenses[monthCost] = totalCost;
//         } else if (i == 0) {
//             alert('Введены неверные данные. Начнем заново.');
//             i = -1;
//         } else {
//             alert('Введены неверные данные. Начнем заново.');
//             i = 0;
//         }
// }
// ..........................................первый способ - цикл for

// второй способ - цикл while....................................
// let k = 0;
// while ( k < 2 ) {
//     let monthCost = prompt("Введите стятью расходов в этом месяце");
//     let totalCost = +prompt("Во сколько обойдется?");
//     if ( (typeof(monthCost) === 'string') && (typeof(monthCost) != null) && (typeof(monthCost) != ' ') && monthCost.length != 0 && (typeof(totalCost) != null) && (typeof(totalCost) != ' ')  ) {
//         console.log("Запись прошла");
//         appData.expenses[monthCost] = totalCost;
//     } else if (k == 0) {
//         alert("Введите корректные данные");
//         k = -1;
//     } else {
//         alert("Введите корректные данные");
//         k = 0;
//     }

//     k++;
// }
// ................................второй способ - цикл while

// третий способ - цикл do while....................................
let m = 0,
    monthCost,
    totalCost;

do {
    monthCost = prompt("Введите стятью расходов в этом месяце");
    totalCost = +prompt("Во сколько обойдется?");
    if ( (typeof(monthCost) === 'string') && (typeof(monthCost) != null) && (typeof(monthCost) != ' ') && monthCost.length != 0 && (typeof(totalCost) != null) && (typeof(totalCost) != ' ') ) {
        console.log("Запись прошла");
        appData.expenses[monthCost] = totalCost;
    } else if ( m == 0) {
        console.log("второй иф");
        alert("Введите корректные данные");
        m = -1;
    } else {
        console.log("иначе");
        alert("Введите корректные данные");
        m = 0;
    }
    m++;
}
while (m < 2);


// ................................третий способ - цикл do while

let costPerDay = Math.floor(money/30);

appData.moneyPerDay = costPerDay;
console.log(appData);

alert("Ежедневный бюджет: " + costPerDay);

if (appData.moneyPerDay < 100) {
    alert("У вас минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
    alert("У вас средний уровень достатка");
} else if (appData.moneyPerDay >= 1000) {
    alert("У вас высокий уровень достатка");
} else {
    alert("Что то пошло не так");
}