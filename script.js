
const form = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // You can also submit the form using AJAX or other methods here
    }
  });

  emailInput.addEventListener('blur', validateEmail);
  passwordInput.addEventListener('blur', validatePassword);
  confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

  function validateForm() {
    let isValid = true;
    if (!validateEmail()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;
    return isValid;
  }

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
      emailError.textContent = 'Email is required.';
      return false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = 'Invalid email format.';
      return false;
    }
    emailError.textContent = '';
    return true;
  }

  function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    const passwordError = document.getElementById('password-error');
    if (passwordValue === '') {
      passwordError.textContent = 'Password is required.';
      return false;
    } else if (passwordValue.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters long.';
      return false;
    }
    passwordError.textContent = '';
    return true;
  }

  function validateConfirmPassword() {
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (confirmPasswordValue === '') {
      confirmPasswordError.textContent = 'Confirm Password is required.';
      return false;
    } else if (confirmPasswordValue !== passwordInput.value.trim()) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      return false;
    }
    confirmPasswordError.textContent = '';
    return true;
  }
