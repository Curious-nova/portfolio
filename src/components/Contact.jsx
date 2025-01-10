import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Mail } from 'lucide-react'

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jayeshbelsare1@gmail.com'
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">Contact Me</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={handleEmailClick}
            size="lg"
            className="text-lg bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Mail className="mr-2 h-5 w-5" /> Connect Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

