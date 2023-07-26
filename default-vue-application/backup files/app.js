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

app.get('/contact', (req,res) => {
  res.render('contactView');
});

//START OF THE POST REQUEST

app.post('/send', (req,res) => {
  const { name, email, message } = req.body;
  const response = {
    message: 'Form submission successful, YAY!',
    data: { name, email, message },
  }
  res.json(response);
});

//PORT

app.listen(5173, () => console.log('Server started <3 ...'));

// Create a Nodemailer transporter using SMTP
/*const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Set to true if using a secure connection (TLS/SSL)
  auth: {
    user: 'trajon2011@gmail.com',
    pass: 'WEDeY7u^t9h',
  },
});

// Assuming `formData` contains the form submission data
const mailOptions = {
  from: 'Nodemailer Contact'  '<trajon2011@gmail.com>',
  to: 'rhurbo@gmail.com',
  subject: 'Node Contact Request',
  html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});*/
