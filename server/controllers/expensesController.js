const Users = require('../models/users');
const Expenses = require('../models/expenses');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.ExpensesController = {
  
  async getExpenses(req, res) {
    try {
      const user = req.user;
      const { descritpion, cost, methodsPayment, category} = req.body;
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );
      // Create user in our database
      const newExpenses = await Expenses.create({
        id: 0,
        descritpion: descritpion,
        cost: cost,
        methodsPayment: methodsPayment,
        category: category, 
        idFamily: user.idFamily,
        idUser: user.id,
      });
 
      let expenses = await (Expenses.find({ idFamily: user.idFamily }).select("-_id").select("-id"));
      res.status(201).json({ ...expenses, token });
    } catch (error) {
      res.send(`Error Getting user from db:${err}`);
    }
  },
};

