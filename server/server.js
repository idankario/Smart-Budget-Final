const express = require('express');
const logger = require('morgan');

const app = express()
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 8000;
const { UsersRouter } = require('./routers/usersRouter');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Server static assets 
app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-auth-token,x-api-key');
  next();
});
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use('/api/users', UsersRouter);

app.use((req, res) => {
  res.status(404).send('Route not found!');
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);
