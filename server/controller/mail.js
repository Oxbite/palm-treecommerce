const nodemailer = require("nodemailer");
require('dotenv').config();


exports.sendMail = (req,res)=> {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yatrainfosys@gmail.com',
            pass: process.env.pass
        }
      });

      const sub = req.body.subject;
      const text = req.body.message;
      const name = req.body.name;
      console.log(sub + " "  + text);
      let message = {
        from: 'yatra.infosys@gmail.com',
        to: 'yatrainfosys@gmail.com',
        subject: sub,
        text: "Name: " + name + " " + text
      };

      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.error(err);
          res.json({"error": "Server error, please try again later"});
        } else {
          console.log(info.response);
        }
      });

}
