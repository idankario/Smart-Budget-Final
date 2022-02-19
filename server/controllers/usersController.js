const Users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Mail } = require('./mail');
exports.UsersController = {
  async loginUser(req, res) {
    try {
      const { email, password, fullName } = req.body;
      if (!(email && password && fullName)) {
        res.status(400).send('All input is required');
      }
      const user = await Users.findOne({
        email: email,
        fullName: fullName,
      }).lean();

      if (!user)
        return res.status(400).send({
          email: 'Incorrect email address or userName',
          fullName: 'Incorrect email address or userName',
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
      const { fullName, role, budgetLimit, income, email, password } = req.body;
      // Validate user input
      if (!(fullName && role && budgetLimit && income && email && password)) {
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
      encryptedPassword = await bcrypt.hash(password, 10);
      const newuser = await Users.create({
        id: user ? user.id + 1 : 1,
        fullName: fullName,
        password: encryptedPassword,
        budgetLimit: budgetLimit,
        email: email.toLowerCase(),
        role: role,
        income: income,
        idFamily: family ? family.idFamily + 1 : 1,
      });

      const token = jwt.sign(
        { user_id: newuser._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );

      const userDetails = (({ password, _id, ...o }) => o)(newuser.toObject());
      return res.status(200).json({ ...userDetails, token });
    } catch (err) {
      console.log(err);
    }
  },

  async updateUser(req, res) {
    try {
      const { password, fullName, budgetLimit, income, email } = req.body;
      if (!(fullName && budgetLimit && income && email)) {
        res.status(400).send({ error: 'All input are required' });
      }
      const user = await Users.findOne({
        id: req.user.id,
      }).lean();
      if (!user)
        return res.status(400).send({ error: 'Incorrect token' });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: '2h',
          }
        );
        let newUser = ({ ...user, fullName, budgetLimit, income, email, });
        await Users.findOneAndUpdate({ id: req.user.id }, newUser);
        const userDetails = (({ password, _id, ...o }) => o)((newUser));
        return res.status(200).json({ ...userDetails, token });
      }
      else
        return res.status(400).send({ password: 'Incorrect Password' });

    } catch (err) {
      return res.status(400).send({ "error": `Error Getting user from db` });
    }
  },

  async addfamily(req, res) {
    try {
      const { fullName, role, budgetLimit, income, email, password } = req.body;
      // Validate user input
      if (!(fullName && role && budgetLimit && income && email && password)) {
        res.status(400).send('All input are required');
      }
      const user = req.user;
      const oldUser = await Users.findOne({ email: email });
      if (oldUser) {
        return res
          .status(409)
          .send({ email: 'Email Already Exist. Please Login' });
      }
      const userLast = await Users.findOne().sort('-id');
      encryptedPassword = await bcrypt.hash(password, 10);
      const newuser = await Users.create({
        id: userLast.id + 1,
        fullName: fullName,
        password: encryptedPassword,
        budgetLimit: budgetLimit,
        email: email.toLowerCase(),
        role: role,
        income: income,
        idFamily: user.idFamily,
      });
      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );
      const userDetails = (({ password, _id, ...o }) => o)(user);
      let mail = {
        from: 'smartthebudget@gmail.com',
        to: `${email}`,
        subject: 'Smart Budget Email Details',
        text: `We have sent you this email in response to your request of family membet to give your password on SmartBudget. 

      Your password for is:${password}, 
      Your user name for is:${fullName},
        
        We recommend that you keep your password secure and not share it with anyone. If you feel your password has been compromised, you can change it by going to your My Account Page and clicking on the "Change Email Address or Password" link.
        
      If you need help, or you have any other questions, feel free to this email customer-service-email.
        
      Customer Service`
      };
      Mail.sendMailToCoustomer(mail);
      return res.status(200).json({ ...userDetails, token });
    } catch (err) {
      return res.status(400).send({ "error": `Error Getting user from db` });
    }
  },

  async getUsers(req, res) {
    try {
      const user = req.user;
      let users = await Users.find({ _id: { $ne: user._id }, idFamily: user.idFamily }).select("-password").select("-_id").select("-id").select("-idFamily");
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );
      res.status(201).json({ ...users, token });
    } catch (error) {
      res.status(400).send({ "error": `Error Getting user from db` });
    }
  },

  async deleteUser(req, res) {
    try {
      await Users.deleteOne({ id: req.user.id });
      res.status(200).send(`SUCCESS`);
    } catch (error) {
      res.status(400).send({ "error": `Error Getting user from db` });
    }
  },
};

