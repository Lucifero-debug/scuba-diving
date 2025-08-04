// /app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      name,
      email,
      phone,
      date,
      persons,
      message,
      packageType,
      activities,
    } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: 'azhankhan8542@gmail.com', // or another destination
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Persons: ${persons}

Package Types: ${packageType?.join(", ") || "N/A"}
Activities: ${activities?.join(", ") || "N/A"}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "Email send failed" }), { status: 500 });
  }
}
