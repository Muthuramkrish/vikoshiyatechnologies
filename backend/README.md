# Vikoshiya Backend

This is the backend server for handling contact form submissions and sending emails using Nodemailer.

## Features
- Accepts contact form submissions via POST `/api/contact`
- Sends email to admin and confirmation email to user
- Uses Gmail SMTP (with app password)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. The server will run on `http://localhost:5000` by default.

## Environment Variables (Optional)
For production, use environment variables for sensitive data:
- `ADMIN_EMAIL` (default: vikoshiya.muthuramakrishnan7@gmail.com)
- `GMAIL_APP_PASSWORD` (default: as in code)

## Contact Endpoint
- **POST** `/api/contact`
- **Body:** `{ name, email, message }`
- Sends email to admin and confirmation to user. 