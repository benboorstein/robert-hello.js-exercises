// README:
// Either download this file, or select all, copy and paste into a text editor and save as 'hello.js' before proceeding with the exercises at the bottom

// Meetup: Learn to code JavaScript Charlotte
// Event: Hands on - 9 ways to say "Hello, Charlotte"

// Topics:
// - Logging to the console
// - Strings
// - Variables [ES2015]
// - Objects
// - DOM API Properties
// - Template Literals [ES2015]
// - Functions
// - DOM API Methods
// - Event Listeners

// 1. Log a string to the console
// NEW: Logging to the console
// NEW: Strings
console.log("Hello, Charlotte");

// 2. Log string referenced by variable to the console
// NEW: Variables
let greeting = "Hello, Charlotte";
console.log(greeting);

// 3. Replace document's title with a new string
// NEW: Objects
// NEW: DOM API
document.title = "Hello, Charlotte";

// 4. Replace document's title with a new string using variables and a template literal
// NEW: Template Literals
let greetingPrefix = "Hello";
let greetingSuffix = "Charlotte";
document.title = `${greetingPrefix}, ${greetingSuffix}`;

// 5. Replace document's content with a string referenced by variable
let greeting = "Hello, Charlotte";
document.write(greeting);

// 6. Define and call a function that replaces document's content with argument's value via a template literal
// NEW: Functions
let greeting = "Hello, Charlotte";
function greet() {
  document.write(greeting);
}
greet();
(() => document.write("Hello, Charlotte"))()

// 7. Append new element, labeled with desired string, to the document's body
// NEW: DOM API Methods
let greeting = "Hello, Charlotte";
let h1 = document.createElement("h1");
h1.textContent = greeting;
document.body.appendChild(h1);

// 8. Create new button element that replaces document contents with a string when clicked and append that button to the document's body
// NEW: Event Listeners
let greeting = "Hello, Charlotte";
function greet() {
  document.write(greeting);
}
let button = document.createElement("button");
button.textContent = `Say, "${greeting}"`;
button.addEventListener("click", greet);
document.body.appendChild(button);

// 9. Create new button element that, when clicked, appends another level-1 heading element labeled with desired string. Append that button to the document's body.
let greeting = "Hello, Charlotte";
function makeNew(element) {
  let domElement = document.createElement(element);
  domElement.textContent = greeting;
  return domElement;
}
function greet() {
  let h1 = makeNew("h1");
  document.body.appendChild(h1);
  console.log("Again!");
}
let button = document.createElement("button");
button.textContent = `Say, "${greeting}"`;
button.addEventListener("click", greet);
document.body.appendChild(button);

// Study Drills:

// 1. Create a new file called 'practice.js' and re-write every line of this file. Do not copy-paste anything, as you won't learn it as effectively by doing that.

// 2. Starting from the last line, compare each line in your new 'practice.js' file with the corresponding line in this file. Make sure there are no mistakes and everything is identical.

// 3. Starting with the first exercise, select and copy only the section of code for that exercise and paste it in your browser's JavaScript console. Press Enter to run that code in the browser. Repeat this for each of the 9 exercises. If you see any errors in the console, write down what the error says and try to fix it. Search the internet for your error if you can't fix it.

// 4. Write a comment above each exercise that explains what the code for that exercise does, in plain English.

// 5. Create a new file called 'symbols.js'. In it, compile a list of each symbol (e.g. characters like '.' or '$') that you can identify from the exercises. For each symbol, also record the grammatical name (e.g. '.' is 'dot'), the JavaScript name, and the symbol's purpose in the language. First try reading the code and deducing an answer. Then, look up each symbol online.

// 6. Create a new file called 'keywords.js'. In it, compile a list of each keyword (e.g. 'console', 'document') that you can identify from the exercises. For each word, also record the word's purpose in the language. First try reading the code and deducing an answer. Then, look up each keyword online.

// 7. Write your own exercise that somehow displays 'Hello, Charlotte' on the page. You should now have 10.

// 8. Write 10 more exercises that somehow display 'Hello, Charlotte' on the page. You should now have 20.
