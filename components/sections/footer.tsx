"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter, Mail, ExternalLink, Heart } from "lucide-react"

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        // Animate footer content
        window.gsap.fromTo(
          ".footer-content",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Animate social icons
        window.gsap.fromTo(
          ".social-icon",
          {
            opacity: 0,
            scale: 0,
            rotation: -180,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }

    if (window.gsap && window.ScrollTrigger) {
      initAnimations()
    } else {
      const checkGSAP = setInterval(() => {
        if (window.gsap && window.ScrollTrigger) {
          clearInterval(checkGSAP)
          initAnimations()
        }
      }, 100)

      return () => clearInterval(checkGSAP)
    }
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Curious-nova",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/jayeshbelsare",
      description: "Connect professionally",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/JayeshBel",
      description: "Follow my thoughts",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:jayeshbelsare1@gmail.com",
      description: "Send me a message",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const resources = [
    { name: "Blog", href: "#" },
    { name: "Resume", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Testimonials", href: "#" },
  ]

  return (
    <footer ref={footerRef} className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="footer-content lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Portfolio</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Full Stack Developer & AI Enthusiast crafting tomorrow's solutions with code and intelligence. Always
                  excited to work on innovative projects.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="sm"
                      asChild
                      className="social-icon w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.description}>
                        <Icon className="w-5 h-5" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-content">
              <h4 className="text-lg font-semibold text-foreground mb-4 ">Quick Links</h4>
              <ul className="space-y-2 ">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            {/* <div className="footer-content">
              <h4 className="text-lg font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-1"
                    >
                      {resource.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="footer-content text-sm text-muted-foreground">
              <p className="flex items-center gap-1">
                © 2025 Jayesh Belsare.
              </p>
            </div>

            {/* <div className="footer-content flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Sitemap
              </a>
            </div> */}
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            variant="default"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </Button>
        </div>
      </div>
    </footer>
  )
}
