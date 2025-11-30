let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag === 0) {
    bulb.style.backgroundColor = "yellow";
    console.log("click");
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    console.log("clicked again");
    flag = 0;
  }
});
