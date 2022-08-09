# JS Functions 2

## Learning Objectives

In this session you will learn:

- [ ] how to return values from a function
- [ ] what an `early return` is
- [ ] how to write functions with the `fat arrow notation`

---

## Return Statements

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

> 💡 An expression is anything that produces a value: a variable, a hardcoded value like `true` or
> `6`, a math operation like `2 + 3` or even another function call!
> [This article](https://www.joshwcomeau.com/javascript/statements-vs-expressions/) explains this in
> greater depth.

By this, we can outsource computations and / or decision processes and continue using the returned
value in the program.

A function can return only one expression value, but can have multiple return statements, in
combination with if else statements for example:

```js
function checkInputLength(inputString) {
	if (inputString.length > 3) {
		return true;
	} else {
		return false;
	}
}
```

## Early Return Statements

As soon as a return statement is reached in a function call, the function execution is ended. The
following console.log is therefore never reached:

```js
function testFunction() {
	return 'a returned string';

	console.log('I am never logged in the console.');
}
```

This behavior can be used to our advantage as early return statements. Sometimes we want to execute
certain parts of our code only if a condition applies. We can check this with an if else statement:

```js
function setBackgroundColor(color) {
	if (color.startsWith('#')) {
		body.style.backgroundColor = color;
	}
}
```

The problem with this style is, that as soon we have more conditions the code becomes heavily
nested:

```js
function setBackgroundColor(color) {
	if (typeof color === 'String') {
		if (color.startsWith('#')) {
			if (color.length >= 7) {
				body.style.backgroundColor = color;
			}
		}
	}
}
```

This code gets really hard to read. We can prevent this nesting by terminating the function with an
early return statement:

```js
function setBackgroundColor(color) {
	// first condition
	if(typeOf color !== 'String') {
		return;
	}

	// second condition
	if(!color.startsWith('#')) {
		return;
	}

	// third condition
	if(color.length < 7) {
		return;
	}

	// only if all 3 conditions are passed the final line of code is executed.
	body.style.backgroundColor = color;
}

```

This way of writing the code is more readable

💡 Hint: A return statement can be left empty, the returned value is then `undefined`.

## Arrow Function Expressions

Next to the classic function declaration, JavaScript has a second way to write functions as
`arrow function expressions`:

```js
const myFunction = (input1, input2) => {
	console.log(input1);
	return input1 + input2;
};
```

The function is now saved like a variable with the keyword `const` and the name on the left side of
an equals sign. The input arguments are then written normally in round brackets followed by an fat
arrow `=>`. Then the function body is written in curly brackets.

### Implicit Return Statements

The real advantage of arrow functions are possible shorter notations when certain criteria apply:

1. You can omit the round brackets with only one input:
   ```js
   const myFunction = input1 => {
   	console.log(input1);
   	return input1;
   };
   ```
2. implicit return statements: If the function only of a return statement, the curly brackets and
   the return keyword can be omitted:
   ```js
   const myFunction = (input1, input2) => {
   	return input1 + input2;
   };
   ```
   can be rewritten as:
   ```js
   const myFunction = (input1, input2) => input1 + input2;
   ```

> 💡 This shorthand notation comes in handy as soon as we work with callback functions in a few
> days. So try to remember this feature.

> 💡 Maybe you remember the syntax of the `addEventListener` method. We encountered these arrow
> functions there already!
>
> ```js
> element.addEventListener('click',() => {
> 	...
> })
> ```

## Resources

- [Statements vs Expressions by Josh Comeau](https://www.joshwcomeau.com/javascript/statements-vs-expressions/)
