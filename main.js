import "./style.css";
// u index.html dodati 1h1 sa 2span elementa
// u prvom span elementu neka pise current counter is:
// a u drugom spanu neka bude 0
// dodaj dva button
// u prvom buttonu neka pise increment count
// u drugom neka pise decrement count

// u script.js :
// counter treba da  se povecava i smanjuje klikom na buttone increment count i decrement count
// ako counter dodje do 10  ne moze se vise incrementovati i body dobije bc zeleni
// ako counter dodje do 0 ne moze se vise decrementovati i body dobije bc crveni
// prilikom svakog increment ili decrement u h1 prikazujemo trenutni broj counter

const btnIncrEl = document.querySelector(".btn-incr");
const btnDcrEl = document.querySelector(".btn-dcr");

console.log(btnIncrEl, btnDcrEl);

let number = 0;
let numberEl = document.querySelector(".digit").textContent;
console.log(number);

btnIncrEl.addEventListener("click", function () {
  ++number;
  console.log(number);
  document.querySelector(".digit").textContent = number;

  // if (number > 10) {
  //   btnIncrEl.removeEventListener();
  // }
});

btnDcrEl.addEventListener("click", function () {
  --number;
  console.log(number);
  document.querySelector(".digit").textContent = number;
});
