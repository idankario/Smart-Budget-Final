const { Schema, model } = require('mongoose');
const usersSchema = new Schema(
  {
    fullName: { type: String },
    password: { type: String },
    role: { type: String },
    budgetLimit: { type: Number },
    email: { type: String },
    idFamily: { type: Number },
    id: { type: Number },
    income: { type: Number }
  },
  { versionKey: false },
  { collection: 'users' }
);
const Users = model('users', usersSchema);
module.exports = Users;
