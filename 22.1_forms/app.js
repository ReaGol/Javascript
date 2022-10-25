

const userName = document.querySelector("#client-name");
const age = document.querySelector("#client-age");
const email = document.querySelector("#client-mail");
const confirmMessage = document.querySelector("#confirm");
const submitContent = document.querySelector("input[value=Submit]");
const success = document.querySelector("#success");
success.style.display = "none";

submitContent.addEventListener("click", (e) => {
    e.preventDefault();
    window.confirm(confirmMessage.textContent = `Do you confirm your info: Name: ${userName.value}, Age:${age.value}, Email Address: ${email.value}`)
     
});


confirmMessage.addEventListener("click", () => {
  success.style.display = "block";
});
