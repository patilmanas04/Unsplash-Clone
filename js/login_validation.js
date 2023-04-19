// get the form and inputs
const form = document.querySelector('.login-form');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');
const errorMessageContainer = document.querySelector('.error-text');
const errorMessage = document.querySelector('.error-text .error-message');
const closeErrorMessageButton = document.querySelector('.error-text .close-button');
// add event listener to the form
loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // prevent default form submission behavior

  // validate email and password inputs
  if (!emailInput.value || !passwordInput.value) {
    errorMessage.innerHTML = 'Please enter both email and password.';
    errorMessageContainer.style.backgroundColor = "#e25c3d";
    errorMessageContainer.style.top = "0";
  }
  else if (!isValidEmail(emailInput.value)) {
    errorMessage.innerHTML = 'Please enter a valid email address.';
    errorMessageContainer.style.backgroundColor = "#e25c3d";
    errorMessageContainer.style.top = "0";
  }
  else if (!isValidPassword(passwordInput.value)) {
    errorMessage.innerHTML = 'Password must be at least 8 characters long.';
    errorMessageContainer.style.backgroundColor = "#e25c3d";
    errorMessageContainer.style.top = "0";
  }
  else {
    // login successful
    errorMessage.innerHTML = "Login successful!"
    errorMessageContainer.style.top = "0";
    errorMessageContainer.style.backgroundColor = "#00b894";
    form.reset();
  }
});

closeErrorMessageButton.addEventListener('click', () => {
    errorMessageContainer.style.top = "-100%";
});

// helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// helper function to validate password format
function isValidPassword(password) {
  return password.length >= 8;
}