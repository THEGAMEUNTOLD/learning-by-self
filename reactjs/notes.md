### what is ReactJS ? 
- ReactJS is a JavaScript library used to build user interfaces (UI) — especially single-page applications (SPAs) where the page updates dynamically without reloading.

### what is library and framwork ? 

library - A library is a collection of pre-built functions that you call in your code whenever you need them.
 - GSAP
 - Lenis
 - ReactJS

Framework - A framework provides a complete structure and rules for your application.You write your code inside its structure.
 - NextJS
 - Angularf

### Import & Export in JavaScript 
- When your JavaScript project grows, putting all code in one file becomes difficult to manage.

export — sending something out of a file
import — bringing something into another file

utils.js (file)-> 

function greet(name) 
  return `Hello, ${name}!`;
} 
function square(n) {
  return n * n;
}
export { greet, square };

main.js (file)-> 

import { greet, square } from "./utils.js";
console.log(greet("Bharat"));
console.log(square(5));


### real DOM & virtual DOM ?

Real DOM (Document Object Model) 
 - Real DOM is the actual structure of a webpage created by the browser.
 - It contains all the real HTML elements (like <div>, <p>, <h1>).
When something changes on the page, the browser updates the Real DOM directly.

Characteristics
 - Slow to update when many elements change
 - Directly interacts with the browser
 - Entire structure may re-render even for a small change
 - Memory-heavy

Virtual DOM —
- Virtual DOM is a lightweight, virtual copy of the Real DOM created by libraries like React.
It exists in memory and is not directly shown on the screen.

- Whenever something changes, React updates the Virtual DOM first, compares it with the previous version (diffing), and then updates only the necessary parts of the Real DOM.

Characteristics
 - Faster updates
 - Efficient: updates only changed elements
 - Helps apps run smoothly
 - Exists only in memory (not directly in the browser)

