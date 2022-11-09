# React Nesting

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding the concept of nesting
- [ ] Creating multiple custom components to create a hierarchy
- [ ] Using the `children` prop to render JSX from the parent component
- [ ] Understanding composition as a way to build complex components

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

React is all about writing components. We are going to have a look how we can create various component to create a more complex app.

### Pose a question to be answered by the end of the block!

Why is composition an important concept when writing React?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React Basics
- React Props

---

## Inform: Session Guide

- [ ] Use this demo on
      [🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-nesting/demo-start?file=/README.md)
      or locally by running this command in your Terminal:

  ```
  npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-nesting/demo-start -i
  ```

- [ ] You can check out the final version of this demo on
      [🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-nesting/demo-end?file=/README.md)
      or locally by running this command in your Terminal:

  ```
  npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-nesting/demo-end -i
  ```

- [ ] Explain the existing code in the demo

### Fragments

- [ ] Edit the `Animal` component to show a paragraph with a description after the headline
- [ ] Demonstrate that the editor highlights an error
  - [ ] `"JSX expressions must have one parent element"`
  - [ ] Besides the headline, we return now a second JSX element, but a single root element is a requirement
- [ ] We can use a `Fragment` to solve this issue
  - [ ] Explain that a `Fragment` does not create an element in the DOM
  - [ ] Therefore does not alter the layout or styling
- [ ] Show the updated demo in the browser

```jsx
function Animal({ emoji, name }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      <p>Very cute dog</p>
    </>
  );
}
```

> 💡 Perhaps it might be useful to remind the students at this point that `{ emoji, name }` is an application of the destructuring syntax. Here, the props object is being destructured. This is in reference to the prior React Props session in an effort to strengthen the students' understanding of said subject matter.

> 💡 You might mention, that using empty JSX tags is just one way to write `Fragment`. There is additional information on this topic in the handout.

### Passing React Elements as Props

- [ ] Demonstrate that all animals currently have the same description - which doesn't make sense
- [ ] Explain that we want to have one description per animal
  - [ ] We can do this by using props
- [ ] First adjust the `Animal` component
  - [ ] Add the prop `description` to the function declaration
  - [ ] Remove the paragraph from the JSX and replace with `{description}`

```jsx
function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}
    </>
  );
}
```

- [ ] Afterwards add the `description` prop to the four animals
  - [ ] Highlight that props can be of any type
  - [ ] Not only string, boolean, function, etc., but also a JSX element
  - [ ] Point out a tree of JSX elements and `Fragment` is possible (example with turtle)
- [ ] Show the updated demo in the browser

```jsx
<Animal emoji="🐕" name="Lucky" description={<p>Very cute dog</p>} />
<Animal emoji="🐈" name="Mittens" description={<p>A playful kitten</p>} />
<Animal
	emoji="🐢"
	name="Archibald"
	description={
		<>
			<p>Super relaxed turtle</p>
			<ul>
				<li>Eats lettuce all the time</li>
				<li>Can sleep in your fridge</li>
			</ul>
		</>
	}
/>
<Animal
	emoji="🐣"
	name="Chick Norris"
	description={<p>A nested chick</p>}
/>
```

### The `children` Prop

- [ ] Create a new component called `Button` besides the other two components
  - [ ] Use hardcoded text for now
- [ ] Add the `<Button />` at the end of the JSX of the `Animal` component
- [ ] Show the updated demo in the browser

```jsx
function Button() {
  return (
    <button type="button" className="button">
      Adopt
    </button>
  );
}
```

- [ ] Explain that we want to customize the button label per use case
  - [ ] The animal's name should be written on the button
- [ ] Point out that we can use a special prop provided by React called `children` for this
  - [ ] We don't need to add a prop called `children` when using our component
  - [ ] React passes everything between the `opening tag` and `closing tag` as `children`
- [ ] Adjust the `Button` component to make use of the `children` prop

```jsx
function Button({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}
```

- [ ] Adjust the `Animal` component by adding content including the `name` prop between the `opening tag` and `closing tag` of the `Button`
- [ ] Show the updated demo in the browser

```jsx
<Button>Adopt {name}</Button>
```

- [ ] Explain that we can not only use text, but also a tree of JSX elements
  - [ ] Demonstrate this by wrapping the animal's name in a `<strong>` tag
- [ ] Show the updated demo in the browser

```jsx
<Button>
  Adopt <strong>{name}</strong>
</Button>
```

### Composition

- [ ] Emphasize that writing React code is all about components

  - [ ] Explain that we should create various small components for individual parts of the UI
  - [ ] Point out, that we put together multiple smaller components to form larger, more complex components
  - [ ] This is called composition

- [ ] Use this **Composition** demo on
      [🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-nesting/demo-composition?file=/README.md)
      or locally by running this command in your Terminal:

  ```
  npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-nesting/demo-composition -i
  ```

- [ ] Tell students that this a slightly advanced version of the animal shelter demo
- [ ] Show the demo in the browser

- [ ] Explain the concept of composition based on the demo
  - [ ] Explain that having a folder called `components` is a common practice
  - [ ] Point out that it is convention to have an individual file per component
  - [ ] Demonstrate that we use `export` and `import` statements
  - [ ] Show that `Button`, `AnimalCategory`, `AnimalEmoji` and `Header` are small components
  - [ ] Show that `Animal` is a middle sized component, which imports `Button` and `AnimalEmoji`
  - [ ] Show that all components come together in the `App` component to build a complex hierarchy

### Application Design

- [ ] Explain that we need a certain level of planning when writing components
  - [ ] We need to think about the different components, that are required in our app
  - [ ] We need to decide where in the UI a component starts and where it ends (how do we cut our UI into individual components?)
  - [ ] We need to plan the way data is passed through different components
- [ ] This is called application design

---

## Process: Challenges

- [ ] Provide the [handout](react-nesting.md) and the [challenges](challenges-react-nesting.md) to
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

Children Prop, Fragment, Nesting, Composition, Application Design

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
