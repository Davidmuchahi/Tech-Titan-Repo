# Tech-Titan-Repo Assignment Presentation

# Login Form Validation
The assignment was to Create a form with validation and feedback messages for users.
Use focus, blur, and submit events to validate form input and provide feedback to users in real-time.
This was how we as a group approached the assignment.
We Defined The functionioning of the form as defined below.

##Form Validation
The form includes validation and feedback messages for the following it requires a valid email address a password which is set to 
ba atleast six characters the confirm password field this input should be similar to the first password 
The validateForm() function is called when the form is submitted, and it checks if all input fields are valid. If any field is invalid, it sets the isValid variable to false and returns it.

### Event Listeners
Event listeners were added to the form and input fields to handle focus, blur, and submit events.Their functionality is explain below note
only three event listners where used 

#### (A)form.addEventListener('submit', ...) - This event listener is attached to the form element and is triggered when the form is submitted. It prevents the default form submission behavior and calls the validateForm() function.

#### (B) emailInput.addEventListener('blur', validateEmail) - This event listener is attached to the email input element and is triggered when the user leaves the input field (i.e., when the input field loses focus). It calls the validateEmail() function to validate the email input.

%%The rest are similar to the above though are still add them just incase we are required to explain%%

#### (c) passwordInput.addEventListener('blur', validatePassword) - This event listener is attached to the password input element and is triggered when the user leaves the input field. It calls the validatePassword() function to validate the password input.

#### (D) confirmPasswordInput.addEventListener('blur', validateConfirmPassword) - This event listener is attached to the confirm password input element and is triggered when the user leaves the input field. It calls the validateConfirmPassword() function to validate the confirm password input.

### The styling of the Form
A member had already come up with the styling based on a previous project which the group agreed to implement on the project the styles use are safe explanatory

### In The script.js the Validation Functions are Five:
The validateForm(),validateEmail(),validatePassword(),validateConfirmPassword() and the anonymous function passed to the form.addEventListener('submit', ...) event listener.

in summary The validateForm() function checks if all input fields are valid, while the other three functions validate the email, password, and confirm password inputs, respectively.

while the anonymous function passed to the form.addEventListener('submit', ...) event listener is called when the form is submitted, and it prevents the default form submission behavior and calls the validateForm() function.

The anonymous function passed to the form.addEventListener('submit', ...) event listener.

### The Error messages.
Error messages are displayed using the textContent property of HTML elements with the IDs email-error, password-error, and confirm-password-error. These error messages are cleared when the input is valid.
  ### Stay Dangerous


