const button = document.querySelector("button");
const body = document.querySelector("body");
button.addEventListener("click", fetchJoke)
let jokeTitle = document.querySelector("h1");
let joke = document.querySelector("p");

function fetchJoke() {
  fetch("https://api.jokes.one/jod")
    .then((data) => {
      console.log("resolved");
      return data.json();
    })
    .then((data) => {
      console.log(data);
      jokeTitle.textContent = data.contents.jokes[0].joke.title;
      joke.textContent = data.contents.jokes[0].joke.text;
    })
    .catch((e) => {
      console.log("error!");
    });
}
