import axios from "axios";

let users = [];

let employees = axios
  .get("https://mybeecrm.firebaseio.com/employees.json")
  .then(res => {
    const data = res.data;

    for (let key in data) {
      users.push(data[key]);
      //console.log(data[key]);
    }
    //console.log(users);
  });
export default users;
