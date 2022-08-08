const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confrimPassword = document.getElementById("confirmPassword");

// Event Listners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequires([userName, email, password, confrimPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  isValidEmail(email.input);
  checkPasswordsMatch(password,confrimPassword)

  //   if (username.value === "") {
  //     showError(username, "Username is required");
  //   } else {
  //     showSuccess(username);
  //   }

  //   if (email.value === "") {
  //     showError(email, "email is required");
  //   } else if (!isValidEmail(email)) {
  //     showError(email, "email is not valid");

  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === "") {
  //     showError(password, "password is required");
  //   } else {
  //     showSuccess(password);
  //   }

  //   if (confrimPassword.value === "") {
  //     showError(confrimPassword, "confrim Password ");
  //   } else {
  //     showSuccess(confrimPassword);
  //   }
});

// check required fields
function checkReuqired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() == "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
function getFieldName(input) {
  if (input.id === "confirmPassword") {
    return "confirm password";
  }
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check password
function isValidEmail(email) {
  if (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    showSuccess(email);
  } else {
    showError(email, "email is not rather");
  }
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

// check input length

function checkLength(input, min, max) {
  if (input.value.legnth < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "passwords do not match")
    }
}