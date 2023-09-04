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

> 💡 Note: If you don't have your database set up in MongoDB Atlas already, please do so. You'll find data you can use in the assets folder of this session. If you'd prefer a step by step setup guide, feel free to take a look at the session "Backend Read".
> Please also make sure you have an `.env.local` file containing `MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-name>/jokes-database?retryWrites=true&w=majority`. If you do not have it already, please create it at the root level of your file structure.

### CRUD: The U and D

- [ ] Remind the students that they have successfully created `READ` and `POST` API routes.
- [ ] Explain that we need two additional CRUD operations to reach full functionality: `Update` and `Delete`
- [ ] Highlight that the UI components for handling these two cases have already been created.
- [ ] Give the students a quick overview about the new code.

### Reduce, reuse, recycle - reusing our JokeForm component

- [ ] We've chosen to reuse our `JokeForm` component for editing jokes as part of the `Joke` component
- [ ] we've **already refactored the code** for reusing the form.

#### JokeForm as a Dumb Component

- [ ] Navigate to the `index.js` of the `JokeForm` component.
- [ ] Show the students that all functional logic has been removed from this component.
- [ ] Instead, three props are passed to the component: `onSubmit`, `value`, and `isEditMode`
- [ ] Highlight, that we can now specify the behavior of this Form via these props and that such a component is called "dumb", since it has no internal logic.

#### JokeForm for creating Jokes

- [ ] Navigate to the `pages/index.js` page file.
- [ ] Highlight that the functionality for creating a joke has been moved here:

  - the `useSWR` hook
  - the `handleSubmit` function which is passed to our generalized `JokeForm`

- [ ] Point out that the form will behave just like in the previous session, only that the logic is defined in a different place.

#### JokeForm for editing Jokes

- [ ] Navigate to the `index.js` of the `Joke` component.
- [ ] Give a quick overview over the added content of this component:

  - Two buttons for editing and deleting jokes.
  - Two handler functions `handleEdit` and `handleDelete`
  - The `JokeForm` component receiving the `handleEdit` function as `onSubmit` and the current joke as the `value` prop.
  - A local state `isEditMode` which toggles the rendering of the `JokeForm`.

- [ ] Highlight that we can now program a different behavior for our `JokeForm` in the `handleEdit` function which will be triggered if this instance of the `JokeForm` is submitted.

### Implementing the Update API Endpoint

- [ ] Navigate to the `/pages/api/[id].js` file.
- [ ] Implement the code below as part of a `PUT` HTTP request method in your API routes.
- [ ] The comments included in the code are an additional guide and need not be shown to the students.

```js
// /api/jokes/[id].js

if (request.method === "PUT") {
  const jokeData = request.body;
  await Joke.findByIdAndUpdate(id, jokeData);
  // ... find our joke by its ID and update the content that is part of the request body!
  response.status(200).json({ status: "Joke updated!" });
  // If successful, we'll receive an OK status code.
}
```

- [ ] Optional: Explain the difference between `PUT` and `PATCH`.

  > 💡 Note: `PUT` and `PATCH` are semantically different. According to convention, we would use `PUT` to update our entire document, and `PATCH` to update individual fields. In our demo, we're using `PUT`, simply because we only ever have _one_ field to update.

- [ ] Now navigate back to the `/components/Joke/index.js` to connect the UI to our new API endpoint.
- [ ] We want to send a "PUT" request to our new API endpoint with fetch, similar to our "POST" request we send when we create a joke.
- [ ] Since updating an existing joke means we are going to mutate this joke data, we need to destructure `mutate` and call it after we've updated the joke to reflect the changes in the app:

- [ ] Implement the code below.

```js
// /components/Joke/index.js
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

### Implementing the DELETE API route

- [ ] Navigate to `api/jokes/[id].js`.
- [ ] Include the logic required for our `DELETE` request method.

```js
if (request.method === "DELETE") {
  await Joke.findByIdAndDelete(id);
  // This line handles the entire deletion process.
  response.status(200).json({ message: "success!" });
}
```

- [ ] Navigate to `pages/[id].js`.
- [ ] Complete the `handleDeleteJoke` function with the following:

```js
async function handleDelete() {
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
