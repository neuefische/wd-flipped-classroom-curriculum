# JS Modern Syntax

## What is destructuring assignment?

- [x] A JavaScript expression which makes it possible to unpack values of an array or object into distinct variables.
- [ ] A JavaScript expression which makes it possible to unpack values of only objects into distinct variables.
- [ ] A JavaScript expression which makes it possible to add values to an array or object.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, destructuring assignment is a JavaScript expression which makes it possible to unpack values of an array or object into distinct variables.

type: multiple_choice

---

## What is the proper way to destructure an object called `person`?

- [ ] `const person = {age, name};`
- [x] `const {age, name} = person;`
- [ ] `const [age, name] = person;`
      Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `const {age, name} = person;` is the correct way to destructure an object.

type: multiple_choice

---

## Which is the correct way to rename the key while destructuring an object?

- [ ] `const {name = firstName, age = personAge} = person;`
- [ ] `const {name, age} = person.name = firstName;`
- [x] `const {name: firstName, age: personAge} = person;`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `const {name: firstName, age: personAge} = person;` is the correct answer.

type: multiple_choice

---

## Which is the correct way to assign a default value while destructuring?

- [x] `const {name = 'Jane', age = 12} = person;`
- [ ] `const {name, age} = person.name = 'Jane';`
- [ ] `const {name: 'Jane', age: 12} = person;`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `const {name = 'Jane', age = 12} = person;` is the correct answer.

type: multiple_choice

---

## What is the proper way to destructure an array called `animals`?

- [ ] `const animals = [dog, cat];`
- [x] `const [dog, cat] = animals;`
- [ ] `const {dog, cat} = animals;`
      Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `const [dog, cat] = animals;` is the correct way to destructure an array.

type: multiple_choice

---

## Given an array `fruits` with three items, how is it possible to destructure the first and last item only?

- [ ] `const [apple, ...allTheRest, banana] = fruits;`
- [ ] `const [1 = apple; 2 = null, 3 = banana] = fruits;`
- [x] `const [apple, , banana] = fruits;`
      Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `const [apple, , banana] = fruits;` is the correct answer.

type: multiple_choice

---

## Which of the following is a correct way to use the rest syntax?

- [ ] `const person = { id: 'abc123', ...personDetails};`
- [x] `const { id, ...personDetails} = person;`
- [ ] `const { id, personDetails} = person;`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `const { id, ...personDetails} = person;` is the correct answer.

type: multiple_choice

---

## Which of the following is a correct way to use the spread syntax?

- [x] `const person = { id: 'abc123', ...formData};`
- [ ] `const { id: 'abc123', ...formData} = person;`
- [ ] `const person = { id: 'abc123', formData};`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `const person = { id: 'abc123', ...formData};` is the correct answer.

type: multiple_choice

---
