const nodemailer = require('nodemailer');

const mailOptions = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const sendMail = async emailBody => {
  await mailOptions.sendMail({
    subject: emailBody.subject,
    text: emailBody.text,
    from: 'adzajko@hotmail.com',
    to: 'adzajko@hotmail.com',
    html: '<h1>Ti pisam be.</h1>'
  });
};

module.exports = sendMail;
