const express = require('express');
const logger = require('morgan');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
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
