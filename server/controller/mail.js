const nodemailer = require("nodemailer");;


exports.sendMail = (req,res)=> {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            //LATER CHANGE TO ENV VARIABLESSS
            user: 'yatrainfosys@gmail.com',
        //   pass: 'pujhgbsklktkphcj'
            pass: 'qtjxntdcpxoxstwq'
        }
      });

      const sub = req.body.subject;
      const text = req.body.message;
      console.log(sub + " "  + text);
      let message = {
        from: 'yatrainfosys@gmail.com',
        to: 'aozpokharel@gmail.com',
        subject: sub,
        text: text
      };

      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log(info.response);
        }
      });

}
