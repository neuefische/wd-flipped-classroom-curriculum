# Backend Update and Delete

## Learning Objectives

- [ ] Understanding the Update and Delete part of CRUD operations
- [ ] Being able to implement `UPDATE` and `DELETE` API routes

---

## Update

To update an entry in your database, you need to do two things:

- define a `PUT` API route and
- connect the submit handler of an edit form to this API route.

### Update with Mongoose

First, define a `PUT` API route:

```js
// /api/jokes/[id].js
if (request.method === "PUT") {
  Joke.findByIdAndUpdate(id, {
    $set: request.body,
  });
  // Find the joke by its ID and update the content that is part of the request body!
  response.status(200).json({ status: `Joke ${id} updated!` });
  // If successful, you'll receive an OK status code.
}
```

### `PUT` using `fetch`

Second, tell the submit handler of your edit form

- to use the `PUT` API route (i.e. send a request to your database to edit an entry),
- wait for the database to respond and update the UI if necessary or
- navigate the user to a different page via `push()`.

> 💡 Note: `PUT` and `PATCH` are semantically different. According to convention, we would use `PUT` to update our entire document, and `PATCH` to update individual fields. In our demo, we're using `PUT`, simply because we only ever have _one_ field to update.

You can [use the `useSWRMutation` hook](https://swr.vercel.app/docs/mutation#useswrmutation) to achieve this.

Go to the `page` or `component` where you want to write the submit handler of your edit form.

Import `useSWRMutation` and destructure the `trigger` method and the `isMutating` state:

```js
// /components/Joke/index.js
import useSWRMutation from "swr/mutation";

export default function Joke() {
  //...
  const { trigger, isMutating } = useSWRMutation(
    `/api/jokes/${id}`,
    sendRequest
  );
  // return (...)
}
```

Note that in the `sendRequest` function you define the `PUT` method and the `body` for your API route:

```js
async function sendRequest(url, { arg }) {
  // here we set the request method
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error(`Error: ${response.status}`);
  }
}
```

You now need to write a function that provides your `sendRequest` function with the `arg` object:

```js
async function handleEdit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const jokeData = Object.fromEntries(formData);
  // Here you are preparing your updated data to be handed over to your sendRequest function.
  await trigger(jokeData);
}
```

`isMutating` behaves similarly to `isLoading` from `useSWR`. While the mutation process is ongoing, this flag is set to `true`. After the revalidation process has been finished, it switches back to `false`.

### Render while `isMutating`

If you want to inform the user that the changes are currently being submitted, you can make use of `isMutating`. Simply add an early return to your component:

```js
if (isMutating) {
  return <h1>Submitting your changes...</h1>;
}
```

---

## Delete

To delete an entry in your database, you need to do two things:

- define a `DELETE` API route and
- connect a handler function which uses this API route.

### Delete with Mongoose

First, define a `DELETE` API route:

```js
if (request.method === "DELETE") {
  await Joke.findByIdAndDelete(id);
  // Declare jokeToDelete to be the joke identified by its id and delete it.
  // This line handles the entire deletion process.
  response.status(200).json({ status: `Joke ${id} successfully deleted.` });
}
```

### `DELETE` using `fetch`

We could use `useSWRMutation` for sending the `DELETE` request to our backend. But since we don't want to revalidate our data, we can simply use a plain `fetch` call.

We write a handler function which calls `fetch()` with the appropriate arguments and pass it to a delete button:

```jsx
async function handleDelete() {
  await fetch(`/api/jokes/${id}`, {
    method: "DELETE",
  });
  // You are handing over the joke identified by its id to our DELETE request method.
  // This is the entire code required to do so.
  router.push("/");
  // After deleting the joke, you route back to our index page.
}

return (
  <button type="button" onClick={handleDelete}>
    Delete
  </button>
);
```

---

## Resources

- [useSWRMutation (SWR Docs)](https://swr.vercel.app/docs/mutation#useswrmutation)
