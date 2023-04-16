const url = "http://localhost:3000/users";
const getForm = document.getElementById("my-form"); 
let values;
const getFormValues = async (event) => {
  event.preventDefault();
  const { lastName, firstName, email, date } = getForm;
  values = {
    lName: lastName.value,
    fname: firstName.value,
    email: email.value,
    date: date.value,
  };
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  if(response.ok){
    alert("Пользователь успешно добавлен");
  }else{
    alert("Произашла ошибка");
  }}

getForm.addEventListener("submit", getFormValues);

