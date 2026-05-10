// ============================================
// JS FUNCTIONS - BEGINNER EXERCISES (SOLUTIONS)
// ============================================


// --- EASY 1 ---
// greet(name) returns "Hello, [name]!"

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Hello, Alice!

// --- EASY 2 ---
// double(n) returns the number multiplied by 2

function double(n) {
  return n * 2;
}

console.log(double(5));  // 10
console.log(double(13)); // 26

// --- INTERMEDIATE 1 (array) ---
// sumArray(numbers) returns the total sum of an array of numbers

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30]));     // 60

// --- INTERMEDIATE 2 (for loop) ---
// countDown(n) prints every number from n down to 1

function countDown(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

countDown(5); // 5 4 3 2 1 (each on a new line)

// --- DIFFICULT (array + for loop) ---
// getEvens(numbers) returns a new array with only the even numbers

function getEvens(numbers) {
  let evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}

console.log(getEvens([1, 2, 3, 4, 5, 6, 7, 8])); // [2, 4, 6, 8]
console.log(getEvens([11, 14, 19, 22, 31]));       // [14, 22]