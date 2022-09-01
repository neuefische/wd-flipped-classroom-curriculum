# Challenges: JS Loops

## Part 1

for

log number 0 to 100 into console

## Part 2

for

for loop that uses create element to create 1 to 5 stars (based on an input)

## Part 3

for in

```js
const languages = {
	DE: 'German',
	EN: 'English',
	ES: 'Spanish',
	FR: 'French',
	IT: 'Italian',
	NL: 'Dutch',
	PT: 'Portuguese',
	RU: 'Russian',
	ZH: 'Chinese',
};
```

create a select input with all languages as options (keys should be used as values)

## Part 3.5

for in

create a navigation bar

```js
const nav = {
	home: {href: '/home', text: 'Home'},
	about: {href: '/about', text: 'About'},
	contact: {href: '/contact', text: 'Contact'},
};
```

## Part 4

for of

```js
const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C#', 'C++', 'PHP', 'Ruby'];
```

givin an array of prgamming languages, use createElement to create a list of language tags

# Part 5 while

create a while loop that generates and logs random numbers between 0 and 1 and exits when the number
is larger than 0.9

## Bonus For Loop

a two dimensional array of colors creating an image of a cute dog

## Quiz App Bonus

- Revisit the quiz app
- There is a form to add a new card
- As of "recap project 2" the form can only add a single tag to each card
- Task:
  - Add possibility to add multiple tags separated by `,`
  - Split and trim
  - Loop array an call `createElement()` for each tag
