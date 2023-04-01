const nodemailer = require("nodemailer");
require("dotenv").config();

sendMail = (subject, message) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yatrainfosys@gmail.com",
      pass: process.env.pass,
    },
  });

  const sub = subject;
  const text = message;
  console.log(sub + " " + text);
  let message = {
    from: "yatra.infosys@gmail.com",
    to: "yatrainfosys@gmail.com",
    subject: sub,
    text: text,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      res.json({ error: "Server error, please try again later" });
    } else {
      console.log(info.response);
    }
  });
};

exports.emailVerifySend = (req, res) => {};
