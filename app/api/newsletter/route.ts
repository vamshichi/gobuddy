import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

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
      from: `"GoBuddy Holidays" <${process.env.EMAIL_USER}>`,
      to: "support@gobuddyholidays.com",
      subject: "New Newsletter Subscription",
      html: `
        <h2>Newsletter Subscription</h2>
        <p><b>Email:</b> ${email}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false })
  }
}