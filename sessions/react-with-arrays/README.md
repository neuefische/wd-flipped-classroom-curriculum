# React with Arrays

## Learning objectives

- Knowing how to use `.map()` to render lists in JSX
- Understanding how to render items from an array of objects
- Knowing to add a unique key for list items

---

React applications are seldom static. They often render data, which often comes in the form of arrays. This is why we need to learn how to render lists of items in React.

### Question

Can you think of a way to render a list of items in React? Do any array methods come to mind?

---

### Required

---

## Session Guide

Use this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-with-arrays/demo-start
```

You can check out the final version of this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-with-arrays/demo-end
```

### Introduce the Demo

- Show and explain the JSX in the `App` component
- Show and explain the `PokemonCard` component
- Point out that only a single Pokemon is displayed
- Show the `pokemons` array in the `App` component and explain, that we like to render all Pokemons from this array

### Rendering from Array

- Explain that we need to use the `.map()` function to render items from an array in JSX
- Explain that the `.map()` function is used to apply a transformation for each item within in array. We want to transform each object from the array into a `PokemonCard` in the JSX.
- Point out that curly braces `{}` in JSX can be used not only for variables, but for any JavaScript expression. We can use the `.map()` function directly within curly braces
- Change the JSX to render the Pokemon's names for now

  ```js
  <ul className="App__pokemons">
    {pokemons.map((pokemon) => (
      <li>{pokemon.name}</li>
    ))}
  </ul>
  ```

### The `key` Prop

- Point out that something is wrong with the Code. ESLint indicates an error in the line we just wrote.
- Hover over the error squiggle line to show the message.

  > `Missing "key" prop for element in iterator`

- Explain that React needs to keep track of the individual elements we render in a list. We need to provide `unique identifier` per element by adding the `key` prop
- Change the code and add the `key` prop

  ```js
  <ul className="App__pokemons">
    {pokemons.map((pokemon) => (
      <li key={pokemon.id}>{pokemon.name}</li>
    ))}
  </ul>
  ```

> 💡 If you want, you can of course go into more detail about why React needs to keep track of the individual elements and how the `key` prop is used for this. Any real example that shows the problem will become very complex. Keep it simple and just explain that React needs a unique identifier for each element.

### Complete the demo

- Instead of rendering only the pokemon's names, render the `PokemonCard` component within the `.map()` function

  ```js
  <ul className="App__pokemons">
    {pokemons.map((pokemon) => (
      <li key={pokemon.id}>
        <PokemonCard
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          image={pokemon.image}
        />
      </li>
    ))}
  </ul>
  ```

---
