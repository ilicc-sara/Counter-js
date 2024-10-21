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
const maxValue = 10;
const minValue = 0;

const incr = btnIncrEl.addEventListener("click", function () {
  // for (let i = 0; i <= maxValue; ++i) {
  //   number = [i];
  // }
  // document.querySelector(".digit").textContent = number;
  // document.querySelector(".digit").value = number;
  ++number;
  document.querySelector(".digit").textContent = number;
  document.querySelector(".digit").value = number;

  if (number >= maxValue) {
    document.querySelector("body").style.backgroundColor = "green";
  } else if (number < maxValue) {
    document.querySelector("body").style.backgroundColor = " rgb(35, 35, 35)";
  }
});

if (number === maxValue) {
  btnIncrEl.removeEventListener();
}

const dcr = btnDcrEl.addEventListener("click", function () {
  --number;
  document.querySelector(".digit").textContent = number;
  document.querySelector(".digit").value = number;

  if (number <= minValue) {
    document.querySelector("body").style.backgroundColor = "red";
  } else if (number > minValue) {
    document.querySelector("body").style.backgroundColor = " rgb(35, 35, 35)";
  }
});
