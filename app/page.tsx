"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/navigation"

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

export default function HomePage() {
  useEffect(() => {
    const initGSAP = () => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger)

        // Global scroll-triggered animations
        window.gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
          window.gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })
      }
    }

    // Check if GSAP is already loaded
    if (window.gsap && window.ScrollTrigger) {
      initGSAP()
    } else {
      // Wait for GSAP to load
      const checkGSAP = setInterval(() => {
        if (window.gsap && window.ScrollTrigger) {
          clearInterval(checkGSAP)
          initGSAP()
        }
      }, 100)

      return () => clearInterval(checkGSAP)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
