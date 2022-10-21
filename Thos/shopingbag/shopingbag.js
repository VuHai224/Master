let toggleMenu = document.querySelector(".toggleMenu");
let list = document.querySelector(".list");
let closeBtn = document.querySelector(".closeBtn");
let headerbackground = document.querySelector(".header-background");
let dropbox = document.querySelector("#dropbox-select");
let price1 = document.querySelector("#price1");
let price2 = document.querySelector("#price2");
let bag1 = document.querySelector("#bag1");
let bag2 = document.querySelector("#bag2");
let closeitem = document.querySelector("#close-item");
let info = document.querySelector(".info");
let total = document.querySelector(".total");
let checkout = document.querySelector(".checkout");
let empty = document.querySelector(".empty");

toggleMenu.onclick = function () {
  toggleMenu.classList.add("active");
  list.classList.add("active");
  closeBtn.classList.add("active");
};
closeBtn.onclick = function () {
  toggleMenu.classList.remove("active");
  list.classList.remove("active");
  closeBtn.classList.remove("active");
};
function box_shadow() {
  if (window.top.scrollY === 0) {
    console.log(1);
    headerbackground.classList.remove("active");
    return;
  }
  headerbackground.classList.add("active");
}
dropbox.onchange = function () {
  let price = dropbox.value * 49;
  price1.innerHTML = "$" + price + ".00";
  price2.innerHTML = "$" + price + ".00";
  bag1.innerHTML = "Shopping bag (" + dropbox.value + ")";
  bag2.innerHTML = "Shopping bag (" + dropbox.value + ")";
};
closeitem.onclick = function () {
  info.classList.add("close");
  total.classList.add("close");
  checkout.classList.add("close");
  empty.classList.remove("close");
  bag1.innerHTML = "Shopping bag (0)";
  bag2.innerHTML = "Shopping bag (0)";
};
