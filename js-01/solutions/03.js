function makeCoffee(size, milkType) {
  return `Here is your ${size} coffee made with ${milkType} milk. Enjoy!`;
}

// Calling the function and storing the result, or logging it directly
const order1 = makeCoffee("Large", "Oat");
console.log(order1);

const order2 = makeCoffee("Small", "Almond");
console.log(order2);