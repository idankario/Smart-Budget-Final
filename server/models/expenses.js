const { Schema, model } = require('mongoose');
const expensesSchema = new Schema(
  {
    descritpion: { type: String },
    cost: { type: Number },
    methodsPayment: { type: String },
    category: { type: String },
    idFamily: { type: Number },
    idUser: { type: Number },
    id: { type: Number },
    createdAt: {type: Date, default: Date.now}
  },
  { versionKey: false },
  { collection: 'users' }
);
const Expenses = model('expenses', expensesSchema);
module.exports = Expenses;
