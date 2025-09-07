"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        window.gsap.fromTo(
          ".contact-card",
          {
            opacity: 0,
            y: prefersReducedMotion ? 0 : 60,
            scale: prefersReducedMotion ? 1 : 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: prefersReducedMotion ? 0.3 : 0.8,
            ease: "power2.out",
            stagger: prefersReducedMotion ? 0.05 : 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jayeshbelsare1@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      description: "Open to remote opportunities",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-muted/30 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 text-center">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-center">
                I'm always interested in new opportunities and exciting projects. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="contact-card p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-primary font-medium mb-1 text-sm sm:text-base break-all">{info.value}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* <div className="text-center pt-4 contact-card">
              <Button asChild size="lg">
                <a href="mailto:jayeshbelsare1@gmail.com?subject=Project Inquiry&body=Hi Jayesh, I'd like to discuss...">
                  <Mail className="w-4 h-4 mr-2" />
                  Send me an Email
                </a>
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}