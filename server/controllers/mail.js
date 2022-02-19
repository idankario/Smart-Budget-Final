const nodemailer = require("nodemailer")
exports.Mail = {
    async sendMailToCoustomer(mail) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'smartthebudget@gmail.com',
          pass: 'idansmartthebudget'
        }
      });
      transporter.sendMail(mail,  (error, info)=> {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }

};