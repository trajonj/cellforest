const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//START OF THE ROUTES

app.get('/', (req,res) => {
  res.render('contactView');
});

//START OF THE POST REQUEST

app.post('/send', (req,res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>${req.body.message}</li>
    </ul>
  `;

//PORT
// Create a Nodemailer transporter using SMTP
let transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // Set to true if using a secure connection (TLS/SSL)
  auth: {
    user: 'trajon2011@outlook.com',
    pass: 'WEDeY7u^t9h',
  },
  tls:{
    rejectUnauthorized:true
  }
});

// Assuming `formData` contains the form submission data
let mailOptions = {
  from: '"Nodemailer Contact"  <trajon2011@outlook.com>',
  to: 'rhurbo@outlook.com',
  subject: 'Node Contact Request',
  html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p>`,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Message sent: %s', info.messageId);   
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  res.render('contact', {msg:'Email has been sent'});
});
});

app.listen(5173, () => console.log('Server started <3 ...'));