const btnCheck = document.getElementById("btn-check");
const numInput = document.getElementById("num");
const result = document.getElementById("result");

let checkPrime = () => {
  const num = parseInt(numInput.value);
  if (isNaN(num) || num <= 1) {
    result.textContent = "Please enter a number greater than 1";
    result.style.color = "red";
    return;
  }
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  result.textContent = isPrime
    ? `${num} is a Prime Number`
    : `${num} is not a Prime Number`;
  result.style.color = isPrime ? "green" : "blue";
};

btnCheck.addEventListener("click", checkPrime);
