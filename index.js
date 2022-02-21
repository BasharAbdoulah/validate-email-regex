let email = document.querySelector("#email");
let password = document.querySelector("#password");
let span = document.getElementsByTagName("span");
let signin = document.querySelector(".sign-in");

email.onkeydown = function () {
  let regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;

  let regexo =
    /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}\.[a-zA-Z]{1,3}$/;

  // Check at the Email value and response
  if (regex.test(email.value) || regexo.test(email.value)) {
    span[0].innerHTML = "Your email is valid";
    span[0].style.color = "#118111";
  } else {
    span[0].innerHTML = "Your email is Invalid";
    span[0].style.color = "red";
  }
};

// Check at the Password value and response
password.onkeydown = function () {
  let regexon = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regexon.test(password.value) || regexon.test(password.value)) {
    span[1].innerHTML = "Your password is valid";
    span[1].style.color = "#118111";
  } else {
    span[1].innerHTML = "Your password is Invalid";
    span[1].style.color = "red";
  }
};

// Check if inputs not empty
signin.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value === "") {
    span[0].innerHTML = "Email cant be empty";
  }
  if (password.value === "") {
    span[1].innerHTML = "Password cant be empty";
  }
});
