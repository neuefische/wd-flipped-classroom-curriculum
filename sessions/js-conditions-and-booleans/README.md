# JS Conditions and Booleans

> 💡 feel free to create a personal branch of this guide to add your own notes

## Learning objectives

- using conditions to control the program flow
- understanding what booleans and truthy/falsy values are
- working with comparison and logical operators
- writing ternary expressions

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

### Why is the content of today's block that important for the students?

### Pose a question to be answered by the end of the block!

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

---

## Inform: Session Guide

### A basic example

Tell students a story:

- Imagine having a child that loves to snack carrots (all kids do, right? 🥕).
- Therefore you're using it as a treat.
- Your kid gets two carrots as a baseline.
- _If_ it helps cleaning the kitchen it can get two more.

> 👶 By the way: this is not parenting advice!

Ask students about the meaning of the word `if` in this story.

Open a code editor and write some code:

```js
let carrots = 2;

carrots = carrots + 2;
```

Ask students if this code does what the story describes. You should come to the conclusion, that
this code `unconditionally` adds two carrots.

Tell students, that you can write an `if-statement` in JavaScript, that kinda works like the
sentence.

Change the code to:

```js
let carrots = 2;

if (kidDidHelpCleaningTheKitchen) {
	carrots = carrots + 2;
}
```

Discuss that this code `conditionally` executes the that code block defined the curly brackets.

Ask students what the type of `kidDidHelpCleaningTheKitchen` might be in this case.

- You can give the hint that it is some kind of variable.
- We are using the variable, but we have not declared it yet
- It must be some kind of variable that contains either a `yes` or a `no`.

Explain that the JavaScript equivalents of `yes` and `no` are `true` and `false`. [^1]

Change the code:

```js
let carrots = 2;

const kidDidHelpCleaningTheKitchen = true;

if (kidDidHelpCleaningTheKitchen) {
	carrots = carrots + 2;
}
```

This code actually runs, so feel free to add a `console.log(carrots)` and experiment with different
values.

Explain that this is called a Boolean value (after George Bool) and that it only has two states:
`true` or `false`.

### Else case

Now let's persume, that you'd want to take away carrots from the kid if it in fact did not help
cleaning the kitchen.

Formulate this sentence: `If` the kid did help cleaning the kitchen, add two carrots, `else`
subtract one carrot.

Make it in code:

```js
let carrots = 2;

const kidDidHelpCleaningTheKitchen = false;

if (kidDidHelpCleaningTheKitchen) {
	carrots = carrots + 2;
} else {
	carrots = carrots - 1;
}
```

Explain that `else` does not have a condition and always follows after an `if` block.

Explain that executing different code based on a `condition` is called `branching`. And that we just
make our first `if/else-statement`.

### Creating booleans

Explain that a static `true` or `false` by itself is seldomly helpful.

Present this scenario: If the kid cleaned more that 3 dishes, it gets the extra carrots.

Explain that you now need a variable to track how many dishes have been cleaned and that from that
we have to create a boolean variable.

To create it we have to check if the cleaned dishes counter is `larger than 3`.

Add this code:

```js
let carrots = 2;
const dishesCleaned = 4;

const kidDidHelpCleaningTheKitchen = dishesCleaned > 3;

if (kidDidHelpCleaningTheKitchen) {
	carrots = carrots + 2;
} else {
	carrots = carrots - 1;
}
```

Explain that comparison operators like larger than (`>`) etc. compare two values and evaluate to a
boolean (`true` or `false`).

Two very important operators are `equals to` and it's counterpart `not equals to`. In JavaScript
they are written as `===` and `!==` respectively.

If we were to say the the kid only helped if it cleand `exactly 3` dishes we could write:

```js
let carrots = 2;
const dishesCleaned = 4;

const kidDidHelpCleaningTheKitchen = dishesCleaned === 3;

if (kidDidHelpCleaningTheKitchen) {
	carrots = carrots + 2;
} else {
	carrots = carrots - 1;
}
```

Other comparison operators will be in the handout.

### The ternary operator

Sometimes it can be cumbersome to write lengthy `if/else-statments`. Especially if we do small
things like changing the value of one variable. Explain that there is a shorter way. We can write a
conditional `expression`.

Change up the code a little bit and ensure/discuss that we have not changed the functionality (no
ternary yet).

```js
let carrots = 2;
const dishesCleaned = 4;
const kidDidHelpCleaningTheKitchen = dishesCleaned === 3;

let extraCarrots = 0;

if (kidDidHelpCleaningTheKitchen) {
	extraCarrots = 2;
} else {
	extraCarrots = -1;
}

carrots = carrots + extraCarrots;
```

Acknoledge that this looks way more cumbersome than before.

Explain that `if` is a `statement` and not an `expression`. That means we cannot use it in places
were we can only use expressions. Like when assigning something to a variable.

The `ternary` operator can help here. It is best seen in action:

```js
let carrots = 2;
const dishesCleaned = 4;
const kidDidHelpCleaningTheKitchen = dishesCleaned > 3;

let extraCarrots = kidDidHelpCleaningTheKitchen ? 2 : -1;

carrots = carrots + extraCarrots;
```

The ternary expression always follow the formula: `condition ? value if true : value if false`. It
evaluates to one of the values. And it can be assigned just like any other expression.

Now our code looks much smaller. Bit it is important to acknologde that it is not always more
readable than using an `if/else-statement`.

Since expressions can be composed together, our code can be even shorter by using less intermediate
variables, but it then becomes even less readable and loses intent.

```js
let carrots = 2;
const dishesCleaned = 4;

carrots = carrots + (dishesCleaned > 3 ? 2 : -1);
```

Compare this with the last version were we used an `if/else-statement` and ask students which
version seems more readable to them. Explain that readabilty is much more important that short and
clever solutions.

---

## Process: Challenges

- [ ] Provide the [handout](js-conditions-and-booleans.md) and the
      [challenges](challenges-js-conditions-and-booleans.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups of \_\_\_
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed in the beginning of the session and try to answer it with a
  few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.

[^1]:
    Fun fact: Some languages like Objective-C actually use `YES` and `NO` instead of `true` and
    `false`. ([Source](https://riptutorial.com/objective-c/example/16004/bool))
