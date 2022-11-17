const githubURL = `https://api.github.com/users/`;
const userName = document.querySelector("input");
const searchBTN = document.querySelector("button");
const errorMessage = document.querySelector(".errorMessage");
const container = document.querySelector(".container");
const users = {};

function createUserCard({ photo, repos, name }) {
  let card = document.createElement("div");
  let h2 = document.createElement("h2");
  let a = document.createElement("a");
  let p = document.createElement("p");
  p.textContent = repos;
  a.textContent = name;
  a.href = `http://github.com/${name}`;
  a.target = `blank`;
  let img = document.createElement("img");
  container.appendChild(card);
  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(p);
  h2.appendChild(a);
  img.src = photo;
  img.style.height = "100px";
  img.style.width = "100px";
}

async function getUser() {
  console.log(userName);
  errorMessage.textContent = "";
  try {
    const res = await fetch(`${githubURL}${userName.value}`);
    const data = await res.json();
    console.log(res);
    if (!res.ok) {
      throw Error();
    } else {
      return {
        name: data.name,
        photo: data.avatar_url,
        repos: data.public_repos,
      };
    }
  } catch (e) {
    console.log("IN CATCH!", e);
  }
}

const addEvents = () => {
  searchBTN.addEventListener("click", async (event) => {
    event.preventDefault();
    const user = await getUser();
    users[userName.value] = user;
    createUserCard(user);
  });
  // userName.addEventListener("keyup", (e) => {
  //     if((e.key = 'Enter'))
  // });
  console.log(userName);
};
addEvents();
