const express = require('express');
const logger = require('morgan');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;
const { UsersRouter } = require('./routers/usersRouter');
const User = require('./models/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(cors());

// Register
app.post('/register', async (req, res) => {
  try {
    // Get user input
    const { fullName, email, password } = req.body;

    // Validate user input
    if (!(email && password && fullName)) {
      res.status(400).send('All input are required');
    }
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ Email: email });

    if (oldUser) {
      return res.status(409).send('User Already Exist. Please Login');
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      FullName: fullName,
      Email: email.toLowerCase(), // sanitize: convert email to lowercase
      Password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '2h',
      }
    );

    // return new user
    res.status(201).json({ ...user.toObject(), token });
  } catch (err) {
    console.log(err);
  }
});

// Login
app.post('/login', async (req, res) => {
  // our login logic goes here
  const { email, password } = req.body;
  try {
    // Get user input
    //const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send('All input is required');
    }
    // Validate if user exist in our database
    const user = await User.findOne({ Email: email });
    if (user && (await bcrypt.compare(password, user.Password))) {
     
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );

      // user
      return res.status(200).json({ ...user.toObject(), token });
    }

    return res.status(400).send('Invalid Credentials');
  } catch (err) {
    console.log(err);
  }
});

app.use('/api/Users', UsersRouter);

app.use((req, res) => {
  res.status(404).send('Route not found!');
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);
