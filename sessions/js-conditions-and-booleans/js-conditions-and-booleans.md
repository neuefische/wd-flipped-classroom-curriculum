# JS Conditions and Booleans

## Learning Objectives

- [ ] hot to use conditions to control the program flow
- [ ] what booleans and truthy / falsy values are
- [ ] how to write a ternary expression
- [ ] what a switch statement is

---

## Booleans

Boolean variables can either be `true` or `false`. Booleans are often used in conditional statements
which can execute different code depending whether the conditional statement is either `truthy` or
`falsy`. Since JavaScript can transform any value into a boolean value with type coersion, each
value must either be `truthy` or `falsy`:

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

## Logical Operators

Logical operators produce boolean values by comparing up to two values:

| Operator  | Effect                                               |
| --------- | ---------------------------------------------------- |
| a `===` b | strict equality: is `true` if both values are equal. |

## Control Flow: `if / else`

With an if / else statement we can control whether a part of our code is executed or not, based on a
condition.

```js
const isSunShining = true;

if (isSunShining) {
	// code that is executed only if condition "isSunShining" is true
} else {
	// code that is executed only if condition "isSunShining" is false
}
```

The condition expression between the `()` brackets can be composed of logical operators as well. You
can distinguish between more cases by chaining `else if` statements:

```js
if (age > 60) {
	console.log('You should go home.');
} else if (age > 18) {
	console.log('You can enter.');
} else {
	console.log('You must leave.');
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

## Control Flow: `switch` statements

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
