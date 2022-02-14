// const Users = require('../models/users');
// // const Expenses = require('../models/expenses');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.ExpensesController = {

    async getUsers(req, res) {
        try {
          const users = await Users.find({}).lean();
          res.status(201).json({ ...users });
        } catch (error) {
          res.send(`Error Getting user from db:${err}`);
        }
      },
};