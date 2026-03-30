# Building the software for a futuristic Robot Cafe.

Here are 5 narrative-driven exercises that scale in difficulty, plus a bonus exercise for HTML interaction.

---

## Exercise 1: The Robot Barista’s Memory (Variables & Data Types)
**The Story:** You just bought a second-hand robot barista named "BrewBot" for your new campus cafe. Right now, BrewBot’s memory is completely blank. Before it can serve anyone, it needs to learn how to remember basic information about a customer's order.
**The Task:** * Create variables to store a customer's `name` (string), their `orderNumber` (number), whether they want their drink `isIced` (boolean), and the `drinkName` (string).
* Use `console.log()` to print out a sentence using those variables, like: *"Order #1: Sarah wants a hot Cappuccino."* (Students will need to use a simple string concatenation or template literal here).

## Exercise 2: The VIP Study Lounge Guard (Conditionals)
**The Story:** Your cafe has a quiet VIP study lounge in the back, but it's exclusively for your most loyal customers. To get in, a student needs to have at least 50 loyalty points. BrewBot needs to check their points before opening the door.
**The Task:**
* Create a variable called `loyaltyPoints` and give it a number value.
* Write an `if / else` statement. If the points are 50 or higher, print *"Access Granted: Welcome to the VIP Lounge!"*
* If they have fewer than 50 points, print *"Access Denied: You need [X] more points to enter."* (Students must calculate the difference between 50 and their current points).

## Exercise 3: The Drink Recipe Manual (Functions)
**The Story:** BrewBot is getting confused. Instead of writing out the exact instructions every single time someone orders a coffee, you decide to teach BrewBot a "shortcut" recipe. You just tell it the size and the type of milk, and it does the rest.
**The Task:**
* Create a function named `makeCoffee` that accepts two parameters: `size` and `milkType`.
* Inside the function, write code that returns a complete sentence, like: *"Here is your [size] coffee made with [milkType] milk. Enjoy!"*
* Call the function two different times with different arguments (e.g., "Large" and "Oat", or "Small" and "Almond") and print the results to the console.

## Exercise 4: The 8:00 AM Morning Rush (Arrays & Loops)
**The Story:** It's 8:00 AM on a Monday, and there is a huge line of tired students waiting for coffee. BrewBot needs to politely greet every single person in line, one by one, without you having to manually type out a greeting for each person.
**The Task:**
* Create an Array called `waitingLine` that contains the names of at least 5 different students.
* Write a `for` loop that goes through the entire array.
* For each name in the array, print *"Next in line: [Name], step right up!"*

## Exercise 5: The End-of-Day Register (Combining Concepts)
**The Story:** The cafe is closing, and it’s time to calculate how much money you made. You have a list of all the drink prices sold today. However, you ran a special promotion: any drink that cost more than €5.00 gets a €1.00 discount applied to it *before* adding it to the final daily total.
**The Task:**
* Create an array called `dailySales` with different numbers (e.g., `[3, 6, 2.50, 7, 4]`).
* Create a variable called `totalRevenue` and set it to `0`.
* Write a `for` loop to check each sale in the array. 
* Inside the loop, use an `if` statement: if the price is greater than 5, subtract 1 from it, then add it to `totalRevenue`. If it's 5 or less, just add it to `totalRevenue` as normal.
* Print the final `totalRevenue`.

---

## Bonus Exercise: The Digital Menu Board (HTML/JS Interactivity)
**The Story:** You are designing the ordering interface for the cafe's self-serve kiosk. The kiosk needs a "Surprise Me!" button. When a user clicks it, the screen should magically display a randomly selected drink so they don't have to choose.
**The Task:**
1.  **HTML:** Create a very simple web page with an `<h1>` title, a `<button>` with the ID `surpriseBtn`, and an empty `<p>` tag with the ID `drinkDisplay`.
2.  **JS:** Create an array of 4 different drink names.
3.  **JS:** Use `document.getElementById()` to grab both the button and the paragraph.
4.  **JS:** Add an `addEventListener` to the button. When clicked, it should pick one drink from the array and change the `innerText` or `textContent` of the paragraph to display the chosen drink.

---

### How to generate a random index for the array:
```javascript
// Assuming you have an array called 'drinks'
// Get a random index between 0 and the last index of the array
// Math.floor(Math.random() * drinks.length)
```
