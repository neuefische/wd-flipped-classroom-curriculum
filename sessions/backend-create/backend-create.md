# Backend Create

## Learning Objectives

- [ ] Understanding CRUD and REST APIs
- [ ] Building a Create REST API route

---

## CRUD and REST

### CRUD

The acronym CRUD [kɹʌd] covers the four basic operations of persistent storage

- **Create**, _create a record_,
- **Read** or **Retrieve**, _read a record_,
- **Update**, _update a record_, and
- **Delete** or **Destroy**, _delete a record_.

These operations can be expressed using different terms depending on context or environment.

| CRUD                      | MongoDB                    | SQL      | HTTP Method | typical Rest URL (with HTTP Method)     |
| ------------------------- | -------------------------- | -------- | ----------- | --------------------------------------- |
| **Create**                | `insertOne` / `insertMany` | `INSERT` | POST        | `/todos`                                |
| **Read** or **Retrieve**  | `findOne` / `find`         | `SELECT` | GET         | `/todos/[todoId]` (one), `/todos` (all) |
| **Update**                | `updateOne` / `updateMany` | `UPDATE` | PUT / PATCH | `/todos/[todoId] `                      |
| **Delete** or **Destroy** | `deleteOne` / `deleteMany` | `DELETE` | DELETE      | `/todos/[todoId]`                       |

> 💡 Note that the **Create** operation refers to the HTTP method `POST`. You'll need the corresponding HTTP method whenever you want to perform one of the **CRUD** operations.

### REST

REST is short for "Representational State Transfer" and refers to architectural principles and constraints how to structure your API.

We use CRUD operations and HTTP methods with a REST API.

> 💡 This is a very basic and incomplete explanation. If you're interested in learning more about
> what makes an API RESTful, you can read about it [here](https://restfulapi.net/).

---

## Create with Mongoose

To create a new entry in your database, you need to define a `POST` API route and call the `.create` method on our Joke model:

```js
// pages/api/index.js
if (request.method === "POST") {
  try {
    const jokeData = request.body;
    await Joke.create(jokeData);

    response.status(201).json({ status: "Joke created" });
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error.message });
  }
}
```

Note that the `POST` route alone does not create a new entry in your database: you need to tell your form's submit handler to use this route.

> 📙 Read more in the [mongoose docs](https://mongoosejs.com/docs/models.html#constructing-documents)

---

## `POST` using `useSWRMutation`

Since we are mutating our jokes data array, we can [use the `useSWRMutation` hook](https://swr.vercel.app/docs/mutation#useswrmutation) to send a `POST` request to the backend. This ensures that all other `useSWR` hooks that use the same API endpoint are updated automatically after the new joke is created.

`useSWRMutation` expects two arguments:

- An url, e.g. the API Endpoint: `/api/jokes`
- A function that sends the `POST` request called `sendRequest` that you write yourself. It is a wrapper function for `fetch` and will be called whenever you call `trigger()`.

`sendRequest` receives the data as the destructured `{ arg }` object. This is passed as the `request.body` of the request to our API endpoint.

> 💡 The `body` key represent the `request.body` in the API route above: this is where the actual data is passed from frontend to the API (and then to the backend aka database).

```js
import useSWRMutation from "swr/mutation";

function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  const { status } = await response.json();
  console.log(status);
}

export default function JokeForm() {
  const { trigger } = useSWRMutation("/api/jokes", sendRequest);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);
    // We're declaring jokeData and filling it with the values we've extracted from our form via Object.fromEntries().

    trigger(jokeData);
		// here the trigger does two things:
	  // 1. trigger sendRequest, pass jokeData as { arg } to it
    // 2. inform all useSWR hooks that subscribed to '/api/jokes/' to revalidate their data
  }
}
```

Summary:

- `trigger` informs `useSWRMutation` about `jokeData`,
- `useSWRMutation` hands over `jokeData` to `sendRequest`
- which accepts it as the `{ arg }` object
- and then sends this `{ arg }` object down your API route as part of your response body.
- Our API endpoint then creates a new Joke document by calling `Joke.create(jokeData)` with the received `jokeData`.
- In the meantime, `useSWRMutation` triggers a revalidation of all `useSWR` hooks using the `/api/jokes/` endpoint.

> 📙 `useSWRMutation` has a lot more functionality for handling errors, optimistic updates and much more. Have a look at the [ swr docs](https://swr.vercel.app/docs/mutation#useswrmutation) for more information.

## Resources

- [What is REST?](https://restfulapi.net/)
- [swr docs](https://swr.vercel.app/docs/mutation#useswrmutation).
