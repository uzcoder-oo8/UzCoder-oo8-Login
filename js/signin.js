let form = document.getElementById("form");
let ism = document.getElementById("ism");
let parol = document.getElementById("password");
let ismrezalt = document.getElementById("ismrezalt");
let pasrezalt = document.getElementById("pasrezalt");
let rezalt = document.getElementById("rezalt");

function SignIp() {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let ismFn = evt.target[0].value;
    let pasFn = evt.target[1].value;

    if (
      localStorage.getItem("User") == ism ||
      localStorage.getItem("Password") == pasFn
    ) {
      window.open("https://www.olx.uz/");
    } else {
      setTimeout(() => {
        rezalt.textContent = "Malumotingiz xato";
      }, 0);
      setTimeout(() => {
        rezalt.textContent = "";
      }, 1000);
    }
    if (ismFn == "") {
      setTimeout(() => {
        ismrezalt.textContent = "Usernameni kiriting";
      }, 0);
      setTimeout(() => {
        ismrezalt.textContent = "";
      }, 1000);
    }

    if (pasFn == "") {
      setTimeout(() => {
        pasrezalt.textContent = "Parol kiriting ";
      }, 0);
      setTimeout(() => {
        pasrezalt.textContent = " ";
      }, 1000);
    }

    ism.value = "";
    parol.value = "";
  });
}
SignIp();
