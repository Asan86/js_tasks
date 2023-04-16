const form = document.getElementById("my-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log("work");

  const fields = document.querySelectorAll("input, textarea, select, input[type='checkbox']:checked");
  const values = {};

  fields.forEach((item) => {
    values[item.name] = item.value;
    const isChecked = checkbox.checked;
        
  });
//   console.log(values);
});
