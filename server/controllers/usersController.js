const Users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.UsersController = {
  async loginUser(req, res) {
    try {
      const { email, password, userName } = req.body;
      if (!(email && password && userName)) {
        res.status(400).send('All input is required');
      }
      // Validate if user exist in our database
      const user = await Users.findOne({
        email: email,
        fullName: userName,
      }).lean();
      if (!user)
        return res.status(400).send({
          email: 'Incorrect email address or userName',
          userName: 'Incorrect email address or userName',
        });

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: '2h',
          }
        );
        // remove password and _id
        const userDetails = (({ password, _id, ...o }) => o)(user);
        return res.status(200).json({ ...userDetails, token });
      }
      return res.status(400).send({ password: 'Incorrect Password' });
    } catch (err) {
      return res.status(400).send('Problem with server');
    }
  },

  async registerUser(req, res) {
    try {
      const { userName, role, budgetLimit, income, email, password } = req.body;
      // Validate user input
      if (!(userName && role && budgetLimit && income && email && password)) {
        res.status(400).send('All input are required');
      }
      const oldUser = await Users.findOne({ email: email });
      if (oldUser) {
        return res
          .status(409)
          .send({ email: 'Email Already Exist. Please Login' });
      }
      const user = await Users.findOne().sort('-id');
      const family = await Users.findOne().sort('-idFamily');
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const newuser = await Users.create({
        id: user.id + 1,
        fullName: userName,
        password: encryptedPassword,
        budgetLimit: budgetLimit,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        role: role,
        income: income,
        idFamily: family.idFamily + 1,
        idExpenses: 0,
      });
      // Create token
      const token = jwt.sign(
        { user_id: newuser._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );
      const userDetails = (({ password, _id, ...o }) => o)(newuser);
      // return new user
      res.status(201).json({ ...userDetails, token });
    } catch (err) {
      console.log(err);
    }
  },

  async getUsers(req, res) {
    try {
      const users = await Users.find({}).lean();
      res.status(201).json({ ...users });
    } catch (error) {
      res.send(`Error Getting user from db:${err}`);
    }
  },

  async deleteUser(req, res) {
    try {
      Users.deleteOne({ id: req.params.id })
        .then((result) => {
          if (result.deletedCount > 0) {
            res.status(200).res.send(`user--${req.params.id}--deleted`);
          } else {
            res.status(400).res.send(`user--${req.params.id}--not in the data`);
          }
        })
        .catch(() =>
          res.status(400).send(`Error user ${req.params.id} not deleted`)
        );
    } catch (error) {
      res.send(`Error Getting user from db:${err}`);
    }
  },



  async getUser(req, res) {
    try {
      Users.findOne({ id: req.params.id })
        .then((user) => {
          if (user) {
            res.json(user);
          } else {
            res.status(400).json('Wrong user id please enter correct id');
          }
        })
    } catch (error) {
      res.send(`Error Getting user from db:${err}`);
    }
  },

  getFamily(req, res) {
    Users.find({})
      .then((Users) => {
        res.json(Users.filter((users) => users.IdFamily == req.params.id));
      })
      .catch((err) => res.send(`Error Getting user from db:${err}`));
  },

  updateUser(req, res) {
    Users.updateOne({ Id: req.params.id }, req.body)
      .then((result) => {
        if (result.matchedCount > 0) {
          res.send(`user ${req.params.id} Updated!`);
        } else {
          res.status(400).send(`user ${req.params.id} Not in The DB!`);
        }
      })
      .catch((err) => res.status(400).json(err));
  },

  addfamily(req, res) {
    //register
    const { FullName, Password, Email, Role, BudgetLimit, Income, Idfamily } =
      req.body;
    Users.findOne()
      .sort('-Id')
      .exec((err, user) => {
        const newuser = new Users({
          Id: user.Id + 1,
          FullName: FullName,
          Password: Password,
          BudgetLimit: BudgetLimit,
          Email: Email,
          Role: Role,
          Income: Income,
          IdFamily: Idfamily,
        });
        const result = newuser.save();
        if (result) {
          res.json(user);
        } else {
          res.status(404).send('error saving a user');
        }
      });
  },
};
