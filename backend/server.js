const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

// Validate email configuration
if (!ADMIN_EMAIL || !GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.error('Missing required email configuration. Please check your .env file:');
  console.error('ADMIN_EMAIL:', ADMIN_EMAIL ? '✓' : '✗');
  console.error('GMAIL_USER:', GMAIL_USER ? '✓' : '✗');
  console.error('GMAIL_APP_PASSWORD:', GMAIL_APP_PASSWORD ? '✓' : '✗');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Email transporter verification failed:', error.message);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Validate email configuration before attempting to send
  if (!ADMIN_EMAIL || !GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Email configuration missing');
    return res.status(500).json({ 
      error: 'Email service not properly configured. Please contact the administrator.' 
    });
  }

  // Email to admin
  const adminMailOptions = {
    from: GMAIL_USER,
    to: ADMIN_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  // Confirmation email to user
  const userMailOptions = {
    from: GMAIL_USER,
    to: email,
    subject: 'Thank you for contacting Vikoshiya Technologies',
    html: `
      <h2>Thank you for reaching out, ${name}!</h2>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <hr />
      <p><strong>Your message:</strong></p>
      <p>${message}</p>
      <br />
      <p>Best regards,<br/>Vikoshiya Technologies Team</p>
    `,
  };

  try {
    // Send email to admin
    await transporter.sendMail(adminMailOptions);
    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);
    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    console.error('Stack trace:', error.stack);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 