import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("Test email endpoint called")
    console.log("API Key defined:", !!process.env.RESEND_API_KEY)

    // Initialize Resend with the environment variable
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send a test email
    const data = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: ["somenath@pusan.ac.kr"],
      subject: "Test Email from Portfolio Website",
      html: "<p>This is a test email to verify the Resend API integration.</p>",
    })

    console.log("Test email sent successfully:", data.id)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending test email:", error)
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
    }

    return NextResponse.json({ error: "Failed to send test email", details: error }, { status: 500 })
  }
}
