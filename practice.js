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
// NEW: String
// My comment: Logs "Hello, Charlotte" to the console.
console.log("Hello, Charlotte")

// 2. Log string referenced by variable to the console
// NEW: Variables
// My comment: Makes "Hello, Charlotte" appear in the console by storing the value of "Hello, Charlotte" in a variable called "greeting" and then logging "greeting" to the console.
let greeting = "Hello, Charlotte"
console.log(greeting)

// 3. Replace document's title with a new string
// NEW: Objects
// NEW: DOM API
// My comment: Changes the title of the page to "Hello, Charlotte".
document.title = "Hello, Charlotte"

// 4. Replace document's title with a new string using variables and a template literal
// NEW: Template Literals
// My comment: Changes the title of the page to "Hello, Charlotte".
// - This is accomplished by:
// --- storing the value of "Hello" in a variable called "greetingPrefix"
// --- storing the value of "Charlotte" in a variable called "greetingSuffix"
// --- creating a template literal comprised of the values of the two variables with a comma between them
// --- setting the "document" object's "title" property to the aforementioned template literal.
let greetingPrefix = "Hello"
let greetingSuffix = "Charlotte"
document.title = `${greetingPrefix}, ${greetingSuffix}`

// 5. Replace document's content with a string referenced by variable
// My comment: Replaces all contents of the webpage with "Hello, Charlotte" by storing the value of "Hello, Charlotte" in a variable called "greeting" and then passing the variable called "greeting" in as an argument of the "document" object's "write" method.             
let greeting = "Hello, Charlotte"
document.write(greeting)

// 6. Define and call a function that replaces document's content with argument's value via a template literal
// NEW: Functions
// My comment: Replaces all contents of the webpage with "Hello, Charlotte".
// - This is accomplished by:
// --- storing the value of "Hello, Charlotte" in a variable called "greeting"
// --- defining a function called "greet" without parameters
// --- in the function's body (the part of the function that will be executed upon calling/invoking the function), passing the variable called "greeting" in as an argument of the "document" object's "write" method
// --- calling/invoking the function
// A note: The final line is a line (with an arrow function) that I don't understand, in which there is definitely at least one error ("Uncaught TypeError: greet(...) is not a function at <anonymous> 6:1"), and which I think may be unnecessary. (Reference my "attempted fix" below.)
let greeting = "Hello, Charlotte"
function greet() {
    document.write(greeting)
}
greet()
(() => document.write("Hello, Charlotte"))()

    // My attempted fix for 6 (even though there's no Template Literal in the original (above) or in my fix (below), right?):
    let greeting = "Hello, Charlotte"
    function greet() {
        document.write(greeting)
    }
    greet()
    // (() => document.write("Hello, Charlotte"))()
    
// 7. Append new element, labeled with desired string, to the document's body
// NEW: DOM API Methods
// My comment: Creates an h1 element, gives it the content of "Hello, Charlotte", and adds this h1 element to the "body" property of the "document" object. The result is that this new h1 element (and its content) appears in the console and at the top-left of the page. 
let greeting = "Hello, Charlotte"
let h1 = document.createElement("h1")
h1.textContent = greeting
document.body.appendChild(h1)

// 8. Create new button element that replaces document contents with a string when clicked and append that button to the document's body
// NEW: Event Listeners
// My comment:
// - Before the button is clicked:
// --- Creates a button element, gives it the content of "Say, 'Hello, Charlotte'", and adds this button element to the "body" property of the "document" object.
// ----- The result is that this new button (with its content) appears in the console and at the top-left of the page.
// - Upon clicking the button:
// --- Clears the page of all content with the exception of "Hello, Charlotte".
// ----- This occurs because of a line of code that says that: When the button is clicked, the "greet" function (a function without parameters) will be executed. And when a function is executed, it is the content of the function's body that determines what happens. And in the body of the "greet" function, a variable called "greeting" (which stores the value "Hello, Charlotte") is passed in as an argument of the "document" object's "write" method. 
let greeting = "Hello, Charlotte"
function greet() {
    document.write(greeting)
}
let button = document.createElement("button")
button.textContent = `Say, "${greeting}"`
button.addEventListener("click", greet)
document.body.appendChild(button)

// 9. Create new button element that, when clicked, appends another level-1 heading element labeled with desired string. Append that button to the document's body.
// My comment:
// - Before the button is clicked:
// --- Creates a button element, gives it the content of "Say, 'Hello, Charlotte'", and adds this button element to the "body" property of the "document" object.
// --- The result is that this new button (with its content) appears in the console and at the top-left of the page.
// - Upon clicking the button:
// --- Adds "Hello, Charlotte" text (on top of the content already on the page) to the top-left of the page but below the button.
// ----- This occurs because of a line of code that says that: When the button is clicked, the "greet" function (a function without parameters) will be executed. And when a function is executed, it is the content of the function's body that determines what happens. And in the body of the "greet" function, several things occur which would take me, with my level of knowledge, too many words to describe effectively here.
// --- Logs "Again!" to the console.
// ----- This occurs because of a line of code that says that: When the button is clicked, the "greet" function (a function without parameters) will be executed. And when a function is executed, it is the content of the function's body that determines what happens. And in the body of the "greet" function is a line that logs "Again!" to the console.
let greeting = "Hello, Charlotte"
function makeNew(element) {
    let domElement = document.createElement(element)
    domElement.textContent = greeting
    return domElement
}
function greet() {
    let h1 = makeNew("h1")
    document.body.appendChild(h1)
    console.log("Again!")
}
let button = document.createElement("button")
button.textContent = `Say, "${greeting}"`
button.addEventListener("click", greet)
document.body.appendChild(button)

// Study Drills:

// 1. Create a new file called 'practice.js' and re-write every line of this file. Do not copy-paste anything, as you won't learn it as effectively by doing that.

// 2. Starting from the last line, compare each line in your new 'practice.js' file with the corresponding line in this file. Make sure there are no mistakes and everything is identical.

// 3. Starting with the first exercise, select and copy only the section of code for that exercise and paste it in your browser's JavaScript console. Press Enter to run that code in the browser. Repeat this for each of the 9 exercises. If you see any errors in the console, write down what the error says and try to fix it. Search the internet for your error if you can't fix it.

// 4. Write a comment above each exercise that explains what the code for that exercise does, in plain English.

// 5. Create a new file called 'symbols.js'. In it, compile a list of each symbol (e.g. characters like '.' or '$') that you can identify from the exercises. For each symbol, also record the grammatical name (e.g. '.' is 'dot'), the JavaScript name, and the symbol's purpose in the language. First try reading the code and deducing an answer. Then, look up each symbol online.

// 6. Create a new file called 'keywords.js'. In it, compile a list of each keyword (e.g. 'console', 'document') that you can identify from the exercises. For each word, also record the word's purpose in the language. First try reading the code and deducing an answer. Then, look up each keyword online.

// 7. Write your own exercise that somehow displays 'Hello, Charlotte' on the page. You should now have 10.

// 8. Write 10 more exercises that somehow display 'Hello, Charlotte' on the page. You should now have 20.


// Note that #0 below is for Study Drill 7, and that #1-10 are for Study Drill 8

    // 0.
    let greeting = "Hello, Charlotte"
    function greet() {
        let h3 = document.createElement("h3")
        h3.textContent = greeting
        document.body.appendChild(h3)
    }
    greet()

    // 1.
    function greet() {
        let greeting = "Hello, Charlotte"
        let h5 = document.createElement("h5")
        h5.textContent = greeting
        document.body.appendChild(h5)
    }
    greet()

    // 2.
    function greet() {
        let h3 = document.createElement("h3")
        h3.textContent = "Hello, Charlotte"
        document.body.appendChild(h3)
    }
    greet()

    // 3.
    document.write("Hello, Charlotte")

    // 4.
    function greet() {
        document.write("Hello, Charlotte")
    }
    greet()

    // 5.
    let h3 = document.createElement("h3")
    h3.textContent = "Hello, Charlotte"
    function greet() {
        document.body.appendChild(h3)
    }
    greet()

    // 6.
    let button = document.createElement("button")
    button.textContent = "Click this to see a nice greeting!"
    document.body.appendChild(button)
    button.addEventListener("click", greet)
    function greet() {
        document.write("Hello, Charlotte")
    }

    // 7.
    let greeting = "Hello, Charlotte"

    let button = document.createElement("button")
    button.textContent = `Click here to see "${greeting}" added to the page's current contents!`
    document.body.appendChild(button)
    button.addEventListener("click", greet)

    function greet() {
        let h2 = document.createElement("h2")
        h2.textContent = greeting
        document.body.appendChild(h2)
    }

    // 8.
    let greetingPrefix = "Hello"
    let greetingSuffix = "Charlotte"

    let button = document.createElement("button")
    button.textContent = `Click to see "${greetingPrefix}, ${greetingSuffix}" added to the page's current contents!`
    document.body.appendChild(button)

    button.addEventListener("click", function() {
        let h2 = document.createElement("h2")
        h2.textContent = `${greetingPrefix}, ${greetingSuffix}` 
        document.body.appendChild(h2)
        console.log(`So, did "${greetingPrefix}, ${greetingSuffix}" appear up there on the page or not?`)
    })

    // 9.
    let greeting = "Hello, Charlotte"

    // function clearThePage() {
    //     document.body.style.display = "none"
    // }
    // clearThePage()

    function makeNewElement(element) {
        // document.body.style.display = "block"
        let newElement = document.createElement(element)
        newElement.textContent = greeting
        newElement.style.color = "blue"
        document.body.appendChild(newElement)
    }
    makeNewElement("h1")

    // 10.
    let greeting = "Hello, Charlotte"
    let celebration = "Woohoo!"

    let button = document.createElement("button")
    button.textContent = `And finally (last time, I promise!), move your cursor over this to see "${greeting}" in green and, just below it, "${celebration}" in purple`
    document.body.appendChild(button)

    function makeAnElement(element) {
        let newElement = document.createElement(element)
        newElement.textContent = greeting
        newElement.style.color = "green"
        return newElement
    }

    function makeAnotherElement(element) {
        let newElement = document.createElement(element)
        newElement.textContent = celebration
        newElement.style.color = "purple"
        return newElement
    }

    button.addEventListener("mouseover", function() {
        let h2 = makeAnElement("h2")
        document.body.appendChild(h2)

        let h4 = makeAnotherElement("h4")
        document.body.appendChild(h4)
    })

    // QUESTIONS:
    // - Why does the new/created element sometimes show up in the console and sometimes not? I've tried a few different things and I can't narrow down why it is. It has something to do with whether it's in a function or not, I think, but it's not clear to me.
    // - In my #9 (above), the way it is now works. But the commented out parts are an attempt to get rid of all the text on the page and THEN put the greeting on the page. How is this done? I know document.write(greeting) would do this, but I don't want to use that, because it seems to get rid of all styling. 


// ------------------------------------------------------------------------------------------------------------------------------------


// Below is my work for Study Drill 4 that I decided to redo because I don't think it's "plain English" enough:

// For 1: My comment: Logs "Hello, Charlotte" to the console.

// For 2: My comment: Declares a variable called "greeting" and initializes it with the value "Hello, Charlotte". In other words, the value "Hello, Charlotte" is stored in the variable called "greeting". Logs the variable called "greeting" to the console.

// For 3: My comment: Accesses the "document" object and then the document object's "title" property, and sets this title property to the value "Hello, Charlotte"

// For 4: My comment: Declares a variable called "greetingPrefix" and initializes it with the value "Hello". In other words, the value "Hello" is stored in the variable called "greetingPrefix". Declares a variable called "greetingSuffix" and initializes it with the value "Charlotte". In other words, the value "Charlotte" is stored in the variable called "greetingSuffix". Accesses the "document" object and then the document object's "title" property, and sets this title property to the value of a template literal comprised of the two previously declared variables (the first with the value "Hello" and the second with the value "Charlotte"), and places a comma between them, thereby producing the string "Hello, Charlotte".

// For 5: My comment: Declares a variable called "greeting" and initializes it with the value "Hello, Charlotte". In other words, the value "Hello, Charlotte" is stored in the variable called "greeting". Accesses the "document" object and then the document object's "write" property, and sets this write property to the variable called "greeting".

// For 6: My comment: Declares a variable called "greeting" and initializes it with the value "Hello, Charlotte". In other words, the value "Hello, Charlotte" is stored in the variable called "greeting". A function called "greet" is defined without parameters, and, in the body of the function (the part of the function that will be executed upon calling/invoking the function), the "document" object is accessed and then the document object's "write" property, and this write property is set to the variable called "greeting". Then the "greet" function is called/invoked. Then is a line (with an arrow function) that I don't understand and which I think is unnecessary and a mistake.  

// For 7: My comment: Declares a variable called "greeting" and initializes it with the value "Hello, Charlotte". In other words, the value "Hello, Charlotte" is stored in the variable called "greeting". Declares a variable called "h1" and initializes it with the creation of an "h1" element, which is accomplished by accessing the "document" object and then the document object's "createElement" method (a method is like a function on an object or a property) and passing "h1" in as the method's argument. Then the h1 element is given the text of the variable called "greeting". Then the h1 element is added to the "body" of the page, which is accomplished by accessing the "document" object and then the document object's "body" property and then the body property's "appendChild" method and passing "h1" in as the method's argument.








