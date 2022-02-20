const Users = require('../models/users');
const Expenses = require('../models/expenses');
const jwt = require('jsonwebtoken');
const { Mail } = require('./mail');
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
      const d = new Date();
      const expenses = await Expenses.find({
        idUser: user.id,
        from: {
          $regex: new RegExp(`${d.getFullYear()}-${d.getMonth()}-`, ''),
        },
      }).select("-descritpion").select("-_id").select("-idUser").select("-createdAt").lean();
      let count = parseInt(cost);
      expenses.forEach(element => {
        count = count + element.cost
      })
      if (user.budgetLimit - count > 0) {
        const expenseId = await Expenses.findOne().sort('-id');
        // Create user in database
        Expenses.create({
          id: expenseId ? expenseId.id + 1 : 1,
          descritpion: descritpion,
          cost: cost,
          methodsPayment: methodsPayment,
          category: category,
          idFamily: user.idFamily,
          idUser: user.id,
        });
        res.status(201).json({ token });
      }
      else {
        // api/users/loans
        const Parents=Users.find({idFamily:user.idFamily,role:"Parent" });
        let mail = {
          from: 'smartthebudget@gmail.com',
          to: `${user.email}`,
          subject: 'Smart Budget Declined payment',
          text: `Hi ${user.fullName},
          Unfortunately, your child recent invoice payment for ${cost} and was declined becouse of the budget limit of this month.
          But don't worry: your data is safe and sound! Please get in touch with your child to have a SmartBudget this week.`
        };
        Mail.sendMailToCoustomer(mail);
        res.status(400).send({ "error": `Budget is too low` });
      }
    } catch (error) {
      res.status(400).send({ "error": `Error Getting user from db` });
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
      const expenses = await Expenses.find({
        idUser: user.id,
        from: {
          $regex: new RegExp(`${d.getFullYear()}-${d.getMonth()}-`, ''),
        },
      }).select("-descritpion").select("-_id").select("-idUser").select("-createdAt").lean();
      res.status(201).json({ token, expenses: (expenses) });
    } catch (error) {
      res.status(400).send({ "error": `Error Getting user from db` });
    }
  }
};