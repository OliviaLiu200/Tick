const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tickreminder@gmail.com',
    pass: 'tickreminder123'
  }

});

var mailOptions = {
  from: 'tickreminder@gmail.com',
  to: 'stephen382012@hotmail.com', //need to change this to user's friends somehow
  subject: 'Your Friend is Procrastinating',
  text: 'Your Friend' + chrome.storage.sync.get('name') + ' is procrastinating! Do something about it!' // change <user> to user name
};

transporter.sendMail(mailOptions, function(err, data){ // the function needed to export i think
  if (err) {
    console.log('Error', err)
  } else {
    console.log('Email sent')
  }
})

module.exports = {transporter}