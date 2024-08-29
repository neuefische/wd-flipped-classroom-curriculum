# JS Functions

## Learning Objectives

- Understanding the purpose of functions.
- Writing custom functions with function declarations.
- Naming functions appropriately.
- Using default values.
- Calling functions.
- Using function parameters and passing arguments to function calls.
- Understanding variable scope.
- Returning values from functions.

---

## Functions Purpose

Functions are a fundamental concept in programming that help us avoid repetition and make our code more organised.

Instead of writing the same code repeatedly, you can write it once inside a function and call that function whenever needed.

> 💡 A good analogy for functions is a recipe: a task like baking a cake is written down in a recipe. This cake can then be baked simply by looking up that recipe and following the instructions.

---

## Function Declarations

You can define a function using a `function declaration`, which consists of:

- The keyword `function`, which goes first.
- A function `name`, which should describe its purpose.
- A single `parameter` or a list of `parameters` between the parentheses `()`.
- A function `body`, which contains the JavaScript code, between the curly braces `{}`.

> 💡 Defining a function doesn't execute its code; you must call the function to run the code.

```js
function functionName() {
  // Function body
}

function bakeCake() {
  console.log("Mix the ingredients.");
  console.log("Pour the batter into a pan.");
  console.log("Bake at 180°C for 30 minutes.");
}
```

> 💡 A `function declaration` is exactly this set of instructions of the cake recipe. But a declaration does nothing by itself (you cannot eat the recipe, but only the cake). You can then execute the instructions by `calling the function`.

> 💡 A function should do only what its name suggests. Separate independent actions into different functions.

---

<details>
<summary>Naming Functions</summary>

## Clear and Descriptive Function Names

- Functions represent actions, so their names should be verbs.
- The name should be brief, accurate, and describe what the function does.
- This helps others developers understand the function's purpose just by reading its name.

### Common Prefixes

Prefixes indicate the function's action. Agree on their meanings within your team.

Examples:

- `showMessage(...)` – displays a message.
- `getPeople(...)` – returns a list of persons.
- `createCard(...)` – creates and usually returns a card UI element.
- `checkStatus(...)` – checks the status and returns true/false..
- `handleSubmit(...)` – handles a form submit event.

</details>

---

## Function Calls

- Without calling the function, it will do nothing.
- Functions can be called by their names and followed by parentheses `()`, to execute the code inside the function `body`.

```js
bakeCake();
```

> 💡 Execute the recipe instructions, aka baking the cake, by `calling the function`

- Functions can be called as many times as needed.
- This highlights one of the main purposes of functions: to avoid code duplication.

```js
bakeCake();
bakeCake();
```

> 💡 Fun fact: We have already called built-in browser functions (or methods which are associated with objects) like `console.log()` and `addEventListener()`. These are functions provided by the browser and the JavaScript language itself and are ready to use or "call" without any additional code.

---

## Function Parameters

- A function that always shows the same message isn't very useful.
- Adding parameters makes a function more flexible by allowing different inputs.
- Functions use `parameters` like predefined variables inside the function body.
- You can name parameters freely, except for [reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).
- When defining a function, these variables are called `parameters`
- When calling a function, the values passed are called `arguments`.
- When the function is called, the given values become `local variables` that the function uses.

To clarify these terms:

> 💡 A `parameter` is the variable listed inside the parentheses in the function declaration (declaration-time term).

> 💡 An `argument` is the value that is passed to the function when it is called (call-time term).

```js
//           parameter ↓
function printLetter(name) {
  console.log("Hi " + name + ", hope you are fine. Your Mum");
}

//    argument ↓
printLetter("Alice");

//             parameters ↓
function printSum(first, second, third) {
  const sum = first + second + third;
  console.log("The sum of your numbers is: " + sum);
}
//   arguments ↓
printSum(3, 6, 9);
```

---

<details>
<summary>Default Values</summary>

- Sometimes a function is called without passing an argument.
- In this case, the corresponding parameter becomes `undefined`. This is not an error but could be unintentional.
- To handle this, we can use `default values` in the function declaration.
- These values are used if the argument is omitted.

```js
function printLetter(name = "Child") {
  console.log("Hi " + name + ", hope you are fine. Your Mum");
}

// Function calls
printLetter("Alice"); // Output: "Hi, Alice!"
printLetter(); // Output: "Hi, Child!"
```

</details>

---

## Variable Scope

Scope defines where variables are available and where they can be referenced (or used) in your code.

- Variables declared inside a function are `local` to that function and can only be accessed from within it. They are not available outside the function.

```js
function printLetter() {
  // local variable
  const name = "Alice";
  console.log("Hi " + name + ", hope you are fine. Your Mum");
}
printLetter(); // Output: "Hi Alice, hope you are fine. Your Mum"
console.log(name); // 🚫 Error! The variable is not available outside of  the function
```

- If a same-named variable is declared inside the function, it shadows the outer one.
- The `local` variable takes precedence, and the `global` variable is not accessible within that function.
- The outer variable remains unchanged and accessible outside the function.

```js
const name = "Alice";

function printLetter() {
  const name = "Max";
  console.log("Hi " + name + ", hope you are fine. Your Mum");
}

printLetter(); // Output: "Hi Max, hope you are fine. Your Mum"
console.log(name); // Output: "Alice"
```

> 💡 It’s a good practice to minimize the use of global variables.

---

## Returning a value

- Some functions, don't return a value, but others do.
- A function can `return` a value back into the calling code (or variable) as the result.
- `Return values` are values that a function "sends back" when it completes.
- To return a value from a function, use the `return` keyword followed by an expression (anything that produces a value, see Link to the Blog Arcticl "Statements vs. Expressions" by Josh W. Comeau).
- The `return` keyword can be placed anywhere in the function.
- When the execution reaches `return`, the function stops, and the value is returned to the calling code.

```js
function calculateSum(a, b) {
  const sum = a + b;

  return sum;
}

const firstSum = calculateSum(2, 3);
// The return value is stored in "firstSum", namely 5

const secondSum = calculateSum(4, 123);
// The return value is stored in "secondSum", namely 127
```

- A function can return only one `expression value`, but there can be multiple `return statements`, in a single function.

_For example, in combination with `if-else statements`_

```js
function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
  } else {
    return false;
  }
}

const isValid = checkInputLength("Hey!");
```

---

> 💡 In conclusion, the best way to master functions is through practice. Reading is beneficial, but maintaining a consistent routine and regular practice is most effective. Keep practicing by writing your own functions, experimenting with different parameters and return values. This will deepen your understanding and enhance your skills over time.

---

### Bonus Knowledge

<details>
<summary>Early Return Statements</summary>

- You can use `return` by itself to make the function exit immediately, without returning a value.

For example, the following `console.log()` is never executed because the function exits before reaching it:

```js
function testFunction() {
  return "a returned string";

  console.log("I am never logged in the console.");
}
```

- This behavior is useful for creating `early return statements`.
- `Early returns` let us run specific parts of our code only if certain conditions are met.
- This can make our code cleaner and easier to understand, especially when there are multiple conditions.

Consider this example with nested conditions:

```js
function setBackgroundColor(color) {
  if (typeof color === "string") {
    if (color.startsWith("#")) {
      if (color.length >= 7) {
        document.body.style.backgroundColor = color;
      }
    }
  }
}
```

Using early return statements, we can rewrite the function like this:

```js
function setBackgroundColor(color) {
  // First condition
  if (typeof color !== "string") {
    return;
  }

  // Second condition
  if (!color.startsWith("#")) {
    return;
  }

  // Third condition
  if (color.length < 7) {
    return;
  }

  // If all conditions are met, execute this line
  document.body.style.backgroundColor = color;
}
```

> 💡 Hint: A return statement can be left empty, the returned value is then `undefined`.

</details>

<details>
<summary>Arrow Functions</summary>

In addition to function declarations, JavaScript has a very simple and concise syntax for creating functions, called `arrow functions`.

The function is assigned to a `constant variable`, which means its reference cannot be changed. The syntax is as follows:

```js
const addNumbers = (first, second) => {
  return first + second;
};
```

- `const`: Declares a variable with a constant reference to the function.
- `functionName`: The name of the variable storing the function.
- `(parameters)`: List of parameters inside parentheses, separated by commas.
- `=>`: Fat arrow indicating an arrow function.
- `{}`: Curly braces containing the function body.

### Implicit Return Statements

The advantage of arrow functions are possible shorter notations when certain criteria apply:

1. Omit the round brackets around the parameters: This is possible, if there is only one input.

```js
const addOne = (number) => {
  return number + 1;
};
```

2. Implicit return statements: If the function consists only of a return statement, the curly
   brackets and the return keyword can be omitted.
   ```js
   const addNumbers = (first, second) => {
     return first + second;
   };
   ```
   can be rewritten as:
   ```js
   const addNumbers = (first, second) => first + second;
   ```

> 💡 Maybe you remember the syntax of the `addEventListener` method. We encountered these arrow
> functions there already!
>
> ```js
> button.addEventListener("click", () => {
>   // ...
> });
> ```

</details>

<details>
<summary>Callback Functions</summary>

A callback function is a function that is passed **as an argument** into another function to be executed later.

The outer function can execute this callback function at the correct moment or multiple times, for example:

- when an event is triggered
- when the fetched data arrived on your computer
- for each element in an array.

Callback functions are used whenever the program itself needs to determine **when** or **how many times** the function should be executed.

We already used callback functions in **event
listeners**:

```js
button.addEventListener("click", () => {
  console.log("Inside the callback function.");
});
```

Here the structure is as follows:

- outer function: `addEventListener()`
- first argument: `'click'`
- second argument: callback function
  ```js
  () => {
    console.log("Inside the callback function.");
  };
  ```
  > 💡 This type of function is called **anonymous function**, since it is declared without giving it a name.

### Named Callback Functions

You can also use named functions as callbacks by passing their names:

```js
function sayHello() {
  console.log("Hey Dude!");
}

button.addEventListener("click", sayHello);
```

> 💡 Notice that we pass `sayHello` without parentheses, which means we are passing a reference to the function itself. This allows the event listener to only call it when the event occurs.

### Higher Order Functions

A higher-order function is a function that takes a function as a parameter and calls it within its body.
For example, `addEventListener` takes a callback function to run when an event occurs:

```js
//         ↓ higher order function
button.addEventListener("click", () => {
  console.log("Button was clicked!");
});
```

We will encounter these higher order functions in future sessions:

- `.then`
- `.forEach`
- `.map`
- `.filter`

### Parameters in Callback Functions

Callback functions can have parameters. The higher order function gives these parameters to the callback. For example, to get event details:

```js
button.addEventListener("click", (event) => {
  console.log("This button was clicked:", event.target);
});
```

#### Resource

- [MDN docs: Callback Functions](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

</details>

---

## Resources

- [MDN docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript Info: Function Basics](https://javascript.info/function-basics)
- [Statements vs. Expressions by Josh W. Comeau](https://www.joshwcomeau.com/javascript/statements-vs-expressions/)
- [MDN docs: Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
