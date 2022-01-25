const { Schema, model } = require('mongoose');
const usersSchema = new Schema(
  {
    FullName: { type: String },
    Password: { type: String },
    Role: { type: String },
    BudgetLimit: { type: Number },
    Email: { type: String },
    IdFamily: { type: Number },
    Id: { type: Number },
    Income: { type: Number },
    IdExpenses: { type: Object },
  },
  { versionKey: false },
  { collection: 'users' }
);
const users = model('users', usersSchema);
module.exports = users;
