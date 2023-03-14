# Backend Update and Delete

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 1:00     | Session         |
| 1:30     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- [ ] Understanding the Update and Delete part of CRUD operations
- [ ] Being able to implement `UPDATE` and `DELETE` API routes

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

We will address that we still need to establish a method to update and delete the data in our backend.

### Why is the content of today's block that important for the students?

Updating and deleting data are very important parts of CRUD operations.

### Pose a question to be answered by the end of the block!

How can we update our data and how can we delete data points?

---

## Activate prior knowledge of students

- Backend API Routes
- Backend Read
- Backend Create

### Which previously learned concepts will be utilized in this session?

- Serverless functions
- REST API in Next.js
- `mongoose` as ODM

---

## Inform: Session Guide

Use this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-update-and-delete/demo-start -i
```

You can check out the final version of this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-update-and-delete/demo-end -i
```

> 💡 Note: If you don't have your database set up in mongoDB Compass already, please do so. You'll find data you can use in the assets folder of this session. If you'd prefer a step by step setup guide, feel free to take a look at the session "Backend Read".
> Please also make sure you have an `.env.local` file containing `MONGODB_URI=mongodb://localhost:27017/jokes-database`. If you do not have it already, please create it at the root level of your file structure.

### CRUD: The U and D

- [ ] Remind the students that they have successfully created `READ` and `POST` API routes.
- [ ] Explain that we need two additional CRUD operations to reach full functionality.
- [ ] Showcase that, so far, we had to update and delete our data manually via _mongoDB Compass_.

- [ ] Implement the code below as part of a `PUT` HTTP request method in your API routes.
- [ ] The code is part of the `handler` function.
- [ ] Feel free to implement it just below your `GET` method.
- [ ] The comments included in the code are an additional guide and need not be shown to the students.

```js
// /api/jokes/[id].js

if (request.method === "PUT") {
  // If our request method is PUT ...
  const jokeToUpdate = await Joke.findByIdAndUpdate(id, {
    $set: request.body,
  });
  // ... find our joke by its ID and update the content that is part of the request body!
  response.status(200).json(jokeToUpdate);
  // If successful, we'll receive an OK status code.
}
```

[Final stage of the code without comments](https://github.com/neuefische/web-exercises/blob/main/sessions/backend-update-and-delete/demo-end/pages/api/jokes/[id].js)

- [ ] Optional: Explain the difference between `PUT` and `PATCH`.

  > 💡 Note: `PUT` and `PATCH` are semantically different. According to convention, we would use `PUT` to update our entire document, and `PATCH` to update individual fields. In our demo, we're using `PUT`, simply because we only ever have _one_ field to update.

### Reduce, reuse, recycle - reusing our JokeForm component

- [ ] Explain that we want to reuse our `JokeForm` component.
- [ ] Point out that, structurally, there are several ways to provide a user interface to edit data, such as inline-editing, etc.
- [ ] We've chosen to reuse our `JokeForm` component as part of the `Joke` component and we've **already made all necessary preparations** like reusing the form and lifting up the state, etc. In short: we already refactored the code in the `Joke` component. All that's left to do here is introduce the students to the changes that were made behind the scenes.
- [ ] Navigate to the `index.js` of the `Joke` component.
- [ ] Show the students that we've had to import the `JokeForm` component as part of the refactoring process and that the form is conditionally rendered in the return statement.
- [ ] There's a local state which toggles between showing and not showing the `JokeForm`.
- [ ] There are two buttons, one for editing the joke and one for deleting the joke.
- [ ] Both buttons receive their `onClick` function via props, but currently they're not doing anything. We are going to implement those functions ourselves in a minute.

### Preparing connections

- [ ] Point out that now we're going to implement the logic required to make the `Joke` component functional.
- [ ] Navigate to the `JokeDetailsPage` in `pages\[id].js`.
- [ ] Show the students around and point out that there are two functions already declared: `handleEditJoke` and `handleDeleteJoke`. These are the two missing functions we need to implement.
- [ ] Further point out that we've already imported `useRouter` and destructured all necessary attributes from the `router` object.
- [ ] Explain that we need an `id` to identify the joke we want to update and that we will be using `push` to route to the overview of jokes after successfully updating the joke.
- [ ] But first we need to import `useSWRMutation` from `swr/mutation` at the top of our file.
- [ ] Explain why we're using `useSWRMutation`:

  - [ ] whenever we save to the database we want to manually trigger another `GET` request,
  - [ ] that `GET` request is immediately going to display our updated jokes within our `JokeList` component.

- [ ] Import the `useSWRMutation` hook.

```js
import useSWRMutation from "swr/mutation";
```

- [ ] Implement the code below below the router declaration in your `JokeDetailsPage` function.

```js
// pages/[id].js

const { trigger, isMutating } = useSWRMutation(`/api/jokes/${id}`, sendRequest);
```

- [ ] Explain that we're destructuring `trigger` and `isMutating` from `useSWRMutation` while passing our `/api/jokes/${id}` API endpoint and a `sendRequest` function as arguments into it.
- [ ] Point out that we now need to write our `sendRequest` function.

```js
// pages/[id].js

async function sendRequest(url, { arg }) {
  // Our sendRequest function expects url and { arg } as parameters.
  // This naming convention isn't unintentional. It needs to be named that.
  // This has to do with how useSWRMutation works.
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // This syntax follows that of any regular HTTP response.
  // Note the arg object that is passed as part of the response body.
  // We will establish what arg is at a later point during the session.
  if (response.ok) {
    await response.json();
  } else {
    console.error(`Error: ${response.status}`);
  }
}
```

- [ ] Explain that now that we have established our API route we need to write a function that provides our `sendRequest` function with the `arg` object.
- [ ] Implement the code below and note that the syntax of the following function is more or less that of a regular form submit function.

```js
// pages/[id].js

async function handleEditJoke(event) {
  // We're expecting an event to be passed into our function.
  event.preventDefault();
  // As per usual, we're preventing the form from resetting.
  const formData = new FormData(event.target);
  const jokeData = Object.fromEntries(formData);
  // Here we are preparing our updated data to be handed over to our sendRequest function.
  await trigger(jokeData);
  // By calling trigger with our jokeData object, we're triggering a cascade of asynchronous activity.
  push("/");
}
```

- [ ] Explain that the way this works is the following:

  - [ ] `trigger` informs `useSWRMutation` about `jokeData`
  - [ ] then `isMutating` evaluates to `true`
  - [ ] and `useSWRMutation` hands over `jokeData` to `sendRequest`
  - [ ] which accepts it as the `{ arg }` object
  - [ ] and then sends this `{ arg }` object down our API route as part of our response body.
  - [ ] Now, `isMutating` evaluates to `false`.

- [ ] Note that once all of this has happened, we're safe to push to our overview.

- [ ] Include the following code to establish conditional rendering:

```js
// pages/[id].js

if (isMutating) {
  return <h1>Submitting your changes...</h1>;
}
```

- [ ] Explain that while `isMutating` is true, our `JokesDetailPage` will only render our `<h1>` element.
- [ ] Mention that since we're not working with heavy data loads, `isMutating` only evaluates to `true` very briefly.
- [ ] Navigate to the `JokeForm` component `index.js`.
- [ ] Point out that the `{ onSubmit }` prop is already being destructured.
- [ ] `onSubmit` is called inside the `onSubmit` event of the `StyledForm` and it receives the `event` object of that event.
- [ ] We further accept the props `value` and `isEditMode` which serve to display the joke and the corresponding button text in case we're editing a joke as opposed to creating a new one.

### What our reusable form looks like on the homepage

- [ ] Navigate to the homepage `index.js` in `pages`.
- [ ] Show the students around and point out how the same form is being used for a different purpose here, namely for creating new jokes.
- [ ] The `handleCreateJoke` function collects the data from the input field and passes it on to our internal API endpoint `"/api/jokes` as a `POST` request.
- [ ] Note how the data first has to be serialized into the JSON format with `JSON.stringify`
- [ ] The `JokeForm` component then receives the `handleCreateJoke` function via the `onSubmit` prop. We now use the same form for two different purposes: creating and updating jokes.
- [ ] Point out that we have chosen to give our `joke` state inside the `JokeForm` component an initial value of `""` empty string, just so that the component doesn't change from uncontrolled to being controlled.
- [ ] Back inside the `JokeForm` reiterate that there's a local state for keeping track of the user's input.
- [ ] We need that state because it enables the user to change the initial value, a change that resides in the `joke` state variable until the edit/submit button is pressed. Then the current value is passed down to the `onSubmit` function via the event object.
- [ ] We have finalized the update process. And we'll now move on to the delete process.

### Implementing the DELETE API route

- [ ] Navigate to `api/jokes/[id].js`.
- [ ] Include the logic required for our `DELETE` request method (comments are for the coach)

```js
if (request.method === "DELETE") {
  // If our request method is DELETE ...
  const jokeToDelete = await Joke.findByIdAndDelete(id);
  // ... declare jokeToDelete to be the joke identified by its id and delete it.
  // This line handles the entire deletion process.
  response.status(200).json(jokeToDelete);
}
```

- [ ] Navigate to `pages/[id].js`.
- [ ] Complete the `handleDeleteJoke` function with the following:

```js
async function handleDeleteJoke() {
  await fetch(`/api/jokes/${id}`, {
    method: "DELETE",
  });
  // We are handing over the joke identified by its id to our DELETE request method.
  // This is the entire code required to do so.
  push("/");
  // After deleting the joke, we route back to our index page.
}
```

- [ ] Explain that the delete button now works as intended and that we have fully implemented our `DELETE` method.
- [ ] Showcase that we are now able to delete jokes.

---

## Process: Challenges

- [ ] Provide the [handout](backend-update-and-delete.md) and the
      [challenges](challenges-backend-update-and-delete.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups of \_\_\_
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

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
