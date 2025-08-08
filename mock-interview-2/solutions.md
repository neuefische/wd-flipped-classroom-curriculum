# Solutions: CodeWars Challanges

## [Problem 1](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript)

```js
function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }

  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
```

## [Problem 2](https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript)

```js
function count(string) {
  const charCount = {};

  for (let char of string) {
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}
```

## [Problem 3](https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript)

```js
function cakes(recipe, available) {
  let maxCakes = Infinity;

  for (const ingredient in recipe) {
    if (ingredient in available) {
      maxCakes = Math.min(
        maxCakes,
        Math.floor(available[ingredient] / recipe[ingredient])
      );
    } else {
      return 0;
    }
  }

  return maxCakes;
}
```

## [Problem 4](https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript)

```js
function toCamelCase(str) {
  return str
    .split(/[-_]/) // Split the string by dash or underscore
    .map((word, index) => {
      if (index === 0) {
        return word; // Keep the first word as is
      }
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of subsequent words
    })
    .join(""); // Join the words back together without spaces
}
```

## [Problem 5](https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript)

```js
function twoSum(nums, target) {
  // create an empty object to store the complements
  let map = {};

  // iterate over the array of nums
  for (let i = 0; i < nums.length; i++) {
    // calculate the complement
    let complement = target - nums[i];

    // check if the complement exists in the map
    if (complement in map) {
      // return the indices of the two numbers
      return [map[complement], i];
    }

    // store the index of the current number in the map
    map[nums[i]] = i;
  }
}
```

OR

```js
function twoSum(nums, target) {
  // iterate over the array
  for (let i = 0; i < nums.length; i++) {
    // for each element, check if there's another element that adds up to the target
    for (let j = i + 1; j < nums.length; j++) {
      // if the sum of nums[i] and nums[j] equals the target
      if (nums[i] + nums[j] === target) {
        // return their indices
        return [i, j];
      }
    }
  }
}
```

## [Problem 6](https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript)

```js
const menuItems = [
  "Burger",
  "Fries",
  "Chicken",
  "Pizza",
  "Sandwich",
  "Onionrings",
  "Milkshake",
  "Coke",
];

function GetOrder(input) {
  const orders = [];

  menuItems.forEach((dish) => {
    input.replaceAll(dish.toLowerCase(), () => {
      // function runs for each replacement aka match
      orders.push(dish);
    });
  });

  return orders.join(" ");
}

function getOrderVariant2(input) {
  const orders = [];

  menuItems.forEach((dish) => {
    for (const _match of input.matchAll(dish.toLowerCase())) {
      orders.push(dish);
    }
  });

  return orders.join(" ");
}

function getOrderVariant3(input) {
  return menuItems
    .flatMap((dish) =>
      [...input.matchAll(dish.toLowerCase())].map((item) => dish)
    )
    .join(" ");
}
```
