let customCursor = document.querySelector("#customCursor");
let main = document.querySelector("main");

window.addEventListener("mousemove", (evt) => {
  customCursor.style.top = evt.y + "px";
  customCursor.style.left = evt.x + "px";

});
