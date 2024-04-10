# Tech-Titan-Repo

# Login Form Validation
The assignment was to Create a form with validation and feedback messages for users.
Use focus, blur, and submit events to validate form input and provide feedback to users in real-time.
This was how we as a group approached the assignment.
We Defined The functionioning of the form as defined below.
# #Form Validation
The form includes validation and feedback messages for the following it requires a valid email address a password which is set to 
ba atleast six characters the confirm password field this input should be similar to the first password 
The validateForm() function is called when the form is submitted, and it checks if all input fields are valid. If any field is invalid, it sets the isValid variable to false and returns it.
### Event Listeners
Event listeners were added to the form and input fields to handle focus, blur, and submit events. When the user focuses on an input field, the corresponding validation function is called. When the user blurs (leaves) an input field, the corresponding validation function is called again to check if the input is valid. When the form is submitted, the validateForm() function is called to check if all input fields are valid.
### The styling of the Form
A member had already come up with the styling based on a previous project which the group agreed to implement on the project the styles use are safe explanatory
### In The script.js the Validation Functions are three Function:
validateEmail(), validatePassword(), and validateConfirmPassword(). These functions check if the input is valid and set error messages if the input is invalid.
### The Error messages.
Error messages are displayed using the textContent property of HTML elements with the IDs email-error, password-error, and confirm-password-error. These error messages are cleared when the input is valid.
  ### Stay Dangerous


