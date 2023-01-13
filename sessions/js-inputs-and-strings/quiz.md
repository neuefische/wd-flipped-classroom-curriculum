# Inputs and Strings

### Which of the below is NOT a valid string in JavaScript?

* [ ] "hello world"
* [ ] 'hello + world'
* [x] _hello world_
* [ ] 'hello world'

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `_hello world_` is not a valid string in JavaScript.

type: multiple_choice

---

### Given is `const name = 'hello world';`. What is the return value of `name.length`?

* [ ] `10`
* [x] `11`
* [ ] `length: 10`
* [ ] `length: 11`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope. Whitespaces are included, therefore the correct answer is `11`.

type: multiple_choice

---

### Which of the below statements about template literals (template strings) is correct?

* [ ] Template literals are enclosed by backticks.
* [ ] Template literals allow variables in strings.
* [ ] Template literals allow multiline strings.
* [x] All of the above.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope. All of the answers are correct.

type: multiple_choice

---

### Which method do you need to convert a string to uppercase?

* [ ] `upperCase()`
* [ ] `ToUpperCase()`
* [ ] `touppercase()`
* [x] `toUpperCase()`

Points: 1

Feedback_correct: That's right.  
Feedback_incorrect: Nope! The method `toUpperCase()` converts a string to uppercase.

type: multiple_choice

---

### Given is `const name = '  neue fische   ';`. What is the return value of `name.trim()`?

* [ ] 'neue fische  '
* [ ] 'neuefische'
* [x] 'neue fische'
* [ ] '  neue fische'

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope, `trim()` only removes whitespaces at the beginning and end of a string.

type: multiple_choice

---

### How do you get the value of the input field, declared via `const input = document.querySelector('[data-js="name-input"]');`?

* [ ] `name-input.value`
* [x] `input.value`
* [ ] `inputValue`
* [ ] `value.input`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! You can get the value of the input field with `input.value`. 

type: multiple_choice

---

### Given is `const name = 'Web Development Bootcamp';`. What is the return value of `name.replace(' ', '_')`?

* [x] `'Web_Development Bootcamp'`
* [ ] `'Web_Development_Bootcamp'`
* [ ] `'Web Development_Bootcamp'`
* [ ] `'Web Development Bootcamp'`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `replace()` only finds and replaces the first character searched; for replacing all searched characters, you need to use `replaceAll()`.

type: multiple_choice

---

### Given is `const name = 'neue fische';`. What is the return value of `name.includes('neue')`?

* [ ] `false`
* [ ] `neue`
* [ ] `'neue fische'`
* [x] `true`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `includes` searches for a string inside another string and returns a boolean value, in this case `true`.

type: multiple_choice

---