# Additional Challenge: HTML

## HTML Workout

> Required Sessions:
>
> - HTML and the Web

This basic HTML structure can be adapted to various scenarios.

Create a new `index.html` file and past the following code into the file:

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

**Structure Breakdown**

- **`<head>`:** Contains the `<title>` for the page (_not_ visible in the body).
- **`<body>`:** Contains a `<header>`, `<main>` and `<footer>`.
  - `<header>`: Includes a title, a picture, a descriptive paragraph, and navigation links.
  - `<main>`: Consists of three sections (Experience, Skills, Contact), each with a title, one or more paragraphs, and if needed a list of additional information.
  - `<footer>`: Displays (fake) copyright information.

Use this HTML structure as a template to draft a homepage for any topic you like. First, decide what information you want to showcase, sketch it out (pencil and paper go a long way), and then adapt the HTML to fit your content.
