# Backend Create

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- [ ] Understanding CRUD and REST APIs
- [ ] Building a Create REST API route

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

We will pave the way toward implementing a method to create new jokes.

### Why is the content of today's block that important for the students?

Creating data is an essential part of CRUD operations.

### Pose a question to be answered by the end of the block!

How can we implement a feature that allows us to create new jokes and send them to the `jokes`
collection of our `jokes-database`?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- Backend API Routes
- Backend MongoDB
- Backend Read

---

## Inform: Session Guide

Use this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-create/demo-start -i
```

You can check out the final version of this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-create/demo-end -i
```

### GET vs. POST and CRUD operations

- [ ] Remind the students that they've already built a `GET` API route as part of the _Backend Read_
      session.
- [ ] Inform them that the next step would be building a `POST` API route.
- [ ] Remind students of the different [CRUD operations using this overview](./assets/CRUD.md).
- [ ] _Briefly_ remind the students of what a REST API is:
  - [ ] REST is short for "Representational State Transfer",
  - [ ] it refers to architectural principles and constraints how to structure your API.
 
 > 💡 This is a very basic and incomplete explanation. If you're interested in learning more about
> what makes an API RESTful, you can read about it [here](https://restfulapi.net/).


### Prepare Backend Database

To start with the database, open MongoDB Compass and if you not have done so in the Backend MongoDB or the Backend Read session, create

- [ ] a database called _jokes-database_ and
- [ ] a collection called _jokes_;
- [ ] [import the jokes data](assets/data.json) into your _jokes_ collection via _Import File_ (or copy the content and paste it into _Insert Document_).

### Building a `POST` API route

- [ ] Navigate to `pages/api/index.js`
- [ ] Implement the code below just under your `GET` request.
- [ ] Keep in mind that you don't need to include the comments, they're simply an additional guide.

```js
//pages/api/index.js

if (request.method === "POST") {
  // Here we're distinguishing between our GET and POST method.
  try {
    const jokeData = request.body;
    // We're declaring jokeData to contain the body of our request sent by our form that we haven't created yet.
    // The body of our request might contain data in a variety of formats, but is typically an object.
    const joke = new Joke(jokeData);
    // Utilizing our Joke scheme, we're creating a new joke.
    // At this point we're sanitizing our data according to the schema of our Joke model.
    await joke.save();
    // We've created a new joke, now we're calling save() to have mongoose insert a new document into our database.

    // The three lines above are functionally the same as:
    // Joke.create(request.body)
    // It's just a somewhat less opaque way.

    response.status(201).json({ status: "Joke created" });
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error.message });
  }
}
```

[Final stage of the code without comments](https://github.com/neuefische/web-exercises/blob/main/sessions/backend-create/demo-end/pages/api/jokes/index.js)

> 💡 Note: Since this is the implementation of just the route, it isn't "doing anything" yet.
> Imagine building a tunnel that isn't currently connected to a road carrying traffic.

- [ ] Explain that the general concept is quite similar to our `GET` method,
- [ ] ... but we do require a little more logic, as explained above.
- [ ] Keep in mind that theoretically anyone could post a joke to your database at this point, since
      there's no authorization process and the route isn't secure. We're choosing to ignore this for
      now.

### Building a form

- [ ] Note that we need to build a form to enable our user to submit a joke.
- [ ] Create  the file structure `components/JokeForm/index.js` and add a form like this:

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

- [ ] Navigate to the `pages/index.js` and render your `JokeForm`:

```js
import JokeList from "../components/JokeList";
import JokeForm from "../components/JokeForm";

export default function HomePage() {
  return (
    <>
      <JokeForm />
      <JokeList />
    </>
  );
}
```

- [ ] Remind the students that, at this point, the form isn't quite functional yet.

### Connecting the `JokeForm` to your `POST` API route

- [ ] Switch to `components/JokeForm/index.js` and add a `submit` handler as explained below:

> 💡 Once more, the comments act as an additional guide and need not be shown to the students.

```js
import useSWR from "swr";
```

- [ ] Import `useSWR` at the top of your file,

```js
export default function JokeForm() {
  const jokes = useSWR("/api/jokes");

  //...
}
```

- [ ] declare `jokes` at the very beginning of the body of your `JokeForm` function,
- [ ] and implement a function that handles the submit event of your form.

```js
async function handleSubmit(event) {
  // This function needs to be an async function in order for us to be able to await promises.
  event.preventDefault();
  // This prevents the form from resetting too soon.

  const formData = new FormData(event.target);
  // Here we're creating a new formData object.
  // We could declare a const variable form beforehand containing our event.target, as well.

  // We don't necessarily need to choose the FormData/Object.fromEntries() method to extract the values from our form. It's one of many different ways.
  const jokeData = Object.fromEntries(formData);
  // We're declaring jokeData and filling it with the values we've extracted from our form via Object.fromEntries().

  const response = await fetch("/api/jokes", {
    method: "POST",
    body: JSON.stringify(jokeData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Here we're using the API route we've built earlier.
  // We're declaring a response returning a promise while we're posting to our database.
  // This promise will eventually resolve.

  // Here we're using fetch and not swr, because swr is for data fetching, and not data mutation.
  // ... but we can notify swr about data changes using the mutate function! (See below.)

  // Our method is post, the body contains our jokeData JSON, and our header provides additional
  // information about the data we're sending.

  // Our joke is on its way!

  if (response.ok) {
    // If our attempt at posting our joke is a success, we proceed here.
    await response.json();
    // At this point, the promise of response has resolved.
    jokes.mutate();
    // Now we're notifying swr that our data has been mutated, which will trigger a rerender.
    // If we don't include this line, the page won't automatically refresh and our submitted
    // joke won't be immediately visible.
    event.target.reset();
    // Here we're resetting our form.
  } else {
    console.error(`Error: ${response.status}`);
  }
}
```

[Final stage of the code without comments](https://github.com/neuefische/web-exercises/blob/main/sessions/backend-create/demo-end/components/JokeForm/index.js)

- [ ] Pass the just created `handleSubmit` function to your `form`:

```js
return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="joke-input">Enter a new joke</label>
    <input type="text" id="joke-input" name="joke" />
    <button type="submit">Submit</button>
  </form>
);
```

- [ ] Show that you can now submit jokes via your `JokeForm`.

> 💡 Note: In the following _Backend Update and Delete_ session, we're going to reuse the `JokeForm` to update a database entry. However, we will still need to implement [useSWRMutation](https://swr.vercel.app/docs/mutation#useswrmutation) to do so.

---

## Process: Challenges

- [ ] Provide the [handout](backend-create.md) and the [challenges](challenges-backend-create.md) to
      the students
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

POST, .mutate()

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
