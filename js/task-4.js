const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => { 
    event.preventDefault();

    const loginFormData = {
        [loginForm.elements.email.name]: loginForm.elements.email.value.trim(),
        [loginForm.elements.password.name]: loginForm.elements.password.value.trim()
    };

    if (!(loginForm.elements.email.value && loginForm.elements.password.value)) {
        alert('All form fields must be filled in');
    } else { 
        console.log(loginFormData);

        loginForm.reset();
    }

})
