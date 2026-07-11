const emailForm = document.getElementById("email-form");
emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const msg = document.getElementById("message");

  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (pattern.test(email)) {
    msg.textContent = "Email is valid! Form Submitted.";
    msg.style.color = "green";
    document.getElementById("email-form").reset();
  } else {
    msg.textContent = "Please enter a valid email address.";
    msg.style.display = "block";
    msg.style.color = "red";
  }
});
