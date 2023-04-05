/* 1) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику
    на картинку алертом выводился ее описание. */
const images = document.querySelectorAll("img");
const button = document.querySelector("button");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const description = image.getAttribute("data-description");
    alert(description);
  });
});

button.addEventListener("click", () => {
  const description = button.getAttribute("data-description");
  alert(description);
});

/*
2) Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите
    куда данная ссылка ссылается. */
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    const href = link.getAttribute("href");
    alert(`Ссылка ведет на: ${href}`);
  });
});

/*  Напишите функцию, которая объединяет несколько строк и возвращает их.
   Используйте глобальный массив arguments. */

function joinStrings() {
  let result = "";

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

const str1 = "Hello";
const str2 = " ";
const str3 = "world";
const str4 = "!";

const result = joinStrings(str1, str2, str3, str4);

console.log(result);

/* Напишите функцию, которая разворачивает массив в обратном порядке и затем ее возвращает.
   Функция наша принимает массив любых элементов. 
   Например: 
   const data = [1, 2, 3]; 
   myFunc(data); // [3, 2, 1]
   Без метода reverse. */
function reverseArray(arr) {
  const reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}
const data = [1, 2, 3];
const reversedData = reverseArray(data);

console.log(reversedData);
