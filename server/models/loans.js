const { Schema, model } = require('mongoose');
const loansSchema = new Schema(
  {
    descritpion: { type: String },
    loan: { type: Number },
    id: { type: Number },
    idUser: { type: Number },
    fromIdUser: { type: Number },
    isAprove: { type: Boolean,default: false },
    createdAt: {type: Date, default: Date.now}
  },
  { versionKey: false },
  { collection: 'loans' }
);
const Loans = model('loans', loansSchema);
module.exports = Loans;