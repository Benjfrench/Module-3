const animals = ["Tiger", "Giraffe"];

//a)
animals.push("Elephant", "Ostrich");

//b)
animals.unshift("Lion", "Bear");

//c)
animals.sort();

// d)
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal("Leopard");

// e)
function findMatchingAnimals(beginsWith) {
  const regex = new RegExp(`^${beginsWith}`, "i");
  return animals.filter((animal) => regex.test(animal));
}

console.log(findMatchingAnimals("Q"));

console.log(animals)
