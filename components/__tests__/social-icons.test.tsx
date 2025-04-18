import { render, screen } from "@testing-library/react"
import { SocialIcon, SocialIconGroup } from "../social-icons"

describe("SocialIcon", () => {
  it("renders with correct attributes", () => {
    render(<SocialIcon platform="researchgate" url="https://example.com" />)

    const link = screen.getByRole("link", { name: /ResearchGate/i })
    expect(link).toHaveAttribute("href", "https://example.com")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("renders SVG icon", () => {
    render(<SocialIcon platform="researchgate" url="https://example.com" />)

    // Check that SVG is present
    const svg = document.querySelector("svg")
    expect(svg).toBeInTheDocument()
  })
})

describe("SocialIconGroup", () => {
  it("renders all social icons", () => {
    render(<SocialIconGroup />)

    // Check that all expected icons are present
    expect(screen.getByRole("link", { name: /Google Scholar/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /ResearchGate/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /ORCID/i })).toBeInTheDocument()
  })
})
