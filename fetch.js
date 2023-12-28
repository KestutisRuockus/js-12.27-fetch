// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((atsakymas) => atsakymas.json()) // 1. gaunmas atsakymas is serverio. ir konvertuojamas i teksta
//   .then((atsakymas) => document.write(`<img src='${atsakymas.message}'>`)); //2. Iskoduotas atsakymas yra panaudojamas

// console.log(`jau kreipemes i severi`);

// let breeds = [];

// gauti visas veisles is API
fetch("https://dog.ceo/api/breeds/list/all")
  .then((result) => result.json())
  .then((data) => setBreedsIntoDroplist(data.message));

const btn = document.getElementById("btn");
btn.addEventListener("click", setBreedsIntoDroplist);

// Atvaizduoti veisles 'select' elemente
function setBreedsIntoDroplist(breeds) {
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

// gauti ir atvaizduoti pasirinktos veisles nuotrauka
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

//1. Gauname visas šunų veisles
//2. Atvaizduoti veisles select elemente per funkciją
//3. Sukurti šuns nuotraukų atvaizdavimo funkciją (atvaizduojama pagal veislę)
//3.1 Susikurti dinamini URL, tam kad kreiptis į šuns veislės nuotraukas
//3.2 Kreipiames i serveri pagal dinaminį URL, norint gauti šuns veislės nuotraukas
//3.3 Kai gauname atsakymą dinamiškai generuoti HTML kodą. (dinaminis kodas yra generuojamas pagal gauta nuotraukų masyvą)
//3.4 Sugeneruotą kodą atvaizduoti tame elemente, kuriame norime kad atsirastų nuotraukos.
//4. Pridėti event listeneri selectui, kuris keis nuotraukas pagal veislę.
