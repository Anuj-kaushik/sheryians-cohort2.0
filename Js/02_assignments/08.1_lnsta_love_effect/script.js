let like = document.querySelector("#love");
let imgContainer = document.querySelector("#imgContainer");

imgContainer.addEventListener("dblclick", () => {
  console.log("hello");

  like.style.transform = "translate(-50%, -50%) scale(2) rotate(0deg)";
  setTimeout(() => {
    like.style.top = -20 + "%";
    like.style.transform = "translate(-50%, -50%) scale(2) rotate(60deg)";
  }, 1000);
  setTimeout(() => {
    like.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
  }, 1100);
  setTimeout(() => {
    like.style.top = 50 + "%";
  }, 2000);
});
