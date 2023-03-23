/* 1) Создайте объект с ключами a, b и c значениями 5 , 6 и 10. 
   Найдите сумму его элементов. */

const object = {
  a: 5,
  b: 6,
  c: 10,
};
const result = object.a + object.b + object.c;
console.log(result);

/* 2) let number;
  if(data === true){
     number = 3;
  } else{
     number = 5;
  }
  Сделайте рефакторинг кода, с помощью тернарного оператора. */
let data = true;
let number;
let num = data === true ? (number = 3) : (number = 5);
console.log(num);

/* 3) Создайте массив с элементами 10, 15, 9, 10.
   - Умножьте первый элемент массива на второй,
   - а третий элемент на четвертый.
   - Результаты сложите, присвойте переменной result. 
     Выведите на экран значение этой переменной. */
     const array = [10, 15, 9, 10];
     let multipl_1 = array[0] * array[1];
     let multipl_2 = array[2] * array[3];
     let resultArr = multipl_1 + multipl_2;
     console.log(resultArr);      

/* 4) Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите 
   на экран строку 'a+b, c+d'. */
   arr = ['a', 'b', 'c', 'd'];
   document.write("'" + arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3] + "'");

/* 5) Если переменная test не равна true, то выведите 'Верно', 
   иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, 
   false. Напишите два варианта скрипта - с короткой записью и с длинной. */

   const test = true;
   if(test){
    console.log("Верно!");
   }
   else{
    console.log("Неверно!");
   }

   let correct = test ? "Верно!" : "Неверно!";
   console.log(correct);