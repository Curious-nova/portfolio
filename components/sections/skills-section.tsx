"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Brain, Cloud, Server, GitBranch, Terminal, Database } from "lucide-react"

interface SkillCategory {
  id: string
  title: string
  icon: any
  color: string
  bgColor: string
  textColor: string
  tools: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code2,
    color: "primary",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    color: "secondary",
    bgColor: "bg-green-500/10",
    textColor: "text-green-600",
    tools: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.io"],
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: Terminal,
    color: "accent",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    tools: ["JavaScript","C/C++", "Python", "Java", "Bash"],
  },
  {
    id: "database",
    title: "Database & Storage",
    icon: Database,
    color: "muted-foreground",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600",
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: Brain,
    color: "accent",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-600",
    tools: ["Gemini API", "PyTorch", "Hugging Face", "Pandas", "NumPy"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "muted-foreground",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-600",
    tools: ["Vercel", "Netlify"],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    icon: GitBranch,
    color: "muted-foreground",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-600",
    tools: [
      "Git/GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Notion",
    ],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        window.gsap.fromTo(
          ".skill-category-card",
          {
            opacity: 0,
            y: prefersReducedMotion ? 0 : 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: prefersReducedMotion ? 0.3 : 0.6,
            ease: "power2.out",
            stagger: prefersReducedMotion ? 0.05 : 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            },
          },
        )

        window.gsap.fromTo(
          ".tool-badge",
          {
            opacity: 0,
            scale: prefersReducedMotion ? 1 : 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: prefersReducedMotion ? 0.2 : 0.4,
            ease: prefersReducedMotion ? "power2.out" : "back.out(1.2)",
            stagger: prefersReducedMotion ? 0.01 : 0.02,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
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
    <section id="skills" ref={sectionRef} className="py-20 lg:py-32 bg-background animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           Tools I use for my Full stack and AI journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.id}
                className="skill-category-card p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-6 h-6 ${category.textColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="tool-badge px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
