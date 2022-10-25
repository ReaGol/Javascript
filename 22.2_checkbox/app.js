
const userName = document.querySelector("#client-name");
const age = document.querySelector("#client-age");
const terms = document.querySelector("#agree");
const confirmMessage = document.querySelector("#confirm");
const submitContent = document.querySelector("#btn");


const formData = {};
for (let input of [userName, age, terms]) {
  input.addEventListener("input", ({ target }) => {
    const {name, type, value, checked} = target;
    formData[name] = type === 'checkbox' ? checked : value;
  });
}
