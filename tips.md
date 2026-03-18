# Advanced Assignment Supplements & Beginner Tips

This document provides supplementary technical tips and advanced requirements for the three assignments found in `assignments.md`. Use these to avoid common pitfalls and enhance your projects.

---

## 💡 Technical Implementation Tips

### 1. Working with Internal Links (Assignment 1)
To make your navigation links jump to a specific section on the same page, follow these two steps:
- **The Target:** Give the section an `id` (e.g., `<section id="about">`).
- **The Link:** Use a `#` followed by that ID in your `href` attribute (e.g., `<a href="#about">About Me</a>`).

### 2. Side-by-Side Layouts (Assignment 3)
When using `display: inline-block` to place elements side-by-side:
- **The Whitespace Quirk:** HTML treats spaces between tags as actual space on the page. if your `33%` boxes don't fit on one line, try making them `30%` or remove the spaces/line breaks between the closing `</article>` and the next opening `<article>` tag.

### 3. JavaScript: Inputs vs. Tags
- **Reading Data:** To get text from an `<input>`, use `.value` (e.g., `document.getElementById('myInput').value`).
- **Writing Data:** To change the text *inside* a `<div>` or `<p>`, use `.textContent` (e.g., `document.getElementById('message').textContent = "Hello!"`).

---

## 🚀 Advanced JavaScript Requirements

### Assignment 2: Enhanced Messaging
- **Clearing Inputs:** After calling `alert()`, add a line of code to clear the input field so it's ready for the next message: `myInputElement.value = "";`.
- **Empty Check:** Wrap your alert in an `if` statement so it only triggers if the user has actually typed something.

### Assignment 3: Preventing Page Refresh
By default, clicking a button inside a `<form>` refreshes the page, which clears your JavaScript "Success Message" instantly. To prevent this:
- **Option A:** Use `<button type="button">` instead of a submit button.
- **Option B:** Pass the `event` to your function and use `event.preventDefault();`.

---

## 🛠️ Best Practices
- **Script Location:** Always place your `<script>` tags at the very bottom of the `<body>` (just before the `</body>` closing tag). This ensures the browser "sees" all your HTML elements before the script tries to find them.
- **Unique IDs:** An `id` must be unique. Never use the same `id` on more than one element on the same page.
- **Console Debugging:** If your script isn't working, right-click your page in the browser, select "Inspect," and click the "Console" tab to see error messages.