# Backend API Routes

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] knowing what serverless functions are
- [ ] understanding what an API is meant for
- [ ] knowing how to implement Next.js API routes
  - [ ] static API routes
  - [ ] dynamic API routes
- [ ] knowing how to read data from APIs with `useSWR`

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

How do we create an API with the help of Next.js API routes and use them in our frontend?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- `useSWR`
- Backend Basics

---

## Inform: Session Guide

### Demo

Use this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-api-routes/demo-start -i
```

You can check out the final version of this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-api-routes/demo-end -i
```

### Introduction to Next.js API Routes

- [ ] Remind students that our main goal in the backend sessions is to build a database and to
      handle its data in our app (Create (data), Read, Update, Delete - CRUD).
- [ ] Note that the frontend of the app is not allowed to have direct access to the database (e.g.
      the database's access key must not be visible to the client); this is why we need an API as a
      gatekeeper between backend database and frontend app.
- [ ] Remind students that up to now, they have fetched APIs by passing a specific url to `useSWR`.
- [ ] Tell them that this url is an API route, i.e. a route to a specific endpoint (like
      `api/bad-jokes/1`).
- [ ] Explain the goal of this session: instead of requesting an external API route, we can define

  - [ ] our own API routes inside of the app and
  - [ ] decide what information and data the routes return.

- [ ] Explain that Next.js offers a simple solution to build your own API, called Next.js API
      routes:

  - [ ] it follows a simple folder structure to create API endpoints and
  - [ ] runs code in serverless functions without further configuration.

- [ ] Explain what serverless means:
  - [ ] it's a JavaScript function that runs on a server;
  - [ ] no persistent state
  - [ ] no file system
  - [ ] Vercel allows you to have free runtime on a server (which has costs with other
        service/hosting providers).

### Next.js API Routes

- [ ] Open the starter demo and show the students around:

  - [ ] the `HomePage` (`pages/index.js`) renders the `JokeList` component;
  - [ ] the `JokeDetailsPage` (`pages/[id].js`) renders the `Joke` component;
  - [ ] the `JokeList` component fetches an array of jokes from an API and renders a list of jokes
        to `/`;
  - [ ] the `Joke` component fetches one joke depending on the `id` query parameter and renders this
        joke to `/[id]`;
  - [ ] both components use the bad-jokes API under `https://example-apis.vercel.app/api/bad-jokes/`

- [ ] Explain that we want to build our own API:

  - [ ] one route should return all jokes and
  - [ ] another (dynamic) route should return one joke depending on the requested `id`;
  - [ ] we will then fetch these API routes to access the data in our frontend

- [ ] Explain that Next.js offers a simple solution for API routes: it treats all files inside of
      `pages/api/` as an API endpoint instead of a page.
- [ ] Create the file `/pages/api/jokes/index.js`.
- [ ] Show that there is a `lib/data.js` file which contains all jokes we want our API to return.
  - [ ] Note that these data will later come from a database; this may help to avoid confusion about
        the question why we fetch data from the same project.
  - [ ] Import the `jokes` array from `lib/data.js` into `/pages/api/jokes/index.js`.
- [ ] Write a `handler` function which
  - [ ] needs to be a default export;
  - [ ] receives an argument for `request` and `response`;
  - [ ] returns a `response` with status code of `200` and a `json` with the `jokes` data.

```js
// pages/api/jokes/index.js
import { jokes } from "../../../lib/data.js";

export default function handler(request, response) {
  response.status(200).json(jokes);
}
```

- [ ] Open the browser under `/api/jokes/` and show the response of all `jokes`.

- [ ] Note that this is just an example to demonstrate how API communication works:
  - [ ] Remind them that the `data` would normally be fetched from a database.
  - [ ] Note that fetching from a database is only be possible from an API route (and not from the
        frontend).
  - [ ] CORS?
  - [ ] TBD: better explanation

### Dynamic API Routes

- [ ] Explain that Next.js supports dynamic API routes as well and follows the same file naming
      rules used for pages.
- [ ] Create the file `/pages/api/jokes/[id].js`.
- [ ] Import the `jokes` from `lib/data.js` and write the `handler` function:
  - [ ] Explain that we want to get a joke depending on the `id` used in the browser route.
  - [ ] Show that you can access the `id` route parameter by destructuring it from `request.query`.
  - [ ] Note that the destructured value is called `id` because the file is called `[id].js`.
  - [ ] Find the joke with the requested `id` and return it.
  - [ ] If there is no joke with the requested `id`, the API should respond with `404` and a
        `Not Found` status

```js
// /pages/api/jokes/[id].js
import { jokes } from "../../../lib/data.js";

export default function handler(request, response) {
  const { id } = request.query;

  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(joke);
}
```

- [ ] Open the browser under `/api/jokes/[id]` and show the response.

### Read Data from API using `SWR`

- [ ] Remind students that you've created an API responding with either all or only one joke which
      is exactly what the frontend of this app is currently doing with the help of the external API
      via `https://example-apis.vercel.app/api/bad-jokes/`.
- [ ] Explain that we can exchange this external API with our own routes `/api/jokes` and
      `api/jokes/[id]`.
- [ ] Open `components/JokeList/index.js`; change the url passed to `useSWR` to `/api/jokes`:

```js
// `components/JokeList/index.js`
const { data } = useSWR("/api/jokes");
```

- [ ] Reload the browser under `/` and show the network tab: the request is now send to
      `http://localhost:3000/api/jokes` and receives its data from your API.
- [ ] Switch to one of the details pages (e.g. `localhost:3000/2`) and show the network again: the
      details are still fetched from the external API
      `https://example-apis.vercel.app/api/bad-jokes/2`.

- [ ] Refactor `components/Joke/index.js` to fetch the data from `api/jokes/[id]` by changing the
      url passed to `useSWR`:

```js
// `components/Joke/index.js`
const { data } = useSWR(`/api/jokes/${id}`);
```

- [ ] Open the browser and show that all pages are now fetched from your own API.

---

## Process: Challenges

- [ ] Provide the [handout](backend-api-routes.md) and the
      [challenges](challenges-backend-api-routes.md) to the students
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

How do we create an API with the help of Next.js API routes and use them in our frontend?

- Next.js uses a file system in `pages/api` to create API routes.
- Each file contains a request handler function which can communicate with a database.
- We can request a API route with `useSWR` by passing the route to the hook as argument and consume
  the returned data in our frontend.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

serverless functions, API routes, request.query, status codes, useSWR

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
