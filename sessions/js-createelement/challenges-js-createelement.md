# Challenges: JS createElement

## Toast Messages

Solve the _Toast Messages_ challenge on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-createelement/toast-messages?file=/js/index.js)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-createelement/toast-messages -i
```

In the bottom right corner you can find a toast messages container with one entry.

When clicking the "Add toast message" button a new entry should be appended to the toast messages
container. Create the HTML element for a new toast message with `document.createElement()`. Have a
look at the `index.html` to see the required HTML tag and class name.

When clicking the "Clear all toast messages" button, the list of toast messages should be emptied.
Afterwards you should still be able to add new toast messages and clear them again.

## Social Media Post

Solve the _Social Media Post_ challenge on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-createelement/social-media-post?file=/js/index.js)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-createelement/social-media-post -i
```

This page shows an example of a social media post. Your task is to replicate the social media post
with JavaScript. Use `document.createElement()` to generate all HTML elements separately.

Don't use `.innerHTML` to create the HTML in one instance, but use multiple calls of
`document.createElement()` instead.

The `index.html` demonstrates the required HTML tags, structure and class names.

Append the second social media post to the body. Don't forget to add the event listener to the like
button. You can use the function `handleLikeButtonClick` for the event listener.

## Product teaser

Solve the _Product teaser_ challenge on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-createelement/product-teaser?file=/js/index.js)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-createelement/product-teaser -i
```

This exercise includes an example of a product teaser for an online shop. Please append a second
product teaser to the page with JavaScript based on the data given in the `index.js` file.

Use `.innerHTML` to generate the HTML elements for the teaser. Use string interpolation to include
the given data into the HTML.

Add an event listener to the "buy" button of the second product teaser. When clicking the button,
the product's name and price should be logged to the console.
