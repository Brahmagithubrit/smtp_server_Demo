const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: process.env.OPEN_port,
  secure: true,
  auth: {
    user: process.env.sender_email,
    pass: process.env.gmail_app_passord,
  },
});

const homeroute = (req, res) => {
  res.send("hello user");
};

const sendmail = async (req, res) => {
  console.log("send mail route executed");

  try {
    // Handle sending the email
    const info = await transporter.sendMail({
      to: process.env.receiver_gmail, // sender address
      from: process.env.sender_gmail, // recipient
      subject: "your subject here ",
      text: "This is a message from mail server of gmail ",
    });

    console.log(info); // Logs the send result for debugging
    res.json(info); // Send the response as JSON
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = {
  homeroute,
  sendmail,
};
