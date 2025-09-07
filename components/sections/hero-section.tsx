"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Brain, Sparkles } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const floatingElementsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initHeroAnimations = () => {
      // Use a safe any cast for window extensions to satisfy TypeScript
      const w = window as any;

      if (w.gsap) {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        const tl = w.gsap.timeline();

        // Initial state - hide all elements
        w.gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 30,
        });

        w.gsap.set(floatingElementsRef.current?.children || [], {
          opacity: 0,
          scale: prefersReducedMotion ? 1 : 0.8,
        });

        // Animate in sequence with reduced motion support
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.3 : 1,
          ease: "power2.out",
        })
          .to(
            subtitleRef.current,
            {
              opacity: 1,
              y: 0,
              duration: prefersReducedMotion ? 0.3 : 0.8,
              ease: "power2.out",
            },
            prefersReducedMotion ? "-=0.1" : "-=0.6"
          )
          .to(
            ctaRef.current,
            {
              opacity: 1,
              y: 0,
              duration: prefersReducedMotion ? 0.3 : 0.6,
              ease: "power2.out",
            },
            prefersReducedMotion ? "-=0.1" : "-=0.4"
          )
          .to(
            floatingElementsRef.current?.children || [],
            {
              opacity: 1,
              scale: 1,
              duration: prefersReducedMotion ? 0.3 : 0.6,
              ease: "power2.out",
              stagger: prefersReducedMotion ? 0.05 : 0.1,
            },
            prefersReducedMotion ? "-=0.1" : "-=0.3"
          );

        if (!prefersReducedMotion) {
          // Only gentle floating animation for decorative elements
          w.gsap.to(floatingElementsRef.current?.children || [], {
            y: -10,
            duration: 4,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.8,
          });
        }
      }
    };

    // If GSAP/ScrollTrigger are loaded already, initialize; otherwise poll until available
    const w = window as any;
    if (w.gsap && w.ScrollTrigger) {
      initHeroAnimations();
      return;
    }

    const checkGSAP = setInterval(() => {
      const ww = window as any;
      if (ww.gsap && ww.ScrollTrigger) {
        clearInterval(checkGSAP);
        initHeroAnimations();
      }
    }, 100);

    return () => clearInterval(checkGSAP);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full h-screen pt-30 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
      aria-label="Hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(37,99,235,0.03)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-[20%] left-[5%] sm:left-[8%] w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Code className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
        </div>
        <div className="absolute top-[25%] right-[8%] sm:right-[12%] w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center">
          <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
        </div>
        <div className="absolute bottom-[25%] left-[8%] sm:left-[15%] w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center">
          <Sparkles className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
        </div>
        <div className="hidden lg:block absolute top-[50%] right-[10%] w-10 h-10 rounded-full bg-primary/5" />
        <div className="hidden lg:block absolute bottom-[30%] right-[25%] w-8 h-8 rounded-full bg-secondary/5" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center -mt-0">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-tight"
          >
            <span className="block text-foreground mb-2">Hey, {`I'm`}</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
              Jayesh Belsare
            </span>
            {/* <span className="block text-foreground">with Code & Intelligence</span> */}
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            Full Stack Developer with a passion for AI, merging technical
            expertise with creative innovation to build the future of digital
            experiences.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto min-w-[200px] min-h-[56px]"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent w-full sm:w-auto min-w-[200px] min-h-[56px]"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>

          <div className="pt-8 sm:pt-12">
            <button
              onClick={scrollToAbout}
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group min-h-[60px] p-3"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium mb-2">Discover More</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
              </div>
              <ArrowDown className="w-4 h-4 mt-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
