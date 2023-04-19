// Select form elements
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const messageInput = document.querySelector('.message-input');
const submitButton = document.querySelector('.submit-button');
const errorMessageContainer = document.querySelector('.error-text');
const errorMessage = document.querySelector('.error-text .error-message');
const closeErrorMessageButton = document.querySelector('.error-text .close-button');

// Validate form inputs on submit
submitButton.addEventListener('click', function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Check if name input is not empty
    if (nameInput.value.trim() === '') {
        errorMessage.innerHTML = 'Please enter your name.';
        errorMessageContainer.style.top = "0";
        errorMessageContainer.style.backgroundColor = "#e25c3d";
        nameInput.focus();
        return;
    }

    // Check if email input is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        errorMessage.innerHTML = 'Please enter a valid email address.';
        errorMessageContainer.style.top = "0";
        errorMessageContainer.style.backgroundColor = "#e25c3d";
        emailInput.focus();
        return;
    }

    // Check if message input is not empty
    if (messageInput.value.trim() === '') {
        errorMessage.innerHTML = 'Please enter your message.';
        errorMessageContainer.style.top = "0";
        errorMessageContainer.style.backgroundColor = "#e25c3d";
        messageInput.focus();
        return;
    }
    // If all inputs are valid, submit the form
    errorMessage.innerHTML = "Your message has been sent!";
    errorMessageContainer.style.top = "0";
    errorMessageContainer.style.backgroundColor = "#00b894";
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});

closeErrorMessageButton.addEventListener('click', () => {
    errorMessageContainer.style.top = "-100%";
});