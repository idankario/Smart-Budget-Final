const Users = require('../models/users');
const Loans = require('../models/loans');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.LoansController = {
    async askLoan(req, res) {
        try {
            const user = req.user;
            const { descritpion, loan } = req.body;
            if (!(descritpion && loan)) {
                res.status(400).send('All input are required');
            }
            // Validate if user to loan exist in our database
            const userLoan = await Users.findOne({
                email: email,
            }).lean();
            if (!userLoan)
                return res.status(400).send({
                    email: 'Incorrect user for take loan',
                });
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email: user.email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );
            //Crate loan to approve
            const newLoans = await Loans.create({
                id: 0,
                descritpion: descritpion,
                loan: loan,
                idUser: methodsPayment,
                fromIdUser: category,
            });
            res.status(201).json({ token });
        } catch (error) {
            res.send(`Error Getting user from db:${err}`);
        }
    },
};