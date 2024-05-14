let form = document.getElementById("form");
let familya = document.getElementById("familya");
let ism = document.getElementById("ism");
let email = document.getElementById("email");
let parol = document.getElementById("password");
let famrezalt = document.getElementById("famrezalt");
let ismrezalt = document.getElementById("ismrezalt");
let emailrezalt = document.getElementById("emailrezalt");
let pasrezalt = document.getElementById("pasrezalt");

function SignUp() {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let famFn = evt.target[0].value;
    let ismFn = evt.target[1].value;
    let emailFn = evt.target[2].value;
    let pasFn = evt.target[3].value;

    if (famFn == "" || ismFn == "" || emailFn == "" || pasFn == "") {
    } else {
      localStorage.setItem("Familya", famFn);
      localStorage.setItem("User", ismFn);
      localStorage.setItem("Email", emailFn);
      localStorage.setItem("Password", pasFn);
      window.open("https://www.olx.uz/");
    }

    if (famFn == "") {
      setTimeout(() => {
        famrezalt.textContent = "Familyangizni kiritng";
      }, 0);
      setTimeout(() => {
        famrezalt.textContent = "";
      }, 1000);
    }

    if (ismFn == "") {
      setTimeout(() => {
        ismrezalt.textContent = "Ismingizni kiriting kiritng";
      }, 0);
      setTimeout(() => {
        ismrezalt.textContent = "";
      }, 1000);
    }

    if (emailFn == "") {
      setTimeout(() => {
        emailrezalt.textContent = "Emailingzni kiritng";
      }, 0);
      setTimeout(() => {
        emailrezalt.textContent = "";
      }, 1000);
    }

    if (pasFn == "") {
      setTimeout(() => {
        pasrezalt.textContent = "Parolni kiritng";
      }, 0);
      setTimeout(() => {
        pasrezalt.textContent = "";
      }, 1000);
    }

    familya.value = "";
    ism.value = "";
    email.value = "";
    parol.value = "";
  });
}
SignUp();
