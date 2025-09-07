"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Target, Lightbulb } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        // Animate cards on scroll
        window.gsap.fromTo(
          ".about-card",
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
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

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-muted/30 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate developer who bridges the gap between traditional software development and cutting-edge
            artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="about-card">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Full Stack Developer & AI Enthusiast</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With expertise spanning both frontend and backend technologies, I create comprehensive digital solutions
                that leverage the power of artificial intelligence. My journey combines traditional software engineering
                with modern AI capabilities to deliver innovative, scalable applications.
              </p>
              {/* <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React & Next.js</Badge>
                <Badge variant="secondary">Node.js & Python</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Cloud Architecture</Badge>
              </div> */}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            <Card className="about-card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Who I Am</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A creative problem-solver who thrives on turning complex challenges into elegant, user-friendly
                    solutions through code and intelligent systems.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="about-card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">My Mission</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To keep learning, experimenting, and building tools that make everyday tasks easier and open up new possibilities with AI.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="about-card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">My Approach</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I mix logical thinking with creativity, aiming for solutions that work well under the hood and feel natural for people to use.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
