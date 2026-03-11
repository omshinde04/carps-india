import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {

    console.log("📩 Contact API called")

    try {

        // Check ENV loading
        console.log("🔑 EMAIL_PASS ENV:", process.env.EMAIL_PASS ? "✅ Loaded" : "❌ Not Loaded")

        const body = await req.json()
        console.log("📦 Request Body:", body)

        const { name, phone, message } = body

        if (!name || !phone || !message) {
            console.log("❌ Missing form fields")
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            )
        }

        console.log("🔧 Creating SMTP transporter...")

        const transporter = nodemailer.createTransport({
            host: "brandy.hostns.io",
            port: 465,
            secure: true,
            auth: {
                user: "admin@carpsindia.com",
                pass: process.env.EMAIL_PASS
            }
        })

        console.log("📡 Verifying SMTP connection...")

        try {
            await transporter.verify()
            console.log("✅ SMTP connection successful")
        } catch (smtpError) {
            console.error("❌ SMTP verification failed:", smtpError)
            throw smtpError
        }

        console.log("📨 Sending email...")

        const info = await transporter.sendMail({
            from: `"CARPS Website" <admin@carpsindia.com>`,
            to: "admin@carpsindia.com",
            subject: `New Contact Form Message from ${name}`,
            html: `
                <h3>New Contact Inquiry</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Message:</b></p>
                <p>${message}</p>
            `
        })

        console.log("✅ Email sent successfully")
        console.log("📧 Message ID:", info.messageId)

        return NextResponse.json({ success: true })

    } catch (error: any) {

        console.error("❌ MAIL ERROR:", error)

        return NextResponse.json(
            {
                error: "Email failed",
                details: error?.message || "Unknown error"
            },
            { status: 500 }
        )
    }
}