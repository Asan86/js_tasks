/* 1) Нужно создать функцию, которая будет выводить куб числа на страничку. 
 Число должно передаваться параметром. */
let num = prompt("Нберите число: ");
function cube() {
  var result = num * num * num;
  document.write("куб числа: " + result);
}
cube(num);

/* 2) Напишите функцию getName(), которая при вызове будет принимать переменную 
   name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»). 
   В случае отсутствующего параметра выводить «Привет, гость» */
let str = prompt("Напишите свое имя: ");
function getName(str) {
  if (str) {
    alert("Привет " + str);
  } else {
    alert("Привет гость!");
  }
}
getName(str);

/* 3) Напишите функцию, которая вычисляет итоговую оценку студента в зависимости от двух параметров: 
оценки за экзамен и количества выполненных проектов. 
   Ваша функция должна принимать два аргумента:
   экзамен - оценка за экзамен (от 0 до 100); 
   проекты - количество реализованных проектов (от 0 и выше); 
   Эта функция должна возвращать число (итоговая оценка). 
   Есть четыре типа итоговых оценок:

   - 100, если оценка за экзамен больше 90 или количество выполненных проектов больше 10.
   - 90, если оценка за экзамен больше 75 и количество выполненных проектов не менее 5.
   - 75, если оценка за экзамен больше 50 и количество выполненных проектов не менее 2.
   - 50, если оценка за экзамен больше 30 и количество  выполненных проектов не менее 1.
   - 0, в остальных случаях.

   Пример вызова:
   example(100, 12) => 100
   example(99, 0) => 100 */

function finalGrade(exampl, projects) {
  if (exampl > 90 || projects > 10) {
    return 100;
  } else if ((exampl > 75) & (projects >= 5)) {
    return 90;
  } else if ((exampl > 50) & (projects >= 2)) {
    return 75;
  } else if ((exampl > 30) & (projects >= 1)) {
    return 50;
  } else {
    return 0;
  }
}
