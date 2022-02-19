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
UsersRouter.get('/id', auth, UsersController.getUser);

UsersRouter.put('/', auth, UsersController.updateUser);


UsersRouter.get('/family/:id', auth, UsersController.getFamily);
UsersRouter.post('/family',cors(), auth, UsersController.addfamily);
UsersRouter.post('/expenses', auth, ExpensesController.addExpenses);
UsersRouter.get('/expenses', auth, ExpensesController.getExpenses);
UsersRouter.post('/loan', auth, LoansController.askLoan);
module.exports = { UsersRouter };