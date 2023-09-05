//Create Real-Time Form Validation for contact.html

let formValidation = (() => {
  //Create variables for the form and inputs
  let form = document.querySelector(".contact-main-section__form");
  let firstNameInput = document.querySelector("#firstName");
  let lastNameInput = document.querySelector("#lastName");
  let emailInput = document.querySelector("#emailAddress");

  //Create function to append/remove error message
  function showErrorMessage(input, message) {
    let container = input.parentElement; // The parent <div> of inputs

    // Check and Remove any existing errors
    let error = container.querySelector(".error-message");
    if (error) {
      container.removeChild(error);
    }

    // Now add the error if the message isn’t empty
    if (message) {
      let error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      container.appendChild(error);
    }
  }

  //Create function for validation of the first name
  function validateFirstName() {
    let value = firstNameInput.value;

    if (!value) {
      showErrorMessage(firstNameInput, "First name is a required field.");
      return false;
    }

    showErrorMessage(firstNameInput, null);
    return true;
  }

  //Create function for validation of the last name
  function validateLastName() {
    let value = lastNameInput.value;

    if (!value) {
      showErrorMessage(lastNameInput, "Last name is a required field.");
      return false;
    }

    showErrorMessage(lastNameInput, null);
    return true;
  }

  //Create function for validation of the email address
  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, "Email is a required field.");
      return false;
    }

    if (value.indexOf("@") === -1) {
      showErrorMessage(emailInput, "You must enter a valid email address.");
      return false;
    }

    if (value.indexOf(".") === -1) {
      showErrorMessage(emailInput, "You must enter a valid email address.");
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  //Create function for validation of the form
  function validateForm() {
    let isValidFirstName = validateFirstName();
    let isValidLastName = validateLastName();
    let isValidEmail = validateEmail();

    return isValidFirstName && isValidLastName && isValidEmail;
  }

  //Add eventListener to the form
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert("Success!");
    }
  });
})();
