const dailySales = [3, 6, 2.50, 7, 4];
let totalRevenue = 0;

for (let i = 0; i < dailySales.length; i++) {
  let currentPrice = dailySales[i];
  
  if (currentPrice > 5) {
    // Apply the 1.00 discount
    totalRevenue = totalRevenue + (currentPrice - 1); 
  } else {
    // Add normal price
    totalRevenue = totalRevenue + currentPrice; 
  }
}

console.log(`The final total revenue for today is €${totalRevenue}.`);