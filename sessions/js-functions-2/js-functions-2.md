# JS Functions 2

## Learning Objectives

In this session you will learn:

- [ ] how to return values from a function
- [ ] what an `early return` is
- [ ] how to write functions with the `fat arrow notation`

---

## Return statements

Functions are an incredibly versatile and central tool in any programming language. We already
learned how to pass values into a function with input parameters. But a function can also return a
value back to the main program flow. This is done via a `return statement`.

```js
function add3Numbers(first, second, third) {
	const sum = first + second + third;
	return sum;
}
```

The return statement begins with the keyword `return` followed by an expression. This this case, the
expression is the variable sum. Its value is returned by the function and can be stored when the
function is called:

```js
const firstSum = add3Numbers(1, 2, 3);
// the return value is stored in "firstSum", namely 6

const secondSum = add3Numbers(4, 123, 33);
// the return value is now stored in "secondSum", namely 160
```

> 💡 An expression is anything that evaluates to a value: a variable, a math operation like `2 + 3`
> or even another function call!

By this, we can outsource computations and / or decision processes and continue using the returned
value in the program.

A function can return only one value, but can have multiple return statements, in combination with
if else statements for example:

```js
function checkInputLength(inputString) {
	if (inputString.length > 3) {
		return true;
	} else {
		return false;
	}
}
```

### Sub Topic 1

### Sub Topic 2

---

# Challenges

## Part 1

## Part 2

---

## Resources
