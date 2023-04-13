const form = document.getElementById("my-form");
// console.log(form);
function getFormValue(event) {
  event.preventDefault();
  const fields = document.querySelectorAll("input");
  const values = {};
//   console.log(fields);
fields.forEach(field => {
    const {name, value} = field;
    // console.log(name + " "+ value);
    values[name] = value;
})
console.log(values);
}
form.addEventListener("submit", getFormValue);
