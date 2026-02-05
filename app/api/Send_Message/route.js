import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { Name, Email, Message, To } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: To || process.env.RECEIVER_EMAIL,
      subject: `New message from ${Name}`,
      text: `
Name: ${Name}
Email: ${Email}
Message: ${Message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${Name}</p>
        <p><b>Email:</b> ${Email}</p>
        <p><b>Message:</b><br/>${Message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, message: "Email failed to send" }, { status: 500 });
  }
}

