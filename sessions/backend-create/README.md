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

[Final stage of the code without comments](https://github.com/neuefische/web-exercises/blob/main/sessions/backend-create/demo-end/pages/api/jokes/index.js)

> 💡 Note: Since this is the implementation of just the route, it isn't "doing anything" yet.
> Imagine building a tunnel that isn't currently connected to a road carrying traffic.

- [ ] Explain that the general concept is quite similar to our `GET` method
- [ ] Keep in mind that theoretically anyone could post a joke to your database at this point, since
      there's no authorization process and the route isn't secure. We're choosing to ignore this for
      now.

### Building a form

- [ ] Note that we need to build a form to enable our user to submit a joke.
- [ ] Create the file structure `components/JokeForm/index.js` and add a form like this:

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
// pages/index.js
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

- [ ] Explain that we plan to mutate the jokes state we receive in the JokeList component.
- [ ] Quickly remind the students about what mutating a state means:
  - We are changing the content of a state, e.g. adding an item to a list.
  - Each element in our app that uses this state needs to be updated to reflect this change.
- [ ] swr provides us with a hook called `useSWRMutation` that does two things:
  1. Sending a request to a specific endpoint for creating a new entry
  2. Revalidating the data from this specific endpoint in any place of the app where the endpoint is used
- [ ] Import the `useSWRMutation` hook in the `JokeForm` component and destructure the `trigger` method.

```js
import useSWRMutation from "swr/mutation";

async function sendRequest(url, { arg }) {
  // Our sendRequest function receives url and { arg } as parameters.
  // This naming convention isn't unintentional. It needs to be named that.
  // This has to do with how useSWRMutation works.
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error(`Error: ${response.status}`);
  }
}

export default function JokeForm() {
	const { trigger } = useSWRMutation(`/api/jokes/`, sendRequest);

	return ...
}
```

- [ ] Explain that the hook expects an API endpoint, e.g. `/api/jokes/` and a `sendRequest` function as arguments.
- [ ] This `sendRequest` function gets called when `trigger` is used and sends a "POST" request to our endpoint.
- [ ] Implement the code below inside our `JokeForm` component and note that the syntax of the following function is more or less that of a regular form submit function.

```js
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const jokeData = Object.fromEntries(formData);
  // Here the jokeData gets passed to trigger, which in turns is passed as 'arg' to sendRequest
  trigger(jokeData);
}

return (
  <form onSubmit={handleSubmit}>
    {
      // ...
    }
  </form>
);
```

- [ ] Explain that the way this works is the following:
  - `trigger` informs `useSWRMutation` about `jokeData`
  - and `useSWRMutation` hands over `jokeData` to `sendRequest`
  - which accepts it as the `{ arg }` object
  - and then sends this `{ arg }` object down our API route as part of our response body.
  - All useSWR hooks that use the same API route `api/jokes/` get notified that they need to update their content.
- [ ] Show that you can now submit jokes via your `JokeForm` and that the `JokeList` gets updated automatically.

> 💡 Note: In the following _Backend Update and Delete_ session, we're going to reuse the `JokeForm` to update a database entry.

---

### Process: Challenges

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

```

```
