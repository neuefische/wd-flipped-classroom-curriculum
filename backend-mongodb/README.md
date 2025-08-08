# Backend MongoDB

## Learning Objectives

- Understanding the difference between a database and a server
- Knowing the difference between relational and non-relational databases
- Learning MongoDB basics and important terms
- Knowing how to use MongoDB Atlas to:
  - Insert data
  - Find and show data
  - Update data
  - Delete data
- Deepening the understanding of CRUD operations with databases

## Requirements

- Backend Basics

## Demo

There is no pre-built demo for this session. You will create a MongoDB database using MongoDB Atlas during the session by following the steps provided in the session guide.

---

## Session Guide

For larger projects, using browser-based storage like localStorage isn’t enough. We need a more robust, scalable solution to store and manage data that multiple users or applications can access. In this session, we’ll cover the basics of databases, focusing on MongoDB, a popular non-relational database, and how to use MongoDB Atlas to create and manage a database in the cloud.

We’ll learn what a database is, how to set one up remotely using MongoDB Atlas, and how to design a data model that fits our needs.

> How can you create a persistent database (remotely on MongoDB Atlas), in which you can store your data?

### Introduction to Databases

- Remind students what a server is:
  - A computer that is designed to **provide services to other computers or devices**.
  - It can host a variety of services, such as a web server, an email server, a file server, or **a database server**.
  - We have used Next.js API routes as a server to request data (from a `data.js` file in the same project).
- Explain a database server:
  - It is a computer that is specifically designed to **host a database**.
  - It manages the data stored in the database.
  - It ensures that it is available to users and applications that need to access it.
- Summarize that we already know how to build a frontend and a web server (Next.js API routes), but we still need to get to know a database server.
- Explain that data storage in a database is persistent (in contrast to localStorage).
- Explain the [difference between relational and non-relational databases](https://www.mongodb.com/compare/relational-vs-non-relational-databases)(aka SQL vs NoSQL):

  - Relational:

    - Data is stored in tables (like SQL or Excel).
    - The tables are connected to each other.
    - Constraint: We must decide for each column what we do if we don't have data for all entries in this column.
    - Example: Store database for orders.

  - Non-relational:
    - Data is stored in JSON-like structures.
    - Data is stored in key/value pairs.
    - Each data set in the database can have unique keys.

> 💡 You can find an [in-depth explanation and comparison here](https://www.mongodb.com/compare/relational-vs-non-relational-databases).

### Introduction to MongoDB

- Point out that, so far, the students have been using `localStorage` to persist data.
- Remind students that:
  - `localStorage` has a limited capacity (usually around 5MB).
  - It is stored in the browser of a user's computer or device.
  - It is specific to the web page or application that created it and the browser that is being used.
  - Its data can be deleted if the user manually deletes the browser's cache and other data.
  - It might be [deleted based on the LRU Policy](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria#lru_policy) (Last Recently Used).
  - This is why `localStorage` is not well-suited for storing large amounts of data or data that needs to be accessed and shared by multiple applications or users.
- Point out that a database, in contrast,

  - can store much larger amounts of data than LocalStorage, and
  - can also be accessed by **multiple applications and users**, so the data can be **shared**.

- Explain why we are using MongoDB:
  - As a non-relational database, MongoDB is less strict and easy to use.
- Explain the name:
  - The name MongoDB is a shortened version of "humongous".
  - The name was chosen to reflect the scalability and flexibility of the database.
  - The "DB" in the name stands for "database," indicating that MongoDB is a type of database.

### MongoDB Atlas

#### Introduction to MongoDB Atlas

- Open MongoDB Atlas (https://cloud.mongodb.com/).

- Explain that this is an online service which provides us with a UI for our databases.

- Use the "Browse collections" button and then "+ Create Database" on the following page.

- Explain the term **Database**:

  - A MongoDB database is a collection of data that is organized and stored in a specific way, using the MongoDB database management system.
  - A MongoDB database can have different _collections_.

- Explain the term **Collection**:

  - A collection is a grouping of MongoDB _documents_.
  - Documents within a collection can have different fields.
  - A collection is the equivalent of a table in a relational database system.
  - A collection exists within a single database.

- Explain the term **Document**:

  - A MongoDB document is a _JSON-like data structure that consists of key-value pairs_.
  - These key-value pairs are called _fields_.

- Explain the term **Fields**:

  - In MongoDB, a field is a _key-value_ pair that is stored in a _document_.
  - A field represents a specific piece of data within a document, and it consists of a field name (key) and a field value.
  - The field name is a string that identifies the field, and the field value is the data stored in the field.

- Continue setting up your database:

  - The database is called _jokes-database_.
  - The collection is called _jokes_.
  - Note that the database's name contains "jokes" because in our case, everything will have to do with jokes. However, this is not a convention, so the name can be chosen more freely.

- Show the two ways to insert some data via the "INSERT DOCUMENT" button:
  - "Insert Document" to add a single data object (= _document_).
    - Note that the `_id` is added automatically.
    - Add a joke below the `_id` so that it looks like this:

```json
{
  "_id": {
    "$oid": "63a43dcfd67b0ad32f43c867"
  },
  "joke": "How do you organize an astronomer's party? You planet."
}
```

- "Insert Document" to _add multiple_ data objects (= _documents_):

  - You can use [this `jokes.json` file](assets/jokes.json).
  - Copy the file contents and paste them into the text field. Show that the `_id` field is added automatically.

- Show that all inserted documents are present in the overview.
- Filter the data with the "Filter" input field:
  - Find a specific joke text with `{ joke: "Thanks for explaining the word “many” to me, it means a lot." }`.
  - Find a joke by its Id (`_id`) with `{ _id: ObjectId("[id_goes_here]")}`.
