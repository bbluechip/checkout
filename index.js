//* Variables
const vintagePlus = document.querySelector(".vintage-plus");
const vintageMinus = document.querySelector(".vintage-minus");
const vintageAmount = document.querySelector(".vintage-amount");
const vintageRemove = document.querySelector(".vintage-remove");
const vintageTotal = document.querySelector(".vintage-total");
const leviPlus = document.querySelector(".levi-plus");
const leviMinus = document.querySelector(".levi-minus");
const leviAmount = document.querySelector(".levi-amount");
const leviRemove = document.querySelector(".levi-remove");
const leviTotal = document.querySelector(".levi-total");
const clockPlus = document.querySelector(".clock-plus");
const clockMinus = document.querySelector(".clock-minus");
const clockAmount = document.querySelector(".clock-amount");
const clockRemove = document.querySelector(".clock-remove");
const clockTotal = document.querySelector(".clock-total");
const total = document.querySelector(".total");
const allTotal = document.querySelector(".all-total");

//* Vintage Backbag

vintagePlus.addEventListener("click", function () {
  vintageAmount.innerText++;
  vintageTotal.innerText = `Product Total = $${(
    +vintageAmount.innerText * 25.98
  ).toFixed(2)}`;
  total.innerText = `$${(+total.innerText.substring(1) + 25.98).toFixed(2)}`;
  allTotal.innerText = `$${(15.0 + +total.innerText.substring(1)).toFixed(2)}`;
});

vintageMinus.addEventListener("click", function () {
  if (+vintageAmount.innerText > 1) {
    vintageAmount.innerText--;
    total.innerText = `$${(+total.innerText.substring(1) - 25.98).toFixed(2)}`;
    allTotal.innerText = `$${(15.0 + +total.innerText.substring(1)).toFixed(
      2
    )}`;
  }

  vintageTotal.innerText = `Product Total = $${(
    +vintageAmount.innerText * 25.98
  ).toFixed(2)}`;
});
vintageRemove.addEventListener("click", function () {
  document.querySelectorAll(".first").forEach((i) => i.classList.add("vanish"));
  total.innerText = `$${(
    +total.innerText.substring(1) -
    +vintageAmount.innerText * 25.98
  ).toFixed(2)}`;
  allTotal.innerText = `$${(
    +allTotal.innerText.substring(1) -
    +vintageAmount.innerText * 25.98
  ).toFixed(2)}`;
});

//* Levi Shoes
leviPlus.addEventListener("click", function () {
  leviAmount.innerText++;
  leviTotal.innerText = `Product Total = $${(
    +leviAmount.innerText * 45.99
  ).toFixed(2)}`;
  total.innerText = `$${(+total.innerText.substring(1) + 45.99).toFixed(2)}`;
  allTotal.innerText = `$${(15.0 + +total.innerText.substring(1)).toFixed(2)}`;
});

leviMinus.addEventListener("click", function () {
  if (+leviAmount.innerText > 1) {
    leviAmount.innerText--;
    total.innerText = `$${(+total.innerText.substring(1) - 45.99).toFixed(2)}`;
    allTotal.innerText = `$${(15.0 + +total.innerText.substring(1)).toFixed(
      2
    )}`;
  }

  leviTotal.innerText = `Product Total = $${(
    +leviAmount.innerText * 45.99
  ).toFixed(2)}`;
});
leviRemove.addEventListener("click", function () {
  document
    .querySelectorAll(".second")
    .forEach((i) => i.classList.add("vanish"));
  total.innerText = `$${(
    +total.innerText.substring(1) -
    +leviAmount.innerText * 45.99
  ).toFixed(2)}`;
  allTotal.innerText = `$${(
    +allTotal.innerText.substring(1) -
    +leviAmount.innerText * 45.99
  ).toFixed(2)}`;
});

//* Antique Clock
clockPlus.addEventListener("click", function () {
  clockAmount.innerText++;
  clockTotal.innerText = `Product Total = $${(
    +clockAmount.innerText * 74.99
  ).toFixed(2)}`;
  total.innerText = `$${(+total.innerText.substring(1) + 74.99).toFixed(2)}`;
  allTotal.innerText = `$${(15.0 + +total.innerText.substring(1)).toFixed(2)}`;
});

clockMinus.addEventListener("click", function () {
  if (+clockAmount.innerText > 1) {
    clockAmount.innerText--;
    total.innerText = `$${(+total.innerText.substring(1) - 74.99).toFixed(2)}`;
    allTotal.innerText = `$${(15.0 + +total.innerText.substring(1)).toFixed(
      2
    )}`;
  }

  clockTotal.innerText = `Product Total = $${(
    +clockAmount.innerText * 74.99
  ).toFixed(2)}`;
});
clockRemove.addEventListener("click", function () {
  document.querySelectorAll(".third").forEach((i) => i.classList.add("vanish"));
  total.innerText = `$${(
    +total.innerText.substring(1) -
    +clockAmount.innerText * 74.99
  ).toFixed(2)}`;
  allTotal.innerText = `$${(
    +allTotal.innerText.substring(1) -
    +clockAmount.innerText * 74.99
  ).toFixed(2)}`;
});
