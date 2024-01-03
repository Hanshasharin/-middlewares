//  application level middleware

const express = require('express');
const app = express();

app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses incoming form data


// router level middleware

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('This is router-level middleware.');
  next();
});

router.get('/', (req, res) => {
  res.send('Hello from router!');
});

//  built-in middleware
const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files from the 'public' directory

// error handling middleware
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  const err = new Error('Example error');
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

 third part middleware

//  npm install cookie-parser 
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser()