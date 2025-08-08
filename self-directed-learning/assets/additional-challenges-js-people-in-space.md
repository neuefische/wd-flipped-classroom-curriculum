# Additional Challenge: JavaScript Advanced

## 📡 People in Space 🚀

> Required Sessions:
>
> - JS Array Methods
> - JS Fetch
> - JS createElement

Let's build a website that displays the current number of people in space. Use the [Open Notify API](http://open-notify.org/Open-Notify-API/People-In-Space/) to retrieve this data.  
Hints are provided if you get stuck. Try to build as much as possible without looking at the hints.

1. Create a directory named `people-in-space` and add an `index.html`, `style.css` and `script.js` file.
    <details>
    <summary>🙈 Hint</summary>

   ```bash
   mkdir people-in-space
   cd people-in-space
   ```

   ```bash
   touch index.html style.css script.js
   ```

   </details>
   &nbsp;

2. Build the HTML skeleton and link the `style.css` and `script.js` files to your `index.html`. Run a “sanity check” to ensure both files are correctly linked by changing the background color in CSS and logging a message in JavaScript (make sure you can see the log in the developer tools of the browser).
      <details>
      <summary>🙈 Hint</summary>

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>People in Space</title>
       <link rel="stylesheet" href="style.css" />
       <script src="script.js" defer></script>
     </head>
     <body>
       <h1>People in Space:</h1>
     </body>
   </html>
   ```

   ```css
   /* style.css */
   body {
     background-color: #2d383a;
     color: white;
   }
   ```

   ```js
   // script.js
   console.log("Sanity check");
   ```

   </details>
   &nbsp;

3. Add a `span` element inside an `h1` tag in the HTML to display the current number of people in space.
   <details>
   <summary>🙈 Hint</summary>

   ```html
   <h1>
     People in Space:
     <span data-js="people-in-space">???</span>
   </h1>
   ```

    </details>
    &nbsp;

4. Grab a reference to the `span` element in the script file.
    <details>
    <summary>🙈 Hint</summary>

   ```js
   // script.js
   const peopleInSpace = document.querySelector("[data-js='people-in-space']");
   ```

    </details>
    &nbsp;

5. Write an `async` function that fetches data from the [Open Notify API](http://open-notify.org/Open-Notify-API/People-In-Space/) and logs it to the console.
   <details>
   <summary>🙈 Hint</summary>

   ```js
   // script.js
   async function getPeopleInSpace() {
     const response = await fetch("http://api.open-notify.org/astros.json");
     const data = await response.json();
     console.log("data: ", data);
   }
   getPeopleInSpace(); // don't forget to call the function
   ```

   </details>
   &nbsp;

6. Update the text content of the `span` element with the number of people currently in space.
    <details>
    <summary>🙈 Hint</summary>

   ```js
   // script.js
   async function getPeopleInSpace() {
     const response = await fetch("http://api.open-notify.org/astros.json");
     const data = await response.json();
     peopleInSpace.innerText = data.number;
   }
   getPeopleInSpace(); // don't forget to call the function
   ```

    </details>

**Congratulations!** 🚀 You now have a website that shows the current number of people in space.

**Bonus Features**

1. For an additional feature, consider adding a `ul` element to the page that dynamically updates with the names of the people currently in space. This information is provided in the API response. To achieve this, you will need to loop through an array, create DOM elements, update their content, and append these elements to the page.

2. For an **extra bonus**, you could enhance the page with three buttons: All, ISS, and Tiangong. When you click one of these buttons, the list should update to show only the people aboard the selected spacecraft. For example, clicking the ISS button should display only those on the ISS. You can make use of a specific array method we have covered to filter the list based on the spacecraft.

  <details>
  <summary>🙈 Hint</summary>

[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) would be a good array method to look at.

```js
const people = [
  {
    name: "Sergey Prokopyev",
    craft: "ISS",
  },
  {
    name: "Dmitry Petelin",
    craft: "ISS",
  },
  {
    name: "Frank Rubio",
    craft: "ISS",
  },
  {
    name: "Stephen Bowen",
    craft: "ISS",
  },
  {
    name: "Warren Hoburg",
    craft: "ISS",
  },
  {
    name: "Sultan Alneyadi",
    craft: "ISS",
  },
  {
    name: "Andrey Fedyaev",
    craft: "ISS",
  },
  {
    name: "Jing Haiping",
    craft: "Tiangong",
  },
  {
    name: "Gui Haichow",
    craft: "Tiangong",
  },
  {
    name: "Zhu Yangzhu",
    craft: "Tiangong",
  },
];
// e.g.
const peopleOnIss = people.filter((person) => person.craft === "ISS");

// The value of peopleOnIss would be:

// [
//     {
//         "name": "Sergey Prokopyev",
//         "craft": "ISS"
//     },
//     {
//         "name": "Dmitry Petelin",
//         "craft": "ISS"
//     },
//     {
//         "name": "Frank Rubio",
//         "craft": "ISS"
//     },
//     {
//         "name": "Stephen Bowen",
//         "craft": "ISS"
//     },
//     {
//         "name": "Warren Hoburg",
//         "craft": "ISS"
//     },
//     {
//         "name": "Sultan Alneyadi",
//         "craft": "ISS"
//     },
//     {
//         "name": "Andrey Fedyaev",
//         "craft": "ISS"
//     }
// ]
```

  </details>
