# Additional Challenge: AI

## AI Cover Letter Generator

Let's use our knowledge of next.js + api routes to build an AI Cover Letter Generator.

![Demo](./assets-ai-cover-letter/demo.png)

We can create a new project from the following template

```bash
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/templates/next cover-letter-generator
```

> Are you still unsure about Next.js folder organization? If so, [click here](./recap-nextjs.md) for a detailed recap.

We will use the [OpenAI Node API Library](https://www.npmjs.com/package/openai)

```bash
npm install openai
```

We have 2 options for this project.

1. Use the [openai API](https://platform.openai.com/api-keys). You can either sign up and add a credit card and pre-pay for some credits (min $5.95 incl. taxes at the time of writing) 💰 or you can reach out to a coach and get credentials from us. It is important we don't expose the API key from openai. [See more on this here](./assets-ai-cover-letter/openai-api-key-setup.md).
2. Alternatively you can use [LM Studio](https://lmstudio.ai/) to run an open source model locally. (free). You can follow our [guide here to get things setup](./assets-ai-cover-letter/lm-studio-setup.md)

## 🙈 Hints 🙈

<details>
<summary>Client side (i.e. index.js) 🙈</summary>

- Form (with 2 textareas)
- useState to display the end result (initial value empty)
- Event Listener for submit
- Inside `handleSubmit` we will need to make a request to our API route (i.e. `/api/generate`)

</details>

<details>

<summary>Server Side (i.e. api routes) 🙈</summary>

- `/api/generate.js`
- `import OpenAI from "openai";`
- If you are using your own openai api key you will need something like this.

  ```js
  const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
  });
  ```

- If you are using LM Studio, you would need something like this. (Double check the port)

  ```js
  const openai = new OpenAI({
    baseURL: "http://localhost:1234/v1",
    apiKey: "lm-studio",
  });
  ```

- Read the user and company info from the body and use it to generate a prompt. i.e. something like

```js
const prompt = `Write a cover letter for a job application. Some info about the company and the position: ${companyInfo}. Some info about myself: ${userInfo}.`;
```

- Make a request using the openai package. i.e.

```js
const response = await openai.chat.completions.create({
  messages: [{ role: "user", content: prompt }],
  // model: "gpt-3.5-turbo", // use this if using your own openai key
});
```

- Find the relevant data in the response and send it back to the client. Please note that it might take a while to generate the response if you are running it locally.

</details>

<details>
<summary>Example Finished Code for index.js 🙈🙈</summary>

```js
import { useState } from "react";

export default function Home() {
  const [apiOutput, setApiOutput] = useState("");

  const callGenerateEndpoint = async (userInfo, companyInfo) => {
    setApiOutput("AI is generating your cover letter...");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo, companyInfo }),
    });

    const data = await response.json();
    console.log(data);
    const { output } = data;
    console.log("OpenAI replied...", output);

    setApiOutput(output);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    const userInfo = formElements.userInfo.value;
    const companyInfo = formElements.companyInfo.value;
    callGenerateEndpoint(userInfo, companyInfo);
  };

  return (
    <div>
      <section>
        <div>
          <h1>Cover Letter Generator</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userInfo">Enter a few words about yourself</label>
            </div>
            <textarea id="userInfo" name="userInfo" rows="10" />
            <div>
              <label htmlFor="companyInfo">Enter the job description</label>
            </div>
            <textarea id="companyInfo" name="companyInfo" rows="10" />
            <div>
              <button className="generate-button" type="submit">
                Generate
              </button>
              <button type="reset">Reset</button>
            </div>
          </form>
        </div>
      </section>
      <section>
        <h1>Access your personal cover letter below</h1>
        <p>{apiOutput}</p>
      </section>
    </div>
  );
}
```

</details>

<details>
<summary>Example Finished Code for /api/generate.js 🙈🙈</summary>

```js
import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPEN_API_KEY,
// });
const openai = new OpenAI({
  baseURL: "http://localhost:1234/v1",
  apiKey: "lm-studio",
});

export default async function handler(request, response) {
  console.log(request.body);
  const { userInfo, companyInfo } = request.body;

  const prompt = `
  Write a cover letter for a job application. Some info about the company and the position: ${companyInfo}. Some info about myself: ${userInfo}. 
  `;

  const data = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    // model: "gpt-3.5-turbo", // use this if using your own openai key
  });

  const completion = data.choices[0].message.content;

  response.status(200).json({ output: completion });
}
```

</details>

### Sample Data

Here is some sample date for you to copy and paste while developing.

<details>
<summary>Sample User Description</summary>
Rick Sanchez. Most intelligent man in the universe, full stack software engineer with 10 years experience.
</details>

<details>
<summary>Sample Job Add</summary>
Remote Senior Front End Developer. Join our fun and international team, benefit from a flexible work environment and work on products that help people across the world understand each other. We welcome candidates from all cultures, genders, or walks of life 💛🌐💚 Migaku is an all-in-one language learning platform that allows you to study a language with content you love on Netflix, Youtube, websites, books, and more. Create flashcards with one click while you watch or read, including a screenshot and audio recording of the scene, and study them on your phone later wherever you are. We're going through a big rebranding and we’re now looking for a senior front-end developer to help build apps based on our new, super fun brand and UI designs. The ideal candidate... 💬 Is fluent in English ⏱ Can start immediately 🏝 Wants to work remotely 👀 Has a keen eye for details 🖥 Has experience with: ● Vue, ideally Vue 3 and Composition API ● Strong React developers are also welcome, but you should be comfortable with a switch to Vue ● Experience in frameworks like Nuxt.js or Next.js and knowledge of different rendering techniques like SSG, SSR, ISR. Bonus for interest in emerging technologies like Astro ● Strong CSS fundamentals ● Understanding of repo architecture and root level technologies like bundlers (Vite, Webpack etc.), CI/CD, etc. ● Comfortable owning a codebase, whilst coordinating with front-end leadership 🎵 Big big bonus: Has a passion or interest in language learning, anime, pop culture, etc! 🧙‍♀️ For the right candidate: Equity in a fast growing start-up! We already have 2500+ paying users and we are funded well into the future. This is a fully remote position. Our team members are in Japan, USA, Germany, Australia and China. The position is open-ended.
</details>
