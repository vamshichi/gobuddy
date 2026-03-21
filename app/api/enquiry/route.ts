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

    const mailOptions = {
      from: `"GoBuddy Holidays" <${process.env.EMAIL_USER}>`,
      to: "support@gobuddyholidays.com",
      subject: "New Travel Enquiry",
      html: `
        <h2>New Enquiry</h2>

        <p><b>Name:</b> ${data.name}</p>
        <p><b>City:</b> ${data.city}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>WhatsApp:</b> ${data.whatsapp}</p>
        <p><b>Destination:</b> ${data.destination}</p>
        <p><b>Date of Travel:</b> ${data.dateOfTravel}</p>
        <p><b>No of People:</b> ${data.numberOfPeople}</p>
        <p><b>Vacation Type:</b> ${data.vacationType}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false })
  }
}