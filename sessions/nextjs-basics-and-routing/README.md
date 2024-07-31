# Next.js Basics and Routing

## Learning objectives

- Having a basic understanding of the difference between a plain React and a Next.js app
- Knowing the important files of a Next.js app
- Knowing Next.js has server-side rendering
- Using file-system based routing
- Using the `<Link>` component provided by Next.js
- Using the `<Image>` component provided by Next.js

---

We want to build large, scalable, feature-rich, optimized apps with React for real production environments. Next.js comes with many solutions to get us there.

### Question

How can we create an app with different pages?

---

### Required

- All of React

---

## Session Guide

### Introduction to Next.js

- Show the [Next.js website](https://nextjs.org/)

> The website is constantly updated. Especially with all the new features that will be added in version 13.
> To use the website view to explain the following features use [this snapshot](https://web.archive.org/web/20221129052839/https://nextjs.org/) taken when the following part was written.

> "The React Framework for Production"

- Point out that Next.js uses React and we continue to write React code as we did before
- Briefly explain the difference between a library and a framework
  - 📑 **Library**
    - Smaller, provides specific tools
    - Like React: state handling, UI rendering
  - 📚 **Framework**
    - Large set of solutions for various typical challenges
    - Often opinionated on how to do things
- Scroll down to the "The Web SDK" section and introduce some Next.js features we are going to use

  - **Zero Config**: we can setup Next.js with one command and everything works out of the box
  - **File-system Routing**: we are going to establish multiple pages with an individual URL using the tools Next.js includes
  - **API Routes**: we are going to build our own API to fetch data and more
  - **Built-in CSS Support**: we are going to learn a new technique to write super flexible CSS with React and Next.js supports it
  - **Image Optimization**: we can include images that are optimized and scaled to the device and viewport with no effort

- Mention we can easily deploy our Next.js Projects to Vercel
  - Mention this is because Next.js is made by Vercel

### Creating a new Next.js app

- Click on the **Docs** link in the main navigation to get to the **Getting Started** section
- Copy the command to start a new project and execute it in your terminal

```sh
npx create-next-app@latest
```

- Follow the setup guide (select _JavaScript_ and enable _ESLint_)
- Open the created project folder in VS Code
- Run the dev server with the following command.
  - Explain the command is **not** `npm run start` as with `create-react-app`

```sh
npm run dev
```

- Open the Next.js app on [localhost:3000](http://localhost:3000/) in your browser:
- Demonstrate everything works by doing what is stated on the website: "Get started by editing pages/index.js"
  - Open `pages/index.js`, change some text and show the changed content on the website again
- Explain the `pages` folder
  - Explain there is no `index.js` as starting point for the app (like with plain React)
  - Point out there is a `pages` folder that contains all our pages (more on this later)
  - Explain the file we edited, `pages/index.js`, is the React code for the homepage
  - Point out `pages/_app.js` is the root component for the app
    - Like `App.js` with `create-react-app`
    - Everything relevant for all pages can be added here
  - Mention `pages/api` is used to create APIs. We will ignore this for now, but learn about it in a later session
  - Mention the students will work with a template for Next.js projects

> 💡 We demonstrate `create-next-app` once in this session. The students are going to work with a provided template including setup/config for Styled Components, Jest, SVGR and @next/font. The challenge document contains instructions on how to do that.

- Explain Next.js includes ESlint
  - Mention the "code spell checker" is already installed and pre-configured
  - Point out it has some specific rules for Next.js app. We will see this later.
- Mention we are going to ignore the `styles` folder

  - Explain that Next.js uses something called CSS modules to write styles by default
  - Explain we will not look into that, but learn another technique to write styles soon (→ _Styled Components_)

- Explain Next.js pre-renders pages on the server

  - Point out our code gets executed twice: on the server and on the client (browser)
    - Explain that previously our React code was only executed in the browser
    - Explain that our code now also gets executed on the server, before sending the page to the browser
  - Mention this enables a lot of advanced optimization possibilities, which we are not going to use (for performance and SEO)
  - Highlight the main implications for us
    - When using browser APIs (like `window` or `document`), we need to make sure that this code is only run on the client. For example we could wrap the code into `useEffect` (effects are not executed on the server, but only on the client) or put it into an event handler (events are only triggered on the client).
    - Some libraries are not made with server-side rendering in mind and we need to treat them in a special way (like `leaflet`, a map tool used in some capstone projects)

### File-system Routing

Let's have a closer look at the `pages` dir.

- Explain that we can build different pages with individual paths with Next.js
  - Mention that we only had a single path `/` previously, a single page
  - Explain that having multiple pages with individual paths is a core concept of Next.js
- Explain this concept is called `routing`: having different pages and being able to navigate between them
- Explain the routing in Next.js is file-system based
  - The names of folders and files in the `pages` folder determine the routes of the pages
  - _route_ = _folder_ + _file name_
- Explain the homepage as example: `/` is associated with `pages/index.js`
- Create another page to give an example: `pages/about.js`
  - Explain each page in Next.js is a file in the `pages` folder that has a React component with `export default`

```jsx
export default function About() {
  return <h1>The about page</h1>;
}
```

- Open [localhost:3000/about](http://localhost:3000/about) in your browser
- Demonstrate `pages/about.js` is reachable via `/about`
- Show we can use folders by creating the file `pages/movies/index.js`

```jsx
export default function Movies() {
  return <h1>My Favorite Movies</h1>;
}
```

- Open [localhost:3000/movies](http://localhost:3000/movies) in your browser
- Demonstrate `pages/movies/index.js` is reachable via `/movies`
- Explain `index.js` is the root of it's folder
  - It always reflects the `/` segment within a folder
- Show this by creating the file `pages/movies/hulk.js`

```jsx
export default function Hulk() {
  return <h1>The Incredible Hulk</h1>;
}
```

- Open [localhost:3000/movies/hulk](http://localhost:3000/movies/hulk) in your browser
- Demonstrate `pages/movies/hulk.js` is reachable via `/movies/hulk`
- Create another page as another example: `pages/movies/spiderman.js`

```jsx
export default function Spiderman() {
  return <h1>Spiderman 1-25</h1>;
}
```

- Open [localhost:3000/movies/spiderman](http://localhost:3000/movies/spiderman) in your browser
- Demonstrate `pages/movies/spiderman.js` is reachable via `/movies/spiderman`

### Navigation with next/link

- Open `pages/movies/index.js` and show how we **don't** create links in Next.js

```js
export default function Movies() {
  return (
    <>
      <h1>My Favorite Movies</h1>
      <ul>
        <li>
          <a href="/movies/hulk">Hulk</a>
        </li>
        <li>
          <a href="/movies/spiderman">Spiderman</a>
        </li>
      </ul>
    </>
  );
}
```

- Highlight the ESLint error message

> "Do not use an `<a>` element to navigate to `/movies/hulk`. Use `<Link />` from `next/link`"

- Open [localhost:3000/movies](http://localhost:3000/movies) in your browser

  - Click on a link and demonstrate the browser flashes to white and loading takes some time

- Explain that Next.js comes with a special `<Link>` component to navigate between pages

  - It applies optimizations out of the box
  - Navigation with `<a>`: browser reloads page completely (takes some time)
  - Navigation with`<Link>`: Next.js loads content before clicking the link and changes it immediately on click (feels super fast)

- Replace `<a>` with the `<Link>` component

```js
import Link from "next/link";

export default function Movies() {
  return (
    <>
      <h1>My Favorite Movies</h1>
      <ul>
        <li>
          <Link href="/movies/hulk">Hulk</Link>
        </li>
        <li>
          <Link href="/movies/spiderman">Spiderman</Link>
        </li>
      </ul>
    </>
  );
}
```

- Open [localhost:3000/movies](http://localhost:3000/movies) in your browser
  - Click on a link and demonstrate the page is shown without delay

### Images with `next/image`

- Open `pages/movies/index.js`
- Add a nice cinema image to the page. At first, show how we **don't** do it in Next.js

```jsx
import Link from "next/link";

export default function Movies() {
  return (
    <>
      <h1>My Favorite Movies</h1>
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="cinema"
        width={640}
        height={426}
      />
      {/* ... ul here ... */}
    </>
  );
}
```

- Highlight the ESLint error message

> "Do not use `<img>` element. Use `<Image />` from `next/image` instead."

- Open [localhost:3000/movies](http://localhost:3000/movies) in your browser
  - Open the Inspector panel in the dev tools and hover over the `src` attribute of the `<img>` tag
  - Demonstrate we loaded a huge image (which is super slow for all users)
- Explain that Next.js comes with a special `<Image>` component
  - It applies optimizations automatically for all images
  - Like scaling images to the right size, even with different sizes for responsive design
  - And a lot more we won't go into detail about
- Replace `<img>` with the `<Image>` component

```jsx
import Link from "next/link";
import Image from "next/image";

export default function Movies() {
  return (
    <>
      <h1>My Favorite Movies</h1>
      <Image
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="cinema"
        width={640}
        height={426}
      />
      {/* ... ul here ... */}
    </>
  );
}
```

- Explain we need to configure the allowed domains if we use image from other domains (like `source.unsplash.com`)
- Open the file `next.config.js` and add the following section to `nextConfig`

```js
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
```

- Restart the Next.js server: `npm run dev`
- Open [localhost:3000/movies](http://localhost:3000/movies) in your browser
  - Open the Inspector panel in the dev tools and hover over the `src` attribute of the `<img>` tag
  - Demonstrate we loaded a much smaller image (which is better for performance)

---
