//1. Gauname visas šunų veisles
//2. Atvaizduoti veisles select elemente per funkciją
//3. Sukurti šuns nuotraukų atvaizdavimo funkciją (atvaizduojama pagal veislę)
//3.1 Susikurti dinamini URL, tam kad kreiptis į šuns veislės nuotraukas
//3.2 Kreipiames i serveri pagal dinaminį URL, norint gauti šuns veislės nuotraukas
//3.3 Kai gauname atsakymą dinamiškai generuoti HTML kodą. (dinaminis kodas yra generuojamas pagal gauta nuotraukų masyvą)
//3.4 Sugeneruotą kodą atvaizduoti tame elemente, kuriame norime kad atsirastų nuotraukos.
//4. Pridėti event listeneri selectui, kuris keis nuotraukas pagal veislę.

const breedSelectElement = document.querySelector("#breeds-select");
const dynamicAlbumElement = document.querySelector("#photo-album");
const breedsArray = [];

// 1
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((response) => parseAllBreeds(response.message));

// 2
function parseAllBreeds(breeds) {
  let dynamicHTML = ``;

  for (let breed in breeds) {
    const subBreeds = breeds[breed];
    if (subBreeds.length === 0) {
      dynamicHTML += `
        <option>${breed}<option>`;
      breedsArray.push(breed);
    } else {
      for (let subBreed of subBreeds) {
        dynamicHTML += `
        <option>${breed} ${breed}<option>`;
        breedsArray.push(`${subBreed} ${breed}`);
      }
    }
  }
  parseDogImages(breedsArray[0]);
  breedSelectElement.innerHTML = dynamicHTML;
}

// 3
function parseDogImages(breed) {
  // 3.1
  let dynamicURL = generateDynamicDogPhotosUrl(breed);
  // 3.2
  fetch(dynamicURL)
    .then((response) => response.json())
    // 3.3
    .then((response) => generateDynamicDogPhotos(response.message));
}

function generateDynamicDogPhotosUrl(breed) {
  let finalBreed = breed.split(" ").reverse().join("/");
  return `https://dog.ceo/api/breed/${finalBreed}/images`;
}

// 3.4
function generateDynamicDogPhotos(photosArray) {
  let dynamicHTML = ``;
  for (let photo of photosArray) {
    dynamicHTML += `
  <div class="col-4 mx-auto">
  <img 
  src="${photo}"
  style="width: 100%"
  />
  </div>
  `;
  }
  dynamicAlbumElement.innerHTML = dynamicHTML;
}

// 4.
breedSelectElement.addEventListener("change", () => {
  parseDogImages(breedSelectElement.value);
});
