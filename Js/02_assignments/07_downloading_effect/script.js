let h3 = document.querySelector("h3");
let progressBar = document.querySelector("#inner");
let btn = document.querySelector("button");

let count = 0;
let second = 0;

second = (Math.random() * 25).toFixed(2);

btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none";
  btn.style.opacity = 0.6;
  btn.textContent = "Downloading";
  console.log(`Your downloading will be complete in ${second} seconds`);

  let intr = setInterval(() => {
    count++;
    console.log(count);
    h3.textContent = count + "%";
    progressBar.style.width = count + "%";
  }, (second * 1000) / 100);

  setTimeout(() => {
    clearInterval(intr);
    console.log("Downloading Completed!!");
    btn.textContent = "Downloaded";
  }, second * 1000);
});

/* 

second = 1
1*1000 --> 1000
second * 1000 ----> 1000 * 100
second * 1000/100 ---> 10*100

*/
