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
    let menber = users.filter(function (user) {
      return user.email === email.value && user.password === password.value;
    });
    console.log(menber);
    if (menber.length > 0) {
      error.innerHTML = "Đăng Nhập Thành Công";
      password.value = "";
      email.value = "";
      window.localStorage.setItem("login", menber[0].name);
    } else {
      error.innerHTML = "Tài Khoản ko tồn tại";
    }
  } else {
    error.innerHTML = "Định dạng email sai";
    password.value = "";
    email.value = "";
  }
};
