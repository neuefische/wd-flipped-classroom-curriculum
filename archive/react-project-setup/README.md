# React Project Setup

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:30     | Session         |
| 1:45     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Having a general understanding of project scaffolding
- [ ] Learning how to work with Create React App
- [ ] Knowing the purpose of a bundler
- [ ] Understanding common `npm` scripts
- [ ] Knowing the difference between `public` and `src` folder

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

When starting a new project we don't want to waste time, but start writing the code for our app idea
as soon as possible. There are tools to help us getting started, like Create React App.

### Pose a question to be answered by the end of the block!

In which ways does Create React App helps us to write apps?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React Basics
- React Nesting

---

## Inform: Session Guide

### Project scaffolding

- [ ] Introduce to `project scaffolding`
  - [ ] When starting a new project from scratch you have to set up a few things
    - Create a directory
    - `npm init`
    - install dependencies with `npm`
    - create basic files like `index.html`, `index.js` and `styles.css`
    - `git init`
    - create a `.gitignore` file
    - make an initial git commit
    - (to name just some examples)
- [ ] Explain what `project scaffolding` is
  - Using tools to automate this process of creating a new project
- [ ] Mention that there a various tools available
  - We are going to use the very popular `Create React App`

### Introduction to Create React App

- [ ] Open the [Create React App website](https://create-react-app.dev/) and show the "Getting
      Started" section
- [ ] Create a new project with `create-react-app`

```sh
npx create-react-app my-app
```

- [ ] Follow the suggested output shown by `create-react-app`
- [ ] Start the dev server and demonstrate the working React app in the browser

```sh
cd my-app
npm start
```

- [ ] Explain the purpose of the `src` folder
  - A place to put all the code for our application
- [ ] Open the `App.js`
  - [ ] Demonstrate that this is the code which generated the content shown in the browser
- [ ] Point out that a `css` file is imported at the beginning of `App.js`
  - [ ] Open the `App.css` file
  - [ ] Show some classes like `App-header` in the `App.css` and their usage in `App.js`
  - [ ] Explain that instead of adding a `<link>` tag to the HTML head or using `@import` rule in
        `css` files, we should import our styles in `js`
- [ ] Point out that a `svg` file is imported at the beginning of `App.js`
  - [ ] This will create a path we can use for the `src` attribute of an `<img>` tag

### Bundlers

- [ ] Explain that we can import such file types in JavaScript because of a bundler
  - [ ] Point out that `create-react-app` installed and configured a bundler for us: `webpack`
- [ ] Open the [webpack website](https://webpack.js.org/) and show the image in the header
- [ ] Explain the purpose of a bundler
  - It resolves the dependencies (imports) across all your files
  - Can handle all sorts of file types
  - It bundles all those files from our code together into one file or a few files (depending on the
    file types and configuration)
  - The generated bundles are loaded in the browser (not the files we wrote in our code)
- [ ] Give an example like this:
  - We wrote 10 `js` files for 10 different components
  - The browser will not load 10 `js` files, but only one
- [ ] Explain that the bundler can also take care of `transpilation`
  - [ ] Explain the term `transpilation`:
    - It takes code written in one programming language and translates it into another programming
      language
  - [ ] Explain why this is important with React apps
    - We write JSX code
    - JSX is no standard JavaScript code the browser can understand and run
    - The JSX code needs to be translated into standard JavaScript first
  - [ ] Mention that Create React App configures `webpack` to use the `babel` compiler for this
        purpose

### `npm` scripts

- [ ] Open the `package.json` file and show the `scripts` section
  - [ ] Explain the idea of the the `scripts` section
    - We can put scripts here that can be started with `npm run`
    - Create React App created some scripts for us
- [ ] Mention that students have used `npm` scripts before
  - e.g. unit testing with `jest`
- [ ] Point out that the `scripts` section contains the `start` script we used earlier
  - It is used for local development
  - It runs the bundler
  - It starts a web server on our computer
  - It reloads the website in the browser when we change code
- [ ] Explain the purpose of the `build` script
  - It runs the bundler once to create an "optimized production build"
  - It is not used for local development, but when we want to deploy our app to a server reachable
    from the internet
  - It bundles all of our code and puts it into the `build` folder
    - This can be deployed on a server environment
- [ ] Run `npm run build` and show the result in the `build` folder

### `npm` dependencies

- [ ] Open the `package.json` file and show the `dependencies` section
  - [ ] Point out that `react` and `react-dom` are listed here
- [ ] Explain that this code installed via `npm` is part of our app
  - It will be shipped to the browser together with the code we wrote ourself
- [ ] Mention that it is very common to use code written by others and we will rely on such code
      more in further lectures

### Linters

- [ ] Explain that Create React App contains a configuration for eslint
  - Highlights warnings and error messages special to React or JSX in VS Code
- [ ] Demonstrate this by removing the `alt` prop from the `<img />` in `App.js`
  - [ ] Point out the yellow squiggle line and show the warning message by hovering over it
    - > `img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.eslintjsx-a11y/alt-text`
  - [ ] Fix the warning by re-adding the `alt` prop

### The `public` dir

- [ ] Explain the purpose of the `public` folder
  - A place to put files that will be delivered by the web server directly
  - The files will be copied to the `build` dir as they are
  - Everything that doesn't get imported in our code in the `src` folder
- [ ] Point out and show the `index.html`
  - Show the `root` node where the React app is mounted

### Component structure

Open the
[demo]:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-project-setup/demo-project-structure
```

- [ ] Show the rendered page of this React app
- [ ] Explain this project was also started with Create React App
- [ ] Explain the overall structure of this app
  - [ ] Point out there is a `components` folder inside of the `src` folder
    - [ ] All component we write live here
  - [ ] Expand the `src` folder and demonstrate there are multiple sub-folders
    - [ ] When there are just a few components / files, we can keep them all directly in the
          `components` folder
    - [ ] As soon as the amount of files grows it gets messy
      - [ ] We create a sub-folder per component
    - [ ] We should create a sub-folder when a component includes multiple files (like `js` and
          `css`)
  - [ ] Point out that we split components up into different files
    - [ ] Each component has its own `js` file
  - [ ] Point out that we place the `css` files for this component directly besides the `js`
    - [ ] Open any component and demonstrate how the `css` file is imported (e.g. `Header.js`)
    - [ ] Open the corresponding `css` file
    - [ ] Explain that the selectors use the `BEM` method (visible in `Header/index.js`)
  - [ ] Mention that `tests` should also be placed besides the components
- [ ] Conclude that following these guidelines ensures a consistent structure of our codebase which
      helps a lot when writing code

---

## Process: Challenges

- [ ] Provide the [handout](react-project-setup.md) and the
      [challenges](challenges-react-project-setup.md) to the students
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

create-react-app, project scaffolding, bundler, transpilation, npm dependencies, npm scripts

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.

```

```
