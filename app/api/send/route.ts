import { Resend } from "resend"
import { NextResponse } from "next/server"

// Initialize Resend with the environment variable
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  // Add debugging to track execution and environment variables
  console.log("Email sending endpoint called")
  console.log("API Key defined:", !!process.env.RESEND_API_KEY)

  try {
    // Parse the request body
    const { name, email, subject, message } = await request.json()

    console.log("Form data received:", { name, email, subject: subject || "(no subject)" })

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Validation failed - missing required fields")
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Some's Website <sudipta@biomolecular.space>", // Update with your verified domain when available
      to: ["somenath@pusan.ac.kr"], // Primary recipient
      subject: subject ? `Website Contact Form: ${subject}` : "New Contact Form Submission from Website",
      replyTo: email,
      bcc:["sudiptasbd@bicpu.edu.in"],
      html: ``,
    })

    console.log("Email sent successfully:", data.id)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    // More detailed error logging
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
