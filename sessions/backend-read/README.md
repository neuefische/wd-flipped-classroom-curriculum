# Backend Read

## Learning Objectives

- Knowing about ORM and (`mongoose` as) ODM
- Understanding how to write a `mongoose` Schema
- Knowing how to connect an application with a remote database using `mongoose`
- Knowing how to read data with a `mongoose` model

## Requirements

- Next.js
- Backend Basics
- Backend API Routes
- Backend MongoDB (with MongoDB Atlas)

## Demo

### Start

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/backend-read/demo-start
```

### End

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/backend-read/demo-end
```

---

## Session Guide

In a non-relational database like MongoDB, things can get messy quickly because you can add fields and data types to each document as you wish. `mongoose` helps us keep our data consistent by enforcing a schema that defines the structure and data types of our documents. This way, we ensure that our application remains stable and doesn’t break due to unexpected data types. Additionally, `mongoose` allows us to easily access our database from within our application.

> How can you read data from your database and display it in the frontend?

### ORM / ODM and `mongoose`

- Remind students that right now, we know how to set up a database in the cloud using MongoDB Atlas.
- Show the demo: It has an overview and details page, but receives the data from `lib/data.js`, i.e. there is no database where we could create / read / update / delete entries.
- Announce the goal of the session: We want to have a database with the jokes' data and access it from our app.
- Explain that we need a JavaScript API to work with MongoDB:
  - That is sometimes called a database driver (just like your printer driver).
  - We will use a library called `mongoose`. That's an ODM (Object Document Mapper).
- Explain [the terms ORM / ODM](https://medium.com/spidernitt/orm-and-odm-a-brief-introduction-369046ec57eb):

  - ORM (_Object Relation Mapping_):
    - A technique for performing CRUD operations on mainly relational databases (MySQL, PostgreSQL, etc.),
    - Uses an _object-oriented paradigm_.
    - Think of it like an Excel spreadsheet with rows and columns: You cannot add a field to one entry that doesn't exist for all.
    - It is mapped to a single object for all entries.
  - ODM (_Object Document Mapping_):

    - Similar to ORM but for non-relational databases (MongoDB).
    - Uses a _document-oriented paradigm_.

- Summarize the reasons to use `mongoose` as ODM:
  - It helps building a schema and querying the database (it's also our db driver).
  - It has to run on the server, because database access is not secure in the browser.
- Remind students that we already have a server: Our Next.js API routes! 🤡

### Prepare and Connect the Database

- Explain that we need to set up two things:
  - A database with all jokes.
  - A connection between this database and the Next.js app with `mongoose`.
- To start with the database, open MongoDB Atlas and if you not have done so in the _Backend MongoDB_ session, create

  - a database called _jokes-database_ and
  - a collection called _jokes_.
  - [Copy the jokes data](assets/data.json) into your _jokes_ collection by pasting it into the _Insert Document_ window.

- Explain that we still need the connection between database and app:
  - Install mongoose: `npm install mongoose`.
  - Create a `.env.local` file at the root of your project with the following content:
    `MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>/jokes-database?retryWrites=true&w=majority`.
    - Replace `<username>`, `<password>` and `<cluster-name>` with the values from MongoDB Atlas (see [MongoDB Atlas Setup](../backend-mongodb/challenges-backend-mongodb.md)).
  - Create a `db/connect.js` file and copy the
    [content](https://github.com/wd-bootcamp/web-curriculum/blob/main/sessions/backend-read/assets/dbConnect.js).
  - Remind students that it's not necessary to understand this file entirely:
    - Note that it uses the `MONGODB_URI` we have just set up in `.env.local` to create a connection.
    - You should leave it here, but if there are any further questions:
      - The example uses a cached connection across hot reloads in development to prevent multiple connections to be opened simultaneously.
      - It exposes a function that returns the connection (wrapped in a promise).

### Writing a Schema

- Explain that we need to declare a [Schema that describes the data type of the documents in a collection](https://mongoosejs.com/docs/guide.html).
- We use this Schema to create a Model that we can use to interact with the database.
- Note the difference between _Schema_ and _Model_:
  - The _Schema_ describes the structure of a document.
  - The _model_ gives us a programming interface for interacting with the database.
- Create `db/models/Joke.js`:
  - We don't need to define the `id` because `mongoose` will automatically create one.
  - The name of the collection the model works upon is being generated from the models name, in this case "Joke" => "jokes".
  - You can call the `mongoose.model` method with a third argument that holds the collection name.
  - We have to check whether the model with the name "Joke" has already been compiled and if yes, take the already compiled model. That's why we use the logical OR (`||`)operator.

```js
// db/models/Joke.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const jokeSchema = new Schema({
  joke: { type: String, required: true },
});

const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

export default Joke;
```

### Querying the Database with `mongoose`

#### Query All Jokes

- Explain that we can use the created `mongoose` model to query our database.
- Switch to `api/jokes/index.js`.
- Explain that we don't want to use the local `lib/data.js` anymore, but our remote database - delete the import.
- Instead, import `dbConnect` and the `Joke` model.
- Explain that we want to create a connection to our database first by calling `await dbConnect()` inside of the request handler function.

  - Note that we need to make the `handler` an async function now.

- Explain that we can define different behaviors depending on the HTTP request method used. Because we have not declared anything else in `pages/index.js`, the default is a `GET` request.
- Write the code to check the `request.method` and if it's `GET`:
  - Use the imported `Joke` model and it's `.find()` method to find all jokes in the database.
  - Remind students that we have to `await` the response again.
  - Return a `200` status and the `jokes`.

```js
// api/jokes/index.js
import dbConnect from "@/db/connect";
import Joke from "@/db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();
    response.status(200).json(jokes);
    return;
  }
  response.status(405).json({ status: "Method not allowed." });
}
```

#### Query a Single Joke by Id

- Note that querying a single joke from the database does not work yet.
- Switch to `api/jokes/[id].js`.
- As above, delete the import of `jokes` from `lib/data.js`.
- Import `dbConnect` and the `Joke` model.
- Make the `handler` function `async` and `await dbConnect()`.
- Check for the `request.method === "GET"`.
- Explain that `.findById(id)` is a useful (almost) equivalent to `.findOne({ _id: id})`.

```js
// api/jokes/[id].js
import dbConnect from "@/db/connect";
import Joke from "@/db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const joke = await Joke.findById(id);

    if (!joke) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(joke);
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
```

- Explain that we need to adapt the frontend slightly to make the links to the details pages
  work:
  - The fetched `data` array now contains objects with `_id` instead of `id`.

```js
// necessary frontend changes in pages/index.js: change joke.id to joke._id
<li key={joke._id}>
  <Link href={`/${joke._id}`}>{joke.joke}</Link>
</li>
```

- When we want to deploy the app on Vercel, we need to make sure to set the MongoDB connection string as an environment variable. We will discuss how to set environment variables in a later session.
