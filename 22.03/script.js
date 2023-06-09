/* 1) Если переменная x равна 7, то выведите окошко с сообщением 'Верно', 
   иначе выведите 'Неверно'. */
let x = 7;
const y = x === 7 ? "Верно!" : "Неверно!";
alert(y);

/* 2) Если переменная a равна или меньше 1, а переменная b больше или равна 3, 
   то выведите сумму этих переменных, иначе выведите их результат вычитания.
   Используйте конструкцию if..else */

let a = 1;
let b = 3;
if (a <= 1 && b >= 3) {
  alert(a + b);
} else {
  alert(a - b);
}

/* 3) Используя конструкцию if..else, напишите код, который будет спрашивать: 
   «Столица Кыргызстана?».
   Если посетитель вводит «Бишкек»,
   то выводить «Верно!», если что-то другое – выводить «Не знаете?». */

const capital = prompt("Столица Кыргызстана?");

if (capital === "Бишкек") {
  alert("Верно!");
} else {
  alert("Не знаете?");
}

/* 4) В переменной time лежит число от 0 до 59. 
   Определите в какую четверть часа попадает это число 
   (в первую, вторую, третью или четвертую). Например: если переменная time = 5, 
   то она попадает в первую четверть. В противном случае вывести 
   "Значение не попадает в диапазон от 0 до 59". */

let min = +prompt("Введите число от 0 до 59");
if (min >= 0 && min <= 14) {
  alert("Первая");
}
if (min >= 15 && min <= 30) {
  alert("Вторая");
}
if (min >= 31 && min <= 45) {
  alert("Третья");
}
if (min >= 46 && min <= 59) {
  alert("Четвертая");
} else {
  alert("Значение не попадает в диапазон от 0 до 59");
}
