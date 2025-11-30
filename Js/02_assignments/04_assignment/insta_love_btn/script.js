let card = document.querySelector("#card");
let icon = document.querySelector("i");

card.addEventListener("dblclick", () => {
  icon.style.transform = "translate(-50%,-50%) scale(1)";
  setTimeout(() => {
    icon.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1000);
});
