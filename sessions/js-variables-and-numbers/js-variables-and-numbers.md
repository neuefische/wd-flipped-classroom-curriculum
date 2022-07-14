# JS Variables and Numbers

## Learning Objectives

In this session you will learn:

- [ ] the difference between `var`, `let` and `const`
- [ ] what data types exist in JavaScript
- [ ] how to use basic math operations in JavaScript

---

## Variable Declarations

Variables are a `reference` or `alias` for data stored in memory. You can access this data by using
this variable. You can use three different keywords to declare a variable:

- `var` - outdated, not used anymore.
- `const` - declares a constant, the value can't be changed. Default way to declare variables.
- `let` - declares a variable, the value can be changed. Only used when reassigning a new value is
  necessary.

Normally the keyword const is used to declare a value.

```js
const aNewVariable = 1234;
```

Only used when you need to reassign a value, for example when you want to increase a counter.

```js
let counter = 0;
counter = counter + 1; // reassigning the value of counter
```

The `=` sign in programming doesn't quite work like the mathematical equality that you (maybe)
remember from school. It means: "the value of the item on the right of the equal sign is saved in
the item on the left of it". What the item on the right actually represents is calculated first and
saved afterwards.

## Primitive Data Types

Javascript is a dynamically typed language, which means, that you don't have to specify what kind of
value you want to store, JavaScript detects this automatically.

There are 7 primitive data types:

| type        | represents                                                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| `string`    | a sequence of characters: "abcd"                                                                                            |
| `number`    | a number: 1234                                                                                                              |
| `boolean`   | a binary statement, can be `true` or `false`                                                                                |
| `null`      | represents "nothing", is typically set by developers                                                                        |
| `undefined` | represents the state of "not existing". Anything not specified or not found in JavaScript defaults to the value `undefined` |
| `BigInt`    | uncommon, used for integers larger than 9007199254740991                                                                    |
| `Symbol`    | uncommon, used for creating unique elements                                                                                 |

## Variable Naming

Expressive variable names are very important for the `readability of the code`. The Code becomes
easier to understand and needs less comments. There are some key guidelines you should follow when
naming a variable:

- use camel case: `aNewVariable` instead of `anewvariable`
- write out all words: `error` instead of `e`, `followerButton` instead of `flBtn`
- be very specific, longer names are better than shorter: `updatedFollowerCounter` instead of
  `counter`.

## Math & Operators

As a programmer you sometimes have to use mathematical operations to calculate certain widths or
positions of elements. You can perform math calculations by using operators. Operators calculate
values based on one or two expressions. Usually they are written as `expression1` `operator`
`expression2`. For example `3 + 2`, 3 is the first expression, + is the operator and 2 is the second
expression. When this line of code is executed, the statement is replaced by the result of the
operator, 5.

| operator | effect                                                                                                                                                                                                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `+`      | Adds two numbers together. ❗️ There is another + operator in JavaScript, that links two strings together: "a" + "b" -> "ab". When 'adding' a number and a string, the number is converted to a string: "a" + 6 -> "a6". Make sure that both variables are numbers if you want to add them.   |
| `-`      | Subtracts two numbers                                                                                                                                                                                                                                                                         |
| `*`      | Multiplies two numbers                                                                                                                                                                                                                                                                        |
| `/`      | Divides two numbers                                                                                                                                                                                                                                                                           |
| `**`     | Exponentiates two numbers: `2**4 -> 16`                                                                                                                                                                                                                                                       |
| `%`      | The remainder or modulus. Gives you what remains after a whole number division: `15 % 12 -> 3`. A real live example for this is time on a clock. After noon you don't reach 13 am but you start over at 1pm. At midnight you don't have 15pm but but 3am. It is whatever hour we have mod 12. |

- operator precedence
- assignment operators: `+=, -=, *=, /=`
- increment and decrement operators: `++, --`
- type conversion
- [Exercises 1 & 2](exercises.md#exercise-1)
-

# Challenges

## Part 1

## Part 2

---

## Resources
