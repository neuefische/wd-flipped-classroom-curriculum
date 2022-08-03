# Challenges: JS createElement

## Toast Messages

Open this
[CodeSandbox](https://codesandbox.io/s/github/neuefische/web-exercises/tree/feat/js-createelement/sessions/js-createelement/toast-messages?file=/js/index.js)

In the bottom right corner you can find a toast messages container with one entry.

When clicking the "Add toast message" button a new entry should be appended to the toast messages
container. Create the HTML element for a new toast message with `document.createElement()`. Have a
look at the `index.html` to see the required HTML tag and class name.

When clicking the "Clear all toast messages" button, the list of toast messages should be emptied.
Afterwards you should still be able to add new toast messages and clear them again.

## Social Media Post

Open this
[CodeSandbox](https://codesandbox.io/s/github/neuefische/web-exercises/tree/feat/js-createelement/sessions/js-createelement/social-media-post?file=/js/index.js)

This page shows an example for a social media post. Your task is to replicate the social media post
with JavaScript. Use `document.createElement()` to generate all HTML elements. The `index.html`
demonstrates the required HTML tags, structure and class names.

Append the second social media post to the body. Don't forget to add the event listener to the
button.

## Product teaser

Open this
[CodeSandbox](https://codesandbox.io/s/github/neuefische/web-exercises/sessions/js-createelement/product-teaser?file=/js/index.js)

This exercise includes an example of a product teaser for an online shop. Please append another
product teaser to the page based on the data given in the `index.js` file.

Use `.innerHTML` to generate the HTML elements for the teaser. Use string interpolation to include
the given data into the HTML.

Add an event listener to the "buy" button of the product teaser you created. When clicking the
button, the price should be logged to the console.
