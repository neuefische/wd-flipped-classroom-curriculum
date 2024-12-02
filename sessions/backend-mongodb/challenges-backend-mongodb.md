# Challenges: Backend MongoDB

(difficulty: 🔥)

## 1. Setting Up a MongoDB Atlas Account and Database

Follow this guide to set up your MongoDB Atlas account and your first database.

> 💡 Note that some steps may vary slightly.

**1. Sign Up for MongoDB Atlas**

- Visit [MongoDB Atlas](https://www.mongodb.com/atlas/database) and click "Try Free".
- Fill in the required information, including your email, and create a password.
- Alternatively, you can sign up using your Google account.

**2. Create a New Project** - _This step may vary and could be automatic in some cases._

- Enter a name for your project (e.g., "Web Dev Bootcamp").

**3. Set Up a Cluster**

- Choose a free tier: `M0 Free`.
- Select a provider: `AWS`.
- Select a region: `Frankfurt`.
- Click on "Create".
- Wait for the cluster to deploy; this may take a few minutes.

**4. Configure Database Access**- _You might be led to this screen automatically after creating the cluster._

**4.1 Add a Databse User**

- Go to the "Security > Database Access" tab.
- Click "Add New Database User".
- Create a user with a username and password. 💡 Make sure to save these credentials as you will need them to connect to your database.
- Choose "Read and Write to any database" as the user role.
- Click "Add User".

**4.2 Change Your IP Adress**

- Go to the "Security > Network Access" tab.
  -Make sure that the IP adress is `0.0.0.0/0  (includes your current IP address)`

## 2. Creating a Database and Inserting Multiple Documents

> 💡 You will use this database in the upcoming session.

**1. Create a Fish-Shop Database**

- Go to the "Deployments > Database" tab.
- Click "Browse Collections".
- Click "Create Database".
- In the dialog that appears, enter `fish-shop-database` as the `database name`.
- Enter `products` as the `collection name`.
- Click "Create" to create the new database and collection.

**2. Insert Multiple Documents**

- Open the `fish-shop-database` database.
- Select the `products` collection.
- Click "Insert Document".
- A JSON editor will appear where you can insert these products.
- Change to the view `{}` and copy-paste the data from the `products.json` file.
- Download and extract the [resources](https://github.com/wd-bootcamp/web-exercises/blob/main/sessions/backend-read/products/README.md#resources).
- Copy-paste the data from the `products.json` file.
- Click "Insert".

## Resources

- [MongoDB Atlas Tutorial](https://www.mongodb.com/basics/mongodb-atlas-tutorial)
- [Environment Variables (Vercel Docs)](https://vercel.com/docs/concepts/projects/environment-variables)
