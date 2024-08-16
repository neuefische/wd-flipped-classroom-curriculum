# JS Variables and Numbers

## Learning Objectives

- Knowing the difference between `var`, `let` and `const`
- Understanding the different data types
- Using basic math operations

## Requirements

- JS Basics
- Basic math knowledge from school

## Demo

There is no pre-built demo for this session.

---

## Session Guide

Variables are a fundamental building block in programming that allow us to store and reuse values in our code. By understanding how to work with variables, you can write reusable logic that can be applied in different parts of your application. This is a key skill for creating efficient and maintainable code.

> How do you "remember" values in JavaScript, so that you can use them later on?

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
- **Boolean**: A binary value which is either true or false: `const isHungry=true;` or
  `const done=false;`
- **Null**: A value that represents the intentional absence of a value. Typically set by a
  developer.
- **Undefined**: A value that represents the absence of a value, because no value has been
  defined or given yet.

- There are two more data types: **BigInt** and **Symbol**. If the students are interested they
  can read about them in the handout or online.

- It is important not to accidentally mix up data types. This can lead to bugs (errors or
  unwanted behavior in our application), for example:

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

- `+=`: Increases the value of the variable
  ```js
  let balance = 20;
  balance += 5;
  console.log(balance); // will log 25
  ```
- `-=`: Decreases the value of the variable
  ```js
  let balance = 20;
  balance -= 5;
  console.log(balance); // will log 15
  ```
- `*=`: Multiplies the value of the variable
  ```js
  let price = 8;
  price *= 2;
  console.log(price); // will log 16
  ```
- `/=`: Divides the value of the variable
  ```js
  let price = 8;
  price /= 2;
  console.log(price); // will log 4
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
