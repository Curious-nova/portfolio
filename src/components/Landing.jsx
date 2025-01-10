import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Landing() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    });
  }, [controls]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id='home' className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-white dark:from-purple-900 dark:to-black px-4 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 }
            }
          },
          particles: {
            color: { value: "#8B5CF6" },
            links: {
              color: "#8B5CF6",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 2,
              straight: false
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } }
          },
          detectRetina: true
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-center mb-8 z-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-purple-800 dark:text-purple-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          {'JayeshBelsare'.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 120
              }}
              className="inline-block"
              style={{
                textShadow: '0 0 10px rgba(139, 92, 246, 0.7), 0 0 20px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)'
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-purple-600 dark:text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full stack developer & ML Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <motion.span animate={controls}><ArrowDown className="ml-2 h-4 w-4" /></motion.span>
            </motion.a>
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Ribbon-like buttons */}
      <div className="absolute right-0 top-1/3 -translate-y-1/3 flex flex-col space-y-4">
        <motion.div
          className="relative overflow-hidden"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHoveredButton('resume')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Button
            asChild
            className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-l-full transition-all duration-300 ${
              hoveredButton === 'resume' ? 'pr-12' : ''
            }`}
          >
            <a href="https://drive.google.com/file/d/1PpG6hAXbQ3wXdQLkPKIbUoU3RfZdmzUr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <motion.div
            className="absolute inset-y-0 right-0 w-8 bg-purple-700"
            initial={{ x: "100%" }}
            animate={{ x: hoveredButton === 'resume' ? 0 : "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <div className="absolute right-0 top-2/3 -translate-y-2/3 flex flex-col space-y-4">
        <motion.div
          className="relative overflow-hidden"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.4, duration: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHoveredButton('contact')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Button
            asChild
            className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-l-full transition-all duration-300 ${
              hoveredButton === 'contact' ? 'pr-12' : ''
            }`}
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
          <motion.div
            className="absolute inset-y-0 right-0 w-8 bg-purple-700"
            initial={{ x: "100%" }}
            animate={{ x: hoveredButton === 'contact' ? 0 : "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

