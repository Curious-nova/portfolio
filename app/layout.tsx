import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/hooks/use-theme"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portfolio | Full Stack + AI Developer",
  description:
    "Crafting Tomorrow's Solutions with Code and Intelligence - Portfolio of a Full Stack Developer with AI expertise",
  generator: "v0.app",
  keywords: ["Full Stack Developer", "AI Developer", "Portfolio", "React", "Next.js", "Machine Learning"],
  authors: [{ name: "Portfolio Developer" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" async></script>
        <style>{`
          html {
            font-family: var(--font-dm-sans);
            --font-sans: var(--font-dm-sans);
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </NextThemesProvider>
      </body>
    </html>
  )
}
