# JS Functions

## How do you create a function with the name "myFunction"?

* [ ] `function: myFunction() { //some code }`
* [x] `function myFunction() { //some code }`
* [ ] `function = myFunction { //some code }`
* [ ] `function myFunction { //some code }`

Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: Nope. With `function myFunction() { //some code }` you can create a function.

type: multiple_choice

---

## How do you call a function with the name "myFunction"?

* [ ] `function myFunction() { //some code }`
* [ ] `myFunction`
* [ ] `function myFunction()`
* [x] `myFunction()`

Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect. The first statement is the function declaration, where the function is defined. The second statement is the function reference, which can be used to refer to the respective function in your code. The third statement is an unfinished function declaration which would result in an error. You can call an already declared function by writing its name followed by a pair of round brackets.

type: multiple_choice

---

## Which would be the correct call of the function `function getPizza(type, amount) {...} ?

* [ ] `function getPizza(3,'Hawaii')`
* [ ] `getPizza('Hawaii'; 3)`
* [x] `getPizza('Hawaii',3)`
* [ ] `getPizza(3,'Hawaii')`
* [ ] None of the above, you do not order a pizza Hawaii.

Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect. Make sure to pass the arguments in the correct order separated by a comma.

type: multiple_choice

---

## Which is the correct statement about return statements ?

* [ ] A function can only have one return statement.
* [x] A function can return only one return value.
* [ ] The return statement has to be at the end of the function body.


Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect. A function can have multiple return statements, often combined with if else statements, but can only return once per function call.
type: multiple_choice

---

## How could you rewrite the function `function concat(string1, string2) { ... } as an arrow function ?

* [ ] `function concat(string1, string2) => { ... }`
* [x] `const concat = (string1, string2) => { ... }`
* [ ] `const concat => (string1, string2) { ... }`
* [ ] `function concat = (string1, string2) => { ... }`


Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect.

---

## What is the shortest way to rewrite the function `function repeat3(string) {return string.repeat(3)}` without changing the function / parameter names ?

* [ ] `const repeat3 = (string) => {return string.repeat(3)}`
* [ ] `const repeat3 = string => {return string.repeat(3)}`
* [x] `const repeat3 = string => string.repeat(3)`
* [ ] `repeat3 = string => string.repeat(3)`


Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect.

---
