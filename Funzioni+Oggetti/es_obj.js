// ============================================
// JS OBJECTS - BEGINNER EXERCISES
// ============================================


// --- EASY 1 ---
// Create an object called "person" with the properties:
// name, age, and city.
// Then print each property using console.log.

// your code here


// --- EASY 2 ---
// Create an object called "car" with the properties:
// brand, model, and year.
// Then change the year to a new value and print the whole object.

// your code here


// --- INTERMEDIATE 1 ---
// Create an object called "student" with the properties:
// name, grades (an array of numbers), and a method getAverage()
// that returns the average of the grades.

// your code here

// console.log(student.getAverage()); // expected: average of the grades array


// --- INTERMEDIATE 2 ---
// Create a function describeAnimal(animal) that receives an object
// with the properties: name, species, and sound.
// The function should return the string:
// "[name] is a [species] and it goes [sound]!"

function describeAnimal(animal) {
  // your code here
}

const dog = { name: "Rex", species: "dog", sound: "woof" };
console.log(describeAnimal(dog)); // expected: Rex is a dog and it goes woof!


// --- DIFFICULT ---
// Create a function createInventory(items) that receives an array of objects.
// Each object has: name (string) and quantity (number).
// The function should use a for loop to build and return a NEW object
// where each key is the item name and the value is its quantity.

function createInventory(items) {
  // your code here
}

const items = [
  { name: "apples", quantity: 5 },
  { name: "bananas", quantity: 3 },
  { name: "oranges", quantity: 8 }
];

console.log(createInventory(items));
// expected: { apples: 5, bananas: 3, oranges: 8 }