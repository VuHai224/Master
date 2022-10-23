let item = window.localStorage.getItem("item");
let bag = document.querySelector(".bag");
bag.innerHTML = "Shopping Bag (" + item + ")";
