Confused by JavaScript? Let's sort it out!

## Generate an email address

Write a function called `generateEmail` that accepts an object as the only parameter, and returns `<firstName>.<lastName>@example.com`, all in lowercase (e.g. in this case `jane.doe@example.com`).

- you have to access the first and last name of the object with the dot notation;
- you have to return a value from the function _and not_ log anything outside of it;
- you can check that your function is working like:

```js
function generateEmail(...) {
  // function implementation
}

const newUser = {
  firstName: 'Jane',
  lastName: 'Doe',
}

const email = generateEmail(...);
console.log(email);
```

## Guess the first and last name from the email

Write a function that takes a string as parameter, and returns an object with `firstName` and `lastName` keys, guessed by the email.

Hint: `String.prototype.includes` and `String.prototype.split` are your friends!

```js
function getUserFromEmail(email) {
  // if the email does not contain a @, return null
  // if it does, split the email at @ and take the first entry in consideration
  // if such part does not have a ., return null
  // if it does, you know what you have to do!
}

// logs null
console.log(getUserFromEmail("not an email address"));

// logs null
console.log(getUserFromEmail("nodots@example.com"));

// logs { firstName: 'Jane', lastName: 'Doe' }
console.log(getUserFromEmail("jane.doe@example.com"));
```

## Bring it online

Let's use the first function first:

```html
<form>
  <label for="firstName">First Name</label>
  <input name="firstName" id="firstName" required />
  <label for="lastName">Last Name</label>
  <input name="lastName" id="lastName" required />
  <button>Generate Email</button>
</form>
<span data-js="generated-email">...</span>
```

When the user submits the form, display the generated email in the `<span>` below the form.

Do the same for the other operation, this time with just one field of `type=email`, that populates a span with the guessed complete name of the user (e.g. Jane Doe).

[A possible solution can be found here](https://codesandbox.io/s/self-learning-email-solution-45sz7y?file=/src/index.js:0-2229).
