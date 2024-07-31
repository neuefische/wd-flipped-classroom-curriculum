# JS Modern Syntax

## Learning objectives

- understanding JS as a developing programming language
- destructuring assignment
- rest and spread syntax

---

JS is evolving on a regular basis. There are modern syntax additions which come in quite handy, as
`destructuring assignment`, `rest syntax` and `spread syntax`.

### Why is the content of today's block that important for the students?

The `destructuring assignment`, the `rest syntax` and the `spread syntax` are very useful features
to make the code more readable. Besides, they are widely used in modern JavaScript and, in
particular, React projects.

### Question

---

### Required

- JS Basics
- JS Variables and Functions
- JS Objects and Arrays

---

## Session Guide

- Note that JavaScript is a developing language and new features are added continuously.
- Name the latest features students will learn in this session: `destructuring assignment`,
  `rest syntax`, and `spread syntax`.

Demo Start:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-modern-syntax/demo-start
```

Demo End:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-modern-syntax/demo-end
```

### Destructuring Assignment - Objects

- Explain the `destructuring assignment` in general:

  - easily unpack properties from objects or values from arrays into distinct variables
  - does not mutate the original object or array

- Explain `object destructuring`:
  - remind students how to extract variables in the known way
  - destructure the object into its keys as variables

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

#### Renaming the variable

- Show how a property can be renamed while destructuring an object with a colon (`:`) :

```js
const { name: colloquialName } = tree;
```

#### Default value

- Show how to set a default value of a property with an equal sign (`=`):

```js
const { keepsLeavesInWinter = false } = tree;
```

#### Rest syntax in object destructuring

- Explain that the rest syntax(`...`) can be used to collect all other properties and extract
  them into one variable:

```js
const { name, ...information } = tree;

console.log(information); // {age: 1200, scientificName: 'quercus',}
```

---

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

#### Rest syntax in array destructuring

- Explain that the rest syntax (`...`) can be used to collect all other values and extract them
  into one variable:

```js
const [lion, tiger, penguin, ...rest] = animals;

console.log(lion);
console.log(tiger);
console.log(rest[1]); // 'Whale'
```

---

### Rest Syntax when Declaring Functions

- The rest syntax (`...`) collects all values given and returns an array containing these
  values. E.g. `(...args) => console.log(args)` → `args` is an array with all arguments passed
  to the function.
- Note that it's used for `destructuring assignments` or declaring function parameters.

```js
function showZooAnimals(...allAnimals) {
  console.log(allAnimals);
  return `My zoo consists of the following animals: ${allAnimals.join(", ")}.`;
}

console.log(showZooAnimals("Monkey", "Crocodil", "Pig"));
```

---

### Spread Syntax

- Mark the spread syntax as the opposite of the rest syntax:
  - splits an array into its elements and makes them accessible
  - used when declaring array / object literals or calling functions.

```js
console.log(showZooAnimals(lion, tiger, ...rest));

const newAnimals = ["Whale", "Dolphin", "Wolf"];

console.log(showZooAnimals(...newAnimals));
```

#### Spread: Add another value

- Show an example how to declare an array with the help of spread syntax.
  - Create a new array from the old one and add a new value at the end.

```js
const animalFood = ["Meat", "Apple", "Banana", "Carrot"];

const newAnimalFood = "Fish";

const allAnimalFood = [...animalFood, newAnimalFood];
```

#### Spread for concatenating two arrays

- Similar to add a new value, use `spread syntax` to concatenate two arrays:

```js
const allMyAnimals = [...newAnimals, ...animals];

console.log(allMyAnimals);

console.log(showZooAnimals(...allMyAnimals));
```

---
