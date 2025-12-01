const quotes = [
  "The quiet moments often speak the loudest truths.",
  "Courage begins where comfort ends.",
  "Small steps become big journeys when taken consistently.",
  "You can restart your story any day you choose.",
  "Dreams grow when watered with discipline.",
  "Kindness is a language that never goes out of style.",
  "Storms pass, but the lessons they leave shape the sky.",
  "Confidence is built, not born.",
  "Even the tallest tree started as a seed choosing to grow.",
  "Happiness blooms where gratitude is planted.",
];
let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let getRandomValue = Math.floor(Math.random() * quotes.length);
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let scl = Math.random() * 3;
  let rot = Math.random() * 360;

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let createPara = document.createElement("p");
  createPara.textContent = quotes[getRandomValue];
  createPara.style.position = "absolute";
  createPara.style.top = y + "%";
  createPara.style.left = x + "%";
  createPara.style.scale = scl;
  createPara.style.rotate = rot + "deg";
  createPara.style.color = `rgb(${c1}, ${c2}, ${c3})`;

  createPara.style.color = createPara.style.scale = main.append(createPara);
});
