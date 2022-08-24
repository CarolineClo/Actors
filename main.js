const detailed = document.querySelector(".details");
const button = document.querySelector(".actorButton");
const url = "actors.json";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    handleData(data);
  });

function handleData(data) {
  //console.log(data);

  data.forEach(showDetails);
}

function showDetails(details) {
  //console.log(details);

  //grab template
  const template = document.querySelector("#actorFilm").content;
  //clone it
  const copy = template.cloneNode(true);
  //change it
  copy.querySelector(".actorName").textContent = details.fullname;
  copy.querySelector(".filmTitle").textContent = details.movie;
  copy.querySelector("article").addEventListener("click", showFilm);
  //grab parent
  const parent = document.querySelector("main");
  parent.appendChild(copy);
  //append child
}

function showFilm() {
  const details = this.querySelector(".details");
  if (details.classList.contains("show")) details.classList.remove("show");
  else if (document.querySelector(".show")) {
    document.querySelector(".show").classList.remove("show");
    details.classList.add("show");
  } else {
    details.classList.add("show");
  }

  //this.querySelector(".details").classList.toggle("show");
}

// function toggledetails() {
//   if (detailed.classList.contains("hide")) {
//     detailed.classList.remove("hide");
//     detailed.classList.add("show");
//   } else {
//     detailed.classList.remove("show");
//     detailed.classList.add("hide");
//   }
// }
