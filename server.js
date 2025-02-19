require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Verify environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ Email credentials are missing. Check your .env file.");
    process.exit(1);
}

// Nodemailer transporter
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter connection
contactEmail.verify((error) => {
  if (error) {
    console.error("❌ Nodemailer Error:", error);
  } else {
    console.log("✅ Ready to Send Emails");
  }
});

// Handle form submission
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const fullName = `${firstName} ${lastName}`;
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send email to yourself
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${fullName}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);  // Log the error for debugging
      res.json({ code: 500, status: "Error: Unable to send email." });
    } else {
      console.log("Message Sent: ", info);  // Log the email info
      res.json({ code: 200, status: "Message Sent" });
    }
  });
  
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
