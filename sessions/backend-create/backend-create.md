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

## Sending `POST` requests and revalidating data

Since we are mutating our jokes data array, we must perform two actions:

- sending data to our backend to add them to the database
- updating our app so that it uses the updated data from the database

If we don't **revalidate** our data, the app won't reflect the changes we did to our database. `useSWR` provides us with a method called `mutate` to trigger this revalidation for a given API endpoint, e.g. "/api/jokes". We can destructure it from the hook call just like `data` or `isLoading`:

```js
const { mutate } = useSWR('/api/jokes/');
```

In order to perform a POST HTTP request with `fetch`, we need to provide an **options object** to the `fetch` call which includes the following information:

- method: a verb like "POST", "PUT" or "DELETE" which defines the type of HTTP request method
- the "Content-Type" provided in the request headers,
- body: the data that is sent to the server

A typical "POST" request looks like this:

```js
const response = await fetch("/api/jokes", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
```

> 💡 The `body` key represent the `request.body` in the API route above: this is where the actual data is passed from frontend to the API (and then to the backend aka database).

After a successful "POST" fetch which triggered our new POST API endpoint, we can tell `useSWR` to revalidate the data by calling the `mutate` function. The whole submit process looks like this:

```js
import useSWR from "swr";

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

  return (
		//...
  );
}

```

## Resources

- [What is REST?](https://restfulapi.net/)
- [swr docs](https://swr.vercel.app/docs/mutation)
