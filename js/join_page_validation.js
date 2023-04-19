const firstNameInput = document.querySelector(".first-name-input");
const lastNameInput = document.querySelector(".last-name-input");
const emailInput = document.querySelector(".email-input");
const userNameInput = document.querySelector(".user-name-input");
const passwordInput = document.querySelector(".password-input");
const submitButton = document.querySelector(".submit-button");
const errorMessageContainer = document.querySelector('.error-text');
const errorMessage = document.querySelector('.error-text .error-message');
const closeErrorMessageButton = document.querySelector('.error-text .close-button');
  
// function to validate inputs
const validateInputs = () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const userName = userNameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!firstName || !lastName || !email || !userName || !password) {
        errorMessage.innerHTML = "All fields are required.";
        errorMessageContainer.style.backgroundColor = "#e25c3d";
        errorMessageContainer.style.top = "0";
        return false;
    }

    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        errorMessageContainer.style.backgroundColor = "#e25c3d";
        errorMessageContainer.style.top = "0";
        return false;
    }

    // check if username contains only letters, numbers, and underscores
    const userNameRegex = /^\w+$/;
    if (!userNameRegex.test(userName)) {
        errorMessage.innerHTML = "Username can only contain letters, numbers, and underscores.";
        errorMessageContainer.style.backgroundColor = "#e25c3d";
        errorMessageContainer.style.top = "0";
        return false;
    }

    // check if password is at least 8 characters long
    if (password.length < 8) {
        errorMessage.innerHTML = "Password must be at least 8 characters long.";
        errorMessageContainer.style.backgroundColor = "#e25c3d";
        errorMessageContainer.style.top = "0";
        return false;
    }

    return true;
};

  // function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
        // submit the form
        errorMessage.innerHTML = "Welcome to the club!";
        errorMessageContainer.style.backgroundColor = "#00b894";
        errorMessageContainer.style.top = "0";

        firstNameInput.value = "";
        lastNameInput.value = "";
        emailInput.value = "";
        userNameInput.value = "";
        passwordInput.value = "";
    }
  };

submitButton.addEventListener("click", handleFormSubmit);

closeErrorMessageButton.addEventListener('click', () => {
    errorMessageContainer.style.top = "-100%";
});