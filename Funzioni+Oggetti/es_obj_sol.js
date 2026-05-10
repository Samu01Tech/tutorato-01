// ============================================
// JS OBJECTS - BEGINNER EXERCISES (SOLUTIONS)
// ============================================


// --- EASY 1 ---
// Create an object called "person" with properties: name, age, city.
// Print each property with console.log.

const person = {
  name: "Alice",
  age: 25,
  city: "Rome"
};

console.log(person.name); // Alice
console.log(person.age);  // 25
console.log(person.city); // Rome

// --- EASY 2 ---
// Create an object called "car" with properties: brand, model, year.
// Change the year to a new value and print the whole object.

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2018
};

car.year = 2024;

console.log(car); // { brand: 'Toyota', model: 'Corolla', year: 2024 }

// --- INTERMEDIATE 1 ---
// Create an object "student" with: name, grades (array), and getAverage() method.

const student = {
  name: "Marco",
  grades: [8, 7, 9, 6, 10],
  getAverage() {
    let total = 0;
    for (let i = 0; i < this.grades.length; i++) {
      total += this.grades[i];
    }
    return total / this.grades.length;
  }
};

console.log(student.getAverage()); // 8

// --- INTERMEDIATE 2 ---
// describeAnimal(animal) returns "[name] is a [species] and it goes [sound]!"

function describeAnimal(animal) {
  return animal.name + " is a " + animal.species + " and it goes " + animal.sound + "!";
}

const dog = { name: "Rex", species: "dog", sound: "woof" };
console.log(describeAnimal(dog)); // Rex is a dog and it goes woof!

// --- DIFFICULT ---
// createInventory(items) takes an array of { name, quantity } objects
// and returns a single object like { apples: 5, bananas: 3, ... }

function createInventory(items) {
  const inventory = {};
  for (let i = 0; i < items.length; i++) {
    inventory[items[i].name] = items[i].quantity;
  }
  return inventory;
}

const items = [
  { name: "apples", quantity: 5 },
  { name: "bananas", quantity: 3 },
  { name: "oranges", quantity: 8 }
];

console.log(createInventory(items));
// { apples: 5, bananas: 3, oranges: 8 }