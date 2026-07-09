let count = 0;
let btnIncrement = document.querySelector(".btn-increment");
let btnDecrement = document.querySelector(".btn-decrement");
let btnReset = document.querySelector(".btn-reset");
let value = document.querySelector(".counter-value");

const updateCounter = () => (value.textContent = count);

btnIncrement.addEventListener("click", () => {
  count++;
  updateCounter();
});

btnDecrement.addEventListener("click", () => {
  count = count > 0 ? count - 1 : 0;
  updateCounter();
});

btnReset.addEventListener("click", () => {
  count = 0;
  updateCounter();
});
