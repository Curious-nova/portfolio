"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Code, Smartphone } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "fullstack" | "ai" | "mobile";
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress";
  isLive: boolean;
  impact: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Email Reply Generator & Browser Extension",
    category: "ai",
    description:
      "Email assistant that generates context-aware replies using Google Gemini API.",
    longDescription:
      "An AI-powered tool that integrates directly into email clients via a browser extension, generating context-aware responses in real-time using the Google Gemini API. Built with Java Spring Boot for backend and React with MUI for frontend.",
    technologies: ["Java", "Spring Boot", "React", "MUI", "Google Gemini API"],
    features: [
      "Browser extension integration",
      "Context-aware AI-generated email replies",
      "Real-time response generation",
      "Seamless integration with email clients",
    ],
    image: "/websiteGeneratedReply.png",
    githubUrl: "https://github.com/Curious-nova/Email-Extension",
    status: "completed",
    isLive: false,
    impact: "Reduced average email response time significantly for users",
  },
  {
    id: 2,
    title: "Indoor Localization Mobile Application",
    category: "mobile",
    description: "Indoor navigation app with high-accuracy room-level positioning.",
    longDescription:
      "A mobile application that determines user location within indoor environments using WiFi RSSI and magnetometer data. Achieved 96% room-level accuracy through a fingerprinting algorithm, tested across multiple floors and locations.",
    technologies: ["Flutter", "Firebase Firestore", "WiFi RSSI", "Magnetometer"],
    features: [
      "Room-level indoor positioning",
      "Fingerprinting algorithm for location detection",
      "Live location visualization",
      "Multi-floor support",
    ],
    image: "/indoorlocalization.jpg",
    githubUrl:
      "https://github.com/AyaanHimani/LetMeLocate-Indoor_Localization_using_Wi-Fi_Magnetometer.git",
    status: "completed",
    isLive: false,
    impact:
      "Enabled accurate indoor navigation for complex multi-floor environments",
  },
  {
    id: 3,
    title: "Course Management System",
    category: "fullstack",
    description:
      "Web platform for managing courses, attendance, assignments, quizzes, and administrative operations.",
    longDescription:
      "A robust MERN stack platform designed to simplify academic workflows for students, faculty, and administrators. Features include role-based authentication, responsive design, attendance tracking, assignment submissions, quiz management, and course overviews. Faculty can manage attendance, create quizzes, and track student performance, while admins oversee academic schedules, finances, and enrollment. Built with a scalable architecture, secure APIs, and MongoDB for handling complex academic data structures.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Zustand",
      "JWT",
      "Cloudinary",
    ],
    features: [
      "Role-based authentication and access control",
      "Responsive, mobile-friendly UI",
      "Attendance, assignment, and quiz management",
      "Dedicated panels for academic, finance, and master admins",
    ],
    image: "/LandingPage.png",
    demoUrl: "https://course-management-sys.netlify.app/",
    githubUrl: "https://github.com/Curious-nova/Course-Management-System.git",
    status: "completed",
    isLive: true,
    impact: "Streamlined academic operations and improved collaboration across roles",
  },
  {
    id: 4,
    title: "Smart Tourist Safety & AI Anomaly Detection System",
    category: "fullstack",
    description:
      "A full-stack platform for real-time tourist tracking, geofencing, and AI-powered anomaly detection and blockchain immutability.",
    longDescription:
      "A comprehensive safety solution for tourists featuring a real-time tracking map, an admin panel for managing users and geofenced zones, and an intelligent anomaly detection system. The backend uses the Google Gemini API to analyze user location history, identify unusual behavior, and flag potential emergencies for immediate investigation.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "React Leaflet",
      "Leaflet-Draw",
      "Tailwind CSS",
      "Google Gemini API",
    ],
    features: [
      "Real-time tourist tracking on a live map",
      "Interactive geofence management (create, view, delete zones)",
      "SOS alert management system for admins",
      "AI-powered anomaly detection based on user location history",
      "Secure admin and user authentication with JWT",
    ],
    image: "/travel-saathi-dashboard.png",
    githubUrl: "https://github.com/Ompatel28102004/travel_saathi",
    status: "completed",
    isLive: false,
    impact:
      "Enhances tourist safety through proactive, AI-driven monitoring, enabling authorities to respond to potential incidents before they escalate.",
  },
];

const categoryIcons: Record<Project["category"], React.ComponentType<any>> = {
  fullstack: Code,
  ai: Brain,
  mobile: Smartphone,
};

const categoryColors: Record<Project["category"], string> = {
  fullstack: "bg-primary/10 text-primary border-primary/20",
  ai: "bg-secondary/10 text-secondary border-secondary/20",
  mobile: "bg-accent/10 text-accent border-accent/20",
};

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  // prefixed with _ to indicate the state value is intentionally unused (avoids lint warning)
  const [_selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["all", "fullstack", "ai", "mobile"] as const;
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const initAnimations = () => {
      const w = window as any;
      if (w.gsap && w.ScrollTrigger) {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        // Animate project cards
        w.gsap.fromTo(
          ".project-card",
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
          }
        );

        // Animate filter buttons
        w.gsap.fromTo(
          ".filter-button",
          {
            opacity: 0,
            x: prefersReducedMotion ? 0 : -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: prefersReducedMotion ? 0.3 : 0.6,
            ease: "power2.out",
            stagger: prefersReducedMotion ? 0.02 : 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    };

    const w = window as any;
    if (w.gsap && w.ScrollTrigger) {
      initAnimations();
      return;
    }

    const checkGSAP = setInterval(() => {
      const ww = window as any;
      if (ww.gsap && ww.ScrollTrigger) {
        clearInterval(checkGSAP);
        initAnimations();
      }
    }, 100);

    return () => clearInterval(checkGSAP);
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-muted/30 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions combining full-stack development
            with cutting-edge AI technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-4 sm:px-0">
          {categories.map((category) => {
            const Icon =
              category !== "all"
                ? categoryIcons[category as keyof typeof categoryIcons]
                : null;
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="filter-button capitalize flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 min-h-[40px]"
              >
                {Icon && <Icon className="w-3 sm:w-4 h-3 sm:h-4" />}
                {category}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const CategoryIcon = categoryIcons[project.category];
            return (
              <Card
                key={project.id}
                className="project-card group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    // If your images are remote, configure next.config.js image domains and remove unoptimized
                    unoptimized
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <Badge className={categoryColors[project.category]}>
                      <CategoryIcon className="w-3 h-3 mr-1" />
                      <span className="text-xs">{project.category.toUpperCase()}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <Badge
                      variant={project.isLive ? "default" : project.status === "completed" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {project.isLive ? "Live" : project.status === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs sm:text-sm text-primary font-medium">
                      {project.impact}
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                      {project.isLive && project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button size="sm" variant="ghost" className="p-2 min-h-[40px] min-w-[40px]">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button size="sm" variant="ghost" className="p-2 min-h-[40px] min-w-[40px]">
                            <Github className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Curious-nova" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="group bg-transparent min-h-[48px]">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
