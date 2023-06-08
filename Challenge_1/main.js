    // adding an email validation function 
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
  }
         function submitForm() {
        // getting the value from the email input
        const email = document.getElementById('email').value;

        // validates the email
        if(!email || !validateEmail(email)){
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.innerText = 'Please provide a valid email address.';
            return;
        }
        // redirecting to the second page in case of validation
        window.location.href = 'success.html';
}

    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        // this prevents the default form from being submitted    
        event.preventDefault();
        submitForm();
    });