# Challenges: Self Directed Learning 6

> ❗️ Feel free to use this self directed learning session as you like. This file provides suggestions if you need some inspiration on how to use this session effectively.

## Suggestions for this Session

- Reread handouts from this week.
- Repeat the challenges from the last sessions.
- Work on the last recap project.

## 🏙️ Cities of the World 🌇

> Required Sessions:
>
> - Next.js Basics and Routing
> - Next.js Dynamic Routes

Let's build an app that lists 10 cities. Each city in the list will link to a detailed information page about that city. This will practice `Next.js Basics and Routing` and `Next.js Dynamic Routes`.

1.  Create a new `nextjs` app. You can use the following template.

    ```bash
    npx ghcd@latest wd-bootcamp/web-exercises/tree/main/templates/next cities
    cd cities
    npm i
    ```

    then

    ```bash
    cd cities
    npm i
    code .
    npm run dev
    ```

2.  Let's create a source of data. Create a new directory called `lib` and then add a file called `data.js`.
    Paste in the following contents.

      <details>
      <summary>Get your cities data here</summary>

    ```js
    export const cities = [
      {
        id: 1,
        name: "Tokyo",
        country: "Japan",
        population: "37 million",
        description:
          "Tokyo is a vibrant metropolis known for its modern technology, traditional culture, and bustling city life.",
        slug: "tokyo",
      },
      {
        id: 2,
        name: "Paris",
        country: "France",
        population: "2.1 million",
        description:
          "Paris, the 'City of Love', is famous for its romantic ambiance, historical landmarks, and world-renowned art and cuisine.",
        slug: "paris",
      },
      {
        id: 3,
        name: "New York City",
        country: "United States",
        population: "8.4 million",
        description:
          "New York City is a global hub of finance, culture, and entertainment, with iconic landmarks like Times Square and the Statue of Liberty.",
        slug: "new-york-city",
      },
      {
        id: 4,
        name: "Rio de Janeiro",
        country: "Brazil",
        population: "6.7 million",
        description:
          "Rio de Janeiro is known for its stunning beaches, lively festivals, and the iconic Christ the Redeemer statue overlooking the city.",
        slug: "rio-de-janeiro",
      },
      {
        id: 5,
        name: "Cairo",
        country: "Egypt",
        population: "9.7 million",
        description:
          "Cairo, a city steeped in history, is home to the ancient Pyramids of Giza and the Sphinx, attracting tourists and archaeologists alike.",
        slug: "cairo",
      },
      {
        id: 6,
        name: "Sydney",
        country: "Australia",
        population: "5.4 million",
        description:
          "Sydney is defined by its iconic Opera House, beautiful harbor, and vibrant cultural scene, making it a major destination in the Southern Hemisphere.",
        slug: "sydney",
      },
      {
        id: 7,
        name: "Istanbul",
        country: "Turkey",
        population: "15.5 million",
        description:
          "Istanbul, straddling two continents, offers a rich blend of cultures, with historic sites like the Hagia Sophia and the Grand Bazaar.",
        slug: "istanbul",
      },
      {
        id: 8,
        name: "Mumbai",
        country: "India",
        population: "20.7 million",
        description:
          "Mumbai, India's largest city, is a bustling financial center and home to the Bollywood film industry, reflecting both tradition and modernity.",
        slug: "mumbai",
      },
      {
        id: 9,
        name: "Cape Town",
        country: "South Africa",
        population: "3.5 million",
        description:
          "Cape Town boasts breathtaking landscapes, including Table Mountain, and offers a mix of cultures, history, and outdoor activities.",
        slug: "cape-town",
      },
      {
        id: 10,
        name: "Buenos Aires",
        country: "Argentina",
        population: "2.9 million",
        description:
          "Buenos Aires is a city known for its tango music, European architecture, and vibrant arts scene.",
        slug: "buenos-aires",
      },
    ];
    ```

      </details>
      &nbsp;

    e.g. your file structure should look something like this.

    ```js
    - 📁 lib
      | - 📄 data.js
    - 📁 pages
    - 📁 public
      ... etc
    ```

3.  Create a `cities` directory inside the `pages` directory. Inside the cities directory, create an `index.js file`. This is where we will show a list of all cities. To do that, import the cities from our `data.js` file (be sure to pay attention to the path to the file).
    Once you have the data, loop over each city object and create an `li` element. For now, just display the cities name.
    <details>
       <summary>🙈 Hint</summary>

    ```js
    import { cities } from "../../lib/data";

    export default function Cities() {
      return (
        <>
          <h1>Cities</h1>
          <ul>
            {cities.map((city) => (
              <li key={city.id}>{city.name}</li>
            ))}
          </ul>
        </>
      );
    }
    ```

    </details>
    &nbsp;

4.  Let's link the homepage `/` to the `/cities` page. For this we will need to use the [nextjs Link Component](https://nextjs.org/docs/pages/api-reference/components/link).
    <details>
        <summary>🙈 Hint</summary>

    ```js
    import Link from "next/link";

    export default function HomePage() {
      return (
        <div>
          <h1>Welcome to my cities App.</h1>
          <Link href="/cities">Go to cities</Link>
        </div>
      );
    }
    ```

    </details>
    &nbsp;

5.  Now let's go back to the `cities/index.js` file and update each `li` to link to a specific page. We will use the `slug` property on each `city` object to help construct the `href`. The goal should be, for example, that the `Tokyo` city links to `/cities/tokyo`

    <details>
        <summary>🙈 Hint</summary>

    ```js
    import Link from "next/link";
    import { cities } from "../../lib/data";

    export default function Cities() {
      return (
        <>
          <h1>Cities</h1>
          {cities.map((city) => (
            <li key={city.id}>
              <Link href={`cities/${city.slug}`}>{city.name}</Link>
            </li>
          ))}
        </>
      );
    }
    ```

    </details>
    &nbsp;

6.  Finally, let's work on the individual city pages. Inside the `cities` directory, create a file called `[slug].js`. For now, just display and `h1` saying `City!!` inside. Navigate in the browser to `http://localhost:3000/cities/tokyo` and see if you see `City!!`

    <details>
        <summary>🙈 Hint</summary>

    ```js
    import { cities } from "@/lib/data";

    export default function City() {
      return <h1>City!!</h1>;
    }
    ```

    </details>
    &nbsp;

    Now that we know it works, we can try and get the individual city information displaying. We will need to import `useRouter` so that we can figure out which "page" we are on. Once we have extracted the `slug` from the `params` object we can use that to `find` the city object that we want from our `cities` array.

    <details>
        <summary>🙈 Hint</summary>

    ```js
    import { useRouter } from "next/router";
    import { cities } from "@/lib/data";

    export default function City() {
      const router = useRouter();

      if (!router.query) {
        return null;
      }
      const { slug } = router.query;
      const city = cities.find((city) => city.slug === slug);

      if (!city) {
        return null;
      }

      return (
        <>
          <h1>{city.name}</h1>
          <p>{city.description}</p>
        </>
      );
    }
    ```

    </details>
    &nbsp;

7.  Bonus ideas.

- Display more information about each city.
- Create a `back to all cities` link on each city page.
