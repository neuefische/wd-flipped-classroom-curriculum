# Backend Create

## Learning Objectives

- Understanding CRUD and REST APIs
- Building a Create REST API route

## Requirements

- Backend API Routes
- Backend MongoDB
- Backend Read

## Demo

### Start

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/backend-create/demo-start
```

### End

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/backend-create/demo-end
```

---

## Session Guide

Today, we’ll start implementing a method to add new jokes to our application. Creating data is a fundamental part of CRUD operations (Create, Read, Update, Delete), which are essential for managing a dynamic and interactive application.

> How can you implement a feature that allows you to create new jokes and send them to the `jokes` collection of your `jokes-database`?

### GET vs. POST and CRUD Operations

- Remind the students that they've already built a `GET` API route as part of the _Backend Read_
  session.
- Inform them that the next step would be building a `POST` API route.
- Remind students of the different [CRUD operations using this overview](./assets/CRUD.md).
- _Briefly_ remind the students of what a REST API is:
  - REST is short for "Representational State Transfer".
  - It refers to architectural principles and constraints how to structure your API.

> 💡 This is a very basic and incomplete explanation. If you're interested in learning more about what makes an API RESTful, you can read about it [here](https://restfulapi.net/).

### Prepare Backend Database

To start with the database, open MongoDB Atlas and if you not have done so in the Backend MongoDB or the Backend Read session, create:

- A database called _jokes-database_
- A collection called _jokes_
- [Copy the jokes data](assets/data.json) into your _jokes_ collection by pasting it into the _Insert Document_ window using the view `{}`.

### Building a `POST` API Route

- Navigate to `pages/api/index.js`.
- Implement the code below just under your `GET` request.
- Keep in mind that you don't need to include the comments, they're simply an additional guide.

```js
//pages/api/index.js

if (request.method === "POST") {
  const jokeData = request.body;
  await Joke.create(jokeData);

  response.status(201).json({ status: "Joke created" });
  return;
}

response.status(405).json({ status: "Method not allowed." });
```

[Final stage of the code without comments](https://github.com/wd-bootcamp/web-exercises/blob/main/sessions/backend-create/demo-end/pages/api/jokes/index.js).

> 💡 Note: Since this is the implementation of just the route, it isn't "doing anything" yet. Imagine building a tunnel that isn't currently connected to a road carrying traffic.

- Explain that the general concept is quite similar to our `GET` method.
- Keep in mind that theoretically anyone could post a joke to your database at this point, since there's no authorization process and the route isn't secure. We're choosing to ignore this for now.

### Building a Form

- Note that we need to build a form to enable our user to submit a joke.
- Create the file structure `components/JokeForm/index.js` and add a form like this:

```js
//components/JokeForm/index.js

export default function JokeForm() {
  return (
    <form>
      <label htmlFor="joke-input">Enter a new joke</label>
      <input type="text" id="joke-input" name="joke" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

- Navigate to the `pages/index.js` and render your `JokeForm`:

```js
// pages/index.js
import useSWR from "swr";
import Link from "next/link";
import JokeForm from "@/components/JokeForm";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/jokes");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <JokeForm />
      <ul>
        {data.map((joke) => (
          <li key={joke._id}>
            <Link href={`/${joke._id}`}>{joke.joke}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
```

- Remind the students that, at this point, the form isn't quite functional yet.

### Connecting the `JokeForm` to your `POST` API Route

- Explain that we plan to mutate the jokes state.
- Quickly remind the students about what mutating a state means:
  - We are changing the content of a state, e.g., adding an item to a list.
  - Each element in our app that uses this state needs to be updated to reflect this change.
- Therefore we need to perform two actions:
  1. Sending a request to a specific endpoint for creating a new entry.
  2. Revalidating the data from this specific endpoint in any place of the app where the endpoint is used.
- We are going to use `fetch` for sending the `POST` request to the endpoint and `mutate` from the `useSWR` hook for revalidation
- Write the `handleSubmit` function for our form as follows:

```js
export default function JokeForm() {
  const { mutate } = useSWR("/api/jokes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    const response = await fetch("/api/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jokeData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return; //...
}
```

- Explain that the `useSWR` provides us next to `data`,`isLoading` and `error` with a method called `mutate`.
- If `mutate` is called, swr refetches the data for the respective endpoint and triggers a rerender of all components which use this endpoint.
- Explain what the options mean, that we provide for the `fetch` call:
  - `method`: Defines what kind of fetch we will perform.
  - `headers` - `"Content-Type"`: Informs the server about what kind of data we will send.
  - `body`: The data we send to the server transformed into a string.
- Highlight, that our `jokeData` now is send to our API and then is passed to mongoose which adds the joke to our database.
- If this fetch was successful, we call `mutate` and trigger the revalidation of the jokes array.
- Show that you can now submit jokes via your `JokeForm` and that the `JokeList` gets updated automatically.

> 💡 Note: In the following _Backend Update and Delete_ session, we're going to reuse the `JokeForm` to update a database entry.
