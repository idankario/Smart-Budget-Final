const express = require('express');
const logger = require('morgan');

const app = express()
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


const port = process.env.PORT || 8000;
const { UsersRouter } = require('./routers/usersRouter');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cors());

app.use('/api/users', UsersRouter);

app.use((req, res) => {
  res.status(404).send('Route not found!');
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);
