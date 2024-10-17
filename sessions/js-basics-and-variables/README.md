# JS Basics and Variables

## Learning Objectives

- Understanding what JavaScript is
- Getting to know the JS console, working with `console.log()` / `console.clear()`
- Knowing the difference between `var`, `let` and `const`
- Understanding the different data types
- Using basic math operations

## Requirements

- HTML Basics
- CSS Basics
- CSS Selectors
- Basic math knowledge from school

## Demo

There is no pre-built demo for this session. We use `node.js` to execute JavaScript by itself.

---

## Session Guide

JavaScript is a key technology that brings interactivity and dynamics to a website. It is one of the most in-demand programming languages, essential for full-stack web developers. Understanding JavaScript is fundamental, as it forms the basis of many popular development libraries and frameworks. In this session, you will get an idea of the power (and the pitfalls) of JavaScript.

> What is a programming language and how can I give a computer instructions?

### Short Introduction of What JavaScript Is (5 min max)

- Explain briefly what a programming language is:
  - List of instructions, similar to a recipe, that a computer executes one after another.
  - Each line is build up by syntax elements which need to be combined in the correct way to form statements that the computer can understand.
  - With concepts like variables or functions we can reduce repetition and store information temporarily as long as the program runs.
  - When the last line of the program is finished, the program is closed.
- Explain **ECMAScript 6**:
  - ECMAScript is the JavaScript standard.
  - ECMAScript 6 is the second major revision to JavaScript and was published in 2015.

### Console

- In an empty folder, create a new file `index.js` and open it.
- Show the very first syntax elements to the students and highlight that they need to be combined correctly, otherwise the computer cannot run the command.
- Write the following log and execute it with `node.js`:

```js
console.log("Hello World!"); // logs into console
```

- Explain, that `node.js` is a program which can understand JavaScript and executes the command we give it.
- Show that the text `Hello World` is displayed in the console.
- Show some more examples:

```js
console.clear(); // clears console
console.error("Error!"); // logs as error into console
```

- Explain that we can use the console for debugging or error logging.

### Variables

- Variables are a storage for values.
- We can declare variables and then use them as if they were the values themselves:
  - We don't have to remember the values.
  - Different parts of our application can exchange the values behind variables, so the code works for every value (we don't have to write new code, only if a value changes e.g., some user input).
- We can declare a variable using the **const** keyword:

```js
const myNumber = 42;
console.log(myNumber);
```

- The **const** keyword is used to declare variables that cannot change their value. Use it per default.

- If you need to change the value of a variable, use the **let** keyword:

```js
let myMutableNumber = 42;
console.log(myMutableNumber);
myMutableNumber = myMutableNumber + 1;
console.log(myMutableNumber);
```

- The interpreter (a piece of software running in the browser) executes JavaScript line by line.

### Variable Naming

- Use camelCase: `myMutableNumber` instead of `mymutablenumber` or `my-mutable-number`.
- Use descriptive names and don't shorten words: `followButton` instead of `flwBtn`.

### Primitive Data Types

- In JavaScript there are 7 different primitive data types:

- **String**: A sequence of characters, for example: `const name="max";`
- **Number**: A number, for example: `const length=42;` or `const price=4.95;`
- **Boolean**: A binary value which is either true or false: `const isHungry=true;` or `const done=false;`
- **Null**: A value that represents the intentional absence of a value. Typically set by a developer.
- **Undefined**: A value that represents the absence of a value, because no value has been defined or given yet.

- There are two more data types: **BigInt** and **Symbol**. If the students are interested they can read about them in the handout or online.

- It is important not to accidentally mix up data types. This can lead to bugs (errors or unwanted behavior in our application), for example:

```js
const oneTimeFee = "5";
const monthlyFee = 12;
const amountToBeCharged = oneTimeFee + monthlyFee; // result will be "512"
console.log(amountToBeCharged);
```

### Mathematical Operators

- `+`: Adds numbers
  ```js
  const oneTimeFee = 5;
  const monthlyFee = 12;
  const amountToBeCharged = oneTimeFee + monthlyFee; // result will be 17
  console.log(amountToBeCharged);
  ```
- `-`: Subtracts numbers
  ```js
  const mortgageSum = 20000;
  const alreadyPayed = 5000;
  const amountToBePayed = mortgageSum - alreadyPayed; // result will be 15000
  console.log(amountToBePayed);
  ```
- `*`: Multiplies numbers
  ```js
  const length = 4;
  const width = 5;
  const area = length * width; // result will be 20
  console.log(area);
  ```
- `/`: Divides numbers
  ```js
  const students = 15;
  const groups = 3;
  const studentsPerGroup = students / groups; // result will be 3
  console.log(studentsPerGroup);
  ```
- `**`: Raises a number to the power of another number
  ```js
  console.log(2 ** 10); // will log 1024
  ```
- `%`: Returns the remainder of a division of two whole numbers
  ```js
  console.log(8 % 3); // will log 2
  ```

### Assignment Operators

- `=`: As shown before stores the value on the right in the variable on the left.
- `+=`: Increases the value of the variable left to the operator:
  ```js
  let balance = 20;
  balance += 5;
  console.log(balance); // will log 25
  ```
- `-=`: Decreases the value of the variable left to the operator:
  ```js
  let balance = 20;
  balance -= 5;
  console.log(balance); // will log 15
  ```
- `++`: Increments the value of the variable by 1
  ```js
  let price = 8;
  price++;
  console.log(price); // will log 9
  ```
- `--`: Decrements the value of the variable by 1
  ```js
  let price = 8;
  price--;
  console.log(price); // will log 7
  ```
