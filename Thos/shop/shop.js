// Code for "Enter email address" part
let $emailInput = document.getElementById("email-input");
let $form = document.getElementById("form-tag");
let $subscribeButton = document.getElementById("subscribe-btn");
let $notify = document.getElementById("notify");
function checkEmail(event) {
  let value = $emailInput.value;
  if (value === "") {
    $notify.innerHTML = "This field is required";
    $notify.classList.add("style");
  } else if (value.includes("@") === false) {
    $notify.innerHTML = "Please enter a valid email address";
    $notify.classList.add("style");
  } else {
    $notify.classList.add("style1");
    $notify.innerHTML = "Thank you";
    let $emailLabel = document.getElementById("email-label");
    $form.removeChild($emailLabel);
    $form.removeChild($emailInput);
  }
}

// Code for toggle menu in phone and tablet screen
let $closeIcon = document.getElementById("close-icon");
let $menuIcon = document.getElementById("menu-icon");
let $rightPart = document.getElementById("right-part");
let $leftPart = document.getElementById("left-part");
function toggleMenu(event) {
  $closeIcon.classList.add("appeared");
  $menuIcon.classList.add("disappeared");
  $rightPart.classList.add("appeared");
  $leftPart.classList.add("appeared");
}

function closeToggleMenu(event) {
  $closeIcon.classList.remove("appeared");
  $menuIcon.classList.remove("disappeared");
  $rightPart.classList.remove("appeared");
  $leftPart.classList.remove("appeared");
}

// Create box shadow for header

function headerBoxShadow(event) {
  let $headerPart = document.getElementById("header-part");

  if (window.top.scrollY === 0) {
    $headerPart.classList.remove("box-shadow");
    return;
  }
  $headerPart.classList.add("box-shadow");
}

// Change color when mouse over shopbag
let $shopBag = document.getElementById("shop-bag");
function changeColor() {
  $shopBag.classList.add("color-changed");
}

function oldColor(event) {
  $shopBag.classList.remove("color-changed");
}
let item = window.localStorage.getItem("item");
let bag = document.querySelectorAll(".item-number");
console.log(bag);
for (const iterator of bag) {
  iterator.innerHTML = item;
}
