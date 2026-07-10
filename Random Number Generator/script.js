const min = document.getElementById("min");
const max = document.getElementById("max");
const btnGenerate = document.getElementById("btn-generate");
const btnReset = document.getElementById("btn-reset");
const result = document.getElementById("result");

btnGenerate.addEventListener("click", () => {
  const minVal = parseInt(min.value);
  const maxVal = parseInt(max.value);

  if (isNaN(minVal) || isNaN(maxVal) || minVal > maxVal) {
    result.textContent = "Please enter valid minimum and maximum values.";
    return;
  }
  const randomNumber = Math.floor(
    Math.random() * (maxVal - minVal + 1) + minVal,
  );
  result.textContent = randomNumber;
});

btnReset.addEventListener("click", () => {
  min.value = 1;
  max.value = 100;
  result.textContent = "Click the button to generate";
});
