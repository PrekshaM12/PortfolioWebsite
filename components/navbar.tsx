"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-techPurple-500">Preksha Mathur</span>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-foreground"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("education")}
                className="text-foreground/80 hover:text-foreground"
              >
                Education
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("experience")}
                className="text-foreground/80 hover:text-foreground"
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="text-foreground/80 hover:text-foreground"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("publications")}
                className="text-foreground/80 hover:text-foreground"
              >
                Publications
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-foreground"
              >
                Contact
              </Button>
            </nav>
            <ModeToggle />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-md p-4 flex flex-col gap-2 animate-in slide-in-from-top">
          <Button variant="ghost" onClick={() => scrollToSection("about")} className="justify-start">
            About
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("education")} className="justify-start">
            Education
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("experience")} className="justify-start">
            Experience
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("projects")} className="justify-start">
            Projects
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("publications")} className="justify-start">
            Publications
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("contact")} className="justify-start">
            Contact
          </Button>
        </div>
      )}
    </header>
  )
}

export default Navbar
