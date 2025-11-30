const iplTeams = [
  {
    team: "MI",
    fullName: "Mumbai Indians",
    primaryColor: "#004B8D",
    secondaryColor: "#FFD141",
    trophies: 5, // as per Wikipedia :contentReference[oaicite:0]{index=0}
    captain: "Hardik Pandya", // IPL 2025 captain :contentReference[oaicite:1]{index=1}
    logo: "https://logowik.com/content/uploads/images/mumbai-indians2544.jpg", // from Logowik :contentReference[oaicite:2]{index=2}
  },
  {
    team: "CSK",
    fullName: "Chennai Super Kings",
    primaryColor: "#FFB81C",
    secondaryColor: "#1B4F72",
    trophies: 5, // as of 2025 (2010, 2011, 2018, 2021, 2023) :contentReference[oaicite:3]{index=3}
    captain: "Ruturaj Gaikwad", // IPL 2025 captain :contentReference[oaicite:4]{index=4}
    logo: "https://logowik.com/content/uploads/images/chennai-super-kings3461.jpg", // from Logowik :contentReference[oaicite:5]{index=5}
  },
  {
    team: "KKR",
    fullName: "Kolkata Knight Riders",
    primaryColor: "#512D6D",
    secondaryColor: "#F9A800",
    trophies: 3, // they won their third in 2024 :contentReference[oaicite:6]{index=6}
    captain: "Ajinkya Rahane", // IPL 2025 captain :contentReference[oaicite:7]{index=7}
    logo: "https://brandfetch.com/api/logo/kkr.in/svg", // Brandfetch asset for KKR :contentReference[oaicite:8]{index=8}
  },
  {
    team: "RCB",
    fullName: "Royal Challengers Bangalore",
    primaryColor: "#E40046",
    secondaryColor: "#F2A900",
    trophies: 1, // They won their first in 2025 :contentReference[oaicite:9]{index=9}
    captain: "Rajat Patidar", // Current (2025) captain :contentReference[oaicite:10]{index=10}
    logo: "https://seeklogo.com/vector-logo/royal-challengers-bangalore-rcb-logo", // from Seeklogo
  },
  {
    team: "DC",
    fullName: "Delhi Capitals",
    primaryColor: "#2561AE",
    secondaryColor: "#D71921",
    trophies: 0, // DC haven't won as of 2025
    captain: "Axar Patel", // IPL 2025 captain :contentReference[oaicite:11]{index=11}
    logo: "https://seeklogo.com/vector-logo/delhi-capitals-logo", // hypothetical vector link, find from brand source
  },
  {
    team: "RR",
    fullName: "Rajasthan Royals",
    primaryColor: "#1D4598",
    secondaryColor: "#F1B332",
    trophies: 1, // won in 2008
    captain: "Sanju Samson", // 2025 captain :contentReference[oaicite:12]{index=12}
    logo: "https://seeklogo.com/vector-logo/rajasthan-royals-ipl-logo", // from Seeklogo
  },
  {
    team: "PBKS",
    fullName: "Punjab Kings",
    primaryColor: "#E30613",
    secondaryColor: "#FDB913",
    trophies: 0,
    captain: "Shreyas Iyer", // 2025 captain :contentReference[oaicite:13]{index=13}
    logo: "https://seeklogo.com/vector-logo/punjab-kings-logo", // from Seeklogo
  },
  {
    team: "SRH",
    fullName: "Sunrisers Hyderabad",
    primaryColor: "#FF4F00",
    secondaryColor: "#FF9C00",
    trophies: 1, // SRH won in 2016
    captain: "Pat Cummins", // 2025 captain :contentReference[oaicite:14]{index=14}
    logo: "https://seeklogo.com/vector-logo/sunrisers-hyderabad-logo", // from Seeklogo
  },
  {
    team: "LSG",
    fullName: "Lucknow Super Giants",
    primaryColor: "#4DBF4F",
    secondaryColor: "#FF8C00",
    trophies: 0,
    captain: "Rishabh Pant", // 2025 skipper (per reports) :contentReference[oaicite:15]{index=15}
    logo: "https://seeklogo.com/vector-logo/lucknow-super-giants-logo", // from Seeklogo
  },
  {
    team: "GT",
    fullName: "Gujarat Titans",
    primaryColor: "#008C47",
    secondaryColor: "#4E9F3D",
    trophies: 1, // won in 2022
    captain: "Shubman Gill", // 2025 captain :contentReference[oaicite:16]{index=16}
    logo: "https://seeklogo.com/vector-logo/gujarat-titans-logo", // from Seeklogo
  },
];

let main = document.querySelector("main");
let info = document.querySelector("#info");
let h1 = document.querySelector("h1");
let fullName = document.querySelector("#fullName");
let captainName = document.querySelector("span");
let wins = document.querySelector("#wins");

let img = document.querySelector("img");

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let getRandomValue = Math.floor(Math.random() * iplTeams.length);

  h1.textContent = iplTeams[getRandomValue].team;
  fullName.textContent = iplTeams[getRandomValue].fullName;
  captainName.textContent = iplTeams[getRandomValue].captain;
  wins.textContent = iplTeams[getRandomValue].trophies;
  img.src = iplTeams[getRandomValue].logo;
  main.style.backgroundColor = iplTeams[getRandomValue].primaryColor;
  info.style.backgroundColor = iplTeams[getRandomValue].secondaryColor; 
});
