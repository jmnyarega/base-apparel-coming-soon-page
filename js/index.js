// javascript code
const error = document.getElementById("error");
const errorMsg = document.getElementById("error-msg");

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showErrors(error, errorMsg) {
  error.style.display = "inline-block";
  errorMsg.style.display = "block";
  throw "Email is required.";
}

function clearErrors(error, errorMsg) {
  error.style.display = "none";
  errorMsg.style.display = "none";
}

function validate(evt) {
  evt.preventDefault();
  const email = document.getElementById("email").value;
  console.log(emailIsValid(email));
  !email.trim() || !emailIsValid(email)
    ? showErrors(error, errorMsg)
    : clearErrors(error, errorMsg);
}

document.getElementById("buttonform").onclick = validate;
