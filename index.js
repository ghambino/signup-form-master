let firstname = document.querySelector('#first');
let lastname = document.querySelector('#last');
let email = document.querySelector('#email');
let pass = document.querySelector('#password');
let btn = document.querySelector('button')

const inputValidation = (val, name) => {
    let pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let p = document.querySelector(`.${name}`);
    if(val.trim().length === 0){
        p.innerHTML = `${name} cannot be empty`;

        setTimeout(() => {
            p.innerHTML = ''
        }, 5000)
        
    }
    else {
       p.innerHTML = "" 
    }
    if(name === 'email' && val.trim().length > 0 && pattern.test(val) === false){
        p.innerHTML = 'invalid email address'
    }
};

const formSubmission = (event) => {
    event.preventDefault();
    inputValidation(firstname.value, 'firstName');
    inputValidation(lastname.value, 'lastName');
    inputValidation(email.value, 'email');
    inputValidation(pass.value, 'password')

}
btn.onclick = formSubmission