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
