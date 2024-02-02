# Next.js Dynamic Routes

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding the concept of dynamic paths
- [ ] Knowing how to implement dynamic paths
- [ ] Knowing how to generate links dynamically
- [ ] Knowing hot to use imperative routing
- [ ] Understanding the next/head component

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Static routes work well for some use cases. Anytime the route needs to be more flexible and requires dynamic query parameters, we need to use dynamic routes.

### Pose a question to be answered by the end of the block!

Do you have any idea how we can conceptually avoid redundancy in repeated pages (like movies or volumes) and make the paths more dynamic so that we don't have to create one file per path?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- Next.js Basics and Routing

---

## Inform: Session Guide

### Demo

Use this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/nextjs-dynamic-routes/demo-start
```

You can check out the final version of this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/nextjs-dynamic-routes/demo-end
```

In this demo we are going to **implement dynamic routes** and use the **Head** component.

### Dynamic Routes vs. "Static Routes"

- [ ] Remind students of how the app in the starter code works.
- [ ] Show that even though we have a lot of movies in our data, we currently only show one film:
      Aquaman. It would be quite some work to create pages for every single movie in our data array.
- [ ] Explain that we can use a concept called dynamic routes.
- [ ] Dynamic routes allow us to create a single page JavaScript file that is used for a dynamic
      placeholder segment in our URL.
- [ ] Explain that in the url `movies/aquaman`, `aquaman` is one value of the dynamic placeholder
      segment
- [ ] Explain that the placeholder is expressed with square brackets:
  - [ ] `pages/movies/[slug].js` (→ `movies/foo`, `movies/bar`, `movies/baz`, …) is a dynamic route
  - [ ] `pages/movies/aquaman.js` (→ `movies/aquaman`) is a static route
- [ ] Here `[slug]` is the placeholder for the dynamic segment of the URL, just like a variable, we
      can give it any name we want.
- [ ] Explain that we can access the value of the dynamic segment using the `useRouter` hook
      provided by Next.js.

### Create a dynamic route

- [ ] Rename `pages/movies/aquaman.js` to `pages/movies/[slug].js`
- [ ] Show that you can now open `/movies/aquaman` and `/movies/the-avengers` and see the same page.
- [ ] Explain that we want to show the correct movie depending on the slug.
- [ ] Point out that the `"aquaman"` slug is hardcoded in the `Movie` component.
- [ ] Import `useRouter` from `next/router` and use it to get the slug from the URL:
  ```js
  const router = useRouter();
  const { slug } = router.query;
  ```
- [ ] Explain that `router.query` is an object that contains all the query parameters of the URL. We
      use destructuring to get the `slug` property.
- [ ] **Explain that `slug` is named `slug` because the file is named `[slug].js`. If we were to
      name it `[banana].js` we would have to destructure `banana` from the `query` object.**
- [ ] Replace the hardcoded `"aquaman"` with `slug` in the `Movie` component and show that the
      correct movie is now shown.

### Link to dynamic routes

- [ ] Show that we still link to the static route `/movies/aquaman` in the `Movies` component.
- [ ] Explain that we need to map over the movies and generate a link for each movie.
- [ ] Import the movies into the `Movies` component:

  ```js
  import { movies } from "../../lib/data";
  ```

- [ ] Explain that we use the `map` method to generate a link for each movie while using string
      interpolation to create the correct URL:

  ```js
  {
    movies.map(({ slug, title, id }) => (
      <li key={id}>
        <Link href={`/movies/${slug}`}>{title}</Link>
      </li>
    ));
  }
  ```

- [ ] Show that all the links work now.

### Edge-Case: useRouter with Next.js Pre-Rendering

Why is this `early return` so important?

```js
if (!currentMovie) {
  return null;
}
```

Comment it out and show that it doesn't make any difference - as long as you are using the `Next.js Link Components` inside of your app. (These links don't make real http-requests to the server).

In opposite: If you create a real http-request by typing `movies/Aquaman` into the browsers URL it will throw an error: `currentMovie` is now undefined because when pre-rendering the site, the `slug` can't be read from the browsers API and a `currentMovie` can't be found.

### Imperative Routing

> 💡 If you are short on time, skip this section. Imperative routing is explained in the handout and
> only required for the bonus challenge.

- [ ] Explain that we can also navigate imperatively using the `router.push` method. This is useful
      when we want to navigate to a route not in direct response to a user action.
- [ ] As an example we want to create a button that navigates to the aquaman movie page, but only
      after the user confirms that they are - in fact - Aquaman.
  - [ ] This is of course a silly example, but it illustrates the concept.
  - [ ] In the future this will mainly be used to navigate to a new page after a create form has
        been submitted.
- [ ] Add a button to the `Movies` component that asks the user if they are Aquaman.
  ```js
  <button onClick={() => {}} type="button">
    Are you Aquaman?
  </button>
  ```
- [ ] In the onClick handler we want to use the native `confirm` method to ask the user if they are
      Aquaman.
  ```js
  <button
    onClick={() => {
      if (confirm("Are you Aquaman?")) {
        console.log("navigate to the aquaman movie page");
      }
    }}
    type="button"
  >
    Are you Aquaman?
  </button>
  ```
- [ ] Demonstrate that the button shows a confirmation dialog and only logs a message if the user
      confirms.
- [ ] Explain that we need to use a method provided by Next.js to actually navigate to the aquaman
      page.
- [ ] Explain that we can use the `useRouter` hook to get the `router` object which has a `push`
      method that when called navigates to a new path. Import it and use it in the `Movies`
      component.

  ```js
  import { useRouter } from "next/router";
  ```

  ```js
  const router = useRouter();
  ```

  ```js
  <button
    onClick={() => {
      if (confirm("Are you Aquaman?")) {
        router.push("/movies/aquaman");
      }
    }}
    type="button"
  >
    Are you Aquaman?
  </button>
  ```

- [ ] Point out that a `<Link>` component should _always_ be preferred over imperative routing,
      because it is more accessible, it is easier to see where the link goes and Next.js also
      prefetches the page in the background giving us a faster page load.

### Head

- [ ] Explain that we can use the `Head` component to change the title of the page or add meta tags
      and other information to the head of the page.
- [ ] Import the `Head` component from `next/head` and use it in the `Movie` component to change the
      title of the page to the title of the movie.
  ```js
  import Head from "next/head";
  ```
  ```js
  <Head>
    <title>{title}</title>
  </Head>
  ```
- [ ] Show that the title of the page is now the title of the movie.

- [ ] Repeat the same thing for the `Movies` component but set the title to `List of Movies`.
  ```js
  <Head>
    <title>List of Movies</title>
  </Head>
  ```

---

## Process: Challenges

- [ ] Provide the [handout](nextjs-dynamic-routes.md) and the
      [challenges](challenges-nextjs-dynamic-routes.md) to the students
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

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
