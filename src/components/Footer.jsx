import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Button } from '../components/ui/button'

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">&copy; 2025 Jayesh Belsare. All rights reserved.</p>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Curious-nova" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://x.com/Jayesh_Bel" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/jayeshbelsare/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.instagram.com/jayesh_ig_/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

