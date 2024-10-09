# Recap Project 4: Color Theme Creator App

In this eight-session recap project (4 days for full-time courses, 8 days for part-time courses), students will create a Color Theme Creator app. The project involves managing [8 predefined issues](https://github.com/neuefische/web-react-recap-project/issues) using a GitHub board.

> 💡 Coaches can use the [Repo Checker](https://github.com/neuefische/web-repo-checker) to monitor individual student progress.

## Session Guide

Ensure students understand the documentation within the [Color Theme Creator Template](https://github.com/neuefische/web-react-recap-project) and can manage the project setup independently. This includes creating the project board and managing issues with the help of the README.md as part of their learning process.

Students will work independently to:

- Understand and use the template repository documentation.
- Create a GitHub access token.
- Run a script to copy and paste issues to their repository.
- Create a project board to organize and manage their tasks.

> 💡 Each student will individually work on the recap project.

## General Learnings

- Research within the curriculum material.
- Work in iterations with user stories on a project board.
- Use branches and pull requests (PRs are mandatory for each issue, but reviews are at the coaches' discretion based on the course dynamics).
- Focus on functionality over styling.

## Issues and Their Learnings

<details>
  <summary>1: Display Theme Colors</summary>
  - **Already implemented** as the starting point.
  - Introduction to the Vite project.
  - Understanding folder structure.
  - Modern CSS reset.
  - Using arrays and mapping.
</details>

<details>
  <summary>2: Add a Color to the Theme</summary>
  - Handling form submissions.
  - Implementing controlled inputs.
  - State encapsulation and lifting up state.
  - Utilizing third-party npm packages.
  
> 💡 This task is designed to challenge advanced students and support those who may struggle. It serves as a demanding starting point. Students must manage components and state independently, even with provided solutions. They are encouraged to engage with handouts and exercises, selecting their difficulty level, to showcase their research and communication skills.

</details>

<details>
  <summary>3: Delete a Color from the Theme</summary>
  - Lifting up state.
  - Using `filter()` for deletion.
  - State encapsulation.
  - Conditional rendering.
  - Reusing CSS classes.
</details>

<details>
  <summary>4: Edit a Color in the Theme</summary>
  - Lifting up state.
  - Using `map()` for updates.
  - State encapsulation.
  - Conditional rendering.
  - Reusing JSX components.
</details>

<details>
  <summary>5: Persist Theme in localStorage</summary>
  - Integrating third-party npm packages.
  - Utilizing localStorage.
</details>

<details>
  <summary>6: Copy to Clipboard Button</summary>
  - Implementing `navigator.clipboard.writeText()` API.
  - Working with async functions.
  - Using `setTimeout` within a `useEffect`.
</details>

<details>
  <summary>7: Fetch API to Check If Contrast Is Okay</summary>
  - Employing async functions.
  - Fetching from third-party APIs.
  - Considering contrast for accessibility (a11y).
  - State encapsulation.
</details>

<details>
  <summary>8: Have Multiple Themes</summary>
  - Managing complex data structures.
  - Undertaking complex refactoring.
  
> 💡 Students will start with implementation difficulties. The learning is to feel the need to break down a large task into manageable steps: Display, Add, Delete, Edit. Here's a simplified prototype for the first phase of: #8 - Multiple Themes - Display

</details>

## Conclusion

- This recap project uses a standard CRUD framework to develop into a full-fledged Color Theme Creator app.

- Students improve their communication, research, and iterative skills while revisiting essential React concepts.

- Tickets/issues are deliberately larger to encourage more coding and problem-solving, setting the stage for a smoother transition to a more focused ticketing approach later.

- The app emphasizes the importance of contrast and text readability for accessibility (a11y), crucial for creating inclusive designs.

## Solution

For additional reference, there is an [example solution](https://github.com/neuefische/web-react-recap-example) available, with branches from issue 1-8.
