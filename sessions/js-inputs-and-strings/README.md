# JS Inputs and Strings

## Learning Objectives

- learning different ways of writing strings
- using string properties and methods
- working with input elements

## Requirements

- JS Functions
- HTML Forms

## Demo

There is no demo for this session.

---

## Session Guide

> This is an active learning session, this means that the session should take up to 5-10 minutes. The session is meant as an introduction into the topic, most concepts will be learned independently by the students with the help of the active learning material.

In JavaScript, we often deal with user input provided by forms. This data comes often in the form of strings. Further, we want to recombine strings and other variables to dynamically fill our websites, which makes working with strings a basic skill for each developer.

> How can we effectively work with strings and inputs in JavaScript?

### Working with Strings

- Often we have to deal with strings that are generated based on other variables.
- We refer to this concept as **interpolation** or **templating**.
- you can briefly show how a function like:
  ```js
  function sayHello(name) {
    console.log(`Hello, ${name}!`);
  }
  // example calls
  sayHello("Jane");
  sayHello("Mario");
  ```
- Strings come in JavaScript with various useful **properties** (mainly `length`) and **methods**.
- Strings hold human-friendly information, which we can gather from people through **HTML inputs**.
- You can use [this playground](https://6cpqpr.csb.app/) to briefly demonstrate what string methods do via inputs, without going into detail with code.
