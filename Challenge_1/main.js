// adding an email validation function 
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
    event.preventDefault
})