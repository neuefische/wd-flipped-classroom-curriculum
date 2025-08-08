# Additional Challenge: React

## 📡 People in Space 🚀

> Required Sessions:
>
> - React Basics
> - React State 1-3
> - React Effects and Fetch

Let's build a website that displays the current number of people in space. Use the [Open Notify API](http://open-notify.org/Open-Notify-API/People-In-Space/) to retrieve this data.  
Hints are provided if you get stuck. Try to build as much as possible without looking at the hints.

1. Create a new React project using `npm create vite@latest`. Change into the new directory that gets created and don't forget to install the packages.
    <details>
    <summary>🙈 Hint</summary>

   ```bash
   npm create vite@latest people-in-space-react
   cd people-in-space-react
   npm i

   ```

   </details>
   &nbsp;

2. Start the dev server.
      <details>
      <summary>🙈 Hint</summary>

   ```bash
   npm run dev
   ```

   </details>
   &nbsp;

3. Add an element to display the current number of people in space. Keep track of the number of people in space via state. Set the initial value to 0 for now.
   <details>
   <summary>🙈 Hint</summary>

   ```js
   import { useState } from "react";
   import "./App.css";

   function App() {
     const [numberInSpace, setNumberInSpace] = useState(0);

     return (
       <main>
         <h1>People in Space: {numberInSpace}</h1>
       </main>
     );
   }

   export default App;
   ```

    </details>
    &nbsp;

4. Fetch the data from the [Open Notify API](http://open-notify.org/Open-Notify-API/People-In-Space/). This is where another React hook comes in handy, as fetching data from an external source is considered a side effect. Remember to call `setPeopleInSpace` after fetching the data.
   <details>
   <summary>🙈 Hint</summary>

   ```js
   import { useEffect, useState } from "react";
   import "./App.css";

   function App() {
     const [numberInSpace, setNumberInSpace] = useState(0);

     useEffect(() => {
       async function fetchPeopleInSpace() {
         const response = await fetch("http://api.open-notify.org/astros.json");
         const data = await response.json();
         setNumberInSpace(data.number);
       }
       fetchPeopleInSpace();
     }, []);

     return (
       <main>
         <h1>People in Space: {numberInSpace}</h1>
       </main>
     );
   }

   export default App;
   ```

   </details>
   &nbsp;

**Congratulations!** 🚀 You now have a React app that displays the current number of people in space.

**Bonus Features**

1. For an additional feature, consider adding a `ul` element to the page that dynamically updates with the names of the people currently in space. This information is provided in the API response. You will likely want to create another state variable, and then loop over the array in React to display the data.

  <details>
  <summary>🙈 Hint</summary>

```js
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);
  const [peopleInSpace, setPeopleInSpace] = useState([]);

  useEffect(() => {
    async function fetchPeopleInSpace() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      setNumberInSpace(data.number);
      setPeopleInSpace(data.people);
    }
    fetchPeopleInSpace();
  }, []);

  return (
    <main>
      <h1>People in Space: {numberInSpace}</h1>
      {peopleInSpace.length > 0 && (
        <ul>
          {peopleInSpace.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
```

  </details>
      &nbsp;

2. For an **extra bonus**, you could enhance the page with three buttons: All, ISS, and Tiangong. When you click one of these buttons, the list should update to show only the people aboard the selected spacecraft. For example, clicking the ISS button should display only those on the ISS. You can make use of a specific array method we have covered to filter the list based on the spacecraft.

  <details>
  <summary>🙈 Hint</summary>

There are several ways we could achieve this. Here is one possible solution.

```js
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);
  const [peopleInSpace, setPeopleInSpace] = useState([]);
  const [activeCraft, setActiveCraft] = useState("All");

  useEffect(() => {
    async function fetchPeopleInSpace() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      setNumberInSpace(data.number);
      setPeopleInSpace(data.people);
    }
    fetchPeopleInSpace();
  }, []);

  const filteredPeople =
    activeCraft === "All"
      ? peopleInSpace
      : peopleInSpace.filter((person) => person.craft === activeCraft);

  return (
    <main>
      <h1>People in Space: {numberInSpace}</h1>
      <h2>Craft: {activeCraft}</h2>
      <button type="button" onClick={() => setActiveCraft("All")}>
        All
      </button>
      <button type="button" onClick={() => setActiveCraft("ISS")}>
        ISS
      </button>
      <button type="button" onClick={() => setActiveCraft("Tiangong")}>
        Tiangong
      </button>
      {filteredPeople.length > 0 && (
        <ul>
          {filteredPeople.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
```

  </details>
