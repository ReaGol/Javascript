// player1Array.forEach(e=>{
    
//     if(!e.nextElementSibling.classList.contains('active')){
//         e.classList.add('active')

//     }
//     if(e.previousElementSibling.classList.contains('active')){

//         e.classList.remove('active')
//     }

const table = document.querySelector(".racer-table");
const td = document.querySelectorAll("td");

let active = document.querySelectorAll(".active");
let player1 = active[0];
let player2 = active[1];
console.log(td);

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    player1.classList.remove("active");
    player1.nextElementSibling.classList.add("active");
    active = document.querySelectorAll(".active");
    player1 = active[0];
    if (player1.classList.contains("finish")) {
      if (confirm("player 1 wins, restart game?")) {
        window.location.reload();
      }
    }
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "d") {
    player2.classList.remove("active");
    player2.nextElementSibling.classList.add("active");
    active = document.querySelectorAll(".active");
    player2 = active[1];
    if (player2.classList.contains("finish")) {
      if (confirm("player 2 wins, restart game?")) {
        window.location.reload();
      }
    }
  }
});