# React Component Testing

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 1:00     | Session         |
| 1:30     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- [ ] Understanding the idea of component testing
- [ ] Knowing how to
  - render a React component in tests
  - simulate interaction with a rendered React component in tests
  - searching for expected elements in the rendered React component
  - formulate expected results
- [ ] Having a general understanding of mocks

> 💡 Mocks are only part of the Handout

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Testing components gives us the confidence that our components work as expected. This is especially important when we refactor our code, because we can be sure that we didn't break anything. Tests should be independent of the implementation details of the component, so that we can refactor the code without breaking the tests.

### Pose a question to be answered by the end of the block!

What do you remember about unit testing with Jest? Can you imagine how we could potentially test React components with Jest?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- [ ] Unit testing with Jest
- [ ] React

---

## Inform: Session Guide

### What are Component Tests and why are they important?

- [ ] Explain that students already know about unit tests (and maybe integration tests)
- [ ] Explain that component tests are a special kind of integration tests
  - [ ] React components consist of multiple units so component testing is a kind of integration
        testing
- [ ] Explain that they test a component (in our case a React component) in isolation from the rest of the
      application
- [ ] Instead of running a function and checking the return value (like we did before), we render a component and check the
      rendered output
- [ ] Explain that we can also simulate user interactions (clicking, typing, etc.) and check if the component behaves as expected
- [ ] Explain that we can use the same testing framework (Jest) for component tests as we used for unit tests
- [ ] Explain that for Jest to work with React components, we use a special package called `react-testing-library`
- [ ] Explain that testing components is a very important skill for developers
  - [ ] It's a rare skill, so it's a good way to stand out in job applications
  - [ ] It allows us to refactor our code without breaking it
  - [ ] You can write tests before you write the code, which is called Test Driven Development (TDD) and is a very good practice

> 💡 Test driven development is a very good practice, but it's not something we will cover in this session

### Movies App Demo

Use this demo or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-component-testing/demo-start
```

You can check out the final version of this demo or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-component-testing/demo-end
```

- [ ] Show the students the Movies App Demo in the browser
- [ ] Explain that it has three main components: `Movies`, `Movie` and `Form`
- [ ] We can write tests for each of these components

### Check the rendered output of a component

- [ ] Explain that we are going to use two methods from `react-testing-library` to check the rendered output of a component
  - [ ] `render` renders a component to a simulated DOM (in memory using `jsdom`, not in a real browser)
  - [ ] `screen` is a special object that contains all the elements that were rendered and has useful methods to check them
- [ ] Create a new file `components/Movie/Movie.test.js`
- [ ] Create a new `test` block with the description "renders a movie"
  ```js
  test("renders a movie", () => {
    // …
  });
  ```
- [ ] Import the `Movie` component
  ```js
  import Movie from ".";
  ```
- [ ] Import `render` and `screen` from `react-testing-library`
  ```js
  import { render, screen } from "@testing-library/react";
  ```
- [ ] Render the `Movie` component in the test block
  ```js
  render(<Movie name="The Matrix" />);
  ```
- [ ] Explain that we can now check the rendered output of the component using the `screen` object, its methods and `expect` with `toBeInTheDocument`
  ```js
  const matrixHeading = screen.getByText("The Matrix");
  expect(matrixHeading).toBeInTheDocument();
  ```
- [ ] Run the tests with `npm run test` and show that the test passes
- [ ] Change the name of the movie to "The Matrix Reloaded" in the render function and show that the test fails
- [ ] Update the test to check for the new name and show that the test passes again

### Get elements on the screen

- [ ] Show that we can also use `getByRole` to get elements on the screen
  ```js
  const matrixHeading = screen.getByRole("heading", {
    name: "The Matrix Reloaded",
  });
  expect(matrixHeading).toBeInTheDocument();
  ```
- [ ] Open the [testing library docs](https://testing-library.com/docs/queries/about#priority) and show that there are many other ways to get elements on the screen
- [ ] Explain that students should try to follow the priority list in the docs when selecting elements in tests
- [ ] Explain that this helps to write tests that follow accessibility best practices, are resilient to changes and mirror how users interact with the app
- [ ] Your full test should now be:

  ```js
  import { render, screen } from "@testing-library/react";
  import Movie from ".";

  test("renders a movie", () => {
    render(<Movie name="The Matrix Reloaded" />);
    const matrixHeading = screen.getByRole("heading", {
      name: "The Matrix Reloaded",
    });
    expect(matrixHeading).toBeInTheDocument();
  });
  ```

### Check the rendered output of a component pt. 2

- [ ] Create a new file: `components/Movies/Movies.test.js`
- [ ] Paste in the following code or write the test together with students. The code includes no new concepts.

  ```js
  import { render, screen } from "@testing-library/react";
  import Movies from ".";

  const initialMovies = [
    {
      id: "0",
      name: "The Incredible Hulk",
      isLiked: false,
    },
    {
      id: "1",
      name: "Spiderman 1-25",
      isLiked: false,
    },
    {
      id: "2",
      name: "Lord of the Rings",
      isLiked: true,
    },
  ];

  test("renders the initialMovies", () => {
    render(<Movies initialMovies={initialMovies} />);
    const hulkHeading = screen.getByRole("heading", {
      name: "The Incredible Hulk",
    });
    expect(hulkHeading).toBeInTheDocument();

    const spidermanHeading = screen.getByRole("heading", {
      name: "Spiderman 1-25",
    });
    expect(spidermanHeading).toBeInTheDocument();

    const lordOfTheRingsHeading = screen.getByRole("heading", {
      name: "Lord of the Rings",
    });
    expect(lordOfTheRingsHeading).toBeInTheDocument();
  });
  ```

- [ ] Run the tests and show that the test passes
- [ ] Discuss the test with the students
  - [ ] `initialMovies` is defined outside the test block for reusability
  - [ ] the `render` function is called with the `initialMovies` as a prop
  - [ ] we use `expect` with `toBeInTheDocument` to check if the movies are on the screen (using `getByRole` because the movie names are headings)

> 💡 This might be a good time to discuss writing the test descriptions. The test description should be a sentence that describes what the test does. It should be written in the present tense. For consistency during this bootcamp, we imagine each description beginning with "it". For example, "it renders the initialMovies" or "it renders a movie" without including the word "it" itself. In fact, we could use the `it` function from Jest to write the test descriptions as it is an alias for `test`: `it("renders the initialMovies", () => { … })`. We are using `test` here because it is standard in all documentations.
>
> The description should not contain any implementation details. For example, "renders the initialMovies" is a good description, but "renders the initialMovies using getByRole" is not.
>
> Do not spend too much time on this, as this is handled inconsistently in the industry. It is more important to convey what the test does than sweating over the exact wording.

### Simulate user interactions

- [ ] Explain that we can simulate user interactions with `userEvent` from `@testing-library/user-event`.
- [ ] For example, if we want to test if we can add a movie using the form, we can simulate a user typing in the input and clicking the button
- [ ] Create a new test block inside `Movies.test.js`:
  ```js
  test("renders a new movie when the form is submitted with a new movie name", () => {
    render(<Movies initialMovies={initialMovies} />);
    // …
  });
  ```
- [ ] Explain that we need to import `userEvent` from `@testing-library/user-event`
  ```js
  import userEvent from "@testing-library/user-event";
  ```
- [ ] Explain that we need to initialize a `user` that interacts with the rendered component. (Make this the first line of the test block)
  ```js
  const user = userEvent.setup();
  ```
- [ ] Explain that we need to select the input and "type in" a new movie name
  ```js
  const input = screen.getByLabelText("Name");
  user.type(input, "The Matrix");
  ```
- [ ] Explain that user interactions are not immediate, so we need to wait for the typing to finish using `await`
  ```js
  await user.type(input, "The Matrix");
  ```
- [ ] Show that we need to make the test asynchronous by adding `async` to the test block
  ```js
  test("renders a new movie when the form is submitted with a new movie name", async () => {
    // …
  });
  ```
- [ ] Repeat the steps for the button
  ```js
  const button = screen.getByRole("button", { name: "Add" });
  await user.click(button);
  ```
- [ ] Explain that we can now check if the new movie is on the screen
  ```js
  const matrixHeading = screen.getByRole("heading", { name: "The Matrix" });
  expect(matrixHeading).toBeInTheDocument();
  ```
- [ ] Your full test should now be:

  ```js
  test("renders a new movie when the form is submitted with a new movie name", async () => {
    const user = userEvent.setup();
    render(<Movies initialMovies={initialMovies} />);
    const input = screen.getByLabelText("Name");
    await user.type(input, "The Matrix");
    const button = screen.getByRole("button", { name: "Add" });
    await user.click(button);
    const matrixHeading = screen.getByRole("heading", { name: "The Matrix" });
    expect(matrixHeading).toBeInTheDocument();
  });
  ```

### More examples

> 💡 The final state of the demo includes more test examples. Feel free to show them to the students or hand them out as a reference.

---

## Process: Challenges

- [ ] Provide the [handout](react-component-testing.md) and the
      [challenges](challenges-react-component-testing.md) to the students
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

Component Testing, Jest, React Testing Library, render(), screen.getByRole(), screen.getByLabelText(), userEvent.setup(), userEvent.type(), userEvent.click(), expect().toBeInTheDocument()

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
