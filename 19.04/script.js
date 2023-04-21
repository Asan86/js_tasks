const url = "http://localhost:3000/users";

const table = document.getElementById("users-table");
const form = document.getElementById("update-form");
const btnUpdate = document.getElementById("btn-update");
/* получение пользователей */
const getUsers = async () => {
  const response = await fetch(url);
  if (response.ok) {
    const users = await response.json();
    showUsers(users);
  } else {
    alert("произошла ошибка");
  }
};

/* добавление пользователей в таблицу */
const showUsers = (users) => {
  const elems = users.reduce((row, item) => (row += createTr(item)), "");
  table.querySelector("tbody").innerHTML = elems;

  createHEndler();
};
/*  */
const createTr = (item) => {
  const user = JSON.stringify(item);
  return `<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.second_name}</td>
          <td>${item.email}</td>
          <td>${item.birth_date}</td>
        <td>
          <button class="btn-update btn btn-success mr-2" data-user=${user} data-bs-toggle="modal" data-bs-target="#update-modal">Редактировать</button>
          <button class="btn btn-danger">Удалить</button>
        </td>
        </tr>`;
};

const createHEndler = () => {
  const btns = document.querySelectorAll(".btn-update");
  btns.forEach((item) => {
    item.addEventListener("click", setUserData);
  });
};
const setUserData = (event) => {
  const userData = JSON.parse(event.target.dataset.user);
  const keys = Object.keys(userData);
  keys.forEach((item) => {
    form[item].value = userData[item];
  });
};

const updataUser = async (user) => {
  const id = user.id;
  delete user.id;

  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const updataUrl = url + "/" + id;

  const response = await fetch(updataUrl, options);
  if (response.ok) {
    alert("Редактирование успешно выполнено");
  } else {
    ("Ошибка попробуйте еще раз!");
  }
};

const getUserValues = () => {
  const elems = form.elements;
  const values = {};
  for (let elem of elems) {
    values[elem.name] = elem.value;
    location.reload();
  }
  updataUser(values);
};

btnUpdate.addEventListener("click", getUserValues);
getUsers();
