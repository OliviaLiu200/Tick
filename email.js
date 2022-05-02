const nodemailer = require('nodemailer');
require('dotenv').config();

function sendemail(username, useremail, friendname, friendemail){

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tickreminder@gmail.com',
    pass: process.env.EMAILPASSWORD
  }

});

var mailOptions = {
  from: 'tickreminder@gmail.com',
  to: friendemail, //need to change this to user's friends somehow
  subject: 'Your Friend is Procrastinating',
  text: "Hey " + friendname + '! Your friend ' + username + ' is procrastinating! Do something about it!'
  + ' you can send him an email at ' + useremail 
};

transporter.sendMail(mailOptions, function(err, data){ // the function needed to export i think
  if (err) {
    console.log('Error', err)
  } else {
    console.log('Email sent')
  }
})

}

module.exports = {sendemail}
