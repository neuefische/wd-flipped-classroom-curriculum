# Challenges: Self Directed Learning 1

## HTML Workout

> Required Sessions:
>
> - HTML and the Web

Let's have a look at a basic HTML structure and apply it to different scenarios.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Homepage</title>
  </head>
  <body>
    <header>
      <h1>My Homepage</h1>
      <p>
        <img
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          alt="Me doing stuff"
          height="200"
        />
      </p>
      <p>Welcome to my website</p>
      <nav>
        <a href="#experience">Experience</a>
        <a href="#about">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <main>
      <section>
        <h2 id="experience">My Experience</h2>
        <p>I have worked for the following partners:</p>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </section>
      <section>
        <h2 id="skills">My Skills</h2>
        <p>I have the following skills:</p>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </section>
      <section>
        <h2 id="contact">Contact</h2>
        <p>Reach out at <a href="mailto:jane@doe.com">my e-mail address</a>.</p>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 myself</p>
    </footer>
  </body>
</html>
```

We have:

- a `<head>` section with the `<title>` (_not_ visible in the browser body);
- a `<body>` containing an `<header>`, a `<main>` and a `<footer>`;
- the `<header>` has a title, a picture, a descriptive paragraph and a navigation;
- the `<footer>` has just a (fake) copyright info;
- the `<main>` contains three `<section>`s;
- each `<section>` has a title, one or more paragraphs, and if needed a list of additional information.

Try to draft a homepage for:

- a cinema / theater;
- a restaurant;
- a music band;
- a public administration office.

Decide first the information you'll need / want to show (pencil and paper go a long way), then work on the HTML.
