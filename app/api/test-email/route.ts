import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("Test email endpoint called")
    console.log("API Key defined:", !!process.env.RESEND_API_KEY)

    // Initialize Resend with the environment variable
    const resend = new Resend(process.env.RESEND_API_KEY)

    const name = "Sudipta Sardar"
    const email = "sudiptasardarforyou@gmail.com"
    const subject = "Test mail"
    const message = "Hello from Test Mail"
    // Send a test email
    const data = await resend.emails.send({
      from: "Sudipta from Website <sudipta@biomolecular.space>",
      to: ["sudipta@pusan.ac.kr"],
      subject: "Test Email from Portfolio Website",
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Contact Message</title>
  <style>
    @media screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
      }
      .content-block {
        padding: 15px !important;
      }
      .stack-column {
        display: block !important;
        width: 100% !important;
      }
      .stack-column + .stack-column {
        padding-top: 15px !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6f9fc; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.4; color: #4a4a4a; width: 100%;">

  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%; background-color: #f6f9fc; padding: 20px;">
    <tr>
      <td align="center">
      
        <!-- Email Container -->
        <table class="email-container" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          
          <!-- Top Accent Border -->
          <tr>
            <td style="height: 6px; background: linear-gradient(to right, #6366f1, #8b5cf6); line-height: 0;">&nbsp;</td>
          </tr>
          
          <!-- Header -->
          <tr>
            <td class="content-block" style="padding: 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #252525;">New Contact Message</h1>
                    <p style="margin: 10px 0 0 0; color: #636363;">From your portfolio website's contact form</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Sender Information -->
          <tr>
            <td class="content-block" style="padding: 0 30px 30px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f9fafb; border-radius: 6px;">
                <tr>
                  <td style="padding: 20px;">
                    <!-- Sender Details -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <!-- Name and Email Row -->
                      <tr>
                        <!-- Avatar/Initial Circle -->
                        <td width="60" style="vertical-align: middle; padding-right: 15px;">
                          <div style="background: linear-gradient(to right, #6366f1, #8b5cf6); width: 50px; height: 50px; border-radius: 50%; text-align: center; line-height: 50px; color: white; font-size: 22px; font-weight: bold;">${name.charAt(0).toUpperCase()}</div>
                        </td>
                        <!-- Name & Email Info -->
                        <td style="vertical-align: middle;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td>
                                <p style="margin: 0; font-size: 18px; font-weight: 600; color: #252525;">${name}</p>
                                <p style="margin: 5px 0 0 0; font-size: 16px; color: #636363;">${email}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- Subject (if provided) -->
                      <tr>
                        <td colspan="2" style="padding-top: 20px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td>
                                <p style="margin: 0; font-size: 14px; color: #636363; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                                <p style="margin: 8px 0 0 0; font-size: 16px; color: #252525; padding: 8px 12px; background-color: rgba(99, 102, 241, 0.1); border-radius: 4px; display: inline-block;">${subject || 'No subject specified'}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Message Content -->
          <tr>
            <td class="content-block" style="padding: 0 30px 30px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #252525;">Message</h2>
                    <div style="padding: 20px; background-color: #f9fafb; border-left: 4px solid #6366f1; border-radius: 0 6px 6px 0; color: #252525; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Reply Button -->
          <tr>
            <td class="content-block" style="padding: 0 30px 30px 30px; text-align: center;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background: linear-gradient(to right, #6366f1, #8b5cf6); border-radius: 6px;">
                          <a href="mailto:${email}" style="display: inline-block; padding: 12px 25px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px;">Reply to ${name}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; border-top: 1px solid #edf2f7; padding: 20px; text-align: center; color: #8a8a8a; font-size: 14px;">
              Message received on ${new Date().toLocaleDateString("en-IN", {timeZone: "Asia/Kolkata"})} at ${new Date().toLocaleTimeString("en-IN", {timeZone: "Asia/Kolkata"})}
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>

</body>
</html>`,
    })

    console.log("Email Sent Successfully", data.data.id)
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
