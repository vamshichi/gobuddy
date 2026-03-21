import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"GoBuddy Holidays Website" <${process.env.EMAIL_USER}>`,
      to: "support@gobuddyholidays.com",
      subject: "New Contact Form Message",
      html: `
        <h2>Contact Form Message</h2>

        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Destination:</b> ${data.destination}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false })
  }
}