# Challenges - Self Directed Learning Week 3

Confused by JavaScript? Let's sort it out!

## Generate an email address

Write a function called `generateEmail` that accepts an object as the only parameter, and returns `<firstName>.<lastName>@example.com`, all in lowercase (e.g. in this case `jane.doe@example.com`).

- you have to access the first and last name of the object with the dot notation;
- you have to return a value from the function _and not_ log anything outside of it;
- you can check that your function is working like:

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

## Guess the first and last name from the email

Write a function that takes a string as parameter, and returns an object with `firstName` and `lastName` keys, guessed by the email.

Hint: `String.prototype.includes` and `String.prototype.split` are your friends!

```js
function getUserFromEmail(email) {
  // if the email does not contain a @, return null
  // if it does, split the email at @ and take the first entry in consideration
  // if such part does not have a ., return null
  // if it does, you know what you have to do!
}

// logs null
console.log(getUserFromEmail("not an email address"));

// logs null
console.log(getUserFromEmail("nodots@example.com"));

// logs { firstName: 'Jane', lastName: 'Doe' }
console.log(getUserFromEmail("jane.doe@example.com"));
```

## Bring it online

Let's use the first function first:

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

When the user submits the form, display the generated email in the `<span>` below the form.

Do the same for the other operation, this time with just one field of `type=email`, that populates a span with the guessed complete name of the user (e.g. Jane Doe).

[A possible solution can be found here](https://codesandbox.io/s/self-learning-email-solution-45sz7y?file=/src/index.js:0-2229).

## Bonus: function call order

To understand how a computer handles function calls, we have to think like one. Without going to deep in what a (call stack)[https://en.wikipedia.org/wiki/Call_stack] is, the general idea is that the nested function calls take precedence, much like mathematical expressions:

```
[(2 + 3) * 4] / (6 - 2)
```

First the operations between round parenthesis are evaluated, and replaced with their result:

```
[5 * 4] / 4
```

Then it's the turn of operation in square brackets:

```
20 / 4
```

And the last operation yields 5.

If we translate this to JavaScript with the aid of custom defined `sum`, `subtract`, `multiply` and `divide` functions, we have:

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

Like in the arithmetic process, the `sum()` and `subtract()` call are evaluated first, leaving us with:

```js
const result = divide(multiply(5, 4), 4);
```

Now we do the `multiply()`, and we obtain:

```js
const result = divide(20, 4);
```

That returns 5.

### Guessing Game Call Stack

Given the following code, can you tell the order of the console logs **without** running the code?

```js
let mealCount = 0;
let workedHours = 0;

wakeUp(9);

function wakeUp(time) {
  console.log("⏰ good morning!");
  if (time < 8) {
    eatBreakfast();
  }
  commute();
}

function commute() {
  console.log("🚴 reaching the office...");
  pretendToWork();
}

function goHome() {
  console.log("🚴 going back home...");
  if (mealCount === 2) {
    goToGym();
  } else {
    watchTV();
  }
}

function eatBreakfast() {
  console.log("☕ nice way to start the day!");
  mealCount++;
}

function eatLunch() {
  console.log("🥪 lunch with colleagues!");
  mealCount++;
}

function pretendToWork() {
  console.log("🛠️ being busy");
  workedHours = workedHours + 4;
  if (workedHours === 4) {
    eatLunch();
    pretendToWork();
  } else {
    goHome();
  }
}

function goToGym() {
  console.log("🏃‍♀️ keeping it fit");
}

function watchTV() {
  console.log("📺 let's call it a day");
}
```
