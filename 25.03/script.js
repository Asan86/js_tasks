const users = [
  {
    name: "Вася",
    age: 32,
    isProgrammer: true,
  },
  {
    name: "Петя",
    age: 22,
    isProgrammer: false,
  },
  {
    name: "Саша",
    age: 28,
    isProgrammer: true,
  },
];

for (let value of users) {
  if (value.isProgrammer === true) {
    console.log(value.name + " программист.");
  } else {
    console.log(value.name + " не программист.");
  }
  const res =
    value.isProgrammer === true
      ? `${value.name} программист.`
      : `${value.name} не программист.`;
  console.log(res);
}

/* 1. Создайте цикл while, который будет выводить в консоль все нечётные числа от 1 до 30 */
var num = 0;
while (num < 30) {
  num++;
  if (num % 2) console.log(num);
}

/* 2. У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99. 
   С помощью цикла for и оператора if нужно проверить есть ли в массиве число со значением, 
   равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!' */
const arr = [1, 2, 115, 4, 58, 5, 7, 99];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    console.log("ЕСТЬ!!!");
  }
}

/* 3. Создайте массив с числами. Перебирая элементы созданного массива с помощью 
   цикла выведите только те элементы массива, которые больше нуля и меньше 10. */
const array = [1, 2, 115, 4, 58, 9, 7, 99, 0, 47, 98, 46, 28, 52, 8, 5, 3];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] < 10) {
    console.log(array[i]);
  }
}
