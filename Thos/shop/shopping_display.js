// Code for "Enter email address" part
let $emailInput = document.getElementById('email-input')
let $form = document.getElementById('form-tag')
let $subscribeButton = document.getElementById('subscribe-btn')
let $notify = document.getElementById('notify')
function checkEmail(event){
 let value = $emailInput.value
 if (value === ""){
    $notify.innerHTML = 'This field is required'
    $notify.classList.add('style')
 } else if (value.includes('@') === false) {
    $notify.innerHTML = 'Please enter a valid email address'
    $notify.classList.add('style')
} else {
    $notify.classList.add('style1')
    $notify.innerHTML = 'Thank you'
    let $emailLabel = document.getElementById('email-label')
    $form.removeChild($emailLabel)
    $form.removeChild($emailInput)
}
}

// Code for toggle menu in phone and tablet screen
let $closeIcon = document.getElementById('close-icon')
let $menuIcon = document.getElementById('menu-icon')
let $rightPart = document.getElementById('right-part')
let $leftPart = document.getElementById('left-part')
function toggleMenu(event){
 $closeIcon.classList.add('appeared')
 $menuIcon.classList.add('disappeared')
 $rightPart.classList.add('appeared')
 $leftPart.classList.add('appeared')

}

function closeToggleMenu(event){
 $closeIcon.classList.remove('appeared')
 $menuIcon.classList.remove('disappeared')
 $rightPart.classList.remove('appeared')
 $leftPart.classList.remove('appeared')
}

// Create box shadow for header

function headerBoxShadow(event){
 let $headerPart = document.getElementById('header-part')
 
 if (window.top.scrollY === 0) {
    $headerPart.classList.remove('box-shadow')
    return
 }
 $headerPart.classList.add('box-shadow')
}

// Change color when mouse over shopbag
let $shopBag = document.getElementById('shop-bag')
function changeColor() {
 $shopBag.classList.add('color-changed')
}

function oldColor(event) {
 $shopBag.classList.remove('color-changed')
}

// Add product in shopping bag
let $itemNumber = document.getElementsByClassName('item-number')
console.log($itemNumber);
let $addBtn = document.getElementsByClassName('add-btn')
let $addBtn2 = document.getElementsByClassName('add-btn2')
function addItemsInBag(){
   let x = $itemNumber[0].innerHTML
   $itemNumber[0].innerHTML = Number(x) + 1
   $itemNumber[1].innerHTML = $itemNumber[0].innerHTML
   $itemNumber[2].innerHTML = $itemNumber[0].innerHTML


// Change button content when click to add items
   $addBtn[0].classList.add('disappeared')
   $addBtn2[0].classList.remove('disappeared')
   setTimeout (function(){
      $addBtn[0].classList.remove('disappeared')
      $addBtn2[0].classList.add('disappeared')
   },2000)
}
