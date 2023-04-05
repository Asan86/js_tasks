/* 1) Напишите функцию, которая заполняет новый массив предоставленным значением и затем ее возвращает.
   Функция должна первым параметром принимать элемент (значение для массива), вторым параметром размер массива.
   Например: myFunc('a', 3)   // ['a', 'a', 'a'] */
function myArray(length, value) {
  let newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(value);
  }
  return newArray;
}
console.log(myArray(3, "    "));

/* 2) Напишите функцию, которая разворачивает массив в обратном порядке и затем ее возвращает.
   Функция наша принимает массив любых элементов. 
   Например: 
   const data = [1, 2, 3]; 
   myFunc(data); // [3, 2, 1] */
// const data = [1, 2, 3];

function myFunc(arr) {
  let revers = arr.reverse();
  console.log(revers);
}
console.log(myFunc(data));

/* 3) Напишите функцию которая меняет текстовое содержимое элемента.
   Функция принимает два параметра, идентификатор элемента и текстовку.
   myFunc('desc', 'Hello world'); //находит элемент с идентификатором desc и
                                    заменяет текстовку на Hello world  */

function myFunc2(index, text) {
  let str = (index = text);
  console.log(str);
}
console.log(myFunc2("desc", "Hello world"));
