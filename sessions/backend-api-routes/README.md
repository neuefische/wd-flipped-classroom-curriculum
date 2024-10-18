# Backend API Routes

## Learning Objectives

- Understanding what serverless functions are
- Knowing the purpose of an API
- Knowing how to implement Next.js API routes:
  - Static API routes
  - Dynamic API routes
- Knowing how to read data from APIs with `useSWR`

## Requirements

- React Data Fetching
- Backend Basics

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-api-routes/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/backend-api-routes/demo-end
```

---

## Session Guide

> How do you create an API with the help of Next.js API routes and use them in our frontend?

### Introduction to Next.js API Routes

- Remind students that our main goal in the backend sessions is to build a database and to handle its data in our app (Create (data), Read, Update, Delete - CRUD).
- Note that the frontend of the app is not allowed to have direct access to the database (e.g., the database's access key must not be visible to the client). This is why we need an API as a gatekeeper between backend database and frontend app.
- Remind students that up to now, they have fetched APIs by passing a specific URL to `useSWR`.
- Tell them that this URL is an API route, i.e. a route to a specific endpoint (like
  `/api/bad-jokes/1`).
- Explain the goal of this session: instead of requesting an external API route, we can:

  - Define our own API routes inside of the app.
  - Decide what information and data the routes return.

- Explain that Next.js offers a simple solution to build your own API, called Next.js API routes:

  - It follows a simple folder structure to create API endpoints.
  - It runs code in serverless functions without further configuration.

- Explain what serverless means:
  - It's a JavaScript function that runs on a server.
  - It does not maintain any persistent state or file system.
  - Vercel allows you to have free runtime on a server (which has costs with other
    service/hosting providers).

### Next.js API Routes

- Open the starter demo and show the students around:

  - The `HomePage` (`pages/index.js`) fetches an array of jokes from an API and renders a list of jokes.
  - The `Joke` (`pages/[id].js`) fetches one joke depending on the `id` query parameter and renders this joke.
  - Both fetches use the bad-jokes API under `https://example-apis.vercel.app/api/bad-jokes/`.

- Explain that we want to build our own API:

  - One route should return all jokes.
  - Another (dynamic) route should return one joke depending on the requested `id`.
  - We will then fetch these API routes to access the data in our frontend.

- Explain that Next.js offers a simple solution for API routes: it treats all files inside of `pages/api/` as an API endpoint instead of a page.
- Create the file `/pages/api/jokes/index.js`.
- Show that there is a `lib/data.js` file which contains all jokes we want our API to return.
  - Note that these data will later come from a database. This may help to avoid confusion about the question why we fetch data from the same project.
  - Import the `jokes` array from `lib/data.js` into `/pages/api/jokes/index.js`.
- Write a `handler` function which:
  - Needs to be a default export
  - Receives an argument for `request` and `response`
  - Returns a `response` with status code of `200` and a `json` with the `jokes` data

```js
// pages/api/jokes/index.js
import { jokes } from "@/lib/data.js";

export default function handler(request, response) {
  response.status(200).json(jokes);
}
```

- Open the browser under `/api/jokes/` and show the response of all `jokes`.

- Note that this is just an example to demonstrate how API communication works:
  - Remind them that the `data` would normally be fetched from a database.
  - Note that fetching from a database is only be possible from an API route (and not from the frontend).

### Dynamic API Routes

- Explain that Next.js supports dynamic API routes as well and follows the same file naming rules used for pages.
- Create the file `/pages/api/jokes/[id].js`.
- Import the `jokes` from `lib/data.js` and write the `handler` function:
  - Explain that we want to get a joke depending on the `id` used in the browser route.
  - Show that you can access the `id` route parameter by destructuring it from `request.query`.
  - Note that the destructured value is called `id` because the file is called `[id].js`.
  - Find the joke with the requested `id` and return it.
  - If there is no joke with the requested `id`, the API should respond with `404` and a `Not Found` status.

```js
// /pages/api/jokes/[id].js
import { jokes } from "@/lib/data.js";

export default function handler(request, response) {
  const { id } = request.query;

  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    response.status(404).json({ status: "Not Found" });
    return;
  }

  response.status(200).json(joke);
}
```

- Open the browser under `/api/jokes/[id]` and show the response.

### Reading Data from API Using `useSWR`

- Remind students that you've created an API responding with either all or only one joke which is exactly what the frontend of this app is currently doing with the help of the external API via `https://example-apis.vercel.app/api/bad-jokes/`.
- Explain that we can exchange this external API with our own routes `/api/jokes` and `api/jokes/[id]`.
- Open `pages/index.js`; change the URL passed to `useSWR` to `/api/jokes`:

```js
// `pages/index.js`
const { data } = useSWR("/api/jokes");
```

- Reload the browser under `/` and show the network tab: the request is now send to `http://localhost:3000/api/jokes` and receives its data from your API.
- Switch to one of the details pages (e.g. `localhost:3000/2`) and show the network again: the details are still fetched from the external API `https://example-apis.vercel.app/api/bad-jokes/2`.

- Refactor `pages/[id].js` to fetch the data from `api/jokes/[id]` by changing the URL passed to `useSWR`:

```js
// `pages/[id].js`
const { data } = useSWR(`/api/jokes/${id}`);
```

- Open the browser and show that all pages are now fetched from your own API.
