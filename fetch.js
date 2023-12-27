// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((atsakymas) => atsakymas.json()) // 1. gaunmas atsakymas is serverio. ir konvertuojamas i teksta
//   .then((atsakymas) => document.write(`<img src='${atsakymas.message}'>`)); //2. Iskoduotas atsakymas yra panaudojamas

// console.log(`jau kreipemes i severi`);

let breeds = [];

fetch("https://dog.ceo/api/breeds/list/all")
  .then((result) => result.json())
  .then((data) => (breeds = data.message));

const btn = document.getElementById("btn");
btn.addEventListener("click", setBreedsIntoDroplist);

function setBreedsIntoDroplist() {
  let dynamicHTML = ``;
  for (let breed in breeds) {
    dynamicHTML += `
    <select onchange='showBreedPhoto'>
        <option value="${breed}">${breed}</option>
      </select>
    `;
  }
  document.getElementById("droplist").innerHTML = dynamicHTML;
}

function showBreedPhoto() {
  const breed = document.getElementById("droplist").value;
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((result) => result.json())
    .then((data) => {
      document.getElementById(
        "image"
      ).innerHTML = `<img src="${data.message}" alt="photo" />`;
      document.querySelector("h1").innerText =
        breed.charAt(0).toUpperCase() + breed.slice(1);
    });
}
