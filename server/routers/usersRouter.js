const { Router } = require('express');
const { UsersController } = require('../controllers/usersController');
const { ExpensesController } = require('../controllers/expensesController');
const { LoansController } = require('../controllers/loanController');
const auth = require('../middleware/auth');

const UsersRouter = new Router();
UsersRouter.post('/expenses', auth, ExpensesController.addExpenses);
UsersRouter.post('/login', UsersController.loginUser);
UsersRouter.post('/register', UsersController.registerUser);
UsersRouter.get('/', auth, UsersController.getUsers);
UsersRouter.get('/:id', auth, UsersController.getUser);
UsersRouter.get('/family/:id', auth, UsersController.getFamily);
UsersRouter.post('/family', auth, UsersController.addfamily);
UsersRouter.put('/:id', auth, UsersController.updateUser);
UsersRouter.delete('/:id', auth, UsersController.deleteUser);

UsersRouter.post('/loan/:id', auth, LoansController.askLoan);


module.exports = { UsersRouter };
