const { Router } = require('express');
const { UsersController } = require('../controllers/usersController');
const { ExpensesController } = require('../controllers/expensesController');
const { LoansController } = require('../controllers/loanController');
const auth = require('../middleware/auth');
const cors = require("cors")

const UsersRouter = new Router();
UsersRouter.post('/login', UsersController.loginUser);
UsersRouter.post('/register', UsersController.registerUser);
UsersRouter.get('/', auth, UsersController.getUsers);
UsersRouter.delete('/', auth, UsersController.deleteUser);
UsersRouter.put('/', auth, UsersController.updateUser);
UsersRouter.post('/family', cors(), auth, UsersController.addfamily);
UsersRouter.post('/expenses', cors(), auth, ExpensesController.addExpenses);
UsersRouter.get('/expenses', auth, ExpensesController.getExpenses);
UsersRouter.post('/loans', auth, LoansController.askLoan);
UsersRouter.get('/loans', auth, LoansController.getLoans);
UsersRouter.put('/loans', auth, LoansController.updateLoans);
module.exports = { UsersRouter };