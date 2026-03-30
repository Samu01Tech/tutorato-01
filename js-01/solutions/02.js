let loyaltyPoints = 35; // Change this number to test both outcomes

if (loyaltyPoints >= 50) {
  console.log("Access Granted: Welcome to the VIP Lounge!");
} else {
  let pointsNeeded = 50 - loyaltyPoints;
  console.log(`Access Denied: You need ${pointsNeeded} more points to enter.`);
}