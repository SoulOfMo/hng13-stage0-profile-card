const form = document.getElementById("contactForm");
const successMessage = document.querySelector(
  "[data-testid='test-contact-success']"
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMessage.textContent = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  let isValid = true;

  const showError = (field, message) => {
    const errorEl = document.querySelector(`#error-${field}`);
    errorEl.textContent = message;
    isValid = false;
  };

  const clearError = (field) => {
    const errorEl = document.querySelector(`#error-${field}`);
    errorEl.textContent = "";
  };

  // Validation
  if (!name) showError("name", "Full name is required.");
  else clearError("name");

  if (!email) showError("email", "Email is required.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    showError("email", "Enter a valid email address.");
  else clearError("email");

  if (!subject) showError("subject", "Subject is required.");
  else clearError("subject");

  if (!message) showError("message", "Message is required.");
  else if (message.length < 10)
    showError("message", "Message must be at least 10 characters.");
  else clearError("message");

  // Success
  if (isValid) {
    successMessage.textContent = "✅ Message sent successfully!";
    form.reset();
  }
});
