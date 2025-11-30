let button = document.querySelector("button");
let container = document.querySelector("#container");

button.addEventListener("click", () => {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  container.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
  container.textContent = `rgb(${c1}, ${c2}, ${c3})`;
});
