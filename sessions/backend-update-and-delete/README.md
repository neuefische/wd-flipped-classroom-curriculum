# Backend Update and Delete

## Learning Objectives

- Understanding the Update and Delete part of CRUD operations
- Implementing `UPDATE` and `DELETE` API routes

## Requirements

- Backend API Routes
- Backend MongoDB
- Backend Read
- Backend Create

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-update-and-delete/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-update-and-delete/demo-end
```

> 💡 Note: Ensure your MongoDB Atlas database is set up and contains the necessary data.You'll find data you can use in the `assets` folder of this session. If you'd prefer a step by step setup guide, feel free to take a look at the session _[Backend Read](../backend-read/)_.  
> Please also make sure you have an `.env.local` file containing `MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-name>/jokes-database?retryWrites=true&w=majority`. If you do not have it already, please create it at the root level of your file structure.

---

## Session Guide

Today, we’ll extend our backend functionality by adding methods to update and delete data. These operations complete the CRUD cycle (Create, Read, Update, Delete), which is fundamental for managing data in any application.

> How can you update your data and how can you delete data points?

### CRUD: The U and D

- Remind the students that they have successfully created `READ` and `POST` API routes.
- Explain that we need two additional CRUD operations to reach full functionality: `Update` and `Delete`.
- Highlight that the UI components for handling these two cases have already been created.
- Give the students a quick overview about the new code.

### Reduce, Reuse, Recycle - Reusing the `JokeForm` Component

- We've chosen to reuse our `JokeForm` component for editing jokes as part of the `Joke` component.
- We've **already refactored the code** for reusing the form.

#### `JokeForm` as a Dumb Component

- Navigate to the `index.js` of the `JokeForm` component.
- Show the students that all functional logic has been removed from this component.
- Instead, three props are passed to the component: `onSubmit`, `value`, and `isEditMode`.
- Highlight, that we can now specify the behavior of this Form via these props and that such a component is called "dumb", since it has no internal logic.

#### `JokeForm` for Creating Jokes

- Navigate to the `pages/index.js` page file.
- Highlight that the functionality for creating a joke has been moved here:

  - The `useSWR` hook.
  - The `handleSubmit` function which is passed to our generalized `JokeForm`.

- Point out that the form will behave just like in the previous session, only that the logic is defined in a different place.

#### `JokeForm` for Editing Jokes

- Navigate to the `pages/[id].js`.
- Give a quick overview over the added content of this component:

  - Two buttons for editing and deleting jokes.
  - Two handler functions `handleEdit` and `handleDelete`.
  - The `JokeForm` component receiving the `handleEdit` function as `onSubmit` and the current joke as the `value` prop.
  - A local state `isEditMode` which toggles the rendering of the `JokeForm`.

- Highlight that we can now program a different behavior for our `JokeForm` in the `handleEdit` function which will be triggered if this instance of the `JokeForm` is submitted.

### Implementing the Update API Endpoint

- Navigate to the `/pages/api/[id].js` file.
- Implement the code below as part of a `PUT` HTTP request method in your API routes.
- The comments included in the code are an additional guide and need not be shown to the students.

```js
// /api/jokes/[id].js

if (request.method === "PUT") {
  const updatedJoke = request.body;
  await Joke.findByIdAndUpdate(id, updatedJoke);
  // ... find our joke by its ID and update the content that is part of the request body!
  response.status(200).json({ message: "Success!" });
  // If successful, we'll receive an OK status code.
  return;
  // We return to end the execution of the function.
}
```

- Optional: Explain the difference between `PUT` and `PATCH`.

  > 💡 Note: `PUT` and `PATCH` are semantically different. According to convention, we would use `PUT` to update our entire document, and `PATCH` to update individual fields. In our demo, we're using `PUT`, simply because we only ever have _one_ field to update.

- Now navigate back to the `/pages/[id].js` to connect the UI to our new API endpoint.
- We want to send a `PUT` request to our new API endpoint with fetch, similar to our `POST` request we send when we create a joke.
- Since updating an existing joke means we are going to mutate this joke data, we need to destructure `mutate` and call it after we've updated the joke to reflect the changes in the app.

- Implement the code below:

```js
// /pages/[id].js
const { data, isLoading, mutate } = useSWR(`/api/jokes/${id}`);

async function handleEdit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const jokeData = Object.fromEntries(formData);

  const response = await fetch(`/api/jokes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeData),
  });

  if (response.ok) {
    mutate();
  }
}
```

### Implementing the DELETE API Route

- Navigate to `api/jokes/[id].js`.
- Include the logic required for our `DELETE` request method.

```js
if (request.method === "DELETE") {
  await Joke.findByIdAndDelete(id);
  // This line handles the entire deletion process.
  response.status(200).json({ message: "Success!" });
  return;
}
```

- Navigate to `pages/[id].js`.
- Complete the `handleDelete` function with the following:

```js
async function handleDelete() {
  const response = await fetch(`/api/jokes/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    console.log(response.status);
    return;
  }

  router.push("/");
}
```

- Explain that the delete button now works as intended and that we have fully implemented our `DELETE` method.
- Showcase that we are now able to delete jokes.

### Implement Error Handling

- Currently, our API routes only function correctly when everything goes smoothly, but we don't yet have any error handling in place yet.
- **Why is error handling important?** Without proper error handling, unexpected issues (e.g., database connection failures, invalid requests, or coding errors) can cause our API to fail silently or return incomplete/incorrect responses. This can lead to a poor user experience and make debugging more difficult.
- Implementing robust error handling helps us ensure:

  - **Reliability**: The API responds with appropriate error messages when things go wrong, rather than crashing or causing a timeout.
  - **Resilience**: Errors are caught and logged, helping to identify and fix issues more quickly.
  - **Security**: By catching errors, we prevent unhandled issues from exposing sensitive data or causing undefined behavior.
  - **User Experience**: Clients receive informative error messages, like "Internal Server Error," which help them understand that the issue is being handled.

- Navigate to `api/jokes/index.js`.
- Wrap both if-statements in a `try-catch` block to handle any potential errors.
- The final version of this route including error handling should look like this:

```js
await dbConnect();

try {
  if (request.method === "GET") {
    const jokes = await Joke.find();

    response.status(200).json(jokes);
    return;
  }

  if (request.method === "POST") {
    const jokeData = request.body;
    await Joke.create(jokeData);

    response.status(201).json({ status: "Joke created" });
    return;
  }
} catch (error) {
  console.error(error);
  response.status(500).json({ message: "Internal Server Error." });
  return;
}

response.status(405).json({ status: "Method not allowed." });
```

- Our dynamic API route is still missing its error handling.
- Navigate to `api/jokes/[id].js`.
- Wrap the three if-statements in a `try-catch` block to handle any potential errors.
- The final version of this route including error handling should look like this:

```js
await dbConnect();
const { id } = request.query;

try {
  if (request.method === "GET") {
    const joke = await Joke.findById(id);

    if (!joke) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(joke);
    return;
  }

  if (request.method === "PUT") {
    const updatedJoke = request.body;
    await Joke.findByIdAndUpdate(id, updatedJoke);

    response.status(200).json({ message: "Success!" });
    return;
  }

  if (request.method === "DELETE") {
    await Joke.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
    return;
  }
} catch (error) {
  console.error(error);
  response.status(500).json({ message: "Internal Server Error." });
  return;
}

response.status(405).json({ status: "Method not allowed." });
```
