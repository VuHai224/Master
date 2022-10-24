let item = window.localStorage.getItem("item");
let itemnumber = document.querySelector(".item-number");
itemnumber.innerHTML = item;

let username = document.querySelector(".username");
let password = document.querySelector(".password");
let email = document.querySelector(".email");
let create = document.querySelector(".create");
let users = JSON.parse(localStorage.getItem("users") || "[]");
let error = document.querySelector(".error");
error.innerHTML = "";
console.log(users);
create.onclick = function () {
  // console.log(email.value.includes("@"));
  if (email.value.includes("@")) {
    let duplicate = users.filter(function (user) {
      return user.email === email.value;
    });
    if (duplicate.length > 0) {
      error.innerHTML = "Tài khoản này đã tồn tại";
    } else {
      let newUser = {
        name: username.value,
        password: password.value,
        email: email.value,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      error.innerHTML = "Đăng kí thành công";
      username.value = "";
      password.value = "";
      email.value = "";
    }
  } else {
    error.innerHTML = "Định dạng email sai";
    username.value = "";
    password.value = "";
    email.value = "";
  }
};
// window.localStorage.clear();
