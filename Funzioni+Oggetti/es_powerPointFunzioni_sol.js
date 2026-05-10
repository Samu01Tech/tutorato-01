function sum(a, b) {
  return a+b;
}

let x = sum(5, 7);
console.log(x);  // 12



// ------------------------------------------
function isEven(n) {
  let modulo = n%2;
  let risposta;

  if (modulo === 0) {
    risposta = "numero pari"
  } else {
    risposta = "numero dispari"
  }
  return risposta;
}

console.log(isEven(4));  // true
console.log(isEven(7));  // false
console.log(isEven(0));  // true

// ------------------------------------------
function greet(name, language = "English") {
  if (language === "Italian") {
    return "Ciao, " + name + "!";
  } else {
    return "Hello, " + name + "!";
  }
}

console.log(greet("Alice"));             // Hello, Alice!
console.log(greet("Marco", "Italian"));  // Ciao, Marco!
console.log(greet("Bob", "English"));    // Hello, Bob!