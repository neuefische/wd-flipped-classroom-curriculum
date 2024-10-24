# Challenges: Self Directed Learning 2

## Flex Component Workout

> Required Sessions:
>
> - CSS Flexbox

Want to flex about your flex knowledge? Try to reproduce the following scenarios:

![Flex Layouts](assets/flex-exercise.png)

## Flex Layout Workout

> Required Sessions:
>
> - CSS Flexbox

Flex to the max? Achieve full page layouts with flex!

![Flex Layouts](assets/flex-layout.png)

## Git Workflow Workout

> Required Sessions:
>
> - Shell Basics
> - Git CLI and Remote

1. create a new repo from your Github profile (name it like you want);
2. copy the git url (the SSH one, important!);
3. create a new folder from your Terminal (via `mkdir`);
4. **extremely important**: you should _not_ be inside an existing git repo!
5. enter the folder (`cd <dirname>`);
6. init the repo (`git init`);
7. link your local repo to the remote one - `git remote add origin git@github.com...`;
8. add a `.gitignore` with `.DS_Store` on the first line;
9. create a README file (`touch README.md`);
10. edit its contents (`code .` will open the whole folder in VSCode);
11. add your work to the stage - `git add .`;
12. commit your work - `git commit -m 'First commit'`;
13. sync your work over to github - `git push -u origin main`.
14. refresh your repository on github, you should see your README file!

Done? Great!

- delete the repo from github (Settings - Danger Zone - Delete);
- delete the local folder;
- rinse and repeat, this time trying to remember the operations without looking at the instructions above. Do it a bunch of times and you'll be fine!

## JS Questions

> Required Sessions:
>
> - JS Basics
> - JS Variables and Numbers
> - JS Conditions and Booleans

### Variables

- How many JS data types you know? Why would you pick one over another?
- What's the different behaviour granted by the `let` and `const` keywords?

### Truthiness and Falsiness

What values behave like `true`? Remember:

```js
const isRaining = true;

if (isRaining) {
  console.log("Let's carry an umbrella!");
}
```

The `isRaining` variable holds the `true` value, and definitely passes the `if(isRaining)` condition.

What happens with a general string:

```js
const myName = "Jane";

if (myName) {
  console.log("My name is ", myName);
}
```

Now check for yourself what happens with the following:

- the `false` value;
- the `'false'` string;
- an empty string (`''`);
- a positive number;
- a negative number;
- the number 0;
- `null`;
- `undefined`.

Collect the results of your experience and discuss them together.
