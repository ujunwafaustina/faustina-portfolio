




const toggleMenu = document.querySelector("#toggleMenu");
const navBar = document.querySelector(".navBar");

function toggleMenuBar() {
    navBar.classList.toggle("active");
}
toggleMenu.addEventListener("click", toggleMenuBar);

// form
// declare my inputs
const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const phoneNo = document.querySelector("#phoneNo");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit-btn");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    // checkDetails();
    // form reset
    const isFormValid = checkDetails();
    if(isFormValid){
        form.reset();
        // alert("Message successfully sent");
    }
});

function checkDetails(){

    // get inputs values
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneNoValue = phoneNo.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    let isValid = true;
     
    // check values
    if (firstNameValue ===""){
        // set error and add error class
        setErrorFor(firstName, "First Name cannot be blank");
        isValid = false;
    }
    else{
        // set success 
        setSuccessFor(firstName);
    }
    if(lastNameValue ===""){
        // set error and add error class
        setErrorFor(lastName, "Last Name cannot be blank");
        isValid = false;
    }
    else{
        //  set success
        setSuccessFor(lastName);
    }
    if(phoneNoValue ===""){
        // set error
        setErrorFor(phoneNo, "Phone cannot be blank");
    }
    else{
        // set success
        setSuccessFor(phoneNo);
    }
    if(emailValue ===""){
        // set error
        setErrorFor(email, "Email cannot be blank");
    }
    else if(!IsEmail(emailValue)){
        // set error
        setErrorFor(email, "Enter a valid Email address")
    }
    else{
        // set success
        setSuccessFor(email);
    }
    if(messageValue ===""){
        // set error
        setErrorFor(message, "Message cannot be blank");
    }
    else{
        // set success
        setSuccessFor(message);
    }
    return isValid
}
// set error 
function setErrorFor(input, errorMessage){
    const   errorDisplay = input. nextElementSibling;
    errorDisplay.innerHTML = errorMessage;
    input.classList.add("invalid");

}

// set success
function setSuccessFor(input){
    const   errorDisplay = input. nextElementSibling;
    errorDisplay.innerHTML = "";
    input.classList.remove("invalid");

}
// check valid email
function IsEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

}