# JS Objects and Arrays

## Learning objectives

- Creating, accessing, and manipulating arrays
- Creating, accessing, and manipulating objects
- Knowing how to find properties and methods of objects by logging

---

### Why is the content of today's block that important for the students?

- Working with objects and arrays is a fundamental building block for writing complex logic
- Objects or arrays are almost always used when data is being fetched from an API

---

### Required

- Variables
- Primitive types in JavaScript

---

## Session Guide

> 💡 Since this session revolves purely around Javascript, feel free to either create a vanilla Javascript file manually or use the template below.

#### Terminal

```bash
cd path/to/my/directory
touch script.js
code .
node script.js
```

#### Template

```bash
npx ghcd@latest neuefische/web-exercises/tree/main/templates/js-with-node my-app
```

---

### Arrays

- Store multiple values in one variable
- Special Object
- Access not by key but by **index**

### Declaring and reading from Arrays

- You can declare an array using array literals:

  ```js
  const shoppingList = ["apple", "tomato"];
  console.log(shoppingList);
  ```

- Each item in the array has an index, which starts at 0
- You can access individual items using the bracket notation and the item's index:

  ```js
  console.log(shoppingList[0]);
  console.log(shoppingList[1]);
  ```

- You can get the length of an array using the length property:

  ```js
  console.log(shoppingList.length);
  ```

- Arrays can contain different types of values:

  ```js
  const diverseArray = [1, 2, "hello", false];
  const complexArray = [1, 2, ["hello", false], true];
  ```

- Arrays with mixed types can be confusing to use. It is generally a good idea to use arrays with only one type of value unless you have a good reason to do otherwise.
- Nested arrays can be accessed as follows:

  ```js
  console.log(complexArray[2][1]);
  ```

### Manipulating Arrays

- You can overwrite individual values in an array:

  ```js
  const shoppingList = ["apple", "tomato"];
  shoppingList[0] = "banana";
  console.log(shoppingList);
  ```

- You can add an element (or multiple elements) to the end of an array:

  ```js
  shoppingList.push("orange");
  console.log(shoppingList);
  ```

- You can remove an element from the end of an array:

  ```js
  shoppingList.pop();
  console.log(shoppingList);
  ```

## Instructions on how to set up the challenge locally

> 💡 The challenges are verified through tests, so it's beneficial to provide brief instructions on how to set up the challenge locally with npm and how to run these tests. Optionally, a brief overview of Node.js and npm can also be included.

1. Clone the Challenge Directory Locally

- Use the `npx command` specified for the challenge to clone the directory.

2. Install Project Dependencies

- Run `npm install` or `npm i`.
- This reads the `package.json` file and installs all the necessary dependencies listed under `dependencies` and `devDependencies`.
- 💡 Note: `npm` is the `Node.js` package manager, used for managing libraries and tools.

3. Start the Local Development Server
   - Use the command `npm run start`.
   - This command starts a local development server, making the application accessible via a web browser.
   - The exact action depends on the scripts defined in the `package.json` file.
4. Run Tests
   - Use the command `npm run test`.
   - This command is used to run unit tests, integration tests, etc.
   - The exact action depends on the scripts defined in the `package.json` file.

### Challenge 1

Instruct the students to solve **Challenge 1** before proceeding with the session. The remaining challenges should be worked on after the session.

### Objects

- Objects store properties (key / value pairs)
- Some objects you already know are: `document`, `event`, queried dom elements
- Log an object in the dev-tools visiting a website like wikipedia

#### Declaring and reading from Objects

- You can declare an object using an object initializer:

  ```js
  const person = {
    name: "Max Blub",
    age: 21,
    isStudent: false,
  };
  ```

- You can access the properties using the dot notation:

  ```js
  console.log(person.name);
  ```

- You can access the properties using the bracket notation:

  ```js
  console.log(person["name"]);
  ```

- Objects can be nested:

  ```js
  const person = {
    name: "Max Blub",
    age: 21,
    isStudent: false,
    address: {
      street: "Berliner Str.",
      houseNumber: 42,
      city: "Leipzig",
      zipCode: "12345",
    },
  };
  ```

- Nested values can be accessed like this:

  ```js
  console.log(person.address.street);
  ```

#### Manipulating Objects

- You can change values of object properties by reassigning them using the dot or bracket
  notation:

  ```js
  person.name = "Max Bla";
  console.log(person.name);
  person["name"] = "Max Blub"; // omit
  console.log(person.name); // omit
  ```

- You can add properties in the same way:

  ```js
  person.score = 15;
  console.log(person);
  ```

- You can delete properties using the delete keyword:

  ```js
  delete person.score;
  console.log(person);
  ```

### Nested Objects / Arrays

- Arrays can contain objects and vice versa:

  ```js
  const peopleArray = [
    {
      name: "John",
      age: 22,
    },
    {
      name: "Alex",
      age: 33,
    },
  ];
  ```

  ```js
  const user = {
    userId: "1234",
    mail: "test@mail.com",
    shoppingCart: ["tomato", "banana", "chocolate"],
  };
  ```

- Access elements via chained dot / bracket notation:

  ```js
  console.log(peopleArray[1].name); // "Alex"
  console.log(user.shoppingCart[0]); // "tomato"
  ```

---
