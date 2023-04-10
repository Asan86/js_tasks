/* *********************** Получение через цикл (for of) ************************* */
const form1 = document.getElementById('my-form');
const getFormValues1 = (event)=>{
    event.preventDefault();
    const values1 = {};
    for(let fild of form1){
        if(fild.name){
            values1[fild.name] = fild.value;
        }
    }
    console.log(values1);
}
form1.addEventListener('submit', getFormValues1);

/* *******************Мотод №3 получаем по ключу********************* */
const form2 = document.getElementById("my-form");
const getFormValues2 = (e) => {
  e.preventDefault();
  const { lname, fname, email, date, adress } = form2;
  const values2 = {
    lname: lname.value,
    fname: fname.value,
    email: email.value,
    date: date.value,
    adress: adress.value,
  };
  console.log(values2);
};
form2.addEventListener("submit", getFormValues2);
