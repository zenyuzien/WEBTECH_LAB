function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if( confirm("do you want to submit the form?") ); 
    else return;

    if (!firstName || !lastName || !email) {
        alert("First Name, Last Name, and Email are required fields.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Invalid email format.");
        return;
    }

    if (password.length < 8 || password.length > 16) {
        alert("Password must be between 8 and 16 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // All checks passed, form submission logic goes here
    alert("Form validation: success");
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
