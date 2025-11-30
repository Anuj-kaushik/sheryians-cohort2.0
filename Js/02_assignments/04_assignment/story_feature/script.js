const imgArray = [
  "https://plus.unsplash.com/premium_photo-1661895001905-d793f6f38943?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let storiesContainer = document.querySelector("#stories");

storiesContainer.addEventListener("click", (evt) => {
  evt.target.classList.add("position-absolute");

  setTimeout(() => {
    evt.target.classList.remove("position-absolute");
  }, 3000);
});

imgArray.forEach((item) => {
  let story = document.createElement("div");
  story.classList.add("story");

  let storyImg = document.createElement("img");
  storyImg.src = item;
  storyImg.classList.add("position-static");
  story.append(storyImg);

  storiesContainer.append(story);
});
