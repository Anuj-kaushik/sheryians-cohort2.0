let incBtn = document.querySelector("#inc");
let decBtn = document.querySelector("#dec");
let h1 = document.querySelector("h1");

let count = 0;

incBtn.addEventListener("click", () => {
  count++;
  h1.textContent = count;
  if (count >= 0) h1.style.color = "white";
});
decBtn.addEventListener("click", () => {
  count--;
  h1.textContent = count;
  if (count < 0) h1.style.color = "crimson";
});
