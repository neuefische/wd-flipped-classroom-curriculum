# JS Conditions and Booleans

## Learning Objectives

- [ ] hot to use conditions to control the program flow
- [ ] what booleans and truthy / falsy values are
- [ ] how to write a ternary expression
- [ ] what a switch statement is

---

## Truthy and Falsy Values

Boolean variables can either be `true` or `false`. Booleans are often used in conditional statements
which can execute different code depending whether the conditional statement is either `truthy` or
`falsy`.

JavaScript can transform any value into a boolean with type coersion. `Truthy` values become `true`,
`falsy` values become `false`.

- `truthy` values:

  - non zero numbers: 1, 2, -3, etc.
  - non empty strings: "hello"
  - true

- `falsy` values:
  - 0 / -0
  - null
  - false
  - undefined
  - empty string ""

## Comparison Operators

Logical operators produce boolean values by comparing up to two expressions:

| Operator  | Effect                                                            |
| --------- | ----------------------------------------------------------------- |
| A `===` B | strict equal: is `true` if both values are equal.                 |
| A `!==` B | strict not equal: is `true` if both values are not equal.         |
| A `>` B   | strictly greater than: is `true` if A is greater than B.          |
| A `<` B   | strictly less than: is `true` if A is less than B.                |
| A `>=` B  | greater than or equal: is `true` if A is greater than or equal B. |
| A `<=` B  | less than or equal: is `true` if A is less than or equal B.       |
| `!`A      | `not`: is `true` if a is `falsy`, and `false` if A is `truthy`.   |

## Control Flow: `if / else`

With an if statement we can control whether a part of our code is executed or not, based on a
condition.

```js
const isSunShining = true;

if (isSunShining) {
	// code that is executed only if condition "isSunShining" is true
}
```

The else statement is executed only if the condition is `false`.

```js
const isSunShining = false;

if (isSunShining) {
	// code that is executed only if condition "isSunShining" is true
} else {
	// code that is executed only if condition "isSunShining" is false
}
```

The condition expression between the `()` brackets can be composed of logical operators as well. You
can distinguish between more cases by chaining `else if` statements:

```js
if (hour < 12) {
	console.log('Good Morning.');
} else if (hour < 18) {
	console.log('Good afternoon.');
} else if (hour === 24) {
	console.log('Good night.');
} else {
	console.log('Good evening.');
}
```

If the condition is not a boolean, it is converted into one by the `truthy` / `falsy` property of
that value. An if statement does not need an else statement.

```js
const name = 'Alex';
if (name) {
	console.log('Hi ' + name + '!'); // only executed if name is not an empty string
}
```

## Ternary operator: `? :`

With if / else statements whole blocks of code can be controlled. The ternary operator can be used
if you want to decide between two `expressions`, e.g. which value should be stored in a value:

```js
const greetingText = time > 12 ? 'Good morning.' : 'Good afternoon.';
```

The ternary operator has the following structure:

condition `?` truthy case expression `:` falsy case expression.

The ternary operator can be used to decide which function should be called:

```js
isUserLoggedIn ? logoutUser() : loginUser();
```

It can also distinguish which value should be passed as an argument to a function:

```js
moveElement(xPos > 300 ? 300 : xPos); // the element can't be moved further than 300.
```

> ❗️ The operator can only distinguish between two `expressions` like values, math / logical
> operations or function calls, not between `statements` like variable declarations, if / else
> statements or multi-line code blocks.

---

## Resources

Booleans

    Explain what a boolean is
    Show example booleans like these
    Show falsy example values:
        0 / -0
        null
        false
        undefined
        empty string ""
    Show truthy example values:
        1, 2, -3, etc.
        "hello"
        true
    Show how to use booleans with comparison operators
        === strictly equal to / == equal to
        !== strictly not equal to / != not equal to
        > Greater than
        < Less than
        <= Less than or equal to
        >= Greater than or equal to
    Let students solve exercise 1 + 2

Logical operators

    Explain the basic logical operators to the students
        &&
        ||
        !
        combined operators with brackets
        Let the students solve exercise 7

Conditions

    Show the generic structure:
        if / if...else / if...else if...else
    Show an example function that uses the if-statement like this one
    Show an example project that uses the if-statement like this one. You can delete the JS part here and live re-code it.
    mention the ternary operator and how it works
    Let students solve exercises 3-6
