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
      html: `<div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 1.5rem; width: 100%; box-sizing: border-box;">
  <!-- Header with gradient accent - responsive padding -->
  <div style="position: relative; padding-bottom: 1.5rem; margin-bottom: 2rem;">
    <div style="height: 6px; background: linear-gradient(90deg, #3a7bd5, #00d2ff); border-radius: 3px; margin-bottom: 1.5rem;"></div>
    <h1 style="font-size: 1.75rem; font-weight: 700; margin: 0; letter-spacing: -0.02em; color: #1a1a1a;">New Message</h1>
    <p style="color: #6b7280; margin: 0.5rem 0 0 0; font-size: 0.95rem;">From your portfolio website</p>
  </div>
  
  <!-- Sender Information with responsive layout that changes for mobile -->
  <div style="margin-bottom: 2rem; position: relative;">
    <!-- Desktop: Two-column layout (contact info + subject) -->
    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem;">
      <!-- Contact info container (left side on desktop) -->
      <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 250px;">
        <div style="width: 40px; height: 40px; min-width: 40px; border-radius: 50%; background: linear-gradient(135deg, #00d2ff, #3a7bd5); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 1.25rem;">
          ${name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 style="margin: 0; font-weight: 600; font-size: 1.2rem; color: #1a1a1a; word-break: break-word;">${name}</h2>
          <p style="margin: 0; font-size: 0.9rem; color: #6b7280; word-break: break-word; overflow-wrap: break-word;">${email}</p>
        </div>
      </div>
      
      <!-- Subject container (right side on desktop, below on mobile) -->
      ${subject ? `
      <div style="@media screen and (min-width: 600px) { text-align: right; } @media screen and (max-width: 599px) { margin-top: 0.5rem; padding-left: 53px; } display: flex; justify-content: flex-end; align-items: center; flex: 0 0 auto;">
        <span style="display: inline-block; background-color: #f3f4f6; color: #4b5563; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.85rem; font-weight: 500; max-width: 100%; overflow-wrap: break-word; word-break: break-word;">${subject}</span>
      </div>
      ` : ""}
    </div>
    
    <!-- Mobile-only subject placement - will be hidden on desktop and shown on mobile -->
    ${subject ? `
    <style>
      @media screen and (min-width: 600px) {
        .mobile-subject { display: none !important; }
      }
      @media screen and (max-width: 599px) {
        .desktop-subject { display: none !important; }
      }
    </style>
    <div class="mobile-subject" style="margin-top: 0.75rem; padding-left: 53px; display: none;">
      <span style="display: inline-block; background-color: #f3f4f6; color: #4b5563; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.85rem; font-weight: 500; max-width: 100%; overflow-wrap: break-word; word-break: break-word;">${subject}</span>
    </div>
    <div class="desktop-subject" style="display: none;">
      ${subject}
    </div>
    ` : ""}
  </div>

  <!-- Message Section with improved responsive layout -->
  <div style="margin-bottom: 2rem; position: relative; display: flex;">
    <div style="min-width: 4px; width: 4px; background: linear-gradient(180deg, #3a7bd5, #00d2ff); border-radius: 2px; margin-right: 1.25rem;"></div>
    <div style="flex: 1; width: 100%;">
      <p style="font-weight: 600; margin: 0 0 1rem 0; color: #1a1a1a; letter-spacing: -0.01em; font-size: 1.1rem;">Message</p>
      <div style="font-size: 1rem; line-height: 1.65; color: #1f2937; white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word;">
        ${message.replace(/\n/g, "<br>")}
      </div>
    </div>
  </div>
  
  <!-- Call to action - mobile optimized -->
  <div style="margin-top: 2.5rem; margin-bottom: 1.5rem; text-align: center;">
    <a href="mailto:${email}" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(90deg, #3a7bd5, #00d2ff); color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 500; letter-spacing: 0.01em; width: auto; max-width: 100%; word-break: break-word;">Reply to ${name}</a>
  </div>
  
  <!-- Footer with timestamp - improved for small screens -->
  <div style="text-align: center; margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #eaeaea;">
    <p style="color: #6b7280; font-size: 0.85rem; margin: 0; word-break: break-word;">Received on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
  </div>
</div>

<!-- Responsive styles for different devices -->
<style type="text/css">
  /* Since email clients have limited CSS support, we're using a hybrid approach with inline and embedded styles */
  @media screen and (max-width: 599px) {
    .subject-container {
      justify-content: flex-start !important;
      margin-top: 0.75rem !important;
      padding-left: 53px !important;
    }
    .desktop-subject {
      display: none !important;
    }
    .mobile-subject {
      display: block !important;
    }
  }
  
  @media screen and (min-width: 600px) {
    .subject-container {
      justify-content: flex-end !important;
    }
    .desktop-subject {
      display: block !important;
    }
    .mobile-subject {
      display: none !important;
    }
  }
</style>`,
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
