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
// How to scroll at the top and box shadow will be disappeared
function headerBoxShadow(event){
 let $headerPart = document.getElementById('header-part')
 
 if (window.top.scrollY === 0) {
    $headerPart.classList.remove('box-shadow')
    return
 }
 $headerPart.classList.add('box-shadow')
}