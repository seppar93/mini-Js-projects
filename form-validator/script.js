const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confrimPassword = document.getElementById("confirmPassword");

// Event Listners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(username.value);

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "email is required");
  } else if (!isValidEmail(email)) {
    showError(email, "email is not valid");

  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }

  if (confrimPassword.value === "") {
    showError(confrimPassword, "confrim Password ");
  } else {
    showSuccess(confrimPassword);
  }
});

// check password
function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
