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
  text: 'Your friend' + chrome.storage.sync.get('name') + ' is procrastinating! Do something about it!'
  + ' you can send him an email here ' + chrome.storage.sync.get('useremail') 
};

transporter.sendMail(mailOptions, function(err, data){ // the function needed to export i think
  if (err) {
    console.log('Error', err)
  } else {
    console.log('Email sent')
  }
})

module.exports = {transporter}