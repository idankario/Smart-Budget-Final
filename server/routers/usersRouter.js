const { Router } = require('express');
const { UsersController } = require('../controllers/usersController');
const { ExpensesController } = require('../controllers/expensesController');
const { LoansController } = require('../controllers/loanController');
const auth = require('../middleware/auth');

const UsersRouter = new Router();

UsersRouter.post('/login', UsersController.loginUser);
UsersRouter.post('/register', UsersController.registerUser);
UsersRouter.get('/', auth, UsersController.getUsers);

UsersRouter.get('/family/:id', auth, UsersController.getFamily);
UsersRouter.post('/family', auth, UsersController.addfamily);


UsersRouter.post('/expenses', auth, ExpensesController.addExpenses);
UsersRouter.get('/expenses', auth, ExpensesController.getExpenses);
UsersRouter.post('/loan/:id', auth, LoansController.askLoan);

UsersRouter.put('/:id', auth, UsersController.updateUser);
UsersRouter.delete('/:id', auth, UsersController.deleteUser);
UsersRouter.get('/:id', auth, UsersController.getUser);


module.exports = { UsersRouter };
