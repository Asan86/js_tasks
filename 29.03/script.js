/* 2) Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
Нужно найти перебирая эти элементы с помощью цикла четные числа.
И эти найденные четные числа должны быть собраны в одном массиве. */

// let array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// for (let i = 0; i < array.length; i++) {
//   let newArray = [];
//   let even = array[i];
//   if (even % 2 == 0) {
//     newArray = even;
//     console.log(newArray);
//   }
// }
// let neArr = array.filter(array => array % 2 == 0);
// console.log(neArr);

/* 3) Заполните массив 10-ю иксами с помощью цикла. [x,x...] */
let count = [];
for(let i = 0; i < 10; i++ ){
    count[i] = 'x';
}
console.log(count);

/* 4) У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99.
С помощью цикла for и оператора if нужно проверить есть ли в массиве число
со значением, равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!' */

let myArray = [1, 2, 115, 4, 58, 5 ,7 ,99];

for(let i = 0; i < myArray.length; i++){
    if(myArray[i] == 4){
        console.log("ЕСТЬ!");
    }
}