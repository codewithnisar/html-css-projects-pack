// DOM Elements
const loginToggle = document.getElementById("loginToggle");
const signupToggle = document.getElementById("signupToggle");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");
const switchToSignup = document.getElementById("switchToSignup");
const switchToLogin = document.getElementById("switchToLogin");
const loginPasswordToggle = document.getElementById("loginPasswordToggle");
const signupPasswordToggle = document.getElementById("signupPasswordToggle");
const loginPassword = document.getElementById("loginPassword");
const signupPassword = document.getElementById("signupPassword");

// Toggle between login and signup forms
function showLoginForm() {
  loginToggle.classList.add("active");
  signupToggle.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  formTitle.textContent = "Sign In";
  formSubtitle.textContent = "Enter your credentials to access your account";
}

function showSignupForm() {
  loginToggle.classList.remove("active");
  signupToggle.classList.add("active");
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
  formTitle.textContent = "Create Account";
  formSubtitle.textContent = "Join our platform to get started";
}

// Event listeners for toggles
loginToggle.addEventListener("click", showLoginForm);
signupToggle.addEventListener("click", showSignupForm);
switchToSignup.addEventListener("click", function (e) {
  e.preventDefault();
  showSignupForm();
});
switchToLogin.addEventListener("click", function (e) {
  e.preventDefault();
  showLoginForm();
});

// Password toggle functionality
function togglePasswordVisibility(passwordField, toggleButton) {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  toggleButton.innerHTML =
    type === "password"
      ? '<i class="fas fa-eye"></i>'
      : '<i class="fas fa-eye-slash"></i>';
}

loginPasswordToggle.addEventListener("click", function () {
  togglePasswordVisibility(loginPassword, loginPasswordToggle);
});

signupPasswordToggle.addEventListener("click", function () {
  togglePasswordVisibility(signupPassword, signupPasswordToggle);
});

// Form submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  // Basic validation
  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  // Simulate API call
  const submitBtn = this.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Signing In...";
  submitBtn.disabled = true;

  setTimeout(() => {
    alert(
      `Login successful!\nEmail: ${email}\nRemember me: ${
        rememberMe ? "Yes" : "No"
      }`
    );
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Clear form
    this.reset();
  }, 1500);
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const termsAgree = document.getElementById("termsAgree").checked;

  // Validation
  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (!termsAgree) {
    alert("You must agree to the terms and conditions");
    return;
  }

  // Simulate API call
  const submitBtn = this.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Creating Account...";
  submitBtn.disabled = true;

  setTimeout(() => {
    alert(
      `Account created successfully!\nName: ${name}\nEmail: ${email}\n\nWelcome to our platform!`
    );
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Clear form and switch to login
    this.reset();
    showLoginForm();
  }, 1500);
});

// Social login buttons
document.querySelectorAll(".social-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const platform = this.classList.contains("google")
      ? "Google"
      : this.classList.contains("facebook")
      ? "Facebook"
      : "Twitter";

    alert(`Redirecting to ${platform} authentication...`);
  });
});

// Forgot password link
document.querySelector(".forgot-link").addEventListener("click", function (e) {
  e.preventDefault();
  const email = prompt("Please enter your email to reset password:");
  if (email) {
    alert(`Password reset link sent to ${email}. Please check your inbox.`);
  }
});

// Initialize floating labels
document.querySelectorAll(".form-control").forEach((input) => {
  // Check if input has value on page load (for browser autofill)
  if (input.value) {
    input.dispatchEvent(new Event("input"));
  }

  // Add event listeners for real-time validation
  input.addEventListener("input", function () {
    const label = this.nextElementSibling;
    if (this.value) {
      label.classList.add("has-value");
    } else {
      label.classList.remove("has-value");
    }
  });
});

// Add some floating animation to decorative circles
function animateCircles() {
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle, index) => {
    // Random initial position
    const randomX = Math.random() * 20 - 10;
    const randomY = Math.random() * 20 - 10;

    // Animate with slight floating effect
    circle.animate(
      [
        { transform: `translate(${randomX}px, ${randomY}px)` },
        { transform: `translate(${-randomX}px, ${-randomY}px)` },
        { transform: `translate(${randomX}px, ${randomY}px)` },
      ],
      {
        duration: 8000 + index * 2000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  });
}

// Start animations when page loads
window.addEventListener("load", animateCircles);
