document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('rForm');
  const successContainer = document.getElementById('success-container');
  const formContainer = document.getElementById('form-container');
  const goBackBtn = document.getElementById('goBackBtn');
  const submitButton = document.getElementById('subbtn');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  const nameError = document.getElementById('nameerror');
  const emailError = document.getElementById('emailerror');
  const passwordError = document.getElementById('passworderror');

  // Regular expression for validating email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to validate the form fields
  function validateForm() {
      let isValid = true;

      // Name validation (should not be empty)
      if (nameInput.value.trim() === "") {
          nameError.textContent = "Name cannot be empty";
          isValid = false;
      } else {
          nameError.textContent = "";
      }

      // Email validation (using regex)
      if (!emailPattern.test(emailInput.value)) {
          emailError.textContent = "Please enter a valid email";
          isValid = false;
      } else {
          emailError.textContent = "";
      }

      // Password validation (at least 6 characters)
      if (passwordInput.value.length < 6) {
          passwordError.textContent = "Password must be at least 6 characters";
          isValid = false;
      } else {
          passwordError.textContent = "";
      }

      // Enable or disable the submit button based on validation
      submitButton.disabled = !isValid;
  }

  // Attach input event listeners to validate the form on the fly
  nameInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);
  passwordInput.addEventListener('input', validateForm);

  // Handle form submission
  form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("Congrats! You have been registered successfully.")
      formContainer.style.display = 'none';
      successContainer.style.display = 'block';
  });

  // Handle "Go Back" button click
  goBackBtn.addEventListener('click', function () {
      successContainer.style.display = 'none';
      formContainer.style.display = 'block';
      form.reset(); // Reset the form fields
      submitButton.disabled = true; // Disable submit button again
  });
});