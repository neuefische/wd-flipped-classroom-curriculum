# Additional Challenges: JavaScript Fundamentals

Confused by JavaScript? Let's sort it out!

## Variables

> Required Sessions:
>
> - JS Basics and Variables
> - JS Events and DOM
> - JS Conditions and Booleans

- List the JavaScript data types you know. Why would you choose one type over another?
- What’s the difference between the `let` and `const` keywords?

## Truthiness and Falsiness

> Required Sessions:
>
> - JS Basics and Variables
> - JS Events and DOM
> - JS Conditions and Booleans

Explore which values behave like `true`. Consider the following example:

```js
const isRaining = true;

if (isRaining) {
  console.log("Let's carry an umbrella!");
}
```

The `isRaining` variable holds the `true` value, which passes the `if(isRaining)` condition.

What happens with a general string like this?

```js
const myName = "Jane";

if (myName) {
  console.log("My name is ", myName);
}
```

Now test various values:

- `false`
- `'false'`
- `''`
- Positive numbers
- Negative numbers
- The number 0
- `null`
- `undefined`

Discuss your observations with your group.

## Generate an Email Address

> Required Sessions:
>
> - JS Functions
> - JS Objects and Arrays
> - JS Forms

Write a function called `generateEmail` that takes an object as the only parameter and returns `<firstName>.<lastName>@example.com` in lowercase (e.g., `jane.doe@example.com`).

- Access the first and last name of the object with dot notation.
- Return the value from the function without logging anything outside of it.
- Check that your function is working with the following:

```js
function generateEmail(...) {
  // function implementation
}

const newUser = {
  firstName: 'Jane',
  lastName: 'Doe',
}

const email = generateEmail(...);
console.log(email);
```

### Guess the First and Last Name from the Email

Write a function that takes a string as a parameter and returns an object with `firstName` and `lastName` keys, based on the email.

Hint: `String.prototype.includes` and `String.prototype.split` might be useful!

```js
function getUserFromEmail(email) {
  // if the email does not contain an @, return null
  // if it does, split the email at @ and use the first part
  // if the part does not have a ., return null
  // if it does, you know what to do!
}

// logs null
console.log(getUserFromEmail("not an email address"));

// logs null
console.log(getUserFromEmail("nodots@example.com"));

// logs { firstName: 'Jane', lastName: 'Doe' }
console.log(getUserFromEmail("jane.doe@example.com"));
```

### Make It Interactive

Let's use the `generateEmail` function:

```html
<form>
  <label for="firstName">First Name</label>
  <input name="firstName" id="firstName" required />
  <label for="lastName">Last Name</label>
  <input name="lastName" id="lastName" required />
  <button>Generate Email</button>
</form>
<span data-js="generated-email">...</span>
```

Display the generated email in the `<span>` below the form when the user submits the form.

Do the same for the other operation, this time with just one field of `type=email`, that populates a `span` with the guessed complete name of the user (e.g., Jane Doe).

[A possible solution can be found here](https://codesandbox.io/s/self-learning-email-solution-45sz7y?file=/src/index.js:0-2229).

## Function Call Order

> Required Sessions:
>
> - JS Functions

To understand how computers handle function calls, think like one. Without diving to deeply into the [call stack](https://en.wikipedia.org/wiki/Call_stack), the idea is that nested function calls take precedence, similar to mathematical expressions:

```js
[(2 + 3) * 4] / (6 - 2);
```

First, the operations within parentheses are evaluated and replaced with their result:

```js
[5 * 4] / 4;
```

Then the operation in square brackets:

```js
20 / 4;
```

And the final operation yields 5.

If we translate this to JavaScript using custom `sum`, `subtract`, `multiply`, and `divide` functions, we have:

```js
function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const result = divide(multiply(sum(2, 3), 4), subtract(6, 2));

console.log(result); // logs 5
```

Like in the arithmetic process, the `sum()` and `subtract()` calls are evaluated first, leaving us with:

```js
const result = divide(multiply(5, 4), 4);
```

Now we do the `multiply()`, and we obtain:

```js
const result = divide(20, 4);
```

That returns 5.

### Guessing Game Call Stack

**Without** running the code, can you tell the order of the console logs?

```js
let mealCount = 0;
let workedHours = 0;

wakeUp(9);

function wakeUp(time) {
  console.log("⏰ Good morning!");
  if (time < 8) {
    eatBreakfast();
  }
  commute();
}

function commute() {
  console.log("🚴 Reaching the office...");
  pretendToWork();
}

function goHome() {
  console.log("🚴 Going back home...");
  if (mealCount === 2) {
    goToGym();
  } else {
    watchTV();
  }
}

function eatBreakfast() {
  console.log("☕ Nice way to start the day!");
  mealCount++;
}

function eatLunch() {
  console.log("🥪 Lunch with colleagues!");
  mealCount++;
}

function pretendToWork() {
  console.log("🛠️ Being busy.");
  workedHours = workedHours + 4;
  if (workedHours === 4) {
    eatLunch();
    pretendToWork();
  } else {
    goHome();
  }
}

function goToGym() {
  console.log("🏃‍♀️ Keeping it fit.");
}

function watchTV() {
  console.log("📺 Let's call it a day.");
}
```
