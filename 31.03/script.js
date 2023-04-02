/* 1) Напишите функцию, который будет выводить сообщение “Hello World” раз в секунду,
   но всего 5 раз. После 5 итераций скрипт должен вывести сообщение “Done”,
   после чего процесс завершится. При решении данной задачи нельзя вызывать setTimeout. */

let count = 0;
const intervalId = setInterval(() => {
  console.log("Hello World");
  count++;
  if (count === 5) {
    console.log("Done");
    clearInterval(intervalId);
  }
}, 1000);

/* 2) Выводим  2 следующих сообщения после соответствующих задержек.
   Сообщение “Hello after 4 seconds” выводим через 4 секунды.
   Сообщение “Hello after 8 seconds” выводим через 8 секунд.
   В решении нужно определить всего одну функцию, содержащую встроенные функции.
   Это означает, что множество вызовов setTimeout должны будут использовать одну и ту же функцию.
   Пример вызова:
   setTimeout(func1) => Hello after 4 seconds
   setTimeout(func1) => Hello after 8 seconds */

function showMessageWithDelay(message) {
  return function () {
    console.log(message);
  };
}
const delayedMessage1 = showMessageWithDelay("Hello after 4 seconds", 4000);
const delayedMessage2 = showMessageWithDelay("Hello after 8 seconds", 8000);
setTimeout(delayedMessage1, 4000);
setTimeout(delayedMessage2, 8000);

/* 3) Пользователь вводит число от 1 до 31, которое присваивается переменной day.
   Определите в какую декаду месяца попадает это число: в первую, вторую или третью.
   Результат нужно вывести на экран.
   Используйте конструкцию swith-case. */

const day = parseInt(prompt("Введите число от 1 до 31"));

switch (true) {
  case day >= 1 && day <= 10:
    console.log(`Число ${day} попадает в первую декаду месяца`);
    break;
  case day >= 11 && day <= 20:
    console.log(`Число ${day} попадает во вторую декаду месяца`);
    break;
  case day >= 21 && day <= 31:
    console.log(`Число ${day} попадает в третью декаду месяца`);
    break;
  default:
    console.log("Некорректный ввод");
    break;
}
