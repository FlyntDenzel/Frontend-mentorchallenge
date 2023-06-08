// adding an email validation function 
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;

    if (!email) {
        alert('Enter something before continung na');
    }
    else if(!validateEmail(email)){
        alert('Enter a valid email before clicking the submit button');
    }
    else{
        alert('thanks for submitting the email');
    }
});