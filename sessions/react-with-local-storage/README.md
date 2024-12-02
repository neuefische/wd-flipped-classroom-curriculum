# React with Local Storage

## Learning Objectives

- Understanding the concept of persistent storage in the browser
- Knowing the difference between `localStorage` and `sessionStorage`
- Using the methods `setItem()` and `getItem()`
- Using a library to handle local storage in React apps

## Requirements

- React State

## Demo

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/react-state-3/demo-end
```

## Session Guide

> This is an active learning session, this means that the session should take up to 5-10 minutes. The session is meant as an introduction into the topic, most concepts will be learned independently by the students with the help of the active learning material.

Sometimes we want to store user data locally within the user's browser. With the local storage we can persist the state of an app across page reloads.

> How can I persist the data of my users?

### Persistant Data

At the moment, the data we've entered using forms in our apps gets lost when the page is reloaded. Our goal is to understand how to store data in the browser to make it _**persistent**_.

- We can demo this behavior with the Movie App (see demo).
- Add a few movies, and then reload the page and they will all vanish 🪄.
- To get the browser to "remember" the data we add to the page, we can use something called _**local storage**_.
- Show an example of a site that uses local storage. i.e. [wordcounter.net](https://wordcounter.net/). Add some words and then refresh the page.
- Show that they can open the dev tools, and navigate to the _**Application tab**_ (chrome) and then inspect the _**Local Storage**_ section.
- Show how these are stored in _**key value**_ pairs.
- _Optionally_ show that we can modify these values as a user. (the modified value will only be displayed on reload)
- _Optionally_ show that the saved values are local to the browser. (i.e. open a different browser (i.e. Firefox) and it will have a separate local storage).
- _Optionally_ show that these values are not "saved" in incognito mode.
- Mention that in this session we will learn how to _**write to**_, and _**read from**_ local storage using "vanilla javascript".
- They will also learn how to use local storage within a React application.
