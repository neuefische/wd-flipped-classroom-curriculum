# JS Modern Syntax

## Learning Objectives

- Understanding JavaScript as a developing programming language
- Destructuring assignment
- Rest and spread syntax

## Requirements

- JS Basics and Variables
- JS DOM and Events
- JS Functions
- JS Objects and Arrays

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-modern-syntax/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-modern-syntax/demo-end
```

---

## Session Guide

JavaScript is evolving regularly, and new syntax features are added to make coding more efficient and readable. In this session, we will learn about three modern JavaScript features: destructuring assignment, rest syntax, and spread syntax. These are widely used in modern JavaScript and particularly in React projects, making them essential tools for any developer.

> How can modern JavaScript syntax features like destructuring, rest, and spread help make your code cleaner and more efficient?

### Destructuring Assignment - Objects

- Explain the `destructuring assignment` in general:

  - It allows us to easily unpack properties from objects or values from arrays into distinct variables.
  - It does not mutate the original object or array.

- Explain `object destructuring`:
  - Remind students how to extract variables in the known way.
  - Destructure the object into its keys as variables.

```js
const tree = {
  name: "oak",
  age: 1200,
  scientificName: "quercus",
};

/*
const name = tree.name;
const age = tree.age;
const scientificName = tree.scientificName;
*/

const { name, age, scientificName } = tree;
```

#### Renaming the Variable

- Show how a property can be renamed while destructuring an object with a colon (`:`):

```js
const { name: colloquialName } = tree;
```

#### Default Value

- Show how to set a default value of a property with an equal sign (`=`):

```js
const { keepsLeavesInWinter = false } = tree;
```

#### Rest Syntax in Object Destructuring

- Explain that the rest syntax (`...`) can be used to collect all other properties and extract them into one variable:

```js
const { name, ...information } = tree;

console.log(information); // {age: 1200, scientificName: 'quercus',}
```

### Destructuring Assignment - Arrays

- Explain how `array destructuring` differs from `object destructuring`:
  - In an array, there is no key to be used as a variable name.
  - The variable name is set in the very moment of destructuring.
  - Its value depends on its index.

```js
const animals = ["Lion", "Tiger", "Penguin", "Bear", "Whale"];

const [lion, tiger, penguin, bear, whale] = animals;
```

#### Ignoring Values

- Show that values are ignored if there is no name at the specific index.

```js
const [lion, , penguin, bear, whale] = animals;

console.log(penguin);
console.log(tiger); // not defined
```

#### Rest Syntax in Array Destructuring

- Explain that the rest syntax (`...`) can be used to collect all other values and extract them into one variable:

```js
const [lion, tiger, penguin, ...rest] = animals;

console.log(lion);
console.log(tiger);
console.log(rest[1]); // 'Whale'
```

### Rest Syntax When Declaring Functions

- The rest syntax (`...`) collects all values given and returns an array containing these values. E.g., `(...args) => console.log(args)` → `args` is an array with all arguments passed to the function.
- Note that it's used for `destructuring assignments` or declaring function parameters.

```js
function showZooAnimals(...allAnimals) {
  console.log(allAnimals);
  return `My zoo consists of the following animals: ${allAnimals.join(", ")}.`;
}

console.log(showZooAnimals("Monkey", "Crocodil", "Pig"));
```

### Spread Syntax

- Mark the spread syntax as the opposite of the rest syntax:
  - It splits an array into its elements and makes them accessible.
  - It is used when declaring array / object literals or calling functions.

```js
console.log(showZooAnimals(lion, tiger, ...rest));

const newAnimals = ["Whale", "Dolphin", "Wolf"];

console.log(showZooAnimals(...newAnimals));
```

#### Spread: Add Another Value

- Show an example how to declare an array with the help of spread syntax.
  - Create a new array from the old one and add a new value at the end.

```js
const animalFood = ["Meat", "Apple", "Banana", "Carrot"];

const newAnimalFood = "Fish";

const allAnimalFood = [...animalFood, newAnimalFood];
```

#### Spread for Concatenating Two Arrays

- Similar to add a new value, use `spread syntax` to concatenate two arrays:

```js
const allMyAnimals = [...newAnimals, ...animals];

console.log(allMyAnimals);

console.log(showZooAnimals(...allMyAnimals));
```
