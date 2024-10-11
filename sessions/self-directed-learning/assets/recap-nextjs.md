# Next.js Recap

## Next.js Structure

Now that we are dealing with a more complex architecture, it's good to take a step back from coding and spend it to have a look at the big picture.

Let's have a look at a basic Next project file structure:

```bash
db
  models
    User.js
  connect.js
lib
  utils.js
components
  forms
    LoginForm.js
    RegisterForm.js
  UserList.js
  User.js
pages
  api
    users
      index.js
      [id].js
  users
    index.js
    [id].js
  index.js
```

## The `/pages` folder

Files contained in this folder are responsible for the app routing:

| File                        | URL(s)                                                                        |
| --------------------------- | ----------------------------------------------------------------------------- |
| `/pages/index.js`           | <http://localhost:3000/>                                                      |
| `/pages/users/index.js`     | <http://localhost:3000/users>                                                 |
| `/pages/users/[id].js`      | <http://localhost:3000/users/1>, <http://localhost:3000/users/2> ...          |
| `/pages/api/users/index.js` | <http://localhost:3000/api/users>                                             |
| `/pages/api/users/[id].js`  | <http://localhost:3000/api/users/1>, <http://localhost:3000/api/users/1>, ... |

Remember that the Next underlying code is handling the routing for you.

### Note about parametric routes

Files like `/users/[id].js` match multiple URLs like `/users/1`, `/users/2`...
The **parameter** is available inside the file via `next/router`:

```js
import { useRouter } from "next/router";

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;
  // do something with the id
  // probably to compose the API URL for an useSWR call
}
```

Usually we call the parameter `id` and we reference it in both the filename (`/users/[id].jd`) and the component (`router.query.id`).

Sometimes you may need multiple parameters, e.g. `/products/[productId]/versions/[versionId].jd`. Both will be available in the `router.query`.

### The API files

For `GET` requests, they expose the data as JSON. Remember that you can always manually visit <http://localhost:3000/api/users> for instance, to check directly if the response is looking like you expect.

For `POST`, `PUT` and `DELETE` requests, you have to intercept the method in the handler:

```js
export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      const newUser = await User.create(request.body);
      response.status(201).json(newUser);
    } catch (error) {
      console.log("POST /api/users", error);
      response.status(500).json({ message: "Error creating new user" });
    }
    return;
  }

  if (request.method === "GET") {
    // ...
  }
  // ...rest of the handlers
}
```

## The `/components` folder

Here you can organise the React components: forms, lists, single items, etc...with the corresponding styles depending on your styling strategy.

## The `/db` folder

Everything MongoDB related goes here. The `connect.js` file exposes the DB connection, that should be imported in every API route that needs to interact with Mongo.

Every model (`User`, `Service`, `Review`, `Rating`...) belongs in a separate file, where the Mongoose schema is defined:

```js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
```

## The `/lib` folder

Code that is not strictly related to Next, React or MongoDB and that should be shared between different contexts can be put in a separate library folder:

```js
// /lib/utils.js
export function formatDate(timestamp) {
  return new Date(timeStamp).toLocaleDateString();
}

// /components/User.js
import { formatDate } from '../lib/utils.js';

export default function User() {
  // ...
  return (
    <>
      <h1>{user.firstName} {user.lastName}</h1>
      <p>Member since {formatDate(user.createdAt)}<p>
    </>
  );
}
```
