let elem = document.querySelectorAll(".elem");

elem.forEach((item) => {
  let img = item.querySelector("img");

  item.addEventListener("mouseenter", () => {
    img.style.opacity = "1";
  });

  item.addEventListener("mouseleave", () => {
    img.style.opacity = "0";
  });

  item.addEventListener("mousemove", (evt) => {
    img.style.left = evt.offsetX + "px";
    img.style.top = evt.offsetY + "px";
  });
});
