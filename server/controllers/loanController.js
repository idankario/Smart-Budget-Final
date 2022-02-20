const Users = require('../models/users');
const Loans = require('../models/loans');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.LoansController = {
    async askLoan(req, res) {
        try {
            const user = req.user;
            const { descritpion, loan, email } = req.body;
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
            const loanId = await Loans.findOne().sort('-id');
            //Crate loan to approve
            const newLoans = await Loans.create({
                id: loanId ? loanId.id + 1 : 1,
                descritpion: descritpion,
                loan: loan,
                idUser: user.id,
                fromIdUser: userLoan.id,
            });
            res.status(201).json({ token });
        } catch (error) {
            res.status(400).send({ "error": `Error Getting user from db` });
        }
    },
    async getLoans(req, res) {
        try {
            const user = req.user;
            const usersAsk = await Loans.find({ idUser: user.id }).lean();
            const askUsers = await Loans.find({ fromIdUser: user.id }).lean();
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email: user.email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );
            res.status(201).json({ token, askUsers, usersAsk });
        } catch (error) {
            res.status(400).send({ "error": `Error Getting user from db` });
        }
    },
    async updateLoans(req, res) {
        try {
            const user = req.user;
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email: user.email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );
            res.status(201).json({ token});
        } catch (error) {
            res.status(400).send({ "error": `Error Getting user from db` });
        }
    },

};