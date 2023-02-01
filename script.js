let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics() {
  let catsImgsDiv = document.querySelector(".catsImgsDiv");
  catsImgsDiv.innerHTML = "";

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      let catsImgUrl = data[0].url;

      let catsImgEl = document.createElement("img");
      catsImgEl.setAttribute("src", `${catsImgUrl}`);
      catsImgEl.classList.add("showImg");

      let catsImgsDiv = document.querySelector(".catsImgsDiv");
      catsImgsDiv.appendChild(catsImgEl);
    })

    .catch((err) => console.log(err));
}
