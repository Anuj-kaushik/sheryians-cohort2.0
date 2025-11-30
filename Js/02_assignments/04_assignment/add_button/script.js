let h5 = document.querySelector("h5");
let btn = document.querySelector("#btn");

let flag = 0;

btn.addEventListener("click", () => {
  if (flag === 0) {
    h5.textContent = "Friend";
    h5.style.color = "green";
    btn.textContent = "Remove Friend";
    btn.classList.remove("add");
    btn.classList.add("remove");
    flag = 1;
  } else {
    h5.textContent = "Stranger";
    h5.style.color = "crimson";
    btn.textContent = "Add Friend";
    btn.classList.remove("remove");
    btn.classList.add("add");

    flag = 0;
  }
});
