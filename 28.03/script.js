/* 1) На старте вы получаете массив. Необходимо написать функцию, которая будет возвращать массив удвоенных значений исходного массива.

   Пример кода:
   example([1, 2, 3]) => [2, 4, 6]
   example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
   example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4] */

let arr1 = [1, 2, 3];
let arr2 = [4, 1, 1, 1, 4];
let arr3 = [2, 2, 2, 2, 2, 2];

let double = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 2);
  }
  return result;
};
console.log(double(arr1));
console.log(double(arr2));
console.log(double(arr3));

/* 
2) Напишите функцию, которая заполняет новый массив предоставленным значением 
   и затем ее возвращает. Функция должна первым параметром принимать 
   элемент (значение для массива), вторым параметром размер массива.  
   Например: myFunc('a', 3)   // ['a', 'a', 'a'] */

function myArray(size, value) {
  let newArray = [];
  for (let i = 0; i < size; i++) {
      newArray.push(value);

  }
  return newArray;
};
console.log(myArray(3, "a"));

/* 3) Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
   Попробуйте реализовать эту функцию не только с помощью if...else, но и с помощью тернарного оператора, и в виде стрелочной функции.*/
/* Вариант 1 */
a = 0;
b = 0;
function my_func(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
console.log(my_func(4, 6)); // -1
console.log(my_func(10, 2)); // 1

/* Вариант 2 */
function func2(a, b){
   return (a < b) ? -1 : (a > b) ?  1 : 0;
}
console.log( func2(2, 5) );  // -1
        console.log( func2(8, 5) );  // 1
        console.log( func2(5, 5) );  // 0

/* Вариант 3 */
const func = (a, b) => a < b ? -1 : a > b ?  1 : 0;

console.log( func(2, 5) );  // -1
        console.log( func(8, 5) );  // 1
        console.log( func(5, 5) );  // 0