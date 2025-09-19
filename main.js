// ===============================
// Part 1: Event Handling Example
// ===============================
const toggleBtn = document.getElementById("toggleMsgBtn");
const msg = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  msg.style.display = msg.style.display === "none" ? "block" : "none";
});

// ===============================
// Part 2: Interactive Features
// ===============================
// Light/Dark Mode
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const countSpan = document.getElementById("count");
let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) count--;
  countSpan.textContent = count;
});

// ===============================
// Part 3: Form Validation
// ===============================
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMsg = document.getElementById("successMsg");

function showError(input, msg) {
  document.getElementById(input.id + "Error").textContent = msg;
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting
  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required.");
    valid = false;
  } else {
    showError(nameInput, "");
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, "Enter a valid email.");
    valid = false;
  } else {
    showError(emailInput, "");
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters.");
    valid = false;
  } else {
    showError(passwordInput, "");
  }

  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
  }
});
