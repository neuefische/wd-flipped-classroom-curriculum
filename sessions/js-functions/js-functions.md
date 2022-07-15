# JS Functions

## Learning Objectives

In this session you will learn:

- [ ] what functions are
- [ ] how to call functions
- [ ] how to use function parameters
- [ ] what scope is

---

## Function Declarations and Function Calls

Functions are an extremely useful tool whenever you want to perform the same task multiple times.
They are **blocks of code** that can be executed any number of times. A good analogy for functions
is a recipe: a task like baking a cake is written down in a recipe. This cake can then be baked
simply by looking up that recipe and following the instructions.

A `function declaration` is exactly this set of instructions. But a declaration does nothing by
itself (you cannot eat the recipe, but only the cake). You can then execute the instructions, aka
baking the cake, by `calling the function`.

A `function declaration` looks like this:

```js
function aSuperUsefulFunction() {
	... //lines of code that will be executed on a function call
}
```

Everything between the curly brackets will be executed **whenever the function is called** in
another part of the code:

```js
aSuperUsefulFunction(); // executes whatever is specified in the function declaration.
```

For example:

```js
function logThreeTimes() {
	console.log('first');
	console.log('second');
	console.log('third');
}

logThreeTimes();
// will log:
// first
// second
// third

logThreeTimes();
// will log again:
// first
// second
// third
```

This function can be called now any number of times, and every time the three console.logs will be
executed.

## Scope

## Function Input Parameters

---

# Challenges

## Part 1

## Part 2

---

## Resources
