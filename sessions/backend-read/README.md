# Backend Read

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Knowing about ORM and (`mongoose` as) ODM
- [ ] Understanding how to write a `mongoose` Schema
- [ ] Knowing how to connect an application with a (local) database using `mongoose`
- [ ] Knowing how to read data with a `mongoose` model

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Using `mongoose`, we can easily access our database from our application and make sure that the data has the correct data types we have defined.

### Why is the content of today's block that important for the students?

A non-relational database like MongoDB can quickly become messy because you can add fields and data types to every document as you wish. By using `mongoose`, we can make sure that the data types are coherent and don't break our application.

### Pose a question to be answered by the end of the block!

How can we read data from our database and display it in the frontend?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- Next.js
- Backend Basics
- Backend API Routes
- Backend MongoDB (with MongoDB Atlas)

---

## Inform: Session Guide

Use this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-read/demo-start -i
```

You can check out the final version of this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-read/demo-end -i
```

### ORM / ODM and `mongoose`

- [ ] Remind students that right now, we know how to set up a database in the cloud using MongoDB Atlas.
- [ ] Show the Demo: it has an overview and details page, but receives the data from `lib/data.js`, i.e. there is no database where we could create / read / update / delete entries.
- [ ] Announce the goal of the session: we want to have a database with the jokes' data and access it from our app.
- [ ] Explain that we need a JavaScript API to work with MongoDB
  - [ ] that is sometimes called a database driver (just like your printer driver);
  - [ ] we will use a library called `mongoose`. That's an ODM (Object Document Mapper).
- [ ] Explain [the terms ORM / ODM](https://medium.com/spidernitt/orm-and-odm-a-brief-introduction-369046ec57eb):

  - [ ] ORM (_Object Relation Mapping_):
    - [ ] technique to perform CRUD to mainly relational databases (MySQL, PostgreSQL, etc.),
    - [ ] uses an _object-oriented paradigm_
    - [ ] like excel spreadsheet with rows and columns => you cannot add a field to one entry that doesn't exist for all
    - [ ] is mapped to a single object for all entries.
  - [ ] ODM (_Object Document Mapping_):

    - [ ] like ORM for non-relational databases (MongoDB)
    - [ ] uses a _document-oriented paradigm_

- [ ] Summarize the reasons to use `mongoose` as ORM:
  - [ ] It helps building a schema and querying the database (it's also our db driver).
  - [ ] It has to run on the server, because database access is not secure in the browser.
- [ ] Remind students that we already have a server: our Next.js API routes! 🤡

### Prepare and Connect the Database

- [ ] Explain that we need to set up two things:
  - [ ] a database with all jokes and
  - [ ] the connection between this database and the Next.js app with `mongoose`.
- [ ] To start with the database, open MongoDB Atlas and if you not have done so in the _Backend MongoDB_ session, create

  - [ ] a database called _jokes-database_ and
  - [ ] a collection called _jokes_;
  - [ ] [Copy the jokes data](assets/data.json) into your _jokes_ collection by pasting it into the _Insert Document_ window.

- [ ] Explain that we still need the connection between database and app:
  - [ ] Install mongoose: `npm install mongoose`.
  - [ ] Create a `.env.local` file at the root of your project with the following content:
        `MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>/jokes-database?retryWrites=true&w=majority`.
    - [ ] Replace `<username>`, `<password>` and `<cluster-name>` with the values from
          MongoDB Atlas (see [MongoDB Atlas Setup](../backend-mongodb/challenges-backend-mongodb.md)).
  - [ ] Create a `db/connect.js` file and copy the
        [content from the Next.js mongoose example](https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js).
  - [ ] Remind students that it's not necessary to understand this file entirely:
    - [ ] Note that it uses the `MONGODB_URI` we have just set up in `.env.local` to create a
          connection.
    - [ ] You should leave it here, but if there are any further questions:
      - [ ] The example uses a cached connection across hot reloads in development to prevent
            multiple connections to be opened simultaneously.
      - [ ] It exposes a function that returns the connection (wrapped in a promise).

### Writing a Schema

- [ ] Explain that we need to declare a
      [Schema that describes the data type of the documents in a collection](https://mongoosejs.com/docs/guide.html).
- [ ] We use this Schema to create a Model that we can use to interact with the database.
- [ ] Note the difference between _Schema_ and _Model_
  - [ ] the _Schema_ describes the structure of a document
  - [ ] the _model_ gives us a programming interface for interacting with the database.
- [ ] Create `db/models/Joke.js`:
  - [ ] We don't need to define the `id` because `mongoose` will automatically create one.
  - [ ] The name of the collection the model works upon is being generated from the models name, in
        this case "Joke" => "jokes".
  - [ ] You can call the `mongoose.model` method with a third argument that holds the collection
        name.
  - [ ] We have to check whether the model with the name "Joke" has already been compiled and if
        yes, take the already compiled model. That's why we use the logical OR (`||`) operator.

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

#### Query all Jokes

- [ ] Explain that we can use the created `mongoose` model to query our database.
- [ ] Switch to `api/jokes/index.js`.
- [ ] Explain that we don't want to use the local `lib/data.js` anymore, but our local database;
      delete the import.
- [ ] Instead, import `dbConnect` and the `Joke` model.
- [ ] Explain that we want to create a connection to our database first by calling
      `await dbConnect()` inside of the request handler function.

  - [ ] Note that we need to make the `handler` an async function now.

- [ ] Explain that we can define different behaviors depending on the HTTP request method used;
      because we have not declared anything else in `components/JokeList/index.js`, the default is a
      `GET` request.
- [ ] Write the code to check the `request.method` and if it's `GET`,
  - [ ] use the imported `Joke` model and it's `.find()` method to find all jokes in the database;
  - [ ] remind students that we have to `await` the response again,
  - [ ] return a `200` status and the `jokes`.

```js
// api/jokes/index.js
import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();
    return response.status(200).json(jokes);
  }
}
```

#### Query one Joke by Id

- [ ] Note that querying a single joke from the database does not work yet.
- [ ] Switch to `api/jokes/[id].js`.
- [ ] As above, delete the import of `jokes` from `lib/data.js`.
- [ ] Import `dbConnect` and the `Joke` model.
- [ ] Make the `handler` function `async` and `await dbConnect()`.
- [ ] Check for the `request.method === "GET"`.
- [ ] Explain that `.findById(id)` is a useful (almost) equivalent to `.findOne({ _id: id})`.

```js
// api/jokes/[id].js
import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const joke = await Joke.findById(id);

    if (!joke) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(joke);
  }
}
```

- [ ] Explain that we need to adapt the frontend slightly to make the links to the details pages
      work:
  - [ ] the fetched `data` array now contains objects with `_id` instead of `id`.

```js
// necessary frontend changes in components/JokeList.js: change joke.id to joke._id
<li key={joke._id}>
  <Link href={`/${joke._id}`}>{joke.joke}</Link>
</li>
```

- [ ] When we want to deploy the app on Vercel, we need to make sure to set the MongoDB connection string as an environment variable. We will discuss how to set environment variables in a later session.

---

## Process: Challenges

- [ ] Provide the [handout](backend-read.md) and the [challenges](challenges-backend-read.md) to the
      students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed in the beginning of the session and try to answer it with a
  few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

ORM/ODM, mongoose, schema, model

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
