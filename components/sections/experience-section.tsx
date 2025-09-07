"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp, Code2, Brain, Database } from "lucide-react"

interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: "fullstack" | "ai" | "backend" | "frontend" |"research"
  description: string
  technologies: string[]
  achievements: string[]
  icon: any
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
  title: "Full Stack Developer Intern",
  company: "YADS Technologies",
  location: "Ahmedabad, Gujarat",
  period: "June 2024 - July 2024",
  type: "fullstack",
  description: "Worked on data collection and organization pipelines using Python, while also contributing to database optimization and developing dynamic UIs connected to backend APIs.",
  technologies: ["Python", "Node.js", "Express.js", "PostgreSQL", "HTML", "Bootstrap", "JavaScript"],
  achievements: [
    "Automated event content retrieval using Python and keyword-based API queries",
    "Designed optimized PostgreSQL schema with indexing and normalization for scalability",
    "Built dynamic UIs connected to Node.js/Express APIs",
    "Coordinated team efforts to ensure timely delivery of features"
  ],
    icon: Code2,
  },
  {
     id: 2,
  title: "Research Intern",
  company: "Dhirubhai Ambani University",
  location: "Gandhinagar, India",
  period: "May 2025 - July 2025",
  type: "research",
  description: "Developed and simulated an urban mobility model integrating pedestrian movement with intelligent feeder services, using Python-based algorithms and real-world transport data.",
  technologies: ["Python", "SUMO", "TraCI", "NetworkX", "Matplotlib"],
  achievements: [
    "Created a SUMO-based simulation of real-world urban mobility",
    "Implemented an online algorithm to recommend optimal boarding junctions based on real-time demand",
    "Integrated pedestrian movement and intelligent feeder services for improved last-mile connectivity",
    "Demonstrated the potential of shared rides and walking for sustainable urban transport"
  ],
    icon: Brain,
  },

]

const typeColors = {
  fullstack: "bg-primary/10 text-primary border-primary/20",
  ai: "bg-secondary/10 text-secondary border-secondary/20",
  backend: "bg-accent/10 text-accent border-accent/20",
  frontend: "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20",
  research: "bg-purple-100 text-purple-700 border-purple-200", // Added for research type
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        if (!prefersReducedMotion) {
          // Animate timeline line
          window.gsap.fromTo(
            ".timeline-line",
            {
              scaleY: 0,
              transformOrigin: "top center",
            },
            {
              scaleY: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                end: "bottom 40%",
                toggleActions: "play none none reverse",
              },
            },
          )

          // Animate timeline dots
          window.gsap.fromTo(
            ".timeline-dot",
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              stagger: 0.2,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                end: "bottom 40%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }

        // Animate experience cards
        window.gsap.fromTo(
          ".experience-card",
          {
            opacity: 0,
            x: prefersReducedMotion ? 0 : (index: number) => (index % 2 === 0 ? -60 : 60),
            scale: prefersReducedMotion ? 1 : 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: prefersReducedMotion ? 0.5 : 0.8,
            ease: "power2.out",
            stagger: prefersReducedMotion ? 0.1 : 0.3,
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
    <section id="experience" ref={sectionRef} className="py-20 lg:py-32 bg-background animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Experience Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A progressive journey through Full Stack development and AI innovation, building solutions that matter.
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline Line - Desktop Only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent timeline-line hidden lg:block" />

          <div className="absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent timeline-line block lg:hidden" />

          {/* Experience Items */}
          <div className="space-y-8 lg:space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot - Desktop */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10 hidden lg:block" />

                  <div className="timeline-dot absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-background border-2 border-primary rounded-full z-10 block lg:hidden" />

                  {/* Content */}
                  <div className={`lg:flex lg:items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Card */}
                    <div className={`experience-card lg:w-5/12 ${isEven ? "lg:pr-8" : "lg:pl-8"} ml-12 lg:ml-0`}>
                      <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-0">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center ${typeColors[exp.type]} flex-shrink-0`}
                            >
                              <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-tight">
                                {exp.title}
                              </h3>
                              <p className="text-primary font-medium text-sm sm:text-base">{exp.company}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs self-start sm:self-auto">
                            {exp.type.toUpperCase()}
                          </Badge>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                          {exp.description}
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                                  <span className="leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden lg:block lg:w-2/12" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center animate-on-scroll">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">1+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-2">4+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">AI Models Deployed</div>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Users Impacted</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
