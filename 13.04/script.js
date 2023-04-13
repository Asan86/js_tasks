const url = "https://jsonplaceholder.typicode.com/users";
const showUsers = (date) => {
  console.log(date);
  //   console.log(usersDate);
  let tbody = document.getElementById("myTable");

  // console.log(table);
  for (let i = 0; i < date.length; i++) {
    let row = `
        <tr>
        <td>${date[i].id}</td>
        <td>${date[i].username}</td>
        <td>${date[i].name}</td>
        <td>${date[i].email}</td>
        <td>${date[i].phone}</td>
        <td>${date[i].website}</td> 
        </tr> `;
    tbody.innerHTML += row;
  }
};
// showUsers(usersDate)
const getUsers = async function () {
  const respons = await fetch(url);
  //   console.log(respons);
  const date = await respons.json();
  showUsers(date);
};
getUsers();
