

// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const email = emailInput.value;

//     if (!email) {
//         alert('Enter something before continung na');
//     }
//     else if(!validateEmail(email)){
    //         alert('Enter a valid email before clicking the submit button');
//     }
//     else{
    //         alert('thanks for submitting the email');
    //     }
    // });
    
    function submitForm() {
        // getting the value from the email input
        const email = document.getElementById('email').value;

        // validates the email
        if(!validateEmail(email)){
            alert('Invalid Email address');
            return;
        }
        window.location.href = "success.html";

        // adding an email validation function 
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
        }
}

const submitForm = document.getElementById('form');
form.addEventListener('submit', function (event) {
    // this prevents the default form from being submitted    
    event.preventDefault();
    submitForm();
});