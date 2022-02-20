const nodemailer = require("nodemailer")
require("dotenv").config()
exports.Mail = {
    async sendMailToCoustomer(mail) {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        transporter.sendMail(mail, (error, info) => {
            if (error) {
                return(error);
            } else {
                return ('Email sent');
            }
        });
    }

};