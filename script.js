const FirstName = document.getElementById('FirstName');
const Form = document.getElementById('form');
const LastName = document.getElementById('LastName');
const email = document.getElementById('email');
const Password = document.getElementById('Password');

Form.addEventListener('submit', e =>{
    e.preventDefault(); // to prevent the form from submitting

    // call function for all inputs and giving it a value
    checkInputs();
});

function checkInputs(){
    // get the values of the inputs n trim the whitespaces
    const FirstNamevalue = FirstName.value.trim(); 
    const LastNamevalue = LastName.value.trim();
    const emailvalue = email.value.trim();
    const Passwordvalue = Password.value.trim();

    // firstname
    if(FirstNamevalue === ''){
        errorFunc(FirstName, 'First Name cannot be empty');
    }
    else{
        successFunc(FirstName);
    }
    // lastname
    if(LastNamevalue === ''){
        errorFunc(LastName, 'Last Name cannot be empty');
    }
    else{
        successFunc(LastName);
    }
    // email
    if(emailvalue === ''){
        errorFunc(email, 'Looks like this is not an email');
    } else if(!isEmail(emailvalue)) {
        errorFunc(email, 'Email is not valid');
    }
    else{
        successFunc(email);
    }
    // password
    if(Passwordvalue === ''){
        errorFunc(Password, 'Password cannot be empty');
    }
    else{
        successFunc(Password);
    }
}

// function for error msg
function errorFunc (element, message) {
    // get the parent container of the input ***input-bx
    const inputbx = element.parentElement;

    // merge the parent container with error msg
    const errorMsg = inputbx.querySelector('.error-msg');

    // add/display error msg inside the p tag
    errorMsg.innerText = message;

    // add error class
    inputbx.className = 'input-bx error';
}

// function for success msg
function successFunc(element){
    const inputbx = element.parentElement;

    // add success class to the input-bx
    inputbx.className = 'input-bx success'
}

// function to check if the email match this regex value
// Validate email
function isEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }