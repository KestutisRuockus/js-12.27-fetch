// function showMessage(message) {
//   console.log(message);
// }

// showMessage(`Labas, pasauli`);

// function findBiggerValue(a, b) {
//   function isABiggerThanB(aValue, bValue) {
//     return aValue > bValue;
//   }
//   if (isABiggerThanB(a, b)) return a;
//   else return b;
// }

// console.log(findBiggerValue(5, 6));

// // '...' spread operator
// // function findMaximumValue(sk1, sk2, sk3){
// function findMaximumValue(...args) {
//   let max = args[0];
//   for (let index in args) {
//     if (args[index] > max) max = args[index];
//   }
//   return max;
// }
// console.log(findMaximumValue(4, 7, 150, 12, 51, 3, "100", "hallo", 10));

// console.log(Math.max(1, 4, 2, 12, 1, 6));

// document.querySelector(".pienas").addEventListener("click", () => {
//   console.log(`neliesk!`);
// });

// function callbackFunction(message, callback) {
//   console.log(message);
//   callback();
// }

// callbackFunction("Hello, World!", () => {
//   console.log("funkcijos pabaiga");
// });

// Rekursija

function recursion(value) {
  console.log(`Value: ${value}`);
  if (value < 10) recursion(value + 1);
}
recursion(4);

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));

function countAverage(...marks) {
  let average = 0,
    sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  average = sum / marks.length;
  return average;
}
console.log(countAverage(5, 7, 6, 9));

//Sukurti funkciją, kuriai paduodamas skaičių masyvas.
//Jei masyve daugiau nei 6 elementai - kiekvieną elementą padalinti iš 2.
// Kitu atveju padauginti visus elementus iš 2.
// Gražinti visų masyve esančių elementų vidurkį.
// tikrinimą daryti išorėje

// 1. Tikrinti ar masyve daugiau nei 6 elementai. Atlikti veiksmus.
// 2. Funkcijos viduje patikrinti ar paduodamas argumentas yra masyvas
// 3. Apskaiciuoti rezultatinio masyvo elemento reiksmes
// 4. Apskaiciuoti rezultatini masyvo elemntu suma
// 5. Apskaiciuoti vidurki
// 6. Grązinti vidurki

const arr = [4, 7, 8, 9];

if (arr.length > 6) {
  // dalinam
  countAverageSpecial(arr, divideAllElementsByTwo);
} else {
  // dauginam
  countAverageSpecial(arr, multiplyAllElementsByTwo);
}

function divideAllElementsByTwo(array) {
  for (let index in array) {
    array[index] /= 2;
  }
  return array;
}

function multiplyAllElementsByTwo(array) {
  for (let index in array) {
    array[index] *= 2;
  }
  return array;
}
function countAverageSpecial(array, callback) {
  if (typeof array !== "object") return 0;
  const resultArray = callback(array);

  let sum = 0;
  for (let value of resultArray) {
    sum += value;
  }

  let average = sum / array.length;
  return average;
}
