import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "huskydiniing@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

async function sendMail(subject, receipent, userName) {
  const message = `
      ${userName}
    `;

  await transporter.sendMail({
    from: '"Husky Dining" <huskydiniing@gmail.com>',
    to: receipent,
    subject: subject,
    html: message,
  });
}
