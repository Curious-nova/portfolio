import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center" >
          <a href='#home'  className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            Jayesh Belsare
          </a>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" asChild>
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" asChild className="w-full justify-start">
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>{item.name}</a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}

