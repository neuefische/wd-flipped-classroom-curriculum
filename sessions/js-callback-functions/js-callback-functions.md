# JS Callback Functions

## Learning Objectives

In this session you learn:

- [ ] what a callback function is
- [ ] how to write an inline callback function
- [ ] how to use a named function as a callback function
- [ ] what a higher order function is

---

## Inline Callback Functions

A callback function is a function that is passed `as an argument` into another function.

The outer function can execute this callback function in the correct moment or multiple times, for
example:

- when an event is triggered
- when the fetched data arrived on your computer
- execute the function for each element in an array.

Callback functions are used, whenever the program itself needs to figure out `when` or
`how many times` the function needs to be executed. We already used callback functions in
`event listeners`:

```js
button.addEventListener('click', () => {
	console.log('Inside the callback function.');
});
```

Here the structure is as follows:

- outer function: `addEventListener()`
- first argument: `'click'`
- second argument: callback function
  ```js
  () => {
  	console.log('Inside the callback function.');
  };
  ```

This type of callback function is called `inline callback function`, since it is
`declared inside the outer function call`.

## Named Callback Functions

Any function can be used as a callback function. It just needs to be passed to another function. You
can declare a normal function and then use the `name of the function` to pass it into another
function:

```js
function sayHello() {
	console.log('Hey Dude!');
}

button.addEventListener('click', sayHello);
```

> ❗️ Note that we do not call the function here (we wrote `sayHello` instead of `sayHello()`). We
> only pass the function to the event listener. The function is only called when the event happens.

## Higher Order Functions

A higher order function is a function that takes a `callback function as an argument.` and
`calls the callback function` inside their body, e.g. the `addEventListener` method.

```js
// this function calls its callback function 3 times!
function myHigherOrderFunction(callback) {
	callback();
	callback();
	callback();
}
```

We will encounter these higher order functions in future sessions:

- `.then`
- `.forEach`
- `.map`
- `.filter`

> 💡 Don't worry, you don't have to write higher order functions yourself, you only apply them to
> solve certain problems.

---

## Resources

- [MDN Callback Functions](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
