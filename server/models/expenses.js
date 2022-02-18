const { Schema, model } = require('mongoose');
const expensesSchema = new Schema(
  {
    descritpion: { type: String },
    cost: { type: Number },
    methodsPayment: { type: String, select: false },
    category: { type: String },
    idFamily: { type: Number, select: false },
    idUser: { type: Number },
    id: { type: Number , select: false},
    createdAt: {type: Date, default: Date.now}
  },
  { versionKey: false },
  { collection: 'users' }
);
const Expenses = model('expenses', expensesSchema);
module.exports = Expenses;
