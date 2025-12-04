const places = [
  {
    name: "Rosewood Hong Kong",
    description:
      "A world-class luxury hotel overlooking Victoria Harbour, known for premium suites, exceptional dining and skyline views.",
    rating: 5,
    night_stay: 3,
    image:
      "https://picasso.rosewoodhotelgroup.com/transform/d7404925-b09f-4c4e-8ce0-95f0d9169b9d/RWHKG_3-0_Brand-com_Assets_Rooms-and-Accommodation_Kowloon-Peak-View-King-Room_1",
  },
  {
    name: "La Mamounia, Marrakech",
    description:
      "Historic 5-star Moroccan palace hotel blending Arab-Andalusian architecture, lush gardens and luxury suites.",
    rating: 5,
    night_stay: 4,
    image:
      "https://mamounia.com/media/cache/jadro_resize/rc/Fdkw3dJx1764319762/jadroRoot/medias/653fcee154467/6540e50e0c796/6540e5783a736/accueil-hebergements-02-.jpeg",
  },
  {
    name: "Velaa Private Island, Maldives",
    description:
      "Ultra-luxury private island resort featuring overwater villas, personal pools and top-tier privacy.",
    rating: 5,
    night_stay: 5,
    image: "https://www.velaaprivateisland.com/media/images/aphrodite/2_villaspage/2_your_home/02_villas.jpg",
  },
  {
    name: "The Muraka – Conrad Maldives",
    description:
      "A unique two-level villa featuring an underwater bedroom and panoramic ocean views.",
    rating: 5,
    night_stay: 2,
    image:
     "https://www.conradmaldives.com/wp-content/uploads/2025/09/CMRI_The-Muraka-Kids-in-the-Bed.jpg-resized-880x800.jpg",
  },
  
];

let main = document.querySelector("main");

places.forEach((item) => {
  let card = document.createElement("div");
  card.setAttribute("id", "card");
  card.style.backgroundImage = `url("${item.image}")`

  let content = document.createElement("div");
  content.setAttribute("id", "content");


  let h2 = document.createElement("h2");
  h2.textContent = item.name;
  let p = document.createElement("p");
  p.textContent = item.description;

  let details = document.createElement("div");
  details.setAttribute("id", "details");

  let rating = document.createElement("span");
  rating.textContent = item.rating + " Stars";
  let nightStay = document.createElement("span");
  nightStay.textContent = item.night_stay + " Night Stay";

  let btn = document.createElement("button");
  btn.textContent = "Reserve Now";

  details.append(rating, nightStay);
  content.append(h2, p, details, btn);
  card.append(content);
  main.append(card);
});

// <div id="card">
//   <div id="content">
//     <h2>Place Name</h2>
//     <p>
//       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ea cumque deleniti et voluptatem dolores. Nemo, placeat! Nobis, repudiandae?
//     </p>
//     <div id="details">
//       <span id="ratings">5 stars</span>
//       <span id="night-stay">4 Night Stay</span>
//     </div>
//     <button>Reserve Now</button>
//   </div>
// </div>
