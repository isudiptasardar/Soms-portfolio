"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SocialIconGroup } from "@/components/social-icons"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = {
  success?: boolean
  message: string
  details?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setFormStatus(null)

      try {
        console.log("Submitting form data:", formData)

        // Send data to our API route
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        const result = await response.json()
        console.log("API response:", result)

        if (!response.ok) {
          throw new Error(result.error || "Something went wrong. Please try again.")
        }

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Show success message
        setFormStatus({
          success: true,
          message: "Thank you for your message! I will get back to you soon.",
        })
      } catch (error) {
        console.error("Error submitting form:", error)
        setFormStatus({
          success: false,
          message:
            error instanceof Error ? error.message : "There was an error sending your message. Please try again.",
          details: error instanceof Error ? error.stack : undefined,
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData],
  )

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 dark:bg-zinc-700 rounded-full">
                  <Mail className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                  <p className="mt-1">somenath@pusan.ac.kr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 dark:bg-zinc-700 rounded-full">
                  <Phone className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Phone</p>
                  <p className="mt-1">+82 10 3922 6893</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 dark:bg-zinc-700 rounded-full">
                  <MapPin className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Location</p>
                  <p className="mt-1">Busan, South Korea</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                Follow me on academic and professional networks for updates on my latest research and publications.
              </p>

              <SocialIconGroup />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="min-h-[120px] w-full"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {formStatus && (
                <div
                  className={`p-4 rounded-md flex items-start gap-3 ${
                    formStatus.success
                      ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span>{formStatus.message}</span>
                    {formStatus.details && (
                      <details className="mt-2 text-sm">
                        <summary>Technical Details</summary>
                        <pre className="mt-2 whitespace-pre-wrap">{formStatus.details}</pre>
                      </details>
                    )}
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
