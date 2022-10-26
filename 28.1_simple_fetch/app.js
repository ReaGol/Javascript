const button = document.querySelector("button");
const body = document.querySelector("body");
button.addEventListener("click", (data) => {
    console.log("clicked")

});
let jokeTitle = document.querySelector('h1')
let joke = document.querySelector('p');

fetch("https://api.jokes.one/jod")
    .then((data) => {
        console.log("resolved");
        return data.json();
    })
    .then((data) => {
        console.log(data);
        joke.textContent = content.jokes[0].joke.text;
        jokeTitle.textContent = content.jokes[0].joke.title;
    })
    .catch((e) => {
        console.log("error!");
    });

