/* *********************** Получение через цикл (for of) ************************* */
const form = document.getElementById('my-form');
const getFormValues1 = (event)=>{
    event.preventDefault();
    const values = {};
    for(let field of form){
        if(field.name){
            values[field.name] = field.value;
        }
    }
    console.log(values);
}
form.addEventListener('submit', getFormValues1);

/* *******************Мотод №3 получаем по ключу********************* */
const getFormValues2 = (event) => {
  event.preventDefault();
  const { lname, fname, email, date, adress } = form;
  const values = {
    lname: lname.value,
    fname: fname.value,
    email: email.value,
    date: date.value,
    adress: adress.value,
  };
  console.log(values);
};
form.addEventListener("submit", getFormValues2);
