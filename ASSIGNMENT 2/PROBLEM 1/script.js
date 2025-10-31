function validateForm() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message");

  // Clear message
  message.textContent = "";

  // Empty field check
  if (!username || !email || !phone || !password || !confirmPassword) {
    message.textContent = "All fields are required!";
    return false;
  }

  // Phone number validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    message.textContent = "Phone number must be 10 digits and numeric only!";
    return false;
  }

  // Email validation using regex
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z]{3}\.[A-Za-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    message.textContent = "Invalid email format!";
    return false;
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/;
  if (!passwordRegex.test(password)) {
    message.textContent =
      "Password must be at least 7 characters, include one capital letter, one digit, and one special character (&,$,#,@)";
    return false;
  }

  // Confirm password match
  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    return false;
  }

  // Success message
  message.style.color = "green";
  message.textContent = "Registration successful!";
  return false; // Prevent actual form submission for demo
}
