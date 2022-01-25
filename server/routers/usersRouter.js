const { Router } = require('express');
const { UsersController } = require('../controllers/UsersController');
const auth = require('../middleware/auth');

const UsersRouter = new Router();

UsersRouter.get('/',  UsersController.getUsers);
UsersRouter.get('/:id', auth, UsersController.getUser);
UsersRouter.get('/family/:id', auth, UsersController.getFamily);
UsersRouter.post('/', auth, UsersController.postUser);
UsersRouter.post('/family', auth, UsersController.addfamily);
UsersRouter.put('/:id', auth, UsersController.updateUser);
UsersRouter.delete('/:id', auth, UsersController.deleteUser);

module.exports = { UsersRouter };
