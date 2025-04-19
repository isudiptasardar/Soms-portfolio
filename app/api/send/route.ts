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
      html: `<div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 2rem; color: #333; background-color: #fff;">
  <!-- Light/Dark Mode Compatible Container -->
  <div style="background-color: #ffffff; color: #1a1a1a; border-radius: 0.75rem; padding: 2rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); margin-bottom: 1.5rem; overflow: hidden; border: 1px solid #eaeaea;">
    <!-- Header Section -->
    <div style="margin-bottom: 1.5rem; border-bottom: 1px solid #eaeaea; padding-bottom: 1rem;">
      <h2 style="font-size: 1.25rem; font-weight: 600; margin: 0; letter-spacing: -0.01em;">New Contact Inquiry</h2>
    </div>
    
    <!-- Contact Info Section -->
    <div style="margin-bottom: 1.5rem;">
      <p style="margin: 0.5rem 0; line-height: 1.5;">
        <span style="font-weight: 500; color: #555;">From:</span> 
        <span style="display: inline-block; margin-left: 0.25rem;">${name}</span>
      </p>
      <p style="margin: 0.5rem 0; line-height: 1.5;">
        <span style="font-weight: 500; color: #555;">Email:</span>
        <span style="display: inline-block; margin-left: 0.25rem;">${email}</span>
      </p>
      ${subject ? `<p style="margin: 0.5rem 0; line-height: 1.5;">
        <span style="font-weight: 500; color: #555;">Subject:</span>
        <span style="display: inline-block; margin-left: 0.25rem;">${subject}</span>
      </p>` : ""}
    </div>
    
    <!-- Message Section -->
    <div style="margin-bottom: 1.5rem;">
      <p style="font-weight: 500; color: #555; margin: 0 0 0.5rem 0;">Message:</p>
      <div style="background-color: #f8f9fa; border-radius: 0.5rem; padding: 1.25rem; font-size: 0.95rem; line-height: 1.6; white-space: pre-wrap; word-break: break-word;">
        ${message.replace(/\n/g, "<br>")}
      </div>
    </div>
  </div>
  
  <!-- Footer Section -->
  <div style="text-align: center; font-size: 0.8rem; color: #6b7280; padding-top: 0.5rem;">
    <p style="margin: 0;">This message was sent from your portfolio website contact form</p>
    <p style="margin: 0.25rem 0 0 0;">•</p>
    <p style="margin: 0.25rem 0 0 0;">${new Date().toLocaleDateString()}</p>
  </div>
</div>`,
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
