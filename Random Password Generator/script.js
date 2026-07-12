const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIAL = "!@#$%^&*()-_=+[]{}|;:,.<>?";

const genPass = (len, upper, nums, special) => {
  let chars = "";
  chars += LOWER;
  if (upper) chars += UPPER;
  if (nums) chars += NUMBERS;
  if (special) chars += SPECIAL;

  let pass = "";
  for (let i = 0; i < len; i++) {
    const randIdx = Math.floor(Math.random() * chars.length);
    pass += chars[randIdx];
  }
  return pass;
};

const generate = () => {
  const len = parseInt(document.getElementById("len").value);
  const upper = document.getElementById("upper").checked;
  const nums = document.getElementById("nums").checked;
  const special = document.getElementById("special").checked;

  const pass = genPass(len, upper, nums, special);
  document.getElementById("password").textContent = pass;
};

const reset = () => {
  document.getElementById("len").value = 12;
  document.getElementById("upper").checked = true;
  document.getElementById("nums").checked = true;
  document.getElementById("special").checked = true;
  document.getElementById("password").textContent =
    "Your password will appear here";
};

const btnGenerate = document.getElementById("generate");
const btnReset = document.getElementById("reset");

btnGenerate.addEventListener("click", generate);
btnReset.addEventListener("click", reset);
