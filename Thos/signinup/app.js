let item = window.localStorage.getItem("item");
console.log(item);
let itemnumber = document.querySelector(".item-number");
itemnumber.innerHTML = item;
