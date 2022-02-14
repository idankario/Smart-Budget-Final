const { Schema, model } = require('mongoose');
const expensesSchema = new Schema(
  {
    descritpion: { type: String },
    cost: { type: Number },
    methodsPayment: { type: String },
    category: { type: String },
    idFamily: { type: Number },
    idUser: { type: Number },
    idExpenses: { type: Number }
 
  },
  { versionKey: false },
  { collection: 'users' }
);
const Expenses = model('expenses', expensesSchema);
module.exports = Expenses;
