# Node.js Express Project Setup

This project uses **Express.js** as the web framework, **HBS** for templating, **Nodemon** for development, **Body-Parser** for handling form data, and **Mongoose** for MongoDB integration.

## Prerequisites

- [Node.js and npm](https://nodejs.org/) must be installed on your system.

## Installation Steps

Follow the steps below to set up the project:

### 1. Initialize a new Node.js project

```bash
npm init -y
```

### 2. Install Express

```bash
npm install express
```

### 3. Install HBS (Handlebars)

```bash
npm install hbs
```

### 4. Install Nodemon (for development use only)

```bash
npm install --save-dev nodemon
```

### 5. Install Body-Parser

```bash
npm install body-parser
```

### 6. Install Mongoose

```bash
npm install mongoose
```

## Running the Application

Use the following command to run your application using **nodemon**:

```bash
npx nodemon app.js
```

> Replace `app.js` with your main entry file if it's named differently.

## Folder Structure (Suggested)

```
project/
│
├── views/              # HBS templates
├── public/             # Static files (CSS, JS, images)
├── models/             # Mongoose models
├── routes/             # Express routes
├── app.js              # Main application file
└── package.json
```

## License

This project is licensed under the MIT License.
