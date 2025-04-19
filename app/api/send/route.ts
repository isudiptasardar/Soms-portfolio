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
      from: "Contact Form <sudipta@biomolecular.space>", // Update with your verified domain when available
      to: ["sudipta@pusan.ac.kr", "somenath@pusan.ac.kr"], // Primary recipient
      subject: subject ? `Website Contact Form: ${subject}` : "New Contact Form Submission from Website",
      replyTo: email,
      bcc:["sudiptasbd@bicpu.edu.in"],
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New message from your portfolio website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="color: #777; font-size: 12px; margin-top: 20px;">This email was sent from the contact form on your portfolio website.</p>
        </div>
      `,
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
