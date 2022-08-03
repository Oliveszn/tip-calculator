"url strict";
//BUTTOMS
const fivePercent = document.querySelector("#five");
const tenPercent = document.querySelector("#ten");
const fifteenPercent = document.querySelector("#fifteen");
const twentyFivePercent = document.querySelector("#twentyfive");
const fiftyPercent = document.querySelector("#fifty");
const resetBtn = document.querySelector(".reset-btn");

//INPUTS
const people = document.querySelector(".inp-people");
const custom = document.querySelector("#custom");
const billReader = document.querySelector(".bill-reader");

//TEXTS
const tipTotal = document.querySelector(".tip-total");
const totalAmount = document.querySelector(".total-amount");

// let billValue = billReader.value;
// const customValue = custom.value;

//FUNCTIONS
const calcFivePercent = function () {
  return (tipTotal.textContent = `$${
    (billReader.value * (5 / 100)) / people.value
  }`);
};

const calcTenPercent = function () {
  return (tipTotal.textContent = `$${
    (billReader.value * (10 / 100)) / people.value
  }`);
};

const calcFifteenPercent = function () {
  return (tipTotal.textContent = `$${
    (billReader.value * (15 / 100)) / people.value
  }`);
};

const calcTwentyFivePercent = function () {
  return (tipTotal.textContent = `$${
    (billReader.value * (25 / 100)) / people.value
  }`);
};

const calcFiftyPercent = function () {
  return (tipTotal.textContent = `$${
    (billReader.value * (50 / 100)) / people.value
  }`);
};

const calcCustom = function () {
  return (tipTotal.textContent = `$${
    (billReader.value * (custom.value / 100)) / people.value
  }`);
};

const reset = function () {
  tipTotal.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  billReader.value = "";
  custom.value = "";
  people.value = 1;
};

const emptySet = function () {
  alert("empty");
};

//EVENT HANDLERS
fivePercent.addEventListener("click", function () {
  calcFivePercent();
  totalAmount.textContent = `$${billReader.value / people.value}`;
});

tenPercent.addEventListener("click", function () {
  calcTenPercent();
  totalAmount.textContent = `$${billReader.value / people.value}`;
});

fifteenPercent.addEventListener("click", function () {
  calcFifteenPercent();
  totalAmount.textContent = `$${billReader.value / people.value}`;
});

twentyFivePercent.addEventListener("click", function () {
  calcTwentyFivePercent();
  totalAmount.textContent = `$${billReader.value / people.value}`;
});

fiftyPercent.addEventListener("click", function () {
  calcFiftyPercent();
  totalAmount.textContent = `$${billReader.value / people.value}`;
});

custom.addEventListener("input", function () {
  calcCustom();
  totalAmount.textContent = `$${billReader.value / people.value}`;
});

resetBtn.addEventListener("click", function () {
  reset();
});
