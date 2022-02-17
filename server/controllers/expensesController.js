const Users = require('../models/users');
const Expenses = require('../models/expenses');
const jwt = require('jsonwebtoken');

exports.ExpensesController = {

  async addExpenses(req, res) {
    try {
      const user = req.user;
      const { descritpion, cost, methodsPayment, category } = req.body;
      if (!(descritpion && cost && methodsPayment && category)) {
        res.status(400).send('All input are required');
      }
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );
      // Create user in database
      Expenses.create({
        id: 0,
        descritpion: descritpion,
        cost: cost,
        methodsPayment: methodsPayment,
        category: category,
        idFamily: user.idFamily,
        idUser: user.id,
      });
    res.status(201).json({ token });
    } catch (error) {
      res.send(`Error Getting user from db:${err}`);
    }
  },
  
  async getExpenses(req, res) {

    try {
      const user = req.user;
      
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );
      const d = new Date();
      const expenses = await Expenses.find({idUser: user.id,
        
        from: {
          $regex: new RegExp(`${d.getFullYear()}-${d.getMonth()}-`, ''),
       },
       
      }).lean();
      res.status(201).json({ token,expenses:expenses });
    } catch (error) {
      res.send(`Error Getting user from db:${err}`);
    }
  }
};